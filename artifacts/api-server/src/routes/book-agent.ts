import { Router, type Request, type Response, type NextFunction } from "express";
import OpenAI from "openai";
import crypto from "crypto";

const router = Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });
const MODEL = process.env.OPENAI_MODEL || "gpt-4o";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface Session {
  id: string;
  messages: ChatMessage[];
  createdAt: number;
  lastAccess: number;
}

const BOOK_AGENT_KEY = process.env.BOOK_AGENT_KEY || "fbf-book-agent-2026";
const MAX_INPUT_LENGTH = 4000;
const MAX_SESSIONS = 50;
const SESSION_TTL_MS = 2 * 60 * 60 * 1000;
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX_REQUESTS = 10;

const sessions = new Map<string, Session>();
const rateLimiter = new Map<string, { count: number; windowStart: number }>();

function uid() {
  return `bsess_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
}

function cleanupSessions() {
  const now = Date.now();
  for (const [id, session] of sessions) {
    if (now - session.lastAccess > SESSION_TTL_MS) sessions.delete(id);
  }
  if (sessions.size > MAX_SESSIONS) {
    const sorted = [...sessions.entries()].sort((a, b) => a[1].lastAccess - b[1].lastAccess);
    sorted.slice(0, sessions.size - MAX_SESSIONS).forEach(([id]) => sessions.delete(id));
  }
}

function bookAgentAuth(req: Request, res: Response, next: NextFunction) {
  const key = req.headers["x-book-agent-key"] as string;
  if (!key || key !== BOOK_AGENT_KEY) { res.status(401).json({ error: "Unauthorized" }); return; }
  next();
}

function rateLimit(req: Request, res: Response, next: NextFunction) {
  const clientId = (req.headers["x-book-agent-key"] as string) || req.ip || "unknown";
  const now = Date.now();
  const entry = rateLimiter.get(clientId);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    rateLimiter.set(clientId, { count: 1, windowStart: now });
    next();
    return;
  }
  if (entry.count >= RATE_MAX_REQUESTS) {
    res.status(429).json({ error: "Too many requests. Please wait before trying again." });
    return;
  }
  entry.count++;
  next();
}

const SERIES_CONTEXT = `SERIES: "Ledgers of Africa — A Founders' Battlefield Series"
6 volumes (5 non-fiction + 1 satirical fiction):
- Book 1: "Battles in the Marketplace" (ARC 1 — Authority & Power) — Status: under-contract, KES 3.35M
- Book 2: "The Weight of the Mask" (ARC 2 — Fear & Survival) — Status: planned
- Book 3: "The Founder's Mirror" (ARC 3 — Identity & Self) — Status: planned
- Book 4: "Empire of Dust" (ARC 4 — Ownership & Control) — Status: planned
- Book 5: "The Long Return" (ARC 5–6 — Systems, Legacy & Renewal) — Status: planned
- Book 6: "The Bonfire of the Founders" (All ARCs — Satirical Fiction) — Status: concept

AUTHOR: Mike Anthony Macharia | NARRATIVE ARCHITECT: Mugumo Munene
EDITORIAL CONSULTANT: Mutahi Mureithi | PROJECT COORDINATOR: Pauline Warui

AFOS FRAMEWORK: The series maps to 6 ARCs across 5 dimensions: Mindset, Emotional, Strategic, Social, Spiritual.

BOOK 1 STRUCTURE: 10 chapters, KES 400K per chapter, M0 discounted to KES 350K
Revenue split: 70% Publisher / 20% Founders / 10% Editorial. Formats: Hardcover + eBook + Audiobook`;

function buildSystemPrompt(): string {
  return `You are the Book Agent for the "Ledgers of Africa — A Founders' Battlefield Series." You serve as the intelligent collaboration bridge between Mike Macharia (the author/founder) and the writing team.

YOUR ROLE: Help coordinate the book writing process, answer questions about the series structure and AFOS framework, suggest narrative approaches, draft chapter outlines and scene setups, and serve as a thought partner.

VOICE & TONE: Professional but warm, deep understanding of African entrepreneurship, literary sensibility, be direct and constructive.

CONTEXT:
${SERIES_CONTEXT}

When asked something, respond with depth and specificity. Reference the series structure and AFOS framework where relevant.`;
}

const VALID_DRAFT_TYPES = ["chapter-outline", "scene-setup", "interview-questions", "afos-mapping", "narrative-bridge"] as const;

router.post("/book-agent/chat", bookAgentAuth, rateLimit, async (req: Request, res: Response) => {
  const { message, sessionId } = req.body;
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    res.status(400).json({ error: "message required" }); return;
  }
  if (message.length > MAX_INPUT_LENGTH) {
    res.status(400).json({ error: `Message too long. Maximum ${MAX_INPUT_LENGTH} characters.` }); return;
  }

  cleanupSessions();

  let session: Session;
  if (sessionId && typeof sessionId === "string" && sessions.has(sessionId)) {
    session = sessions.get(sessionId)!;
    session.lastAccess = Date.now();
  } else {
    const newId = uid();
    session = { id: newId, messages: [], createdAt: Date.now(), lastAccess: Date.now() };
    sessions.set(newId, session);
  }

  session.messages.push({ role: "user", content: message.trim() });

  try {
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...session.messages],
      max_tokens: 4096,
    });

    const reply = completion.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";
    session.messages.push({ role: "assistant", content: reply });
    if (session.messages.length > 40) session.messages.splice(0, session.messages.length - 40);

    res.json({ response: reply, sessionId: session.id });
  } catch (err: unknown) {
    console.error("Book Agent error:", err instanceof Error ? err.message : err);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

router.post("/book-agent/draft", bookAgentAuth, rateLimit, async (req: Request, res: Response) => {
  const { type, context } = req.body;
  if (!type || !VALID_DRAFT_TYPES.includes(type as (typeof VALID_DRAFT_TYPES)[number])) {
    res.status(400).json({ error: `Invalid draft type. Supported: ${VALID_DRAFT_TYPES.join(", ")}` }); return;
  }
  if (!context || typeof context !== "string" || context.trim().length === 0) {
    res.status(400).json({ error: "context required" }); return;
  }

  const draftPrompts: Record<string, string> = {
    "chapter-outline": `Based on the following context, draft a detailed chapter outline for the Ledgers of Africa series. Include: chapter title, opening scene suggestion, 4-6 section beats, AFOS dimension mapping, closing reflection idea, and suggested case study founder.\n\nContext: ${context}`,
    "scene-setup": `Based on the following context, write a compelling opening scene setup (2-3 paragraphs) for a chapter in the Ledgers of Africa series. Use narrative-first storytelling.\n\nContext: ${context}`,
    "interview-questions": `Based on the following context, generate 10 interview questions for a case study founder for the Ledgers of Africa series. Questions should probe emotional truth, not just business facts. Map each to an AFOS dimension.\n\nContext: ${context}`,
    "afos-mapping": `Based on the following founder story or theme, provide a detailed AFOS mapping across all 5 dimensions (Mindset, Emotional, Strategic, Social, Spiritual). For each: the core tension, a narrative question, and a suggested scene approach.\n\nContext: ${context}`,
    "narrative-bridge": `Based on the following context, draft a narrative bridge passage (2-3 paragraphs) that connects two sections or chapters. The bridge should feel reflective, grounding, and forward-looking.\n\nContext: ${context}`,
  };

  try {
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: `You are the Book Agent for "Ledgers of Africa." You are an expert literary collaborator.\n\n${SERIES_CONTEXT}` },
        { role: "user", content: draftPrompts[type] },
      ],
      max_tokens: 4096,
    });

    const draft = completion.choices[0]?.message?.content || "Failed to generate draft.";
    res.json({ draft, type });
  } catch (err: unknown) {
    console.error("Book Agent draft error:", err instanceof Error ? err.message : err);
    res.status(500).json({ error: "Failed to generate draft" });
  }
});

router.delete("/book-agent/session/:sessionId", bookAgentAuth, async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  if (typeof sessionId === "string") sessions.delete(sessionId);
  res.json({ success: true });
});

export default router;
