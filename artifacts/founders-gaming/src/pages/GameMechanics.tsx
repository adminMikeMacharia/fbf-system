import { Trophy, Star, Zap, Award, TrendingUp, Shield, Target, Crown, Lock } from "lucide-react";

const xpActions = [
  { action: "Submit Qualifier Pitch", xp: "250 XP", category: "Competition" },
  { action: "Win a Bracket Match", xp: "500 XP", category: "Competition" },
  { action: "Reach Quarter Finals", xp: "1,000 XP", category: "Competition" },
  { action: "Reach Semi Finals", xp: "2,500 XP", category: "Competition" },
  { action: "Season Champion", xp: "10,000 XP", category: "Competition" },
  { action: "Complete AFOS ARC Module", xp: "150 XP", category: "Learning" },
  { action: "Attend Live Arena Event", xp: "75 XP", category: "Engagement" },
  { action: "Refer a Fellow Founder", xp: "100 XP", category: "Community" },
  { action: "Post Pitch for Community Feedback", xp: "50 XP", category: "Community" },
  { action: "Achieve 30-day Streak", xp: "200 XP", category: "Consistency" },
];

const badges = [
  {
    icon: Star,
    name: "First Blood",
    desc: "Submit your first qualifier pitch",
    color: "#06D6A0",
    rarity: "Common",
    xpReq: "0 XP",
  },
  {
    icon: Shield,
    name: "ARC Graduate",
    desc: "Complete all 5 AFOS ARC modules",
    color: "#0080FF",
    rarity: "Uncommon",
    xpReq: "750 XP",
  },
  {
    icon: Target,
    name: "Bracket Breaker",
    desc: "Win 3 consecutive bracket matches",
    color: "#F4A61D",
    rarity: "Rare",
    xpReq: "1,500 XP",
  },
  {
    icon: Zap,
    name: "Pitch Perfect",
    desc: "Score 90%+ on Pitch Delivery category",
    color: "#DC143C",
    rarity: "Rare",
    xpReq: "2,000 XP",
  },
  {
    icon: TrendingUp,
    name: "Momentum",
    desc: "Maintain top-10 ranking for a full season",
    color: "#DE3163",
    rarity: "Epic",
    xpReq: "5,000 XP",
  },
  {
    icon: Award,
    name: "Semi Legend",
    desc: "Reach the Semi Finals in any season",
    color: "#002FA7",
    rarity: "Epic",
    xpReq: "5,000 XP",
  },
  {
    icon: Crown,
    name: "Arena Champion",
    desc: "Win the Grand Arena season finale",
    color: "#FFD300",
    rarity: "Legendary",
    xpReq: "10,000 XP",
  },
  {
    icon: Trophy,
    name: "Dynasty",
    desc: "Win the Grand Arena in consecutive seasons",
    color: "#DC143C",
    rarity: "Mythic",
    xpReq: "25,000 XP",
  },
];

const arcBadges = [
  { arc: "ARC 1", name: "Opportunity Spotter", desc: "Identifying and validating market problems", color: "#06D6A0" },
  { arc: "ARC 2", name: "Solution Architect", desc: "Building MVPs and testing assumptions", color: "#0080FF" },
  { arc: "ARC 3", name: "Market Pathfinder", desc: "GTM strategy and customer acquisition", color: "#F4A61D" },
  { arc: "ARC 4", name: "Revenue Raider", desc: "Business model design and monetization", color: "#DC143C" },
  { arc: "ARC 5", name: "Scale Commander", desc: "Growth mechanics and fundraising", color: "#DE3163" },
];

const leaderboardMock = [
  { rank: 1, name: "Amara K.", country: "KE", xp: 12400, badge: "Arena Champion", season: "S1" },
  { rank: 2, name: "Tolu A.", country: "NG", xp: 9800, badge: "Semi Legend", season: "S1" },
  { rank: 3, name: "Sipho M.", country: "ZA", xp: 8650, badge: "Bracket Breaker", season: "S1" },
  { rank: 4, name: "Fatou D.", country: "SN", xp: 7200, badge: "ARC Graduate", season: "S1" },
  { rank: 5, name: "Kwame A.", country: "GH", xp: 6800, badge: "Momentum", season: "S1" },
];

