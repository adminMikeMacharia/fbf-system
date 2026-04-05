import { useState } from "react";
import {
  Building2,
  DoorOpen,
  TreePine,
  ChefHat,
  Camera,
  Lightbulb,
  Ruler,
  Calendar,
  DollarSign,
  MapPin,
  Footprints,
  Eye,
  ChevronDown,
  ChevronUp,
  Thermometer,
  Droplets,
  Zap,
  Music,
  Flower2,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL || "/";
const img = (name: string) => `${BASE}images/studio-design/${name}`;

const LUKE_DESIGNS = [
  { src: img("luke-design-01.jpg"), alt: "Luke Carter — FK studio exterior render" },
  { src: img("luke-design-02.jpg"), alt: "Luke Carter — kitchen interior layout" },
  { src: img("luke-design-03.jpg"), alt: "Luke Carter — brick facade detail" },
  { src: img("luke-design-04.jpg"), alt: "Luke Carter — folding doors garden view" },
  { src: img("luke-design-05.jpg"), alt: "Luke Carter — kitchen island perspective" },
  { src: img("luke-design-06.jpg"), alt: "Luke Carter — overhead ceiling plan" },
  { src: img("luke-design-07.jpg"), alt: "Luke Carter — arrival sequence concept" },
];

const ARCHITECTURE = [
  {
    title: "The Exterior Shell",
    icon: Building2,
    detail: "Warm red/brown face brick — locally-sourced Nairobi brick, not render, not plaster. Exposed and celebrated. Timber soffit/fascia at eave level. Brick courses run horizontally — no feature panels, no pattern. The brick IS the pattern.",
  },
  {
    title: "The Ceiling Volume",
    icon: Ruler,
    detail: "High ceiling — 4–4.5m to ridge. Exposed timber rafters with white-painted boards between. Clerestory windows running full perimeter at ceiling level. Perforated decorative metal screens at clerestory — geometric motif referencing East African weave tradition. This is where the kitchen breathes.",
  },
  {
    title: "The Folding Doors",
    icon: DoorOpen,
    detail: "Full-height timber bi-fold doors on minimum two garden-facing sides. Floor to ceiling — no transom, no header. Heavy solid timber frames. When open, the building disappears and the kitchen is part of the garden. When closed, the kitchen is intimate and enclosed.",
  },
  {
    title: "The Floor",
    icon: Footprints,
    detail: "Herringbone timber floor inside the building — warm, durable, beautiful on camera. Transitions to wide-plank timber decking on the outdoor pergola extension. The floor level is continuous — no step between inside and outside. One continuous plane of timber.",
  },
  {
    title: "The Outdoor Pergola",
    icon: TreePine,
    detail: "The pergola element from v1 is retained — but relocated as an outdoor extension beyond the folding doors. Covered by living jasmine/vine canopy. Houses the long dining table for meal reveals and the finale feast. The kitchen opens onto it, not the other way around.",
  },
  {
    title: "The Lighting",
    icon: Lightbulb,
    detail: "Gold orb/bubble pendant chandelier over the kitchen — warm, contemporary, not rustic. Wall sconces on brick exterior — lantern style. Track lighting on ceiling for production fill. Clerestory provides natural daylight from above throughout filming hours.",
  },
];

const ARRIVAL_STEPS = [
  { step: "01", title: "The Gate", detail: "Stone or brick gate pillars. Simple, no fuss. The guest's car pulls in. First impression: a private home, not a venue.", camera: "Wide establishing shot" },
  { step: "02", title: "The Driveway", detail: "Cobbled/sett paved path. 15–20m length minimum. Mature trees both sides casting dappled light. The kitchen building is NOT visible yet. Anticipation builds.", camera: "Following shot, founder walking" },
  { step: "03", title: "The Reveal", detail: "The kitchen building appears as the path curves. Brick facade, timber doors open, warm light and smells of cooking spilling out. The founder pauses. First reaction — unscripted.", camera: "Founder's face in this moment" },
  { step: "04", title: "The Threshold", detail: "Covered verandah/stoep before entering. Mike greets the founder here. The first handshake, the first conversation. Then they step inside together. The episode begins.", camera: "Two-shot, greeting moment" },
];

const INTERIOR_SPECS = [
  { label: "Cabinetry", detail: "Reclaimed/weathered timber cabinet fronts throughout. Mixed with smooth matte taupe upper cabinets. No gloss, no laminate, no painted MDF. The timber is raw, aged, textured." },
  { label: "Worktops", detail: "Honed concrete or stone — warm grey. NOT marble, NOT granite, NOT quartz composite. The worktop should look like it could survive a decade of hard cooking." },
  { label: "The Island", detail: "2.4m × 1.2m minimum. Reclaimed timber base. Concrete top. 6 bar stools — leather or kitenge-upholstered. Prep sink integrated. This is the primary filming zone — 70% of all shots are here." },
  { label: "Cooking Wall", detail: "Professional 6-burner gas range. Double oven stack above. Integrated fridge (TBC). Extractor hood — stone surround. Open shelving either side for spice/serveware display." },
  { label: "Backsplash", detail: "Stone or textured render. NOT tile. NOT subway. The same material logic as the exterior brick — texture and age over polish and precision." },
  { label: "African Layer", detail: "Kitenge/kanga textile cushions on bar stools. African ceramic bowls and serving vessels on open shelving alongside Luminarc. Copper and clay pots on pot rail above range. Spice shelf that reads unmistakably East African." },
];

const FRIDGE_OPTIONS = [
  {
    name: "Samsung Family Hub",
    type: "PREFERRED · PENDING VISUAL CONFIRM",
    color: "#1428A0",
    pros: ["21.5\" touchscreen on door", "Internal cameras — ingredient reveal", "Episode content display on screen", "\"Shop the Episode\" QR display built-in", "Samsung as strong category sponsor"],
    cons: ["Touchscreen may feel too 'tech' in rustic setting", "Black stainless to be confirmed vs timber tones"],
  },
  {
    name: "Haier",
    type: "STRONG ALTERNATIVE",
    color: "#00427F",
    pros: ["Panel-ready option — can be faced in matching timber cabinetry", "Integrated look — disappears into the kitchen", "Haier in Naivas ecosystem — brand partnership alignment", "More 'kitchen' less 'tech' — fits rustic aesthetic better"],
    cons: ["No smart screen — loses the episode-content integration", "Less brand moment on camera — less commercially valuable"],
  },
  {
    name: "Smeg / La Cornue",
    type: "WILDCARD · HIGH VISUAL IMPACT",
    color: "#CC0033",
    pros: ["Visually extraordinary — becomes a set character", "Available in warm colours — cream, sage, terracotta (all work with brick)", "Instantly iconic on camera"],
    cons: ["No smart features — pure aesthetics only", "Less commercial value — limited Nairobi presence", "Smaller capacity — production practicality concerns"],
  },
];

const TIMELINE = [
  { period: "Mar – Apr 2026", detail: "Lock Naivas presenting partnership. Commission architect. Begin plot search: Karen / Muthaiga / Runda." },
  { period: "Apr – May 2026", detail: "Plot acquired. Architect design phase begins. Confirm appliance brand partners (Samsung/Haier, Bosch/Miele)." },
  { period: "May – Jun 2026", detail: "Construction drawings approved. Build begins. Foundation + structure. Driveway cobbles laid first." },
  { period: "Jun – Oct 2026", detail: "Main build phase. Brick structure, timber roof, ceiling, folding door installation, kitchen fitout, production infrastructure." },
  { period: "Oct – Nov 2026", detail: "Studio completes + is dressed. Planting in. Appliances installed. Brand product placement set." },
  { period: "Nov 2026", detail: "Sizzle reel filmed in the studio. 3–5 minutes. The kitchen, the food, the feeling. Mike on camera." },
  { period: "Dec 2026 – Jan 2027", detail: "Netflix Africa + Showmax pitch submitted. Bible + Treatment + Sizzle + Naivas partnership confirmed." },
  { period: "Feb – Apr 2027", detail: "Platform deal negotiated and signed. Season 1 pre-production: cast all 10 episodes." },
  { period: "May – Aug 2027", detail: "Season 1 films — 10 episodes in the permanent owned studio." },
];

const BUDGET_ITEMS = [
  { label: "Brick Structure + Roof", amount: "KES 4.5M", detail: "Main kitchen building shell" },
  { label: "Kitchen Fitout", amount: "KES 4.2M", detail: "Cabinetry, worktops, island" },
  { label: "Appliances", amount: "KES 3.8M", detail: "Range, ovens, fridge, extractor" },
  { label: "Production Infra", amount: "KES 2.5M", detail: "Lighting, audio, cameras, power" },
  { label: "Folding Door System", amount: "KES 2.0M", detail: "Timber bi-fold, 2 openings" },
  { label: "Support Block", amount: "KES 1.8M", detail: "Green room, office, WC, store" },
  { label: "Driveway + Landscape", amount: "KES 1.5M", detail: "Cobbles, planting, gatehouse" },
  { label: "Contingency", amount: "KES 1.2M", detail: "~7% on build cost" },
];

const TECH_SPECS = [
  { icon: Building2, label: "Plot", detail: "Min 400m². Garden-facing south/southwest. Karen, Muthaiga, Runda, or Gigiri." },
  { icon: Ruler, label: "Footprint", detail: "120–150m² total. Main kitchen ~70–80m². Support block ~40m². Pergola ~20–30m²." },
  { icon: Zap, label: "Electrical", detail: "3-phase supply. Dedicated circuits: lighting (15kW), appliances (20kW), AV/IT (5kW). 30kVA generator mandatory." },
  { icon: Droplets, label: "Water", detail: "Commercial kitchen plumbing. Island + cooking wall + grill station sinks. Borehole or town water + 5,000L tank. Grease trap." },
  { icon: Thermometer, label: "HVAC", detail: "Natural ventilation primary — clerestory + bi-fold doors. Professional extractor canopy 1200mm min. Ceiling fans. NO air conditioning." },
  { icon: Camera, label: "Camera Infrastructure", detail: "5 fixed positions: 2× overhead, 1× cooking wall, 1× driveway gate, 1× approach. Track/dolly run 5m parallel to cooking wall." },
  { icon: Music, label: "Audio", detail: "3 overhead mic boom positions. Lavalier cable runs under floor. JBL/Sonos whole-set playback. IEM for floor manager." },
  { icon: Flower2, label: "Planting", detail: "Driveway: Jacaranda, Nandi Flame, established exotics. Garden: ferns, heliconia, bird of paradise, bamboo. Pergola: star jasmine." },
];

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-amber-400" />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
  );
}

