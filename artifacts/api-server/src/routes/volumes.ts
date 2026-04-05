import { Router } from "express";
import { db } from "../lib/db.js";
import { volumesTable, booksTable, columnsTable } from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/volumes", async (_req, res) => {
  try {
    const volumes = await db.select().from(volumesTable);
    res.json({ volumes, total: volumes.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch volumes", details: message });
  }
});

router.get("/volumes/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid volume ID" }); return; }
    const [volume] = await db.select().from(volumesTable).where(eq(volumesTable.id, id));
    if (!volume) { res.status(404).json({ error: "Volume not found" }); return; }
    res.json(volume);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch volume", details: message });
  }
});

router.get("/books", async (_req, res) => {
  try {
    const books = await db.select().from(booksTable);
    res.json({ books, total: books.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch books", details: message });
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid book ID" }); return; }
    const [book] = await db.select().from(booksTable).where(eq(booksTable.id, id));
    if (!book) { res.status(404).json({ error: "Book not found" }); return; }
    res.json(book);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch book", details: message });
  }
});

router.get("/columns", async (_req, res) => {
  try {
    const cols = await db.select().from(columnsTable);
    res.json({ columns: cols, total: cols.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch columns", details: message });
  }
});

router.get("/columns/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid column ID" }); return; }
    const [col] = await db.select().from(columnsTable).where(eq(columnsTable.id, id));
    if (!col) { res.status(404).json({ error: "Column not found" }); return; }
    res.json(col);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch column", details: message });
  }
});

export default router;
