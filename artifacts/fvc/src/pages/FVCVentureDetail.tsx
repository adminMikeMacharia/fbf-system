import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  Users,
  Target,
  Clock,
  Landmark,
  TrendingUp,
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  BarChart3,
  MessageSquare,
  Quote,
  User,
  Lightbulb,
  BookOpen,
  Ban,
  Banknote,
  ShieldAlert,
} from "lucide-react";
import {
  KOLA_COMPANY, KOLA_TIMELINE, KOLA_FINANCIALS, KOLA_TEAM,
  KOLA_GOVERNANCE, KOLA_LESSONS, LEO_REFLECTION,
  KOLA_LOAN_AGREEMENT, KOLA_BANK_HISTORY,
  type TeamMember,
  type GovernanceIssue,
  type Lesson,
  type TimelineEvent,
  type KolaFinancials,
} from "@workspace/kola-data";

interface FundingDetail {
  label: string;
  value: string;
  instrument: string;
  terms: string;
  status: string;
}

interface FundingStructure {
  type: string;
  details: FundingDetail[];
}

interface Milestone {
  title: string;
  status: string;
  date: string;
  note: string;
}

interface Update {
  date: string;
  title: string;
  type: "positive" | "warning" | "critical" | "info";
}

interface SimpleTeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  notes: string;
}

interface VentureData {
  name: string;
  founder: string;
  coFounder: string;
  sector: string;
  stage: string;
  fundingTarget: number;
  amountRaised: number;
  instrument: string;
  timeline: string;
  isCaseStudy: boolean;
  pitch: string;
  team: TeamMember[] | SimpleTeamMember[];
  financials: KolaFinancials | null;
  governance: GovernanceIssue[];
  lessons: Lesson[];
  timeline_events: TimelineEvent[];
  milestones: Milestone[];
  riskFactors: string[];
  fundingStructure: FundingStructure;
  updates: Update[];
}

