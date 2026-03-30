import { Sword, Trophy, Users, Clock, ChevronRight, Star, Flame, Shield, Target } from "lucide-react";
import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const rounds = [
  {
    number: "01",
    name: "The Qualifier",
    duration: "3 min pitch",
    desc: "Founders submit a 3-minute pitch video. Community votes and expert jury score on Problem, Solution, Team, and Market. Top 32 advance.",
    xp: "250 XP",
    badge: "QUALIFIER",
    color: "#06D6A0",
  },
  {
    number: "02",
    name: "The Bracket",
    duration: "5 min live",
    desc: "16 head-to-head matchups. Live audience scoring + judge panel. Founders are seeded by Qualifier score. Win to advance.",
    xp: "500 XP",
    badge: "BRACKET FIGHTER",
    color: "#F4A61D",
  },
  {
    number: "03",
    name: "The Quarter",
    duration: "7 min + Q&A",
    desc: "Top 8 face extended pitches with investor Q&A. Judges score Business Model, Traction, and Coachability. Scores cumulate.",
    xp: "1,000 XP",
    badge: "QUARTER FINISHER",
    color: "#0080FF",
  },
  {
    number: "04",
    name: "The Semi",
    duration: "10 min full pitch",
    desc: "Top 4 deliver full investor-grade pitches. Cross-judges deliberate. Scores are blind until reveal. Tension is maximum.",
    xp: "2,500 XP",
    badge: "SEMI-FINALIST",
    color: "#DC143C",
  },
  {
    number: "FINAL",
    name: "The Grand Arena",
    duration: "Full showcase",
    desc: "The 2 finalists face the full audience and investor panel. Live scoring. Season Champion crowned. Season bonuses distributed.",
    xp: "10,000 XP",
    badge: "ARENA CHAMPION",
    color: "#DC143C",
  },
];

const judgeScores = [
  { category: "Problem & Vision", weight: 25, icon: Target },
  { category: "Solution & Differentiation", weight: 25, icon: Shield },
  { category: "Team & Execution", weight: 20, icon: Users },
  { category: "Market & Business Model", weight: 20, icon: Trophy },
  { category: "Pitch Delivery", weight: 10, icon: Star },
];

const seasonStructure = [
  { phase: "Pre-Season", duration: "4 weeks", desc: "Applications open. Founders build profiles. Early XP from community engagement." },
  { phase: "Qualifier Round", duration: "2 weeks", desc: "Pitch submissions. Voting opens. Jury scoring begins." },
  { phase: "Arena Rounds", duration: "6 weeks", desc: "Bracket through Semi-Finals. Weekly elimination. Live events." },
  { phase: "Grand Arena", duration: "1 week", desc: "Season finale. Champion crowned. Prizes & investments announced." },
  { phase: "Off-Season", duration: "3 weeks", desc: "Season stats locked. Badges awarded. Next season announced." },
];

