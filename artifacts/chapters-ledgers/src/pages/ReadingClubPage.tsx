import { useState } from "react";
import { readingList2026 } from "@/data/books";
import { episodes, ARC_HEX, episodesByArc, ARC_COLORS } from "@/data/afos-matrix";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Star, Library } from "lucide-react";

function BookCover({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`bg-muted/50 border border-border rounded-lg flex items-center justify-center ${className}`}>
        <BookOpen className="w-8 h-8 text-muted-foreground/40" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover rounded-lg border border-border ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

export default function ReadingClubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">Reading Club</h1>
        <p className="text-muted-foreground max-w-2xl">
          The intellectual backbone of Chapters & Ledgers. Curated readings that
          illuminate the founder journey through the AFOS framework.
        </p>
      </div>

      <Tabs defaultValue="highlights" className="space-y-8">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="highlights" className="gap-1.5">
            <Star className="w-4 h-4" /> 2026 Highlights
          </TabsTrigger>
          <TabsTrigger value="episode-books" className="gap-1.5">
            <Library className="w-4 h-4" /> Episode Book Club
          </TabsTrigger>
        </TabsList>

        <TabsContent value="highlights">
          <div className="mb-6">
            <h2 className="text-2xl font-label font-semibold mb-2">Founders' Battlefield Reading List 2026</h2>
            <p className="text-sm text-muted-foreground">
              Ten essential books selected for the 2026 reading programme — each chosen for its
              direct connection to the AFOS founder journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {readingList2026.map((book, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    <BookCover
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-20 h-28 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <h3 className="text-lg font-label font-semibold">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">{book.author}</p>
                        </div>
                        <Badge variant="outline" className="shrink-0 text-xs">
                          #{i + 1}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{book.description}</p>
                    </div>
                  </div>
                  <div className="bg-[#003153]/5 rounded-lg p-3 border border-[#003153]/10 mt-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#003153] mb-1">
                      AFOS Connection
                    </p>
                    <p className="text-sm">{book.afosConnection}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="episode-books">
          <div className="mb-6">
            <h2 className="text-2xl font-label font-semibold mb-2">Episode Book Club</h2>
            <p className="text-sm text-muted-foreground">
              All 40 books from the AFOS matrix, one per episode, organized by ARC.
              Each book was selected to illuminate that episode's theme.
            </p>
          </div>

          <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6].map((arc) => {
              const arcEps = episodesByArc[arc] || [];
              const arcInfo = ARC_COLORS[arc];
              return (
                <div key={arc}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: ARC_HEX[arc] }}
                    />
                    <h3 className="text-lg font-label font-semibold" style={{ color: ARC_HEX[arc] }}>
                      {arcInfo.label}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {arcEps.length} books
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {arcEps.map((ep) => {
                      const bookTitle = ep.suggestedBook.split(" by ")[0].trim();
                      const bookAuthor = ep.suggestedBook.includes(" by ") ? ep.suggestedBook.split(" by ").slice(1).join(" by ").trim() : "";
                      return (
                        <div
                          key={ep.number}
                          className="flex items-start gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                        >
                          <BookCover
                            src={ep.suggestedBookCover}
                            alt={bookTitle}
                            className="w-12 h-16 shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">{bookTitle}</p>
                            {bookAuthor && (
                              <p className="text-xs text-muted-foreground">{bookAuthor}</p>
                            )}
                            <div className="flex items-center gap-1.5 mt-1">
                              <div
                                className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-bold shrink-0"
                                style={{ backgroundColor: ARC_HEX[arc] }}
                              >
                                {String(ep.number).padStart(2, "0")}
                              </div>
                              <p className="text-xs text-muted-foreground truncate">
                                {ep.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
