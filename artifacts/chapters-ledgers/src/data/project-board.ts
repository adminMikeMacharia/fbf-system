export interface ProjectTask {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: "Open" | "In Progress" | "Done" | "Blocked";
  priority: "Critical" | "High" | "Medium" | "Low";
  category: string;
  estimatedHours?: number;
  loggedHours?: number;
  dueDate?: string;
  subtasks?: { label: string; done: boolean }[];
  venture: string;
  createdAt: string;
}

export interface CostItem {
  id: string;
  category: string;
  description: string;
  estimatedCost: number;
  actualCost?: number;
  currency: string;
  status: "Budgeted" | "Approved" | "Paid" | "Pending";
  vendor?: string;
  notes?: string;
}

export interface Partner {
  id: string;
  name: string;
  type: "Publisher" | "Distributor" | "Media" | "Platform" | "Sponsor" | "Collaborator";
  contactEmail?: string;
  contactPerson?: string;
  status: "Active" | "Prospective" | "In Discussion" | "Contracted";
  description: string;
  website?: string;
  territory?: string;
}

export const PROJECT_TASKS: ProjectTask[] = [
  {
    id: "cl_001",
    title: "Complete AFOS Matrix Episode Enrichment",
    description: "Map all 40 AFOS episodes with live data from foundersbattlefield.org — YouTube URLs, Spotify links, featured founders, thumbnails, and view counts.",
    assignedTo: "Mugumo",
    status: "In Progress",
    priority: "High",
    category: "Content Production",
    estimatedHours: 20,
    loggedHours: 12,
    dueDate: "2026-04-15",
    venture: "fbf_chapters",
    createdAt: "2026-03-20",
    subtasks: [
      { label: "Map 13 live episodes with YouTube/Spotify URLs", done: true },
      { label: "Verify featured founders for each episode", done: true },
      { label: "Add thumbnail images and view counts", done: true },
      { label: "Map remaining 27 episodes as they go live", done: false },
    ],
  },
  {
    id: "cl_002",
    title: "Book Cover Integration for Reading Club",
    description: "Source and integrate book cover images for all 40+ suggested books in the AFOS reading list using Open Library ISBN lookup.",
    assignedTo: "Mugumo",
    status: "Done",
    priority: "Medium",
    category: "Content Production",
    estimatedHours: 8,
    loggedHours: 6,
    dueDate: "2026-03-25",
    venture: "fbf_chapters",
    createdAt: "2026-03-18",
    subtasks: [
      { label: "Identify ISBNs for all 40 books", done: true },
      { label: "Integrate Open Library cover API", done: true },
      { label: "Add fallback for missing covers", done: true },
      { label: "Layout redesign with cover images", done: true },
    ],
  },
  {
    id: "cl_003",
    title: "Ecosystem Cross-Links Navigation",
    description: "Build an ecosystem navigation bar linking Chapters & Ledgers, Founders Kitchen, AFOS Atlas, Sponsorship Hub, and foundersbattlefield.org.",
    assignedTo: "Mugumo",
    status: "Done",
    priority: "Medium",
    category: "UX & Design",
    estimatedHours: 4,
    loggedHours: 3,
    venture: "fbf_chapters",
    createdAt: "2026-03-19",
  },
  {
    id: "cl_004",
    title: "Transcript Processing Pipeline",
    description: "Set up AI-assisted transcription workflow for live episodes — speech-to-text, editorial review, and structured chapter extraction.",
    assignedTo: "Mugumo",
    status: "Open",
    priority: "High",
    category: "Content Production",
    estimatedHours: 40,
    dueDate: "2026-05-01",
    venture: "fbf_chapters",
    createdAt: "2026-03-22",
    subtasks: [
      { label: "Select speech-to-text provider", done: false },
      { label: "Process transcripts for 13 live episodes", done: false },
      { label: "Build chapter marker extraction", done: false },
      { label: "Editorial review workflow", done: false },
    ],
  },
  {
    id: "cl_005",
    title: "Newspaper Column Drafting — ARC 1",
    description: "Draft the first set of newspaper-style columns from ARC 1 episode content, covering External Chaos themes.",
    assignedTo: "Mugumo",
    status: "Open",
    priority: "Medium",
    category: "Editorial & Writing",
    estimatedHours: 24,
    dueDate: "2026-04-30",
    venture: "fbf_chapters",
    createdAt: "2026-03-22",
  },
  {
    id: "cl_006",
    title: "Publisher Outreach — East Africa",
    description: "Identify and reach out to East African publishers for the Founders Battlefield book — Kwani Trust, Storymoja, and others.",
    assignedTo: "Mugumo",
    status: "Open",
    priority: "High",
    category: "Partnerships & Distribution",
    estimatedHours: 16,
    dueDate: "2026-04-20",
    venture: "fbf_book",
    createdAt: "2026-03-24",
    subtasks: [
      { label: "Research East African publishers", done: false },
      { label: "Prepare pitch deck / synopsis", done: false },
      { label: "Send introductory emails", done: false },
      { label: "Follow up meetings", done: false },
    ],
  },
  {
    id: "cl_007",
    title: "Discussion Board Setup",
    description: "Set up a discussion/activation board for episode-by-episode community engagement with founders featured in each episode.",
    assignedTo: "Mugumo",
    status: "Open",
    priority: "High",
    category: "Community & Engagement",
    estimatedHours: 12,
    dueDate: "2026-04-10",
    venture: "fbf_chapters",
    createdAt: "2026-03-24",
    subtasks: [
      { label: "Define discussion board structure per episode", done: false },
      { label: "Create activation email template", done: false },
      { label: "Set up founder invitation flow", done: false },
      { label: "Build moderation workflow", done: false },
    ],
  },
  {
    id: "cl_008",
    title: "Spotify Podcast Feed Setup",
    description: "Configure and verify the Spotify podcast feed for all live Founders Battlefield episodes, ensuring proper metadata and episode ordering.",
    assignedTo: "Mugumo",
    status: "In Progress",
    priority: "Medium",
    category: "Distribution",
    estimatedHours: 6,
    loggedHours: 2,
    venture: "fbf_chapters",
    createdAt: "2026-03-20",
  },
  {
    id: "cl_009",
    title: "Costing Model — Book Production",
    description: "Develop detailed costing model for Founders Battlefield book production including editing, design, printing, and distribution costs.",
    assignedTo: "Mugumo",
    status: "Open",
    priority: "High",
    category: "Finance & Planning",
    estimatedHours: 10,
    dueDate: "2026-04-15",
    venture: "fbf_book",
    createdAt: "2026-03-24",
  },
  {
    id: "cl_010",
    title: "Social Media Content Calendar",
    description: "Create a 12-week social media content calendar aligned with episode releases, reading club picks, and book launch milestones.",
    assignedTo: "Mugumo",
    status: "Open",
    priority: "Medium",
    category: "Marketing",
    estimatedHours: 8,
    dueDate: "2026-04-20",
    venture: "fbf_chapters",
    createdAt: "2026-03-24",
  },
];

