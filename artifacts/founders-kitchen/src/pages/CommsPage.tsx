import {
  MessageSquare,
  Users,
  Calendar,
  Share2,
  Target,
  Megaphone,
  TrendingUp,
  Tv,
  Radio,
  Hash,
  Pen,
  FileText,
  Clapperboard,
  Image,
  Film,
  Quote,
  Clock,
  ArrowRight,
} from "lucide-react";

const BRAND_VOICE = [
  {
    trait: "Warm",
    description: "The kitchen is intimate. The conversation is human. Copy should feel like sitting down with a friend over a home-cooked meal — never corporate, never stiff.",
  },
  {
    trait: "Culinary",
    description: "Food is the medium. Language should evoke flavour, texture, preparation. The act of cooking is a metaphor for building — both require patience, skill, and the right ingredients.",
  },
  {
    trait: "Storytelling",
    description: "Every founder has a story worth telling. FK content leads with narrative — the human journey, not the business pitch. Vulnerability and honesty over achievement and accolades.",
  },
  {
    trait: "African",
    description: "Rooted in the African founder experience. Ingredients, recipes, and stories reflect the continent. Not aspirational-Western — proudly local with a global perspective.",
  },
];

const CONTENT_TYPES = [
  {
    icon: Film,
    title: "Episode Teasers",
    description: "60-90 sec trailer for each episode. Hook: the founder's most vulnerable moment + the dish being prepared. Cut by John in Opus, approved by Maurice.",
    frequency: "Per episode",
    color: "#F40009",
  },
  {
    icon: Clapperboard,
    title: "Behind-the-Scenes",
    description: "Raw kitchen moments — Mike prepping, the founder arriving, first taste reactions. Shot by Austin/GoodCompany during filming. Authentic, unpolished, real.",
    frequency: "Per filming day",
    color: "#1C39BB",
  },
  {
    icon: FileText,
    title: "Recipe Cards",
    description: "The actual recipe from each episode — beautifully designed in Canva by John. Shareable, saveable. Connects the food to the story. Brand partner ingredients highlighted.",
    frequency: "Per episode",
    color: "#177245",
  },
  {
    icon: Quote,
    title: "Founder Spotlight Clips",
    description: "15-30 sec vertical clips — one powerful quote from the founder over footage of the meal being plated. Optimised for Reels, TikTok, LinkedIn.",
    frequency: "3-5 per episode",
    color: "#E89832",
  },
  {
    icon: Image,
    title: "Photography Stills",
    description: "High-quality stills from each filming day — food close-ups, founder portraits in the kitchen, the tea valley through the glass. For press, social, and partner use.",
    frequency: "10-15 per episode",
    color: "#8A5ABF",
  },
  {
    icon: Pen,
    title: "Editorial / Long-form",
    description: "Written companion pieces — Maurice drafts the editorial angle for each episode. For Business Daily column, Nation lifestyle, or mikemacharia.com blog.",
    frequency: "Select episodes",
    color: "#00827F",
  },
];

const DISTRIBUTION = [
  {
    channel: "TV47 via Cape Media",
    icon: Tv,
    owner: "Cape Media / Daisy Rono",
    description: "Broadcast distribution. Weekly slot negotiated by Cape Media. Full episodes edited to broadcast length. TV47 Digital for simultaneous live stream.",
    color: "#00827F",
  },
  {
    channel: "Social Media",
    icon: Hash,
    owner: "Evelyn Ahono (via Metricool)",
    description: "IG @foundersbattlefield, TikTok, X, YouTube, LinkedIn, FB. John loads full queue into Metricool — schedule, copy, assets. Evelyn executes and manages community.",
    color: "#177245",
  },
  {
    channel: "LinkedIn & PR",
    icon: TrendingUp,
    owner: "Maurice Wangalachi",
    description: "Thought leadership positioning. Press releases per episode, Business Daily column pitches, podcast guest appearances for Mike. Maurice owns the narrative.",
    color: "#F4C430",
  },
  {
    channel: "Radio47",
    icon: Radio,
    owner: "Cape Media",
    description: "Pre-episode preview segments. Behind-the-scenes audio clips. Coordinate with Maurice for editorial framing. Drive tune-in for TV47 broadcast.",
    color: "#1C39BB",
  },
];

