import { useState, useEffect } from "react";
import { transcripts } from "@/data/transcripts";
import { transcriptContent } from "@/data/transcript-content";
import { ARC_HEX } from "@/data/afos-matrix";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Mic, ChevronRight, X } from "lucide-react";
import { useRoute } from "wouter";

export default function TranscriptsPage() {
  const [, params] = useRoute("/transcripts/:id");
  const [selectedEp, setSelectedEp] = useState<number | null>(null);

  useEffect(() => {
    if (params?.id) {
      setSelectedEp(parseInt(params.id));
    }
  }, [params?.id]);

  const season1 = transcripts.filter((t) => t.season === 1);
  const season2 = transcripts.filter((t) => t.season === 2);

  const selected = selectedEp !== null ? transcripts.find((t) => t.episode === selectedEp) : null;
  const selectedContent = selectedEp !== null ? transcriptContent[selectedEp] : null;

  const getArcForEpisode = (ep: number): number => {
    if (ep <= 6) return 1;
    if (ep <= 12) return 2;
    if (ep <= 18) return 3;
    if (ep <= 24) return 4;
    if (ep <= 30) return 5;
    return 6;
  };

  const formatTranscriptText = (text: string): string[] => {
    return text
      .split(/(?<=[.!?])\s+/)
      .reduce<string[]>((acc, sentence, i) => {
        if (i % 3 === 0) {
          acc.push(sentence);
        } else {
          acc[acc.length - 1] += " " + sentence;
        }
        return acc;
      }, []);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">Transcripts</h1>
        <p className="text-muted-foreground max-w-2xl">
          Full transcripts from 13 Founders Battlefield episodes. Season 1 (EP1-EP10)
          and Season 2 (EP11-EP13). The raw source material for the Ledgers of Africa book series.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <Badge variant="outline" className="text-sm">
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            13 Transcripts
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Mic className="w-3.5 h-3.5 mr-1.5" />
            2 Seasons
          </Badge>
        </div>
      </div>

      {selected && (
        <Card className="mb-8 border-l-4" style={{ borderLeftColor: ARC_HEX[getArcForEpisode(selected.episode)] }}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="outline" className="mb-2 text-xs">
                  Season {selected.season} • Episode {selected.episode}
                </Badge>
                <CardTitle className="text-xl font-label font-semibold">{selected.title}</CardTitle>
              </div>
              <button
                onClick={() => setSelectedEp(null)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-muted"
              >
                <X className="w-3.5 h-3.5" /> Close
              </button>
            </div>
          </CardHeader>
          <CardContent>
            {selectedContent ? (
              <ScrollArea className="h-[500px] rounded-lg border border-border/50 bg-muted/10 p-6">
                <div className="prose prose-sm max-w-none">
                  {formatTranscriptText(selectedContent).map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-foreground/90 mb-3">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground italic">
                      Full transcript • Source: {selected.filename}
                    </p>
                  </div>
                </div>
              </ScrollArea>
            ) : (
              <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
                <p className="text-sm text-muted-foreground italic">{selected.preview}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="season1">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="season1">Season 1 (EP1–EP10)</TabsTrigger>
          <TabsTrigger value="season2">Season 2 (EP11–EP13)</TabsTrigger>
        </TabsList>

        <TabsContent value="season1" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {season1.map((t) => (
              <Card
                key={t.episode}
                className={`cursor-pointer hover:shadow-md transition-all border-l-4 ${selectedEp === t.episode ? "ring-2 ring-primary/30" : ""}`}
                style={{ borderLeftColor: ARC_HEX[getArcForEpisode(t.episode)] }}
                onClick={() => setSelectedEp(t.episode)}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: ARC_HEX[getArcForEpisode(t.episode)] }}
                  >
                    {String(t.episode).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{t.title}</p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{t.preview.substring(0, 80)}...</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="season2" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {season2.map((t) => (
              <Card
                key={t.episode}
                className={`cursor-pointer hover:shadow-md transition-all border-l-4 ${selectedEp === t.episode ? "ring-2 ring-primary/30" : ""}`}
                style={{ borderLeftColor: ARC_HEX[getArcForEpisode(t.episode)] }}
                onClick={() => setSelectedEp(t.episode)}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: ARC_HEX[getArcForEpisode(t.episode)] }}
                  >
                    {String(t.episode).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{t.title}</p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{t.preview.substring(0, 80)}...</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
