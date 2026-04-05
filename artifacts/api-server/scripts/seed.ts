import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { sql as rawSql } from "drizzle-orm";
import * as schema from "../src/lib/schema.js";

import { TOP_BRANDS } from "../../../lib/shopping-data/index.js";
import { transcriptContent } from "../../../artifacts/chapters-ledgers/src/data/transcript-content.js";
import { foundersArenaColumns } from "../../../artifacts/chapters-ledgers/src/data/columns.js";
import { volumes as sourceVolumes } from "../../../artifacts/chapters-ledgers/src/data/volumes.js";
import { readingList2026 } from "../../../artifacts/chapters-ledgers/src/data/books.js";
import { transcripts as sourceTranscripts } from "../../../artifacts/chapters-ledgers/src/data/transcripts.js";
import { episodes as afosEpisodes } from "../../../artifacts/chapters-ledgers/src/data/afos-matrix.js";
import { SERVICE_CATALOG } from "../../../artifacts/sponsorship-hub/src/data/service-catalog.js";
import { TIERS, RATE_CARD } from "../../../artifacts/sponsorship-hub/src/data/tier-pricing.js";
import { TARGET_PIPELINE, PODCAST_TOPICS } from "../../../artifacts/sponsorship-hub/src/data/pipeline.js";
import { VENTURES as FVC_VENTURES } from "../../../artifacts/fvc/src/data/ventures.js";
import { PORTFOLIO as FVC_PORTFOLIO, NOTIFICATIONS as FVC_NOTIFICATIONS } from "../../../artifacts/fvc/src/data/portfolio.js";
import { VENTURE_MILESTONES } from "../../../artifacts/fvc/src/data/milestones.js";
import { KOLA_CASE_STUDY, KOLA_FINANCIALS, KOLA_TIMELINE, KOLA_GOVERNANCE, KOLA_LESSONS } from "../../../artifacts/fvc/src/data/case-study.js";
import { PROJECT_TASKS, COST_ITEMS, PARTNERS } from "../../../artifacts/chapters-ledgers/src/data/project-board.js";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const client = postgres(DATABASE_URL, { max: 5 });
const db = drizzle(client);

async function truncateAll() {
  const tables = [
    "project_subtasks", "project_tasks", "cost_items", "partners",
    "shopping_items", "shopping_receipts", "shopping_brands",
    "loan_agreements", "case_study_lessons", "case_study_governance",
    "case_study_timeline", "case_study_financials", "case_studies",
    "venture_notifications", "portfolio_investments", "venture_milestones", "ventures",
    "podcast_topics", "pipeline_targets", "rate_card_items",
    "sponsorship_tiers", "sponsorship_services",
    "episode_founders", "transcripts", "columns", "books", "volumes", "episodes", "arcs",
    "people_organizations", "organizations", "people",
  ];
  for (const t of tables) {
    await db.execute(rawSql.raw(`DELETE FROM "${t}"`));
  }
  console.log("[seed] Cleared all tables");
}