function ImageGallery({ images, columns = 3 }: { images: { src: string; alt: string }[]; columns?: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <div className={`grid gap-3 ${columns === 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
        {images.map((img, i) => (
          <button key={i} onClick={() => setSelected(i)} className="overflow-hidden rounded-xl border border-white/10 hover:border-amber-400/50 transition-all cursor-pointer bg-transparent p-0">
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={images[selected].src} alt={images[selected].alt} className="max-w-full max-h-[90vh] object-contain rounded-xl" />
          <p className="absolute bottom-8 text-white/70 text-sm">{images[selected].alt} — Click anywhere to close</p>
        </div>
      )}
    </>
  );
}

export default function SetDesignPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const toggle = (s: string) => setExpandedSection(expandedSection === s ? null : s);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#0d0d0d] to-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">

        <header className="text-center space-y-4 py-8">
          <p className="text-amber-400/80 text-xs tracking-[0.2em] uppercase font-medium">Founders Battlefield · Production Document · Confidential</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Set Design Brief</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Permanent Studio Build + Hybrid Season 1 Strategy — v2.0 with real Nairobi references
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">v2.0 — Brick + Timber Primary</span>
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">Architect: Luke Carter</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">Est. KES 18–22M net</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6 max-w-xl mx-auto text-left">
            <p className="text-amber-300 text-sm font-semibold mb-1">Design Principle</p>
            <p className="text-white/80 text-sm italic">"Not a television studio with a kitchen inside it. A kitchen that happens to have cameras in it."</p>
          </div>
        </header>

        <section>
          <SectionHeader icon={Camera} title="Luke Carter — Architectural Designs" />
          <p className="text-white/60 text-sm mb-4">Work in progress renders from architect Luke Carter (February 2026). Click any image to enlarge.</p>
          <ImageGallery images={LUKE_DESIGNS} />
        </section>

        <section>
          <SectionHeader icon={Building2} title="The Building Language" />
          <p className="text-white/60 text-sm mb-6">Brick-and-timber primary structure. Pergola retained as outdoor extension only. The v2 brief is informed by real Nairobi venue references — face brick, high timber ceiling, perforated screens, folding doors, and garden context.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-amber-400/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionHeader icon={Footprints} title="The Arrival Sequence" />
          <p className="text-white/60 text-sm mb-6">The journey from gate to kitchen IS part of the show. Camera follows every founder walking in. The driveway is not a logistics detail — it is production design.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ARRIVAL_STEPS.map((step) => (
              <div key={step.step} className="bg-white/5 border border-white/10 rounded-xl p-5 relative">
                <span className="text-4xl font-black text-amber-400/15 absolute top-3 right-4">{step.step}</span>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-3">{step.detail}</p>
                <div className="flex items-center gap-1 text-amber-400/70">
                  <Camera className="w-3 h-3" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">{step.camera}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={ChefHat} title="Kitchen Interior" />
          <p className="text-white/60 text-sm mb-6">All the kitchen detail from v1 — now inside a high-ceiling brick building with clerestory light, herringbone floors, and gold orb pendants.</p>
          <div className="grid gap-3 md:grid-cols-2">
            {INTERIOR_SPECS.map((spec) => (
              <div key={spec.label} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-amber-400/30 transition-colors">
                <h3 className="text-amber-400 font-bold text-sm mb-1">{spec.label}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{spec.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Eye} title="Food & Brand Placement" />
          <p className="text-white/60 text-sm mb-4">Visual references for product placement and food styling on set.</p>
          <ImageGallery images={[
            { src: img("food-placement-01.jpg"), alt: "Food placement concept — ingredient styling on kitchen island" },
            { src: img("food-placement-02.jpg"), alt: "Food placement reference — brand product arrangement" },
          ]} columns={2} />
        </section>

        <section>
          <button onClick={() => toggle("fridge")} className="w-full text-left bg-transparent border-none p-0 cursor-pointer">
            <div className="flex items-center justify-between">
              <SectionHeader icon={DoorOpen} title="The Fridge — Three Options" />
              {expandedSection === "fridge" ? <ChevronUp className="w-5 h-5 text-white/40" /> : <ChevronDown className="w-5 h-5 text-white/40" />}
            </div>
          </button>
          {expandedSection === "fridge" && (
            <>
              <p className="text-white/60 text-sm mb-6">Samsung Family Hub confirmed as reference. Decision deferred to set context.</p>
              <div className="grid gap-4 md:grid-cols-3">
                {FRIDGE_OPTIONS.map((opt) => (
                  <div key={opt.name} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full" style={{ background: opt.color }} />
                      <h3 className="text-white font-bold text-sm">{opt.name}</h3>
                    </div>
                    <span className="text-[10px] font-medium text-amber-400/80 uppercase tracking-wider">{opt.type}</span>
                    <div className="mt-3 space-y-1">
                      {opt.pros.map((p, i) => <p key={i} className="text-green-400/80 text-xs">✓ {p}</p>)}
                      {opt.cons.map((c, i) => <p key={i} className="text-red-400/60 text-xs">✗ {c}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mt-4">
                <p className="text-blue-300 text-xs font-semibold mb-1">Samsung Integration Concept — If Confirmed</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Each episode morning, the touchscreen displays: the guest's name and show title, the recipe of the day, the Naivas "Shop the Episode" QR code, and the episode's hero brand logo. Every time Mike opens the fridge on camera, the screen is visible. Value: KES 2–3M/season partnership.
                </p>
              </div>
            </>
          )}
        </section>

        <section>
          <button onClick={() => toggle("tech")} className="w-full text-left bg-transparent border-none p-0 cursor-pointer">
            <div className="flex items-center justify-between">
              <SectionHeader icon={Ruler} title="Technical Specification" />
              {expandedSection === "tech" ? <ChevronUp className="w-5 h-5 text-white/40" /> : <ChevronDown className="w-5 h-5 text-white/40" />}
            </div>
          </button>
          {expandedSection === "tech" && (
            <div className="grid gap-3 md:grid-cols-2">
              {TECH_SPECS.map((spec) => {
                const Icon = spec.icon;
                return (
                  <div key={spec.label} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                    <Icon className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-xs mb-1">{spec.label}</h3>
                      <p className="text-white/60 text-xs leading-relaxed">{spec.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section>
          <SectionHeader icon={Calendar} title="Production Timeline" />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-amber-400/20" />
            <div className="space-y-4 pl-10">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-amber-400/40 border-2 border-amber-400" />
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-amber-400/30 transition-colors">
                    <h3 className="text-amber-400 font-bold text-xs mb-1">{item.period}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mt-6">
            <p className="text-amber-300 text-xs font-semibold mb-1">Critical Path Item</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Everything depends on one decision in the next 30 days: identify and acquire the plot. Karen, Muthaiga, Runda, or Gigiri — 400m²+ with garden, south/southwest facing, mature trees preferred. The plot is the unlock. Everything else is ready.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader icon={DollarSign} title="Budget" />
          <p className="text-white/60 text-sm mb-6">Permanent studio + hybrid Season 1 costs. Brand partnership offsets factored.</p>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {BUDGET_ITEMS.map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-amber-400 font-black text-lg">{item.amount}</p>
                <p className="text-white font-bold text-xs mt-1">{item.label}</p>
                <p className="text-white/50 text-[10px] mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Gross Build Total</p>
              <p className="text-white font-black text-2xl">KES 21–24M</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5 text-center">
              <p className="text-green-400/80 text-xs uppercase tracking-wider mb-1">Appliance Brand Offsets</p>
              <p className="text-green-400 font-black text-2xl">KES 1.5–2.5M</p>
              <p className="text-white/50 text-[10px] mt-1">Samsung/Haier fridge + Bosch/Miele ovens + Range + Luminarc</p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5 text-center">
              <p className="text-amber-400/80 text-xs uppercase tracking-wider mb-1">Net Cash Build Cost</p>
              <p className="text-amber-400 font-black text-2xl">KES 18–22M</p>
              <p className="text-white/50 text-[10px] mt-1">After appliance partnerships</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-4">
            <p className="text-white font-bold text-sm mb-2">Asset Payback</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Between filming seasons, the studio is a premium corporate events and brand activation space — KES 150–300K per hire day, 20 days per year minimum = KES 3–6M annually. Payback: 4–6 years. After that, a free production facility generating revenue between seasons indefinitely.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