const VENTURES_DATA: Record<string, VentureData> = {
  kola: {
    name: "Kola Entertainment Ltd",
    founder: "Leo Macharia King'ori",
    coFounder: "Luke Akolade Ganiyu",
    sector: "Entertainment / Events",
    stage: "Reporting",
    fundingTarget: 1500000,
    amountRaised: 1500000,
    instrument: "Convertible Loan + Equity (disputed)",
    timeline: "Oct 2025 – Present",
    isCaseStudy: true,
    pitch: "Youth-led entertainment company producing large-scale music events in Nairobi. Kolacopia 3.0 featured international artist Kamo Mphela at Masshouse, drawing 2,400 attendees. The venture demonstrated strong demand but critical governance gaps — making it the founding case study for FVC's governance framework.",
    team: KOLA_TEAM,
    financials: KOLA_FINANCIALS,
    governance: KOLA_GOVERNANCE,
    lessons: KOLA_LESSONS,
    timeline_events: KOLA_TIMELINE,
    milestones: [
      { title: "Company Registration", status: "completed", date: "2025-10-13", note: "PVT-BB1OJOZ9 — registered after contracts were already signed (governance issue)" },
      { title: "Kolacopia 3.0 Event", status: "completed", date: "2025-11-22", note: "1,395 tickets sold, ~2,400 attendance. Event successful but financially net negative." },
      { title: "Post-Event Financial Audit", status: "overdue", date: "2025-12-15", note: "Cashflow template shared but KSh 129K discrepancy unresolved. Full audit pending." },
      { title: "Governance Reset", status: "pending", date: "2026-03-01", note: "Joint bank account, signed legal agreements, and corporate lawyer clean-up required." },
    ],
    riskFactors: [
      "Minor (under 18) serving as founder — shares held in trust",
      "Artist-driven events carry extreme concentration risk — single cost line can wipe revenue",
      "Governance failures: unsigned agreements, no joint bank accounts, unilateral commitments",
      "Revenue was 43% of projection — significant forecasting risk",
      "Co-founder disputes on equity vs loan treatment of capital",
    ],
    fundingStructure: {
      type: "Convertible Loan + Equity (disputed)",
      details: [
        { label: "Michael Macharia Investment", value: "KSh 257,000", instrument: "Convertible Loan", terms: "30% flat interest, auto-converts to equity on 90th day", status: "In Default" },
        { label: "Khalhani Sichangi Investment", value: "KSh 1,200,000", instrument: "Equity/Loan (disputed)", terms: "Treatment disputed — equity discussion never finalized", status: "Repayment Requested" },
      ],
    },
    updates: [
      { date: "2026-04-07", title: "Loan repayment due date — KES 376,600 interest-free if paid by this date", type: "warning" },
      { date: "2026-03-19", title: "Loan Agreement (KES 376,600) drafted — personal guarantees from Luke & Euan, promissory note", type: "info" },
      { date: "2026-03-19", title: "Leo submits personal Kola Review & Reflection document", type: "positive" },
      { date: "2026-02-03", title: "Euan Odenyo (third partner) surfaces; requests reset meeting", type: "info" },
      { date: "2026-02-02", title: "AyraStarr contract discovered — 27x previous artist cost (~$132K USD), signed without investor approval. DIRECT TRIGGER for Michael's exit.", type: "critical" },
      { date: "2026-01-26", title: "Both investors threaten exit unless governance resolved", type: "warning" },
      { date: "2026-01-24", title: "Leo asks Boya about transferring $66K USD AyraStarr deposits — reveals hidden scale of commitment", type: "critical" },
      { date: "2026-01-15", title: "Leo initiates Boya bank account unilaterally — no investor involvement in selection", type: "warning" },
      { date: "2025-12-29", title: "NYE LINK UP partnership announced (Kola x Abantu x Xfest)", type: "info" },
      { date: "2025-11-27", title: "Post-event review call — KSh 129K discrepancy in cashflow", type: "warning" },
      { date: "2025-11-25", title: "Kolacopia Report: KSh 1.39M net loss revealed", type: "critical" },
      { date: "2025-11-22", title: "Kolacopia 3.0 event held — 1,395 tickets, ~2,400 attendance", type: "positive" },
    ],
  },
  "mazao-agri": {
    name: "Mazao AgriTech",
    founder: "Amina Osei",
    coFounder: "Kwame Asante",
    sector: "Agriculture / Technology",
    stage: "Fundraising",
    fundingTarget: 5000000,
    amountRaised: 2100000,
    instrument: "Revenue Share",
    timeline: "Jan 2026 – Jun 2026",
    isCaseStudy: false,
    pitch: "Mobile-first marketplace connecting 12,000+ smallholder farmers in Kenya and Ghana to urban buyers. Revenue share model offers investors 15% of gross revenue until 2x return is achieved. Currently processing 450+ orders/month with 35% month-over-month growth.",
    team: [
      { name: "Amina Osei", role: "CEO & Co-Founder", initials: "AO", color: "#2AAF6A", notes: "10 years in agricultural supply chains. Ex-Twiga Foods." },
      { name: "Kwame Asante", role: "CTO & Co-Founder", initials: "KA", color: "#3A8ACA", notes: "Built logistics platforms for Safaricom M-PESA ecosystem." },
      { name: "Grace Nyambura", role: "Head of Operations", initials: "GN", color: "#D4A832", notes: "Manages farmer onboarding and quality assurance across both markets." },
    ],
    milestones: [
      { title: "Platform Launch (Kenya)", status: "completed", date: "2025-09-15", note: "Launched with 3,000 farmers and 50 urban buyers in Nairobi." },
      { title: "Ghana Market Entry", status: "completed", date: "2026-01-10", note: "Expanded to Accra with 2,000 farmers onboarded." },
      { title: "Revenue Share Payments Begin", status: "in-progress", date: "2026-04-01", note: "First quarterly distribution to investors based on gross revenue." },
      { title: "Cold Chain Integration", status: "pending", date: "2026-06-01", note: "Partnership with logistics provider for perishable goods." },
      { title: "Series A Readiness", status: "pending", date: "2026-09-01", note: "Unit economics validation and institutional fundraise preparation." },
      { title: "10,000 Monthly Orders", status: "pending", date: "2026-12-01", note: "Scale target for sustainable operations." },
    ],
    riskFactors: [
      "Agricultural supply chains subject to seasonal variability and weather risk",
      "Cross-border operations (Kenya-Ghana) add regulatory and currency complexity",
      "Revenue share model requires sustained revenue growth to deliver investor returns",
    ],
    fundingStructure: {
      type: "Revenue Share Agreement",
      details: [
        { label: "Revenue Share Pool", value: "KSh 5,000,000", instrument: "Revenue Share", terms: "15% of gross revenue distributed quarterly until 2x return", status: "Active" },
      ],
    },
    updates: [
      { date: "2026-03-15", title: "Monthly orders hit 520 — exceeding projections by 15%", type: "positive" },
      { date: "2026-02-20", title: "Ghana farmer onboarding reached 4,500 (ahead of schedule)", type: "positive" },
      { date: "2026-01-10", title: "Ghana market launch completed successfully", type: "positive" },
    ],
    governance: [],
    lessons: [],
    timeline_events: [],
    financials: null,
  },
  "nexgen-health": {
    name: "NexGen Health Solutions",
    founder: "Dr. Samuel Ochieng",
    coFounder: "Dr. Faith Wambui",
    sector: "HealthTech",
    stage: "Due Diligence",
    fundingTarget: 8000000,
    amountRaised: 0,
    instrument: "Equity (SAFE Note)",
    timeline: "Q2 2026",
    isCaseStudy: false,
    pitch: "AI-powered diagnostic platform for community health workers in East Africa. Trained on 50,000+ clinical cases from partner hospitals. Currently in pilot with 3 county hospitals in Kenya, achieving 87% diagnostic accuracy for common conditions. Pre-revenue — seeking seed funding to scale pilot and build evidence base.",
    team: [
      { name: "Dr. Samuel Ochieng", role: "CEO & Co-Founder", initials: "SO", color: "#E8394A", notes: "Medical doctor with 15 years clinical experience. Built diagnostic tools for WHO." },
      { name: "Dr. Faith Wambui", role: "CTO & Co-Founder", initials: "FW", color: "#8A5ABF", notes: "ML engineer. PhD in Health Informatics from University of Cape Town." },
    ],
    milestones: [
      { title: "Clinical Pilot Phase 1", status: "completed", date: "2025-11-01", note: "Pilot with Kiambu County Hospital — 87% accuracy on 1,200 cases." },
      { title: "FVC Due Diligence", status: "in-progress", date: "2026-03-01", note: "Legal, financial, and clinical validation underway." },
      { title: "Regulatory Approval", status: "pending", date: "2026-05-01", note: "Kenya Pharmacy and Poisons Board submission." },
      { title: "Fundraising Open", status: "pending", date: "2026-06-01", note: "SAFE Note offering to FVC network." },
      { title: "Scale to 10 Counties", status: "pending", date: "2026-12-01", note: "Geographic expansion across Kenya." },
      { title: "Revenue Model Launch", status: "pending", date: "2027-03-01", note: "Per-diagnosis SaaS pricing for county health departments." },
      { title: "East Africa Expansion", status: "pending", date: "2027-06-01", note: "Uganda and Tanzania market entry." },
      { title: "Series A Preparation", status: "pending", date: "2027-09-01", note: "Institutional fundraise with clinical evidence base." },
    ],
    riskFactors: [
      "Pre-revenue — no proven business model yet",
      "Regulatory approval required before commercial deployment",
      "AI diagnostic accuracy needs continued clinical validation",
      "Healthcare adoption cycles are long — government partnerships take time",
    ],
    fundingStructure: {
      type: "SAFE Note (Simple Agreement for Future Equity)",
      details: [
        { label: "SAFE Note", value: "KSh 8,000,000", instrument: "SAFE Note", terms: "Valuation cap at KSh 40M, 20% discount on next priced round", status: "Pending DD" },
      ],
    },
    updates: [
      { date: "2026-03-10", title: "Due diligence initiated — legal and clinical review underway", type: "info" },
      { date: "2026-02-15", title: "Clinical pilot results published — 87% accuracy confirmed", type: "positive" },
    ],
    governance: [],
    lessons: [],
    timeline_events: [],
    financials: null,
  },
  "craft-collective": {
    name: "Craft Collective Africa",
    founder: "Wanjiku Kamau",
    coFounder: "David Mwangi",
    sector: "E-Commerce / Artisan",
    stage: "Funded",
    fundingTarget: 3000000,
    amountRaised: 3000000,
    instrument: "Convertible Loan",
    timeline: "Nov 2025 – May 2026",
    isCaseStudy: false,
    pitch: "Pan-African artisan marketplace connecting 800+ craft makers across Kenya, Tanzania, and Ethiopia to global buyers. Convertible loan structure at 20% annual interest. Currently generating KSh 1.2M monthly GMV with 18% take rate. Fully funded — now in execution phase.",
    team: [
      { name: "Wanjiku Kamau", role: "CEO & Co-Founder", initials: "WK", color: "#D4A832", notes: "Former Jumia category manager. 8 years in e-commerce." },
      { name: "David Mwangi", role: "COO & Co-Founder", initials: "DM", color: "#2AAF6A", notes: "Supply chain specialist. Built artisan networks across East Africa." },
      { name: "Esther Achieng", role: "Head of Marketing", initials: "EA", color: "#E89832", notes: "Digital marketing lead. Grew social following to 45K in 6 months." },
    ],
    milestones: [
      { title: "Platform Launch", status: "completed", date: "2025-08-01", note: "Launched marketplace with 200 artisans in Kenya." },
      { title: "FVC Funding Closed", status: "completed", date: "2025-11-15", note: "KSh 3M raised via convertible loan from FVC network." },
      { title: "Tanzania Expansion", status: "completed", date: "2026-01-20", note: "Onboarded 300 artisans in Dar es Salaam and Arusha." },
      { title: "Monthly GMV KSh 2M", status: "in-progress", date: "2026-04-01", note: "Currently at KSh 1.2M — scaling marketing spend." },
      { title: "Ethiopia Market Entry", status: "pending", date: "2026-06-01", note: "Addis Ababa launch with 200 initial artisans." },
    ],
    riskFactors: [
      "Cross-border logistics and customs create fulfillment complexity",
      "Artisan quality consistency requires ongoing curation and training",
      "Currency fluctuations affect cross-border pricing",
    ],
    fundingStructure: {
      type: "Convertible Loan",
      details: [
        { label: "Convertible Loan", value: "KSh 3,000,000", instrument: "Convertible Loan", terms: "20% annual interest, converts to equity at next priced round (20% discount)", status: "Active" },
      ],
    },
    updates: [
      { date: "2026-03-01", title: "Monthly GMV reached KSh 1.2M — on track for Q2 targets", type: "positive" },
      { date: "2026-01-20", title: "Tanzania expansion completed — 300 artisans onboarded", type: "positive" },
      { date: "2025-12-15", title: "First monthly financial report submitted on time", type: "positive" },
    ],
    governance: [],
    lessons: [],
    timeline_events: [],
    financials: null,
  },
};

