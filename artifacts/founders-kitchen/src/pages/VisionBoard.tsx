import {
  ChefHat,
  Video,
  Users,
  MapPin,
  Calendar,
  Clapperboard,
  Utensils,
  Camera,
  Share2,
  Monitor,
  ArrowRight,
  Mountain,
  Image,
  Home,
  Lamp,
  DoorOpen,
  Footprints,
  CookingPot,
  Refrigerator,
  Landmark,
  Clock,
  DollarSign,
  Building2,
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

const RENDERS = [
  { src: "render-kitchen-island.jpg", alt: "Kitchen island with concrete worktops and bar stools under pergola" },
  { src: "render-pergola-wide.jpg", alt: "Wide view of kitchen under pergola with dining area" },
  { src: "render-pergola-screens.jpg", alt: "Kitchen with perforated timber folding screens and pergola" },
  { src: "render-kitchen-front.jpg", alt: "Front view of kitchen with island and cooking wall" },
  { src: "render-pergola-side.jpg", alt: "Side angle showing pergola, island and folding doors" },
  { src: "render-floor-plan.jpg", alt: "Top-down floor plan showing kitchen, support block and layout" },
  { src: "render-exterior-wide.jpg", alt: "Wide exterior view showing kitchen building with jasmine-covered pergola" },
];

const ARCHITECTURE_ELEMENTS = [
  {
    num: "01",
    title: "The Exterior Shell",
    detail: "Warm red/brown face brick — locally-sourced Nairobi brick, not render, not plaster. Exposed and celebrated. Timber soffit/fascia at eave level. Brick courses run horizontally — no feature panels, no pattern. The brick IS the pattern.",
  },
  {
    num: "02",
    title: "The Ceiling Volume",
    detail: "High ceiling — 4–4.5m to ridge. Exposed timber rafters with white-painted boards between. Clerestory windows running full perimeter at ceiling level. Perforated decorative metal screens at clerestory — geometric motif referencing East African weave tradition. This is where the kitchen breathes.",
  },
  {
    num: "03",
    title: "The Folding Doors",
    detail: "Full-height timber bi-fold doors on minimum two garden-facing sides. Floor to ceiling — no transom, no header. Heavy solid timber frames. When open, the building disappears and the kitchen is part of the garden. When closed, the kitchen is intimate and enclosed.",
  },
  {
    num: "04",
    title: "The Floor",
    detail: "Herringbone timber floor inside the building — warm, durable, beautiful on camera. Transitions to wide-plank timber decking on the outdoor pergola extension. The floor level is continuous — no step between inside and outside. One continuous plane of timber.",
  },
  {
    num: "05",
    title: "The Outdoor Pergola",
    detail: "The pergola element from v1 is retained — but relocated as an outdoor extension beyond the folding doors. Covered by living jasmine/vine canopy. Houses the long dining table for meal reveals and the finale feast. The kitchen opens onto it, not the other way around.",
  },
  {
    num: "06",
    title: "The Lighting",
    detail: "Gold orb/bubble pendant chandelier over the kitchen — warm, contemporary, not rustic. Wall sconces on brick exterior — lantern style. Track lighting on ceiling for production fill. Clerestory provides natural daylight from above throughout filming hours.",
  },
];

const ARRIVAL_STAGES = [
  {
    num: "01",
    title: "The Gate",
    detail: "Stone or brick gate pillars. Simple, no fuss. The guest's car pulls in. First impression: a private home, not a venue.",
    camera: "Wide establishing shot",
  },
  {
    num: "02",
    title: "The Driveway",
    detail: "Cobbled/sett paved path. 15–20m length minimum. Mature trees both sides casting dappled light. The kitchen building is NOT visible yet. Anticipation builds.",
    camera: "Following shot, founder walking",
  },
  {
    num: "03",
    title: "The Reveal",
    detail: "The kitchen building appears as the path curves. Brick facade, timber doors open, warm light and smells of cooking spilling out. The founder pauses. First reaction — unscripted.",
    camera: "Founder's face in this moment",
  },
  {
    num: "04",
    title: "The Threshold",
    detail: "Covered verandah/stoep before entering. Mike greets the founder here. The first handshake, the first conversation. Then they step inside together. The episode begins.",
    camera: "Two-shot, greeting moment",
  },
];

const KITCHEN_INTERIOR = [
  { title: "Cabinetry", detail: "Reclaimed/weathered timber cabinet fronts throughout. Mixed with smooth matte taupe upper cabinets. No gloss, no laminate, no painted MDF. The timber is raw, aged, textured." },
  { title: "Worktops", detail: "Honed concrete or stone — warm grey. NOT marble, NOT granite, NOT quartz composite. The worktop should look like it could survive a decade of hard cooking." },
  { title: "The Island", detail: "2.4m × 1.2m minimum. Reclaimed timber base. Concrete top. 6 bar stools — leather or kitenge-upholstered. Prep sink integrated. This is the primary filming zone — 70% of all shots are here." },
  { title: "Cooking Wall", detail: "Professional 6-burner gas range. Double oven stack above. Integrated fridge (TBC — see Fridge Decision). Extractor hood — stone surround. Open shelving either side for spice/serveware display." },
  { title: "Backsplash", detail: "Stone or textured render. NOT tile. NOT subway. The same material logic as the exterior brick — texture and age over polish and precision." },
  { title: "African Layer", detail: "Kitenge/kanga textile cushions on bar stools. African ceramic bowls and serving vessels on open shelving (alongside Luminarc). Copper and clay pots on pot rail above range. Spice shelf that reads unmistakably East African." },
  { title: "Pendant Lighting", detail: "Gold orb/bubble chandelier — warm 2700K. Dimmable. Contemporary form against the rustic materials — this contrast is intentional and important." },
  { title: "Production Ceiling", detail: "Track lighting on ceiling. 12–16 directional heads, warm white dimmable. DMX control from production office. Rigging points for boom mics on ceiling structure." },
  { title: "Folding Screens", detail: "Perforated timber screens retained on INTERIOR side walls (not the main garden-facing walls which are now the bi-fold doors). Transform intimacy of the space per episode lens." },
];

const FRIDGE_OPTIONS = [
  {
    name: "Samsung Family Hub",
    sub: "French Door · Black Stainless",
    status: "PREFERRED · PENDING VISUAL CONFIRM",
    statusColor: "#F40009",
    pros: [
      "21.5\" touchscreen on door",
      "Internal cameras — ingredient reveal",
      "Episode content display on screen",
      "\"Shop the Episode\" QR display built-in",
      "Samsung as strong category sponsor",
    ],
    cons: [
      "Touchscreen may feel too 'tech' in rustic setting",
      "Black stainless to be confirmed vs timber tones",
    ],
  },
  {
    name: "Haier",
    sub: "French Door · Stainless or Panel-Ready",
    status: "STRONG ALTERNATIVE",
    statusColor: "#007FFF",
    pros: [
      "Panel-ready option — can be faced in matching timber cabinetry",
      "Integrated look — disappears into the kitchen",
      "Haier in Naivas ecosystem — brand partnership alignment",
      "More 'kitchen' less 'tech' — fits rustic aesthetic better",
    ],
    cons: [
      "No smart screen — loses the episode-content integration",
      "Less brand moment on camera — less commercially valuable",
    ],
  },
  {
    name: "Smeg / La Cornue",
    sub: "Retro Fridge · Statement Colour",
    status: "WILDCARD · HIGH VISUAL IMPACT",
    statusColor: "#E89832",
    pros: [
      "Visually extraordinary — becomes a set character",
      "Available in warm colours — cream, sage, terracotta (all work with brick)",
      "Instantly iconic on camera",
    ],
    cons: [
      "No smart features — pure aesthetics only",
      "Less commercial value — Smeg/La Cornue limited Nairobi presence",
      "Smaller capacity — production practicality concerns",
    ],
  },
];

const BRAND_ZONES = [
  { zone: "Cooking Wall — Ovens", brands: "Bosch / Miele", method: "Built-in to cabinetry. Always visible in hero shot. Used every episode.", camera: "HERO · EVERY EP", episodes: "10/10" },
  { zone: "Cooking Wall — Range", brands: "Smeg / Wolf", method: "Stone alcove surround. Pot rail above. Central to all cooking sequences.", camera: "COOKING · EVERY EP", episodes: "10/10" },
  { zone: "Fridge", brands: "Samsung / Haier / Smeg (TBC)", method: "Ingredient reveal on opening. Samsung: screen displays episode content.", camera: "REVEAL · INGREDIENT PULL", episodes: "10/10" },
  { zone: "The Island Surface", brands: "Episode hero brand — rotates", method: "Ingredients dressed on island per episode. In active use throughout cooking.", camera: "CLOSE-UP · PREP", episodes: "Rotation" },
  { zone: "Spice Shelf", brands: "Tropical Heat · Kasuku · Bidco · Blue Band · Menengai", method: "Permanent shelf display. Stone backsplash behind. Always lit. Always in frame. Authentic pantry styling.", camera: "BACKGROUND · ALWAYS", episodes: "10/10" },
  { zone: "Open Shelving", brands: "Luminarc — full range", method: "All glassware and serveware is Luminarc. Every plating and meal reveal shot includes this zone.", camera: "MEAL REVEAL · PLATING", episodes: "10/10" },
  { zone: "Counter Appliances", brands: "Midea blender · Mika kettle", method: "Placed on counter. Used 2–3 times per episode in prep sequences.", camera: "PREP SEQUENCE", episodes: "10/10" },
  { zone: "Grill Station", brands: "Kenchic · Festive · Bidco oil", method: "Products in active use at grill. Packaging on prep counter beside grill. Flame and sizzle shots.", camera: "FLAME · DRAMATIC", episodes: "4–5 eps" },
  { zone: "Dining Table", brands: "Naivas \"Shop the Episode\" + Luminarc", method: "Finished meal on Luminarc. Naivas QR display card on table. Episode brand featured in centrepiece.", camera: "EPISODE CLOSE", episodes: "10/10" },
  { zone: "Driveway + Exterior", brands: "Naivas (subtle) + Episode partner", method: "Episode-branded welcome elements at threshold — a branded apron, a recipe card, flowers. Arrival moment.", camera: "ARRIVAL · OPEN SEQUENCE", episodes: "10/10" },
];

const TIMELINE = [
  { period: "Mar – Apr 2026", detail: "Lock Naivas presenting partnership. Commission architect. Begin plot search: Karen / Muthaiga / Runda / Gigiri." },
  { period: "Apr – May 2026", detail: "Plot acquired. Architect design phase begins. Concept design + planning approvals. Confirm appliance brand partners (Samsung/Haier, Bosch/Miele)." },
  { period: "May – Jun 2026", detail: "Construction drawings approved. Build begins. Foundation + structure. Driveway cobbles laid first." },
  { period: "Jun – Oct 2026", detail: "Main build phase. Brick structure, timber roof, ceiling, folding door installation, kitchen fitout, production infrastructure. Pergola extension last." },
  { period: "Oct – Nov 2026", detail: "Studio completes + is dressed. Planting in. Appliances installed. Brand product placement set. Luminarc shelving styled." },
  { period: "Nov 2026", detail: "Sizzle reel filmed in the studio. 3–5 minutes. The kitchen, the food, the feeling. Mike on camera. No guests yet." },
  { period: "Dec 2026 – Jan 2027", detail: "Netflix Africa + Showmax pitch submitted. Bible + Treatment + Sizzle (filmed in the studio) + Naivas presenting partnership confirmed." },
  { period: "Feb – Apr 2027", detail: "Platform deal negotiated and signed. Season 1 pre-production: cast all 10 episodes, episode briefs locked, production crew engaged." },
  { period: "May – Aug 2027", detail: "Season 1 films — 10 episodes in the permanent owned studio. The studio has been waiting for this. It is ready." },
];

const BUDGET_BLOCKS = [
  { amount: "4.5M", label: "Brick Structure + Roof", detail: "Main kitchen building shell" },
  { amount: "4.2M", label: "Kitchen Fitout", detail: "Cabinetry, worktops, island" },
  { amount: "3.8M", label: "Appliances", detail: "Range, ovens, fridge, extractor" },
  { amount: "2.5M", label: "Production Infra", detail: "Lighting, audio, cameras, power" },
  { amount: "2.0M", label: "Folding Door System", detail: "Timber bi-fold, 2 openings" },
  { amount: "1.8M", label: "Support Block", detail: "Green room, office, WC, store" },
  { amount: "1.5M", label: "Driveway + Landscape", detail: "Cobbles, planting, gatehouse" },
  { amount: "1.2M", label: "Contingency", detail: "~7% on build cost" },
];

const STUDIO_SPECS = [
  { label: "Total Studio Footprint", detail: "120–150m² including all internal zones + external pergola extension + arrival path" },
  { label: "Main Kitchen Building", detail: "~70–80m² single-storey brick building with high timber ceiling (4–4.5m), clerestory windows, herringbone floor" },
  { label: "Support Block", detail: "~40m² — green room (15m², soundproofed), production office (12m², glass window into kitchen), WC (6m²), equipment store (7m²)" },
  { label: "Pergola Extension", detail: "~20–30m² outdoor extension beyond bi-fold doors. Living jasmine canopy. 12-seat dining table." },
  { label: "Studio Location", detail: "Karen / Muthaiga / Runda / Gigiri — TBC. 400m²+ plot with garden, south or southwest facing." },
  { label: "Folding Door System", detail: "Full-height timber bi-fold on 2 garden sides. Each opening min 3.6m × 3.2m. Hardwood frames, concealed track." },
];

const MODES = [
  {
    title: "FK Filming",
    icon: Clapperboard,
    description: "Full production mode — multi-camera setup, overhead rig active, full crew on set. Mike cooks while the founder tells their story. 10 episodes per season.",
    color: "#F40009",
  },
  {
    title: "Private Dining",
    icon: Utensils,
    description: "Intimate dining experience — invite-only events at the permanent studio. Kitchen transforms from studio to hosting space. QR check-in, curated guest list via platform CRM.",
    color: "#E89832",
  },
  {
    title: "Corporate Events",
    icon: Building2,
    description: "Premium corporate event and brand activation hire between filming seasons. KES 150–300K per day. 20 hire days per year minimum = KES 3–6M annual revenue. The studio pays for itself.",
    color: "#00827F",
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
                Mike Macharia cooks for founders while they tell their stories. A purpose-built, permanently-owned brick-and-timber studio — designed for filming, cooking, and brand partner activation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { icon: Video, label: "Episodes / Season", value: "10" },
              { icon: MapPin, label: "Studio Location", value: "Permanent — TBC" },
              { icon: Camera, label: "Production Crew", value: "7 Partners" },
              { icon: Calendar, label: "Status", value: "Design & Plot Search" },
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
            <div className="bg-[#003153]/5 border border-[#003153]/15 rounded-lg p-4 mb-6">
              <p className="text-sm text-[#003153] font-label font-semibold italic text-center">
                "Not a television studio with a kitchen inside it. A kitchen that happens to have cameras in it."
              </p>
              <p className="text-[10px] text-muted-foreground text-center mt-1 font-label uppercase tracking-wider">The non-negotiable design principle · Founders Kitchen</p>
            </div>
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
                  {[
                    <><strong className="text-foreground">10 episodes per season</strong> — each episode captures one founder's story</>,
                    <>Multi-camera setup with overhead cooking rig captures both the meal and the conversation</>,
                    <>Post-production delivers full episodes + social derivatives (Opus clips, recipe cards, founder spotlight reels)</>,
                    <>Distribution via TV47 (Cape Media), social channels (Evelyn/Metricool), and LinkedIn (Maurice/PR)</>,
                    <>Brand partner activations woven naturally into each episode — cooking with brand ingredients, equipment sponsors</>,
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F40009] mt-1.5 flex-shrink-0" />
                      <span className="font-body">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader icon={Image} title="Design Renders — Luke Carter / IN 5 Architects" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            These 7 architectural renders represent the v1 concept that informed the v2 evolution. The pergola kitchen aesthetic carries forward as the outdoor extension, while the primary structure has evolved to a permanent brick-and-timber building.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {RENDERS.map((r, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-card-border bg-card group">
                <img
                  src={`${import.meta.env.BASE_URL}images/${r.src}`}
                  alt={r.alt}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-[10px] text-muted-foreground p-2 font-body leading-tight">{r.alt}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={MapPin} title="Permanent Owned Studio" />
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-6 p-4 bg-[#003153]/5 border border-[#003153]/15 rounded-lg">
              <Mountain className="w-5 h-5 text-[#003153] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-label font-medium text-foreground">Permanent Studio — Karen / Muthaiga / Runda / Gigiri — TBC</p>
                <p className="text-xs text-muted-foreground mt-1 font-body">
                  Purpose-built, permanently-owned brick-and-timber studio. 120–150m² total footprint. The studio is a strategic asset — not a production convenience. Building before pitching means walking into Netflix with a permanent, owned production facility. The show is real before a single platform deal is signed.
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
          <SectionHeader icon={Home} title="Architecture & Building Language" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            Brick-and-timber primary structure. Pergola retained as outdoor extension only. Informed by real Nairobi venue references that confirm the quality level already exists locally.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARCHITECTURE_ELEMENTS.map((el) => (
              <div key={el.num} className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-[#F40009] font-bold">{el.num}</span>
                  <h4 className="font-label text-base font-semibold text-foreground">{el.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{el.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Footprints} title="Arrival Sequence" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            The journey from gate to kitchen IS part of the show. Camera follows every founder walking in. The driveway is not a logistics detail — it is production design.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ARRIVAL_STAGES.map((stage) => (
              <div key={stage.num} className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#F40009]/10 border border-[#F40009]/25 flex items-center justify-center text-xs font-mono font-bold text-[#F40009]">{stage.num}</span>
                  <h4 className="font-label text-base font-semibold text-foreground">{stage.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-body mb-2">{stage.detail}</p>
                <div className="flex items-center gap-1 text-[10px] font-label text-[#003153]">
                  <Camera className="w-3 h-3" />
                  <span>{stage.camera}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={CookingPot} title="Kitchen Interior" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            All the kitchen detail — now inside a high-ceiling brick building with clerestory light, herringbone floors, and gold orb pendants.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {KITCHEN_INTERIOR.map((item, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-5">
                <h4 className="font-label text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Refrigerator} title="Fridge Decision — Three Options" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            Samsung Family Hub confirmed as reference. Decision deferred to set context. Three options compared.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {FRIDGE_OPTIONS.map((opt) => (
              <div key={opt.name} className="bg-card border border-card-border rounded-xl p-5">
                <h4 className="font-label text-base font-semibold text-foreground">{opt.name}</h4>
                <p className="text-xs text-muted-foreground font-body">{opt.sub}</p>
                <span className="inline-block text-[10px] font-label font-bold px-2 py-0.5 rounded-full mt-2 mb-3" style={{ backgroundColor: `${opt.statusColor}12`, color: opt.statusColor, border: `1px solid ${opt.statusColor}25` }}>
                  {opt.status}
                </span>
                <div className="space-y-1 mb-3">
                  {opt.pros.map((p, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-muted-foreground font-body">
                      <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {opt.cons.map((c, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-muted-foreground font-body">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card border border-card-border rounded-xl p-5 mt-4">
            <div className="flex items-start gap-3">
              <img src={`${import.meta.env.BASE_URL}images/placement-samsung-fridge.jpg`} alt="Samsung Family Hub fridge with touchscreen and internal camera" className="w-32 h-24 object-cover rounded-lg flex-shrink-0" />
              <div>
                <h4 className="font-label text-sm font-semibold text-foreground mb-1">The Samsung Integration Concept — If Confirmed</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">
                  The Samsung Family Hub touchscreen creates a unique brand integration layer. Each episode morning, the screen is configured to display: the episode guest's name and show title, the recipe of the day, the Naivas "Shop the Episode" QR code, and the episode's hero brand logo. Every time Mike opens the fridge on camera — which happens multiple times per episode — the screen is visible. Value: KES 2–3M/season partnership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader icon={Lamp} title="Brand Integration Map" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            Every brand. Every zone. Every camera moment. Architectural — not promotional.
          </p>
          <div className="flex items-start gap-3 mb-4">
            <img src={`${import.meta.env.BASE_URL}images/placement-spice-shelf.jpg`} alt="Pantry and spice shelf styling reference" className="w-40 h-24 object-cover rounded-lg flex-shrink-0 border border-card-border" />
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Reference: pantry/spice shelf styling. Every shelf, every surface, every zone has a brand assignment. The kitchen is a living product placement map that feels completely natural on camera.
            </p>
          </div>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#003153]/5 border-b border-border">
                    <th className="text-left p-3 font-label font-semibold text-foreground">Zone</th>
                    <th className="text-left p-3 font-label font-semibold text-foreground">Brand(s)</th>
                    <th className="text-left p-3 font-label font-semibold text-foreground hidden sm:table-cell">Method</th>
                    <th className="text-left p-3 font-label font-semibold text-foreground">Camera Moment</th>
                    <th className="text-left p-3 font-label font-semibold text-foreground">Eps</th>
                  </tr>
                </thead>
                <tbody>
                  {BRAND_ZONES.map((z, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="p-3 font-label font-medium text-foreground">{z.zone}</td>
                      <td className="p-3 font-body text-muted-foreground">{z.brands}</td>
                      <td className="p-3 font-body text-muted-foreground hidden sm:table-cell">{z.method}</td>
                      <td className="p-3"><span className="text-[10px] font-label font-bold px-1.5 py-0.5 rounded bg-[#F40009]/10 text-[#F40009] whitespace-nowrap">{z.camera}</span></td>
                      <td className="p-3 font-label font-medium text-foreground">{z.episodes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader icon={Clock} title="Production Strategy & Timeline" />
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 mb-4">
            <h3 className="font-label text-lg font-semibold text-foreground mb-2">Build First. Own Everything.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body mb-4">
              Permanent owned studio from day one. The studio is not a production convenience — it is a strategic asset and a statement of intent. Building before pitching to Netflix means walking into that room with something no other African show concept can offer: a permanent, owned, purpose-built production facility.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-[#003153]/5 border border-[#003153]/15 rounded-lg">
                <h4 className="text-sm font-label font-semibold text-foreground mb-1">Why Build Before Pitching</h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Every other African show pitches a concept. You pitch a built studio + a confirmed commercial partner (Naivas) + a 10-episode universe bible. That is a commission conversation, not a development conversation. Netflix doesn't greenlight concepts. They greenlight certainty.
                </p>
              </div>
              <div className="p-4 bg-[#003153]/5 border border-[#003153]/15 rounded-lg">
                <h4 className="text-sm font-label font-semibold text-foreground mb-1">The Asset Logic</h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  KES 18–22M studio build. KES 3–6M/year corporate hire revenue. Appliance brand partnerships offset KES 2–3M of build cost. Net payback: 4–6 years. After that, a free production facility generating revenue between seasons indefinitely.
                </p>
              </div>
            </div>
            <div className="bg-[#F40009]/5 border border-[#F40009]/20 rounded-lg p-4">
              <h4 className="text-sm font-label font-semibold text-[#F40009] mb-1">Critical Path Item</h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                Everything above depends on one decision made in the next 30 days: identify and acquire the plot. Karen, Muthaiga, Runda, or Gigiri — 400m²+ with garden, south or southwest facing, mature trees preferred. The plot is the unlock. Everything else is ready.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {TIMELINE.map((t, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-card-border rounded-lg p-4">
                <span className="text-xs font-label font-semibold text-[#F40009] whitespace-nowrap min-w-[120px]">{t.period}</span>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={DollarSign} title="Budget" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            Permanent studio + hybrid Season 1 costs. Brand partnership offsets factored.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {BUDGET_BLOCKS.map((b, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-4 text-center">
                <p className="text-xl font-display font-bold text-[#003153]">{b.amount}</p>
                <p className="text-xs font-label font-semibold text-foreground mt-1">{b.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-body">KES · {b.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-[#003153]/5 border border-[#003153]/15 rounded-lg p-4">
              <p className="text-[10px] font-label font-semibold text-[#003153] uppercase tracking-wider">Gross Build Total</p>
              <p className="text-lg font-display font-bold text-foreground">KES 21–24M</p>
            </div>
            <div className="bg-[#177245]/5 border border-[#177245]/15 rounded-lg p-4">
              <p className="text-[10px] font-label font-semibold text-[#177245] uppercase tracking-wider">Appliance Brand Offsets</p>
              <p className="text-lg font-display font-bold text-foreground">KES 1.5–2.5M</p>
              <p className="text-[10px] text-muted-foreground font-body mt-0.5">Samsung/Haier, Bosch/Miele, Range, Luminarc</p>
            </div>
            <div className="bg-[#F40009]/5 border border-[#F40009]/15 rounded-lg p-4">
              <p className="text-[10px] font-label font-semibold text-[#F40009] uppercase tracking-wider">Net Cash Build Cost</p>
              <p className="text-lg font-display font-bold text-foreground">KES 18–22M</p>
              <p className="text-[10px] text-muted-foreground font-body mt-0.5">After appliance partnerships</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader icon={Monitor} title="Modes of Operation" />
          <div className="grid sm:grid-cols-3 gap-4">
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
          <p className="text-xs text-white/50 font-label uppercase tracking-widest">Founders Kitchen · FBH Holdings · fbf_kitchen · Design & Plot Search</p>
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
