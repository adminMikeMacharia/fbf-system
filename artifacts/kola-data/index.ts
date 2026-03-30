export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  notes: string;
  status: string;
}

export interface GovernanceIssue {
  id: string;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  status: string;
  description: string;
  date: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "milestone" | "issue" | "decision" | "event";
}

export interface KolaFinancials {
  totalInvested: number;
  totalRevenue: number;
  netPosition: number;
  currency: string;
  breakdown: { label: string; amount: number }[];
}

export const KOLA_COMPANY = {
  name: "Kola Entertainment Ltd",
  registrationNumber: "PVT-BB1OJOZ9",
  registrationDate: "2025-10-13",
  sector: "Entertainment / Events",
  location: "Nairobi, Kenya",
};

export const KOLA_TIMELINE: TimelineEvent[] = [
  { date: "2025-10-13", title: "Company Registration", description: "Kola Entertainment Ltd registered.", type: "milestone" },
  { date: "2025-11-22", title: "Kolacopia 3.0", description: "Main event at Masshouse featuring Kamo Mphela.", type: "event" },
  { date: "2025-12-15", title: "Post-Event Audit", description: "Financial audit initiated post-event.", type: "decision" },
];

export const KOLA_FINANCIALS: KolaFinancials = {
  totalInvested: 1500000,
  totalRevenue: 1200000,
  netPosition: -300000,
  currency: "KES",
  breakdown: [
    { label: "Ticket Sales", amount: 800000 },
    { label: "Sponsorship", amount: 250000 },
    { label: "Merchandise", amount: 150000 },
  ],
};

export const KOLA_TEAM: TeamMember[] = [
  { name: "Leo Macharia King'ori", role: "Founder / Investor", initials: "LM", color: "#3B82F6", notes: "Primary investor and strategic oversight.", status: "active" },
  { name: "Luke Akolade Ganiyu", role: "Co-Founder / Operations", initials: "LG", color: "#10B981", notes: "Day-to-day operations and event management.", status: "active" },
];

export const KOLA_GOVERNANCE: GovernanceIssue[] = [
  { id: "gov-1", title: "Late Company Registration", severity: "critical", status: "resolved", description: "Company was registered after contracts were signed.", date: "2025-10-13" },
  { id: "gov-2", title: "Financial Discrepancy", severity: "high", status: "open", description: "KSh 129K unresolved discrepancy in post-event cashflow.", date: "2025-12-15" },
];

export const KOLA_LESSONS: Lesson[] = [
  { id: "les-1", title: "Register Before Contracting", category: "Governance", description: "Always complete company registration before signing any contracts or agreements." },
  { id: "les-2", title: "Real-Time Financial Tracking", category: "Finance", description: "Implement real-time expense tracking from day one to avoid post-event discrepancies." },
];

export const LEO_REFLECTION = {
  title: "Founder's Reflection",
  content: "The Kola venture was a formative experience in understanding governance, accountability, and the importance of structure before scale.",
};

export const KOLA_LOAN_AGREEMENT = {
  type: "Convertible Loan",
  amount: 1500000,
  currency: "KES",
  terms: "12 months with equity conversion option",
  status: "Active — disputed terms",
};

export const KOLA_BANK_HISTORY = {
  accounts: [
    { bank: "Primary Account", transactions: 47, period: "Oct 2025 – Jan 2026" },
  ],
};
