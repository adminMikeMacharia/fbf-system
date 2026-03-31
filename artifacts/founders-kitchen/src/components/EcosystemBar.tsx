import { ExternalLink, BookOpen, Megaphone, Globe, Gamepad2, Landmark, Palette, Library, BookMarked, FileText } from "lucide-react";

const ecosystemLinks = [
  { label: "Chapters & Ledgers", href: "/chapters-ledgers/", icon: BookOpen, external: false },
  { label: "Founders Gaming", href: "/founders-gaming/", icon: Gamepad2, external: false },
  { label: "Sponsorship Hub", href: "/sponsorship-hub/", icon: Megaphone, external: false },
  { label: "Brand Hub", href: "/founders-brand-hub/", icon: Palette, external: false },
  { label: "FVC", href: "/fvc/", icon: Landmark, external: false },
  { label: "foundersbattlefield.org", href: "https://foundersbattlefield.org", icon: Globe, external: true },
];

const crossLinks = [
  { label: "Founder Ledger", href: "/chapters-ledgers/ledger", icon: Library },
  { label: "Reading Club", href: "/chapters-ledgers/reading-club", icon: BookMarked },
  { label: "Transcripts", href: "/chapters-ledgers/transcripts", icon: FileText },
];

export default function EcosystemBar() {
  return (
    <div className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-1">Ecosystem</span>
          {ecosystemLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Icon className="w-3 h-3" />
                {link.label}
                {link.external && <ExternalLink className="w-2.5 h-2.5" />}
              </a>
            );
          })}
          <span className="text-border mx-1">|</span>
          {crossLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Icon className="w-3 h-3" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
