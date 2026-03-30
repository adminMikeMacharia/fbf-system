import { Smartphone, Gamepad2, BookOpen, Cpu, Globe, Plus, Filter, type LucideIcon } from "lucide-react";
import { useState } from "react";

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Ideation: { bg: "rgba(244, 166, 29, 0.12)", text: "#F4A61D", border: "rgba(244, 166, 29, 0.3)" },
  Prototype: { bg: "rgba(6, 214, 160, 0.12)", text: "#06D6A0", border: "rgba(6, 214, 160, 0.3)" },
  Exploring: { bg: "rgba(0, 128, 255, 0.12)", text: "#0080FF", border: "rgba(0, 128, 255, 0.3)" },
  "On Hold": { bg: "rgba(100, 100, 100, 0.12)", text: "#888", border: "rgba(100, 100, 100, 0.2)" },
};

const verticals = [
  {
    icon: Smartphone,
    vertical: "Mobile",
    title: "FBF Arena Mobile",
    status: "Prototype",
    desc: "A mobile app where founders submit 60-second video pitches, vote on others' ideas, and track XP/badges. Real-time battle notifications.",
    tags: ["Mobile App", "Video Pitch", "Social"],
    color: "#06D6A0",
    effort: "High",
    impact: "Very High",
  },
  {
    icon: Smartphone,
    vertical: "Mobile",
    title: "Pitch Trainer Daily",
    status: "Ideation",
    desc: "Daily micro-challenges to practice pitch elements. Duolingo-style learning streaks for founder skills — problem framing, elevator pitch, objection handling.",
    tags: ["EdTech", "Daily Active", "Gamified"],
    color: "#06D6A0",
    effort: "Medium",
    impact: "High",
  },
  {
    icon: Gamepad2,
    vertical: "Esports",
    title: "Founders League",
    status: "Exploring",
    desc: "Structured esports-format pitch competition with team sponsors, commentary, live streaming, and spectator brackets. Think StartupDraft meets LCS.",
    tags: ["Esports", "Live Events", "Broadcast"],
    color: "#DC143C",
    effort: "Very High",
    impact: "Very High",
  },
  {
    icon: Gamepad2,
    vertical: "Esports",
    title: "Pitch Desk Showdown",
    status: "Ideation",
    desc: "Panel judges stream their live deliberations. Audience bets XP on outcomes. Creates spectator tension and community investment in results.",
    tags: ["Streaming", "Community", "Interactive"],
    color: "#DC143C",
    effort: "Medium",
    impact: "High",
  },
  {
    icon: BookOpen,
    vertical: "Edutainment",
    title: "The Startup Story Game",
    status: "Ideation",
    desc: "A narrative-driven browser game where players navigate the lifecycle of an African startup — hiring, fundraising, pivoting, and exiting. Built on real FBF case studies.",
    tags: ["Narrative Game", "Learning", "Case Study"],
    color: "#0080FF",
    effort: "Very High",
    impact: "High",
  },
  {
    icon: BookOpen,
    vertical: "Edutainment",
    title: "ARC Quest",
    status: "Prototype",
    desc: "Gamified AFOS ARC curriculum. Each module is a quest with missions, checkpoints, and boss challenges. Completion unlocks real-world AFOS access.",
    tags: ["Curriculum", "AFOS", "Quests"],
    color: "#0080FF",
    effort: "High",
    impact: "Very High",
  },
  {
    icon: Cpu,
    vertical: "Simulation",
    title: "Pitch Simulator 3000",
    status: "Prototype",
    desc: "AI-powered pitch rehearsal simulator. Founders practice against a simulated judge panel. Feedback on delivery, structure, clarity, and conviction.",
    tags: ["AI", "Practice", "Simulation"],
    color: "#F4A61D",
    effort: "High",
    impact: "Very High",
  },
  {
    icon: Cpu,
    vertical: "Simulation",
    title: "Venture Capital Sim",
    status: "Ideation",
    desc: "Strategy game where players manage a simulated VC fund — source deals, conduct due diligence, make bets, and track portfolio performance across 5-year cycles.",
    tags: ["Strategy", "VC", "Simulation"],
    color: "#F4A61D",
    effort: "Very High",
    impact: "Medium",
  },
  {
    icon: Globe,
    vertical: "Metaverse",
    title: "The FBF Arena World",
    status: "Exploring",
    desc: "A virtual 3D Arena space where founders pitch on stage, investors sit in the audience, and the community watches. Hybrid physical-digital events.",
    tags: ["3D World", "VR/AR", "Events"],
    color: "#DE3163",
    effort: "Very High",
    impact: "High",
  },
  {
    icon: Globe,
    vertical: "Metaverse",
    title: "Founder Avatars",
    status: "Ideation",
    desc: "Custom 3D avatars representing each founder's journey — cosmetics earned through XP, badge unlocks visible on avatar, collectible season items.",
    tags: ["NFT-lite", "Identity", "Cosmetics"],
    color: "#DE3163",
    effort: "High",
    impact: "Medium",
  },
];

