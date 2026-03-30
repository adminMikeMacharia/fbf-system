import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface SwatchData {
  name: string;
  hex: string;
  pantone?: string;
  usage?: string;
}

interface GradientData {
  name: string;
  colors: string[];
  direction: string;
  desc: string;
}

const primaryColors: SwatchData[] = [
  { name: "Coke Red", hex: "#D32F2F", pantone: "485 C", usage: "Primary brand colour — logo, CTA buttons, accents" },
  { name: "Prussian Blue", hex: "#003153", pantone: "655 C", usage: "Primary brand colour — backgrounds, nav, wordmark" },
];

const secondaryColors: SwatchData[] = [
  { name: "Crimson Red", hex: "#B71C1C", usage: "Deep accent, hover states, secondary alerts" },
  { name: "Dark Spring Green", hex: "#1B5E20", usage: "Success, growth, environmental themes" },
  { name: "Turquoise Green", hex: "#00897B", usage: "Innovation, tech, health sectors" },
  { name: "Saffron Yellow", hex: "#F9A825", usage: "Highlights, awards, premium accents" },
  { name: "Baby Yellow", hex: "#FFF9C4", usage: "Light backgrounds, warm highlights" },
  { name: "Duke Blue", hex: "#00248C", usage: "Deep navy variant, finance, trust" },
  { name: "Persian Blue", hex: "#1C39BB", usage: "Mid-range blue, interactive elements" },
  { name: "Azure Blue", hex: "#0078D4", usage: "Digital/tech, links, data visualisations" },
  { name: "Deep Sky Blue", hex: "#0288D1", usage: "Fresh accents, sky/open themes" },
  { name: "Crayola Yellow", hex: "#FFD700", usage: "Bright accent, celebratory use" },
  { name: "Pear Green", hex: "#7EC850", usage: "Natural, fresh, agri-business, sustainability" },
  { name: "Cherry Blossom", hex: "#FFB7C5", usage: "Soft accent, female founder themes, wellness" },
];

const gradients: GradientData[] = [
  {
    name: "Ocean Gradient",
    colors: ["#003153", "#0078D4", "#00897B"],
    direction: "135deg",
    desc: "Corporate communications, hero sections, premium backgrounds",
  },
  {
    name: "Aurora Gradient",
    colors: ["#1C39BB", "#7EC850", "#00897B"],
    direction: "135deg",
    desc: "Innovation themes, sustainability, growth narratives",
  },
  {
    name: "Blush Gradient",
    colors: ["#D32F2F", "#FFB7C5", "#F9A825"],
    direction: "135deg",
    desc: "Female founder series, wellness content, energy events",
  },
  {
    name: "Celestial Gradient",
    colors: ["#00248C", "#1C39BB", "#0078D4"],
    direction: "135deg",
    desc: "Night sky, investor materials, premium digital surfaces",
  },
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55;
}

function Swatch({ color }: { color: SwatchData }) {
  const [copied, setCopied] = useState(false);
  const light = isLight(color.hex);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div
        className="h-20 cursor-pointer flex items-end justify-end p-2"
        style={{ backgroundColor: color.hex }}
        onClick={handleCopy}
      >
        <button
          onClick={handleCopy}
          className="p-1 rounded opacity-70 hover:opacity-100 transition-opacity"
          style={{ backgroundColor: light ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)" }}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" style={{ color: light ? "#000" : "#fff" }} />
          ) : (
            <Copy className="w-3.5 h-3.5" style={{ color: light ? "#000" : "#fff" }} />
          )}
        </button>
      </div>
      <div className="p-3">
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, textTransform: "uppercase", color: "#003153", letterSpacing: "0.02em" }}>
          {color.name}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <code style={{ fontFamily: "monospace", fontSize: 12, color: "#D32F2F", fontWeight: 600 }}>{color.hex}</code>
          {color.pantone && (
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: "#9ca3af", border: "1px solid #e5e7eb", borderRadius: 3, padding: "0 4px" }}>
              {color.pantone}
            </span>
          )}
        </div>
        {color.usage && (
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", marginTop: 4, lineHeight: 1.4 }}>
            {color.usage}
          </div>
        )}
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: "#9ca3af", marginTop: 3 }}>
          {hexToRgb(color.hex)}
        </div>
      </div>
    </div>
  );
}

function GradientSwatch({ grad }: { grad: GradientData }) {
  const bg = `linear-gradient(${grad.direction}, ${grad.colors.join(", ")})`;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="h-24" style={{ background: bg }} />
      <div className="p-3">
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, textTransform: "uppercase", color: "#003153" }}>
          {grad.name}
        </div>
        <div className="flex gap-1 mt-1.5">
          {grad.colors.map((c) => (
            <div key={c} className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
              <code style={{ fontFamily: "monospace", fontSize: 10, color: "#6b7280" }}>{c}</code>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", marginTop: 5, lineHeight: 1.4 }}>
          {grad.desc}
        </div>
      </div>
    </div>
  );
}

export default function ColourSystemPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#D32F2F", textTransform: "uppercase" }}>
          Brand Identity Visualization
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 900, color: "#003153", textTransform: "uppercase", lineHeight: 1 }}>
          Colour System
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#4b5563", marginTop: 8, maxWidth: 600 }}>
          The FBF colour palette is structured across three tiers: Primary brand colours, Secondary supporting palette, and Accent gradients. Click any swatch to copy the hex value.
        </p>
      </div>

      {/* Primary Colours */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 rounded-full bg-[#D32F2F]" />
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153" }}>
            Primary Colours
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {primaryColors.map((c) => <Swatch key={c.name} color={c} />)}
        </div>
      </section>

      {/* Secondary Colours */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 rounded-full bg-[#003153]" />
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153" }}>
            Secondary Colours
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {secondaryColors.map((c) => <Swatch key={c.name} color={c} />)}
        </div>
      </section>

      {/* Gradients */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, #D32F2F, #003153)" }} />
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153" }}>
            Accent Gradients
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gradients.map((g) => <GradientSwatch key={g.name} grad={g} />)}
        </div>
      </section>

      {/* Colour Usage Note */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, textTransform: "uppercase", color: "#003153" }}>
          Colour Usage Principles
        </h3>
        <ul className="mt-4 space-y-2">
          {[
            "Coke Red and Prussian Blue are the two anchor colours — always use them as the primary visual language.",
            "Secondary colours support communication themes but should never overpower the primary pair.",
            "Gradients are reserved for hero sections, event materials, and premium digital surfaces.",
            "Never use more than 3 colours (excluding black/white) in a single layout.",
            "Ensure sufficient contrast for accessibility — minimum 4.5:1 ratio for body text.",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color: "#D32F2F", fontWeight: 700, lineHeight: 1.6 }}>—</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
