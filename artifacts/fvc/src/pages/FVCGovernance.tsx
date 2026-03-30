import { Link } from "wouter";
import {
  Shield,
  Building2,
  FileText,
  Wallet,
  UserCheck,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Scale,
  Clock,
  BookOpen,
} from "lucide-react";

const REQUIREMENTS = [
  {
    icon: Building2,
    title: "Entity Registration",
    category: "Legal Foundation",
    description: "Every venture seeking FVC funding must be a registered legal entity — Ltd company, LLP, or equivalent. No funding to unregistered ventures or individuals.",
    requirements: [
      "Certificate of Incorporation / Registration",
      "CR12 (Register of Directors) — current and verified",
      "KRA PIN Certificate for the entity",
      "Physical address and registered office",
    ],
    kolaLesson: "Kola Entertainment was registered on Oct 13, but contracts with artists and venues were signed before the company existed. Contracts signed by individuals cannot be automatically assigned to the entity — creating legal exposure.",
  },
  {
    icon: FileText,
    title: "Signed Legal Agreements",
    category: "Investor Protection",
    description: "All legal agreements must be signed by all parties BEFORE any capital is disbursed. No exceptions for family, friends, or trust-based relationships.",
    requirements: [
      "Shareholder Agreement or Investment Agreement (equity)",
      "Convertible Loan Agreement (debt)",
      "Revenue Share Agreement (if applicable)",
      "Director service agreements for all founders",
      "Vesting schedules for founder equity",
    ],
    kolaLesson: "KSh 1.5M was deployed to Kola before any legal agreements were signed. The Equity Purchase Agreement was drafted after funds were already disbursed. When disputes arose about equity vs loan treatment, there was no signed document to reference.",
  },
  {
    icon: Wallet,
    title: "Joint-Signatory Bank Account",
    category: "Financial Controls",
    description: "All investor funds must be held in a joint-signatory bank account with at least one investor as a signatory. No funds to personal accounts or uncontrolled paybill numbers.",
    requirements: [
      "Dedicated business bank account in the entity's name",
      "At least one investor as co-signatory on the account",
      "No disbursement to personal M-PESA or individual accounts",
      "Monthly bank statements shared with investors",
    ],
    kolaLesson: "Kola used a BOYA spend management account (Paybill 553369) with no co-signatory controls. Investors had no visibility or control over how funds were spent. This enabled unilateral spending decisions.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Reporting",
    category: "Financial Transparency",
    description: "Ventures must submit standardized financial reports on a regular cadence — monthly for active ventures, weekly during high-activity periods (e.g., events).",
    requirements: [
      "Monthly P&L statement using FVC template",
      "Cash flow statement with all inflows and outflows",
      "Budget vs actual variance analysis",
      "Explanation for any variance >10% from projections",
      "Reports due by 5th of each month for previous month",
    ],
    kolaLesson: "Kola's financial reports were delayed repeatedly despite urgent investor requests. When the Kolacopia Report finally surfaced, it revealed a KSh 1.39M net loss and a KSh 129K discrepancy that remained unresolved. AI-generated reports were flagged as lacking genuine analysis.",
  },
  {
    icon: UserCheck,
    title: "KYC on Founders",
    category: "Due Diligence",
    description: "All founders and directors must pass KYC verification before the venture is listed on FVC. This includes identity verification, background checks, and conflict-of-interest declarations.",
    requirements: [
      "Government-issued ID (passport or national ID) for all directors",
      "Proof of address for all directors",
      "Background check clearance",
      "Conflict of interest declaration",
      "Age verification (no minors as signing directors)",
      "Disclosure of other business interests",
    ],
    kolaLesson: "Leo Macharia King'ori was under 18, making him a minor who legally cannot sign contracts or be a director. His shares had to be held in trust by his father. Additionally, the third partner (Euan Odenyo) was unknown to investors until February 2026.",
  },
  {
    icon: Clock,
    title: "Regular Updates & Reporting",
    category: "Ongoing Governance",
    description: "Funded ventures must maintain an ongoing cadence of investor communication — not just financial reports, but strategic updates, milestone progress, and early warning signals.",
    requirements: [
      "Monthly investor update email (using FVC template)",
      "Quarterly board/advisory meeting (even if informal)",
      "Immediate disclosure of material events (new contracts >KSh 100K, legal issues, team changes)",
      "Annual audited financial statements",
      "KPI dashboard updated monthly",
    ],
    kolaLesson: "Kola signed a performance agreement with AyraStarr (27x the previous artist cost) without informing any investors. Material commitments were made unilaterally, and investors only discovered them weeks later.",
  },
  {
    icon: Scale,
    title: "Escalation Procedures",
    category: "Dispute Resolution",
    description: "Clear escalation procedures for when things go wrong — because they will. Every venture needs a pre-agreed process for dispute resolution, governance breaches, and investor exit.",
    requirements: [
      "Defined governance breach response procedure",
      "Mediation before legal action — FVC-facilitated process",
      "Investor exit rights (drag-along, tag-along, buyback provisions)",
      "Board composition and voting rights clearly documented",
      "Material decision thresholds defined (spending limits, new contracts, etc.)",
    ],
    kolaLesson: "When both investors threatened exit in January 2026, there was no documented process for resolution. Michael Macharia paused all involvement, and the governance impasse persisted for weeks without a clear path forward.",
  },
];