async function seedPeople() {
  const people: { id: string; fullName: string; role?: string; type: string; bio?: string }[] = [
    { id: "michael-macharia", fullName: "Michael Anthony Macharia", role: "host", type: "founder", bio: "Serial entrepreneur, 25+ years. Founder of Founders Battlefield." },
    { id: "kevin-mutiso", fullName: "Kevin Mutiso", role: "guest", type: "founder" },
    { id: "renee-ngamau", fullName: "Renee Ngamau", role: "guest", type: "founder" },
    { id: "roy-gitahi", fullName: "Roy Gitahi", role: "guest", type: "founder" },
    { id: "farah-esmail", fullName: "Farah Esmail", role: "guest", type: "founder" },
    { id: "catherine-githua", fullName: "Catherine Githua", role: "guest", type: "founder" },
    { id: "manish-sardana", fullName: "Manish Sardana", role: "guest", type: "founder" },
    { id: "bobby-gadhia", fullName: "Bobby Gadhia", role: "guest", type: "founder" },
    { id: "edwin-dande", fullName: "Edwin Dande", role: "guest", type: "founder" },
    { id: "christine-ouma-oseko", fullName: "Christine Ouma Oseko", role: "guest", type: "founder" },
    { id: "peter-kenneth-nduati", fullName: "Peter Kenneth Nduati", role: "guest", type: "founder" },
    { id: "lenny-nganga", fullName: "Lenny Nganga", role: "guest", type: "founder" },
    { id: "pauline-wangeci-warui", fullName: "Pauline Wangeci Warui", role: "guest", type: "founder" },
    { id: "wandia-gichuru", fullName: "Wandia Gichuru", role: "guest", type: "founder" },
    { id: "jesse-moore", fullName: "Jesse Moore", role: "guest", type: "founder" },
    { id: "ian-ngethe", fullName: "Ian Ngethe", role: "guest", type: "founder" },
    { id: "alex-nyaga", fullName: "Alex Nyaga", role: "guest", type: "founder" },
    { id: "edward-kinyanjui", fullName: "Edward Kinyanjui", role: "guest", type: "founder" },
    { id: "flora-mutahi", fullName: "Flora Mutahi", role: "guest", type: "founder" },
    { id: "peter-elungat", fullName: "Peter Elungat", role: "guest", type: "founder" },
    { id: "priscilla-muchinyi", fullName: "Priscilla Muchinyi", role: "guest", type: "founder" },
    { id: "silvia-tonui", fullName: "Silvia Tonui", role: "guest", type: "founder" },
    { id: "teresa-njoroge", fullName: "Teresa Njoroge", role: "guest", type: "founder" },
    { id: "olive-gachara", fullName: "Olive Gachara", role: "guest", type: "founder" },
    { id: "khalhani-sichangi", fullName: "Khalhani Sichangi", role: "guest", type: "founder" },
    { id: "peter-ndiangui", fullName: "Peter Ndiang'ui", role: "guest", type: "founder" },
    { id: "valentine-njoroge", fullName: "Valentine Njoroge", role: "guest", type: "founder" },
    { id: "phares-kariuki", fullName: "Phares Kariuki", role: "guest", type: "founder" },
    { id: "george-ikua", fullName: "George Ikua", role: "guest", type: "founder" },
    { id: "suzie-wokabi", fullName: "Suzie Wokabi", role: "guest", type: "founder" },
    { id: "joachim-westerveld", fullName: "Joachim Westerveld", role: "guest", type: "founder" },
    { id: "mary-waceke-thongoh-muia", fullName: "Dr. Mary Waceke Thongoh-Muia", role: "guest", type: "founder" },
    { id: "tesh-mbaabu", fullName: "Tesh Mbaabu", role: "guest", type: "founder" },
    { id: "moka-lantum", fullName: "Dr. Moka Lantum", role: "guest", type: "founder" },
    { id: "ann-mccreath", fullName: "Ann McCreath", role: "guest", type: "founder" },
    { id: "radhika-bhachu", fullName: "Radhika Bhachu", role: "guest", type: "founder" },
    { id: "emmanuel-jambo", fullName: "Emmanuel Jambo", role: "guest", type: "founder" },
    { id: "leo-macharia-kingori", fullName: "Leo Macharia King'ori", role: "founder", type: "founder", bio: "Founder of Kola Entertainment Ltd." },
    { id: "amina-osei", fullName: "Amina Osei", role: "founder", type: "founder", bio: "Founder of Mazao AgriTech." },
    { id: "samuel-ochieng", fullName: "Dr. Samuel Ochieng", role: "founder", type: "founder", bio: "Founder of NexGen Health Solutions." },
    { id: "wanjiku-kamau", fullName: "Wanjiku Kamau", role: "founder", type: "founder", bio: "CEO & Co-Founder of Craft Collective Africa." },
    { id: "david-mwangi", fullName: "David Mwangi", role: "founder", type: "founder", bio: "COO & Co-Founder of Craft Collective Africa." },
    { id: "wangari-ndua", fullName: "Wangari Ndua", role: "bse-agent", type: "staff" },
    { id: "evelyne-bosibori", fullName: "Evelyne Bosibori", role: "bse-agent", type: "staff" },
    { id: "allan-saiya", fullName: "Allan Saiya", role: "bse-agent", type: "staff" },
    { id: "faith-maritim", fullName: "Faith Maritim", role: "bse-agent", type: "staff" },
    { id: "john-mutuku", fullName: "John Mutuku", role: "bse-agent", type: "staff" },
    { id: "derrick-musyoka", fullName: "Derrick Musyoka", role: "bse-agent", type: "staff" },
    { id: "daisy-rono", fullName: "Daisy Rono", role: "bse-agent", type: "staff" },
    { id: "mugumo", fullName: "Mugumo", role: "team-member", type: "staff", bio: "Project manager for Chapters & Ledgers." },
  ];
  await db.insert(schema.peopleTable).values(people);
  console.log(`[seed] People seeded (${people.length})`);
  return new Map(people.map(p => [p.fullName, p.id]));
}

