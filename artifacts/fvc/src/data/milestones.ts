export interface VentureMilestone {
  ventureId: string;
  title: string;
  description: string;
  completed: boolean;
}

export const VENTURE_MILESTONES: VentureMilestone[] = [
  { ventureId: "kola", title: "Company Registration", description: "PVT-BB1OJOZ9 — registered after contracts were already signed (governance issue)", completed: true },
  { ventureId: "kola", title: "Kolacopia 3.0 Event", description: "1,395 tickets sold, ~2,400 attendance. Event successful but financially net negative.", completed: true },
  { ventureId: "kola", title: "Post-Event Financial Audit", description: "Cashflow template shared but KSh 129K discrepancy unresolved. Full audit pending.", completed: false },
  { ventureId: "kola", title: "Governance Reset", description: "Joint bank account, signed legal agreements, and corporate lawyer clean-up required.", completed: false },
  { ventureId: "mazao-agri", title: "Platform Launch (Kenya)", description: "Launched with 3,000 farmers and 50 urban buyers in Nairobi.", completed: true },
  { ventureId: "mazao-agri", title: "Ghana Market Entry", description: "Expanded to Accra with 2,000 farmers onboarded.", completed: true },
  { ventureId: "mazao-agri", title: "Revenue Share Payments Begin", description: "First quarterly distribution to investors based on gross revenue.", completed: false },
  { ventureId: "mazao-agri", title: "Cold Chain Integration", description: "Partnership with logistics provider for perishable goods.", completed: false },
  { ventureId: "mazao-agri", title: "Series A Readiness", description: "Unit economics validation and institutional fundraise preparation.", completed: false },
  { ventureId: "mazao-agri", title: "10,000 Monthly Orders", description: "Scale target for sustainable operations.", completed: false },
  { ventureId: "nexgen-health", title: "Clinical Pilot Phase 1", description: "Pilot with Kiambu County Hospital — 87% accuracy on 1,200 cases.", completed: true },
  { ventureId: "nexgen-health", title: "FVC Due Diligence", description: "Legal, financial, and clinical validation underway.", completed: false },
  { ventureId: "nexgen-health", title: "Regulatory Approval", description: "Kenya Pharmacy and Poisons Board submission.", completed: false },
  { ventureId: "nexgen-health", title: "Fundraising Open", description: "SAFE Note offering to FVC network.", completed: false },
  { ventureId: "nexgen-health", title: "Scale to 10 Counties", description: "Geographic expansion across Kenya.", completed: false },
  { ventureId: "nexgen-health", title: "Revenue Model Launch", description: "Per-diagnosis SaaS pricing for county health departments.", completed: false },
  { ventureId: "nexgen-health", title: "East Africa Expansion", description: "Uganda and Tanzania market entry.", completed: false },
  { ventureId: "nexgen-health", title: "Series A Preparation", description: "Institutional fundraise with clinical evidence base.", completed: false },
  { ventureId: "craft-collective", title: "Platform Launch", description: "Launched marketplace with 200 artisans in Kenya.", completed: true },
  { ventureId: "craft-collective", title: "FVC Funding Closed", description: "KSh 3M raised via convertible loan from FVC network.", completed: true },
  { ventureId: "craft-collective", title: "Tanzania Expansion", description: "Onboarded 300 artisans in Dar es Salaam and Arusha.", completed: true },
  { ventureId: "craft-collective", title: "Monthly GMV KSh 2M", description: "Currently at KSh 1.2M — scaling marketing spend.", completed: false },
  { ventureId: "craft-collective", title: "Ethiopia Market Entry", description: "Addis Ababa launch with 200 initial artisans.", completed: false },
];
