import {
  Eye, Users, PlayCircle, UserCheck, Heart, Star,
  Tv, Radio, Globe, TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLiveStats } from "@/hooks/use-live-stats";
import { PODCAST_TOPICS } from "@/data/pipeline";

function formatNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K+`;
  return `${n}+`;
}

export default function ImpactPage() {
  const { stats, loading } = useLiveStats();

  const metrics = [
    { label: "Total Views", value: formatNum(stats.totalViews), icon: Eye, color: "#D32F2F", desc: "Across all platforms" },
    { label: "Social Followers", value: formatNum(stats.totalFollowers), icon: Users, color: "#0EA5E9", desc: "Active audience" },
    { label: "Community Engagement", value: formatNum(stats.totalComments), icon: Heart, color: "#EC4899", desc: "Comments & interactions" },
    { label: "Episodes Produced", value: `${stats.totalEpisodes}+`, icon: PlayCircle, color: "#D4A832", desc: "Across all seasons" },
    { label: "Event Attendance", value: `${stats.latestEventAttendance}+`, icon: UserCheck, color: "#10B981", desc: "Latest event" },
    { label: "Founders Featured", value: `${stats.totalFounders}+`, icon: Star, color: "#8B5CF6", desc: "Unique founders" },
    { label: "FBX Members", value: `${stats.communityMembers}+`, icon: Users, color: "#F97316", desc: "Community platform" },
    { label: "Growth Rate", value: "10-20%", icon: TrendingUp, color: "#6366F1", desc: "Weekly growth" },
  ];

  const socialPlatforms = [
    { name: "YouTube", followers: "Main video platform", color: "#FF0000" },
    { name: "Instagram", followers: "Visual storytelling", color: "#E4405F" },
    { name: "Facebook", followers: "Community engagement", color: "#1877F2" },
    { name: "TikTok", followers: "Short-form viral content", color: "#000000" },
    { name: "X / Twitter", followers: "Real-time commentary", color: "#1DA1F2" },
    { name: "LinkedIn", followers: "Professional network", color: "#0A66C2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Impact Gallery</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Real Impact. Real Data.
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Live metrics from across the Founders Battlefield ecosystem.
            {loading ? " Loading latest data..." : " Updated in real-time from foundersbattlefield.org APIs."}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map(m => (
              <div key={m.label} className="bg-white border border-border rounded-xl p-5 text-center card-hover">
                <m.icon className="w-6 h-6 mx-auto mb-2" style={{ color: m.color }} />
                <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">{m.value}</p>
                <p className="text-sm font-medium text-foreground mt-1">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Broadcast Channels</h2>
          <p className="text-sm text-muted-foreground mb-6">Multi-channel distribution ensuring maximum reach for sponsor brands.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "TV47", icon: Tv, desc: "National television broadcast. Monthly Studio Live + special broadcasts. Reach: 5M+ potential viewers per broadcast.", color: "#D32F2F" },
              { name: "Radio47", icon: Radio, desc: "Weekly radio programming. Founder DJ series + pre-show segments. National FM coverage with drive-time slots.", color: "#0EA5E9" },
              { name: "Digital & Social", icon: Globe, desc: "6 social platforms. YouTube, Instagram, TikTok, Facebook, X, LinkedIn. 10-15 content derivatives per episode.", color: "#8B5CF6" },
              { name: "Live Events", icon: Users, desc: "Monthly in-person gatherings. 300+ attendees per event. Networking, panels, and brand activations.", color: "#10B981" },
            ].map(ch => (
              <div key={ch.name} className="bg-background border border-border rounded-xl p-5 card-hover">
                <ch.icon className="w-8 h-8 mb-3" style={{ color: ch.color }} />
                <h3 className="font-semibold text-foreground mb-1">{ch.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Social Media Platforms</h2>
          <p className="text-sm text-muted-foreground mb-6">Active presence across 6 major social platforms.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {socialPlatforms.map(p => (
              <div key={p.name} className="bg-white border border-border rounded-xl p-4 text-center card-hover">
                <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                  <Globe className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <p className="text-sm font-semibold text-foreground">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.followers}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Episode Topics — Season Overview</h2>
          <p className="text-sm text-muted-foreground mb-6">{PODCAST_TOPICS.length} compelling conversation topics across seasons.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PODCAST_TOPICS.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                <span className="text-xs text-muted-foreground font-mono w-6 shrink-0 text-right">#{i + 1}</span>
                <p className="text-sm text-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-serif font-bold mb-2">Tracking & Measurement</h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
              Every sponsorship comes with comprehensive tracking: TV47 broadcast logs, Radio47 airtime logs,
              YouTube/Meta/TikTok analytics, CRM lead capture, event ticketing data, and sponsor-specific UTMs.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["TV47 Broadcast Logs", "Radio47 Airtime", "YouTube Analytics", "Meta Insights", "TikTok Analytics", "CRM Lead Capture", "Event RSVP Data", "UTM Tracking"].map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/10">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
