import { useState, useEffect, useCallback } from "react";
import {
  Clock,
  LogIn,
  LogOut,
  Mail,
  KeyRound,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Timer,
  Calendar,
  Users,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Send,
  RefreshCw,
  Briefcase,
  Clapperboard,
  Building2,
  Camera,
  Film,
  Music,
  Monitor,
  Megaphone,
  Palette,
  FileText,
  Wrench,
  Scale,
} from "lucide-react";

const MACHARIA_OS_BASE = "https://macharia-os-main.replit.app";
const API_BASE = `${MACHARIA_OS_BASE}/api/timesheet`;
const TIMESHEET_PORTAL = `${MACHARIA_OS_BASE}/timesheet/`;
const FK_BRAND = "founders kitchen";

type AuthState = {
  authenticated: boolean;
  email: string;
  personName: string;
  brandId: string;
};

type TimesheetEntry = {
  id: string;
  date: string;
  description: string;
  category: string;
  hours: number;
  phaseId?: string;
  venture?: string;
  status?: string;
  totalCostKes?: string;
};

type DashboardData = {
  totalEntries: number;
  totalHours: number;
  totalCostKes: number;
  recentEntries: TimesheetEntry[];
};

type TaskMapping = {
  fkPhase: string;
  fkTask: string;
  timesheetCategory: string;
  icon: typeof Clock;
  suggestedDescription: string;
};

