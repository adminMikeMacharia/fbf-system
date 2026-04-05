import { Router } from "express";
import { db } from "../lib/db.js";
import {
  venturesTable,
  ventureMilestonesTable,
  portfolioInvestmentsTable,
  ventureNotificationsTable,
} from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/ventures", async (_req, res) => {
  try {
    const ventures = await db.select().from(venturesTable);
    res.json({ ventures, total: ventures.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch ventures", details: message });
  }
});

router.get("/ventures/:id", async (req, res) => {
  try {
    const [venture] = await db.select().from(venturesTable).where(eq(venturesTable.id, req.params.id));
    if (!venture) { res.status(404).json({ error: "Venture not found" }); return; }

    const milestones = await db.select().from(ventureMilestonesTable).where(eq(ventureMilestonesTable.ventureId, req.params.id));
    const investments = await db.select().from(portfolioInvestmentsTable).where(eq(portfolioInvestmentsTable.ventureId, req.params.id));
    const notifications = await db.select().from(ventureNotificationsTable).where(eq(ventureNotificationsTable.ventureId, req.params.id));

    res.json({ ...venture, milestones, investments, notifications });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch venture", details: message });
  }
});

router.get("/portfolio", async (_req, res) => {
  try {
    const portfolio = await db.select().from(portfolioInvestmentsTable);
    res.json({ portfolio, total: portfolio.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch portfolio", details: message });
  }
});

router.get("/portfolio/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid portfolio ID" }); return; }
    const [investment] = await db.select().from(portfolioInvestmentsTable).where(eq(portfolioInvestmentsTable.id, id));
    if (!investment) { res.status(404).json({ error: "Portfolio investment not found" }); return; }
    res.json(investment);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch portfolio investment", details: message });
  }
});

router.get("/venture-notifications", async (_req, res) => {
  try {
    const notifications = await db.select().from(ventureNotificationsTable);
    res.json({ notifications, total: notifications.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch notifications", details: message });
  }
});

router.get("/venture-notifications/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid notification ID" }); return; }
    const [notification] = await db.select().from(ventureNotificationsTable).where(eq(ventureNotificationsTable.id, id));
    if (!notification) { res.status(404).json({ error: "Notification not found" }); return; }
    res.json(notification);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch notification", details: message });
  }
});

export default router;