const allStatuses = ["All", "Ideation", "Prototype", "Exploring", "On Hold"];
const allVerticals = ["All", "Mobile", "Esports", "Edutainment", "Simulation", "Metaverse"];

const verticalColors: Record<string, string> = {
  Mobile: "#06D6A0",
  Esports: "#DC143C",
  Edutainment: "#0080FF",
  Simulation: "#F4A61D",
  Metaverse: "#DE3163",
};

export default function IdeationWall() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterVertical, setFilterVertical] = useState("All");

  const filtered = verticals.filter(
    (c) =>
      (filterStatus === "All" || c.status === filterStatus) &&
      (filterVertical === "All" || c.vertical === filterVertical)
  );

  const columns = ["Ideation", "Prototype", "Exploring"];

  return (
    <div style={{ background: "#001428" }}>
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #001428 0%, #001428 50%, #001428 100%)",
        }}
      >
        <div className="absolute inset-0 hud-grid-subtle opacity-50" />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: "#06D6A0" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-poppins font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(6, 214, 160, 0.1)",
              border: "1px solid rgba(6, 214, 160, 0.25)",
              color: "#06D6A0",
            }}
          >
            <Plus className="w-3 h-3" />
            Living Brainstorm
          </div>
          <h1
            className="font-condensed font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            Ideation{" "}
            <span style={{ color: "#06D6A0", textShadow: "0 0 30px rgba(6, 214, 160, 0.5)" }}>
              Wall
            </span>
          </h1>
          <p className="font-inter text-lg max-w-2xl mx-auto" style={{ color: "rgba(210, 230, 245, 0.65)" }}>
            Gaming vertical concepts in various stages of development. This is the live ideation board for Founders Gaming — updated each season.
          </p>
        </div>
      </div>

      <div className="py-8 px-4" style={{ background: "rgba(0, 20, 40, 0.6)", borderBottom: "1px solid rgba(0, 49, 83, 0.4)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-sm font-poppins" style={{ color: "rgba(210, 230, 245, 0.5)" }}>
              <Filter className="w-4 h-4" />
              Filter:
            </div>
            <div className="flex flex-wrap gap-2">
              {allStatuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className="px-3 py-1.5 rounded text-xs font-poppins font-semibold tracking-wider uppercase transition-all"
                  style={{
                    background: filterStatus === s ? "rgba(220, 20, 60, 0.2)" : "rgba(0, 30, 56, 0.6)",
                    border: filterStatus === s ? "1px solid rgba(220, 20, 60, 0.5)" : "1px solid rgba(0, 49, 83, 0.4)",
                    color: filterStatus === s ? "#DC143C" : "rgba(210, 230, 245, 0.5)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="w-px h-5 mx-1" style={{ background: "rgba(0, 49, 83, 0.6)" }} />
            <div className="flex flex-wrap gap-2">
              {allVerticals.map((v) => (
                <button
                  key={v}
                  onClick={() => setFilterVertical(v)}
                  className="px-3 py-1.5 rounded text-xs font-poppins font-semibold tracking-wider uppercase transition-all"
                  style={{
                    background: filterVertical === v ? `${verticalColors[v] || "#DC143C"}20` : "rgba(0, 30, 56, 0.6)",
                    border:
                      filterVertical === v
                        ? `1px solid ${verticalColors[v] || "#DC143C"}50`
                        : "1px solid rgba(0, 49, 83, 0.4)",
                    color:
                      filterVertical === v
                        ? verticalColors[v] || "#DC143C"
                        : "rgba(210, 230, 245, 0.5)",
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filterStatus === "All" && filterVertical === "All" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {columns.map((col) => (
                <div key={col}>
                  <div
                    className="flex items-center gap-2 mb-5 px-3 py-2 rounded"
                    style={{
                      background: `${statusColors[col].bg}`,
                      border: `1px solid ${statusColors[col].border}`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: statusColors[col].text }}
                    />
                    <span
                      className="font-condensed font-bold text-sm uppercase tracking-widest"
                      style={{ color: statusColors[col].text }}
                    >
                      {col}
                    </span>
                    <span
                      className="ml-auto font-condensed font-bold text-sm"
                      style={{ color: statusColors[col].text }}
                    >
                      {verticals.filter((c) => c.status === col).length}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {verticals
                      .filter((c) => c.status === col)
                      .map((card) => {
                        const Icon = card.icon;
                        return (
                          <IdeaCard key={card.title} card={card} Icon={Icon} />
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((card) => {
                const Icon = card.icon;
                return <IdeaCard key={card.title} card={card} Icon={Icon} />;
              })}
              {filtered.length === 0 && (
                <div className="col-span-3 text-center py-16">
                  <p className="font-poppins text-sm" style={{ color: "rgba(210, 230, 245, 0.35)" }}>
                    No concepts match your filters.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function IdeaCard({ card, Icon }: { card: (typeof verticals)[0]; Icon: LucideIcon }) {
  const sc = statusColors[card.status];
  return (
    <div
      className="p-5 rounded transition-all duration-200"
      style={{
        background: "rgba(0, 25, 50, 0.8)",
        border: "1px solid rgba(0, 49, 83, 0.5)",
        borderTop: `3px solid ${card.color}`,
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
            style={{
              background: `${card.color}18`,
              border: `1px solid ${card.color}30`,
            }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color: card.color }} />
          </div>
          <span
            className="text-[10px] font-poppins font-semibold tracking-widest uppercase"
            style={{ color: card.color }}
          >
            {card.vertical}
          </span>
        </div>
        <span
          className="px-2 py-0.5 rounded text-[10px] font-poppins font-semibold tracking-wider uppercase flex-shrink-0"
          style={{
            background: sc.bg,
            color: sc.text,
            border: `1px solid ${sc.border}`,
          }}
        >
          {card.status}
        </span>
      </div>

      <h3
        className="font-condensed font-bold text-base uppercase mb-2 leading-tight"
        style={{ color: "#ffffff", letterSpacing: "0.04em" }}
      >
        {card.title}
      </h3>
      <p className="font-inter text-xs leading-relaxed mb-3" style={{ color: "rgba(210, 230, 245, 0.55)" }}>
        {card.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {card.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-[10px] font-poppins font-medium"
            style={{
              background: "rgba(0, 49, 83, 0.5)",
              color: "rgba(210, 230, 245, 0.5)",
              border: "1px solid rgba(0, 49, 83, 0.4)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-2" style={{ borderTop: "1px solid rgba(0, 49, 83, 0.3)" }}>
        <div className="text-xs font-poppins">
          <span style={{ color: "rgba(210, 230, 245, 0.35)" }}>Effort: </span>
          <span style={{ color: "rgba(210, 230, 245, 0.7)" }}>{card.effort}</span>
        </div>
        <div className="text-xs font-poppins">
          <span style={{ color: "rgba(210, 230, 245, 0.35)" }}>Impact: </span>
          <span style={{ color: card.color }}>{card.impact}</span>
        </div>
      </div>
    </div>
  );
}