const FK_TASK_MAPPINGS: TaskMapping[] = [
  { fkPhase: "Development", fkTask: "Show Bible", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "FK S1 — Show Bible development: format, tone, audience, episode structure" },
  { fkPhase: "Development", fkTask: "Pitch Deck", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "FK S1 — Pitch deck design and sizzle reel production" },
  { fkPhase: "Development", fkTask: "Competitive Analysis", timesheetCategory: "Research", icon: FileText, suggestedDescription: "FK S1 — Competitive landscape research: cooking shows, positioning analysis" },
  { fkPhase: "Development", fkTask: "IP & Rights", timesheetCategory: "Legal & Compliance", icon: Scale, suggestedDescription: "FK S1 — IP structure, trademark filing, format rights documentation" },
  { fkPhase: "Development", fkTask: "Budget Framework", timesheetCategory: "Finance & Budget", icon: Scale, suggestedDescription: "FK S1 — Master budget: above/below the line, post, delivery costs" },
  { fkPhase: "Development", fkTask: "Financing Strategy", timesheetCategory: "Finance & Budget", icon: Scale, suggestedDescription: "FK S1 — Financing plan: broadcaster deals, brand sponsorship, film fund applications" },
  { fkPhase: "Development", fkTask: "Host Casting", timesheetCategory: "Talent & Casting", icon: Users, suggestedDescription: "FK S1 — Host auditions, chemistry reads, screen tests" },
  { fkPhase: "Development", fkTask: "Team Assembly", timesheetCategory: "HR & Recruitment", icon: Users, suggestedDescription: "FK S1 — Crew hiring: sourcing, interviews, practical tests, onboarding" },
  { fkPhase: "Development", fkTask: "Writers Room", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "FK S1 — Writers room: episode outlines, running orders, segment scripts" },
  { fkPhase: "Pre-Production", fkTask: "Set Build", timesheetCategory: "Set & Construction", icon: Building2, suggestedDescription: "FK S1 — Studio set build: kitchen construction, surfaces, infrastructure" },
  { fkPhase: "Pre-Production", fkTask: "Technical Infrastructure", timesheetCategory: "Technical Setup", icon: Camera, suggestedDescription: "FK S1 — Technical install: multi-cam, lighting grid, audio, video village" },
  { fkPhase: "Pre-Production", fkTask: "Brand Zones", timesheetCategory: "Brand Integration", icon: Palette, suggestedDescription: "FK S1 — Brand integration zone setup: product placement, dwell-time mapping" },
  { fkPhase: "Pre-Production", fkTask: "Visual Style Guide", timesheetCategory: "Creative Development", icon: Palette, suggestedDescription: "FK S1 — Visual style bible: colour palette, camera language, graphics package" },
  { fkPhase: "Pre-Production", fkTask: "Music & Sound Design", timesheetCategory: "Music & Audio", icon: Music, suggestedDescription: "FK S1 — Music commission: title theme, score cues, sound design library" },
  { fkPhase: "Pre-Production", fkTask: "Recipe Development", timesheetCategory: "Food & Styling", icon: Palette, suggestedDescription: "FK S1 — Recipe testing: 10 episode packs, camera cook plans, beauty plating" },
  { fkPhase: "Pre-Production", fkTask: "Episode Scripts", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "FK S1 — Running orders: 10 episodes, minute-by-minute segment breakdown" },
  { fkPhase: "Pre-Production", fkTask: "Production Schedule", timesheetCategory: "Production Management", icon: Calendar, suggestedDescription: "FK S1 — Master schedule: 6-week shoot block, call sheets, contingency days" },
  { fkPhase: "Production", fkTask: "Studio Shoot", timesheetCategory: "Principal Photography", icon: Camera, suggestedDescription: "FK S1 — Studio shoot day: multi-cam cooking segments, interviews, beauty shots" },
  { fkPhase: "Production", fkTask: "B-Roll & Inserts", timesheetCategory: "Location Photography", icon: Film, suggestedDescription: "FK S1 — B-roll shoot: market visits, source footage, macro food photography" },
  { fkPhase: "Production", fkTask: "Dailies Review", timesheetCategory: "Editorial Review", icon: Monitor, suggestedDescription: "FK S1 — Dailies review: footage selects, performance notes, edit direction" },
  { fkPhase: "Post-Production", fkTask: "Offline Edit", timesheetCategory: "Post-Production", icon: Monitor, suggestedDescription: "FK S1 — Edit: assembly → rough → fine cut, notes rounds, music placement" },
  { fkPhase: "Post-Production", fkTask: "Motion Graphics", timesheetCategory: "Post-Production", icon: Monitor, suggestedDescription: "FK S1 — Graphics: title sequence, lower thirds, segment bumpers, end cards" },
  { fkPhase: "Post-Production", fkTask: "Colour Grade", timesheetCategory: "Post-Production", icon: Monitor, suggestedDescription: "FK S1 — Colour grade: show LUT, shot matching, food/skin tone optimisation" },
  { fkPhase: "Post-Production", fkTask: "Sound Mix", timesheetCategory: "Music & Audio", icon: Music, suggestedDescription: "FK S1 — Sound mix: dialogue, cooking SFX, music, stereo + 5.1 + M&E" },
  { fkPhase: "Post-Production", fkTask: "QC & Mastering", timesheetCategory: "Quality Control", icon: CheckCircle2, suggestedDescription: "FK S1 — QC: audio/video levels, captions, mastering to delivery spec" },
  { fkPhase: "Release", fkTask: "Marketing Campaign", timesheetCategory: "Marketing", icon: Megaphone, suggestedDescription: "FK S1 — Marketing: campaign waves, key art, trailer, social media, press" },
  { fkPhase: "Release", fkTask: "Distribution", timesheetCategory: "Distribution", icon: Megaphone, suggestedDescription: "FK S1 — Distribution: platform negotiations, international sales, windowing" },
  { fkPhase: "Release", fkTask: "Analytics & Reporting", timesheetCategory: "Analytics", icon: BarChart3, suggestedDescription: "FK S1 — Analytics: viewership tracking, sponsor ROI reports, Season 2 data" },
];

type VentureTask = {
  venture: string;
  ventureCode: string;
  task: string;
  timesheetCategory: string;
  icon: typeof Clock;
  suggestedDescription: string;
};

