import { Router } from "express";
import { db } from "../lib/db.js";
import { shoppingReceiptsTable, shoppingItemsTable, shoppingBrandsTable } from "../lib/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/shopping/receipts", async (_req, res) => {
  try {
    const receipts = await db.select().from(shoppingReceiptsTable);
    res.json({ receipts, total: receipts.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch receipts", details: message });
  }
});

router.get("/shopping/receipts/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid receipt ID" }); return; }
    const [receipt] = await db.select().from(shoppingReceiptsTable).where(eq(shoppingReceiptsTable.id, id));
    if (!receipt) { res.status(404).json({ error: "Receipt not found" }); return; }

    const items = await db.select().from(shoppingItemsTable).where(eq(shoppingItemsTable.receiptId, id));
    res.json({ ...receipt, items });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch receipt", details: message });
  }
});

router.get("/shopping/brands", async (_req, res) => {
  try {
    const brands = await db.select().from(shoppingBrandsTable);
    res.json({ brands, total: brands.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch brands", details: message });
  }
});

router.get("/shopping/brands/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) { res.status(400).json({ error: "Invalid brand ID" }); return; }
    const [brand] = await db.select().from(shoppingBrandsTable).where(eq(shoppingBrandsTable.id, id));
    if (!brand) { res.status(404).json({ error: "Brand not found" }); return; }
    res.json(brand);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: "Failed to fetch brand", details: message });
  }
});

export default router;
