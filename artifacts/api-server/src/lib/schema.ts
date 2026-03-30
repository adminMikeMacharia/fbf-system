import { pgTable, text, jsonb, timestamp } from "drizzle-orm/pg-core";

export const sponsorshipInquiriesTable = pgTable("sponsorship_inquiries", {
  id: text("id").primaryKey(),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  relationshipType: text("relationship_type"),
  preferredTier: text("preferred_tier"),
  interestedProducts: jsonb("interested_products").$type<string[]>().default([]),
  message: text("message"),
  budget: text("budget"),
  status: text("status").notNull().default("new"),
  source: text("source").notNull().default("sponsorship-hub"),
  syncedToFbf: text("synced_to_fbf").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
