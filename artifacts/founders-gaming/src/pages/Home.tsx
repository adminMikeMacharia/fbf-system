import { Link } from "wouter";
import { Sword, Trophy, Zap, ChevronRight, Target, Shield, Star, ArrowRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const features = [
  {
    icon: Sword,
    title: "The Arena",
    label: "Pitch Battles",
    desc: "Startup pitches reimagined as competitive gaming rounds. Founders face off in structured, scored battle formats.",
    href: `${BASE}/arena`,
    color: "#DC143C",
  },
  {
    icon: Trophy,
    title: "Game Mechanics",
    label: "XP & Rankings",
    desc: "Earn XP for milestones, collect badges for AFOS ARCs, and climb the season leaderboard.",
    href: `${BASE}/mechanics`,
    color: "#F4A61D",
  },
  {
    icon: Target,
    title: "Ideation Wall",
    label: "Vertical Concepts",
    desc: "A living kanban of gaming verticals FBF could launch — mobile, esports, edutainment, and beyond.",
    href: `${BASE}/ideation`,
    color: "#06D6A0",
  },
  {
    icon: Shield,
    title: "Build With Us",
    label: "Partner Up",
    desc: "For gaming studios, developers, and sponsors ready to co-build the future of founder gaming.",
    href: `${BASE}/build`,
    color: "#0080FF",
  },
];

const stats = [
  { value: "12+", label: "Game Concepts", sub: "In Ideation" },
  { value: "S1", label: "Season One", sub: "Coming 2026" },
  { value: "5x", label: "XP Multiplier", sub: "For Finalists" },
  { value: "100+", label: "Founders", sub: "In the Arena" },
];

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/hero-gaming-arena.png`} alt="African gamers at esports tournament" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(0,20,40,0.85) 0%, rgba(0,30,56,0.80) 40%, rgba(0,34,68,0.75) 70%, rgba(0,20,40,0.85) 100%)" }} />
        </div>
        <div className="absolute inset-0 hud-grid opacity-60" />
        <div className="absolute inset-0 scanline pointer-events-none" />

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#DC143C" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8"
          style={{ background: "#0080FF" }}
        />

        <div
          className="absolute top-8 left-8 font-condensed text-xs tracking-widest uppercase opacity-30"
          style={{ color: "#DC143C" }}
        >
          &gt; FBF_GAMING_v1.0
        </div>
        <div
          className="absolute top-8 right-8 font-condensed text-xs tracking-widest uppercase opacity-30"
          style={{ color: "#DC143C" }}
        >
          SZN_01 // ARENA_ACTIVE
        </div>
        <div
          className="absolute bottom-24 left-8 font-condensed text-xs tracking-widest uppercase opacity-20"
          style={{ color: "#DC143C" }}
        >
          PITCH.BATTLE / SCORE.TRACK / XP.EARN
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-poppins font-semibold tracking-widest uppercase mb-8"
            style={{
              background: "rgba(220, 20, 60, 0.12)",
              border: "1px solid rgba(220, 20, 60, 0.35)",
              color: "#DC143C",
            }}
          >
            <Zap className="w-3 h-3" />
            Founders Battlefield Gaming Initiative
            <Zap className="w-3 h-3" />
          </div>

          <h1
            className="font-condensed font-black uppercase text-center leading-none mb-6"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            The Arena Is{" "}
            <span
              style={{
                color: "#DC143C",
                textShadow: "0 0 30px rgba(220, 20, 60, 0.7), 0 0 60px rgba(220, 20, 60, 0.3)",
              }}
            >
              Now A Game
            </span>
          </h1>

          <p
            className="font-inter text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
            style={{ color: "rgba(210, 230, 245, 0.7)" }}
          >
            Founders Battlefield reimagined through the lens of gaming. Pitch battles become arenas.
            Milestones become XP. Founders become champions.
          </p>

          <p
            className="font-poppins text-sm max-w-xl mx-auto mb-12 font-medium tracking-wide"
            style={{ color: "rgba(220, 20, 60, 0.8)" }}
          >
            WHERE ENTREPRENEURSHIP MEETS PLAY
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${BASE}/arena`}
              className="inline-flex items-center gap-2 px-8 py-4 font-condensed font-bold text-lg tracking-widest uppercase transition-all duration-300 rounded"
              style={{
                background: "linear-gradient(135deg, #DC143C, #A50021)",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(220, 20, 60, 0.4)",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(220, 20, 60, 0.7)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(220, 20, 60, 0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Enter The Arena
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`${BASE}/build`}
              className="inline-flex items-center gap-2 px-8 py-4 font-condensed font-bold text-lg tracking-widest uppercase transition-all duration-300 rounded"
              style={{
                background: "transparent",
                border: "2px solid rgba(220, 20, 60, 0.4)",
                color: "rgba(210, 230, 245, 0.85)",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#DC143C";
                (e.currentTarget as HTMLElement).style.background = "rgba(220, 20, 60, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(220, 20, 60, 0.4)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Build With Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-4 rounded text-center"
                style={{
                  background: "rgba(0, 49, 83, 0.4)",
                  border: "1px solid rgba(220, 20, 60, 0.15)",
                }}
              >
                <div
                  className="font-condensed font-black text-3xl leading-none"
                  style={{
                    color: "#DC143C",
                    textShadow: "0 0 15px rgba(220, 20, 60, 0.5)",
                  }}
                >
                  {s.value}
                </div>
                <div className="font-condensed font-bold text-sm tracking-widest uppercase mt-1" style={{ color: "#ffffff" }}>
                  {s.label}
                </div>
                <div className="font-poppins text-xs mt-0.5" style={{ color: "rgba(210, 230, 245, 0.4)" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(transparent, #001428)",
          }}
        />
      </section>

      <section className="py-20 px-4" style={{ background: "#001428" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-poppins font-semibold tracking-widest uppercase mb-4"
              style={{
                background: "rgba(220, 20, 60, 0.1)",
                border: "1px solid rgba(220, 20, 60, 0.2)",
                color: "#DC143C",
              }}
            >
              <Star className="w-3 h-3" />
              The Platform
            </div>
            <h2
              className="font-condensed font-black text-4xl md:text-5xl uppercase"
              style={{ color: "#ffffff", letterSpacing: "0.04em" }}
            >
              Four Pillars of the{" "}
              <span style={{ color: "#DC143C" }}>Gaming Initiative</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link
                  key={f.title}
                  href={f.href}
                  className="group block p-6 rounded transition-all duration-300"
                  style={{
                    background: "rgba(0, 30, 56, 0.8)",
                    border: "1px solid rgba(0, 49, 83, 0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${f.color}50`;
                    (e.currentTarget as HTMLElement).style.background = "rgba(0, 40, 70, 0.9)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${f.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 49, 83, 0.6)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0, 30, 56, 0.8)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${f.color}18`,
                        border: `1px solid ${f.color}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: f.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-poppins text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: f.color }}
                      >
                        {f.label}
                      </div>
                      <h3
                        className="font-condensed font-bold text-xl uppercase mb-2"
                        style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                      >
                        {f.title}
                      </h3>
                      <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(210, 230, 245, 0.6)" }}>
                        {f.desc}
                      </p>
                    </div>
                    <ArrowRight
                      className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: "rgba(210, 230, 245, 0.3)" }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #001428 0%, #002244 50%, #001428 100%)",
        }}
      >
        <div className="absolute inset-0 hud-grid-subtle opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2
            className="font-condensed font-black text-4xl md:text-5xl uppercase mb-4"
            style={{ color: "#ffffff", letterSpacing: "0.04em" }}
          >
            Ready to Level Up{" "}
            <span style={{ color: "#DC143C" }}>Founder Development?</span>
          </h2>
          <p className="font-inter text-base mb-8" style={{ color: "rgba(210, 230, 245, 0.6)" }}>
            Whether you're a gaming studio, a developer, or a brand looking to connect with Africa's
            boldest founders — there's a role for you in the arena.
          </p>
          <Link
            href={`${BASE}/build`}
            className="inline-flex items-center gap-2 px-8 py-4 font-condensed font-bold text-lg tracking-widest uppercase transition-all duration-300 rounded"
            style={{
              background: "linear-gradient(135deg, #DC143C, #A50021)",
              color: "#ffffff",
              boxShadow: "0 0 20px rgba(220, 20, 60, 0.4)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(220, 20, 60, 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(220, 20, 60, 0.4)";
            }}
          >
            Join the Initiative
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
