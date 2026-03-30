import { useState, useRef, useEffect } from "react";
import {
  Send, Bot, User, BookOpen, Sparkles, Trash2, FileText,
  PenTool, MessageSquare, Target, Mic, ChevronDown, Loader2
} from "lucide-react";

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined)
  ? `${(import.meta.env.VITE_API_BASE as string).replace(/\/$/, "")}/api`
  : "/api";
const AGENT_KEY = "fbf-book-agent-2026";
const AUTH_HEADERS = { "Content-Type": "application/json", "x-book-agent-key": AGENT_KEY };

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const QUICK_PROMPTS = [
  { label: "Chapter 1 outline", icon: FileText, message: "Draft a chapter outline for Chapter 1 of Book 1 (Battles in the Marketplace). Focus on the theme of authority vs. innovation — how African founders collide with regulatory power. Suggest an opening scene and AFOS mapping." },
  { label: "Interview prep", icon: Mic, message: "Generate interview questions for Renee Ngamau (ARC 1 — Authority & Power). I need questions that go beyond business facts and probe the emotional truth of navigating regulatory environments as a Kenyan founder." },
  { label: "AFOS mapping", icon: Target, message: "Map the theme of 'regulatory capture and founder survival' across all 5 AFOS dimensions. How does this show up in Mindset, Emotional, Strategic, Social, and Spiritual dimensions for an African founder?" },
  { label: "Narrative bridge", icon: PenTool, message: "Write a narrative bridge between a chapter about regulatory battles and a chapter about trust erosion. The bridge should feel reflective — a moment where the reader pauses and connects the systemic to the personal." },
  { label: "Book 6 satire", icon: Sparkles, message: "Help me think about Book 6 (The Bonfire of the Founders). How would Tom Wolfe approach writing about the Nairobi startup scene? What fictional character archetypes should we create? What scenes would capture the absurdity and ambition?" },
  { label: "Series consistency", icon: BookOpen, message: "Review the thematic arc across all 6 books. Are there themes that need stronger bridges between volumes? Where might a reader lose the thread of the AFOS framework?" },
];

const DRAFT_TYPES = [
  { id: "chapter-outline", label: "Chapter Outline", desc: "Full chapter structure with scenes and AFOS mapping" },
  { id: "scene-setup", label: "Opening Scene", desc: "Narrative-first opening for a chapter" },
  { id: "interview-questions", label: "Interview Questions", desc: "10 questions mapped to AFOS dimensions" },
  { id: "afos-mapping", label: "AFOS Mapping", desc: "5-dimension analysis of a theme or story" },
  { id: "narrative-bridge", label: "Narrative Bridge", desc: "Transitional passage between sections" },
];