const rarityColors: Record<string, string> = {
  Common: "#06D6A0",
  Uncommon: "#0080FF",
  Rare: "#F4A61D",
  Epic: "#DE3163",
  Legendary: "#FFD300",
  Mythic: "#DC143C",
};

export default function GameMechanics() {
  return (
    <div style={{ background: "#001428" }}>
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #001428 0%, #001a30 50%, #001428 100%)",
        }}
      >
        <div className="absolute inset-0 hud-grid opacity-30" />
        <div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-12"
          style={{ background: "#F4A61D" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-poppins font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(244, 166, 29, 0.12)",
              border: "1px solid rgba(244, 166, 29, 0.3)",
              color: "#F4A61D",
            }}
          >
            <Zap className="w-3 h-3" />
            Gamification Systems
          </div>
          <h1
            className="font-condensed font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            Game{" "}
            <span style={{ color: "#F4A61D", textShadow: "0 0 30px rgba(244, 166, 29, 0.5)" }}>
              Mechanics
            </span>
          </h1>
          <p className="font-inter text-lg max-w-2xl mx-auto" style={{ color: "rgba(210, 230, 245, 0.65)" }}>
            XP, badges, leaderboards, and AFOS ARC achievements — a complete progression system tied to real founder development milestones.
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  XP System
                </h2>
              </div>

              <div className="space-y-2">
                {xpActions.map((a) => (
                  <div
                    key={a.action}
                    className="flex items-center justify-between p-3 rounded"
                    style={{
                      background: "rgba(0, 30, 56, 0.6)",
                      border: "1px solid rgba(0, 49, 83, 0.4)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-poppins font-semibold tracking-wider uppercase"
                        style={{
                          background:
                            a.category === "Competition"
                              ? "rgba(220, 20, 60, 0.15)"
                              : a.category === "Learning"
                              ? "rgba(0, 128, 255, 0.15)"
                              : a.category === "Community"
                              ? "rgba(6, 214, 160, 0.15)"
                              : "rgba(244, 166, 29, 0.15)",
                          color:
                            a.category === "Competition"
                              ? "#DC143C"
                              : a.category === "Learning"
                              ? "#0080FF"
                              : a.category === "Community"
                              ? "#06D6A0"
                              : "#F4A61D",
                        }}
                      >
                        {a.category}
                      </span>
                      <span className="font-inter text-sm" style={{ color: "rgba(210, 230, 245, 0.75)" }}>
                        {a.action}
                      </span>
                    </div>
                    <span
                      className="font-condensed font-bold text-sm flex-shrink-0 ml-4"
                      style={{ color: "#F4A61D" }}
                    >
                      {a.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

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
                  Season Leaderboard
                </h2>
              </div>

              <div
                className="rounded overflow-hidden mb-8"
                style={{
                  border: "1px solid rgba(220, 20, 60, 0.2)",
                }}
              >
                <div
                  className="px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "rgba(220, 20, 60, 0.12)",
                    borderBottom: "1px solid rgba(220, 20, 60, 0.15)",
                  }}
                >
                  <Trophy className="w-4 h-4" style={{ color: "#DC143C" }} />
                  <span className="font-condensed font-bold text-sm tracking-widest uppercase" style={{ color: "#ffffff" }}>
                    Season 1 — Top Founders
                  </span>
                  <span
                    className="ml-auto px-2 py-0.5 rounded text-[10px] font-poppins font-semibold"
                    style={{
                      background: "rgba(220, 20, 60, 0.2)",
                      color: "#DC143C",
                    }}
                  >
                    MOCK DATA
                  </span>
                </div>
                {leaderboardMock.map((f, i) => (
                  <div
                    key={f.rank}
                    className="flex items-center gap-4 px-4 py-3"
                    style={{
                      background: i % 2 === 0 ? "rgba(0, 30, 56, 0.5)" : "rgba(0, 20, 40, 0.5)",
                      borderBottom: i < leaderboardMock.length - 1 ? "1px solid rgba(0, 49, 83, 0.3)" : "none",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center font-condensed font-black text-sm flex-shrink-0"
                      style={{
                        background:
                          f.rank === 1
                            ? "linear-gradient(135deg, #FFD300, #F4A61D)"
                            : f.rank === 2
                            ? "linear-gradient(135deg, #c0c0c0, #a0a0a0)"
                            : f.rank === 3
                            ? "linear-gradient(135deg, #cd7f32, #a0522d)"
                            : "rgba(0, 49, 83, 0.6)",
                        color: f.rank <= 3 ? "#001428" : "rgba(210, 230, 245, 0.6)",
                      }}
                    >
                      {f.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-poppins font-semibold text-sm" style={{ color: "#ffffff" }}>
                          {f.name}
                        </span>
                        <span
                          className="text-[10px] font-poppins"
                          style={{ color: "rgba(210, 230, 245, 0.35)" }}
                        >
                          {f.country}
                        </span>
                      </div>
                      <span
                        className="text-[11px] font-poppins"
                        style={{ color: "rgba(210, 230, 245, 0.4)" }}
                      >
                        {f.badge}
                      </span>
                    </div>
                    <span
                      className="font-condensed font-bold text-base"
                      style={{ color: "#F4A61D" }}
                    >
                      {f.xp.toLocaleString()} XP
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-1 h-6 rounded"
                    style={{ background: "#0080FF" }}
                  />
                  <h3
                    className="font-condensed font-bold text-xl uppercase"
                    style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                  >
                    AFOS ARC Badges
                  </h3>
                </div>
                <div className="space-y-2">
                  {arcBadges.map((arc) => (
                    <div
                      key={arc.arc}
                      className="flex items-center gap-4 p-3 rounded"
                      style={{
                        background: "rgba(0, 30, 56, 0.6)",
                        border: `1px solid ${arc.color}20`,
                        borderLeft: `3px solid ${arc.color}`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center font-condensed font-black text-xs flex-shrink-0"
                        style={{
                          background: `${arc.color}18`,
                          color: arc.color,
                        }}
                      >
                        {arc.arc}
                      </div>
                      <div>
                        <div className="font-condensed font-bold text-sm uppercase tracking-wider" style={{ color: "#ffffff" }}>
                          {arc.name}
                        </div>
                        <div className="font-inter text-xs" style={{ color: "rgba(210, 230, 245, 0.45)" }}>
                          {arc.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ background: "rgba(0, 20, 40, 0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-1 h-8 rounded"
              style={{ background: "#06D6A0", boxShadow: "0 0 8px rgba(6, 214, 160, 0.6)" }}
            />
            <h2
              className="font-condensed font-black text-3xl uppercase"
              style={{ color: "#ffffff", letterSpacing: "0.04em" }}
            >
              Badge Collection
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.name}
                  className="p-4 rounded text-center relative overflow-hidden"
                  style={{
                    background: "rgba(0, 30, 56, 0.7)",
                    border: `1px solid ${b.color}25`,
                  }}
                >
                  <div
                    className="absolute top-2 right-2 text-[9px] font-poppins font-bold tracking-wider uppercase px-1.5 py-0.5 rounded"
                    style={{
                      background: `${rarityColors[b.rarity]}15`,
                      color: rarityColors[b.rarity],
                      border: `1px solid ${rarityColors[b.rarity]}30`,
                    }}
                  >
                    {b.rarity}
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 mt-2"
                    style={{
                      background: `${b.color}18`,
                      border: `2px solid ${b.color}40`,
                      boxShadow: `0 0 12px ${b.color}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: b.color }} />
                  </div>
                  <div
                    className="font-condensed font-bold text-sm uppercase tracking-wider mb-1"
                    style={{ color: "#ffffff" }}
                  >
                    {b.name}
                  </div>
                  <div
                    className="font-inter text-xs leading-relaxed mb-2"
                    style={{ color: "rgba(210, 230, 245, 0.45)" }}
                  >
                    {b.desc}
                  </div>
                  <div
                    className="text-xs font-poppins font-semibold"
                    style={{ color: b.color }}
                  >
                    {b.xpReq}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
