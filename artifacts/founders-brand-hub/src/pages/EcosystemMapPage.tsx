import { ExternalLink } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1UQqhwHBZollSPXJfIfz5t73mlagjT4so";

const products = [
  {
    name: "Founders Kitchen",
    tagline: "Where ideas become ventures",
    desc: "The flagship knowledge-sharing and networking platform for FBF founders. Hosts podcasts, reading clubs, founder ledger, and event transcripts.",
    href: "/founders-kitchen/",
    color: "#D32F2F",
    bgColor: "#FEF2F2",
    borderColor: "#FECACA",
    emoji: "🍳",
    category: "Community & Content",
    status: "Live",
  },
  {
    name: "Chapters & Ledgers",
    tagline: "Founder finance intelligence",
    desc: "Financial literacy, investment tracking, and capital intelligence hub for FBF founders navigating fundraising and financial management.",
    href: "/chapters-ledgers/",
    color: "#003153",
    bgColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    emoji: "📚",
    category: "Finance & Intelligence",
    status: "Live",
  },
  {
    name: "AFOS Atlas",
    tagline: "Africa's founder opportunity map",
    desc: "The comprehensive atlas of African founder opportunities — grants, accelerators, ecosystems, and capital sources across 54 countries.",
    href: "/afos-atlas/",
    color: "#00897B",
    bgColor: "#F0FDF4",
    borderColor: "#BBF7D0",
    emoji: "🗺️",
    category: "Research & Data",
    status: "Live",
  },
  {
    name: "AFOS Atlas Investor Portal",
    tagline: "Private investor intelligence",
    desc: "Gated investor intelligence layer within the AFOS Atlas — portfolio tracking, deal flow, and founder-to-investor match-making.",
    href: "/investor-portal/",
    color: "#1C39BB",
    bgColor: "#EEF2FF",
    borderColor: "#C7D2FE",
    emoji: "💼",
    category: "Investment",
    status: "Live",
  },
  {
    name: "Sponsorship Hub",
    tagline: "FBF partnership management",
    desc: "Centralised hub for managing FBF sponsorships, partnership tiers, sponsor activations, and co-branding agreements across all programmes.",
    href: "/sponsorship-hub/",
    color: "#F9A825",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
    emoji: "🤝",
    category: "Partnerships",
    status: "Live",
  },
  {
    name: "Ponea OS",
    tagline: "Health founder operating system",
    desc: "Operational platform for Ponea Health — managing concierge bookings, health partner network, and digital health founder services.",
    href: "/ponea-os/",
    color: "#0078D4",
    bgColor: "#EFF6FF",
    borderColor: "#BAE6FD",
    emoji: "🏥",
    category: "Health Tech",
    status: "Live",
  },
  {
    name: "Ponea Health",
    tagline: "Africa's health concierge platform",
    desc: "Ponea Health brand platform — showcasing health services, partner clinics, and digital health solutions across East Africa.",
    href: "/ponea-brand/",
    color: "#00897B",
    bgColor: "#F0FDF4",
    borderColor: "#A7F3D0",
    emoji: "❤️",
    category: "Health Brand",
    status: "Live",
  },
  {
    name: "Founders Gaming",
    tagline: "Gamified founder challenges",
    desc: "The gamification layer of the FBF ecosystem — founder challenges, leaderboards, and competitive learning experiences.",
    href: "#",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    borderColor: "#DDD6FE",
    emoji: "🎮",
    category: "Gaming & Engagement",
    status: "Coming Soon",
  },
  {
    name: "Founders Brand Hub",
    tagline: "Brand intelligence centre",
    desc: "This site — the central brand reference for the entire FBF ecosystem. Brand manual, colour system, typography, DNA, asset library, and ecosystem map.",
    href: "/founders-brand-hub/",
    color: "#D32F2F",
    bgColor: "#FFF0F0",
    borderColor: "#FECACA",
    emoji: "🎨",
    category: "Brand & Design",
    status: "Live",
    isCurrent: true,
  },
];

