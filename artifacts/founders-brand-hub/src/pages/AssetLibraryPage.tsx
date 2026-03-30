import { ExternalLink, Folder } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1UQqhwHBZollSPXJfIfz5t73mlagjT4so";

const categories = [
  {
    section: "Merchandise",
    icon: "👕",
    items: [
      { name: "T-Shirts", desc: "Branded crew neck and polo shirts with logo placement specs" },
      { name: "Hoodies & Jackets", desc: "Embroidered FBF logo, chapter editions, and co-branded variants" },
      { name: "Caps & Headwear", desc: "Structured and unstructured caps with embroidered monograms" },
      { name: "Tote Bags", desc: "Branded canvas tote bags with screen-printed logos" },
      { name: "Lanyards & Badges", desc: "Event credentials, member IDs, and speaker passes" },
      { name: "Notebooks & Stationery", desc: "Branded journals with foil covers and inside branding" },
    ],
  },
  {
    section: "Exterior Branding",
    icon: "🏗️",
    items: [
      { name: "Feather Flags", desc: "Swooper and feather flags for outdoor events and venues" },
      { name: "Roll-Up Banners", desc: "Exhibition and event banners — portrait orientation" },
      { name: "Billboards (OOH)", desc: "Large-format outdoor advertising specifications (48-sheet, 96-sheet)" },
      { name: "Event Backdrop / Step & Repeat", desc: "Photo backdrop panels with logo grid repeat pattern" },
      { name: "Vehicle Wraps", desc: "Vehicle livery for transport and event logistics fleets" },
      { name: "Wayfinding & Signage", desc: "Event directional signage and venue branding systems" },
    ],
  },
  {
    section: "Stationery & Print",
    icon: "📄",
    items: [
      { name: "Business Cards", desc: "Standard and premium variants with UV gloss/matte finishes" },
      { name: "Complimentary Cards", desc: "Thank-you notes and branded compliments slips" },
      { name: "Letterheads", desc: "A4 branded letterhead for formal correspondence" },
      { name: "Envelopes & Mailers", desc: "DL and C4 branded envelopes with return address" },
      { name: "Folders & Sleeves", desc: "Document presentation folders with pocket inserts" },
      { name: "Certificates & Awards", desc: "Programme completion and sponsor recognition certificates" },
    ],
  },
  {
    section: "Workflow Documents",
    icon: "📋",
    items: [
      { name: "Proposals & Decks", desc: "Pitch deck template, sponsorship proposal, partner brief" },
      { name: "Invoices & Receipts", desc: "Branded invoice template with payment details" },
      { name: "Reports & Briefs", desc: "Impact reports, programme briefs, and recap documents" },
      { name: "Contracts & Agreements", desc: "Branded agreement templates with header and footer" },
      { name: "Event Programmes", desc: "Event run-of-show and audience programmes" },
      { name: "Scorecards & Rubrics", desc: "Judging panels, evaluation rubrics, and scoring sheets" },
    ],
  },
  {
    section: "Digital Assets",
    icon: "📱",
    items: [
      { name: "Email Signatures", desc: "HTML email signature template with name, title, logo, and social links" },
      { name: "Social Media Templates", desc: "Instagram, LinkedIn, Twitter/X post and story templates" },
      { name: "E-Flyers & Announcements", desc: "Event announcement graphics in all social media formats" },
      { name: "Website Landing Screens", desc: "Hero section, gateway landing, and onboarding screen designs" },
      { name: "Presentation Templates", desc: "PowerPoint/Google Slides master with brand system applied" },
      { name: "Digital Banners & Ads", desc: "Web banner sizes: 300×250, 728×90, 160×600, 320×50" },
      { name: "Zoom / Virtual Backgrounds", desc: "Branded virtual meeting backgrounds for all video calls" },
      { name: "WhatsApp & Telegram Stickers", desc: "Community messaging stickers and branded reaction packs" },
    ],
  },
  {
    section: "Publications & Media",
    icon: "📰",
    items: [
      { name: "Brand Manual PDF", desc: "This document — the definitive FBF brand reference guide" },
      { name: "Photo Library", desc: "Approved brand photography, event shots, and team portraits" },
      { name: "Icon & Logo Files", desc: "SVG, PNG, EPS logo files — all colourways and variants" },
      { name: "Video Intros / Outros", desc: "Motion graphics brand bumpers for video productions" },
      { name: "Podcast Cover Art", desc: "Show artwork for FBF Audio/Video Podcast Series" },
      { name: "Press Kit", desc: "Media kit with approved bios, logos, and brand usage notes" },
    ],
  },
];

export default function AssetLibraryPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#D32F2F", textTransform: "uppercase" }}>
          Brand Execution
        </div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 900, color: "#003153", textTransform: "uppercase", lineHeight: 1 }}>
          Asset Library
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#4b5563", marginTop: 8, maxWidth: 600 }}>
          All FBF brand execution assets organised by category. Each card links to the master Google Drive folder where the actual files live. This is a reference guide — no files are hosted here directly.
        </p>
      </div>

      {/* Drive CTA Banner */}
      <div className="mb-8 rounded-xl border border-[#003153]/20 bg-[#003153]/5 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-center gap-3">
          <Folder className="w-6 h-6 text-[#003153]" />
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16, textTransform: "uppercase", color: "#003153" }}>
              Master Brand Asset Folder
            </div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#6b7280" }}>
              All files hosted on Google Drive — click any card or the link below to access
            </div>
          </div>
        </div>
        <a
          href={DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#003153] text-white font-semibold hover:bg-[#00248C] transition-colors whitespace-nowrap"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13 }}
        >
          <ExternalLink className="w-4 h-4" />
          Open Google Drive
        </a>
      </div>

      {/* Asset Categories */}
      <div className="space-y-10">
        {categories.map((cat, ci) => (
          <section key={ci}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, textTransform: "uppercase", color: "#003153" }}>
                {cat.section}
              </h2>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>
                ({cat.items.length} items)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {cat.items.map((item, ii) => (
                <a
                  key={ii}
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-200 bg-white p-4 hover:border-[#D32F2F]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, textTransform: "uppercase", color: "#003153", lineHeight: 1.2 }}>
                      {item.name}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#D32F2F] transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>
                    {item.desc}
                  </div>
                  <div className="mt-3 flex items-center gap-1">
                    <Folder className="w-3 h-3 text-gray-300 group-hover:text-[#D32F2F] transition-colors" />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: "#9ca3af", fontWeight: 500 }}>
                      Google Drive
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#9ca3af" }}>
          This is a read-only reference site. To upload, edit, or request new brand assets, contact the brand team at{" "}
          <a href="mailto:info@foundersbattlefield.org" className="text-[#D32F2F] hover:underline">
            info@foundersbattlefield.org
          </a>
        </p>
      </div>
    </div>
  );
}
