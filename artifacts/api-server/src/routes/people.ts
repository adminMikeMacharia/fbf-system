import { Router } from "express";
import { db } from "../lib/db.js";
import { peopleTable, peopleOrganizationsTable, organizationsTable, episodeFoundersTable } from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/people", async (_req, res) => {
  try {
    const people = await db.select().from(peopleTable);
    res.json({ people, total: people.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch people", details: message });
  }
});

router.get("/people/:id", async (req, res) => {
  try {
    const [person] = await db.select().from(peopleTable).where(eq(peopleTable.id, req.params.id));
    if (!person) { res.status(404).json({ error: "Person not found" }); return; }

    const orgs = await db
      .select({ organizationId: peopleOrganizationsTable.organizationId, role: peopleOrganizationsTable.role, orgName: organizationsTable.name })
      .from(peopleOrganizationsTable)
      .innerJoin(organizationsTable, eq(peopleOrganizationsTable.organizationId, organizationsTable.id))
      .where(eq(peopleOrganizationsTable.personId, req.params.id));

    const episodes = await db
      .select()
      .from(episodeFoundersTable)
      .where(eq(episodeFoundersTable.personId, req.params.id));

    res.json({ ...person, organizations: orgs, episodes });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch person", details: message });
  }
});

export default router;