async function seedOrganizations() {
  const sponsorOrgs = Array.from(new Set(TARGET_PIPELINE.map(t => t.company))).map(name => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name,
    type: "sponsor" as const,
    industry: undefined as string | undefined,
  }));
  const ventureOrgs = [
    { id: "kola-entertainment", name: "Kola Entertainment Ltd", type: "venture" as const, industry: "Entertainment" },
    { id: "mazao-agritech", name: "Mazao AgriTech", type: "venture" as const, industry: "Agriculture / Technology" },
    { id: "nexgen-health", name: "NexGen Health Solutions", type: "venture" as const, industry: "HealthTech" },
    { id: "craft-collective", name: "Craft Collective Africa", type: "venture" as const, industry: "E-Commerce / Artisan" },
  ];
  const allOrgs = [...sponsorOrgs, ...ventureOrgs];
  await db.insert(schema.organizationsTable).values(allOrgs);
  console.log(`[seed] Organizations seeded (${allOrgs.length} — ${sponsorOrgs.length} from pipeline source, ${ventureOrgs.length} venture companies)`);
  return new Map(allOrgs.map(o => [o.name, o.id]));
}

async function seedArcs() {
  const arcs = [
    { number: 1, label: "ARC 1: External Chaos", color: "#C45A3C", description: "Surviving the Terrain" },
    { number: 2, label: "ARC 2: Internal Turmoil", color: "#8B6F47", description: "Navigating the Self" },
    { number: 3, label: "ARC 3: Relational Reckoning", color: "#2AAF6A", description: "Trust & Power" },
    { number: 4, label: "ARC 4: Strategic Reinvention", color: "#3A8ACA", description: "Building Anew" },
    { number: 5, label: "ARC 5: Systemic Mastery", color: "#8A5ABF", description: "Leading the Ecosystem" },
    { number: 6, label: "ARC 6: Bonus – Spirit & Healing", color: "#D4A832", description: "Spirit, Healing & Untold Themes" },
  ];
  await db.insert(schema.arcsTable).values(arcs);
  console.log("[seed] Arcs seeded");
}

function getArcNumber(arcTheme: string): number {
  if (arcTheme.includes("ARC 1")) return 1;
  if (arcTheme.includes("ARC 2")) return 2;
  if (arcTheme.includes("ARC 3")) return 3;
  if (arcTheme.includes("ARC 4")) return 4;
  if (arcTheme.includes("ARC 5")) return 5;
  if (arcTheme.includes("ARC 6")) return 6;
  return 1;
}