function formatCurrency(amount: number) {
  if (amount >= 1000000) return `KSh ${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `KSh ${(amount / 1000).toFixed(0)}K`;
  return `KSh ${amount.toLocaleString()}`;
}

function MilestoneStatus({ status }: { status: string }) {
  const styles: Record<string, { icon: typeof CheckCircle2; color: string }> = {
    completed: { icon: CheckCircle2, color: "text-green-400" },
    "in-progress": { icon: Clock, color: "text-[#F40009]" },
    overdue: { icon: AlertTriangle, color: "text-red-400" },
    pending: { icon: Clock, color: "text-gray-600" },
  };
  const s = styles[status] || styles.pending;
  const Icon = s.icon;
  return <Icon className={`w-4 h-4 ${s.color}`} />;
}

function SectionTitle({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-[#F40009]" />
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
    </div>
  );
}

function FinRow({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-gray-800/50">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`text-sm font-semibold ${color || "text-white"}`}>{value}</span>
    </div>
  );
}

export default function FVCVentureDetail() {
  const params = useParams<{ id: string }>();
  const venture = VENTURES_DATA[params.id || ""];

  if (!venture) {
    return (
      <div className="min-h-screen bg-[#003153] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display mb-2">Venture Not Found</h2>
          <Link href="/ventures" className="text-[#F40009] text-sm no-underline">← Back to Ventures</Link>
        </div>
      </div>
    );
  }

  const pct = venture.fundingTarget > 0 ? Math.round((venture.amountRaised / venture.fundingTarget) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#003153] text-white">
      <header className="border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/ventures" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-4 no-underline">
            <ArrowLeft className="w-3 h-3" /> Back to Ventures
          </Link>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-display font-semibold text-white">{venture.name}</h1>
                {venture.isCaseStudy && (
                  <span className="text-[10px] font-bold tracking-wider px-2 py-1 rounded bg-[#F40009]/20 text-[#F40009]/80 border border-[#F40009]/30">CASE STUDY #1</span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {venture.founder}</span>
                <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {venture.sector}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {venture.timeline}</span>
                <span className="flex items-center gap-1"><Landmark className="w-3 h-3" /> {venture.instrument}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#F40009]">{formatCurrency(venture.amountRaised)}</div>
              <div className="text-xs text-gray-500">of {formatCurrency(venture.fundingTarget)} · {pct}%</div>
              <div className="w-32 h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <div className="h-full rounded-full bg-[#F40009]" style={{ width: `${Math.min(pct, 100)}%` }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <SectionTitle icon={FileText} title="Pitch Overview" />
          <p className="text-sm text-gray-400 leading-relaxed">{venture.pitch}</p>
        </section>

        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <SectionTitle icon={Users} title="Team" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {venture.team.map((member) => (
              <div key={member.name} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: `${member.color}20`, color: member.color }}>
                  {member.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{member.name}</h4>
                  <p className="text-xs text-[#F40009]">{member.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{member.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {venture.financials && (
          <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <SectionTitle icon={BarChart3} title="Financial Projections vs Actuals" />
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Projected</h4>
                <div className="space-y-2">
                  <FinRow label="Revenue" value={`KSh ${(venture.financials.projected.revenue / 1000000).toFixed(1)}M`} />
                  <FinRow label="Costs" value={`KSh ${(venture.financials.projected.costs / 1000000).toFixed(1)}M`} />
                  <FinRow label="Profit" value={`+KSh ${(venture.financials.projected.profit / 1000000).toFixed(1)}M`} color="text-green-400" />
                  <FinRow label="Margin" value={`${venture.financials.projected.margin}%`} color="text-green-400" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Actual</h4>
                <div className="space-y-2">
                  <FinRow label="Gross Revenue" value={`KSh ${(venture.financials.actual.grossRevenue / 1000000).toFixed(1)}M`} />
                  <FinRow label="Total Costs" value={`KSh ${(venture.financials.actual.totalCosts / 1000000).toFixed(1)}M`} color="text-[#F40009]" />
                  <FinRow label="Net Loss" value={`–KSh ${(venture.financials.actual.netLoss / 1000000).toFixed(1)}M`} color="text-red-400" />
                  <FinRow label="Margin" value={`${venture.financials.actual.margin}%`} color="text-red-400" />
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <SectionTitle icon={Landmark} title="Funding Structure" />
          <p className="text-sm text-gray-400 mb-4">{venture.fundingStructure.type}</p>
          <div className="space-y-3">
            {venture.fundingStructure.details.map((d) => (
              <div key={d.label} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">{d.label}</h4>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${d.status === "In Default" ? "bg-red-900/50 text-red-300" : d.status === "Active" ? "bg-green-900/50 text-green-300" : "bg-gray-800 text-gray-400"}`}>
                    {d.status}
                  </span>
                </div>
                <div className="text-lg font-bold text-[#F40009] mb-1">{d.value}</div>
                <div className="text-xs text-gray-500">
                  <span className="text-gray-400">Instrument:</span> {d.instrument} · <span className="text-gray-400">Terms:</span> {d.terms}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <SectionTitle icon={TrendingUp} title="Milestones" />
          <div className="space-y-3">
            {venture.milestones.map((m) => (
              <div key={m.title} className="flex items-start gap-3 bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
                <MilestoneStatus status={m.status} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-semibold text-white">{m.title}</h4>
                    <span className="text-xs text-gray-600">{m.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {venture.governance && venture.governance.length > 0 && (
          <section className="bg-gray-900/50 border border-red-900/30 rounded-xl p-6">
            <SectionTitle icon={Shield} title="Governance Checklist" />
            <div className="space-y-2">
              {venture.governance.map((g, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${g.severity === "critical" ? "bg-red-950/30 border border-red-900/30" : "bg-[#F40009]/5 border border-[#F40009]/10"}`}>
                  {g.severity === "critical" ? <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-4 h-4 text-[#F40009] mt-0.5 flex-shrink-0" />}
                  <span className="text-sm text-gray-300">{g.issue}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <SectionTitle icon={AlertTriangle} title="Risk Factors" />
          <div className="space-y-2">
            {venture.riskFactors.map((risk, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-[#F40009] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{risk}</span>
              </div>
            ))}
          </div>
        </section>

        {venture.lessons && venture.lessons.length > 0 && (
          <section className="bg-gradient-to-br from-[#F40009]/5 to-transparent border border-[#F40009]/10 rounded-xl p-6">
            <SectionTitle icon={Target} title="Lessons Learned" />
            <div className="grid sm:grid-cols-2 gap-3">
              {venture.lessons.map((l, i) => {
                const alignmentColors: Record<string, { bg: string; text: string; label: string }> = {
                  aligned: { bg: "bg-green-900/30", text: "text-green-300", label: "ALIGNED" },
                  partial: { bg: "bg-amber-900/30", text: "text-[#F40009]/80", label: "PARTIAL" },
                  gap: { bg: "bg-red-900/30", text: "text-red-300", label: "GAP" },
                  "not-addressed": { bg: "bg-gray-800", text: "text-gray-400", label: "NOT ADDRESSED" },
                  "new-from-founder": { bg: "bg-blue-900/30", text: "text-blue-300", label: "NEW FROM FOUNDER" },
                };
                const fp = l.founderPerspective;
                const ac = fp ? alignmentColors[fp.alignment] : null;
                return (
                  <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold tracking-wider text-[#F40009] uppercase">{l.category}</span>
                      {ac && (
                        <span className={`text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded ${ac.bg} ${ac.text}`}>
                          {ac.label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{l.lesson}</p>
                    {fp && fp.quote && (
                      <p className="text-xs text-gray-500 mt-2 italic border-l-2 border-gray-700 pl-2">"{fp.quote}"</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {params.id === "kola" && (
          <section className="bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/15 rounded-xl p-6">
            <SectionTitle icon={User} title="Founder Reflection — Leo's Voice" />
            <p className="text-xs text-gray-500 mb-4">
              Leo Macharia's personal review and reflection on the Kola experience — his own assessment alongside the investor-side analysis.
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">Self-Assessment Summary</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-green-400 font-bold uppercase tracking-wider mb-2">What Went Right</p>
                  <div className="space-y-2">
                    {LEO_REFLECTION.strengths.map((s) => (
                      <div key={s.id} className="bg-green-950/20 border border-green-900/20 rounded-lg p-3">
                        <h5 className="text-xs font-semibold text-white">{s.title}</h5>
                        <p className="text-xs text-gray-500 mt-1">{s.insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[#F40009] font-bold uppercase tracking-wider mb-2">What Went Wrong</p>
                  <div className="space-y-2">
                    {LEO_REFLECTION.weaknesses.slice(0, 4).map((w) => (
                      <div key={w.id} className="bg-[#F40009]/5 border border-[#F40009]/10 rounded-lg p-3">
                        <h5 className="text-xs font-semibold text-white">{w.title}</h5>
                        <p className="text-xs text-gray-500 mt-1">{w.insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3 flex items-center gap-2">
                <Quote className="w-3 h-3" /> Key Quotes
              </h4>
              <div className="space-y-2">
                {LEO_REFLECTION.keyQuotes.slice(0, 5).map((q, i) => (
                  <blockquote key={i} className="border-l-2 border-blue-500/30 pl-4 py-2 bg-gray-800/20 rounded-r-lg">
                    <p className="text-sm text-gray-300 italic">"{q.quote}"</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-blue-400 bg-blue-900/30 px-1.5 py-0.5 rounded">{q.theme}</span>
                      <span className="text-[10px] text-gray-600">{q.significance}</span>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3 flex items-center gap-2">
                <Lightbulb className="w-3 h-3" /> Forward-Looking Commitments
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {LEO_REFLECTION.forwardCommitments.map((fc) => (
                  <div key={fc.id} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-3">
                    <p className="text-sm text-white font-medium">{fc.commitment}</p>
                    <span className="text-[10px] text-blue-400 bg-blue-900/30 px-1.5 py-0.5 rounded mt-1 inline-block">{fc.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {params.id === "kola" && (
          <section className="bg-gradient-to-br from-red-500/10 to-transparent border-2 border-red-500/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Ban className="w-6 h-6 text-red-400" />
              <h2 className="font-display text-xl font-semibold text-red-300">Investor Red Line — AyraStarr Breach</h2>
            </div>
            <div className="bg-red-950/40 border border-red-900/40 rounded-lg p-4 mb-4">
              <p className="text-sm text-red-200 font-semibold mb-2">
                {LEO_REFLECTION.parentingIntelligence.investorRedLine.trigger}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                {LEO_REFLECTION.parentingIntelligence.investorRedLine.description}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                <span className="text-red-300 font-semibold">Consequence:</span> {LEO_REFLECTION.parentingIntelligence.investorRedLine.consequence}
              </p>
            </div>
            <div className="bg-red-950/60 border-2 border-red-500/40 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="w-5 h-5 text-red-400" />
                <h3 className="text-sm font-bold text-red-300 uppercase tracking-wider">
                  {LEO_REFLECTION.ventureFramework.nonNegotiableRule.rule}
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                {LEO_REFLECTION.ventureFramework.nonNegotiableRule.context}
              </p>
              <div className="space-y-1.5">
                {LEO_REFLECTION.ventureFramework.nonNegotiableRule.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-red-900/40">
                <p className="text-xs text-red-300 font-semibold italic">
                  {LEO_REFLECTION.ventureFramework.nonNegotiableRule.consequence}
                </p>
              </div>
            </div>
          </section>
        )}

        {params.id === "kola" && (
          <section className="bg-gradient-to-br from-[#F40009]/5 to-transparent border border-amber-500/15 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Banknote className="w-5 h-5 text-[#F40009]" />
              <h2 className="font-display text-xl font-semibold text-white">Loan Agreement & Debt Settlement</h2>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white">{KOLA_LOAN_AGREEMENT.meta.title}</h3>
                <span className="text-[10px] font-bold tracking-wider px-2 py-1 rounded bg-[#F40009]/20 text-[#F40009]/80 border border-[#F40009]/30">
                  {KOLA_LOAN_AGREEMENT.meta.status.toUpperCase().replace("-", " ")}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Principal</span><span className="text-[#F40009] font-bold">KES {KOLA_LOAN_AGREEMENT.loanTerms.principalAmount.toLocaleString()}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Due Date</span><span className="text-white">{KOLA_LOAN_AGREEMENT.loanTerms.repaymentDate}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Interest (if on time)</span><span className="text-green-400">0% (Interest-Free)</span></div>
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Default Interest</span><span className="text-red-400">{KOLA_LOAN_AGREEMENT.loanTerms.defaultInterest.rate} compound</span></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Lender</span><span className="text-white">{KOLA_LOAN_AGREEMENT.parties.lender.name}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Borrower</span><span className="text-white">{KOLA_LOAN_AGREEMENT.parties.borrower.name}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Guarantor 1</span><span className="text-white">{KOLA_LOAN_AGREEMENT.personalGuarantors[0].name}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-gray-500">Guarantor 2</span><span className="text-white">{KOLA_LOAN_AGREEMENT.personalGuarantors[1].name}</span></div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Events of Default</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {KOLA_LOAN_AGREEMENT.eventsOfDefault.map((evt, i) => (
                  <div key={i} className="flex items-start gap-2 bg-red-950/20 border border-red-900/20 rounded-lg p-3">
                    <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{evt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Enforcement Rights</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {KOLA_LOAN_AGREEMENT.enforcement.map((action, i) => (
                  <div key={i} className="flex items-start gap-2 bg-gray-800/30 border border-gray-700/30 rounded-lg p-3">
                    <Shield className="w-3.5 h-3.5 text-[#F40009] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Signatories</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {KOLA_LOAN_AGREEMENT.signatories.map((sig, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-800/30 border border-gray-700/30 rounded-lg p-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${sig.signed ? "bg-green-400" : "bg-gray-600"}`} />
                    <div>
                      <p className="text-xs text-white">{"name" in sig ? sig.name : "entity" in sig ? sig.entity : "TBD"}</p>
                      <p className="text-[10px] text-gray-500">{sig.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Bank Account Governance Context</h4>
              <div className="space-y-2">
                {KOLA_BANK_HISTORY.governanceInsights.map((insight, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${insight.severity === "critical" ? "bg-red-950/30 border border-red-900/30" : "bg-[#F40009]/5 border border-[#F40009]/10"}`}>
                    {insight.severity === "critical" ? <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-4 h-4 text-[#F40009] mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="text-sm text-gray-300">{insight.issue}</p>
                      <p className="text-[10px] text-gray-600 mt-1">{insight.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {params.id === "kola" && (
          <section className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/15 rounded-xl p-6">
            <SectionTitle icon={BookOpen} title="Next Venture Playbook" />
            <p className="text-xs text-gray-500 mb-4">
              {LEO_REFLECTION.ventureFramework.title} — Leo's own articulated principles cross-referenced with investor governance requirements.
            </p>

            <div className="space-y-3 mb-6">
              {LEO_REFLECTION.ventureFramework.principles.map((p) => (
                <div key={p.id} className="bg-gray-800/30 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-white">{p.principle}</h4>
                    <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded ${
                      p.aligned === true ? "bg-green-900/30 text-green-300" : p.aligned === "partial" ? "bg-amber-900/30 text-[#F40009]/80" : "bg-gray-800 text-gray-400"
                    }`}>
                      {p.aligned === true ? "ALIGNED" : p.aligned === "partial" ? "PARTIAL" : String(p.aligned).toUpperCase()}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mt-2">
                    <div>
                      <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">Leo Says</p>
                      <p className="text-xs text-gray-400 italic">"{p.leoSays}"</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#F40009] font-bold uppercase tracking-wider mb-1">Investor Requirement</p>
                      <p className="text-xs text-gray-400">{p.investorRequirement}</p>
                    </div>
                  </div>
                  {p.gap && (
                    <div className="mt-2 p-2 bg-[#F40009]/5 rounded border border-[#F40009]/10">
                      <p className="text-xs text-[#F40009]/80"><span className="font-bold">Gap:</span> {p.gap}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">Pre-Conditions for Next Venture</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {LEO_REFLECTION.ventureFramework.preConditionsForNextVenture.map((cond, i) => (
                  <div key={i} className="flex items-start gap-2 bg-gray-800/20 rounded-lg p-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{cond}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <SectionTitle icon={MessageSquare} title="Investor Updates" />
          <div className="space-y-3">
            {venture.updates.map((u, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${u.type === "critical" ? "bg-red-400" : u.type === "warning" ? "bg-amber-400" : u.type === "positive" ? "bg-green-400" : "bg-gray-500"}`} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">{u.date}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-0.5">{u.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-600">Founders Venture Capital · {venture.name} · {venture.stage}</p>
        </div>
      </footer>
    </div>
  );
}
