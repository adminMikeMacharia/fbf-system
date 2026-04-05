import { Router } from "express";
import { db } from "../lib/db.js";
import {
  projectTasksTable,
  projectSubtasksTable,
  costItemsTable,
  partnersTable,
} from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/tasks", async (_req, res) => {
  try {
    const tasks = await db.select().from(projectTasksTable);
    res.json({ tasks, total: tasks.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch tasks", details: message });
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const [task] = await db.select().from(projectTasksTable).where(eq(projectTasksTable.id, req.params.id));
    if (!task) { res.status(404).json({ error: "Task not found" }); return; }

    const subtasks = await db.select().from(projectSubtasksTable).where(eq(projectSubtasksTable.taskId, req.params.id));
    res.json({ ...task, subtasks });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch task", details: message });
  }
});

router.get("/cost-items", async (_req, res) => {
  try {
    const items = await db.select().from(costItemsTable);
    res.json({ items, total: items.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch cost items", details: message });
  }
});

router.get("/cost-items/:id", async (req, res) => {
  try {
    const [item] = await db.select().from(costItemsTable).where(eq(costItemsTable.id, req.params.id));
    if (!item) { res.status(404).json({ error: "Cost item not found" }); return; }
    res.json(item);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch cost item", details: message });
  }
});

router.get("/partners", async (_req, res) => {
  try {
    const partners = await db.select().from(partnersTable);
    res.json({ partners, total: partners.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch partners", details: message });
  }
});

router.get("/partners/:id", async (req, res) => {
  try {
    const [partner] = await db.select().from(partnersTable).where(eq(partnersTable.id, req.params.id));
    if (!partner) { res.status(404).json({ error: "Partner not found" }); return; }
    res.json(partner);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch partner", details: message });
  }
});

export default router;
