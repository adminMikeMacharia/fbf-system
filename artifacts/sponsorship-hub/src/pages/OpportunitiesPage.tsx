import { useState } from "react";
import { Link } from "wouter";
import {
  Mic, Radio, Tv, Users, Heart, Award, PartyPopper, ChefHat,
  Share2, Film, ShoppingCart, Newspaper, Package, BookOpen,
  ArrowRight, ChevronDown, ChevronUp, Check, X
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SERVICE_CATALOG, type SponsorshipService } from "@/data/service-catalog";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mic, Radio, Tv, Users, Heart, Award, PartyPopper, ChefHat,
  Share2, Film, ShoppingCart, Newspaper, Package, BookOpen,
};

export default function OpportunitiesPage() {
  const [filter, setFilter] = useState<"all" | "existing" | "new">("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = SERVICE_CATALOG.filter(s =>
    filter === "all" ? true : s.category === filter
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Opportunity Explorer</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            14 Sponsorship Products
          </h1>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Browse all partnership opportunities across the Founders Battlefield ecosystem.
            8 active CRM services plus 6 new products for expanded reach.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Filter:</span>
            {([["all", "All Products (14)"], ["existing", "CRM Active (8)"], ["new", "New Products (6)"]] as const).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === id ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filtered.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expanded === service.id}
              onToggle={() => setExpanded(expanded === service.id ? null : service.id)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ service, isExpanded, onToggle }: { service: SponsorshipService; isExpanded: boolean; onToggle: () => void }) {
  const Icon = ICON_MAP[service.icon] || Mic;

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden card-hover">
      <div className="p-6 cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${service.color}15`, border: `1.5px solid ${service.color}30` }}>
            <Icon className="w-6 h-6" style={{ color: service.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-serif text-lg font-bold text-foreground">{service.name}</h3>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                service.category === "existing" ? "bg-green-100 text-green-700 border border-green-200" : "bg-blue-100 text-blue-700 border border-blue-200"
              }`}>
                {service.category === "existing" ? "CRM Active" : "New — Platform Defined"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {service.channels.map(ch => (
                <span key={ch} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{ch}</span>
              ))}
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{service.frequency}</span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden sm:flex gap-1">
              {(["platinum", "gold", "silver", "bronze"] as const).map(tier => (
                <div key={tier} className="w-5 h-5 rounded-full flex items-center justify-center" style={{
                  backgroundColor: service.tierAvailability[tier] ? `${tier === "platinum" ? "#6366F1" : tier === "gold" ? "#D4A832" : tier === "silver" ? "#64748B" : "#B45309"}20` : "#f1f5f9"
                }}>
                  {service.tierAvailability[tier] ? (
                    <Check className="w-3 h-3" style={{ color: tier === "platinum" ? "#6366F1" : tier === "gold" ? "#D4A832" : tier === "silver" ? "#64748B" : "#B45309" }} />
                  ) : (
                    <X className="w-3 h-3 text-slate-300" />
                  )}
                </div>
              ))}
            </div>
            {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-border p-6 bg-slate-50/50 space-y-5">
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Vision Statement</h4>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{service.visionStatement}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Deliverables</h4>
              <ul className="space-y-1.5">
                {service.keyDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: service.color }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Sponsorship Opportunities</h4>
              <ul className="space-y-1.5">
                {service.opportunities.map((o, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-3 h-3 mt-1 shrink-0" style={{ color: service.color }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Tier Availability</h4>
            <div className="flex gap-2">
              {(["platinum", "gold", "silver", "bronze"] as const).map(tier => {
                const available = service.tierAvailability[tier];
                const colors = { platinum: "#6366F1", gold: "#D4A832", silver: "#64748B", bronze: "#B45309" };
                return (
                  <div key={tier} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${available ? "" : "opacity-30"}`}
                    style={{
                      backgroundColor: `${colors[tier]}15`,
                      color: colors[tier],
                      border: `1px solid ${colors[tier]}30`,
                    }}
                  >
                    {tier.charAt(0).toUpperCase() + tier.slice(1)} {available ? "✓" : "✗"}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Link href="/configurator" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: service.color }}>
              Add to Package <ArrowRight className="w-3 h-3" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border text-foreground hover:bg-muted">
              Request Info
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
