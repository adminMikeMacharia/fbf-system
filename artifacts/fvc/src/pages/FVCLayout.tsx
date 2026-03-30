import { Link, useLocation } from "wouter";
import {
  Home,
  List,
  LayoutDashboard,
  Shield,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/ventures", label: "Ventures", icon: List },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/governance", label: "Governance", icon: Shield },
];

export default function FVCLayout() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#003153] border-b-2 border-[#F40009]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img
              src={`${BASE}fbf-logo.jpg`}
              alt="Founders Battlefield"
              style={{ height: 36, width: "auto", borderRadius: 6, flexShrink: 0, display: "block" }}
            />
            <div className="hidden sm:block">
              <span className="text-sm font-label font-bold text-white tracking-wide uppercase">FVC</span>
              <span className="text-xs text-white/50 ml-1.5 font-label">Founders Venture Capital</span>
            </div>
          </Link>
          <div className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isExact = location === link.href;
              const isActive = isExact || (link.href !== "/" && location.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-label font-medium transition-colors no-underline ${
                    isActive
                      ? "bg-[#F40009] text-white"
                      : "text-white/65 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              );
            })}
            <a
              href="/founders-kitchen/"
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-white/50 hover:text-white transition-colors no-underline ml-2 border border-white/15 hover:border-white/30 font-label"
            >
              ← FK
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