export default function FVCGovernance() {
  return (
    <div className="min-h-screen bg-[#003153] text-white">
      <header className="border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-6 h-6 text-[#F40009]" />
            <p className="text-xs font-medium tracking-[0.3em] text-[#F40009] uppercase">FVC Framework</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-white">Governance Framework</h1>
          <p className="text-gray-400 mt-2 text-sm max-w-2xl leading-relaxed">
            Every requirement in this framework exists because its absence caused real damage. Built from the Kola Entertainment experience and designed to protect founders and investors alike.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="bg-gradient-to-br from-[#F40009]/5 to-transparent border border-[#F40009]/10 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#F40009] mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">Why This Framework Exists</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                In late 2025, KSh 1.5M was invested into Kola Entertainment — a youth-led events company run by family and friends. The investment was managed through a WhatsApp group with no signed agreements, no joint bank accounts, and no standardized reporting. The event was a success (2,400 attendees), but the venture lost KSh 1.39M because governance was an afterthought.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                The FVC Governance Framework is the direct result of those lessons. It is not theoretical — every requirement maps to a specific failure that occurred in the Kola investment. The framework is designed to be practical, not burdensome: minimum viable governance that protects everyone involved.
              </p>
              <Link href="/ventures/kola" className="inline-flex items-center gap-1 text-sm text-[#F40009] hover:text-[#F40009]/80 no-underline">
                Read the full Kola case study <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-7 gap-2">
          {REQUIREMENTS.map((req) => (
            <button key={req.title} className="px-3 py-2 rounded-lg text-xs font-medium bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors text-center">
              <req.icon className="w-4 h-4 mx-auto mb-1 text-[#F40009]" />
              {req.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        {REQUIREMENTS.map((req) => (
          <section key={req.title} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6" id={req.title.toLowerCase().replace(/\s+/g, "-")}>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F40009]/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <req.icon className="w-5 h-5 text-[#F40009]" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#F40009] uppercase">{req.category}</span>
                <h3 className="font-display text-xl font-semibold text-white">{req.title}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{req.description}</p>

            <div className="mb-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Requirements Checklist</h4>
              <div className="space-y-2">
                {req.requirements.map((r) => (
                  <div key={r} className="flex items-start gap-3 p-2.5 bg-gray-800/30 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#F40009] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-950/20 border border-red-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">Kola Lesson</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{req.kolaLesson}</p>
            </div>
          </section>
        ))}

        <section className="bg-gradient-to-br from-[#F40009]/5 to-transparent border border-[#F40009]/10 rounded-xl p-6">
          <h3 className="font-display text-xl font-semibold text-white mb-4">Venture Compliance Status</h3>
          <p className="text-sm text-gray-400 mb-4">
            All FVC-funded ventures must maintain compliance with the governance framework. Non-compliance triggers escalation procedures.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase">Venture</th>
                  <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase">Entity</th>
                  <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase">Agreements</th>
                  <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase">Bank Account</th>
                  <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase">Reporting</th>
                  <th className="text-left py-2 text-xs font-bold text-gray-500 uppercase">KYC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Kola Entertainment", entity: false, agreements: false, bank: false, reporting: false, kyc: false },
                  { name: "Craft Collective", entity: true, agreements: true, bank: true, reporting: true, kyc: true },
                  { name: "Mazao AgriTech", entity: true, agreements: true, bank: true, reporting: true, kyc: true },
                  { name: "NexGen Health", entity: true, agreements: false, bank: false, reporting: false, kyc: true },
                ].map((v) => (
                  <tr key={v.name} className="border-b border-gray-800/50">
                    <td className="py-3 text-white font-medium">{v.name}</td>
                    <td className="py-3">{v.entity ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}</td>
                    <td className="py-3">{v.agreements ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}</td>
                    <td className="py-3">{v.bank ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}</td>
                    <td className="py-3">{v.reporting ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}</td>
                    <td className="py-3">{v.kyc ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-600">Founders Venture Capital · Governance Framework · Derived from Kola Case Study</p>
        </div>
      </footer>
    </div>
  );
}
