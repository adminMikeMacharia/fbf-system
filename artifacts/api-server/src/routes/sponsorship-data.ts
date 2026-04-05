import { Router } from "express";
import { db } from "../lib/db.js";
import {
  sponsorshipServicesTable,
  sponsorshipTiersTable,
  rateCardItemsTable,
  pipelineTargetsTable,
  podcastTopicsTable,
} from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/sponsorship-services", async (_req, res) => {
  try {
    const services = await db.select().from(sponsorshipServicesTable);
    res.json({ services, total: services.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch sponsorship services", details: message });
  }
});

router.get("/sponsorship-services/:id", async (req, res) => {
  try {
    const [service] = await db.select().from(sponsorshipServicesTable).where(eq(sponsorshipServicesTable.id, req.params.id));
    if (!service) { res.status(404).json({ error: "Service not found" }); return; }

    const rateItems = await db.select().from(rateCardItemsTable).where(eq(rateCardItemsTable.serviceId, req.params.id));
    res.json({ ...service, rateCardItems: rateItems });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch sponsorship service", details: message });
  }
});

router.get("/sponsorship-tiers", async (_req, res) => {
  try {
    const tiers = await db.select().from(sponsorshipTiersTable);
    res.json({ tiers, total: tiers.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch tiers", details: message });
  }
});

router.get("/sponsorship-tiers/:id", async (req, res) => {
  try {
    const [tier] = await db.select().from(sponsorshipTiersTable).where(eq(sponsorshipTiersTable.id, req.params.id));
    if (!tier) { res.status(404).json({ error: "Tier not found" }); return; }
    res.json(tier);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch tier", details: message });
  }
});

router.get("/rate-card", async (_req, res) => {
  try {
    const items = await db.select().from(rateCardItemsTable);
    res.json({ items, total: items.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch rate card", details: message });
  }
});

router.get("/pipeline", async (_req, res) => {
  try {
    const targets = await db.select().from(pipelineTargetsTable);
    res.json({ targets, total: targets.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch pipeline", details: message });
  }
});

router.get("/pipeline/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid pipeline target ID" }); return; }
    const [target] = await db.select().from(pipelineTargetsTable).where(eq(pipelineTargetsTable.id, id));
    if (!target) { res.status(404).json({ error: "Pipeline target not found" }); return; }
    res.json(target);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch pipeline target", details: message });
  }
});

router.get("/rate-card/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid rate card item ID" }); return; }
    const [item] = await db.select().from(rateCardItemsTable).where(eq(rateCardItemsTable.id, id));
    if (!item) { res.status(404).json({ error: "Rate card item not found" }); return; }
    res.json(item);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch rate card item", details: message });
  }
});

router.get("/podcast-topics", async (_req, res) => {
  try {
    const topics = await db.select().from(podcastTopicsTable);
    res.json({ topics, total: topics.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch podcast topics", details: message });
  }
});

export default router;
