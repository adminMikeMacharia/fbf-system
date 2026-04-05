import { Router } from "express";
import { db } from "../lib/db.js";
import { episodesTable, episodeFoundersTable, transcriptsTable, arcsTable } from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/arcs", async (_req, res) => {
  try {
    const arcs = await db.select().from(arcsTable);
    res.json({ arcs, total: arcs.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch arcs", details: message });
  }
});

router.get("/episodes", async (_req, res) => {
  try {
    const episodes = await db.select().from(episodesTable);
    res.json({ episodes, total: episodes.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch episodes", details: message });
  }
});

router.get("/episodes/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid episode ID" }); return; }

    const [episode] = await db.select().from(episodesTable).where(eq(episodesTable.id, id));
    if (!episode) { res.status(404).json({ error: "Episode not found" }); return; }

    const founders = await db.select().from(episodeFoundersTable).where(eq(episodeFoundersTable.episodeId, id));
    const transcripts = await db.select().from(transcriptsTable).where(eq(transcriptsTable.episodeId, id));

    res.json({ ...episode, founders, transcripts });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch episode", details: message });
  }
});

router.get("/arcs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid arc ID" }); return; }
    const [arc] = await db.select().from(arcsTable).where(eq(arcsTable.id, id));
    if (!arc) { res.status(404).json({ error: "Arc not found" }); return; }
    res.json(arc);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch arc", details: message });
  }
});

router.get("/transcripts", async (_req, res) => {
  try {
    const transcripts = await db.select().from(transcriptsTable);
    res.json({ transcripts, total: transcripts.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch transcripts", details: message });
  }
});

router.get("/transcripts/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid transcript ID" }); return; }
    const [transcript] = await db.select().from(transcriptsTable).where(eq(transcriptsTable.id, id));
    if (!transcript) { res.status(404).json({ error: "Transcript not found" }); return; }
    res.json(transcript);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch transcript", details: message });
  }
});

export default router;
