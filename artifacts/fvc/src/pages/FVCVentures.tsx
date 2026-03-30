import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Target,
  Landmark,
} from "lucide-react";

type Stage = "All" | "Application" | "Due Diligence" | "Fundraising" | "Funded" | "Active" | "Reporting";

const STAGE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "Application": { bg: "bg-gray-800", text: "text-gray-300", dot: "bg-gray-400" },
  "Due Diligence": { bg: "bg-blue-900/50", text: "text-blue-300", dot: "bg-blue-400" },
  "Fundraising": { bg: "bg-amber-900/50", text: "text-[#F40009]/80", dot: "bg-amber-400" },
  "Funded": { bg: "bg-green-900/50", text: "text-green-300", dot: "bg-green-400" },
  "Active": { bg: "bg-emerald-900/50", text: "text-emerald-300", dot: "bg-emerald-400" },
  "Reporting": { bg: "bg-purple-900/50", text: "text-purple-300", dot: "bg-purple-400" },
};

const VENTURES = [
  {
    id: "kola",
    name: "Kola Entertainment Ltd",
    founder: "Leo Macharia King'ori",
    sector: "Entertainment / Events",
    stage: "Reporting" as Stage,
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
    stage: "Fundraising" as Stage,
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
    stage: "Due Diligence" as Stage,
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
    stage: "Funded" as Stage,
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

const PIPELINE_STAGES: Stage[] = ["Application", "Due Diligence", "Fundraising", "Funded", "Active", "Reporting"];

function formatCurrency(amount: number) {
  if (amount >= 1000000) return `KSh ${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `KSh ${(amount / 1000).toFixed(0)}K`;
  return `KSh ${amount}`;
}

export default function FVCVentures() {
  const [activeStage, setActiveStage] = useState<Stage>("All");
  const filtered = activeStage === "All" ? VENTURES : VENTURES.filter((v) => v.stage === activeStage);

  return (
    <div className="min-h-screen bg-[#003153] text-white">
      <header className="border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-medium tracking-[0.3em] text-[#F40009] uppercase mb-1">FVC Deal Flow</p>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-white">Venture Listings</h1>
          <p className="text-gray-400 mt-2 text-sm max-w-2xl">
            Curated investment opportunities from the Founders Battlefield network. Each venture has passed initial screening and meets FVC's minimum governance requirements.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h3 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">Deal Flow Pipeline</h3>
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {PIPELINE_STAGES.map((stage, i) => {
              const count = VENTURES.filter((v) => v.stage === stage).length;
              const colors = STAGE_COLORS[stage];
              return (
                <div key={stage} className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveStage(activeStage === stage ? "All" : stage)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                      activeStage === stage ? "bg-[#F40009]/20 text-[#F40009]/80 border border-[#F40009]/30" : `${colors.bg} ${colors.text} border border-transparent hover:border-gray-700`
                    }`}
                  >
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors.dot} mr-1.5`} />
                    {stage} ({count})
                  </button>
                  {i < PIPELINE_STAGES.length - 1 && <ArrowRight className="w-3 h-3 text-gray-700 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{VENTURES.length}</div>
            <div className="text-xs text-gray-500">Total Ventures</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-[#F40009]">{formatCurrency(VENTURES.reduce((s, v) => s + v.amountRaised, 0))}</div>
            <div className="text-xs text-gray-500">Total Capital Raised</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{VENTURES.filter((v) => v.stage === "Fundraising").length}</div>
            <div className="text-xs text-gray-500">Open for Investment</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-400">{VENTURES.filter((v) => ["Funded", "Active", "Reporting"].includes(v.stage)).length}</div>
            <div className="text-xs text-gray-500">Funded / Active</div>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((venture) => {
            const pct = venture.fundingTarget > 0 ? Math.round((venture.amountRaised / venture.fundingTarget) * 100) : 0;
            const colors = STAGE_COLORS[venture.stage];
            return (
              <Link key={venture.id} href={`/ventures/${venture.id}`} className="block no-underline">
                <div className={`bg-gray-900/50 border rounded-xl p-6 hover:border-[#F40009]/30 transition-colors ${venture.isCaseStudy ? "border-amber-500/20" : "border-gray-800"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-display text-lg font-semibold text-white">{venture.name}</h3>
                        <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                          {venture.stage.toUpperCase()}
                        </span>
                        {venture.isCaseStudy && (
                          <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#F40009]/20 text-[#F40009]/80">
                            CASE STUDY #1
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{venture.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {venture.founder}</span>
                        <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {venture.sector}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {venture.timeline}</span>
                        <span className="flex items-center gap-1"><Landmark className="w-3 h-3" /> {venture.instrument}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold text-[#F40009]">{formatCurrency(venture.amountRaised)}</div>
                      <div className="text-xs text-gray-500">of {formatCurrency(venture.fundingTarget)}</div>
                      <div className="w-24 h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full rounded-full bg-[#F40009]" style={{ width: `${Math.min(pct, 100)}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{pct}% funded</div>
                    </div>
                  </div>
                  {venture.milestones > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-800/50 flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-500">Milestones: {venture.milestonesCompleted}/{venture.milestones} completed</span>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: venture.milestones }).map((_, i) => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i < venture.milestonesCompleted ? "bg-[#F40009]" : "bg-gray-800"}`} />
                        ))}
                      </div>
                      <div className="ml-auto flex items-center gap-1 text-xs text-[#F40009]">
                        View Details <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
