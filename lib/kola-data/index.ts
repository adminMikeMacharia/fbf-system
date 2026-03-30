export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

export interface GovernanceIssue {
  title: string;
  description: string;
  severity: string;
  date: string;
}

export interface Lesson {
  title: string;
  description: string;
  category: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type?: string;
}

export interface KolaFinancials {
  revenue: string;
  expenses: string;
  profit: string;
  funding: string;
  burn_rate?: string;
  runway?: string;
}

export const KOLA_COMPANY = {
  name: "Kola Ventures",
  founded: "2019",
  location: "Nairobi, Kenya",
  industry: "AgriTech",
  stage: "Series A",
  status: "Active",
  description: "Agricultural technology company focused on connecting smallholder farmers with markets.",
  logo: "",
};

export const KOLA_TIMELINE: TimelineEvent[] = [
  { date: "2019-03-15", title: "Company Founded", description: "Kola Ventures incorporated in Nairobi.", type: "milestone" },
  { date: "2020-01-10", title: "Seed Round", description: "Raised seed funding to build initial platform.", type: "funding" },
  { date: "2021-06-01", title: "Product Launch", description: "Launched mobile app for farmer registration.", type: "product" },
  { date: "2022-09-15", title: "Series A", description: "Closed Series A to scale operations.", type: "funding" },
];

export const KOLA_FINANCIALS: KolaFinancials = {
  revenue: "$450,000",
  expenses: "$680,000",
  profit: "-$230,000",
  funding: "$2.5M",
  burn_rate: "$56,000/mo",
  runway: "8 months",
};

export const KOLA_TEAM: TeamMember[] = [
  { name: "James Oduor", role: "CEO & Co-Founder", bio: "Former product lead at Safaricom." },
  { name: "Amina Hassan", role: "CTO & Co-Founder", bio: "Software engineer with 10 years experience." },
  { name: "Peter Kimani", role: "COO", bio: "Operations specialist from the logistics sector." },
];

export const KOLA_GOVERNANCE: GovernanceIssue[] = [
  { title: "Board Composition", description: "Board lacks independent directors.", severity: "medium", date: "2023-01-15" },
  { title: "Financial Controls", description: "Internal audit processes need strengthening.", severity: "high", date: "2023-03-20" },
];

export const KOLA_LESSONS: Lesson[] = [
  { title: "Market Timing", description: "Entering the market during a regulatory shift created unexpected challenges.", category: "strategy" },
  { title: "Team Building", description: "Hiring too quickly led to culture dilution.", category: "operations" },
];

export const LEO_REFLECTION = {
  title: "Founder Reflection",
  content: "Building Kola has been the most challenging and rewarding experience of my career.",
  author: "James Oduor",
  date: "2023-06-01",
};

export const KOLA_LOAN_AGREEMENT = {
  lender: "East Africa Development Bank",
  amount: "$500,000",
  term: "36 months",
  rate: "12%",
  status: "Active",
  disbursed: "2022-10-01",
};

export const KOLA_BANK_HISTORY = [
  { date: "2022-10-01", event: "Loan Disbursed", amount: "$500,000" },
  { date: "2023-01-01", event: "Q1 Repayment", amount: "$45,000" },
  { date: "2023-04-01", event: "Q2 Repayment", amount: "$45,000" },
];

export default KOLA_COMPANY;