const FBF_VENTURE_TASKS: VentureTask[] = [
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Book Writing", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "CL — AFOS book series: manuscript writing, chapter drafts, Mugumo Munene ghostwriting coordination" },
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Ledger Management", timesheetCategory: "Finance & Budget", icon: Scale, suggestedDescription: "CL — Financial ledger entries, expense tracking, revenue reconciliation" },
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Transcription", timesheetCategory: "Research", icon: FileText, suggestedDescription: "CL — Audio/video transcription for book content, interview processing" },
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Reading Club", timesheetCategory: "Marketing", icon: Users, suggestedDescription: "CL — Reading club coordination: session planning, community engagement, feedback collection" },
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Project Board", timesheetCategory: "Production Management", icon: Briefcase, suggestedDescription: "CL — Project board updates: pipeline tracking, milestone management, status reporting" },
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Connections & Networking", timesheetCategory: "Marketing", icon: Users, suggestedDescription: "CL — Connections mapping: publisher outreach, literary agent meetings, distribution partnerships" },
  { venture: "Chapters & Ledgers", ventureCode: "CL", task: "Vision & Strategy", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "CL — Vision board: series roadmap, 5-volume plan, arc structuring" },

  { venture: "Sponsorship Hub", ventureCode: "SH", task: "Sponsor Outreach", timesheetCategory: "Marketing", icon: Megaphone, suggestedDescription: "SH — Sponsor prospecting: brand research, initial outreach, pitch scheduling" },
  { venture: "Sponsorship Hub", ventureCode: "SH", task: "Deal Structuring", timesheetCategory: "Finance & Budget", icon: Scale, suggestedDescription: "SH — Sponsorship deal structuring: tier packages, pricing, contract terms" },
  { venture: "Sponsorship Hub", ventureCode: "SH", task: "Media Kit", timesheetCategory: "Creative Development", icon: Palette, suggestedDescription: "SH — Media kit production: audience data, package design, brand alignment docs" },
  { venture: "Sponsorship Hub", ventureCode: "SH", task: "Activation Planning", timesheetCategory: "Production Management", icon: Calendar, suggestedDescription: "SH — Brand activation: integration planning, placement coordination, campaign timeline" },
  { venture: "Sponsorship Hub", ventureCode: "SH", task: "Impact Reporting", timesheetCategory: "Analytics", icon: BarChart3, suggestedDescription: "SH — Sponsor ROI reporting: impression data, engagement metrics, renewal recommendations" },
  { venture: "Sponsorship Hub", ventureCode: "SH", task: "Admin & Config", timesheetCategory: "Production Management", icon: Wrench, suggestedDescription: "SH — Hub admin: tier configuration, opportunity management, contact database" },

  { venture: "Brand Hub", ventureCode: "BH", task: "Brand Manual", timesheetCategory: "Creative Development", icon: Palette, suggestedDescription: "BH — Brand manual: 42-page visual identity guide, colour system, typography rules" },
  { venture: "Brand Hub", ventureCode: "BH", task: "Asset Library", timesheetCategory: "Creative Development", icon: Palette, suggestedDescription: "BH — Asset library: logo variants, templates, brand photography, guidelines" },
  { venture: "Brand Hub", ventureCode: "BH", task: "Brand DNA", timesheetCategory: "Research", icon: FileText, suggestedDescription: "BH — Brand DNA: values, personality traits, tone of voice dial, positioning" },
  { venture: "Brand Hub", ventureCode: "BH", task: "Ecosystem Map", timesheetCategory: "Research", icon: FileText, suggestedDescription: "BH — Ecosystem map: venture relationships, cross-brand synergies, brand architecture" },

  { venture: "Founders Gaming", ventureCode: "FG", task: "Game Design", timesheetCategory: "Creative Development", icon: FileText, suggestedDescription: "FG — Game design: mechanics, economy model, African market simulation, UX flows" },
  { venture: "Founders Gaming", ventureCode: "FG", task: "Development", timesheetCategory: "Technical Setup", icon: Wrench, suggestedDescription: "FG — Game development: coding, testing, asset integration, platform setup" },
  { venture: "Founders Gaming", ventureCode: "FG", task: "Art & Assets", timesheetCategory: "Creative Development", icon: Palette, suggestedDescription: "FG — Art production: character design, UI elements, environment art, animations" },

  { venture: "FVC", ventureCode: "FVC", task: "Venture Analysis", timesheetCategory: "Research", icon: BarChart3, suggestedDescription: "FVC — Venture case study analysis: market sizing, competitive landscape, financial modelling" },
  { venture: "FVC", ventureCode: "FVC", task: "Portfolio Tracking", timesheetCategory: "Finance & Budget", icon: Scale, suggestedDescription: "FVC — Portfolio tracking: investment thesis updates, performance metrics, reporting" },
  { venture: "FVC", ventureCode: "FVC", task: "Deal Flow", timesheetCategory: "Production Management", icon: Briefcase, suggestedDescription: "FVC — Deal flow management: pipeline review, due diligence, term sheet drafting" },

  { venture: "FBF Platform", ventureCode: "FBF", task: "Platform Development", timesheetCategory: "Technical Setup", icon: Wrench, suggestedDescription: "FBF — System development: portal builds, API work, deployment, infrastructure" },
  { venture: "FBF Platform", ventureCode: "FBF", task: "Landing Page", timesheetCategory: "Creative Development", icon: Palette, suggestedDescription: "FBF — Battlefield landing page: ecosystem directory, OTP access, design updates" },
  { venture: "FBF Platform", ventureCode: "FBF", task: "Cross-Portal Sync", timesheetCategory: "Production Management", icon: Wrench, suggestedDescription: "FBF — Cross-portal work: shared data packages, ecosystem bar, navigation, timesheet integration" },
];