const CALENDAR = [
  {
    phase: "Pre-Season",
    duration: "4-6 weeks before first filming day",
    color: "#F4C430",
    items: [
      "Announce season — teaser trailer (John produces, Maurice approves, Evelyn posts)",
      "Founder guest reveals — one per week, staggered for sustained engagement",
      "Behind-the-scenes: Tigoni House kitchen setup, overhead rig installation",
      "Maurice seeds the season theme in media — editorial hook for press",
      "Brand partner announcement — co-branded social assets by John",
    ],
  },
  {
    phase: "During Filming",
    duration: "10-12 filming days",
    color: "#F40009",
    items: [
      "Real-time BTS content per filming day — Evelyn posts from Metricool",
      "Day-of story templates (pre-built by John in Canva) — Evelyn adds photos",
      "Episode teaser drops 48hrs after each filming day — John cuts in Opus",
      "Maurice monitors sentiment and community response — weekly report to Mike",
      "WhatsApp Channel exclusives — behind-the-scenes clips for 690 followers",
    ],
  },
  {
    phase: "Post-Season",
    duration: "6-8 weeks after last episode airs",
    color: "#177245",
    items: [
      "Full episode release schedule — one per week on TV47 and social",
      "Opus clips per episode (5-8 cuts) — John produces, Evelyn posts over 10 days",
      "Recipe card series — one card per episode, shareable format",
      "Season retrospective — highlight reel + community engagement metrics",
      "Maurice leads sponsor debrief — coverage metrics, media pickup, renewal pitch",
      "Seed next season — community question, not announcement",
    ],
  },
];

const CAMPAIGN_MODEL = {
  title: "3-Week Campaign Model",
  subtitle: "Proven with The Arena — adapted for FK episode launches",
  weeks: [
    {
      week: "Week 1",
      label: "Trailer Drop + Proof",
      color: "#F40009",
      items: [
        "Episode trailer drops — primary launch asset",
        "Founder bio card + recipe preview",
        "Proof stats from previous episodes",
        "Daily IG Stories, 3x feed posts",
      ],
    },
    {
      week: "Week 2",
      label: "Theme Content + Depth",
      color: "#F4C430",
      items: [
        "30-sec social cuts — theme reveal",
        "Founder spotlight clip (quote + plating shot)",
        "Behind-the-scenes from filming day",
        "Radio47 preview segment",
      ],
    },
    {
      week: "Week 3",
      label: "Countdown + Urgency",
      color: "#177245",
      items: [
        "15-sec hook version — tune-in CTA",
        "Countdown graphics (3day, 1day)",
        "2x daily posting pace",
        "TV47 broadcast day push",
      ],
    },
  ],
};

