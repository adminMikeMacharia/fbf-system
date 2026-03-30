import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InstallPrompt } from "@/components/InstallPrompt";
import VisionBoard from "@/pages/VisionBoard";
import CommsPage from "@/pages/CommsPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import VentureCaseStudies from "@/pages/VentureCaseStudies";
import NotFound from "@/pages/not-found";
import EcosystemBar from "@/components/EcosystemBar";
import { FBFLogoLockup } from "@/components/FBFLogoLockup";
import {
  Eye,
  MessageSquare,
  Handshake,
  BookOpen,
  Landmark,
} from "lucide-react";

const queryClient = new QueryClient();

function Navbar() {
  const [location] = useLocation();
  const links = [
    { href: "/", label: "Vision Board", icon: Eye },
    { href: "/comms", label: "Comms Plan", icon: MessageSquare },
    { href: "/partnerships", label: "Partnerships", icon: Handshake },
    { href: "/case-studies", label: "Case Studies", icon: BookOpen },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center no-underline">
            <FBFLogoLockup size={44} variant="light" subtitle="Kitchen" />
          </Link>
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-label font-medium transition-colors no-underline ${
                    isActive
                      ? "bg-[#F40009] text-white"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              );
            })}
            <a
              href="/fvc/"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-label font-medium transition-colors no-underline ml-1 text-white/75 hover:text-white hover:bg-white/10"
            >
              <Landmark className="w-4 h-4" />
              <span className="hidden sm:inline">FVC</span>
            </a>
          </div>
        </div>
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
        <Route path="/comms" component={CommsPage} />
        <Route path="/partnerships" component={PartnershipsPage} />
        <Route path="/case-studies" component={VentureCaseStudies} />
        <Route component={NotFound} />
      </Switch>
      <EcosystemBar />
    </>
  );
}

function App() {
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={baseUrl}>
        <Router />
      </WouterRouter>
      <InstallPrompt />
    </QueryClientProvider>
  );
}

export default App;
