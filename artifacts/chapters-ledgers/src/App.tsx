import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import DemoGate from "@/components/DemoGate";
import VisionBoard from "@/pages/VisionBoard";
import ChaptersPage from "@/pages/ChaptersPage";
import LedgerPage from "@/pages/LedgerPage";
import ReadingClubPage from "@/pages/ReadingClubPage";
import ColumnsPage from "@/pages/ColumnsPage";
import TranscriptsPage from "@/pages/TranscriptsPage";
import PipelinePage from "@/pages/PipelinePage";
import ConnectionsPage from "@/pages/ConnectionsPage";
import ProjectBoardPage from "@/pages/ProjectBoardPage";
import NotFound from "@/pages/NotFound";
import EcosystemBar from "@/components/EcosystemBar";
import {
  Eye,
  Library,
  Newspaper,
  FileText,
  Workflow,
  Network,
  BookMarked,
  ClipboardList,
  Menu,
  X,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Vision Board", icon: Eye },
    { href: "/chapters", label: "Chapters", icon: BookOpen },
    { href: "/ledger", label: "The Ledger", icon: Library },
    { href: "/reading-club", label: "Reading Club", icon: BookMarked },
    { href: "/columns", label: "Columns", icon: Newspaper },
    { href: "/transcripts", label: "Transcripts", icon: FileText },
    { href: "/pipeline", label: "Pipeline", icon: Workflow },
    { href: "/connections", label: "Connections", icon: Network },
    { href: "/project-board", label: "Project Board", icon: ClipboardList },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <img
              src={`${BASE}fbf-logo.jpg`}
              alt="Founders Battlefield"
              style={{ height: 40, width: "auto", borderRadius: 6, flexShrink: 0, display: "block" }}
            />
            <div>
              <span className="font-display text-lg font-bold text-white tracking-wide uppercase">Chapters & Ledgers</span>
              <p className="text-[10px] font-label text-white/60 uppercase tracking-[0.12em] leading-none mt-0.5 hidden sm:block">A Founders Battlefield Initiative</p>
            </div>
          </Link>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-label font-medium transition-colors no-underline ${
                    isActive
                      ? "bg-[#F40009] text-white"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-2">
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-label font-medium transition-colors no-underline ${
                      isActive
                        ? "bg-[#F40009] text-white"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={VisionBoard} />
        <Route path="/chapters" component={ChaptersPage} />
        <Route path="/ledger" component={LedgerPage} />
        <Route path="/reading-club" component={ReadingClubPage} />
        <Route path="/columns" component={ColumnsPage} />
        <Route path="/transcripts" component={TranscriptsPage} />
        <Route path="/transcripts/:id" component={TranscriptsPage} />
        <Route path="/pipeline" component={PipelinePage} />
        <Route path="/connections" component={ConnectionsPage} />
        <Route path="/project-board" component={ProjectBoardPage} />
        <Route component={NotFound} />
      </Switch>
      <EcosystemBar />
    </>
  );
}

function App() {
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return (
    <DemoGate>
      <WouterRouter base={baseUrl}>
        <Router />
      </WouterRouter>
    </DemoGate>
  );
}

export default App;
