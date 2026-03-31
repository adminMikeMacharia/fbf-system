import { Download, ExternalLink, FileText } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const DRIVE_LINK = "https://drive.google.com/drive/folders/1UQqhwHBZollSPXJfIfz5t73mlagjT4so";

const tocSections = [
  { page: "4", title: "Corporate Brand Essence: Our Brand DNA", desc: "Resilient, Strategic, Visionary, Collaborative, Audacious, Bold" },
  { page: "5", title: "Brand Tone of Voice Dial", desc: "Passive → Active, Subdued → Vibrant, Functional → Engaging, Process → People" },
  { page: "6–7", title: "Vision, Image & Culture", desc: "Brand personality, engagement culture, and the vision-to-image framework" },
  { page: "8", title: "Logo Origination, Rationalization & Construction", desc: "Geometric proportions, the 'F' monogram, and Petrov Sans wordmark construction" },
  { page: "9–10", title: "Logo Rendering & Versioning", desc: "Primary 2-colour, reversed red, reversed navy — plus regional and series sub-logos" },
  { page: "11", title: "Brand Colours — Primary & Secondary", desc: "Coke Red, Prussian Blue; plus 12 secondary colours across two rows" },
  { page: "12", title: "Logo Non-Infringement", desc: "Clear space rules, exclusion zones, and safe zone guidelines" },
  { page: "13", title: "Co-Branding", desc: "Negotiation rules for equal logo height/width; Diamond, Platinum, Content, Payments tiers" },
  { page: "14–21", title: "Brand Rollout — Merchandise", desc: "T-shirts, caps, notebooks, tote bags, lanyards, and branded apparel applications" },
  { page: "22", title: "Brand Rollout — Exterior: Flags", desc: "Feather flag and swooper flag specifications and brand application rules" },
  { page: "23", title: "Brand Rollout — Exterior: Billboards (OOH)", desc: "Out-of-home large-format billboard layouts and minimum branding specs" },
  { page: "24", title: "Brand Rollout — Stationery: Business Cards & Complimentary", desc: "Business card dimensions, print specs, and complementary stationery system" },
  { page: "25–30", title: "Brand Rollout — Workflow Documents", desc: "Letterheads, invoices, proposals, and internal document templates" },
  { page: "31", title: "Digital Assets — Email Signatures", desc: "HTML email signature layout, font sizes, and brand alignment rules" },
  { page: "32", title: "Digital Assets — Website Landing", desc: "Hero layout grid, nav structure, and brand application on web surfaces" },
  { page: "33", title: "Digital Assets — Gateway Landing", desc: "Onboarding screens, app gateways, and login page brand compliance" },
  { page: "34–40", title: "Typefoundry, Fonts, Ligatures & Characters", desc: "Petrov Sans (Barlow Condensed), Poppins, Bebas Neue, Helvetica/Inter, Century Gothic, Gill Sans, Tahoma" },
  { page: "41", title: "Imagery & Blending Modes", desc: "Photography selection criteria, blending mode overlays, and colour grading rules" },
  { page: "42", title: "Contact Information", desc: "John Macharia — Brand & Design Lead. info@foundersbattlefield.org" },
];

export default function BrandManualPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Hero */}
      <div className="mb-10 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0">
          <img src={`${BASE}images/hero-brand-studio.png`} alt="African brand design studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003153]/90 via-[#003153]/75 to-[#00248C]/60" />
        </div>
        <div className="relative px-8 py-12 md:flex md:items-center md:justify-between gap-8">
          <div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#D32F2F", textTransform: "uppercase" }}>
              Version 1.0 — March 2026
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, color: "white", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1, marginTop: 8 }}>
              FBF Brand Manual
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 12, maxWidth: 480 }}>
              Visual Identity & Brand Guidelines for the Founders Battlefield ecosystem. 42 pages covering brand DNA, colour system, typography, logo usage, and full rollout specifications.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={`${BASE}fbf-brand-manual.pdf`}
                download="FBF-Brand-Manual.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#D32F2F] text-white font-semibold hover:bg-[#B71C1C] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13 }}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13 }}
              >
                <ExternalLink className="w-4 h-4" />
                Open Brand Drive
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-32 h-40 rounded-xl bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
              <FileText className="w-10 h-10 text-white/60" />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>FBF Brand Manual<br/>42 Pages</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* PDF Viewer */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: "#003153" }}>
                Brand Manual Viewer
              </h2>
              <a
                href={`${BASE}fbf-brand-manual.pdf`}
                download="FBF-Brand-Manual.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#003153] text-white text-xs font-semibold hover:bg-[#00248C] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            </div>
            <div className="relative" style={{ paddingBottom: "130%" }}>
              <iframe
                src={`${BASE}fbf-brand-manual.pdf`}
                className="absolute inset-0 w-full h-full"
                title="FBF Brand Manual"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", color: "#003153" }}>
                Table of Contents
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", marginTop: 2 }}>42 pages · Version 1.0</p>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: 600 }}>
              {tocSections.map((section, i) => (
                <div key={i} className="px-5 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <div className="flex gap-3">
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#D32F2F",
                      minWidth: 36,
                      paddingTop: 2,
                    }}>
                      p.{section.page}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: "#003153", textTransform: "uppercase", letterSpacing: "0.01em" }}>
                        {section.title}
                      </div>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", marginTop: 1 }}>
                        {section.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
