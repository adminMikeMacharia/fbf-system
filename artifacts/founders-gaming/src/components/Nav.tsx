import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";
import { FBFLogoLockup } from "./FBFLogoLockup";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const navLinks = [
  { label: "The Arena", href: `${BASE}/arena` },
  { label: "Game Mechanics", href: `${BASE}/mechanics` },
  { label: "Ideation Wall", href: `${BASE}/ideation` },
  { label: "Build With Us", href: `${BASE}/build` },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(0, 30, 56, 0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(220, 20, 60, 0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`${BASE}/`} className="flex items-center gap-3">
            <FBFLogoLockup size={42} variant="light" subtitle="Gaming" />
            <div
              className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-poppins font-semibold tracking-wider uppercase"
              style={{
                background: "rgba(220, 20, 60, 0.15)",
                border: "1px solid rgba(220, 20, 60, 0.3)",
                color: "#DC143C",
              }}
            >
              <Zap className="w-2.5 h-2.5" />
              Beta
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href || location.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-condensed font-semibold text-sm tracking-widest uppercase transition-all duration-200 rounded"
                  style={{
                    color: isActive ? "#DC143C" : "rgba(210, 230, 245, 0.75)",
                    background: isActive ? "rgba(220, 20, 60, 0.1)" : "transparent",
                    borderBottom: isActive ? "2px solid #DC143C" : "2px solid transparent",
                    textShadow: isActive ? "0 0 10px rgba(220, 20, 60, 0.5)" : "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: "rgba(210, 230, 245, 0.75)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(0, 20, 40, 0.98)",
            borderColor: "rgba(220, 20, 60, 0.2)",
          }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 font-condensed font-semibold text-sm tracking-widest uppercase rounded transition-colors"
                  style={{
                    color: isActive ? "#DC143C" : "rgba(210, 230, 245, 0.75)",
                    background: isActive ? "rgba(220, 20, 60, 0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
