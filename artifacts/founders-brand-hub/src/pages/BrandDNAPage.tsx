const essenceTraits = [
  { trait: "Resilient", desc: "Enduring tough challenges — the backbone of every founder journey", icon: "🔩", color: "#D32F2F" },
  { trait: "Strategic", desc: "Tactical and deliberate — we move with purpose and precision", icon: "♟", color: "#003153" },
  { trait: "Visionary", desc: "Future-focused — we see what others haven't yet imagined", icon: "🔭", color: "#1C39BB" },
  { trait: "Collaborative", desc: "Partnership-driven — we win together or not at all", icon: "🤝", color: "#00897B" },
  { trait: "Audacious", desc: "Bold and unafraid — we take the risks others avoid", icon: "🔥", color: "#D32F2F" },
  { trait: "Bold", desc: "Confident and direct — our voice carries authority and conviction", icon: "⚡", color: "#F9A825" },
];

const offerings = [
  "Intense Pitch Arenas",
  "Expert Mentorship Networks",
  "Resourceful Growth Tools",
  "Global Market Exposure",
  "Compelling Story Platforms",
  "Rapid Growth Paths",
  "Strong Alliance Building",
  "Bold Empowerment Boosters",
  "Global Market Mastery",
  "Victory Through Courage",
];

const tovDials = [
  { left: "PASSIVE", right: "ACTIVE", position: 0.75 },
  { left: "SUBDUED", right: "VIBRANT", position: 0.78 },
  { left: "FUNCTIONAL", right: "ENGAGING", position: 0.68 },
  { left: "PROCESS", right: "PEOPLE", position: 0.72 },
  { left: "QUIET", right: "CONFIDENT", position: 0.80 },
  { left: "INWARD-LOOKING", right: "USER FOCUSSED", position: 0.75 },
  { left: "FORMAL", right: "CONVERSATIONAL", position: 0.65 },
  { left: "TECHNICAL", right: "PERSONAL", position: 0.60 },
];

const personalityAxes = [
  { label: "Brand Personality", traits: ["Empowering", "Strength-boosting", "Direct", "Inspirational", "Inclusive", "Optimistic"] },
  { label: "Brand Offering", traits: offerings },
  { label: "Brand Promise", traits: ["Victory Through Courage", "Rapid Growth", "Alliance Building", "Bold Empowerment", "Market Mastery"] },
];

function DialBar({ dial }: { dial: typeof tovDials[0] }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, color: "#9ca3af", minWidth: 110, textAlign: "right", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {dial.left}
      </span>
      <div className="flex-1 relative h-2 rounded-full bg-gray-100">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${dial.position * 100}%`, background: "linear-gradient(to right, #003153, #D32F2F)" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md"
          style={{ left: `calc(${dial.position * 100}% - 8px)`, backgroundColor: "#D32F2F" }}
        />
      </div>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, color: "#D32F2F", minWidth: 110, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {dial.right}
      </span>
    </div>
  );
}

export default function BrandDNAPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#D32F2F", textTransform: "uppercase" }}>
          Corporate Brand Essence
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 900, color: "#003153", textTransform: "uppercase", lineHeight: 1 }}>
          Brand DNA
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#4b5563", marginTop: 8, maxWidth: 600 }}>
          The FBF brand DNA is the invisible architecture behind everything we create. It defines how we think, speak, and show up — consistently and boldly across every touchpoint.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* Brand Essence Wheel */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153", marginBottom: 20 }}>
            Brand Essence
          </h2>

          {/* Hexagonal grid of essence traits */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {essenceTraits.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-4 border-2 text-center hover:shadow-md transition-shadow cursor-default"
                style={{ borderColor: item.color + "30", backgroundColor: item.color + "08" }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, textTransform: "uppercase", color: item.color, lineHeight: 1 }}>
                  {item.trait}
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: "#6b7280", marginTop: 4, lineHeight: 1.4 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOV Dial */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153", marginBottom: 8 }}>
            Tone of Voice Dial
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#6b7280", marginBottom: 20, lineHeight: 1.5 }}>
            This dial articulates our verbal tone calibration. Applied consistently, it becomes intrinsically linked with our organisation. The needle position represents where FBF sits on each scale.
          </p>

          <div className="space-y-1">
            {tovDials.map((dial, i) => (
              <DialBar key={i} dial={dial} />
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", lineHeight: 1.6 }}>
              The FBF voice leans strongly toward the right — Active, Vibrant, Engaging, People-centred, Confident, and User Focussed. We are conversational but not casual; personal but not informal.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Personality Framework */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-10">
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153", marginBottom: 20 }}>
          Brand Personality Framework
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {personalityAxes.map((axis, i) => (
            <div key={i} className="rounded-xl border border-gray-100 p-4">
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, color: "#D32F2F", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                {axis.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {axis.traits.map((t, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: i === 0 ? "#003153" : i === 1 ? "#D32F2F" : "#00897B",
                      background: i === 0 ? "#EFF6FF" : i === 1 ? "#FEF2F2" : "#F0FDF4",
                      border: `1px solid ${i === 0 ? "#BFDBFE" : i === 1 ? "#FECACA" : "#BBF7D0"}`,
                      borderRadius: 4,
                      padding: "2px 8px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision-Image-Culture framework */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            label: "Vision",
            icon: "🔭",
            color: "#003153",
            bg: "#EFF6FF",
            desc: "We see a future where African founders are not disadvantaged by geography, capital, or access. FBF exists to close that gap — one founder at a time.",
          },
          {
            label: "Image",
            icon: "🎯",
            color: "#D32F2F",
            bg: "#FEF2F2",
            desc: "Bold, modern, and authoritative. Our visual identity communicates trust and ambition in equal measure — designed to command respect in any boardroom or arena.",
          },
          {
            label: "Culture",
            icon: "🌍",
            color: "#00897B",
            bg: "#F0FDF4",
            desc: "We celebrate collaboration over competition. Our community is the product — every engagement, event, and interaction reflects the FBF values of resilience and boldness.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow" style={{ backgroundColor: item.bg }}>
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, textTransform: "uppercase", color: item.color, lineHeight: 1 }}>
              {item.label}
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#374151", marginTop: 8, lineHeight: 1.7 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
