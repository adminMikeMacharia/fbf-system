import {
  Users, Briefcase, Bot, Mail, Eye, Lock, Flag, AlertTriangle, Globe
} from "lucide-react";

function Tag({ text, color }: { text: string; color: string }) {
  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${color}`}>{text}</span>;
}

const TEAM_ROSTER = [
  {
    name: "Mike Anthony Macharia",
    role: "Publisher & Visionary",
    entity: "MachariaOS / FBF Publishing",
    responsibilities: [
      "Series vision, AFOS framework ownership",
      "Founder interviews and case study access",
      "Final editorial approval on all milestones",
      "AI agent stack, Book Agent, and AFOS tools",
      "IP registration and commercial strategy",
      "Budget approval and milestone sign-off",
    ],
    email: "mmacharia@poneahealth.com",
    status: "active" as const,
    avatar: "MM",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    name: "Mugumo Munene",
    role: "Narrative Architect & Chief Writer",
    entity: "Independent Contractor",
    responsibilities: [
      "Manuscript research, writing, and editorial architecture",
      "Discovery interviews and transcript processing",
      "Chapter drafting (M1–M6) and revisions",
      "Peer review facilitation (M7)",
      "Final manuscript delivery (M8)",
      "Narrative voice and literary quality assurance",
    ],
    email: "mugumo@email.com",
    status: "pending-onboard" as const,
    avatar: "MN",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "Mutahi Mureithi",
    role: "Editorial Consultant / Project Editor",
    entity: "Via Mugumo team",
    responsibilities: [
      "Editorial review and quality control",
      "Structural editing and fact-checking",
      "Consistency across chapters and volumes",
    ],
    email: "",
    status: "pending-onboard" as const,
    avatar: "MT",
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Pauline Warui",
    role: "Project Coordinator",
    entity: "Via Mugumo team",
    responsibilities: [
      "Timeline and milestone tracking",
      "Communication coordination",
      "Document management and logistics",
    ],
    email: "",
    status: "pending-onboard" as const,
    avatar: "PW",
    color: "from-amber-600 to-amber-800",
  },
  {
    name: "Book Agent (AI)",
    role: "AI Collaboration Bridge",
    entity: "MachariaOS Agent Stack",
    responsibilities: [
      "Chapter outline drafting and AFOS mapping",
      "Interview question generation",
      "Narrative bridge and scene writing",
      "Cross-volume consistency checking",
      "Research synthesis and canon referencing",
    ],
    email: "",
    status: "active" as const,
    avatar: "BA",
    color: "from-blue-600 to-blue-800",
  },
];

const REGIONAL_NETWORK = [
  {
    region: "East Africa",
    hub: "Nairobi, Kenya",
    flag: "KE",
    currentTeam: "Mugumo Munene (Narrative Architect), Mutahi Mureithi (Editorial), Pauline Warui (Coordinator)",
    focus: "Book One launch market. Founder interviews: Renee Ngamau, Patrick Ngigi, Beth Koigi. M-Pesa/mobile money ecosystem, agritech, health-tech.",
    volumes: ["Vol. I: Battles in the Marketplace", "Vol. VI: The Bonfire of the Founders (satirical)"],
    status: "active" as const,
    contractModel: "Mugumo team — Manuscript Development Agreement. Independent contractor. IP vests in MachariaOS upon milestone payment.",
  },
  {
    region: "West Africa",
    hub: "Lagos, Nigeria",
    flag: "NG",
    currentTeam: "TBD — Regional Narrative Contributor",
    focus: "Nigeria's tech explosion: Flutterwave, Paystack, Andela, Jumia. Fintech regulatory battles, diaspora founder networks, Nollywood-to-tech crossover, informal economy scaling.",
    volumes: ["Vol. II: The Ledger of Scarcity", "Vol. III: The Ledger of Trust"],
    status: "scouting" as const,
    contractModel: "Same template as Mugumo: independent contractor, AI-assisted workflow, IP assignment to MachariaOS. Scope: regional research, founder interviews, chapter contributions. NOT full manuscript ownership.",
  },
  {
    region: "Southern Africa",
    hub: "Johannesburg / Cape Town, South Africa",
    flag: "ZA",
    currentTeam: "TBD — Regional Narrative Contributor",
    focus: "Post-apartheid entrepreneurship: Naspers/Prosus ecosystem, mining-to-tech transition, township economy founders, BEE dynamics, cross-border trade corridors.",
    volumes: ["Vol. III: The Ledger of Trust", "Vol. IV: The Ledger of Pivots"],
    status: "scouting" as const,
    contractModel: "Per-chapter or per-section contribution agreement. AI handles structure; contributor handles narrative and local founder access. IP → MachariaOS.",
  },
  {
    region: "North Africa",
    hub: "Cairo, Egypt",
    flag: "EG",
    currentTeam: "TBD — Regional Narrative Contributor",
    focus: "MENA crossover: Egyptian startups (Swvl, Fawry, MNT-Halan), Arabic-language founder ecosystems, North African regulatory complexity, Gulf-Africa capital flows.",
    volumes: ["Vol. IV: The Ledger of Pivots", "Vol. V: The Ledger of Community"],
    status: "future" as const,
    contractModel: "Same IP-assignment template. Potentially bilingual output (English + Arabic). AI translation/consistency support via Book Agent.",
  },
  {
    region: "Pan-African / Diaspora",
    hub: "Accra, Ghana + Kigali, Rwanda + Diaspora (US/UK)",
    flag: "AU",
    currentTeam: "TBD — Regional Contributors",
    focus: "AfCFTA trade corridor founders, Rwanda's digital nation model, Ghana's Year of Return entrepreneurs, diaspora-to-continent bridges, pan-African payment rails.",
    volumes: ["Vol. V: The Ledger of Community", "Cross-volume research"],
    status: "future" as const,
    contractModel: "Flexible engagement: per-section contributions, research commissions, or interview facilitation. All IP → MachariaOS.",
  },
];

const NEGOTIATION_POINTS = [
  {
    area: "Scope Reduction — AI Tools Handle",
    yourPosition: "MachariaOS Book Agent + AFOS tools handle: chapter outlines, AFOS mapping, interview question generation, narrative bridges, cross-volume consistency, canon referencing, episode-to-chapter alignment. This is ~30% of the editorial architecture workload.",
    implication: "Mugumo's scope is writing and narrative craft — NOT framework design, research synthesis, or structural architecture. AI handles those. His value is the pen, not the blueprint.",
    leverage: "high" as const,
  },
  {
    area: "Milestone Pricing",
    yourPosition: "Current M0 at KES 350K (discounted from 500K). M1–M6 at KES 400K/chapter. Total Book One: KES 3.35M. Given AI handles structural work, consider whether full 400K per chapter is justified vs. 300K–350K for writing-only scope.",
    implication: "Potential saving of KES 300K–600K on Book One if scope reduction is reflected in pricing. This is startup economics — every shilling matters.",
    leverage: "medium" as const,
  },
  {
    area: "IP Ring-Fencing",
    yourPosition: "All IP vests in Publisher (MachariaOS) upon payment. The AFOS framework, series architecture, episode matrix, and all AI-generated outputs are exclusively MachariaOS property. Mugumo owns nothing except credit and 10% revenue share.",
    implication: "Mugumo must sign IP assignment clauses covering: narrative methodology, chapter structures, any frameworks he develops during engagement. Joint ownership of 'editorial methodology' (current clause) needs tightening.",
    leverage: "critical" as const,
  },
  {
    area: "AI Tool Integration Brief",
    yourPosition: "Mugumo will receive structured outputs from the Book Agent — outlines, AFOS mappings, interview questions. He writes FROM these, not alongside them. The AI is upstream; he is downstream. His briefing must make this clear.",
    implication: "This changes his workflow: he receives structured briefs → writes narrative → submits for review. Not: he designs the architecture. Mike + AI design; he writes.",
    leverage: "high" as const,
  },
  {
    area: "Monitoring & Quality Gates",
    yourPosition: "14-day approval window per milestone. One revision round included. Book Agent provides consistency checking before human review. Weekly status updates mandatory.",
    implication: "Tighter quality gates than traditional publishing. AI pre-screens; Mike approves. No silent periods longer than 7 days from either side.",
    leverage: "medium" as const,
  },
  {
    area: "Revenue Share",
    yourPosition: "Current: 10% of Net Revenue to Narrative Architect. Given AI handles significant structural work, consider whether 7–8% is more appropriate. Or keep 10% conditional on delivering all 6 chapters on time.",
    implication: "Performance-linked revenue share: 10% if all milestones delivered on schedule, 7% if delays exceed 30 days cumulative.",
    leverage: "medium" as const,
  },
  {
    area: "Global Contributor Model — Series Is Pan-African",
    yourPosition: "The series covers ALL of Africa — not just East Africa. Volumes II–V will require regional narrative contributors from Nigeria, South Africa, Egypt, Ghana, and the diaspora. Mugumo's contract should NOT assume exclusive authorship across all 6 volumes. His engagement is Book One (and potentially Book Six). Regional volumes may engage local writers who know the ecosystems firsthand.",
    implication: "This is critical leverage: Mugumo is one resource in a continental editorial network, not THE author. His pricing and scope should reflect Book One engagement, not series-wide ownership. Future volumes will use the same AI + regional contributor model — different writers, same MachariaOS IP structure.",
    leverage: "critical" as const,
  },
  {
    area: "Standardised Contributor Template",
    yourPosition: "Mugumo's contract becomes the TEMPLATE for all regional contributors. IP assignment, AI-assisted workflow, milestone payment, quality gates — all standardised. A Nigerian contributor for Vol. II should sign the same structure. This means Mugumo's contract must be clean, modular, and replicable.",
    implication: "Any concessions made to Mugumo become the floor for all future contributors. Negotiate tight now, replicate globally later. This is a franchise contract, not a one-off deal.",
    leverage: "high" as const,
  },
];

const KICKOFF_STEPS = [
  { id: 1, title: "Send Formal Engagement Letter", desc: "Official letter to Mugumo with revised scope, AI integration brief, IP clauses, and milestone schedule. Include NDA refresh.", owner: "Mike", deadline: "Week 1", status: "pending" as const, priority: "critical" as const },
  { id: 2, title: "IP Registration — MachariaOS", desc: "Register 'Ledgers of Africa', 'Founders Battlefield Series', and AFOS framework as trademarks/IP with Kenya Copyright Board (KECOBO). File provisional copyright for series concept document.", owner: "Mike / Legal", deadline: "Week 1–2", status: "pending" as const, priority: "critical" as const },
  { id: 3, title: "Mugumo Onboarding Call", desc: "Video call to walk through: MachariaOS ecosystem, Book Agent capabilities, AI workflow, AFOS framework deep-dive, expectations on structured briefs. Record for reference.", owner: "Mike + Mugumo", deadline: "Week 1", status: "pending" as const, priority: "high" as const },
  { id: 4, title: "NDA & Contract Execution", desc: "Sign revised Manuscript Development Agreement with updated IP assignment, AI integration clauses, revised scope, and performance-linked revenue share.", owner: "Mike + Mugumo", deadline: "Week 2", status: "pending" as const, priority: "critical" as const },
  { id: 5, title: "M0 Payment — Inception Fee", desc: "Disburse KES 350,000 (discounted kickoff fee) upon contract execution. Payment triggers formal project start.", owner: "Mike", deadline: "Week 2", status: "pending" as const, priority: "high" as const },
  { id: 6, title: "Discovery Interview #1", desc: "First founding document interview. Book Agent generates structured interview questions in advance. Mugumo conducts; recording and transcript delivered within 48 hours.", owner: "Mugumo", deadline: "Week 3", status: "pending" as const, priority: "high" as const },
  { id: 7, title: "Book Agent Structural Brief — Chapter 1", desc: "AI generates: Chapter 1 outline, AFOS mapping, scene suggestions, canon references, case study founder brief (Renee Ngamau). Delivered to Mugumo as his writing brief.", owner: "Mike / Book Agent", deadline: "Week 3", status: "pending" as const, priority: "high" as const },
  { id: 8, title: "Add Mugumo to Project Tools", desc: "Give Mugumo read access to Chapters & Ledgers artifact, Book Club tab, and Episode Matrix. Share foundersbattlefield.com credentials. Add to 'Founders B - Book Writing' WhatsApp group if not already.", owner: "Mike / Pauline", deadline: "Week 1", status: "pending" as const, priority: "medium" as const },
  { id: 9, title: "Weekly Status Cadence", desc: "Establish Monday morning status updates via WhatsApp group. Pauline coordinates. Book Agent provides weekly consistency report.", owner: "Pauline", deadline: "Week 2", status: "pending" as const, priority: "medium" as const },
  { id: 10, title: "M1 Chapter 1 Draft Delivery", desc: "Mugumo delivers full Chapter 1 draft. Book Agent pre-screens for AFOS alignment and consistency. Mike reviews within 14 days.", owner: "Mugumo", deadline: "Week 8", status: "pending" as const, priority: "high" as const },
];

const IP_ITEMS = [
  { item: "Ledgers of Africa", type: "Trademark", jurisdiction: "Kenya (KIPI) + WIPO Madrid Protocol", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Series name — file Kenya first, then international via Madrid Protocol for Nigeria, SA, Egypt, Ghana" },
  { item: "A Founders' Battlefield Series", type: "Trademark", jurisdiction: "Kenya (KIPI) + WIPO Madrid Protocol", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Sub-brand — file with 'Ledgers of Africa'. International coverage essential for pan-African distribution" },
  { item: "AFOS (African Founder Operating System)", type: "Trademark + IP", jurisdiction: "Kenya (KIPI) + WIPO + ARIPO", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Framework IP — critical for platform and licensing. ARIPO covers 22 African member states" },
  { item: "Series Concept Document", type: "Copyright", jurisdiction: "Kenya (KECOBO) + Berne Convention (auto)", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Provisional copyright. Berne Convention provides automatic protection in 181 countries including Nigeria, SA, Egypt" },
  { item: "Book One Manuscript", type: "Copyright", jurisdiction: "Kenya (KECOBO) + Berne Convention", status: "pending" as const, owner: "MachariaOS Ltd (upon M-payment)", notes: "IP vests upon each milestone payment. Berne Convention auto-protects globally" },
  { item: "Episode Matrix (40 episodes)", type: "Copyright", jurisdiction: "Kenya (KECOBO)", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "AFOS Episode Matrix — 40 episodes × 5 dimensions. Derivative works in any language → MachariaOS" },
  { item: "Founders Book Reading Club Canon", type: "Compilation Copyright", jurisdiction: "Kenya (KECOBO)", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Curated selection, AFOS mappings, and analysis" },
  { item: "FBF Publishing Imprint", type: "Business Name / Trademark", jurisdiction: "Kenya (BRS) + Nigeria (CAC) + SA (CIPC)", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Publishing imprint — register in each market where books will be sold" },
  { item: "Regional Contributor IP Assignment Template", type: "Contract Template", jurisdiction: "Multi-jurisdiction (Kenyan law governs)", status: "to-draft" as const, owner: "MachariaOS Ltd", notes: "Standardised IP assignment for Nigerian, SA, Egyptian, Ghanaian contributors. Kenyan law as governing law; local enforceability review needed per jurisdiction" },
  { item: "Translation & Adaptation Rights", type: "Copyright / License", jurisdiction: "Global", status: "to-register" as const, owner: "MachariaOS Ltd", notes: "Arabic, French, Swahili, Portuguese adaptation rights. All translations → MachariaOS IP. Regional contributors sign translation rights assignment" },
];

const MONITORING_FRAMEWORK = [
  { area: "Milestone Delivery", metric: "On-time delivery per M0–M8 schedule", frequency: "Per milestone", owner: "Mike", tool: "Chapters & Ledgers artifact — Project Plan tab", escalation: "7-day delay = status call. 14-day delay = written notice. 30-day delay = contract review." },
  { area: "Quality Gate", metric: "AFOS alignment score, narrative quality, factual accuracy", frequency: "Per chapter", owner: "Mike + Book Agent", tool: "Book Agent pre-screen + human review", escalation: "Rejection triggers revision round (1 included). 2nd rejection = fee adjustment discussion." },
  { area: "Communication Cadence", metric: "Weekly status update delivered", frequency: "Weekly (Monday)", owner: "Pauline", tool: "WhatsApp Group + Chapters & Ledgers Timesheet", escalation: "2 missed updates = status call. 4 missed = formal concern." },
  { area: "IP Compliance", metric: "All founder quotes with written consent. No unauthorized IP disclosure.", frequency: "Ongoing", owner: "Mugumo + Mike", tool: "Consent log delivered with M8", escalation: "Any unauthorized disclosure = immediate contract review." },
  { area: "Budget Tracking", metric: "Milestone payments vs. deliverables. No overruns without approval.", frequency: "Per milestone", owner: "Mike", tool: "Chapters & Ledgers — Contracts tab", escalation: "Additional scope = written approval + separate fee." },
  { area: "AI Integration Adoption", metric: "Mugumo uses Book Agent briefs as input. No structural work done outside AI pipeline.", frequency: "Per chapter", owner: "Mike", tool: "Book Agent session logs", escalation: "Non-adoption after 2 chapters = workflow review meeting." },
  { area: "Regional Contributor Pipeline", metric: "Scouting progress for Nigeria, SA, Egypt hubs. Contract template readiness.", frequency: "Quarterly", owner: "Mike", tool: "Project Kickoff tab — Regional Network section", escalation: "No regional contributor identified 6 months before volume start = accelerated search via university/publishing networks." },
  { area: "Global IP Compliance", metric: "Trademark filings current in all active markets. Contributor IP assignments executed before any work begins.", frequency: "Per contributor onboarding", owner: "Mike / Legal", tool: "IP Ring-Fencing table + legal counsel", escalation: "Any contributor working without signed IP assignment = immediate work stop + contract execution." },
];

export default function ProjectKickoffTab() {
  const criticalSteps = KICKOFF_STEPS.filter(s => s.priority === "critical").length;
  const totalSteps = KICKOFF_STEPS.length;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)" }}>
        <div className="px-8 py-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-amber-300">Project Kickoff & Governance</p>
          <h2 className="text-2xl font-black">Ledgers of Africa — Operational Launch</h2>
          <p className="text-sm text-white/50 mt-2 max-w-2xl">Pan-African editorial network, contract negotiation, IP ring-fencing across jurisdictions, milestone delivery, and monitoring. This is your command centre for a series that spans the continent — from Nairobi to Lagos, Johannesburg, Cairo, and the diaspora.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {[
          { label: "Team Members", value: "5", sub: "4 humans + 1 AI agent", icon: Users },
          { label: "Regional Hubs", value: `${REGIONAL_NETWORK.length}`, sub: "East, West, South, North, Diaspora", icon: Globe },
          { label: "Kickoff Steps", value: `${totalSteps}`, sub: `${criticalSteps} critical priority`, icon: Flag },
          { label: "IP Items", value: `${IP_ITEMS.length}`, sub: "KIPI/WIPO/ARIPO/Berne", icon: Lock },
          { label: "Monitoring Areas", value: `${MONITORING_FRAMEWORK.length}`, sub: "Quality gates + escalation", icon: Eye },
        ].map((s, i) => (
          <div key={i} className="rounded-xl border bg-white p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-lg font-black">{s.value}</p>
              <p className="text-xs font-medium">{s.label}</p>
              <p className="text-[10px] text-muted-foreground">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600" /> Team Roster & Responsibilities</h3>
        <div className="space-y-3">
          {TEAM_ROSTER.map((member, i) => (
            <div key={i} className="rounded-xl border bg-white p-5">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-sm font-black flex-shrink-0`}>{member.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h4 className="text-sm font-bold">{member.name}</h4>
                      <p className="text-[10px] text-muted-foreground">{member.role} · {member.entity}</p>
                    </div>
                    <Tag text={member.status === "active" ? "ACTIVE" : "PENDING ONBOARD"} color={member.status === "active" ? "text-emerald-600 bg-emerald-50 border-emerald-200" : "text-amber-600 bg-amber-50 border-amber-200"} />
                  </div>
                  {member.email && (
                    <p className="text-[10px] text-indigo-600 mt-1 flex items-center gap-1"><Mail className="w-3 h-3" /> {member.email}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {member.responsibilities.map((r, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 rounded-full border bg-slate-50 text-muted-foreground">{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2"><Globe className="w-4 h-4 text-teal-600" /> Pan-African Editorial Network</h3>
        <div className="rounded-xl border-2 border-teal-200 bg-teal-50/30 p-5 mb-4">
          <p className="text-xs font-bold">The series is global — not a Kenyan project with a Kenyan writer.</p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Each volume draws on founders across the continent. Regional narrative contributors from Nigeria, South Africa, Egypt, Ghana, and the diaspora will bring local ecosystem knowledge, founder access, and cultural fluency. The AI + MachariaOS framework remains the constant; the writers rotate by region and volume.</p>
        </div>
        <div className="space-y-3">
          {REGIONAL_NETWORK.map((region, i) => (
            <div key={i} className={`rounded-xl border bg-white p-5 ${region.status === "active" ? "border-l-4 border-l-teal-400" : region.status === "scouting" ? "border-l-4 border-l-amber-400" : ""}`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-sm font-bold">{region.region}</h4>
                  <p className="text-[10px] text-muted-foreground">{region.hub}</p>
                </div>
                <Tag text={region.status === "active" ? "ACTIVE" : region.status === "scouting" ? "SCOUTING" : "FUTURE"} color={region.status === "active" ? "text-teal-600 bg-teal-50 border-teal-200" : region.status === "scouting" ? "text-amber-600 bg-amber-50 border-amber-200" : "text-slate-500 bg-slate-50 border-slate-200"} />
              </div>
              <p className="text-xs text-muted-foreground mb-2">{region.focus}</p>
              <div className="grid md:grid-cols-3 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Current Team</p>
                  <p className="text-[10px] text-muted-foreground">{region.currentTeam}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Volume Mapping</p>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {region.volumes.map((v, j) => (
                      <span key={j} className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 font-medium">{v}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Contract Model</p>
                  <p className="text-[10px] text-muted-foreground">{region.contractModel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4 text-amber-600" /> Negotiation Positioning — Mugumo Engagement</h3>
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50/30 p-5 mb-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold">Core Negotiation Principle</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">MachariaOS AI tools (Book Agent, AFOS Episode Matrix, Canon Analysis) handle ~30% of the editorial architecture workload that would traditionally fall to the Narrative Architect. This fundamentally changes the scope and should be reflected in pricing and role definition. Mugumo's value is the narrative craft — the writing — not the structural design.</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {NEGOTIATION_POINTS.map((np, i) => (
            <div key={i} className="rounded-xl border bg-white p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-bold">{np.area}</h4>
                <Tag text={np.leverage.toUpperCase()} color={np.leverage === "critical" ? "text-red-600 bg-red-50 border-red-200" : np.leverage === "high" ? "text-amber-600 bg-amber-50 border-amber-200" : "text-blue-600 bg-blue-50 border-blue-200"} />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase text-indigo-600 mb-1">Your Position</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{np.yourPosition}</p>
                </div>
                <div className="rounded-lg bg-amber-50/50 p-3">
                  <p className="text-[10px] font-bold uppercase text-amber-700 mb-1">Implication</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{np.implication}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2"><Flag className="w-4 h-4 text-emerald-600" /> Kickoff Steps — Next 8 Weeks</h3>
        <div className="space-y-2">
          {KICKOFF_STEPS.map((step) => (
            <div key={step.id} className={`rounded-xl border bg-white p-4 flex items-start gap-3 ${step.priority === "critical" ? "border-l-4 border-l-red-400" : step.priority === "high" ? "border-l-4 border-l-amber-400" : ""}`}>
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-black text-slate-600 flex-shrink-0">{step.id}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h4 className="text-sm font-bold">{step.title}</h4>
                  <div className="flex items-center gap-1.5">
                    <Tag text={step.priority.toUpperCase()} color={step.priority === "critical" ? "text-red-600 bg-red-50 border-red-200" : step.priority === "high" ? "text-amber-600 bg-amber-50 border-amber-200" : "text-blue-600 bg-blue-50 border-blue-200"} />
                    <span className="text-[10px] text-muted-foreground">{step.deadline}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                <p className="text-[10px] font-bold text-indigo-600 mt-1.5">Owner: {step.owner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2"><Lock className="w-4 h-4 text-red-600" /> IP Ring-Fencing & Registration</h3>
        <div className="rounded-xl border bg-white overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="text-left px-4 py-2.5 font-bold">IP Item</th>
                <th className="text-left px-4 py-2.5 font-bold">Type</th>
                <th className="text-left px-4 py-2.5 font-bold">Jurisdiction</th>
                <th className="text-left px-4 py-2.5 font-bold">Owner</th>
                <th className="text-left px-4 py-2.5 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {IP_ITEMS.map((ip, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5">
                    <p className="font-bold">{ip.item}</p>
                    <p className="text-[10px] text-muted-foreground">{ip.notes}</p>
                  </td>
                  <td className="px-4 py-2.5">{ip.type}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{ip.jurisdiction}</td>
                  <td className="px-4 py-2.5 font-medium">{ip.owner}</td>
                  <td className="px-4 py-2.5">
                    <Tag text={ip.status === "to-register" ? "TO REGISTER" : ip.status === "to-draft" ? "TO DRAFT" : "PENDING"} color={ip.status === "to-register" ? "text-red-600 bg-red-50 border-red-200" : ip.status === "to-draft" ? "text-indigo-600 bg-indigo-50 border-indigo-200" : "text-amber-600 bg-amber-50 border-amber-200"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg border border-dashed border-red-200 bg-red-50/30 p-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-red-700">Critical: Register Before ANY Contributor Contract</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">All trademark and copyright registrations should be filed BEFORE contracts are executed — with Mugumo or any future regional contributor. This establishes priority globally and protects against IP disputes in any jurisdiction. KIPI trademark: ~KES 10,000/mark. WIPO Madrid Protocol: ~CHF 653 base + per-country designation. Berne Convention copyright is automatic in 181 countries upon creation.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2"><Eye className="w-4 h-4 text-purple-600" /> Monitoring & Review Framework</h3>
        <div className="space-y-3">
          {MONITORING_FRAMEWORK.map((mf, i) => (
            <div key={i} className="rounded-xl border bg-white p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-bold">{mf.area}</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full border bg-purple-50 text-purple-600 border-purple-200 font-bold">{mf.frequency}</span>
              </div>
              <div className="grid md:grid-cols-3 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Metric</p>
                  <p className="text-[10px] text-muted-foreground">{mf.metric}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Owner & Tool</p>
                  <p className="text-[10px] text-muted-foreground">{mf.owner} — {mf.tool}</p>
                </div>
                <div className="rounded-lg bg-red-50/50 p-2.5">
                  <p className="text-[10px] font-bold uppercase text-red-500 mb-0.5">Escalation</p>
                  <p className="text-[10px] text-muted-foreground">{mf.escalation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/30 p-6">
        <h4 className="text-sm font-bold mb-3 flex items-center gap-2"><Bot className="w-4 h-4 text-indigo-600" /> How the AI + Regional Contributor Model Works</h4>
        <p className="text-xs text-muted-foreground mb-4">This workflow applies to Mugumo (Book One) AND every future regional contributor. The AI + MachariaOS framework is the constant; the writer rotates by region and volume.</p>
        <div className="grid md:grid-cols-5 gap-3">
          {[
            { step: "1", title: "Mike + AI Design", desc: "Book Agent generates chapter outlines, AFOS mappings, interview questions, and structural briefs. Mike reviews and approves. Framework is volume-agnostic." },
            { step: "2", title: "Brief → Contributor", desc: "Structured brief delivered to regional contributor (Mugumo for Vol. I, TBD Lagos for Vol. II, etc.). They write FROM the brief — narrative craft, cultural fluency, local founder access." },
            { step: "3", title: "Draft → AI Pre-Screen", desc: "Book Agent checks: AFOS alignment, cross-volume consistency, canon references, structural completeness. Same quality gate regardless of contributor." },
            { step: "4", title: "Mike Final Review", desc: "Mike reviews pre-screened draft. 14-day approval window. One revision round included. Sign-off triggers milestone payment." },
            { step: "5", title: "IP → MachariaOS", desc: "Upon payment, all IP vests in MachariaOS. Contributor retains credit + revenue share. Same structure whether contributor is in Nairobi, Lagos, Cape Town, or Cairo." },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border bg-white p-4 text-center">
              <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-black text-white bg-gradient-to-br from-indigo-600 to-indigo-800">{s.step}</div>
              <p className="text-xs font-bold">{s.title}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
