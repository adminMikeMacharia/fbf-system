import { ExternalLink, ChefHat, BookOpen, Megaphone, Globe, Gamepad2, Landmark, Palette } from "lucide-react";

const ecosystemLinks = [
  { label: "Founders Kitchen", href: "/founders-kitchen/", icon: ChefHat, external: false },
  { label: "Chapters & Ledgers", href: "/chapters-ledgers/", icon: BookOpen, external: false },
  { label: "Sponsorship Hub", href: "/sponsorship-hub/", icon: Megaphone, external: false },
  { label: "Brand Hub", href: "/founders-brand-hub/", icon: Palette, external: false },
  { label: "FVC", href: "/fvc/", icon: Landmark, external: false },
  { label: "foundersbattlefield.org", href: "https://foundersbattlefield.org", icon: Globe, external: true },
];

export default function EcosystemBar() {
  return (
    <div
      className="border-t"
      style={{
        background: "rgba(0, 20, 40, 0.9)",
        borderColor: "rgba(220, 20, 60, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 mr-2">
            <Gamepad2 className="w-3 h-3" style={{ color: "#DC143C" }} />
            <span
              className="text-[10px] font-poppins font-bold uppercase tracking-wider"
              style={{ color: "rgba(210, 230, 245, 0.4)" }}
            >
              FBF Ecosystem
            </span>
          </div>
          {ecosystemLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-poppins font-medium transition-colors"
                style={{
                  color: "rgba(210, 230, 245, 0.45)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(210, 230, 245, 0.9)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(220, 20, 60, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(210, 230, 245, 0.45)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <Icon className="w-3 h-3" />
                {link.label}
                {link.external && <ExternalLink className="w-2.5 h-2.5" />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
