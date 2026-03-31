import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Tv, Radio, Users, Mic, Eye, Heart, UserCheck,
  ArrowRight, PlayCircle, TrendingUp, Globe, Sparkles,
  ChevronRight, Star, Calendar
} from "lucide-react";
import { useLiveStats } from "@/hooks/use-live-stats";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FBFLogoLockup } from "@/components/FBFLogoLockup";
import { SERVICE_CATALOG } from "@/data/service-catalog";

interface UpcomingEvent {
  title: string;
  date: string;
  type: string;
}

function useUpcomingEvents() {
  const [events, setEvents] = useState<UpcomingEvent[]>([]);
  useEffect(() => {
    fetch("/api/fbf-proxy/events")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          const upcoming = data
            .filter((e: any) => new Date(e.date || e.startDate) >= new Date())
            .slice(0, 4)
            .map((e: any) => ({
              title: e.title || e.name || "Upcoming Event",
              date: e.date || e.startDate || "",
              type: e.type || e.category || "Event",
            }));
          setEvents(upcoming);
        }
      })
      .catch(() => {
        setEvents([
          { title: "Arena Conversations — Weekly Episode", date: "Every Thursday", type: "TV/Podcast" },
          { title: "Arena Founder DJ — Friday Sessions", date: "Every Friday", type: "Radio" },
          { title: "Arena Live Scope", date: "Monthly", type: "Live Event" },
          { title: "Arena Founder Studio Live", date: "Monthly", type: "TV Studio" },
        ]);
      });
  }, []);
  return events;
}

function formatNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K+`;
  return `${n}+`;
}

export default function LandingPage() {
  const { stats } = useLiveStats();
  const upcomingEvents = useUpcomingEvents();

  const impactStats = [
    { label: "Total Views", value: formatNum(stats.totalViews), icon: Eye, color: "#D32F2F" },
    { label: "Social Followers", value: formatNum(stats.totalFollowers), icon: Users, color: "#0EA5E9" },
    { label: "Episodes Produced", value: `${stats.totalEpisodes}+`, icon: PlayCircle, color: "#D4A832" },
    { label: "Event Attendees", value: `${stats.latestEventAttendance}+`, icon: UserCheck, color: "#10B981" },
    { label: "Founders Featured", value: `${stats.totalFounders}+`, icon: Star, color: "#8B5CF6" },
    { label: "Community Members", value: `${stats.communityMembers}+`, icon: Heart, color: "#EC4899" },
  ];

  const channels = [
    { name: "TV47", icon: Tv, desc: "National TV broadcast" },
    { name: "Radio47", icon: Radio, desc: "Radio programming" },
    { name: "Digital", icon: Globe, desc: "6+ social platforms" },
    { name: "Live Events", icon: Users, desc: "Monthly gatherings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/hero-african-founders.png`} alt="African founders collaborating" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003153]/90 via-[#003153]/75 to-[#003153]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-8">
              <FBFLogoLockup size={54} variant="light" subtitle="Sponsorship Hub" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm mb-6 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4" />
              Founders Battlefield Ecosystem
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 uppercase" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.02em" }}>
              Partner with Africa's <br className="hidden md:block" />
              <span style={{ color: "#D32F2F" }}>Premier Founder</span> <br className="hidden md:block" />
              Storytelling Platform
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mb-8" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Reach engaged audiences across TV, radio, podcasts, live events, and digital channels.
              14 sponsorship products. 4 partnership tiers. One ecosystem designed for authentic brand integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/opportunities" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all hover:opacity-90" style={{ background: "#D32F2F", fontFamily: "'Poppins', system-ui, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}>
                Explore Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/configurator" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm" style={{ fontFamily: "'Poppins', system-ui, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}>
                Build Your Package <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Live Impact Data</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.02em" }}>
              Real Numbers. Real Reach.
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
              Live metrics from the Founders Battlefield ecosystem, updated in real-time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map(stat => (
              <div key={stat.label} className="text-center p-5 rounded-xl bg-background border border-border card-hover">
                <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
                <p className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800 }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Multi-Channel</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.02em" }}>
              Your Brand, Everywhere
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {channels.map(ch => (
              <div key={ch.name} className="bg-white border border-border rounded-xl p-6 text-center card-hover">
                <ch.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground">{ch.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-white border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Coming Up</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.02em" }}>
                Upcoming Events & Shows
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
                Upcoming sponsorship opportunities across the FBF ecosystem
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingEvents.map((ev, i) => (
                <Link href="/contact" key={i}>
                  <div className="bg-background border border-border rounded-xl p-5 card-hover cursor-pointer h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{ev.type}</span>
                    </div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{ev.title}</h3>
                    <p className="text-xs text-muted-foreground">{ev.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">14 Products</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.02em" }}>
                Sponsorship Products
              </h2>
            </div>
            <Link href="/opportunities" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICE_CATALOG.slice(0, 8).map(service => (
              <Link href="/opportunities" key={service.id}>
                <div className="bg-background border border-border rounded-xl p-5 card-hover cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                      <Mic className="w-5 h-5" style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{service.shortName}</h3>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${service.category === "existing" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                        {service.category === "existing" ? "CRM Active" : "New"}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {service.channels.slice(0, 3).map(ch => (
                      <span key={ch} className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{ch}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              See all 14 sponsorship products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br rounded-2xl p-8 md:p-12 text-white" style={{ background: "linear-gradient(135deg, #003153 0%, #0078D4 100%)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 800, letterSpacing: "0.02em" }}>
                  Ready to Partner?
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Whether you're a brand, agency, or investor — we'll match you to the perfect sponsorship package.
                  Build your own or choose a pre-built tier.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white" style={{ background: "#D32F2F", fontFamily: "'Poppins', system-ui, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}>
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/tiers" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all" style={{ fontFamily: "'Poppins', system-ui, sans-serif", fontWeight: 500, fontSize: "0.875rem" }}>
                    View Tiers
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <TrendingUp className="w-5 h-5 mb-2 text-primary" />
                  <p className="text-sm font-semibold">4 Tiers</p>
                  <p className="text-xs text-slate-400">Platinum to Bronze</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Mic className="w-5 h-5 mb-2 text-yellow-400" />
                  <p className="text-sm font-semibold">14 Products</p>
                  <p className="text-xs text-slate-400">Full ecosystem</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Globe className="w-5 h-5 mb-2 text-cyan-400" />
                  <p className="text-sm font-semibold">10+ Channels</p>
                  <p className="text-xs text-slate-400">TV, Radio, Digital</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Users className="w-5 h-5 mb-2 text-green-400" />
                  <p className="text-sm font-semibold">300+ Events</p>
                  <p className="text-xs text-slate-400">Monthly gatherings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
