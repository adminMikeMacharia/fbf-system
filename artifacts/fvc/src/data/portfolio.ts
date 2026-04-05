export interface PortfolioInvestment {
  id: string;
  venture: string;
  invested: number;
  instrument: string;
  currentValue: number;
  returnRate: number;
  status: string;
  stage: string;
  milestones: { total: number; completed: number };
  lastUpdate: string;
}

export const PORTFOLIO: PortfolioInvestment[] = [
  {
    id: "kola",
    venture: "Kola Entertainment Ltd",
    invested: 257000,
    instrument: "Convertible Loan",
    currentValue: 257000,
    returnRate: -58,
    status: "In Default",
    stage: "Reporting",
    milestones: { total: 4, completed: 2 },
    lastUpdate: "2026-02-03",
  },
  {
    id: "craft-collective",
    venture: "Craft Collective Africa",
    invested: 500000,
    instrument: "Convertible Loan",
    currentValue: 525000,
    returnRate: 5,
    status: "Active",
    stage: "Funded",
    milestones: { total: 5, completed: 3 },
    lastUpdate: "2026-03-01",
  },
  {
    id: "mazao-agri",
    venture: "Mazao AgriTech",
    invested: 750000,
    instrument: "Revenue Share",
    currentValue: 780000,
    returnRate: 4,
    status: "Active",
    stage: "Fundraising",
    milestones: { total: 6, completed: 2 },
    lastUpdate: "2026-03-15",
  },
];

export interface VentureNotification {
  date: string;
  message: string;
  type: string;
  venture: string;
}

export const NOTIFICATIONS: VentureNotification[] = [
  { date: "2026-03-15", message: "Mazao AgriTech: Monthly orders hit 520 — exceeding projections by 15%", type: "positive", venture: "mazao-agri" },
  { date: "2026-03-10", message: "NexGen Health: Due diligence initiated — new investment opportunity", type: "info", venture: "nexgen-health" },
  { date: "2026-03-01", message: "Craft Collective: Monthly GMV reached KSh 1.2M — on track for targets", type: "positive", venture: "craft-collective" },
  { date: "2026-02-20", message: "Mazao AgriTech: Ghana farmer onboarding reached 4,500", type: "positive", venture: "mazao-agri" },
  { date: "2026-02-03", message: "Kola Entertainment: AyraStarr contract discovered — 27x cost increase without approval", type: "critical", venture: "kola" },
  { date: "2026-01-26", message: "Kola Entertainment: Both investors threaten exit unless governance resolved", type: "warning", venture: "kola" },
  { date: "2026-01-20", message: "Craft Collective: Tanzania expansion completed — 300 artisans onboarded", type: "positive", venture: "craft-collective" },
];
