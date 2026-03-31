import { useState } from "react";
import { episodes, ARC_HEX, ARC_COLORS, episodesByArc, type Episode } from "@/data/afos-matrix";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Users,
  Mic,
  Columns3,
  FileText,
  Globe,
  Search,
  ChevronDown,
  ChevronUp,
  Youtube,
  ExternalLink,
  Eye,
  Clock,
  BookOpen,
  Brain,
  Heart,
  Target,
  Users2,
  Sparkles,
  UserCheck,
  Briefcase,
  GraduationCap,
  Download,
} from "lucide-react";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const stats = [
  { label: "Founders", value: "45+", icon: Users },
  { label: "Episodes", value: "40+", icon: Mic },
  { label: "Live", value: String(episodes.filter(e => e.isLive).length), icon: Globe },
  { label: "Transcripts", value: "40+", icon: FileText },
  { label: "Data Columns", value: "20+", icon: Columns3 },
];

type EpisodeKey = keyof Episode;

const matrixColumns: { key: EpisodeKey; label: string }[] = [
  { key: "title", label: "Episode" },
  { key: "arcTheme", label: "ARC Theme" },
  { key: "mindset", label: "Mindset" },
  { key: "emotional", label: "Emotional" },
  { key: "strategic", label: "Strategic" },
  { key: "social", label: "Social" },
  { key: "spiritual", label: "Spiritual" },
  { key: "idealGuestTraits", label: "Ideal Guest Traits" },
  { key: "matchedServices", label: "Matched Services" },
  { key: "suggestedBook", label: "Suggested Book" },
  { key: "caseStudy", label: "Case Study" },
];

