import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Map,
  Brain,
  MessageSquare,
  CalendarDays,
  Shield,
  Gamepad2,
  Clock,
  ExternalLink,
  Network,
} from "lucide-react";

const ecosystemLinks = [
  {
    name: "AFOS Atlas",
    description: "The Founder Operating System — maps all 40 episodes, 6 ARCs, and matched services. The strategic backbone that structures the book series.",
    icon: Map,
    color: "#3A8ACA",
    path: "/afos-atlas/",
    type: "Internal",
  },
  {
    name: "AFOS Intelligence Co.",
    description: "AI-powered founder coaching and intelligence layer. Provides data analytics and pattern recognition across the AFOS matrix for editorial insights.",
    icon: Brain,
    color: "#8A5ABF",
    path: null,
    type: "Ecosystem",
  },
  {
    name: "CommsPRCreative",
    description: "Communications, PR, and creative services arm. Manages the Business Daily column syndication, media relations, and book launch communications.",
    icon: MessageSquare,
    color: "#F4C430",
    path: null,
    type: "Ecosystem",
  },
  {
    name: "FBF Events",
    description: "Live events and programming arm. Hosts reading club gatherings, book launches, and founder storytelling events tied to the Ledgers series.",
    icon: CalendarDays,
    color: "#2AAF6A",
    path: null,
    type: "Ecosystem",
  },
  {
    name: "FBF IP",
    description: "Intellectual property registry and protection. Manages copyright for the book series, episode content, and the AFOS framework itself.",
    icon: Shield,
    color: "#C45A3C",
    path: "/afos-atlas/#ip-registry",
    type: "Internal",
  },
  {
    name: "Gaming Agent",
    description: "The Founders Game — gamified version of the AFOS journey. Each game level maps to a book chapter, creating interactive learning from the Ledgers content.",
    icon: Gamepad2,
    color: "#007FFF",
    path: "/afos-atlas/#founders-game",
    type: "Internal",
  },
  {
    name: "foundersbattlefield.org",
    description: "The public-facing website for Founders Battlefield. Hosts the Business Daily columns archive and podcast episodes that feed the book series.",
    icon: Globe,
    color: "#C45A3C",
    path: "https://foundersbattlefield.org",
    type: "External",
  },
  {
    name: "MachariaOS Timesheet",
    description: "Project tracking for the fbf_chapters venture. Tracks billable hours, production milestones, and budget allocation across the book series pipeline.",
    icon: Clock,
    color: "#003153",
    path: "/timesheet/",
    type: "Internal",
  },
];

export default function ConnectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">Ecosystem Connections</h1>
        <p className="text-muted-foreground max-w-2xl">
          Chapters & Ledgers sits at the intersection of the FBF ecosystem —
          drawing from AFOS data, feeding into events, games, and communications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ecosystemLinks.map((link) => {
          const Icon = link.icon;
          const isExternal = link.type === "External";
          const href = link.path;

          const cardContent = (
            <Card className="hover:shadow-md transition-all group h-full border-l-4" style={{ borderLeftColor: link.color }}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${link.color}15` }}>
                      <Icon className="w-4 h-4" style={{ color: link.color }} />
                    </div>
                    <CardTitle className="text-base font-label font-semibold">{link.name}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-[10px]"
                      style={{ borderColor: link.color, color: link.color }}
                    >
                      {link.type}
                    </Badge>
                    {href && (
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </CardContent>
            </Card>
          );

          if (href) {
            return (
              <a
                key={link.name}
                href={isExternal ? href : href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="no-underline"
              >
                {cardContent}
              </a>
            );
          }

          return <div key={link.name}>{cardContent}</div>;
        })}
      </div>

      <div className="mt-12 bg-muted/30 rounded-xl p-6 border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <Network className="w-6 h-6 text-[#003153]" />
          <h3 className="text-lg font-label font-semibold">How It Connects</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium mb-1">Data Flows In</p>
            <p className="text-muted-foreground">
              AFOS Atlas provides the 40-episode matrix. Podcast recordings provide raw transcripts.
              Business Daily columns provide weekly founder insights.
            </p>
          </div>
          <div>
            <p className="font-medium mb-1">Content Flows Out</p>
            <p className="text-muted-foreground">
              Published books feed into FBF Events programming. Chapter themes power the Gaming Agent levels.
              Reading Club selections inform AFOS coaching curriculum.
            </p>
          </div>
          <div>
            <p className="font-medium mb-1">Operations Track</p>
            <p className="text-muted-foreground">
              MachariaOS Timesheet tracks production hours under fbf_chapters venture.
              FBF IP registers book copyrights and AFOS framework IP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