async function seedEpisodes(peopleMap: Map<string, string>) {
  const arcs = await db.select().from(schema.arcsTable);
  const arcMap = new Map(arcs.map(a => [a.number, a.id]));

  for (const ep of afosEpisodes) {
    const arcNum = ep.arcNumber ?? getArcNumber(ep.arcTheme);
    await db.insert(schema.episodesTable).values({
      number: ep.number,
      title: ep.title,
      arcId: arcMap.get(arcNum) ?? null,
      arcTheme: ep.arcTheme,
      mindset: ep.mindset,
      emotional: ep.emotional,
      strategic: ep.strategic,
      social: ep.social,
      spiritual: ep.spiritual,
      idealGuestTraits: ep.idealGuestTraits,
      matchedServices: ep.matchedServices,
      suggestedBook: ep.suggestedBook,
      caseStudy: ep.caseStudy,
      youtubeUrl: ep.youtubeUrl ?? null,
      spotifyUrl: ep.spotifyUrl ?? null,
      thumbnailUrl: ep.thumbnailUrl ?? null,
      viewCount: ep.viewCount ?? null,
      isLive: ep.isLive,
      siteTitle: ep.siteTitle ?? null,
      foundersBattlefieldUrl: ep.foundersBattlefieldUrl ?? null,
    });

    if (ep.featuredFounders) {
      const episodes = await db.select().from(schema.episodesTable).where(rawSql`number = ${ep.number}`);
      const episodeId = episodes[0]?.id;
      if (episodeId) {
        for (const f of ep.featuredFounders) {
          const personId = peopleMap.get(f.name) ?? null;
          await db.insert(schema.episodeFoundersTable).values({
            episodeId,
            personId,
            founderName: f.name,
            role: f.role,
          });
        }
      }
    }
  }
  console.log(`[seed] Episodes + founders seeded (${afosEpisodes.length} episodes from afos-matrix, with personId cross-refs)`);
}

async function seedTranscripts() {
  for (const t of sourceTranscripts) {
    const episodes = await db.select().from(schema.episodesTable).where(rawSql`number = ${t.episode}`);
    const episodeId = episodes[0]?.id;
    if (episodeId) {
      const fullContent = transcriptContent[t.episode] ?? null;
      await db.insert(schema.transcriptsTable).values({
        episodeId,
        season: t.season,
        filename: t.filename,
        preview: t.preview,
        fullContent,
      });
    }
  }
  console.log(`[seed] Transcripts seeded (${sourceTranscripts.length} from chapters-ledgers source, with full_content)`);
}

async function seedVolumes() {
  const arcs = await db.select().from(schema.arcsTable);
  const arcMap = new Map(arcs.map(a => [a.number, a.id]));

  for (const v of sourceVolumes) {
    await db.insert(schema.volumesTable).values({
      number: v.number,
      title: v.title,
      subtitle: v.subtitle,
      arcId: arcMap.get(v.arcNumber) ?? null,
      arcLabel: v.arcLabel,
      description: v.description,
      founderCount: v.founderCount,
      episodeRange: v.episodeRange,
      pageTarget: v.pageTarget,
      costTarget: v.costTarget,
      status: v.status,
    });
  }
  console.log(`[seed] Volumes seeded (${sourceVolumes.length} from chapters-ledgers source)`);
}

async function seedBooks() {
  const books = readingList2026.map(b => ({
    title: b.title,
    author: b.author,
    description: b.description,
    afosConnection: b.afosConnection,
    coverUrl: b.coverUrl,
  }));
  await db.insert(schema.booksTable).values(books);
  console.log(`[seed] Books seeded (${books.length} from chapters-ledgers readingList2026)`);
}

async function seedColumns() {
  const columns = foundersArenaColumns.map(c => ({
    date: c.date,
    title: c.title,
    sortDate: c.sortDate,
  }));
  await db.insert(schema.columnsTable).values(columns);
  console.log(`[seed] Columns seeded (${columns.length} from chapters-ledgers source)`);
}

async function seedSponsorshipServices() {
  const services = SERVICE_CATALOG.map(s => ({
    id: s.id,
    name: s.name,
    shortName: s.shortName,
    category: s.category,
    description: s.description,
    visionStatement: s.visionStatement,
    channels: s.channels,
    frequency: s.frequency,
    keyDeliverables: s.keyDeliverables,
    opportunities: s.opportunities,
    icon: s.icon,
    color: s.color,
    tierAvailability: s.tierAvailability,
  }));
  await db.insert(schema.sponsorshipServicesTable).values(services);
  console.log(`[seed] Sponsorship services seeded (${services.length} from sponsorship-hub service-catalog)`);
}