export default function EcosystemMapPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#D32F2F", textTransform: "uppercase" }}>
          FBF Digital Properties
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 900, color: "#003153", textTransform: "uppercase", lineHeight: 1 }}>
          Ecosystem Map
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#4b5563", marginTop: 8, maxWidth: 600 }}>
          A visual map of all FBF digital properties — how they connect, what they do, and where to find them. Click any card to visit that product.
        </p>
      </div>

      {/* Stats bar */}
      <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Live Products", value: "8" },
          { label: "Coming Soon", value: "1" },
          { label: "Countries Served", value: "3+" },
          { label: "Categories", value: "8" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 32, color: "#003153", lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", marginTop: 2 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
        {products.map((product, i) => {
          const card = (
            <div
              className={`block rounded-2xl border-2 p-5 transition-all hover:shadow-lg hover:-translate-y-1 ${product.isCurrent ? "ring-2 ring-[#D32F2F]/30" : ""}`}
              style={{
                backgroundColor: product.bgColor,
                borderColor: product.borderColor,
                cursor: product.href === "#" ? "default" : "pointer",
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{product.emoji}</span>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color: product.status === "Live" ? product.color : "#9ca3af",
                    background: product.status === "Live" ? product.color + "20" : "#f3f4f6",
                    padding: "2px 8px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                    {product.status}
                  </span>
                </div>
                {product.href !== "#" && (
                  <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: product.color, opacity: 0.5 }} />
                )}
              </div>

              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, textTransform: "uppercase", color: product.color, lineHeight: 1.1 }}>
                  {product.name}
                  {product.isCurrent && (
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, color: "#D32F2F", background: "#FEE2E2", padding: "1px 6px", borderRadius: 3, marginLeft: 8, textTransform: "uppercase", letterSpacing: "0.08em", verticalAlign: "middle" }}>
                      This Site
                    </span>
                  )}
                </h3>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: product.color + "aa", marginTop: 2, marginBottom: 8 }}>
                  {product.tagline}
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#374151", lineHeight: 1.6 }}>
                  {product.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t" style={{ borderColor: product.borderColor }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  color: product.color,
                  background: product.color + "15",
                  padding: "2px 8px",
                  borderRadius: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>
                  {product.category}
                </span>
              </div>
            </div>
          );

          return product.href !== "#" ? (
            <a key={i} href={product.href} className="block" style={{ textDecoration: "none" }}>
              {card}
            </a>
          ) : (
            <div key={i}>{card}</div>
          );
        })}
      </div>

      {/* Connection diagram — simplified text-based */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153", marginBottom: 16 }}>
          Ecosystem Architecture
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              label: "Community & Intelligence",
              color: "#003153",
              bg: "#EFF6FF",
              border: "#BFDBFE",
              items: ["Founders Kitchen", "Chapters & Ledgers", "AFOS Atlas", "Founders Brand Hub"],
            },
            {
              label: "Capital & Growth",
              color: "#D32F2F",
              bg: "#FEF2F2",
              border: "#FECACA",
              items: ["AFOS Atlas Investor Portal", "Sponsorship Hub", "Founders Gaming"],
            },
            {
              label: "Health",
              color: "#00897B",
              bg: "#F0FDF4",
              border: "#BBF7D0",
              items: ["Ponea OS", "Ponea Health"],
            },
          ].map((group, gi) => (
            <div key={gi} className="rounded-xl border p-4" style={{ backgroundColor: group.bg, borderColor: group.border }}>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, color: group.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                {group.label}
              </div>
              {group.items.map((item, ii) => (
                <div key={ii} className="flex items-center gap-2 py-1.5 border-b last:border-b-0" style={{ borderColor: group.border }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#9ca3af" }}>
            All FBF digital properties share the same brand system documented in this hub. For brand assets and raw files, visit the{" "}
            <a href={DRIVE_LINK} target="_blank" rel="noopener noreferrer" className="text-[#D32F2F] hover:underline">
              master brand Google Drive folder
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