export const COST_ITEMS: CostItem[] = [
  {
    id: "cost_001",
    category: "Content Production",
    description: "AI Transcription Services (40 episodes)",
    estimatedCost: 2000,
    currency: "USD",
    status: "Budgeted",
    notes: "Speech-to-text API costs for full season transcription",
  },
  {
    id: "cost_002",
    category: "Editorial",
    description: "Copy Editing & Proofreading (Book Manuscript)",
    estimatedCost: 3500,
    currency: "USD",
    status: "Budgeted",
    vendor: "TBD — East African Editor",
  },
  {
    id: "cost_003",
    category: "Design",
    description: "Book Cover Design & Interior Layout",
    estimatedCost: 2500,
    currency: "USD",
    status: "Budgeted",
  },
  {
    id: "cost_004",
    category: "Printing",
    description: "First Print Run (1,000 copies)",
    estimatedCost: 5000,
    currency: "USD",
    status: "Budgeted",
    notes: "Estimate for quality paperback, 250–300 pages",
  },
  {
    id: "cost_005",
    category: "Distribution",
    description: "Amazon KDP Setup & ISBN Registration",
    estimatedCost: 500,
    currency: "USD",
    status: "Budgeted",
  },
  {
    id: "cost_006",
    category: "Marketing",
    description: "Book Launch Event & PR",
    estimatedCost: 3000,
    currency: "USD",
    status: "Budgeted",
    notes: "Nairobi launch event + virtual launch",
  },
  {
    id: "cost_007",
    category: "Platform",
    description: "Website Hosting & Development",
    estimatedCost: 1200,
    actualCost: 600,
    currency: "USD",
    status: "Paid",
    notes: "Replit hosting + domain",
  },
  {
    id: "cost_008",
    category: "Content Production",
    description: "Podcast Production & Post-Production (per episode)",
    estimatedCost: 800,
    currency: "USD",
    status: "Budgeted",
    notes: "Audio engineering, mastering, show notes — per episode average",
  },
  {
    id: "cost_009",
    category: "Partnerships",
    description: "Publisher Advance / Rights Negotiation Legal",
    estimatedCost: 2000,
    currency: "USD",
    status: "Budgeted",
    vendor: "Legal Counsel",
  },
  {
    id: "cost_010",
    category: "Distribution",
    description: "Spotify / Apple Podcast Premium Placement",
    estimatedCost: 1500,
    currency: "USD",
    status: "Budgeted",
  },
];