async function seedSponsorshipTiers() {
  const tiers = TIERS.map(t => ({
    id: t.id,
    name: t.name,
    color: t.color,
    bgColor: t.bgColor,
    borderColor: t.borderColor,
    minServices: t.minServices,
    description: t.description,
    highlights: t.highlights,
    channelCoverage: t.channelCoverage,
    pricingNote: t.pricingNote,
    startingKes: t.startingKES,
    pricingRange: t.pricingRange,
  }));
  await db.insert(schema.sponsorshipTiersTable).values(tiers);
  console.log(`[seed] Sponsorship tiers seeded (${tiers.length} from sponsorship-hub tier-pricing)`);
}

async function seedRateCard() {
  let count = 0;
  for (const group of RATE_CARD) {
    for (const o of group.offerings) {
      await db.insert(schema.rateCardItemsTable).values({
        serviceId: group.serviceId,
        serviceName: group.service,
        name: o.name,
        platinum: o.platinum,
        gold: o.gold,
        silver: o.silver,
        bronze: o.bronze,
        unit: o.unit,
        costDescription: o.costDescription,
        estimatedKes: o.estimatedKES ?? null,
      });
      count++;
    }
  }
  console.log(`[seed] Rate card items seeded (${count} from sponsorship-hub RATE_CARD — ${RATE_CARD.length} service groups)`);
}

async function seedPipeline(peopleMap: Map<string, string>, orgMap: Map<string, string>) {
  const values = TARGET_PIPELINE.map(p => ({
    bseAgent: p.bse,
    bseAgentId: peopleMap.get(p.bse) ?? null,
    organizationName: p.company,
    organizationId: orgMap.get(p.company) ?? null,
    bullsEye: p.bullsEye,
    runrate: p.runrate,
    products: p.products,
    status: p.status,
  }));
  await db.insert(schema.pipelineTargetsTable).values(values);
  console.log(`[seed] Pipeline targets seeded (${values.length} from sponsorship-hub TARGET_PIPELINE, with bseAgentId + organizationId)`);
}

async function seedPodcastTopics() {
  await db.insert(schema.podcastTopicsTable).values(PODCAST_TOPICS.map(t => ({ title: t })));
  console.log(`[seed] Podcast topics seeded (${PODCAST_TOPICS.length} from sponsorship-hub PODCAST_TOPICS)`);
}

async function seedVentures(peopleMap: Map<string, string>) {
  const ventures = FVC_VENTURES.map(v => ({
    id: v.id,
    name: v.name,
    founderName: v.founder,
    founderId: peopleMap.get(v.founder) ?? null,
    sector: v.sector,
    stage: v.stage,
    fundingTarget: v.fundingTarget,
    amountRaised: v.amountRaised,
    instrument: v.instrument,
    timeline: v.timeline,
    status: v.status,
    isCaseStudy: v.isCaseStudy,
    description: v.description,
    milestones: v.milestones,
    milestonesCompleted: v.milestonesCompleted,
  }));
  await db.insert(schema.venturesTable).values(ventures);

  await db.insert(schema.ventureMilestonesTable).values(VENTURE_MILESTONES);

  const portfolio = FVC_PORTFOLIO.map(p => ({
    ventureId: p.id,
    investedAmount: p.invested,
    instrument: p.instrument,
    currentValue: p.currentValue,
    returnRate: String(p.returnRate),
    status: p.status,
    stage: p.stage,
    milestonesTotal: p.milestones.total,
    milestonesCompleted: p.milestones.completed,
    lastUpdate: p.lastUpdate,
  }));
  await db.insert(schema.portfolioInvestmentsTable).values(portfolio);

  const notifications = FVC_NOTIFICATIONS.map(n => ({
    ventureId: n.venture,
    date: n.date,
    message: n.message,
    type: n.type,
  }));
  await db.insert(schema.ventureNotificationsTable).values(notifications);
  console.log(`[seed] Ventures seeded (${FVC_VENTURES.length} from fvc/data/ventures, ${VENTURE_MILESTONES.length} milestones from fvc/data/milestones, ${FVC_PORTFOLIO.length} portfolio, ${FVC_NOTIFICATIONS.length} notifications — with founderId cross-refs)`);
}