export default function LedgerPage() {
  const [search, setSearch] = useState("");
  const [arcFilter, setArcFilter] = useState<number | null>(null);
  const [expandedEp, setExpandedEp] = useState<number | null>(null);

  const filtered = episodes.filter((ep) => {
    const matchesSearch = search === "" ||
      ep.title.toLowerCase().includes(search.toLowerCase()) ||
      ep.suggestedBook.toLowerCase().includes(search.toLowerCase()) ||
      ep.caseStudy.toLowerCase().includes(search.toLowerCase()) ||
      (ep.featuredFounders || []).some(f => f.name.toLowerCase().includes(search.toLowerCase()));
    const matchesArc = arcFilter === null || ep.arcNumber === arcFilter;
    return matchesSearch && matchesArc;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">The Founder Ledger</h1>
        <p className="text-muted-foreground max-w-2xl">
          The complete 40-episode AFOS matrix — every founder's journey mapped across
          mindset, emotional, strategic, social, and spiritual dimensions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label}>
              <CardContent className="p-4 text-center">
                <Icon className="w-6 h-6 mx-auto text-[#003153] mb-1" />
                <p className="text-2xl font-display font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search episodes, books, founders, or case studies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => setArcFilter(null)}
            className={`px-3 py-1.5 rounded-md text-xs font-label font-medium transition-colors ${
              arcFilter === null ? "bg-[#003153] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {[1, 2, 3, 4, 5, 6].map((arc) => (
            <button
              key={arc}
              onClick={() => setArcFilter(arcFilter === arc ? null : arc)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors border`}
              style={{
                backgroundColor: arcFilter === arc ? ARC_HEX[arc] : "transparent",
                color: arcFilter === arc ? "white" : ARC_HEX[arc],
                borderColor: ARC_HEX[arc],
              }}
            >
              ARC {arc}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-muted-foreground mb-3">
        Showing {filtered.length} of {episodes.length} episodes
      </div>

      <div className="space-y-2">
        {filtered.map((ep) => {
          const isExpanded = expandedEp === ep.number;
          const guests = (ep.featuredFounders || []).filter(f => f.role === "guest");
          return (
            <Card
              key={ep.number}
              className="overflow-hidden border-l-4 cursor-pointer hover:shadow-sm transition-shadow"
              style={{ borderLeftColor: ARC_HEX[ep.arcNumber] }}
              onClick={() => setExpandedEp(isExpanded ? null : ep.number)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-sm font-bold shrink-0" style={{ color: ARC_HEX[ep.arcNumber] }}>
                      EP{String(ep.number).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-medium truncate">{ep.siteTitle || ep.title}</h3>
                    <Badge variant="outline" className="text-[10px] shrink-0 hidden sm:inline-flex" style={{ borderColor: ARC_HEX[ep.arcNumber], color: ARC_HEX[ep.arcNumber] }}>
                      ARC {ep.arcNumber}
                    </Badge>
                    {ep.isLive ? (
                      <Badge className="text-[10px] shrink-0 bg-green-100 text-green-800 border-green-200 hidden sm:inline-flex">
                        Live
                      </Badge>
                    ) : (
                      <Badge className="text-[10px] shrink-0 bg-gray-100 text-gray-500 border-gray-200 hidden sm:inline-flex">
                        <Clock className="w-3 h-3 mr-0.5" /> Coming Soon
                      </Badge>
                    )}
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </div>

                {!isExpanded && (
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    {ep.isLive && (
                      <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                        {ep.youtubeUrl && (
                          <a href={ep.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors" title="Watch on YouTube">
                            <Youtube className="w-4 h-4" />
                          </a>
                        )}
                        {ep.spotifyUrl && (
                          <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors" title="Listen on Spotify">
                            <SpotifyIcon className="w-4 h-4" />
                          </a>
                        )}
                        {!ep.spotifyUrl && ep.spotifyAvailable && (
                          <a href="https://open.spotify.com/show/founders-battlefield" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600 transition-colors" title="Available on Spotify — click to find on Spotify">
                            <SpotifyIcon className="w-4 h-4" />
                          </a>
                        )}
                        {ep.viewCount && (
                          <span className="flex items-center gap-0.5 text-muted-foreground">
                            <Eye className="w-3 h-3" /> {ep.viewCount}
                          </span>
                        )}
                      </div>
                    )}
                    {guests.length > 0 && (
                      <span className="truncate max-w-[250px]">
                        <Users className="w-3 h-3 inline mr-1" />
                        {guests.map(f => f.name).join(", ")}
                      </span>
                    )}
                    <span className="truncate max-w-[200px] hidden sm:inline">{ep.suggestedBook}</span>
                  </div>
                )}
              </div>

              {isExpanded && (
                <div className="border-t border-border/50 p-4 sm:p-6 bg-muted/20">
                  {ep.isLive && (
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {ep.thumbnailUrl && (
                          <a
                            href={ep.youtubeUrl || ep.foundersBattlefieldUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 block rounded-lg overflow-hidden border border-border/50 hover:border-border transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <img
                              src={ep.thumbnailUrl}
                              alt={`EP${ep.number} thumbnail`}
                              className="w-full sm:w-48 h-auto object-cover"
                            />
                          </a>
                        )}
                        <div className="space-y-2 min-w-0">
                          <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
                            {ep.youtubeUrl && (
                              <a href={ep.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors">
                                <Youtube className="w-3.5 h-3.5" /> YouTube
                              </a>
                            )}
                            {ep.spotifyUrl && (
                              <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors">
                                <SpotifyIcon className="w-3.5 h-3.5" /> Spotify
                              </a>
                            )}
                            {!ep.spotifyUrl && ep.spotifyAvailable && (
                              <a href="https://open.spotify.com/show/founders-battlefield" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-green-50/50 text-green-600 border border-green-200 hover:bg-green-100 transition-colors">
                                <SpotifyIcon className="w-3.5 h-3.5" /> Find on Spotify
                              </a>
                            )}
                            {ep.foundersBattlefieldUrl && (
                              <a href={ep.foundersBattlefieldUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" /> foundersbattlefield.org
                              </a>
                            )}
                          </div>
                          {ep.viewCount && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Eye className="w-3 h-3" /> {ep.viewCount} views
                            </p>
                          )}
                          {guests.length > 0 && (
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Featured Founders</p>
                              <div className="flex flex-wrap gap-1.5">
                                {(ep.featuredFounders || []).map(f => (
                                  <span key={f.name} className={`text-xs px-2 py-0.5 rounded-full border font-label ${f.role === "host" ? "bg-[#F40009]/8 text-[#F40009] border-[#F40009]/25" : "bg-[#003153]/8 text-[#003153] border-[#003153]/25"}`}>
                                    {f.name}{f.role === "host" ? " (Host)" : ""}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="md:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: ARC_HEX[ep.arcNumber] }}>Arc Theme</p>
                      <p className="text-sm font-medium">{ep.arcTheme}</p>
                    </div>

                    {[
                      { key: "mindset" as const, label: "Mindset", icon: Brain, color: "#3A8ACA" },
                      { key: "emotional" as const, label: "Emotional", icon: Heart, color: "#C45A3C" },
                      { key: "strategic" as const, label: "Strategic", icon: Target, color: "#2AAF6A" },
                      { key: "social" as const, label: "Social", icon: Users2, color: "#8A5ABF" },
                      { key: "spiritual" as const, label: "Spiritual", icon: Sparkles, color: "#D4A832" },
                    ].map(({ key, label, icon: Icon, color }) => (
                      <div key={key} className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${color}15` }}>
                          <Icon className="w-3.5 h-3.5" style={{ color }} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                          <p className="text-sm">{ep[key]}</p>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 bg-[#003153]/10">
                        <UserCheck className="w-3.5 h-3.5 text-[#003153]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ideal Guest Traits</p>
                        <p className="text-sm">{ep.idealGuestTraits}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 bg-[#F40009]/10">
                        <Briefcase className="w-3.5 h-3.5 text-[#F40009]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Matched Services</p>
                        <p className="text-sm">{ep.matchedServices}</p>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-2 pt-4 border-t border-border/50">
                      <div className="flex gap-3 items-start flex-1">
                        <div className="shrink-0 w-16 h-24 rounded-md overflow-hidden border border-border/50 bg-muted flex items-center justify-center">
                          <img
                            src={ep.suggestedBookCover}
                            alt={ep.suggestedBook}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement("div");
                                fallback.className = "flex items-center justify-center w-full h-full";
                                fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground/40"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>';
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Suggested Book</p>
                          <p className="text-sm font-medium">{ep.suggestedBook}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 bg-amber-50">
                            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Case Study</p>
                            <p className="text-sm">{ep.caseStudy}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
