-- FBF System — Database Setup
-- Run this once after creating your PostgreSQL database in the FBF Replit

CREATE TABLE IF NOT EXISTS sponsorship_inquiries (
  id                  TEXT PRIMARY KEY,
  company_name        TEXT NOT NULL,
  contact_name        TEXT NOT NULL,
  email               TEXT NOT NULL,
  phone               TEXT,
  relationship_type   TEXT,
  preferred_tier      TEXT,
  interested_products JSONB DEFAULT '[]'::JSONB,
  message             TEXT,
  budget              TEXT,
  status              TEXT NOT NULL DEFAULT 'new',
  source              TEXT NOT NULL DEFAULT 'sponsorship-hub',
  synced_to_fbf       TEXT NOT NULL DEFAULT 'pending',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
