import {
  ChefHat,
  Video,
  Users,
  MapPin,
  Calendar,
  Clapperboard,
  Utensils,
  Tv,
  Camera,
  Scissors,
  Share2,
  Megaphone,
  Monitor,
  ArrowRight,
  Mountain,
} from "lucide-react";

const TEAM = [
  {
    id: "mike",
    name: "Mike Macharia",
    role: "Host · Creator · Executive Producer",
    color: "#F40009",
    initials: "MM",
    scope: "Cooks for founders while they tell their stories. Creative vision, guest curation, episode structure, platform architecture.",
  },
  {
    id: "maurice",
    name: "Maurice Wangalachi",
    role: "CommsPR Strategy",
    color: "#F4C430",
    initials: "MW",
    scope: "PR and communications strategy backbone. Brand voice, media relationships, sponsor narrative integration. Sets the editorial direction.",
  },
  {
    id: "john",
    name: "John Gikanga",
    role: "Creative Director",
    color: "#007FFF",
    initials: "JG",
    scope: "Visual identity, episode graphics, social content production. All brand kits, Canva workspace, Opus clipping. Produces all creative assets.",
  },
  {
    id: "evelyn",
    name: "Evelyn Ahono",
    role: "Social Media & Distribution",
    color: "#177245",
    initials: "EA",
    scope: "Day-to-day posting across all handles via Metricool. Community engagement, real-time event coverage, audience growth.",
  },
  {
    id: "douglas",
    name: "Douglas (Glasshouse)",
    role: "Post-Production",
    color: "#8A5ABF",
    initials: "DG",
    scope: "Video post-production, colour grading, sound mix, final episode delivery. Receives raw footage from Austin/GoodCompany.",
  },
  {
    id: "austin",
    name: "Austin (GoodCompany)",
    role: "Production / Capture",
    color: "#1C39BB",
    initials: "AG",
    scope: "On-set capture — multi-camera filming, sound recording, lighting. Delivers raw ISO files to Douglas for post.",
  },
  {
    id: "cape",
    name: "Cape Media / Daisy Rono",
    role: "Broadcast · TV47",
    color: "#00827F",
    initials: "CM",
    scope: "TV47 broadcast distribution. Radio47 pre-show previews. Broadcast-quality production standards and scheduling.",
  },
];

const STUDIO_SPECS = [
  { label: "Main Kitchen / Studio", detail: "~45m² with central island, concealed overhead filming rig on ceiling rail" },
  { label: "Pre-prepping Kitchen", detail: "Separate prep area for mise-en-place before filming" },
  { label: "Sound Tech Room", detail: "Dedicated audio control and monitoring station" },
  { label: "Equipment Storage", detail: "Camera, lighting, and cooking equipment secure storage" },
  { label: "Washrooms", detail: "Guest and crew facilities adjacent to studio" },
  { label: "Tea Valley View", detail: "Floor-to-ceiling glass opening to Tigoni tea valley panorama" },
];

const MODES = [
  {
    title: "FK Filming",
    icon: Clapperboard,
    description: "Full production mode — multi-camera setup, overhead rig active, full crew on set. Mike cooks while the founder tells their story. 10-12 filming days per season.",
    color: "#F40009",
  },
  {
    title: "Private Dining",
    icon: Utensils,
    description: "Intimate dining experience — invite-only events at Tigoni House. Kitchen transforms from studio to hosting space. QR check-in, curated guest list via platform CRM.",
    color: "#E89832",
  },
];

const ECOSYSTEM = [
  { name: "The Arena", tag: "LIVE EVENTS", color: "#F40009", desc: "Monthly founder events. FK guests may be drawn from Arena alumni. Shared platform infrastructure." },
  { name: "FBF Chapters", tag: "COMMUNITY", color: "#177245", desc: "Regional founder chapters. FK episodes feature chapter leaders and their stories." },
  { name: "CommsPRCreative", tag: "STRATEGY", color: "#F4C430", desc: "Maurice's strategy backbone spans all ventures. FK comms follow the same editorial rigour." },
  { name: "FBF Platform", tag: "TECHNOLOGY", color: "#007FFF", desc: "event_category = founders_kitchen. QR check-in for invite-only events. CRM layer for guest management." },
];

