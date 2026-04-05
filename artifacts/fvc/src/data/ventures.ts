export type Stage = "All" | "Application" | "Due Diligence" | "Fundraising" | "Funded" | "Active" | "Reporting";

export interface Venture {
  id: string;
  name: string;
  founder: string;
  sector: string;
  stage: Stage;
  fundingTarget: number;
  amountRaised: number;
  instrument: string;
  timeline: string;
  status: string;
  isCaseStudy: boolean;
  description: string;
  milestones: number;
  milestonesCompleted: number;
}

export const VENTURES: Venture[] = [
  {
    id: "kola",
    name: "Kola Entertainment Ltd",
    founder: "Leo Macharia King'ori",
    sector: "Entertainment / Events",
    stage: "Reporting",
    fundingTarget: 1500000,
    amountRaised: 1500000,
    instrument: "Convertible Loan + Equity",
    timeline: "Oct 2025 – Present",
    status: "Case Study #1",
    isCaseStudy: true,
    description: "Youth-led entertainment venture that ran Kolacopia 3.0 with Kamo Mphela. First FVC-tracked investment — the governance lessons from Kola directly shaped FVC's framework.",
    milestones: 4,
    milestonesCompleted: 2,
  },
  {
    id: "mazao-agri",
    name: "Mazao AgriTech",
    founder: "Amina Osei",
    sector: "Agriculture / Technology",
    stage: "Fundraising",
    fundingTarget: 5000000,
    amountRaised: 2100000,
    instrument: "Revenue Share",
    timeline: "Jan 2026 – Jun 2026",
    status: "Open for Investment",
    isCaseStudy: false,
    description: "Mobile-first marketplace connecting smallholder farmers in Kenya and Ghana to urban buyers. Revenue share model — investors earn 15% of gross revenue until 2x return.",
    milestones: 6,
    milestonesCompleted: 2,
  },
  {
    id: "nexgen-health",
    name: "NexGen Health Solutions",
    founder: "Dr. Samuel Ochieng",
    sector: "HealthTech",
    stage: "Due Diligence",
    fundingTarget: 8000000,
    amountRaised: 0,
    instrument: "Equity (SAFE Note)",
    timeline: "Q2 2026",
    status: "Under Review",
    isCaseStudy: false,
    description: "AI-powered diagnostic platform for community health workers in East Africa. Pre-revenue, backed by clinical partnerships with 3 county hospitals in Kenya.",
    milestones: 8,
    milestonesCompleted: 0,
  },
  {
    id: "craft-collective",
    name: "Craft Collective Africa",
    founder: "Wanjiku Kamau & David Mwangi",
    sector: "E-Commerce / Artisan",
    stage: "Funded",
    fundingTarget: 3000000,
    amountRaised: 3000000,
    instrument: "Convertible Loan",
    timeline: "Nov 2025 – May 2026",
    status: "Fully Funded",
    isCaseStudy: false,
    description: "Pan-African artisan marketplace connecting craft makers to global buyers. Convertible loan at 20% annual interest, converting to equity at next priced round.",
    milestones: 5,
    milestonesCompleted: 3,
  },
];

export const STAGE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "Application": { bg: "bg-gray-800", text: "text-gray-300", dot: "bg-gray-400" },
  "Due Diligence": { bg: "bg-blue-900/50", text: "text-blue-300", dot: "bg-blue-400" },
  "Fundraising": { bg: "bg-amber-900/50", text: "text-[#F40009]/80", dot: "bg-amber-400" },
  "Funded": { bg: "bg-green-900/50", text: "text-green-300", dot: "bg-green-400" },
  "Active": { bg: "bg-emerald-900/50", text: "text-emerald-300", dot: "bg-emerald-400" },
  "Reporting": { bg: "bg-purple-900/50", text: "text-purple-300", dot: "bg-purple-400" },
};

export const PIPELINE_STAGES: Stage[] = ["Application", "Due Diligence", "Fundraising", "Funded", "Active", "Reporting"];
