const typefaces = [
  {
    name: "Petrov Sans / Barlow Condensed",
    role: "Primary Display / Headlines",
    weight: "400 · 600 · 700 · 800 · 900",
    family: "'Barlow Condensed', sans-serif",
    sampleText: "FOUNDERS BATTLEFIELD",
    sampleSize: 48,
    uppercase: true,
    usage: "All primary headlines, section titles, logo wordmark, event signage, billboards. Always rendered ALL CAPS. The FBF signature typeface.",
    rules: ["Always use ALL CAPS", "Use weight 700–900 for display", "Minimum size 16px", "Do not mix with serif fonts"],
    color: "#003153",
  },
  {
    name: "Poppins",
    role: "Labels & UI Elements",
    weight: "300 · 400 · 500 · 600 · 700",
    family: "'Poppins', sans-serif",
    sampleText: "Building Africa's Next Generation of Founders",
    sampleSize: 22,
    uppercase: false,
    usage: "Navigation labels, button text, captions, metadata, UI elements, digital interfaces, email signatures, and marketing copy.",
    rules: ["Use weights 400–600 for UI", "Weight 700 for emphasis only", "Never use condensed style", "Maintain 1.5x line height"],
    color: "#003153",
  },
  {
    name: "Bebas Neue",
    role: "Hero / Campaign Headlines",
    weight: "400 (Regular)",
    family: "'Bebas Neue', sans-serif",
    sampleText: "BOLD VISION. BOLD MOVES.",
    sampleSize: 42,
    uppercase: true,
    usage: "Campaign hero text, large-format posters, social media impact headers, video overlays, exhibition banners. Reserved for high-impact moments only.",
    rules: ["Use sparingly — maximum 2 instances per layout", "Always in ALL CAPS", "Pair with Poppins for body", "Minimum 32px in all uses"],
    color: "#D32F2F",
  },
  {
    name: "Inter / Helvetica",
    role: "Body Copy",
    weight: "300 · 400 · 500 · 600",
    family: "'Inter', sans-serif",
    sampleText: "The Founders Battlefield ecosystem connects ambitious entrepreneurs with the mentorship, capital, and community they need to scale across African markets.",
    sampleSize: 15,
    uppercase: false,
    usage: "All body text, long-form content, reports, proposals, workflow documents, website paragraphs, and email body text.",
    rules: ["Use weight 400 for body text", "Weight 600 for subheadings", "Minimum 14px for print, 16px for digital", "Line height 1.6–1.8x for readability"],
    color: "#111827",
  },
  {
    name: "Century Gothic",
    role: "Accent / Callouts",
    weight: "400 · 700",
    family: "Century Gothic, 'Century Gothic', Arial, sans-serif",
    sampleText: "Strategic. Resilient. Audacious.",
    sampleSize: 20,
    uppercase: false,
    usage: "Pull quotes, callout boxes, sidebar text, infographic labels, and printed stationery accents. Provides a refined, rounded contrast to Barlow.",
    rules: ["Use for decorative callouts only", "Never for long body text", "Pair with Barlow Condensed headers", "Weight 400 preferred"],
    color: "#003153",
  },
  {
    name: "Gill Sans",
    role: "Secondary Body / Print",
    weight: "400 · 600 · 700",
    family: "Gill Sans, 'Gill Sans MT', Calibri, sans-serif",
    sampleText: "Where ideas meet opportunity.",
    sampleSize: 18,
    uppercase: false,
    usage: "Formal printed documents, letterheads, business proposals, and offline collateral where digital fonts are unavailable.",
    rules: ["Print media only — fallback for Inter", "Use Gill Sans MT as the variant", "Weight 400 for body, 600 for headings", "Avoid on-screen digital use"],
    color: "#374151",
  },
  {
    name: "Tahoma",
    role: "System Fallback",
    weight: "400 · 700",
    family: "Tahoma, Geneva, Verdana, sans-serif",
    sampleText: "Empowering Africa's boldest entrepreneurs.",
    sampleSize: 15,
    uppercase: false,
    usage: "Email clients, Microsoft Office documents, and legacy systems where brand fonts may not load. Always the last-resort fallback in font stacks.",
    rules: ["Fallback only — never preferred", "Used in CSS font stacks after Inter", "Avoid in brand communications", "Acceptable in internal emails only"],
    color: "#6b7280",
  },
];

export default function TypographyPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#D32F2F", textTransform: "uppercase" }}>
          Typefoundry & Brand Fonts
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 900, color: "#003153", textTransform: "uppercase", lineHeight: 1 }}>
          Typography System
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#4b5563", marginTop: 8, maxWidth: 600 }}>
          The FBF type system uses a hierarchy of seven typefaces — each with a defined role, weight range, and usage context. Petrov Sans (Barlow Condensed) is the signature brand typeface.
        </p>
      </div>

      {/* Font Specimens */}
      <div className="space-y-6">
        {typefaces.map((font, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-5">
              {/* Left: meta */}
              <div className="md:col-span-2 p-6 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/50">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, textTransform: "uppercase", color: "#003153", lineHeight: 1 }}>
                      {font.name}
                    </h3>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: "#D32F2F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {font.role}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "white",
                    background: i === 0 ? "#D32F2F" : i === 2 ? "#D32F2F" : "#003153",
                    padding: "2px 8px",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                  }}>
                    {i === 0 ? "PRIMARY" : i === 2 ? "HERO" : i === 3 ? "BODY" : "ACCENT"}
                  </span>
                </div>

                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", marginBottom: 8 }}>
                  <strong style={{ color: "#374151" }}>Weights:</strong> {font.weight}
                </div>

                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#374151", lineHeight: 1.6, marginBottom: 12 }}>
                  {font.usage}
                </p>

                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                    Usage Rules
                  </div>
                  <ul className="space-y-1">
                    {font.rules.map((rule, j) => (
                      <li key={j} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", display: "flex", gap: 6 }}>
                        <span style={{ color: "#D32F2F", fontWeight: 700 }}>·</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: specimen */}
              <div className="md:col-span-3 p-6 flex flex-col justify-between" style={{ minHeight: 160 }}>
                <div
                  style={{
                    fontFamily: font.family,
                    fontSize: font.sampleSize,
                    fontWeight: i === 0 ? 900 : i === 2 ? 400 : 400,
                    textTransform: font.uppercase ? "uppercase" : "none",
                    color: font.color,
                    lineHeight: 1.1,
                    wordBreak: "break-word",
                  }}
                >
                  {font.sampleText}
                </div>

                {/* Weight Samples */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Light", "Regular", "Medium", "Semibold", "Bold"].map((w, wi) => (
                    <span
                      key={w}
                      style={{
                        fontFamily: font.family,
                        fontWeight: [300, 400, 500, 600, 700][wi],
                        fontSize: 13,
                        color: "#374151",
                        padding: "2px 8px",
                        border: "1px solid #e5e7eb",
                        borderRadius: 4,
                        textTransform: font.uppercase ? "uppercase" : "none",
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
