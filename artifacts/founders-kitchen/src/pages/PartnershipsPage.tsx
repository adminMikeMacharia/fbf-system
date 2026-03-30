import {
  Handshake,
  Users,
  Crown,
  Gem,
  Star,
  CreditCard,
  Building2,
  Tv,
  Camera,
  Scissors,
  ChefHat,
  Laptop,
  Utensils,
  Package,
  ArrowRight,
  Shield,
  QrCode,
  Database,
} from "lucide-react";
import BrandPipeline from "./BrandPipeline";

const CURRENT_PARTNERS = [
  {
    name: "Cape Media / Daisy Rono",
    role: "Broadcast Partner",
    type: "External",
    color: "#00827F",
    initials: "CM",
    scope: "TV47 broadcast distribution for FK episodes. Weekly broadcast slot. Radio47 pre-episode preview segments. Cape Media digital channels for amplification. Production quality standards and scheduling.",
    deliverables: [
      "TV47 weekly broadcast slot for FK episodes",
      "Radio47 pre-show preview segments",
      "Digital amplification via Cape Media social channels",
      "Broadcast-quality production brief and standards",
    ],
  },
  {
    name: "Douglas (Glasshouse)",
    role: "Video Post-Production",
    type: "Vendor",
    color: "#8A5ABF",
    initials: "DG",
    scope: "Complete post-production pipeline — colour grading, sound mix, motion graphics, final episode assembly. Receives raw ISO files from Austin/GoodCompany. Delivers to John for creative review.",
    deliverables: [
      "Full episode post-production per filming day",
      "Colour grading consistent with FK visual identity",
      "Sound mix — dialogue clarity, ambient kitchen sounds, music bed",
      "Motion graphics and lower-thirds matching brand kit",
    ],
  },
  {
    name: "Austin (GoodCompany)",
    role: "Production / Capture",
    type: "Vendor",
    color: "#1C39BB",
    initials: "AG",
    scope: "On-set production — multi-camera filming, overhead rig operation, sound recording, lighting. Delivers raw ISO files + audio to Douglas. Full crew on each filming day.",
    deliverables: [
      "Multi-camera setup (wide, tight on speaker, overhead rig)",
      "ISO recording on all cameras + backup audio",
      "Lighting design — warm, human, not TV debate",
      "Raw footage delivery to Douglas within 48hrs of filming",
    ],
  },
  {
    name: "John Gikanga",
    role: "Creative Director",
    type: "External",
    color: "#007FFF",
    initials: "JG",
    scope: "Visual identity and creative direction across all FK content. Owns Canva workspace (all brand kits and templates), Opus Clip (social derivatives), and Metricool (content scheduling). Produces all creative assets — does not post.",
    deliverables: [
      "FK brand kit and visual identity in Canva",
      "Episode teasers, social derivatives, recipe cards",
      "Opus clips — 5-8 cuts per episode",
      "Full content calendar loaded into Metricool",
    ],
  },
];