export const PARTNERS: Partner[] = [
  {
    id: "pub_001",
    name: "Kwani Trust",
    type: "Publisher",
    status: "Prospective",
    description: "Leading East African literary publisher known for contemporary African writing and the Kwani? literary journal.",
    website: "https://kwani.org",
    territory: "East Africa",
  },
  {
    id: "pub_002",
    name: "Storymoja",
    type: "Publisher",
    status: "Prospective",
    description: "Nairobi-based publisher focused on African stories for diverse audiences, with strong distribution networks across Kenya.",
    website: "https://storymojaafrica.co.ke",
    territory: "Kenya / East Africa",
  },
  {
    id: "pub_003",
    name: "Cassava Republic Press",
    type: "Publisher",
    status: "Prospective",
    description: "Award-winning independent publisher with offices in Abuja and London, specializing in African fiction and non-fiction.",
    website: "https://cassavarepublic.biz",
    territory: "Pan-African / Global",
  },
  {
    id: "pub_004",
    name: "Amazon KDP",
    type: "Distributor",
    status: "Prospective",
    description: "Self-publishing and distribution platform for global reach via Kindle and print-on-demand.",
    website: "https://kdp.amazon.com",
    territory: "Global",
  },
  {
    id: "pub_005",
    name: "Magunga Bookstore",
    type: "Distributor",
    status: "Prospective",
    description: "Kenyan online bookstore with a growing community of African literature readers.",
    territory: "Kenya",
  },
  {
    id: "pub_006",
    name: "Spotify for Podcasters",
    type: "Platform",
    status: "Active",
    description: "Primary podcast distribution platform for the Founders Battlefield audio series.",
    website: "https://podcasters.spotify.com",
    territory: "Global",
  },
  {
    id: "pub_007",
    name: "YouTube",
    type: "Platform",
    status: "Active",
    description: "Video distribution platform for the Founders Battlefield video podcast series.",
    website: "https://youtube.com",
    territory: "Global",
  },
  {
    id: "pub_008",
    name: "Longhorn Publishers",
    type: "Publisher",
    status: "Prospective",
    description: "Major East African educational and general publisher with established distribution across Kenya, Tanzania, and Uganda.",
    website: "https://longhornpublishers.com",
    territory: "East Africa",
  },
  {
    id: "pub_009",
    name: "East African Educational Publishers",
    type: "Publisher",
    status: "Prospective",
    description: "One of the oldest publishing houses in East Africa with strong institutional and retail distribution networks.",
    territory: "East Africa",
  },
  {
    id: "pub_010",
    name: "BookBunk",
    type: "Collaborator",
    status: "Prospective",
    description: "Community library initiative restoring public libraries in Nairobi — potential partner for reading club events and book distribution.",
    website: "https://bookbunk.org",
    territory: "Kenya",
  },
];

export const MUGUMO_EMAIL = "mugumomunene@gmail.com";