async function seedCaseStudies(peopleMap: Map<string, string>) {
  const leoId = peopleMap.get(KOLA_CASE_STUDY.founderName) ?? null;
  const michaelId = peopleMap.get("Michael Anthony Macharia") ?? null;

  await db.insert(schema.caseStudiesTable).values({
    ...KOLA_CASE_STUDY,
    founderId: leoId,
  });

  await db.insert(schema.caseStudyFinancialsTable).values(KOLA_FINANCIALS);
  await db.insert(schema.caseStudyTimelineTable).values(KOLA_TIMELINE);
  await db.insert(schema.caseStudyGovernanceTable).values(KOLA_GOVERNANCE);
  await db.insert(schema.caseStudyLessonsTable).values(KOLA_LESSONS);

  await db.insert(schema.loanAgreementsTable).values({
    caseStudyId: KOLA_CASE_STUDY.id,
    lenderName: "Michael Anthony Macharia",
    lenderId: michaelId,
    borrowerName: KOLA_CASE_STUDY.founderName,
    borrowerId: leoId,
    principal: 2000000,
    currency: "KES",
    repaymentDate: "2026-01-31",
    status: "in-default",
    terms: { defaultInterest: { rate: "5% monthly", compounding: "compound" } },
  });

  console.log(`[seed] Case study (Kola) seeded from fvc/data/case-study — ${KOLA_FINANCIALS.length} financials, ${KOLA_TIMELINE.length} timeline, ${KOLA_GOVERNANCE.length} governance, ${KOLA_LESSONS.length} lessons — with founderId/lenderId/borrowerId cross-refs`);
}

async function seedShopping() {
  const receipts = [
    { invoiceNo: "72146657", date: "07-Apr-2025", store: "Westgate Mall", total: "17338" },
    { invoiceNo: "72146658", date: "07-Apr-2025", store: "Sarit Centre", total: "1929" },
    { invoiceNo: "73118667", date: "01-May-2025", store: "Westgate Mall", total: "12763" },
    { invoiceNo: "74488412", date: "03-Jun-2025", store: "Sarit Centre", total: "28910" },
    { invoiceNo: "75068842", date: "18-Jun-2025", store: "Sarit Centre", total: "4110.57" },
    { invoiceNo: "75266078", date: "23-Jun-2025", store: "Sarit Centre", total: "12227.82" },
    { invoiceNo: "75669554", date: "04-Jul-2025", store: "Sarit Centre", total: "12737.50" },
    { invoiceNo: "76108756", date: "18-Jul-2025", store: "Sarit Centre", total: "23360.17" },
    { invoiceNo: "76764452", date: "06-Aug-2025", store: "Sarit Centre", total: "21508" },
    { invoiceNo: "77640345", date: "30-Aug-2025", store: "Sarit Centre", total: "25180" },
    { invoiceNo: "79911582", date: "24-Oct-2025", store: "Sarit Centre", total: "30084" },
    { invoiceNo: "82656252", date: "29-Dec-2025", store: "Sarit Centre", total: "10906" },
    { invoiceNo: "83332067", date: "12-Jan-2026", store: "Sarit Centre", total: "11746" },
  ];
  await db.insert(schema.shoppingReceiptsTable).values(receipts);

  const brands = TOP_BRANDS.map(b => ({
    brand: b.brand,
    totalSpend: String(b.totalSpend),
    itemCount: b.itemCount,
    products: b.products,
    categories: b.categories,
  }));
  await db.insert(schema.shoppingBrandsTable).values(brands);
  console.log(`[seed] Shopping seeded: ${receipts.length} receipts, ${brands.length} brands (from lib/shopping-data TOP_BRANDS; no synthetic line items)`);
}


