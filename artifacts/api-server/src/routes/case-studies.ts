import { Router } from "express";
import { db } from "../lib/db.js";
import {
  caseStudiesTable,
  caseStudyFinancialsTable,
  caseStudyTimelineTable,
  caseStudyGovernanceTable,
  caseStudyLessonsTable,
  loanAgreementsTable,
} from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/case-studies", async (_req, res) => {
  try {
    const caseStudies = await db.select().from(caseStudiesTable);
    res.json({ caseStudies, total: caseStudies.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch case studies", details: message });
  }
});

router.get("/case-studies/:id", async (req, res) => {
  try {
    const [study] = await db.select().from(caseStudiesTable).where(eq(caseStudiesTable.id, req.params.id));
    if (!study) { res.status(404).json({ error: "Case study not found" }); return; }

    const financials = await db.select().from(caseStudyFinancialsTable).where(eq(caseStudyFinancialsTable.caseStudyId, req.params.id));
    const timeline = await db.select().from(caseStudyTimelineTable).where(eq(caseStudyTimelineTable.caseStudyId, req.params.id));
    const governance = await db.select().from(caseStudyGovernanceTable).where(eq(caseStudyGovernanceTable.caseStudyId, req.params.id));
    const lessons = await db.select().from(caseStudyLessonsTable).where(eq(caseStudyLessonsTable.caseStudyId, req.params.id));
    const loans = await db.select().from(loanAgreementsTable).where(eq(loanAgreementsTable.caseStudyId, req.params.id));

    res.json({ ...study, financials, timeline, governance, lessons, loans });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch case study", details: message });
  }
});

router.get("/loans", async (_req, res) => {
  try {
    const loans = await db.select().from(loanAgreementsTable);
    res.json({ loans, total: loans.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch loans", details: message });
  }
});

router.get("/loans/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid loan ID" }); return; }
    const [loan] = await db.select().from(loanAgreementsTable).where(eq(loanAgreementsTable.id, id));
    if (!loan) { res.status(404).json({ error: "Loan not found" }); return; }
    res.json(loan);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch loan", details: message });
  }
});

export default router;