export default function CommsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-[#003153] via-[#003153]/90 to-[#003153]/80 border-b-2 border-[#F40009]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-label font-semibold tracking-[0.3em] text-[#F40009] uppercase mb-1">FK Communications Strategy</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-wide text-white uppercase">Comms Plan</h1>
          <p className="text-white/70 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed font-body">
            FK-specific communications strategy — brand voice, content types, distribution channels, and the campaign model. Distinct from the generic MikeMacharia.com comms plan. This is about the show and its brand partnerships.
          </p>
          <div className="mt-6 flex items-center gap-2 p-3 bg-[#F40009]/10 border border-[#F40009]/20 rounded-lg w-fit">
            <Megaphone className="w-4 h-4 text-[#F40009]" />
            <p className="text-xs text-white/80 font-label">
              <strong>Strategy Owner:</strong> Maurice Wangalachi — CommsPRCreative backbone
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section>
          <SectionHeader icon={MessageSquare} title="Brand Voice — FK Specific" />
          <div className="grid sm:grid-cols-2 gap-4">
            {BRAND_VOICE.map((v) => (
              <div key={v.trait} className="bg-card border border-card-border rounded-xl p-5">
                <h4 className="font-label text-lg font-semibold text-foreground mb-2">{v.trait}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{v.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-muted/50 border border-border rounded-lg">
            <p className="text-xs text-muted-foreground font-body">
              <strong className="text-foreground">Tone guard:</strong> Warm, serious, honest — no hype. The FK voice is not the Arena voice (which is energetic and urgent). FK is reflective, culinary, intimate. Maurice reviews and approves all copy before John loads it into Metricool. Nothing goes live without brand voice approval.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader icon={Target} title="Content Types" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_TYPES.map((ct) => (
              <div key={ct.title} className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${ct.color}12`, border: `1px solid ${ct.color}25` }}>
                    <ct.icon className="w-4 h-4" style={{ color: ct.color }} />
                  </div>
                  <div>
                    <h4 className="font-label text-base font-semibold text-foreground">{ct.title}</h4>
                    <p className="text-[10px] font-label font-medium" style={{ color: ct.color }}>{ct.frequency}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{ct.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Share2} title="Distribution Channels" />
          <div className="space-y-3">
            {DISTRIBUTION.map((d) => (
              <div key={d.channel} className="bg-card border border-card-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${d.color}12`, border: `1px solid ${d.color}25` }}>
                  <d.icon className="w-5 h-5" style={{ color: d.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="font-label text-base font-semibold text-foreground">{d.channel}</h4>
                    <span className="text-xs text-muted-foreground font-body">— {d.owner}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed font-body">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Calendar} title="Content Calendar Framework" />
          <div className="space-y-4">
            {CALENDAR.map((phase) => (
              <div key={phase.phase} className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 rounded-full" style={{ backgroundColor: phase.color }} />
                  <div>
                    <h4 className="font-label text-lg font-semibold text-foreground">{phase.phase}</h4>
                    <p className="text-xs text-muted-foreground font-body">{phase.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: phase.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Clock} title={CAMPAIGN_MODEL.title} />
          <p className="text-sm text-muted-foreground mb-4 font-body">{CAMPAIGN_MODEL.subtitle}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {CAMPAIGN_MODEL.weeks.map((w, i) => (
              <div key={w.week} className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider px-2 py-1 rounded font-label" style={{ backgroundColor: `${w.color}12`, color: w.color, border: `1px solid ${w.color}25` }}>
                    {w.week}
                  </span>
                  <span className="text-xs text-muted-foreground font-label">{w.label}</span>
                </div>
                <ul className="space-y-2">
                  {w.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: w.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {i < CAMPAIGN_MODEL.weeks.length - 1 && (
                  <div className="flex justify-end mt-3">
                    <ArrowRight className="w-4 h-4 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Users} title="Production Handoff Flow" />
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-4 font-body">
              The content production chain follows the same proven flow established with The Arena. Every piece of FK content follows this exact sequence — no shortcuts.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                { label: "Austin / GoodCompany", sub: "Raw capture", color: "#1C39BB" },
                { label: "Douglas / Glasshouse", sub: "Post-production", color: "#8A5ABF" },
                { label: "John", sub: "Review + derivatives", color: "#007FFF" },
                { label: "Maurice", sub: "Copy approval", color: "#F4C430" },
                { label: "John", sub: "Loads Metricool", color: "#007FFF" },
                { label: "Evelyn", sub: "Posts + community", color: "#177245" },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="px-3 py-2 rounded-lg border" style={{ backgroundColor: `${step.color}08`, borderColor: `${step.color}25` }}>
                    <p className="font-label font-medium text-foreground text-xs">{step.label}</p>
                    <p className="text-[10px] mt-0.5 font-label" style={{ color: step.color }}>{step.sub}</p>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-border flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#003153] border-t-2 border-[#F40009] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/50 font-label uppercase tracking-widest">Founders Kitchen Comms Plan · Strategy Owner: Maurice Wangalachi · CommsPRCreative</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-[#F40009]" />
      <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">{title}</h2>
    </div>
  );
}
