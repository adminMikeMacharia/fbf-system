import { Router } from "express";
import { db } from "../lib/db.js";
import { organizationsTable, peopleOrganizationsTable, peopleTable, pipelineTargetsTable } from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/organizations", async (_req, res) => {
  try {
    const organizations = await db.select().from(organizationsTable);
    res.json({ organizations, total: organizations.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch organizations", details: message });
  }
});

router.get("/organizations/:id", async (req, res) => {
  try {
    const [org] = await db.select().from(organizationsTable).where(eq(organizationsTable.id, req.params.id));
    if (!org) { res.status(404).json({ error: "Organization not found" }); return; }

    const members = await db
      .select({ personId: peopleOrganizationsTable.personId, role: peopleOrganizationsTable.role, personName: peopleTable.fullName })
      .from(peopleOrganizationsTable)
      .innerJoin(peopleTable, eq(peopleOrganizationsTable.personId, peopleTable.id))
      .where(eq(peopleOrganizationsTable.organizationId, req.params.id));

    const pipelineEntries = await db
      .select()
      .from(pipelineTargetsTable)
      .where(eq(pipelineTargetsTable.organizationId, req.params.id));

    res.json({ ...org, members, pipelineEntries });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch organization", details: message });
  }
});

export default router;