const SPONSOR_TIERS = [
  {
    tier: "Diamond Series Sponsor",
    icon: Gem,
    color: "#00827F",
    price: "Flagship partnership",
    description: "Title sponsor for a full FK season. Brand integrated across all episodes — ingredient placement, equipment use, co-branded recipe cards. Name in broadcast credits. Full social campaign co-branding.",
    benefits: [
      "Season title integration (e.g., 'Founders Kitchen powered by [Brand]')",
      "Product placement in every episode — natural, not forced",
      "Co-branded recipe cards and social content",
      "TV47 broadcast credits and lower-thirds",
      "Exclusive sponsor activation event at Tigoni House",
      "Full post-season sponsor report — reach, impressions, media pickup",
    ],
  },
  {
    tier: "Content Owner",
    icon: Crown,
    color: "#F4C430",
    price: "Per-episode or segment",
    description: "Owns specific content segments — the recipe card series, the behind-the-scenes reel, or the founder spotlight clips. Brand lockup on all assets in that content category.",
    benefits: [
      "Brand lockup on all assets in owned content category",
      "Custom co-branded templates designed by John",
      "Distribution via all FK channels (TV47, social, PR)",
      "Segment-specific analytics and engagement metrics",
      "Right of first refusal on next season",
    ],
  },
  {
    tier: "Platinum Sponsor",
    icon: Star,
    color: "#8A5ABF",
    price: "Per-episode activation",
    description: "Single-episode brand activation. Cooking with brand ingredients, kitchen equipment feature, or lifestyle brand tie-in. Passive branding — never interrupts the story.",
    benefits: [
      "Product integration in one episode — cooking with brand ingredients",
      "MC acknowledgement in episode opening",
      "Social media tags on episode-specific content",
      "Episode clip with brand mention for partner's own channels",
      "Post-episode engagement metrics report",
    ],
  },
  {
    tier: "Payments Partner",
    icon: CreditCard,
    color: "#177245",
    price: "Infrastructure partnership",
    description: "Payment and ticketing infrastructure partner for FK private dining events. Brand presence at all invite-only events. Platform-level integration via hustlesasa or equivalent.",
    benefits: [
      "Payment processing for all FK private dining events",
      "Brand presence on tickets, check-in screens, receipts",
      "Co-branded event invitation emails",
      "Access to CRM data for co-marketing (with consent)",
      "Mention in all event-related communications",
    ],
  },
];

const ACTIVATION_OPPORTUNITIES = [
  {
    title: "Cooking with Brand Ingredients",
    icon: ChefHat,
    description: "The most organic form of product placement. Mike uses the sponsor's ingredients during the episode. The product is part of the story, not an interruption. Viewers see the brand being used naturally.",
    examples: ["Olive oil brands", "Spice companies", "Premium ingredients", "Kenyan-sourced products"],
    color: "#F40009",
  },
  {
    title: "Kitchen Equipment Sponsors",
    icon: Utensils,
    description: "The Tigoni House kitchen is the set. Equipment sponsors get their products in frame for every episode — cookware, appliances, tools. Permanent placement for the season.",
    examples: ["Cookware brands", "Kitchen appliances", "Professional tools", "Counter-top equipment"],
    color: "#E89832",
  },
  {
    title: "Lifestyle Brand Tie-ins",
    icon: Package,
    description: "FK is about founders and their lifestyles. Lifestyle brands (beverages, wellness, fashion) can activate through the private dining events, gift bags, or episode integration.",
    examples: ["Premium beverages", "Wellness brands", "Fashion / apparel", "Gift and experience brands"],
    color: "#177245",
  },
  {
    title: "Tech & Platform Partners",
    icon: Laptop,
    description: "FK runs on the FBF Platform — event_category = founders_kitchen. Tech partners can co-brand the QR check-in, matchmaking layer, or CRM communications for private dining events.",
    examples: ["QR/check-in technology", "CRM platforms", "Communication tools", "Analytics partners"],
    color: "#007FFF",
  },
];

