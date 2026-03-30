import { volumes } from "@/data/volumes";
import { episodes, ARC_HEX, ARC_COLORS } from "@/data/afos-matrix";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Clock, Calendar, BookOpen, Users, FileText } from "lucide-react";

const statusConfig = {
  "in-production": { label: "In Production", color: "bg-green-100 text-green-800 border-green-200", icon: Sparkles },
  "planned": { label: "Planned", color: "bg-blue-100 text-blue-800 border-blue-200", icon: Clock },
  "future": { label: "Future", color: "bg-gray-100 text-gray-600 border-gray-200", icon: Calendar },
};

export default function ChaptersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">The Chapters</h1>
        <p className="text-muted-foreground max-w-2xl font-body">
          Six volumes mapping the complete founder journey through the AFOS ARCs.
          Each volume captures a distinct phase of the entrepreneurial odyssey across Africa.
        </p>
      </div>

      <div className="space-y-8">
        {volumes.map((vol) => {
          const sc = statusConfig[vol.status];
          const StatusIcon = sc.icon;
          const arcEpisodes = episodes.filter((ep) => ep.arcNumber === vol.arcNumber);

          return (
            <Card
              key={vol.number}
              className={`relative overflow-hidden border-l-4 ${vol.status === "in-production" ? "ring-2 ring-green-200" : ""}`}
              style={{ borderLeftColor: ARC_HEX[vol.arcNumber] }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-label font-bold uppercase tracking-widest"
                        style={{ color: ARC_HEX[vol.arcNumber] }}
                      >
                        Volume {vol.number} — {vol.arcLabel}
                      </span>
                      <Badge className={`text-xs font-label ${sc.color}`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {sc.label}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-label font-semibold">{vol.title}</CardTitle>
                    <p className="text-sm text-muted-foreground italic font-body">{vol.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground font-body">
                      <Users className="w-4 h-4" />
                      <span>{vol.founderCount} founders</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground font-body">
                      <FileText className="w-4 h-4" />
                      <span>{vol.pageTarget} pages</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-label font-medium" style={{ color: ARC_HEX[vol.arcNumber] }}>
                      <BookOpen className="w-4 h-4" />
                      <span>{vol.costTarget}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 font-body">{vol.description}</p>

                <div className="border-t border-border/50 pt-4">
                  <h4 className="text-xs font-label font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Episodes in this Volume ({vol.episodeRange})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {arcEpisodes.map((ep) => (
                      <div
                        key={ep.number}
                        className="flex items-start gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <span
                          className="text-xs font-label font-bold mt-0.5 shrink-0"
                          style={{ color: ARC_HEX[vol.arcNumber] }}
                        >
                          EP{String(ep.number).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-label font-medium leading-tight">{ep.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 font-body">
                            {ep.suggestedBook}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