export default function Arena() {
  return (
    <div style={{ background: "#001428" }}>
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #001428 0%, #1a0010 50%, #001428 100%)",
        }}
      >
        <div className="absolute inset-0 hud-grid opacity-40" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "#DC143C" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-poppins font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(220, 20, 60, 0.12)",
              border: "1px solid rgba(220, 20, 60, 0.3)",
              color: "#DC143C",
            }}
          >
            <Sword className="w-3 h-3" />
            Competitive Format
          </div>
          <h1
            className="font-condensed font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            The <span style={{ color: "#DC143C", textShadow: "0 0 30px rgba(220, 20, 60, 0.6)" }}>Arena</span>
          </h1>
          <p className="font-inter text-lg max-w-2xl mx-auto" style={{ color: "rgba(210, 230, 245, 0.65)" }}>
            Founders Battlefield Arena — reimagined as a structured, scored competitive gaming format.
            Five rounds. One champion. Real stakes.
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-1 h-8 rounded"
              style={{ background: "#DC143C", boxShadow: "0 0 8px rgba(220, 20, 60, 0.6)" }}
            />
            <h2
              className="font-condensed font-black text-3xl uppercase"
              style={{ color: "#ffffff", letterSpacing: "0.04em" }}
            >
              Battle Rounds
            </h2>
          </div>

          <div className="space-y-4">
            {rounds.map((r) => (
              <div
                key={r.number}
                className="p-6 rounded transition-all duration-200"
                style={{
                  background: "rgba(0, 30, 56, 0.7)",
                  border: `1px solid ${r.color}25`,
                  borderLeft: `3px solid ${r.color}`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="font-condensed font-black text-3xl leading-none"
                      style={{ color: r.color, textShadow: `0 0 15px ${r.color}60` }}
                    >
                      {r.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3
                        className="font-condensed font-bold text-xl uppercase"
                        style={{ color: "#ffffff", letterSpacing: "0.06em" }}
                      >
                        {r.name}
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-poppins font-semibold tracking-widest uppercase"
                        style={{
                          background: `${r.color}18`,
                          border: `1px solid ${r.color}35`,
                          color: r.color,
                        }}
                      >
                        {r.badge}
                      </span>
                    </div>
                    <p className="font-inter text-sm leading-relaxed mb-3" style={{ color: "rgba(210, 230, 245, 0.6)" }}>
                      {r.desc}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-poppins" style={{ color: "rgba(210, 230, 245, 0.45)" }}>
                        <Clock className="w-3 h-3" />
                        {r.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-poppins font-semibold" style={{ color: r.color }}>
                        <Flame className="w-3 h-3" />
                        {r.xp}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ background: "rgba(0, 20, 40, 0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-1 h-8 rounded"
                  style={{ background: "#DC143C", boxShadow: "0 0 8px rgba(220, 20, 60, 0.6)" }}
                />
                <h2
                  className="font-condensed font-black text-3xl uppercase"
                  style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                >
                  Judge Scoring
                </h2>
              </div>
              <div className="space-y-4">
                {judgeScores.map((j) => {
                  const Icon = j.icon;
                  return (
                    <div key={j.category} className="flex items-center gap-4">
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#DC143C" }} />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-poppins text-sm font-medium" style={{ color: "rgba(210, 230, 245, 0.8)" }}>
                            {j.category}
                          </span>
                          <span className="font-condensed font-bold text-sm" style={{ color: "#DC143C" }}>
                            {j.weight}%
                          </span>
                        </div>
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ background: "rgba(0, 49, 83, 0.6)" }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${j.weight * 4}%`,
                              background: "linear-gradient(90deg, #DC143C, #FF1744)",
                              boxShadow: "0 0 6px rgba(220, 20, 60, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-1 h-8 rounded"
                  style={{ background: "#F4A61D", boxShadow: "0 0 8px rgba(244, 166, 29, 0.6)" }}
                />
                <h2
                  className="font-condensed font-black text-3xl uppercase"
                  style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                >
                  Season Structure
                </h2>
              </div>
              <div className="space-y-3">
                {seasonStructure.map((s, i) => (
                  <div
                    key={s.phase}
                    className="flex gap-4 p-4 rounded"
                    style={{
                      background: "rgba(0, 30, 56, 0.6)",
                      border: "1px solid rgba(0, 49, 83, 0.5)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center font-condensed font-bold text-sm flex-shrink-0"
                      style={{
                        background: "rgba(244, 166, 29, 0.15)",
                        border: "1px solid rgba(244, 166, 29, 0.3)",
                        color: "#F4A61D",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-condensed font-bold text-sm uppercase tracking-wider" style={{ color: "#ffffff" }}>
                          {s.phase}
                        </span>
                        <span className="font-poppins text-xs" style={{ color: "rgba(210, 230, 245, 0.35)" }}>
                          {s.duration}
                        </span>
                      </div>
                      <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(210, 230, 245, 0.5)" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-14 px-4"
        style={{
          background: "linear-gradient(135deg, #1a0010 0%, #001428 100%)",
          borderTop: "1px solid rgba(220, 20, 60, 0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-condensed font-black text-3xl uppercase mb-3"
            style={{ color: "#ffffff", letterSpacing: "0.04em" }}
          >
            Ready to Enter?
          </h2>
          <p className="font-inter text-sm mb-6" style={{ color: "rgba(210, 230, 245, 0.55)" }}>
            Season 1 applications open 2026. Register your interest and be first to know when the arena goes live.
          </p>
          <Link
            href={`${BASE}/build`}
            className="inline-flex items-center gap-2 px-6 py-3 font-condensed font-bold text-base tracking-widest uppercase rounded transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #DC143C, #A50021)",
              color: "#ffffff",
              boxShadow: "0 0 16px rgba(220, 20, 60, 0.4)",
              letterSpacing: "0.1em",
            }}
          >
            Register Interest
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
