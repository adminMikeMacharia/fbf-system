import { Router, type Request, type Response, type NextFunction } from "express";
import { db } from "../lib/db.js";
import { sponsorshipInquiriesTable } from "../lib/schema.js";
import { desc, eq } from "drizzle-orm";
import crypto from "crypto";

const router = Router();

const SPONSORSHIP_ADMIN_PIN = process.env.SPONSORSHIP_ADMIN_PIN;
if (!SPONSORSHIP_ADMIN_PIN) {
  console.warn("[sponsorship] SPONSORSHIP_ADMIN_PIN not set — admin endpoints will reject all requests");
}

function sponsorshipAdminAuth(req: Request, res: Response, next: NextFunction): void {
  if (!SPONSORSHIP_ADMIN_PIN) {
    res.status(503).json({ error: "Admin PIN not configured. Set SPONSORSHIP_ADMIN_PIN environment variable." });
    return;
  }
  const pin = req.headers["x-admin-pin"] as string | undefined;
  if (!pin) {
    res.status(401).json({ error: "Missing X-Admin-Pin header" });
    return;
  }
  const expected = Buffer.from(crypto.createHash("sha256").update(SPONSORSHIP_ADMIN_PIN).digest("hex"));
  const actual = Buffer.from(crypto.createHash("sha256").update(pin).digest("hex"));
  if (expected.length !== actual.length || !crypto.timingSafeEqual(expected, actual)) {
    res.status(403).json({ error: "Invalid admin PIN" });
    return;
  }
  next();
}

router.post("/sponsorship/admin/verify-pin", (req, res) => {
  if (!SPONSORSHIP_ADMIN_PIN) {
    res.status(503).json({ error: "Admin PIN not configured" });
    return;
  }
  const { pin } = req.body;
  if (!pin) {
    res.status(400).json({ error: "PIN is required" });
    return;
  }
  const expected = Buffer.from(crypto.createHash("sha256").update(SPONSORSHIP_ADMIN_PIN).digest("hex"));
  const actual = Buffer.from(crypto.createHash("sha256").update(String(pin)).digest("hex"));
  if (expected.length === actual.length && crypto.timingSafeEqual(expected, actual)) {
    res.json({ authenticated: true });
  } else {
    res.status(403).json({ error: "Invalid PIN", authenticated: false });
  }
});

