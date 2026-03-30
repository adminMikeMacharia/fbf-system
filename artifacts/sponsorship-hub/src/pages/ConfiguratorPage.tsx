import { useState, useMemo } from "react";
import { Link } from "wouter";
import {
  Check, ArrowRight, ShoppingCart, Trash2, Send, Info
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SERVICE_CATALOG } from "@/data/service-catalog";
import { RATE_CARD } from "@/data/tier-pricing";
import { formatKES, formatUSD } from "@/lib/utils";

export default function ConfiguratorPage() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [selectedOfferings, setSelectedOfferings] = useState<Map<string, Set<number>>>(new Map());

  function toggleService(id: string) {
    setSelectedServices(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        const offeringsCopy = new Map(selectedOfferings);
        offeringsCopy.delete(id);
        setSelectedOfferings(offeringsCopy);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function toggleOffering(serviceId: string, offeringIdx: number) {
    setSelectedOfferings(prev => {
      const next = new Map(prev);
      const current = next.get(serviceId) || new Set();
      const updated = new Set(current);
      if (updated.has(offeringIdx)) updated.delete(offeringIdx);
      else updated.add(offeringIdx);
      next.set(serviceId, updated);
      return next;
    });
  }

  const selectedCount = selectedServices.size;
  const suggestedTier = selectedCount >= 7 ? "Platinum" : selectedCount >= 5 ? "Gold" : selectedCount >= 3 ? "Silver" : selectedCount >= 1 ? "Bronze" : "None";
  const tierColor = suggestedTier === "Platinum" ? "#6366F1" : suggestedTier === "Gold" ? "#D4A832" : suggestedTier === "Silver" ? "#64748B" : suggestedTier === "Bronze" ? "#B45309" : "#94a3b8";

  const totalEstimate = useMemo(() => {
    let kes = 0;
    let usd = 0;
    selectedOfferings.forEach((indices, serviceId) => {
      const rateItem = RATE_CARD.find(r => r.serviceId === serviceId);
      if (rateItem) {
        indices.forEach(idx => {
          const offering = rateItem.offerings[idx];
          if (offering?.estimatedKES) kes += offering.estimatedKES;
          if (offering?.estimatedUSD) usd += offering.estimatedUSD;
        });
      }
    });
    return { kes, usd };
  }, [selectedOfferings]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Package Configurator</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Build Your Sponsorship Package
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Select products, choose specific offerings, and see your dynamic quote in real-time.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-lg font-serif font-bold text-foreground mb-2">Select Products</h2>
              {SERVICE_CATALOG.map(service => {
                const isSelected = selectedServices.has(service.id);
                const rateItem = RATE_CARD.find(r => r.serviceId === service.id);
                const serviceOfferings = selectedOfferings.get(service.id) || new Set();

                return (
                  <div key={service.id} className={`border rounded-xl overflow-hidden transition-all ${isSelected ? "border-primary bg-primary/5" : "border-border bg-white"}`}>
                    <div className="p-4 flex items-center gap-4 cursor-pointer" onClick={() => toggleService(service.id)}>
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-primary border-primary" : "border-border"
                      }`}>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${service.color}15` }}>
                        <ShoppingCart className="w-4 h-4" style={{ color: service.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-sm text-foreground">{service.name}</h3>
                          <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${
                            service.category === "existing" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          }`}>
                            {service.category === "existing" ? "CRM" : "New"}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{service.description}</p>
                      </div>
                      <div className="hidden sm:flex gap-1">
                        {service.channels.slice(0, 2).map(ch => (
                          <span key={ch} className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{ch}</span>
                        ))}
                      </div>
                    </div>

                    {isSelected && rateItem && (
                      <div className="border-t border-border/50 p-4 bg-white/50">
                        <p className="text-xs font-semibold text-foreground mb-2">Available Offerings</p>
                        <div className="space-y-2">
                          {rateItem.offerings.map((offering, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-3 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                                serviceOfferings.has(idx) ? "border-primary/30 bg-primary/5" : "border-border hover:bg-muted/50"
                              }`}
                              onClick={() => toggleOffering(service.id, idx)}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                serviceOfferings.has(idx) ? "bg-primary border-primary" : "border-border"
                              }`}>
                                {serviceOfferings.has(idx) && <Check className="w-3 h-3 text-white" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-foreground">{offering.name}</p>
                                <p className="text-[10px] text-muted-foreground">{offering.unit} · {offering.costDescription}</p>
                              </div>
                              <div className="text-right shrink-0">
                                {offering.estimatedKES && (
                                  <p className="text-xs font-semibold text-foreground">{formatKES(offering.estimatedKES)}</p>
                                )}
                                {offering.estimatedUSD && (
                                  <p className="text-xs font-semibold text-foreground">{formatUSD(offering.estimatedUSD)}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">Package Summary</h3>
                    <p className="text-xs text-muted-foreground">Your custom sponsorship package</p>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${tierColor}10`, border: `1.5px solid ${tierColor}25` }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${tierColor}20` }}>
                      <Info className="w-5 h-5" style={{ color: tierColor }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: tierColor }}>
                        {suggestedTier === "None" ? "Select Products" : `${suggestedTier} Tier`}
                      </p>
                      <p className="text-xs text-muted-foreground">{selectedCount} of 14 products selected</p>
                    </div>
                  </div>

                  {selectedCount > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Selected Products</p>
                      {Array.from(selectedServices).map(id => {
                        const service = SERVICE_CATALOG.find(s => s.id === id);
                        if (!service) return null;
                        return (
                          <div key={id} className="flex items-center justify-between py-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }} />
                              <span className="text-xs text-foreground">{service.shortName}</span>
                            </div>
                            <button onClick={() => toggleService(id)} className="text-muted-foreground hover:text-destructive">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {(totalEstimate.kes > 0 || totalEstimate.usd > 0) && (
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Estimated Quote</p>
                      {totalEstimate.kes > 0 && (
                        <p className="text-xl font-serif font-bold text-foreground">{formatKES(totalEstimate.kes)}</p>
                      )}
                      {totalEstimate.usd > 0 && (
                        <p className="text-xl font-serif font-bold text-foreground">{formatUSD(totalEstimate.usd)}</p>
                      )}
                      <p className="text-[10px] text-muted-foreground mt-1">Based on selected offerings. Final pricing varies.</p>
                    </div>
                  )}

                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white" style={{ background: selectedCount > 0 ? "#D32F2F" : "#94a3b8" }}>
                    <Send className="w-4 h-4" />
                    {selectedCount > 0 ? "Request This Package" : "Select Products First"}
                  </Link>
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