const PLATFORM_INFRA = [
  {
    feature: "Event Category",
    detail: "event_category = founders_kitchen — all FK events are scoped under this category in the FBF platform. Same infrastructure as The Arena (event_category = arena).",
    icon: Database,
  },
  {
    feature: "QR Check-in",
    detail: "Invite-only events use QR check-in via the platform. Guests receive a unique QR code in their invitation email. Check-in data feeds the CRM layer.",
    icon: QrCode,
  },
  {
    feature: "CRM Layer",
    detail: "Guest management for private dining events. Contact history, dietary preferences, past attendance. Enables personalised invitations and follow-up.",
    icon: Users,
  },
  {
    feature: "RBAC Scoping",
    detail: "Event managers get scoped access — kitchen admin, check-in, table management. No access to other ventures' data. Expires after event.",
    icon: Shield,
  },
];

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-[#003153] via-[#003153]/90 to-[#003153]/80 border-b-2 border-[#F40009]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-label font-semibold tracking-[0.3em] text-[#F40009] uppercase mb-1">FK Strategy & Growth</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-wide text-white uppercase">Partnership Plan</h1>
          <p className="text-white/70 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed font-body">
            All current and potential FK partnerships — production partners, sponsor tiers adapted from The Arena model, brand activation opportunities, and the platform infrastructure connecting FK to the multi-venture event system.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section>
          <SectionHeader icon={Users} title="Current Partners" />
          <div className="space-y-3">
            {CURRENT_PARTNERS.map((p) => (
              <div key={p.name} className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-label flex-shrink-0"
                    style={{ backgroundColor: `${p.color}15`, border: `1.5px solid ${p.color}40`, color: p.color }}
                  >
                    {p.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1">
                      <h4 className="font-label text-lg font-semibold text-foreground">{p.name}</h4>
                      <span className="text-xs font-label font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}>
                        {p.role}
                      </span>
                      <span className="text-xs text-muted-foreground font-body">{p.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">{p.scope}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {p.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                          <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: p.color }} />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Crown} title="Sponsor Tier Model" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            Adapted from The Arena's proven sponsor framework — Diamond, Content Owner, Platinum, and Payments Partner tiers. FK activations are culinary-native: product placement through ingredients, equipment, and lifestyle integrations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {SPONSOR_TIERS.map((tier) => (
              <div key={tier.tier} className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${tier.color}12`, border: `1px solid ${tier.color}25` }}>
                    <tier.icon className="w-5 h-5" style={{ color: tier.color }} />
                  </div>
                  <div>
                    <h4 className="font-label text-base font-semibold text-foreground">{tier.tier}</h4>
                    <p className="text-[10px] font-label font-medium" style={{ color: tier.color }}>{tier.price}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">{tier.description}</p>
                <ul className="space-y-1.5">
                  {tier.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: tier.color }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Handshake} title="Brand Partner Activation Opportunities" />
          <div className="grid sm:grid-cols-2 gap-4">
            {ACTIVATION_OPPORTUNITIES.map((opp) => (
              <div key={opp.title} className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${opp.color}12`, border: `1px solid ${opp.color}25` }}>
                    <opp.icon className="w-4 h-4" style={{ color: opp.color }} />
                  </div>
                  <h4 className="font-label text-base font-semibold text-foreground">{opp.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">{opp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {opp.examples.map((ex, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border font-label">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={Building2} title="Platform Infrastructure" />
          <p className="text-sm text-muted-foreground mb-4 font-body">
            FK uses the same platform infrastructure as The Arena — the multi-venture architecture means shared event management, CRM, and check-in systems with venture-scoped data isolation.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {PLATFORM_INFRA.map((item) => (
              <div key={item.feature} className="bg-card border border-card-border rounded-xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#003153]/10 border border-[#003153]/20 flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[#003153]" />
                </div>
                <div>
                  <h4 className="text-sm font-label font-semibold text-foreground">{item.feature}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-body">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-[#003153]/5 border border-[#003153]/15 rounded-xl p-6">
            <h3 className="font-label text-lg font-semibold text-foreground mb-2">Multi-Venture Architecture</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">
              Founders Kitchen operates within the FBH Holdings multi-venture platform. This means FK benefits from shared infrastructure while maintaining its own identity, branding, and partner relationships.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "event_category", value: "founders_kitchen", desc: "Scoped event category for all FK events" },
                { label: "Platform", value: "foundersbattlefield.org", desc: "Shared FBF platform infrastructure" },
                { label: "RBAC", value: "Venture-scoped", desc: "Access controls isolated per venture" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-card border border-card-border rounded-lg">
                  <p className="text-[10px] text-[#F40009] font-label font-semibold tracking-wider uppercase">{item.label}</p>
                  <p className="text-sm font-label font-semibold text-foreground mt-0.5">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <BrandPipeline />
        </section>
      </main>

      <footer className="bg-[#003153] border-t-2 border-[#F40009] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/50 font-label uppercase tracking-widest">Founders Kitchen Partnership Plan · FBH Holdings · Multi-Venture Platform</p>
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