const PHASE_COLORS: Record<string, string> = {
  "Development": "#6366F1",
  "Pre-Production": "#F59E0B",
  "Production": "#EF4444",
  "Post-Production": "#8B5CF6",
  "Release": "#10B981",
};

const PHASE_ICONS: Record<string, typeof Clock> = {
  "Development": FileText,
  "Pre-Production": Clapperboard,
  "Production": Camera,
  "Post-Production": Monitor,
  "Release": Megaphone,
};

async function apiCall(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include",
  });
  return res.json();
}

function LoginSection({ onAuth }: { onAuth: (auth: AuthState) => void }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const requestOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/auth/request-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setStep("otp");
      }
    } catch {
      setError("Failed to connect to MachariaOS. Please try again.");
    }
    setLoading(false);
  };

  const verifyOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: otp }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        const brandRes = await fetch(`${API_BASE}/auth/resolve-brand`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
          credentials: "include",
        });
        const brandData = await brandRes.json();
        onAuth({
          authenticated: true,
          email,
          personName: data.personName || email.split("@")[0],
          brandId: brandData.brandId || FK_BRAND,
        });
      }
    } catch {
      setError("Failed to verify OTP. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto">
            <LogIn className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-lg font-bold text-white">Connect to MachariaOS Timesheet</h3>
          <p className="text-xs text-white/50">Sign in with your MachariaOS email to log time against FBF production tasks and ventures.</p>
        </div>

        {step === "email" && (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-white/50 mb-1 block">Email Address</label>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-transparent text-sm text-white flex-1 outline-none placeholder:text-white/20"
                  onKeyDown={(e) => e.key === "Enter" && email && requestOtp()}
                />
              </div>
            </div>
            <button
              onClick={requestOtp}
              disabled={!email || loading}
              className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-white/10 disabled:text-white/30 text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Send OTP
            </button>
          </div>
        )}

        {step === "otp" && (
          <div className="space-y-3">
            <p className="text-xs text-white/60 text-center">OTP sent to <span className="text-white font-medium">{email}</span></p>
            <div>
              <label className="text-xs text-white/50 mb-1 block">Enter OTP Code</label>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <KeyRound className="w-4 h-4 text-white/30" />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter code"
                  className="bg-transparent text-sm text-white flex-1 outline-none placeholder:text-white/20 tracking-widest"
                  onKeyDown={(e) => e.key === "Enter" && otp && verifyOtp()}
                />
              </div>
            </div>
            <button
              onClick={verifyOtp}
              disabled={!otp || loading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-white/10 disabled:text-white/30 text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
              Verify & Connect
            </button>
            <button onClick={() => { setStep("email"); setOtp(""); }} className="w-full text-xs text-white/40 hover:text-white/60 transition-colors">
              Use a different email
            </button>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-xs text-red-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function QuickLogForm({ auth, onLogged }: { auth: AuthState; onLogged: () => void }) {
  const [selectedMapping, setSelectedMapping] = useState<TaskMapping | null>(null);
  const [selectedVentureTask, setSelectedVentureTask] = useState<VentureTask | null>(null);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [hours, setHours] = useState("1");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [phaseFilter, setPhaseFilter] = useState<string>("all");
  const [logMode, setLogMode] = useState<"fk" | "fbf">("fk");
  const [ventureFilter, setVentureFilter] = useState<string>("all");

  const phases = [...new Set(FK_TASK_MAPPINGS.map((m) => m.fkPhase))];
  const ventureNames = [...new Set(FBF_VENTURE_TASKS.map((v) => v.venture))];
  const filtered = phaseFilter === "all" ? FK_TASK_MAPPINGS : FK_TASK_MAPPINGS.filter((m) => m.fkPhase === phaseFilter);
  const filteredVentures = ventureFilter === "all" ? FBF_VENTURE_TASKS : FBF_VENTURE_TASKS.filter((v) => v.venture === ventureFilter);

  const activeTask = selectedMapping || selectedVentureTask;
  const activeCategory = selectedMapping?.timesheetCategory || selectedVentureTask?.timesheetCategory || "";
  const activeVenture = selectedVentureTask?.venture || "Founders Kitchen";
  const activeLabel = selectedMapping?.fkTask || selectedVentureTask?.task || "";

  const selectFkTask = (mapping: TaskMapping) => {
    setSelectedMapping(mapping);
    setSelectedVentureTask(null);
    setDescription(mapping.suggestedDescription);
    setSuccess(false);
    setError("");
  };

  const selectVentureTask = (vt: VentureTask) => {
    setSelectedVentureTask(vt);
    setSelectedMapping(null);
    setDescription(vt.suggestedDescription);
    setSuccess(false);
    setError("");
  };

  const logTime = async () => {
    if (!activeTask || !date || !hours || !description) return;
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await apiCall("/entries", {
        method: "POST",
        body: JSON.stringify({
          date,
          description,
          category: activeCategory,
          hours: parseFloat(hours),
          venture: activeVenture,
          brandId: auth.brandId || FK_BRAND,
        }),
        credentials: "include",
      });
      if (res.error) {
        setError(res.error);
      } else {
        setSuccess(true);
        setSelectedMapping(null);
        setSelectedVentureTask(null);
        setDescription("");
        setHours("1");
        onLogged();
      }
    } catch {
      setError("Failed to log time. Check your connection to MachariaOS.");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex border-b border-white/10 mb-2">
        <button
          onClick={() => { setLogMode("fk"); setSelectedVentureTask(null); }}
          className={`flex-1 px-4 py-2.5 text-xs font-bold transition-colors ${logMode === "fk" ? "text-[#F40009] border-b-2 border-[#F40009] bg-white/5" : "text-white/40 hover:text-white/60"}`}
        >
          FK Production Tasks ({FK_TASK_MAPPINGS.length})
        </button>
        <button
          onClick={() => { setLogMode("fbf"); setSelectedMapping(null); }}
          className={`flex-1 px-4 py-2.5 text-xs font-bold transition-colors ${logMode === "fbf" ? "text-[#F97316] border-b-2 border-[#F97316] bg-white/5" : "text-white/40 hover:text-white/60"}`}
        >
          FBF Ventures ({FBF_VENTURE_TASKS.length})
        </button>
      </div>

      {logMode === "fk" ? (
        <>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPhaseFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                phaseFilter === "all" ? "bg-white/10 text-white border-white/20" : "bg-transparent text-white/40 border-white/10 hover:border-white/20"
              }`}
            >
              All Phases
            </button>
            {phases.map((p) => {
              const Icon = PHASE_ICONS[p] || Clock;
              return (
                <button
                  key={p}
                  onClick={() => setPhaseFilter(p)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    phaseFilter === p
                      ? "text-white border-white/20"
                      : "text-white/40 border-white/10 hover:border-white/20"
                  }`}
                  style={phaseFilter === p ? { backgroundColor: (PHASE_COLORS[p] || "#666") + "20", borderColor: (PHASE_COLORS[p] || "#666") + "40" } : {}}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {p}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filtered.map((m) => {
              const Icon = m.icon;
              const isSelected = selectedMapping?.fkTask === m.fkTask && selectedMapping?.fkPhase === m.fkPhase;
              return (
                <button
                  key={`${m.fkPhase}-${m.fkTask}`}
                  onClick={() => selectFkTask(m)}
                  className={`text-left px-4 py-3 rounded-lg border transition-colors ${
                    isSelected
                      ? "bg-indigo-500/20 border-indigo-500/40 text-white"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: PHASE_COLORS[m.fkPhase] || "#888" }} />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{m.fkTask}</div>
                      <div className="text-[10px] text-white/40">{m.fkPhase} &middot; {m.timesheetCategory}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setVentureFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                ventureFilter === "all" ? "bg-white/10 text-white border-white/20" : "bg-transparent text-white/40 border-white/10 hover:border-white/20"
              }`}
            >
              All Ventures
            </button>
            {ventureNames.map((v) => (
              <button
                key={v}
                onClick={() => setVentureFilter(v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  ventureFilter === v
                    ? "text-white border-white/20"
                    : "text-white/40 border-white/10 hover:border-white/20"
                }`}
                style={ventureFilter === v ? { backgroundColor: (VENTURE_COLORS[v] || "#666") + "20", borderColor: (VENTURE_COLORS[v] || "#666") + "40" } : {}}
              >
                <Briefcase className="w-3.5 h-3.5" />
                {v}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredVentures.map((vt) => {
              const Icon = vt.icon;
              const isSelected = selectedVentureTask?.task === vt.task && selectedVentureTask?.venture === vt.venture;
              return (
                <button
                  key={`${vt.venture}-${vt.task}`}
                  onClick={() => selectVentureTask(vt)}
                  className={`text-left px-4 py-3 rounded-lg border transition-colors ${
                    isSelected
                      ? "bg-indigo-500/20 border-indigo-500/40 text-white"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: VENTURE_COLORS[vt.venture] || "#888" }} />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{vt.task}</div>
                      <div className="text-[10px] text-white/40">{vt.venture} &middot; {vt.timesheetCategory}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}

      {activeTask && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Plus className="w-4 h-4 text-indigo-400" />
            Log Time: {activeLabel}
            <span className="text-[10px] text-white/30 font-normal ml-auto">→ {activeVenture}</span>
          </h4>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-white/50 mb-1 block">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-white/30"
              />
            </div>
            <div>
              <label className="text-xs text-white/50 mb-1 block">Hours</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                min="0.25"
                max="24"
                step="0.25"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-white/30"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-white/50 mb-1 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-white/30 resize-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={logTime}
              disabled={loading || !description || !hours || !date}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-white/10 disabled:text-white/30 text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Log to MachariaOS
            </button>
            <button
              onClick={() => { setSelectedMapping(null); setSelectedVentureTask(null); }}
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Cancel
            </button>
          </div>

          {success && (
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 text-xs text-emerald-300">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Time logged successfully to MachariaOS Timesheet ({activeVenture})
            </div>
          )}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RecentEntries({ entries, loading, onRefresh }: { entries: TimesheetEntry[]; loading: boolean; onRefresh: () => void }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-white/40" />
          Recent Timesheet Entries
        </h4>
        <button onClick={onRefresh} className="text-xs text-white/40 hover:text-white/60 transition-colors flex items-center gap-1">
          <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>
      {loading ? (
        <div className="p-6 text-center text-white/30 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading entries from MachariaOS...
        </div>
      ) : entries.length === 0 ? (
        <div className="p-6 text-center text-white/30 text-xs">
          No timesheet entries found. Log your first entry above.
        </div>
      ) : (
        <div className="divide-y divide-white/5">
          {entries.map((entry) => (
            <div key={entry.id} className="px-5 py-3 flex items-center gap-4">
              <div className="text-xs text-white/40 w-20 shrink-0">{entry.date}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{entry.description}</div>
                <div className="text-[10px] text-white/40">{entry.category}</div>
              </div>
              <div className="text-sm font-bold text-white/70 shrink-0">{entry.hours}h</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const VENTURE_COLORS: Record<string, string> = {
  "Chapters & Ledgers": "#2563EB",
  "Sponsorship Hub": "#D97706",
  "Brand Hub": "#1a1a2e",
  "Founders Gaming": "#7C3AED",
  "FVC": "#059669",
  "FBF Platform": "#F97316",
};

function TaskMappingReference() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"fk" | "fbf">("fk");
  const phases = [...new Set(FK_TASK_MAPPINGS.map((m) => m.fkPhase))];
  const ventures = [...new Set(FBF_VENTURE_TASKS.map((v) => v.venture))];
  const totalTasks = FK_TASK_MAPPINGS.length + FBF_VENTURE_TASKS.length;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
      >
        <Briefcase className="w-5 h-5 text-white/40" />
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white">FBF → MachariaOS Task Mapping Reference</h4>
          <p className="text-xs text-white/40">{totalTasks} tasks across {ventures.length + 1} ventures mapped to timesheet categories</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
      </button>
      {open && (
        <div className="border-t border-white/5">
          <div className="flex border-b border-white/5">
            <button
              onClick={() => setTab("fk")}
              className={`flex-1 px-4 py-2.5 text-xs font-bold transition-colors ${tab === "fk" ? "text-[#F40009] border-b-2 border-[#F40009] bg-white/5" : "text-white/40 hover:text-white/60"}`}
            >
              FK Production ({FK_TASK_MAPPINGS.length})
            </button>
            <button
              onClick={() => setTab("fbf")}
              className={`flex-1 px-4 py-2.5 text-xs font-bold transition-colors ${tab === "fbf" ? "text-[#F97316] border-b-2 border-[#F97316] bg-white/5" : "text-white/40 hover:text-white/60"}`}
            >
              FBF Ventures ({FBF_VENTURE_TASKS.length})
            </button>
          </div>

          {tab === "fk" ? (
            <>
              {phases.map((phase) => {
                const tasks = FK_TASK_MAPPINGS.filter((m) => m.fkPhase === phase);
                const Icon = PHASE_ICONS[phase] || Clock;
                return (
                  <div key={phase}>
                    <div className="px-5 py-2 bg-white/5 flex items-center gap-2" style={{ borderLeft: `3px solid ${PHASE_COLORS[phase] || "#666"}` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: PHASE_COLORS[phase] || "#666" }} />
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{phase}</span>
                    </div>
                    {tasks.map((t) => (
                      <div key={`${t.fkPhase}-${t.fkTask}`} className="px-5 py-2 flex items-center gap-3 text-xs border-b border-white/5 last:border-0">
                        <span className="text-white/70 w-32 shrink-0 font-medium">{t.fkTask}</span>
                        <span className="text-white/20">→</span>
                        <span className="text-white/50">{t.timesheetCategory}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {ventures.map((venture) => {
                const tasks = FBF_VENTURE_TASKS.filter((v) => v.venture === venture);
                const color = VENTURE_COLORS[venture] || "#666";
                return (
                  <div key={venture}>
                    <div className="px-5 py-2 bg-white/5 flex items-center gap-2" style={{ borderLeft: `3px solid ${color}` }}>
                      <Briefcase className="w-3.5 h-3.5" style={{ color }} />
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{venture}</span>
                      <span className="text-[10px] text-white/30 ml-auto">{tasks.length} tasks</span>
                    </div>
                    {tasks.map((t) => (
                      <div key={`${t.venture}-${t.task}`} className="px-5 py-2 flex items-center gap-3 text-xs border-b border-white/5 last:border-0">
                        <span className="text-white/70 w-32 shrink-0 font-medium">{t.task}</span>
                        <span className="text-white/20">→</span>
                        <span className="text-white/50">{t.timesheetCategory}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function TimesheetPage() {
  const [auth, setAuth] = useState<AuthState | null>(null);
  const [entries, setEntries] = useState<TimesheetEntry[]>([]);
  const [entriesLoading, setEntriesLoading] = useState(false);

  const fetchEntries = useCallback(async () => {
    if (!auth?.authenticated) return;
    setEntriesLoading(true);
    try {
      const data = await apiCall("/entries", { credentials: "include" });
      if (Array.isArray(data)) {
        setEntries(data.slice(0, 20));
      } else if (data.entries && Array.isArray(data.entries)) {
        setEntries(data.entries.slice(0, 20));
      }
    } catch {
      setEntries([]);
    }
    setEntriesLoading(false);
  }, [auth]);

  useEffect(() => {
    if (auth?.authenticated) {
      fetchEntries();
    }
  }, [auth, fetchEntries]);

  const handleLogout = () => {
    setAuth(null);
    setEntries([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Timer className="w-8 h-8 text-[#F40009]" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Timesheet</h1>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            Log time against FK production tasks and all FBF ventures directly to the MachariaOS timesheet system. Every hour tracked here flows into the central timesheet for billing, reporting, and project cost tracking.
          </p>
        </div>

        {auth?.authenticated && (
          <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{auth.personName}</div>
                <div className="text-xs text-white/40">{auth.email} &middot; Connected to MachariaOS</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={TIMESHEET_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-indigo-200 transition-colors no-underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Full Timesheet
              </a>
              <button onClick={handleLogout} className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/60 transition-colors">
                <LogOut className="w-3.5 h-3.5" />
                Disconnect
              </button>
            </div>
          </div>
        )}

        {!auth?.authenticated ? (
          <>
            <LoginSection onAuth={setAuth} />

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F40009]" />
                How This Works
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-400">1</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">Sign In</h4>
                  <p className="text-xs text-white/50">Connect with your MachariaOS email. An OTP is sent for verification — the same auth as the main timesheet portal.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-400">2</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">Select & Log</h4>
                  <p className="text-xs text-white/50">Pick a task from FK Production or any FBF venture, enter hours and date. The entry is tagged to the correct venture in MachariaOS with the right category.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-400">3</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">Track & Report</h4>
                  <p className="text-xs text-white/50">Entries appear in the central MachariaOS dashboard. Costs roll up per phase, per person, and per category — ready for sponsor ROI reporting.</p>
                </div>
              </div>
            </div>

            <TaskMappingReference />
          </>
        ) : (
          <>
            <QuickLogForm auth={auth} onLogged={fetchEntries} />
            <RecentEntries entries={entries} loading={entriesLoading} onRefresh={fetchEntries} />
            <TaskMappingReference />
          </>
        )}
      </div>
    </div>
  );
}
