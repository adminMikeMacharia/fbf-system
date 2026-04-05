-- FBF Unified Database — Migration Script
-- Preserves existing sponsorship_inquiries table, creates all new tables
-- Run idempotently with CREATE TABLE IF NOT EXISTS

-- ─── Domain 1: People & Organizations ────────────────────────────────────────

CREATE TABLE IF NOT EXISTS people (
  id                TEXT PRIMARY KEY,
  full_name         TEXT NOT NULL,
  email             TEXT,
  phone             TEXT,
  role              TEXT,
  bio               TEXT,
  status            TEXT DEFAULT 'active',
  type              TEXT NOT NULL DEFAULT 'founder',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS people_type_idx ON people (type);

CREATE TABLE IF NOT EXISTS organizations (
  id                TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  type              TEXT NOT NULL DEFAULT 'sponsor',
  industry          TEXT,
  website           TEXT,
  territory         TEXT,
  status            TEXT DEFAULT 'active',
  contact_person    TEXT,
  contact_email     TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS organizations_type_idx ON organizations (type);

CREATE TABLE IF NOT EXISTS people_organizations (
  id                SERIAL PRIMARY KEY,
  person_id         TEXT NOT NULL REFERENCES people(id),
  organization_id   TEXT NOT NULL REFERENCES organizations(id),
  role              TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Domain 2: Content & Episodes (AFOS) ────────────────────────────────────

CREATE TABLE IF NOT EXISTS arcs (
  id                SERIAL PRIMARY KEY,
  number            INTEGER NOT NULL UNIQUE,
  label             TEXT NOT NULL,
  color             TEXT,
  description       TEXT
);

CREATE TABLE IF NOT EXISTS episodes (
  id                SERIAL PRIMARY KEY,
  number            INTEGER NOT NULL UNIQUE,
  title             TEXT NOT NULL,
  arc_id            INTEGER REFERENCES arcs(id),
  arc_theme         TEXT,
  mindset           TEXT,
  emotional         TEXT,
  strategic         TEXT,
  social            TEXT,
  spiritual         TEXT,
  ideal_guest_traits TEXT,
  matched_services  TEXT,
  suggested_book    TEXT,
  case_study        TEXT,
  youtube_url       TEXT,
  spotify_url       TEXT,
  thumbnail_url     TEXT,
  view_count        TEXT,
  is_live           BOOLEAN DEFAULT FALSE,
  site_title        TEXT,
  founders_battlefield_url TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS episodes_arc_id_idx ON episodes (arc_id);

CREATE TABLE IF NOT EXISTS episode_founders (
  id                SERIAL PRIMARY KEY,
  episode_id        INTEGER NOT NULL REFERENCES episodes(id),
  person_id         TEXT REFERENCES people(id),
  founder_name      TEXT NOT NULL,
  role              TEXT NOT NULL DEFAULT 'guest'
);

CREATE TABLE IF NOT EXISTS transcripts (
  id                SERIAL PRIMARY KEY,
  episode_id        INTEGER NOT NULL REFERENCES episodes(id),
  season            INTEGER,
  filename          TEXT,
  preview           TEXT,
  full_content      TEXT
);

CREATE TABLE IF NOT EXISTS volumes (
  id                SERIAL PRIMARY KEY,
  number            INTEGER NOT NULL UNIQUE,
  title             TEXT NOT NULL,
  subtitle          TEXT,
  arc_id            INTEGER REFERENCES arcs(id),
  arc_label         TEXT,
  description       TEXT,
  founder_count     INTEGER,
  episode_range     TEXT,
  page_target       INTEGER,
  cost_target       TEXT,
  status            TEXT DEFAULT 'planned',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS books (
  id                SERIAL PRIMARY KEY,
  title             TEXT NOT NULL,
  author            TEXT NOT NULL,
  description       TEXT,
  afos_connection   TEXT,
  cover_url         TEXT,
  isbn              TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS columns (
  id                SERIAL PRIMARY KEY,
  date              TEXT NOT NULL,
  title             TEXT NOT NULL,
  sort_date         TEXT,
  arc_id            INTEGER REFERENCES arcs(id),
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Domain 3: Sponsorship & Commercial ──────────────────────────────────────

CREATE TABLE IF NOT EXISTS sponsorship_inquiries (
  id                TEXT PRIMARY KEY,
  company_name      TEXT NOT NULL,
  contact_name      TEXT NOT NULL,
  email             TEXT NOT NULL,
  phone             TEXT,
  relationship_type TEXT,
  preferred_tier    TEXT,
  interested_products JSONB DEFAULT '[]'::JSONB,
  message           TEXT,
  budget            TEXT,
  status            TEXT NOT NULL DEFAULT 'new',
  source            TEXT NOT NULL DEFAULT 'sponsorship-hub',
  synced_to_fbf     TEXT NOT NULL DEFAULT 'pending',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sponsorship_services (
  id                TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  short_name        TEXT,
  category          TEXT,
  description       TEXT,
  vision_statement  TEXT,
  channels          JSONB DEFAULT '[]'::JSONB,
  frequency         TEXT,
  key_deliverables  JSONB DEFAULT '[]'::JSONB,
  opportunities     JSONB DEFAULT '[]'::JSONB,
  icon              TEXT,
  color             TEXT,
  tier_availability JSONB DEFAULT '{}'::JSONB,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sponsorship_tiers (
  id                TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  color             TEXT,
  bg_color          TEXT,
  border_color      TEXT,
  min_services      INTEGER,
  description       TEXT,
  highlights        JSONB DEFAULT '[]'::JSONB,
  channel_coverage  JSONB DEFAULT '[]'::JSONB,
  pricing_note      TEXT,
  starting_kes      INTEGER,
  pricing_range     TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS rate_card_items (
  id                SERIAL PRIMARY KEY,
  service_id        TEXT REFERENCES sponsorship_services(id),
  service_name      TEXT,
  name              TEXT NOT NULL,
  platinum          BOOLEAN DEFAULT FALSE,
  gold              BOOLEAN DEFAULT FALSE,
  silver            BOOLEAN DEFAULT FALSE,
  bronze            BOOLEAN DEFAULT FALSE,
  unit              TEXT,
  cost_description  TEXT,
  estimated_kes     INTEGER,
  estimated_usd     INTEGER
);

CREATE TABLE IF NOT EXISTS pipeline_targets (
  id                SERIAL PRIMARY KEY,
  bse_agent         TEXT,
  bse_agent_id      TEXT REFERENCES people(id),
  organization_name TEXT,
  organization_id   TEXT REFERENCES organizations(id),
  bulls_eye         BOOLEAN DEFAULT FALSE,
  runrate           BOOLEAN DEFAULT FALSE,
  relationship_type TEXT,
  third_party       TEXT,
  products          JSONB DEFAULT '[]'::JSONB,
  status            TEXT DEFAULT 'prospect',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS podcast_topics (
  id                SERIAL PRIMARY KEY,
  title             TEXT NOT NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Domain 4: Ventures & Investment (FVC) ───────────────────────────────────

CREATE TABLE IF NOT EXISTS ventures (
  id                TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  founder_id        TEXT REFERENCES people(id),
  founder_name      TEXT,
  sector            TEXT,
  stage             TEXT,
  funding_target    INTEGER,
  amount_raised     INTEGER,
  instrument        TEXT,
  timeline          TEXT,
  status            TEXT,
  description       TEXT,
  is_case_study     BOOLEAN DEFAULT FALSE,
  milestones        INTEGER,
  milestones_completed INTEGER,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS venture_milestones (
  id                SERIAL PRIMARY KEY,
  venture_id        TEXT NOT NULL REFERENCES ventures(id),
  title             TEXT NOT NULL,
  description       TEXT,
  completed         BOOLEAN DEFAULT FALSE,
  completed_date    TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS portfolio_investments (
  id                SERIAL PRIMARY KEY,
  venture_id        TEXT NOT NULL REFERENCES ventures(id),
  invested_amount   INTEGER,
  instrument        TEXT,
  current_value     INTEGER,
  return_rate       NUMERIC,
  status            TEXT,
  stage             TEXT,
  milestones_total  INTEGER,
  milestones_completed INTEGER,
  last_update       TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS venture_notifications (
  id                SERIAL PRIMARY KEY,
  venture_id        TEXT REFERENCES ventures(id),
  date              TEXT NOT NULL,
  message           TEXT NOT NULL,
  type              TEXT DEFAULT 'info',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Domain 5: Case Studies ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS case_studies (
  id                TEXT PRIMARY KEY,
  venture_id        TEXT REFERENCES ventures(id),
  company_name      TEXT NOT NULL,
  location          TEXT,
  date              TEXT,
  founder_name      TEXT,
  founder_id        TEXT REFERENCES people(id),
  status            TEXT,
  description       TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS case_study_financials (
  id                SERIAL PRIMARY KEY,
  case_study_id     TEXT NOT NULL REFERENCES case_studies(id),
  type              TEXT NOT NULL,
  data              JSONB DEFAULT '{}'::JSONB
);

CREATE TABLE IF NOT EXISTS case_study_timeline (
  id                SERIAL PRIMARY KEY,
  case_study_id     TEXT NOT NULL REFERENCES case_studies(id),
  date              TEXT NOT NULL,
  event             TEXT NOT NULL,
  type              TEXT
);

CREATE TABLE IF NOT EXISTS case_study_governance (
  id                SERIAL PRIMARY KEY,
  case_study_id     TEXT NOT NULL REFERENCES case_studies(id),
  issue             TEXT NOT NULL,
  severity          TEXT
);

CREATE TABLE IF NOT EXISTS case_study_lessons (
  id                SERIAL PRIMARY KEY,
  case_study_id     TEXT NOT NULL REFERENCES case_studies(id),
  lesson            TEXT NOT NULL,
  category          TEXT
);

CREATE TABLE IF NOT EXISTS loan_agreements (
  id                SERIAL PRIMARY KEY,
  case_study_id     TEXT REFERENCES case_studies(id),
  lender_name       TEXT,
  lender_id         TEXT REFERENCES people(id),
  borrower_name     TEXT,
  borrower_id       TEXT REFERENCES people(id),
  principal         INTEGER,
  currency          TEXT DEFAULT 'KES',
  repayment_date    TEXT,
  status            TEXT,
  terms             JSONB DEFAULT '{}'::JSONB,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── Domain 6: Shopping & Consumption Data ───────────────────────────────────

CREATE TABLE IF NOT EXISTS shopping_receipts (
  id                SERIAL PRIMARY KEY,
  invoice_no        TEXT NOT NULL UNIQUE,
  date              TEXT NOT NULL,
  store             TEXT,
  total             NUMERIC,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shopping_items (
  id                SERIAL PRIMARY KEY,
  receipt_id        INTEGER NOT NULL REFERENCES shopping_receipts(id),
  product           TEXT NOT NULL,
  brand             TEXT,
  qty               NUMERIC,
  unit_price        NUMERIC,
  line_total        NUMERIC,
  category          TEXT
);

CREATE TABLE IF NOT EXISTS shopping_brands (
  id                SERIAL PRIMARY KEY,
  brand             TEXT NOT NULL UNIQUE,
  total_spend       NUMERIC,
  item_count        INTEGER,
  products          JSONB DEFAULT '[]'::JSONB,
  categories        JSONB DEFAULT '[]'::JSONB
);

-- ─── Domain 7: Project Management ────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS project_tasks (
  id                TEXT PRIMARY KEY,
  title             TEXT NOT NULL,
  description       TEXT,
  assigned_to       TEXT,
  assigned_to_id    TEXT REFERENCES people(id),
  status            TEXT DEFAULT 'Open',
  priority          TEXT DEFAULT 'Medium',
  category          TEXT,
  estimated_hours   NUMERIC,
  logged_hours      NUMERIC,
  due_date          TEXT,
  venture_tag       TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS project_subtasks (
  id                SERIAL PRIMARY KEY,
  task_id           TEXT NOT NULL REFERENCES project_tasks(id),
  label             TEXT NOT NULL,
  done              BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS cost_items (
  id                TEXT PRIMARY KEY,
  category          TEXT,
  description       TEXT,
  estimated_cost    NUMERIC,
  actual_cost       NUMERIC,
  currency          TEXT DEFAULT 'USD',
  status            TEXT DEFAULT 'Budgeted',
  vendor            TEXT,
  notes             TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS partners (
  id                TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  type              TEXT,
  contact_email     TEXT,
  contact_person    TEXT,
  status            TEXT DEFAULT 'Prospective',
  description       TEXT,
  website           TEXT,
  territory         TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
