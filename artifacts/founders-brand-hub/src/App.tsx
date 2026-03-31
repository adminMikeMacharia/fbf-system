import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Palette, Type, Dna, FolderOpen, Network, Download, Menu, X, ExternalLink } from "lucide-react";
import { FBFLogoLockup } from "./components/FBFLogoLockup";
import BrandManualPage from "./pages/BrandManualPage";
import ColourSystemPage from "./pages/ColourSystemPage";
import TypographyPage from "./pages/TypographyPage";
import BrandDNAPage from "./pages/BrandDNAPage";
import AssetLibraryPage from "./pages/AssetLibraryPage";
import EcosystemMapPage from "./pages/EcosystemMapPage";

const BASE = import.meta.env.BASE_URL;
const DRIVE_LINK = "https://drive.google.com/drive/folders/1UQqhwHBZollSPXJfIfz5t73mlagjT4so";

const navItems = [
  { id: "manual", label: "Brand Manual", icon: BookOpen },
  { id: "colours", label: "Colours", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "dna", label: "Brand DNA", icon: Dna },
  { id: "assets", label: "Asset Library", icon: FolderOpen },
  { id: "ecosystem", label: "Ecosystem Map", icon: Network },
];

export default function App() {
  const [activePage, setActivePage] = useState("manual");
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "manual": return <BrandManualPage />;
      case "colours": return <ColourSystemPage />;
      case "typography": return <TypographyPage />;
      case "dna": return <BrandDNAPage />;
      case "assets": return <AssetLibraryPage />;
      case "ecosystem": return <EcosystemMapPage />;
      default: return <BrandManualPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top Header Bar */}
      <header className="bg-[#003153] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <FBFLogoLockup size={44} variant="light" subtitle="Brand Hub" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      activePage === item.id
                        ? "bg-[#D32F2F] text-white"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12 }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded text-sm text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Drive
              </a>
              <a
                href={`${BASE}fbf-brand-manual.pdf`}
                download="FBF-Brand-Manual.pdf"
                className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#D32F2F] text-white text-sm font-semibold hover:bg-[#B71C1C] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12 }}
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActivePage(item.id); setMobileOpen(false); }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm font-medium transition-colors text-left w-full ${
                        activePage === item.id
                          ? "bg-[#D32F2F] text-white"
                          : "text-[#94a3b8] hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  );
                })}
                <div className="flex gap-2 mt-2 pt-2 border-t border-white/10">
                  <a href={DRIVE_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    Open Drive
                  </a>
                  <a href={`${BASE}fbf-brand-manual.pdf`} download className="flex-1 text-center px-3 py-2 rounded bg-[#D32F2F] text-white text-xs font-semibold">
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Ecosystem Footer Bar */}
      <footer className="bg-[#003153] border-t border-white/10 text-white/60">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
              FBF Ecosystem
            </span>
            {((): Array<{ label: string; href: string; external?: boolean }> => [
              { label: "Founders Kitchen", href: "/founders-kitchen/" },
              { label: "Chapters & Ledgers", href: "/chapters-ledgers/" },
              { label: "Founders Gaming", href: "/founders-gaming/" },
              { label: "FVC", href: "/fvc/" },
              { label: "Sponsorship Hub", href: "/sponsorship-hub/" },
              { label: "MachariaOS Hub", href: "https://macharia-os-main.replit.app/hub/", external: true },
              { label: "foundersbattlefield.org", href: "https://foundersbattlefield.org", external: true },
            ])().map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[11px] hover:text-white transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.label}
                {link.external && <ExternalLink className="inline w-2.5 h-2.5 ml-0.5 -mt-0.5" />}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
