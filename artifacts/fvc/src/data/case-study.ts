export interface CaseStudy {
  id: string;
  ventureId: string;
  companyName: string;
  location: string;
  date: string;
  founderName: string;
  status: string;
  description: string;
}

export const KOLA_CASE_STUDY: CaseStudy = {
  id: "kola-case",
  ventureId: "kola",
  companyName: "Kola Entertainment / Kolacopia 3.0",
  location: "Masshouse, Nairobi",
  date: "November 22, 2025",
  founderName: "Leo Macharia King'ori",
  status: "In Default",
  description: "A music event venture featuring Kamo Mphela at Masshouse, Nairobi.",
};

export interface CaseStudyFinancial {
  caseStudyId: string;
  type: string;
  data: Record<string, unknown>;
}

export const KOLA_FINANCIALS: CaseStudyFinancial[] = [
  { caseStudyId: "kola-case", type: "projected", data: { revenue: 4500000, costs: 2650000, profit: 1850000, margin: 41 } },
  { caseStudyId: "kola-case", type: "actual", data: { grossRevenue: 2800000, totalCosts: 3900000, netLoss: 1100000, platformCommission: 182000, margin: -28 } },
  { caseStudyId: "kola-case", type: "tickets", data: { sold: 1400, price: 2000, turnedAway: 300 } },
  { caseStudyId: "kola-case", type: "investment", data: { totalCapitalRaised: 3200000 } },
  { caseStudyId: "kola-case", type: "costBreakdown", data: { artistFee: 2500000, venue: 400000, production: 350000, marketing: 250000, logistics: 400000 } },
];

export interface CaseStudyTimelineEntry {
  caseStudyId: string;
  date: string;
  event: string;
  type: string;
}

export const KOLA_TIMELINE: CaseStudyTimelineEntry[] = [
  { caseStudyId: "kola-case", date: "2025-08-15", event: "Concept ideation for Kolacopia 3.0", type: "milestone" },
  { caseStudyId: "kola-case", date: "2025-09-01", event: "Kamo Mphela booked as headline artist", type: "milestone" },
  { caseStudyId: "kola-case", date: "2025-09-15", event: "Venue secured — Masshouse, Nairobi", type: "milestone" },
  { caseStudyId: "kola-case", date: "2025-10-01", event: "Capital raising begins — loans from Michael & Khalhani", type: "financial" },
  { caseStudyId: "kola-case", date: "2025-10-15", event: "Ticket sales launched via Tikiti platform", type: "milestone" },
  { caseStudyId: "kola-case", date: "2025-11-01", event: "Marketing push — social media campaigns", type: "marketing" },
  { caseStudyId: "kola-case", date: "2025-11-15", event: "Final logistics and production planning", type: "operations" },
  { caseStudyId: "kola-case", date: "2025-11-22", event: "Event day — gates closed early by Masshouse", type: "critical" },
  { caseStudyId: "kola-case", date: "2025-12-01", event: "Post-event financial reconciliation begins", type: "financial" },
  { caseStudyId: "kola-case", date: "2025-12-15", event: "Default status — repayment challenges identified", type: "critical" },
];

export interface GovernanceIssue {
  caseStudyId: string;
  issue: string;
  severity: string;
}

export const KOLA_GOVERNANCE: GovernanceIssue[] = [
  { caseStudyId: "kola-case", issue: "No formal shareholder agreement between investors and founder", severity: "critical" },
  { caseStudyId: "kola-case", issue: "No written contract for venue capacity and gate control", severity: "critical" },
  { caseStudyId: "kola-case", issue: "Artist payment terms not tied to revenue milestones", severity: "high" },
  { caseStudyId: "kola-case", issue: "No independent financial oversight during capital deployment", severity: "high" },
  { caseStudyId: "kola-case", issue: "Informal loan structures without repayment schedules", severity: "medium" },
];

export interface CaseStudyLesson {
  caseStudyId: string;
  lesson: string;
  category: string;
}

export const KOLA_LESSONS: CaseStudyLesson[] = [
  { caseStudyId: "kola-case", lesson: "Always formalize investor-founder agreements before capital deployment", category: "governance" },
  { caseStudyId: "kola-case", lesson: "Venue contracts must include capacity guarantees and gate control terms", category: "operations" },
  { caseStudyId: "kola-case", lesson: "Artist fees should be structured with performance-linked payments", category: "financial" },
  { caseStudyId: "kola-case", lesson: "Independent financial oversight is non-negotiable for first-time event producers", category: "governance" },
  { caseStudyId: "kola-case", lesson: "Ticket pricing must account for realistic conversion rates, not optimistic projections", category: "financial" },
  { caseStudyId: "kola-case", lesson: "Post-event reconciliation timelines should be agreed before the event", category: "operations" },
];