async function seedProjectManagement(peopleMap: Map<string, string>) {
  const tasks = PROJECT_TASKS.map(t => ({
    id: t.id,
    title: t.title,
    description: t.description,
    assignedTo: t.assignedTo,
    assignedToId: peopleMap.get(t.assignedTo) ?? null,
    status: t.status,
    priority: t.priority,
    category: t.category,
    estimatedHours: t.estimatedHours != null ? String(t.estimatedHours) : undefined,
    loggedHours: t.loggedHours != null ? String(t.loggedHours) : undefined,
    dueDate: t.dueDate,
    ventureTag: t.venture,
  }));
  await db.insert(schema.projectTasksTable).values(tasks);

  const subtasks: { taskId: string; label: string; done: boolean }[] = [];
  for (const t of PROJECT_TASKS) {
    if (t.subtasks) {
      for (const s of t.subtasks) {
        subtasks.push({ taskId: t.id, label: s.label, done: s.done });
      }
    }
  }
  if (subtasks.length > 0) {
    await db.insert(schema.projectSubtasksTable).values(subtasks);
  }

  const costItems = COST_ITEMS.map(c => ({
    id: c.id,
    category: c.category,
    description: c.description,
    estimatedCost: String(c.estimatedCost),
    actualCost: c.actualCost != null ? String(c.actualCost) : undefined,
    currency: c.currency,
    status: c.status,
    vendor: c.vendor,
    notes: c.notes,
  }));
  await db.insert(schema.costItemsTable).values(costItems);

  const partners = PARTNERS.map(p => ({
    id: p.id,
    name: p.name,
    type: p.type,
    contactEmail: p.contactEmail,
    contactPerson: p.contactPerson,
    status: p.status,
    description: p.description,
    website: p.website,
    territory: p.territory,
  }));
  await db.insert(schema.partnersTable).values(partners);

  console.log(`[seed] Project management seeded (${PROJECT_TASKS.length} tasks from project-board.ts, ${subtasks.length} subtasks, ${COST_ITEMS.length} cost items, ${PARTNERS.length} partners)`);
}

async function seedPeopleOrganizations(peopleMap: Map<string, string>, orgMap: Map<string, string>) {
  const links: { personId: string; organizationId: string; role: string }[] = [
    { personId: peopleMap.get("Leo Macharia King'ori")!, organizationId: orgMap.get("Kola Entertainment Ltd")!, role: "founder" },
    { personId: peopleMap.get("Amina Osei")!, organizationId: orgMap.get("Mazao AgriTech")!, role: "founder" },
    { personId: peopleMap.get("Dr. Samuel Ochieng")!, organizationId: orgMap.get("NexGen Health Solutions")!, role: "founder" },
    { personId: peopleMap.get("Wanjiku Kamau")!, organizationId: orgMap.get("Craft Collective Africa")!, role: "co-founder" },
    { personId: peopleMap.get("David Mwangi")!, organizationId: orgMap.get("Craft Collective Africa")!, role: "co-founder" },
  ];
  const valid = links.filter(l => l.personId && l.organizationId);
  if (valid.length > 0) {
    await db.insert(schema.peopleOrganizationsTable).values(valid);
  }
  console.log(`[seed] People-Organizations links seeded (${valid.length})`);
}

async function main() {
  console.log("[seed] Starting FBF unified database seed...");
  await truncateAll();
  const peopleMap = await seedPeople();
  const orgMap = await seedOrganizations();
  await seedPeopleOrganizations(peopleMap, orgMap);
  await seedArcs();
  await seedEpisodes(peopleMap);
  await seedTranscripts();
  await seedVolumes();
  await seedBooks();
  await seedColumns();
  await seedSponsorshipServices();
  await seedSponsorshipTiers();
  await seedRateCard();
  await seedPipeline(peopleMap, orgMap);
  await seedPodcastTopics();
  await seedVentures(peopleMap);
  await seedCaseStudies(peopleMap);
  await seedShopping();
  await seedProjectManagement(peopleMap);
  console.log("[seed] All domains seeded successfully!");
  process.exit(0);
}

main().catch((err) => {
  console.error("[seed] Error:", err);
  process.exit(1);
});