export default function VisionBoard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b-2 border-[#F40009]">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/hero-kitchen-studio.png`} alt="African chef in professional kitchen studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003153]/90 via-[#003153]/75 to-[#003153]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#F40009] flex items-center justify-center flex-shrink-0 shadow-lg">
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs font-label font-semibold tracking-[0.3em] text-[#F40009] uppercase mb-1">FBH Holdings · fbf_kitchen</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-wide text-white uppercase">Founders Kitchen</h1>
              <p className="text-white/70 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed font-body">
                Mike Macharia cooks for founders while they tell their stories. A filming, cooking, and brand partner activation venture — produced at the Tigoni House studio with a view of the tea valley.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { icon: Video, label: "Filming Days / Season", value: "10–12" },
              { icon: MapPin, label: "Studio Location", value: "Tigoni House" },
              { icon: Camera, label: "Production Crew", value: "7 Partners" },
              { icon: Calendar, label: "Status", value: "Pre-Production" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                <stat.icon className="w-5 h-5 text-[#F40009] mx-auto mb-2" />
                <p className="text-lg font-display font-bold text-white uppercase">{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5 font-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section>
          <SectionHeader icon={Video} title="The Concept" />
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-label text-xl font-semibold mb-3 text-[#003153]">The Show</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  Founders Kitchen is an intimate long-form content format where Mike Macharia — host, cook, and creator — prepares a meal for a founder while they share their journey. The kitchen becomes the stage. The cooking process creates a natural rhythm for honest conversation — vulnerability happens when hands are busy and the setting feels human.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 font-body">
                  Each episode captures a single founder's story through the lens of a shared meal. No panels. No moderators. Just two people, a kitchen, and a story worth telling.
                </p>
              </div>
              <div>
                <h3 className="font-label text-xl font-semibold mb-3 text-[#003153]">Season Structure</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F40009] mt-1.5 flex-shrink-0" />
                    <span className="font-body"><strong className="text-foreground">10–12 filming days per season</strong> — each day produces one episode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F40009] mt-1.5 flex-shrink-0" />
                    <span className="font-body">Multi-camera setup with overhead cooking rig captures both the meal and the conversation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F40009] mt-1.5 flex-shrink-0" />
                    <span className="font-body">Post-production delivers full episodes + social derivatives (Opus clips, recipe cards, founder spotlight reels)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F40009] mt-1.5 flex-shrink-0" />
                    <span className="font-body">Distribution via TV47 (Cape Media), social channels (Evelyn/Metricool), and LinkedIn (Maurice/PR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F40009] mt-1.5 flex-shrink-0" />
                    <span className="font-body">Brand partner activations woven naturally into each episode — cooking with brand ingredients, equipment sponsors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader icon={MapPin} title="Tigoni House Studio" />
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-6 p-4 bg-[#003153]/5 border border-[#003153]/15 rounded-lg">
              <Mountain className="w-5 h-5 text-[#003153] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-label font-medium text-foreground">Tigoni House — Main Kitchen / FK Studio</p>
                <p className="text-xs text-muted-foreground mt-1 font-body">
                  The kitchen is the hub of the house. Glass folding doors open to the dining room, F1 room, and patio — flow in every direction. Doubles as the FK filming studio with a concealed overhead lighting rig on the ceiling rail (discreet when not in use). Tea valley panorama through floor-to-ceiling glass provides the backdrop.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {STUDIO_SPECS.map((spec, i) => (
                <div key={i} className="p-4 border border-border rounded-lg bg-muted/30">
                  <p className="text-sm font-label font-medium text-foreground">{spec.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-body">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader icon={Monitor} title="Modes of Operation" />
          <div className="grid sm:grid-cols-2 gap-4">
            {MODES.map((mode) => (
              <div key={mode.title} className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${mode.color}12`, border: `1px solid ${mode.color}30` }}>
                    <mode.icon className="w-5 h-5" style={{ color: mode.color }} />
                  </div>
                  <h3 className="font-label text-lg font-semibold">{mode.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{mode.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Users} title="Team Map" />
          <div className="space-y-3">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-card border border-card-border rounded-xl p-5 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-label"
                  style={{ backgroundColor: `${member.color}15`, border: `1.5px solid ${member.color}40`, color: member.color }}
                >
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="font-label text-base font-semibold text-foreground">{member.name}</h4>
                    <span className="text-xs font-label font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${member.color}12`, color: member.color, border: `1px solid ${member.color}25` }}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed font-body">{member.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Share2} title="FBH Ecosystem Connections" />
          <div className="grid sm:grid-cols-2 gap-4">
            {ECOSYSTEM.map((item) => (
              <div key={item.name} className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-label text-base font-semibold text-foreground">{item.name}</h4>
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded font-label" style={{ backgroundColor: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-[#F40009] font-label">
                  <ArrowRight className="w-3 h-3" />
                  <span>Connected to Founders Kitchen</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Clapperboard} title="Production Pipeline" />
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                { label: "Austin / GoodCompany", sub: "Capture", color: "#1C39BB" },
                { label: "Douglas / Glasshouse", sub: "Post-Production", color: "#8A5ABF" },
                { label: "John Gikanga", sub: "Creative Direction", color: "#007FFF" },
                { label: "Maurice", sub: "Copy Approval", color: "#F4C430" },
                { label: "John loads Metricool", sub: "Schedule", color: "#007FFF" },
                { label: "Evelyn", sub: "Distribution", color: "#177245" },
                { label: "Cape Media / TV47", sub: "Broadcast", color: "#00827F" },
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
          <p className="text-xs text-white/50 font-label uppercase tracking-widest">Founders Kitchen · FBH Holdings · fbf_kitchen · Pre-Production</p>
          <p className="text-[10px] text-white/30 font-label mt-1 uppercase tracking-[0.2em]">A Founders Battlefield Initiative</p>
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
