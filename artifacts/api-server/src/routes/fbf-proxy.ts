import { Router } from "express";

const router = Router();

const FBF_BASE = "https://foundersbattlefield.org/api";
const CACHE_TTL = 5 * 60 * 1000;

interface CacheEntry {
  data: unknown;
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();

function getCached(key: string): unknown | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function setCache(key: string, data: unknown) {
  cache.set(key, { data, timestamp: Date.now() });
}

async function proxyFBF(endpoint: string): Promise<unknown> {
  const cached = getCached(endpoint);
  if (cached) return cached;

  const resp = await fetch(`${FBF_BASE}${endpoint}`, {
    signal: AbortSignal.timeout(15000),
    headers: { "Accept": "application/json" },
  });

  if (!resp.ok) {
    throw new Error(`FBF API returned ${resp.status}`);
  }

  const data = await resp.json();
  setCache(endpoint, data);
  return data;
}

router.get("/fbf-proxy/platform-stats", async (_req, res) => {
  try {
    const data = await proxyFBF("/platform-stats");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch platform stats", details: message });
  }
});

router.get("/fbf-proxy/events", async (_req, res) => {
  try {
    const data = await proxyFBF("/arena/events");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch events", details: message });
  }
});

router.get("/fbf-proxy/episodes", async (_req, res) => {
  try {
    const data = await proxyFBF("/episodes");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch episodes", details: message });
  }
});

router.get("/fbf-proxy/social-analytics", async (_req, res) => {
  try {
    const data = await proxyFBF("/social-media/comprehensive-analytics");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch social analytics", details: message });
  }
});

router.get("/fbf-proxy/industries", async (_req, res) => {
  try {
    const data = await proxyFBF("/arena/industries");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch industries", details: message });
  }
});

router.get("/fbf-proxy/fbx-engagement", async (_req, res) => {
  try {
    const data = await proxyFBF("/fbx/engagement/teaser");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch FBX engagement", details: message });
  }
});

router.get("/fbf-proxy/partners", async (_req, res) => {
  try {
    const data = await proxyFBF("/partners/public-list");
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(502).json({ error: "Failed to fetch partners", details: message });
  }
});

export default router;
