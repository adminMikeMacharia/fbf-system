import { useState } from "react";
import {
  BookOpen,
  AlertTriangle,
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  FileText,
  XCircle,
  Clock,
  Music,
  MapPin,
  Target,
  Shield,
  Lightbulb,
  Scale,
} from "lucide-react";
import {
  KOLA_COMPANY, KOLA_TIMELINE as RAW_TIMELINE, KOLA_FINANCIALS,
  KOLA_TEAM, KOLA_GOVERNANCE as GOVERNANCE_ISSUES, KOLA_LESSONS as LESSONS,
} from "@workspace/kola-data";

type CaseStudyTab = "story" | "timeline" | "financials" | "team" | "governance" | "lessons" | "status";

function formatDateDisplay(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const KOLA_TIMELINE_DISPLAY = RAW_TIMELINE.map(t => ({
  ...t,
  date: formatDateDisplay(t.date),
}));

const KOLA_FINANCIALS_DISPLAY = {
  projected: KOLA_FINANCIALS.projected,
  actual: KOLA_FINANCIALS.actual,
  ticketsSold: KOLA_FINANCIALS.tickets.sold,
  ticketPrice: KOLA_FINANCIALS.tickets.price,
  turnedAway: KOLA_FINANCIALS.tickets.turnedAway,
  totalLoansRaised: KOLA_FINANCIALS.investment.totalCapitalRaised,
  artistFee: KOLA_FINANCIALS.costBreakdown.artistFee,
};

function KolaCaseStudy() {
  const [activeTab, setActiveTab] = useState<CaseStudyTab>("story");

  const tabs: { id: CaseStudyTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "story", label: "The Story", icon: BookOpen },
    { id: "timeline", label: "Timeline", icon: Calendar },
    { id: "financials", label: "Financials", icon: DollarSign },
    { id: "team", label: "Team", icon: Users },
    { id: "governance", label: "Governance", icon: Shield },
    { id: "lessons", label: "Lessons", icon: Lightbulb },
    { id: "status", label: "Current Status", icon: Scale },
  ];

  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-red-500/10 via-amber-500/5 to-transparent border-b border-border p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
            <Music className="w-7 h-7 text-red-500" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-bold tracking-wider text-red-500 uppercase">Case Study #001</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium border border-red-200">In Default</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium border border-amber-200">First Debt Investment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-foreground">Kola Entertainment / Kolacopia 3.0</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              A music event venture by Leo Macharia King'ori (Mike Macharia's son) featuring Kamo Mphela at Masshouse, Nairobi — November 22, 2025.
              A real story about founder-investor dynamics, event economics, and what happens when governance is skipped.
            </p>
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Masshouse, Nairobi</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Nov 22, 2025</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> ~2,400 attendance</span>
              <span className="flex items-center gap-1"><Target className="w-3 h-3" /> 1,395 tickets sold</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1 p-2 border-b border-border overflow-x-auto">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-label font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#F40009]/10 text-[#F40009] border border-[#F40009]/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="p-6 sm:p-8">
        {activeTab === "story" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-label text-lg font-semibold mb-3">The Opportunity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leo Macharia King'ori, Mike Macharia's son, organized Kolacopia 3.0 — a music event bringing South African artist Kamo Mphela to perform
                at Masshouse in Nairobi on November 22, 2025. The venture was structured through Kola Entertainment Ltd (PVT-BB1OJOZ9), a company
                Leo co-founded with Luke Akolade Ganiyu. The event targeted Nairobi's youth entertainment market with tickets priced at KSh 2,000.
              </p>
            </div>
            <div>
              <h3 className="font-label text-lg font-semibold mb-3">The Investment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Michael Macharia invested KSh 257,000 as a convertible loan — his first debt investment — with 30% flat interest, automatically
                converting to equity on the 90th day. Khalhani Sichangi (YCEO / KS Group Africa) co-invested approximately KSh 1.2M. The total
                capital raised was approximately KSh 1.5M. Michael's investment was structured to hold shares in trust for Leo until he turns 18.
              </p>
            </div>
            <div>
              <h3 className="font-label text-lg font-semibold mb-3">The Execution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The team ran influencer campaigns, bulk messaging, and social media marketing with micro-influencers from Daystar and USIU.
                Ticket sales grew steadily but fell significantly short of projections (1,395 sold vs 2,700+ projected).
                On event night, demand exceeded expectations — approximately 2,400 people showed up, including ~360 who wanted gate tickets.
                Masshouse closed the gates early due to overcrowding, turning away potential revenue. The show itself was successful —
                Kamo Mphela performed, the crowd was engaged, and the team delivered.
              </p>
            </div>
            <div>
              <h3 className="font-label text-lg font-semibold mb-3">The Challenges</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Revenue Shortfall", desc: "Actual revenue was 43% of projection — KSh 2.4M vs KSh 5.6M projected", icon: TrendingDown, color: "#EF4444" },
                  { title: "Unsigned Agreements", desc: "Capital was disbursed before legal agreements were signed — trust over process", icon: FileText, color: "#F59E0B" },
                  { title: "Cash Accounting Gaps", desc: "Cashflow reports were delayed repeatedly; AI-generated reports flagged as lacking analysis", icon: DollarSign, color: "#F59E0B" },
                  { title: "Governance Absent", desc: "No joint-signatory bank account, no formal reporting cadence, no board oversight", icon: Shield, color: "#EF4444" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="space-y-1">
            {KOLA_TIMELINE_DISPLAY.map((evt, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                evt.type === "critical" ? "bg-red-50 border border-red-200" :
                evt.type === "warning" ? "bg-amber-50 border border-amber-200" :
                evt.type === "positive" ? "bg-green-50 border border-green-200" : "bg-muted/30 border border-border"
              }`}>
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                    evt.type === "critical" ? "bg-red-500" :
                    evt.type === "warning" ? "bg-amber-500" :
                    evt.type === "positive" ? "bg-green-500" : "bg-muted-foreground"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium ${
                    evt.type === "critical" ? "text-red-600" :
                    evt.type === "warning" ? "text-amber-600" :
                    evt.type === "positive" ? "text-green-600" : "text-muted-foreground"
                  }`}>{evt.date}</p>
                  <p className="text-sm text-foreground">{evt.event}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "financials" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-center">
                <p className="text-xs text-green-600 font-medium">Projected Revenue</p>
                <p className="text-lg font-bold text-green-800">KSh {(KOLA_FINANCIALS_DISPLAY.projected.revenue / 1000000).toFixed(1)}M</p>
              </div>
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-center">
                <p className="text-xs text-red-600 font-medium">Actual Revenue</p>
                <p className="text-lg font-bold text-red-800">KSh {(KOLA_FINANCIALS_DISPLAY.actual.grossRevenue / 1000000).toFixed(1)}M</p>
              </div>
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-center">
                <p className="text-xs text-amber-600 font-medium">Total Costs</p>
                <p className="text-lg font-bold text-amber-800">KSh {(KOLA_FINANCIALS_DISPLAY.actual.totalCosts / 1000000).toFixed(1)}M</p>
              </div>
              <div className="p-4 rounded-lg bg-red-100 border border-red-300 text-center">
                <p className="text-xs text-red-700 font-medium">Net Loss</p>
                <p className="text-lg font-bold text-red-900">–KSh {(KOLA_FINANCIALS_DISPLAY.actual.netLoss / 1000000).toFixed(1)}M</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-5">
              <h4 className="font-label text-base font-semibold mb-3">Budget vs Actuals</h4>
              <div className="space-y-3">
                {[
                  { label: "Revenue", projected: KOLA_FINANCIALS_DISPLAY.projected.revenue, actual: KOLA_FINANCIALS_DISPLAY.actual.grossRevenue },
                  { label: "Costs", projected: KOLA_FINANCIALS_DISPLAY.projected.costs, actual: KOLA_FINANCIALS_DISPLAY.actual.totalCosts },
                ].map(row => {
                  const pctProjected = 100;
                  const pctActual = Math.round((row.actual / row.projected) * 100);
                  return (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-foreground">{row.label}</span>
                        <span className="text-muted-foreground">
                          KSh {(row.actual / 1000000).toFixed(1)}M / {(row.projected / 1000000).toFixed(1)}M ({pctActual}%)
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(pctActual, 100)}%`,
                            backgroundColor: pctActual > 100 ? "#EF4444" : pctActual > 80 ? "#22C55E" : "#F59E0B",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Tickets Sold", value: KOLA_FINANCIALS_DISPLAY.ticketsSold.toLocaleString(), sub: `at KSh ${KOLA_FINANCIALS_DISPLAY.ticketPrice.toLocaleString()} each` },
                { label: "People Turned Away", value: `~${KOLA_FINANCIALS_DISPLAY.turnedAway}`, sub: "Gates closed early by Masshouse" },
                { label: "Platform Commission", value: `KSh ${KOLA_FINANCIALS_DISPLAY.actual.platformCommission.toLocaleString()}`, sub: "6.5% via Tikiti" },
                { label: "Artist Fee (Kamo Mphela)", value: `~KSh ${(KOLA_FINANCIALS_DISPLAY.artistFee / 1000000).toFixed(0)}M+`, sub: "Flights included — single largest cost" },
                { label: "Total Capital Raised", value: `~KSh ${(KOLA_FINANCIALS_DISPLAY.totalLoansRaised / 1000000).toFixed(1)}M`, sub: "From Michael + Khalhani" },
                { label: "Profit Margin", value: `${KOLA_FINANCIALS_DISPLAY.actual.margin}%`, sub: "vs +41% projected" },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-base font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div className="space-y-3">
            {KOLA_TEAM.map(member => (
              <div key={member.name} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/30">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: `${member.color}15`, border: `1.5px solid ${member.color}40`, color: member.color }}
                >
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="font-label text-base font-semibold text-foreground">{member.name}</h4>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${member.color}12`, color: member.color, border: `1px solid ${member.color}25` }}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{member.relationship}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Status: {member.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "governance" && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-4">
              The governance gaps in the Kola venture represent a textbook case of what happens when trust-based investing
              bypasses basic governance structures. Every issue below was surfaced in real-time through the investor group.
            </p>
            {GOVERNANCE_ISSUES.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                item.severity === "critical" ? "bg-red-50 border border-red-200" : "bg-amber-50 border border-amber-200"
              }`}>
                {item.severity === "critical" ? (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                )}
                <p className={`text-sm ${item.severity === "critical" ? "text-red-900" : "text-amber-900"}`}>{item.issue}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "lessons" && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-4">
              These lessons emerged from lived experience — not theory. They apply to any founder-investor relationship,
              especially when family dynamics are involved.
            </p>
            {LESSONS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-xs font-bold text-blue-600 shrink-0 mt-0.5 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">{i + 1}</span>
                <div className="flex-1">
                  <p className="text-sm text-blue-900">{item.lesson}</p>
                  <span className="text-[10px] font-medium text-blue-500 mt-1 inline-block">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "status" && (
          <div className="space-y-6">
            <div className="p-5 rounded-lg bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h4 className="font-label text-base font-semibold text-red-900">Investment Status: In Default</h4>
              </div>
              <p className="text-sm text-red-800 leading-relaxed">
                The convertible loan of KSh 257,000 (+ KSh 77,100 interest = KSh 334,100 total) has passed its
                90-day conversion date without resolution. Governance structures remain incomplete. Both investors
                (Michael Macharia and Khalhani Sichangi) have requested exit/repayment plans.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-lg border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">Outstanding Items</h4>
                <div className="space-y-2">
                  {[
                    "Joint-signatory bank account (I&M) — form submitted, not completed",
                    "Signed convertible loan agreement — draft exists, not executed",
                    "Corporate lawyer engagement — requested by Michael",
                    "Loan repayment plan — requested by Khalhani",
                    "Leo's formal removal from liability-bearing roles (minor protection)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mt-0.5 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">Founder Profile</h4>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0">LM</div>
                  <div>
                    <p className="text-sm font-semibold">Leo Macharia King'ori</p>
                    <p className="text-xs text-muted-foreground">Founder, Kola Entertainment Ltd</p>
                    <p className="text-xs text-muted-foreground mt-1">Son of Michael K. Macharia. Currently under 18 — shares held in trust by father. Co-founded Kola with Luke Akolade Ganiyu. First venture in the entertainment/events space.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">FBH Family Ventures</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">Governance Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VentureCaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-[#003153] via-[#003153]/90 to-[#003153]/80 border-b-2 border-[#F40009]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-label font-semibold tracking-[0.3em] text-[#F40009] uppercase mb-1">Founder Venture Capital · Case Studies</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-wide text-white uppercase">Venture Case Studies</h1>
          <p className="text-white/70 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed font-body">
            Real stories from founder-investor relationships. What worked, what didn't, and the lessons that emerge
            when capital meets execution. Starting with Mike Macharia's first debt investment.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <KolaCaseStudy />
      </main>

      <footer className="bg-[#003153] border-t-2 border-[#F40009] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/50 font-label uppercase tracking-widest">Venture Case Studies · Founders Kitchen · FBH Holdings</p>
        </div>
      </footer>
    </div>
  );
}