export default function BookAgentTab() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showDraftPanel, setShowDraftPanel] = useState(false);
  const [draftType, setDraftType] = useState("chapter-outline");
  const [draftContext, setDraftContext] = useState("");
  const [draftLoading, setDraftLoading] = useState(false);
  const [draftResult, setDraftResult] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text?: string) {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");

    const userMsg: Message = { role: "user", content: msg, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/book-agent/chat`, {
        method: "POST",
        headers: AUTH_HEADERS,
        body: JSON.stringify({ message: msg, sessionId }),
      });
      const data = await res.json();
      if (data.sessionId) setSessionId(data.sessionId);
      const assistantMsg: Message = { role: "assistant", content: data.response || data.error || "No response", timestamp: new Date() };
      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error. Please try again.", timestamp: new Date() }]);
    } finally {
      setLoading(false);
    }
  }

  async function generateDraft() {
    if (!draftContext.trim() || draftLoading) return;
    setDraftLoading(true);
    setDraftResult(null);

    try {
      const res = await fetch(`${API_BASE}/book-agent/draft`, {
        method: "POST",
        headers: AUTH_HEADERS,
        body: JSON.stringify({ type: draftType, context: draftContext }),
      });
      const data = await res.json();
      setDraftResult(data.draft || data.error || "Failed to generate draft.");
    } catch {
      setDraftResult("Connection error. Please try again.");
    } finally {
      setDraftLoading(false);
    }
  }

  function clearSession() {
    if (sessionId) {
      fetch(`${API_BASE}/book-agent/session/${sessionId}`, { method: "DELETE", headers: { "x-book-agent-key": AGENT_KEY } }).catch(() => {});
    }
    setMessages([]);
    setSessionId(null);
    setDraftResult(null);
    setDraftContext("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function formatContent(content: string) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("### ")) return <h4 key={i} className="text-sm font-black mt-3 mb-1">{line.replace("### ", "")}</h4>;
      if (line.startsWith("## ")) return <h3 key={i} className="text-base font-black mt-4 mb-1">{line.replace("## ", "")}</h3>;
      if (line.startsWith("# ")) return <h2 key={i} className="text-lg font-black mt-4 mb-2">{line.replace("# ", "")}</h2>;
      if (line.startsWith("- ")) return <li key={i} className="ml-4 text-xs leading-relaxed">{line.replace("- ", "")}</li>;
      if (line.match(/^\d+\.\s/)) return <li key={i} className="ml-4 text-xs leading-relaxed list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="text-xs font-bold mt-2">{line.replace(/\*\*/g, "")}</p>;
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="text-xs leading-relaxed">{line}</p>;
    });
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
        <div className="px-8 py-8 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Ledgers of Africa</p>
              <h2 className="text-2xl font-black">Book Agent</h2>
            </div>
          </div>
          <p className="text-sm text-white/50 mt-3 max-w-2xl">Your AI collaboration bridge between Mike Macharia and the Mugumo writing team. Ask about series structure, draft chapter outlines, map AFOS dimensions, prep interview questions, or explore narrative approaches.</p>
          <div className="flex gap-2 mt-4">
            <button onClick={() => setShowDraftPanel(false)} className={`text-[10px] font-bold px-4 py-2 rounded-full border transition-colors ${!showDraftPanel ? "bg-white/20 border-white/40 text-white" : "border-white/20 text-white/50 hover:bg-white/10"}`}>
              <MessageSquare className="w-3 h-3 inline mr-1" /> Chat
            </button>
            <button onClick={() => setShowDraftPanel(true)} className={`text-[10px] font-bold px-4 py-2 rounded-full border transition-colors ${showDraftPanel ? "bg-white/20 border-white/40 text-white" : "border-white/20 text-white/50 hover:bg-white/10"}`}>
              <FileText className="w-3 h-3 inline mr-1" /> Draft Generator
            </button>
            {messages.length > 0 && (
              <button onClick={clearSession} className="text-[10px] font-bold px-4 py-2 rounded-full border border-white/20 text-white/50 hover:bg-red-500/20 hover:border-red-400/40 hover:text-red-300 transition-colors ml-auto">
                <Trash2 className="w-3 h-3 inline mr-1" /> Clear Session
              </button>
            )}
          </div>
        </div>
      </div>

      {!showDraftPanel ? (
        <>
          {messages.length === 0 && (
            <div className="space-y-3">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Quick Prompts — Start a Conversation</p>
              <div className="grid md:grid-cols-3 gap-2">
                {QUICK_PROMPTS.map((p, i) => (
                  <button key={i} onClick={() => sendMessage(p.message)} className="rounded-xl border bg-white p-4 text-left hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors group">
                    <div className="flex items-center gap-2 mb-2">
                      <p.icon className="w-4 h-4 text-indigo-500" />
                      <span className="text-xs font-bold group-hover:text-indigo-700">{p.label}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">{p.message}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl border bg-white overflow-hidden">
            {messages.length > 0 && (
              <div className="max-h-[500px] overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-indigo-600" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-xl px-4 py-3 ${msg.role === "user" ? "bg-indigo-600 text-white" : "bg-slate-50 border"}`}>
                      <div className={msg.role === "user" ? "text-xs leading-relaxed" : ""}>
                        {msg.role === "user" ? (
                          <p className="text-xs leading-relaxed">{msg.content}</p>
                        ) : (
                          <div className="text-slate-700">{formatContent(msg.content)}</div>
                        )}
                      </div>
                      <p className={`text-[9px] mt-2 ${msg.role === "user" ? "text-white/50" : "text-muted-foreground"}`}>
                        {msg.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="bg-slate-50 border rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
                        <span className="text-xs text-muted-foreground">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            <div className="border-t p-3">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask the Book Agent anything about the series, chapters, AFOS mapping, narrative strategy..."
                  className="flex-1 resize-none rounded-lg border bg-slate-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 min-h-[44px] max-h-[120px]"
                  rows={1}
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-muted-foreground mt-1.5 text-center">Book Agent has full context of the Ledgers of Africa series, AFOS framework, 18 canon books, 40 episodes, and all 8 case study founders.</p>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-indigo-200 bg-indigo-50/30 p-4">
            <h4 className="text-xs font-bold mb-2 flex items-center gap-1.5"><Bot className="w-3.5 h-3.5 text-indigo-600" /> How the Book Agent Helps</h4>
            <div className="grid md:grid-cols-4 gap-2">
              {[
                { title: "Mike → Agent", desc: "Share vision, review drafts, explore narrative ideas" },
                { title: "Agent → Mugumo", desc: "Structured outlines, AFOS mappings, scene suggestions" },
                { title: "Mugumo → Agent", desc: "Check consistency, cross-reference volumes, interview prep" },
                { title: "Agent → Mike", desc: "Summaries, draft reviews, creative recommendations" },
              ].map((c, i) => (
                <div key={i} className="rounded-lg border bg-white p-3 text-center">
                  <p className="text-[10px] font-bold">{c.title}</p>
                  <p className="text-[9px] text-muted-foreground mt-0.5">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-5">
            <h4 className="text-sm font-bold mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-indigo-600" /> Draft Generator</h4>
            <p className="text-xs text-muted-foreground mb-4">Generate structured writing drafts for the Mugumo team. Select a type, provide context, and the Book Agent will produce a ready-to-use draft.</p>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1.5 block">Draft Type</label>
                <div className="flex gap-2 flex-wrap">
                  {DRAFT_TYPES.map((d) => (
                    <button key={d.id} onClick={() => setDraftType(d.id)} className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-colors ${draftType === d.id ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-muted-foreground border-slate-200 hover:border-indigo-300"}`}>
                      {d.label}
                    </button>
                  ))}
                </div>
                <p className="text-[9px] text-muted-foreground mt-1">{DRAFT_TYPES.find(d => d.id === draftType)?.desc}</p>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-muted-foreground mb-1.5 block">Context / Brief</label>
                <textarea
                  value={draftContext}
                  onChange={(e) => setDraftContext(e.target.value)}
                  placeholder="Describe the chapter, theme, founder story, or scene you want to draft. The more context you provide, the better the output..."
                  className="w-full resize-none rounded-lg border bg-slate-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 min-h-[100px]"
                  rows={4}
                />
              </div>

              <button
                onClick={generateDraft}
                disabled={!draftContext.trim() || draftLoading}
                className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {draftLoading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="w-4 h-4" /> Generate Draft</>
                )}
              </button>
            </div>
          </div>

          {draftResult && (
            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Generated Draft — {DRAFT_TYPES.find(d => d.id === draftType)?.label}
                </h4>
                <button
                  onClick={() => { navigator.clipboard.writeText(draftResult); }}
                  className="text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200 text-muted-foreground hover:bg-slate-50"
                >
                  Copy
                </button>
              </div>
              <div className="rounded-lg border bg-slate-50 p-4 max-h-[500px] overflow-y-auto">
                <div className="text-slate-700">{formatContent(draftResult)}</div>
              </div>
              <p className="text-[9px] text-muted-foreground mt-2 text-center">Send this draft to the Mugumo team for review, refinement, and integration into the manuscript.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
