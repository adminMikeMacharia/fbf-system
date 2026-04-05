import { pgTable, text, jsonb, timestamp, integer, boolean, numeric, serial, index } from "drizzle-orm/pg-core";

// ─── Domain 1: People & Organizations ────────────────────────────────────────

export const peopleTable = pgTable("people", {
  id: text("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email"),
  phone: text("phone"),
  role: text("role"),
  bio: text("bio"),
  status: text("status").default("active"),
  type: text("type").notNull().default("founder"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  index("people_type_idx").on(table.type),
]);

export const organizationsTable = pgTable("organizations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull().default("sponsor"),
  industry: text("industry"),
  website: text("website"),
  territory: text("territory"),
  status: text("status").default("active"),
  contactPerson: text("contact_person"),
  contactEmail: text("contact_email"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  index("organizations_type_idx").on(table.type),
]);

export const peopleOrganizationsTable = pgTable("people_organizations", {
  id: serial("id").primaryKey(),
  personId: text("person_id").notNull().references(() => peopleTable.id),
  organizationId: text("organization_id").notNull().references(() => organizationsTable.id),
  role: text("role"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Domain 2: Content & Episodes (AFOS) ────────────────────────────────────

export const arcsTable = pgTable("arcs", {
  id: serial("id").primaryKey(),
  number: integer("number").notNull().unique(),
  label: text("label").notNull(),
  color: text("color"),
  description: text("description"),
});

export const episodesTable = pgTable("episodes", {
  id: serial("id").primaryKey(),
  number: integer("number").notNull().unique(),
  title: text("title").notNull(),
  arcId: integer("arc_id").references(() => arcsTable.id),
  arcTheme: text("arc_theme"),
  mindset: text("mindset"),
  emotional: text("emotional"),
  strategic: text("strategic"),
  social: text("social"),
  spiritual: text("spiritual"),
  idealGuestTraits: text("ideal_guest_traits"),
  matchedServices: text("matched_services"),
  suggestedBook: text("suggested_book"),
  caseStudy: text("case_study"),
  youtubeUrl: text("youtube_url"),
  spotifyUrl: text("spotify_url"),
  thumbnailUrl: text("thumbnail_url"),
  viewCount: text("view_count"),
  isLive: boolean("is_live").default(false),
  siteTitle: text("site_title"),
  foundersBattlefieldUrl: text("founders_battlefield_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  index("episodes_arc_id_idx").on(table.arcId),
]);

export const episodeFoundersTable = pgTable("episode_founders", {
  id: serial("id").primaryKey(),
  episodeId: integer("episode_id").notNull().references(() => episodesTable.id),
  personId: text("person_id").references(() => peopleTable.id),
  founderName: text("founder_name").notNull(),
  role: text("role").notNull().default("guest"),
});

export const transcriptsTable = pgTable("transcripts", {
  id: serial("id").primaryKey(),
  episodeId: integer("episode_id").notNull().references(() => episodesTable.id),
  season: integer("season"),
  filename: text("filename"),
  preview: text("preview"),
  fullContent: text("full_content"),
});

export const volumesTable = pgTable("volumes", {
  id: serial("id").primaryKey(),
  number: integer("number").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  arcId: integer("arc_id").references(() => arcsTable.id),
  arcLabel: text("arc_label"),
  description: text("description"),
  founderCount: integer("founder_count"),
  episodeRange: text("episode_range"),
  pageTarget: integer("page_target"),
  costTarget: text("cost_target"),
  status: text("status").default("planned"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const booksTable = pgTable("books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  description: text("description"),
  afosConnection: text("afos_connection"),
  coverUrl: text("cover_url"),
  isbn: text("isbn"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const columnsTable = pgTable("columns", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  title: text("title").notNull(),
  sortDate: text("sort_date"),
  arcId: integer("arc_id").references(() => arcsTable.id),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Domain 3: Sponsorship & Commercial ──────────────────────────────────────

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
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const sponsorshipServicesTable = pgTable("sponsorship_services", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  shortName: text("short_name"),
  category: text("category"),
  description: text("description"),
  visionStatement: text("vision_statement"),
  channels: jsonb("channels").$type<string[]>().default([]),
  frequency: text("frequency"),
  keyDeliverables: jsonb("key_deliverables").$type<string[]>().default([]),
  opportunities: jsonb("opportunities").$type<string[]>().default([]),
  icon: text("icon"),
  color: text("color"),
  tierAvailability: jsonb("tier_availability").$type<Record<string, boolean>>().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const sponsorshipTiersTable = pgTable("sponsorship_tiers", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color"),
  bgColor: text("bg_color"),
  borderColor: text("border_color"),
  minServices: integer("min_services"),
  description: text("description"),
  highlights: jsonb("highlights").$type<string[]>().default([]),
  channelCoverage: jsonb("channel_coverage").$type<string[]>().default([]),
  pricingNote: text("pricing_note"),
  startingKes: integer("starting_kes"),
  pricingRange: text("pricing_range"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const rateCardItemsTable = pgTable("rate_card_items", {
  id: serial("id").primaryKey(),
  serviceId: text("service_id").references(() => sponsorshipServicesTable.id),
  serviceName: text("service_name"),
  name: text("name").notNull(),
  platinum: boolean("platinum").default(false),
  gold: boolean("gold").default(false),
  silver: boolean("silver").default(false),
  bronze: boolean("bronze").default(false),
  unit: text("unit"),
  costDescription: text("cost_description"),
  estimatedKes: integer("estimated_kes"),
  estimatedUsd: integer("estimated_usd"),
});

export const pipelineTargetsTable = pgTable("pipeline_targets", {
  id: serial("id").primaryKey(),
  bseAgent: text("bse_agent"),
  bseAgentId: text("bse_agent_id").references(() => peopleTable.id),
  organizationName: text("organization_name"),
  organizationId: text("organization_id").references(() => organizationsTable.id),
  bullsEye: boolean("bulls_eye").default(false),
  runrate: boolean("runrate").default(false),
  relationshipType: text("relationship_type"),
  thirdParty: text("third_party"),
  products: jsonb("products").$type<string[]>().default([]),
  status: text("status").default("prospect"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const podcastTopicsTable = pgTable("podcast_topics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Domain 4: Ventures & Investment (FVC) ───────────────────────────────────

export const venturesTable = pgTable("ventures", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  founderId: text("founder_id").references(() => peopleTable.id),
  founderName: text("founder_name"),
  sector: text("sector"),
  stage: text("stage"),
  fundingTarget: integer("funding_target"),
  amountRaised: integer("amount_raised"),
  instrument: text("instrument"),
  timeline: text("timeline"),
  status: text("status"),
  description: text("description"),
  isCaseStudy: boolean("is_case_study").default(false),
  milestones: integer("milestones"),
  milestonesCompleted: integer("milestones_completed"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const ventureMilestonesTable = pgTable("venture_milestones", {
  id: serial("id").primaryKey(),
  ventureId: text("venture_id").notNull().references(() => venturesTable.id),
  title: text("title").notNull(),
  description: text("description"),
  completed: boolean("completed").default(false),
  completedDate: timestamp("completed_date", { withTimezone: true }),
});

export const portfolioInvestmentsTable = pgTable("portfolio_investments", {
  id: serial("id").primaryKey(),
  ventureId: text("venture_id").notNull().references(() => venturesTable.id),
  investedAmount: integer("invested_amount"),
  instrument: text("instrument"),
  currentValue: integer("current_value"),
  returnRate: numeric("return_rate"),
  status: text("status"),
  stage: text("stage"),
  milestonesTotal: integer("milestones_total"),
  milestonesCompleted: integer("milestones_completed"),
  lastUpdate: text("last_update"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const ventureNotificationsTable = pgTable("venture_notifications", {
  id: serial("id").primaryKey(),
  ventureId: text("venture_id").references(() => venturesTable.id),
  date: text("date").notNull(),
  message: text("message").notNull(),
  type: text("type").default("info"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Domain 5: Case Studies ──────────────────────────────────────────────────

export const caseStudiesTable = pgTable("case_studies", {
  id: text("id").primaryKey(),
  ventureId: text("venture_id").references(() => venturesTable.id),
  companyName: text("company_name").notNull(),
  location: text("location"),
  date: text("date"),
  founderName: text("founder_name"),
  founderId: text("founder_id").references(() => peopleTable.id),
  status: text("status"),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const caseStudyFinancialsTable = pgTable("case_study_financials", {
  id: serial("id").primaryKey(),
  caseStudyId: text("case_study_id").notNull().references(() => caseStudiesTable.id),
  type: text("type").notNull(),
  data: jsonb("data").default({}),
});

export const caseStudyTimelineTable = pgTable("case_study_timeline", {
  id: serial("id").primaryKey(),
  caseStudyId: text("case_study_id").notNull().references(() => caseStudiesTable.id),
  date: text("date").notNull(),
  event: text("event").notNull(),
  type: text("type"),
});

export const caseStudyGovernanceTable = pgTable("case_study_governance", {
  id: serial("id").primaryKey(),
  caseStudyId: text("case_study_id").notNull().references(() => caseStudiesTable.id),
  issue: text("issue").notNull(),
  severity: text("severity"),
});

export const caseStudyLessonsTable = pgTable("case_study_lessons", {
  id: serial("id").primaryKey(),
  caseStudyId: text("case_study_id").notNull().references(() => caseStudiesTable.id),
  lesson: text("lesson").notNull(),
  category: text("category"),
});

export const loanAgreementsTable = pgTable("loan_agreements", {
  id: serial("id").primaryKey(),
  caseStudyId: text("case_study_id").references(() => caseStudiesTable.id),
  lenderName: text("lender_name"),
  lenderId: text("lender_id").references(() => peopleTable.id),
  borrowerName: text("borrower_name"),
  borrowerId: text("borrower_id").references(() => peopleTable.id),
  principal: integer("principal"),
  currency: text("currency").default("KES"),
  repaymentDate: text("repayment_date"),
  status: text("status"),
  terms: jsonb("terms").default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Domain 6: Shopping & Consumption Data ───────────────────────────────────

export const shoppingReceiptsTable = pgTable("shopping_receipts", {
  id: serial("id").primaryKey(),
  invoiceNo: text("invoice_no").notNull().unique(),
  date: text("date").notNull(),
  store: text("store"),
  total: numeric("total"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const shoppingItemsTable = pgTable("shopping_items", {
  id: serial("id").primaryKey(),
  receiptId: integer("receipt_id").notNull().references(() => shoppingReceiptsTable.id),
  product: text("product").notNull(),
  brand: text("brand"),
  qty: numeric("qty"),
  unitPrice: numeric("unit_price"),
  lineTotal: numeric("line_total"),
  category: text("category"),
});

export const shoppingBrandsTable = pgTable("shopping_brands", {
  id: serial("id").primaryKey(),
  brand: text("brand").notNull().unique(),
  totalSpend: numeric("total_spend"),
  itemCount: integer("item_count"),
  products: jsonb("products").$type<string[]>().default([]),
  categories: jsonb("categories").$type<string[]>().default([]),
});

// ─── Domain 7: Project Management ────────────────────────────────────────────

export const projectTasksTable = pgTable("project_tasks", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  assignedTo: text("assigned_to"),
  assignedToId: text("assigned_to_id").references(() => peopleTable.id),
  status: text("status").default("Open"),
  priority: text("priority").default("Medium"),
  category: text("category"),
  estimatedHours: numeric("estimated_hours"),
  loggedHours: numeric("logged_hours"),
  dueDate: text("due_date"),
  ventureTag: text("venture_tag"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const projectSubtasksTable = pgTable("project_subtasks", {
  id: serial("id").primaryKey(),
  taskId: text("task_id").notNull().references(() => projectTasksTable.id),
  label: text("label").notNull(),
  done: boolean("done").default(false),
});

export const costItemsTable = pgTable("cost_items", {
  id: text("id").primaryKey(),
  category: text("category"),
  description: text("description"),
  estimatedCost: numeric("estimated_cost"),
  actualCost: numeric("actual_cost"),
  currency: text("currency").default("USD"),
  status: text("status").default("Budgeted"),
  vendor: text("vendor"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const partnersTable = pgTable("partners", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type"),
  contactEmail: text("contact_email"),
  contactPerson: text("contact_person"),
  status: text("status").default("Prospective"),
  description: text("description"),
  website: text("website"),
  territory: text("territory"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
