import { Link } from "wouter";
import { Check, X, ArrowRight, Crown, Shield, Star, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TIERS } from "@/data/tier-pricing";
import { SERVICE_CATALOG } from "@/data/service-catalog";

const TIER_ICONS = { platinum: Crown, gold: Award, silver: Shield, bronze: Star };

export default function TiersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Tier Comparison</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Partnership Tiers
          </h1>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Choose from four sponsorship tiers, each offering different levels of access,
            visibility, and integration across the FBF ecosystem.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {TIERS.map(tier => {
              const Icon = TIER_ICONS[tier.id as keyof typeof TIER_ICONS];
              const serviceCount = SERVICE_CATALOG.filter(s =>
                s.tierAvailability[tier.id as keyof typeof s.tierAvailability]
              ).length;
              return (
                <div key={tier.id} className="bg-white border-2 rounded-2xl p-6 flex flex-col card-hover" style={{ borderColor: tier.borderColor }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: tier.bgColor }}>
                      <Icon className="w-6 h-6" style={{ color: tier.color }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold" style={{ color: tier.color }}>{tier.name}</h3>
                      <p className="text-xs text-muted-foreground">Min {tier.minServices} services</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      {serviceCount} Products Available
                    </p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(serviceCount / 14) * 100}%`, backgroundColor: tier.color }} />
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: tier.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Channel Coverage</p>
                    <div className="flex flex-wrap gap-1">
                      {tier.channelCoverage.map(ch => (
                        <span key={ch} className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: `${tier.color}30`, color: tier.color, backgroundColor: `${tier.color}08` }}>
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: `${tier.color}08`, border: `1px solid ${tier.color}15` }}>
                    <p className="text-lg font-serif font-bold" style={{ color: tier.color }}>
                      {tier.pricingRange}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Starting from KES {(tier.startingKES / 1000).toLocaleString()}K</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 italic">{tier.pricingNote}</p>
                  <Link href="/contact" className="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ background: tier.color }}>
                    Get {tier.name} Quote
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-foreground mb-6">Product Availability Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                  <th className="text-center py-3 px-3 font-semibold" style={{ color: "#6366F1" }}>Platinum</th>
                  <th className="text-center py-3 px-3 font-semibold" style={{ color: "#D4A832" }}>Gold</th>
                  <th className="text-center py-3 px-3 font-semibold" style={{ color: "#64748B" }}>Silver</th>
                  <th className="text-center py-3 px-3 font-semibold" style={{ color: "#B45309" }}>Bronze</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_CATALOG.map(service => (
                  <tr key={service.id} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium text-foreground">{service.name}</td>
                    {(["platinum", "gold", "silver", "bronze"] as const).map(tier => (
                      <td key={tier} className="text-center py-3 px-3">
                        {service.tierAvailability[tier] ? (
                          <Check className="w-4 h-4 mx-auto text-green-600" />
                        ) : (
                          <X className="w-4 h-4 mx-auto text-slate-300" />
                        )}
                      </td>
                    ))}
                    <td className="py-3 px-4">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        service.category === "existing" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {service.category === "existing" ? "CRM" : "New"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Not sure which tier fits?</h2>
          <p className="text-muted-foreground mb-6">
            Build a custom package with our configurator, or reach out and we'll recommend the perfect tier for your brand.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/configurator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "#D32F2F" }}>
              Build Custom Package <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-border text-foreground hover:bg-muted">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