router.post("/sponsorship/inquiries", async (req, res) => {
  try {
    const { companyName, contactName, email, phone, relationshipType, preferredTier, interestedProducts, message, budget } = req.body;

    if (!companyName?.trim() || !contactName?.trim() || !email?.trim()) {
      res.status(400).json({ error: "companyName, contactName, and email are required" });
      return;
    }

    const id = `spon_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;

    const [inquiry] = await db.insert(sponsorshipInquiriesTable).values({
      id,
      companyName: companyName.trim(),
      contactName: contactName.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      relationshipType: relationshipType || null,
      preferredTier: preferredTier || null,
      interestedProducts: interestedProducts || [],
      message: message?.trim() || null,
      budget: budget?.trim() || null,
      status: "new",
      source: "sponsorship-hub",
      syncedToFbf: "pending",
    }).returning();

    try {
      const fbfPayload = {
        fullName: contactName.trim(),
        email: email.trim(),
        phone: phone?.trim() || "",
        company: companyName.trim(),
        message: `[Sponsorship Hub Inquiry] Tier: ${preferredTier || "Not specified"}. Products: ${(interestedProducts || []).join(", ") || "None specified"}. Budget: ${budget || "Not specified"}. ${message || ""}`.trim(),
        source: "sponsorship-hub",
      };

      await fetch("https://foundersbattlefield.org/api/form-submissions/sponsorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fbfPayload),
        signal: AbortSignal.timeout(10000),
      });

      await db.update(sponsorshipInquiriesTable)
        .set({ syncedToFbf: "synced", updatedAt: new Date() })
        .where(eq(sponsorshipInquiriesTable.id, id));
    } catch {
      // fbf.org sync failure is non-critical — inquiry is saved locally
    }

    res.status(201).json({ id: inquiry.id, status: "created" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[sponsorship] inquiry error:", message);
    res.status(500).json({ error: "Failed to create inquiry" });
  }
});

router.get("/sponsorship/inquiries", sponsorshipAdminAuth, async (_req, res) => {
  try {
    const inquiries = await db.select({
      id: sponsorshipInquiriesTable.id,
      companyName: sponsorshipInquiriesTable.companyName,
      contactName: sponsorshipInquiriesTable.contactName,
      preferredTier: sponsorshipInquiriesTable.preferredTier,
      interestedProducts: sponsorshipInquiriesTable.interestedProducts,
      status: sponsorshipInquiriesTable.status,
      syncedToFbf: sponsorshipInquiriesTable.syncedToFbf,
      createdAt: sponsorshipInquiriesTable.createdAt,
    }).from(sponsorshipInquiriesTable).orderBy(desc(sponsorshipInquiriesTable.createdAt));
    res.json({ inquiries, total: inquiries.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch inquiries", details: message });
  }
});

const CANONICAL_SERVICES = [
  { id: "arena-conversations", name: "Arena Conversations", shortName: "Conversations", category: "existing", description: "Core flagship conversation series. Weekly deep-dive discussions with African founders and ecosystem players.", frequency: "Weekly (30 episodes/year)", channels: ["TV47", "Radio47", "YouTube", "Spotify", "Apple Podcasts"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: false } },
  { id: "arena-founder-dj", name: "Arena Founder DJ", shortName: "Founder DJ", category: "existing", description: "Founder-led radio experience with music + discussion on Radio47.", frequency: "Weekly (Friday evenings)", channels: ["Radio47", "Social Media"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: true } },
  { id: "arena-founder-studio-live", name: "Arena Founder Studio Live", shortName: "Studio Live", category: "existing", description: "Live studio TV show with audience. Monthly broadcast on TV47.", frequency: "Monthly", channels: ["TV47", "Radio47", "YouTube", "Social Media"], tierAvailability: { platinum: true, gold: true, silver: false, bronze: false } },
  { id: "arena-live-scope", name: "Arena Live Scope", shortName: "Live Scope", category: "existing", description: "On-ground live event. Monthly in-person gatherings with founders and community.", frequency: "Monthly", channels: ["Live Events", "TV47", "Radio47", "Social Media"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: true } },
  { id: "arena-founder-retreat", name: "Arena Founder Retreat", shortName: "Retreat", category: "existing", description: "Wellness and leadership retreat for founders.", frequency: "Half-yearly", channels: ["Exclusive Events", "Social Media", "Content"], tierAvailability: { platinum: true, gold: true, silver: false, bronze: false } },
  { id: "arena-gala-dinner", name: "The Arena Gala Dinner", shortName: "Gala Dinner", category: "existing", description: "Men & Women in the Arena awards night.", frequency: "Annual", channels: ["Live Events", "TV47", "Social Media", "Press"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: false } },
  { id: "arena-bsc-festival", name: "Arena: Blood, Sweat & Cheers Festival", shortName: "BSC Festival", category: "existing", description: "Large-scale entertainment & founders festival.", frequency: "Annual", channels: ["Live Events", "TV47", "Radio47", "Social Media", "Press"], tierAvailability: { platinum: true, gold: true, silver: false, bronze: false } },
  { id: "founders-kitchen", name: "Founders' Kitchen", shortName: "FK", category: "existing", description: "Culinary entrepreneurship storytelling combining cooking and business narratives.", frequency: "Weekly episodes", channels: ["TV47", "YouTube", "Social Media"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: true } },
  { id: "social-media-digital", name: "Social Media & Digital Amplification", shortName: "Social/Digital", category: "new", description: "Hashtag sponsorships, promoted reels across all platforms.", frequency: "Ongoing", channels: ["YouTube", "Instagram", "Facebook", "TikTok", "X/Twitter", "LinkedIn"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: false } },
  { id: "shorts-branded-reels", name: "Shorts & Branded Reels", shortName: "Shorts/Reels", category: "new", description: "Branded content clips, behind-the-scenes footage.", frequency: "10-15 per episode", channels: ["YouTube Shorts", "Instagram Reels", "TikTok"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: false } },
  { id: "founder-columns", name: "Founder Columns", shortName: "Columns", category: "new", description: "Business Daily column sponsorship.", frequency: "Weekly columns", channels: ["Business Daily", "Print Media", "Digital"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: false } },
  { id: "fbx-brands", name: "FBX & Brands", shortName: "FBX", category: "new", description: "Cross-pollination events, merchandise, community engagement.", frequency: "Ongoing", channels: ["Events", "E-commerce", "Social Media"], tierAvailability: { platinum: true, gold: true, silver: false, bronze: false } },
  { id: "founder-ledgers", name: "Founder Ledgers / Chapters", shortName: "Ledgers", category: "new", description: "Brand storytelling and long-form content sponsorship.", frequency: "Quarterly", channels: ["Digital", "Print", "Video"], tierAvailability: { platinum: true, gold: true, silver: true, bronze: true } },
];

router.get("/sponsorship/service-catalog", (_req, res) => {
  res.json({
    version: "1.0.0",
    lastUpdated: new Date().toISOString(),
    source: "sponsorship-hub (canonical)",
    tiers: {
      platinum: { minServices: 7, startingKES: 5000000, pricingRange: "KES 5M — 15M+ per annum" },
      gold: { minServices: 5, startingKES: 2500000, pricingRange: "KES 2.5M — 7M per annum" },
      silver: { minServices: 3, startingKES: 1000000, pricingRange: "KES 1M — 3M per annum" },
      bronze: { minServices: 1, startingKES: 150000, pricingRange: "KES 150K — 1M per event/series" },
    },
    services: CANONICAL_SERVICES,
  });
});

export default router;
