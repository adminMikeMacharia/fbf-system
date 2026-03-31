import { volumes } from "@/data/volumes";
import { episodes, ARC_HEX } from "@/data/afos-matrix";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  BookOpen,
  Users,
  Mic,
  Globe,
  FileText,
  Newspaper,
  ArrowRight,
  Sparkles,
  PenTool,
  CheckCircle2,
  Clock,
  Calendar,
} from "lucide-react";

const statusConfig = {
  "in-production": { label: "In Production", color: "bg-green-100 text-green-800 border-green-200", icon: Sparkles },
  "planned": { label: "Planned", color: "bg-blue-100 text-blue-800 border-blue-200", icon: Clock },
  "future": { label: "Future", color: "bg-gray-100 text-gray-600 border-gray-200", icon: Calendar },
};

const teamMembers = [
  { name: "Dennis Mugumo", role: "Narrative Architect / Creative Director", color: "#003153" },
  { name: "John Gikanga", role: "Design Lead", color: "#007FFF" },
  { name: "Mike Macharia", role: "Final Approval / Executive Producer", color: "#F40009" },
];

export default function VisionBoard() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b-2 border-[#F40009] py-16">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/hero-african-stories.png`} alt="African storyteller in library setting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003153]/90 via-[#003153]/80 to-[#003153]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-label font-semibold tracking-[0.3em] text-[#F40009] uppercase mb-3">A Founders Battlefield Initiative</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-wide text-white uppercase mb-4">
              Ledgers of Africa
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto font-body">
              A 6-volume book series documenting the untold stories of African founders,
              mapped to the 6 AFOS ARCs. The publishing and reading club arm of Founders Battlefield.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Badge variant="outline" className="text-sm px-3 py-1 border-white/30 text-white/80 font-label">
                <BookOpen className="w-3.5 h-3.5 mr-1.5" /> 6 Volumes
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 border-white/30 text-white/80 font-label">
                <Users className="w-3.5 h-3.5 mr-1.5" /> 45+ Founders
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 border-white/30 text-white/80 font-label">
                <Mic className="w-3.5 h-3.5 mr-1.5" /> 40 Episodes
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {volumes.map((vol) => {
              const sc = statusConfig[vol.status];
              const StatusIcon = sc.icon;
              return (
                <Card
                  key={vol.number}
                  className="relative overflow-hidden hover:shadow-lg transition-shadow border-l-4 bg-white/95"
                  style={{ borderLeftColor: ARC_HEX[vol.arcNumber] }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-label font-semibold uppercase tracking-wider" style={{ color: ARC_HEX[vol.arcNumber] }}>
                        Volume {vol.number}
                      </span>
                      <Badge className={`text-xs ${sc.color} font-label`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {sc.label}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-label font-semibold">{vol.title}</CardTitle>
                    <p className="text-xs text-muted-foreground font-body">{vol.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3 font-body">{vol.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                      <span>{vol.episodeRange}</span>
                      <span>•</span>
                      <span>{vol.founderCount} founders</span>
                      <span>•</span>
                      <span>{vol.pageTarget}pp</span>
                    </div>
                    <div className="mt-2 text-xs font-label font-semibold" style={{ color: ARC_HEX[vol.arcNumber] }}>
                      {vol.costTarget}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-t-2 border-t-[#003153]">
              <CardHeader>
                <CardTitle className="text-base font-label font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#003153]" />
                  Production Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {teamMembers.map((tm) => (
                  <div key={tm.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-label" style={{ backgroundColor: tm.color }}>
                      {tm.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-label font-medium">{tm.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{tm.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-t-2 border-t-[#003153]">
              <CardHeader>
                <CardTitle className="text-base font-label font-semibold flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-[#003153]" />
                  Production Budget
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-body">Per Volume</span>
                  <span className="text-sm font-label font-semibold">KSh 2.0M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-body">Total Series (6 vols)</span>
                  <span className="text-sm font-label font-semibold">KSh 12.0M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-body">Target Pages (Total)</span>
                  <span className="text-sm font-label font-semibold">{volumes.reduce((s, v) => s + v.pageTarget, 0)} pages</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-body">Founders Documented</span>
                  <span className="text-sm font-label font-semibold">45+</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-2 border-t-[#003153]">
              <CardHeader>
                <CardTitle className="text-base font-label font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#003153]" />
                  Source Material
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-body">
                  <Mic className="w-4 h-4 text-muted-foreground" />
                  <span>40 episode recordings</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>13 full transcripts</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body">
                  <Newspaper className="w-4 h-4 text-muted-foreground" />
                  <span>36 Business Daily columns</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span>5+ countries represented</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Chapters", href: "/chapters", icon: BookOpen, desc: "6 volumes, ARC-mapped" },
              { label: "The Ledger", href: "/ledger", icon: FileText, desc: "Full 40-episode matrix" },
              { label: "Reading Club", href: "/reading-club", icon: BookOpen, desc: "2026 highlights + episode books" },
              { label: "Columns Archive", href: "/columns", icon: Newspaper, desc: "36 Business Daily columns" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="no-underline">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group border-l-4 border-l-[#F40009]">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#003153]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#003153]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-label font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#F40009] transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
