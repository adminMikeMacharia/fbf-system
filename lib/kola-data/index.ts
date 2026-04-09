export interface TeamMember {
  name: string;
  role: string;
  status: string;
}

export interface GovernanceIssue {
  issue: string;
  severity: string;
}

export interface Lesson {
  lesson: string;
  category: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
  type: string;
}

export interface KolaFinancials {
  projected: { revenue: number; costs: number; profit: number; margin: number };
  actual: { grossRevenue: number; totalCosts: number; netLoss: number; platformCommission: number; margin: number };
  tickets: { sold: number; price: number; turnedAway: number };
  investment: { totalCapitalRaised: number };
  costBreakdown: { artistFee: number; venue: number; production: number; marketing: number; logistics: number };
}

export const KOLA_COMPANY = {
  name: "Kola Entertainment / Kolacopia 3.0",
  location: "Masshouse, Nairobi",
  date: "November 22, 2025",
  founder: "Leo Macharia King'ori",
  status: "In Default",
  description: "A music event venture featuring Kamo Mphela at Masshouse, Nairobi.",
};

export const KOLA_TIMELINE: TimelineEvent[] = [
  { date: "2025-08-15", event: "Concept ideation for Kolacopia 3.0", type: "milestone" },
  { date: "2025-09-01", event: "Kamo Mphela booked as headline artist", type: "milestone" },
  { date: "2025-09-15", event: "Venue secured — Masshouse, Nairobi", type: "milestone" },
  { date: "2025-10-01", event: "Capital raising begins — loans from Michael & Khalhani", type: "financial" },
  { date: "2025-10-15", event: "Ticket sales launched via Tikiti platform", type: "milestone" },
  { date: "2025-11-01", event: "Marketing push — social media campaigns", type: "marketing" },
  { date: "2025-11-15", event: "Final logistics and production planning", type: "operations" },
  { date: "2025-11-22", event: "Event day — gates closed early by Masshouse", type: "critical" },
  { date: "2025-12-01", event: "Post-event financial reconciliation begins", type: "financial" },
  { date: "2025-12-15", event: "Default status — repayment challenges identified", type: "critical" },
];

export const KOLA_FINANCIALS: KolaFinancials = {
  projected: { revenue: 4500000, costs: 2650000, profit: 1850000, margin: 41 },
  actual: { grossRevenue: 2800000, totalCosts: 3900000, netLoss: 1100000, platformCommission: 182000, margin: -28 },
  tickets: { sold: 1400, price: 2000, turnedAway: 300 },
  investment: { totalCapitalRaised: 3200000 },
  costBreakdown: { artistFee: 2500000, venue: 400000, production: 350000, marketing: 250000, logistics: 400000 },
};

export const KOLA_TEAM: TeamMember[] = [
  { name: "Leo Macharia King'ori", role: "Founder & Event Director", status: "active" },
  { name: "Michael Macharia", role: "Investor / Advisor", status: "active" },
  { name: "Khalhani", role: "Co-Investor", status: "active" },
  { name: "Tikiti Platform", role: "Ticketing Partner", status: "active" },
  { name: "Masshouse", role: "Venue Partner", status: "disputed" },
];

export const KOLA_GOVERNANCE: GovernanceIssue[] = [
  { issue: "No formal shareholder agreement between investors and founder", severity: "critical" },
  { issue: "No written contract for venue capacity and gate control", severity: "critical" },
  { issue: "Artist payment terms not tied to revenue milestones", severity: "high" },
  { issue: "No independent financial oversight during capital deployment", severity: "high" },
  { issue: "Informal loan structures without repayment schedules", severity: "medium" },
];

export const KOLA_LESSONS: Lesson[] = [
  { lesson: "Always formalize investor-founder agreements before capital deployment", category: "governance" },
  { lesson: "Venue contracts must include capacity guarantees and gate control terms", category: "operations" },
  { lesson: "Artist fees should be structured with performance-linked payments", category: "financial" },
  { lesson: "Independent financial oversight is non-negotiable for first-time event producers", category: "governance" },
  { lesson: "Ticket pricing must account for realistic conversion rates, not optimistic projections", category: "financial" },
  { lesson: "Post-event reconciliation timelines should be agreed before the event", category: "operations" },
];

export const LEO_REFLECTION = {
  strengths: [
    "High ambition and willingness to take bold risks",
    "Strong network for artist booking and venue access",
    "Creative vision for event experience design",
    "Resilience under pressure during event execution",
  ],
  weaknesses: [
    "Skipped formal governance and documentation",
    "Over-optimistic financial projections without stress testing",
    "Insufficient contingency planning for venue constraints",
    "Informal capital structures with no clear repayment terms",
    "Limited experience managing investor expectations",
  ],
  keyQuotes: [
    "I learned that ambition without structure is just chaos with good intentions.",
    "The venue closing gates early was a wake-up call — you can't control what you don't contract.",
    "I treated investor money like my own — that was both my strength and my mistake.",
    "Next time, the paperwork comes before the first shilling moves.",
    "Failure isn't fatal, but repeating the same failure would be.",
    "The hardest conversation was telling my father the numbers didn't add up.",
  ],
  forwardCommitments: [
    { commitment: "Formalize all investor agreements before accepting capital", status: "committed" },
    { commitment: "Build a 3-person advisory board for next venture", status: "in-progress" },
    { commitment: "Complete financial management course", status: "committed" },
    { commitment: "Create detailed contingency plans for all major risk factors", status: "committed" },
  ],
  parentingIntelligence: {
    investorRedLine: {
      trigger: "Repeat default without governance improvement",
      description: "If Leo defaults on another venture without implementing the governance improvements agreed upon, all future capital support will be suspended.",
      consequence: "Full capital freeze and mandatory 12-month governance apprenticeship before any new venture funding.",
    },
  },
  ventureFramework: {
    title: "Leo's Venture Framework 2.0",
    principles: [
      { name: "Governance First", description: "All legal and financial structures must be in place before operations begin" },
      { name: "Conservative Projections", description: "Use 60% of optimistic revenue estimates as the planning baseline" },
      { name: "Investor Transparency", description: "Weekly financial updates to all capital providers, no exceptions" },
      { name: "Contingency Budget", description: "Minimum 20% cost buffer on all major expense categories" },
    ],
    nonNegotiableRule: {
      rule: "No capital deployment without signed agreements",
      context: "This rule was born from the Kolacopia 3.0 experience where informal arrangements led to default.",
      requirements: [
        "Signed loan agreement with repayment schedule",
        "Venue contract with capacity and control clauses",
        "Artist contract with milestone-linked payments",
        "Independent financial oversight appointment",
      ],
      consequence: "Violation triggers automatic investor intervention and potential venture wind-down.",
    },
    preConditionsForNextVenture: [
      "Complete governance improvement plan (90% progress required)",
      "Secure advisory board approval for business plan",
      "Present stress-tested financial model to investors",
      "Obtain independent risk assessment from third-party advisor",
      "Demonstrate Kolacopia 3.0 debt repayment progress (minimum 50%)",
    ],
  },
};

export const KOLA_LOAN_AGREEMENT = {
  meta: {
    title: "Kolacopia 3.0 — Loan Agreement",
    status: "in-default",
    effectiveDate: "2025-10-01",
  },
  parties: {
    lender: { name: "Michael Anthony Macharia", role: "Investor / Father" },
    borrower: { name: "Leo Macharia King'ori", role: "Founder / Son" },
  },
  personalGuarantors: [
    { name: "Leo Macharia King'ori", capacity: "Personal Guarantee" },
    { name: "Khalhani", capacity: "Co-Investor Guarantee" },
  ],
  loanTerms: {
    principalAmount: 2000000,
    currency: "KES",
    repaymentDate: "2026-01-31",
    defaultInterest: { rate: "5% monthly", compounding: "compound" },
  },
  eventsOfDefault: [
    "Failure to repay principal by due date",
    "Material misrepresentation of financial position",
    "Unauthorized use of funds outside approved budget",
    "Failure to provide monthly financial statements",
  ],
  enforcement: [
    "Demand immediate repayment of all outstanding amounts",
    "Apply default interest from date of default",
    "Enforce personal guarantees",
    "Suspend all future capital support",
  ],
  signatories: [
    { name: "Michael Anthony Macharia", role: "Lender", date: "2025-10-01" },
    { name: "Leo Macharia King'ori", role: "Borrower", date: "2025-10-01" },
    { name: "Khalhani", role: "Co-Investor / Guarantor", date: "2025-10-01" },
  ],
};

export const KOLA_BANK_HISTORY = {
  governanceInsights: [
    { finding: "No dedicated business bank account — personal and business funds commingled", severity: "critical", recommendation: "Open a separate business account for all venture-related transactions" },
    { finding: "Cash withdrawals not reconciled with expense receipts", severity: "high", recommendation: "Implement a receipt-matching policy for all cash transactions" },
    { finding: "Tikiti platform payouts received into personal account", severity: "high", recommendation: "Route all business revenue through a business account" },
    { finding: "No financial reporting to investors during capital deployment", severity: "critical", recommendation: "Provide weekly financial updates with bank statement extracts" },
    { finding: "Loan proceeds not tracked separately from personal income", severity: "medium", recommendation: "Maintain a separate ledger for investor capital" },
  ],
};
