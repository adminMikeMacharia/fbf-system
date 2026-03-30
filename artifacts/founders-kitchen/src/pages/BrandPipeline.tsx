import React, { useState } from "react";
import {
  ShoppingBag,
  TrendingUp,
  Users,
  ArrowRight,
  Crown,
  Gem,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { TOP_BRANDS, SHOPPING_SUMMARY } from "@workspace/shopping-data";

type PipelineStatus = "not-contacted" | "pitched" | "in-discussion" | "confirmed";

interface BrandPartner {
  brand: string;
  totalSpend: number;
  itemCount: number;
  products: string[];
  categories: string[];
  tier: "diamond" | "platinum" | "content-owner";
  status: PipelineStatus;
  notes: string;
}

const PITCH_NOTES: Record<string, { tier: "diamond" | "platinum" | "content-owner"; notes: string }> = {
  "Dove": { tier: "diamond", notes: "Unilever brand — highest household spend. Natural fit for FK personal care segment. Potential for body care routine content integration." },
  "Farmers Choice": { tier: "diamond", notes: "Kenyan meat brand — direct ingredient placement for FK episodes. Every breakfast shoot could feature Farmers Choice bacon. Strong local brand story." },
  "Jik": { tier: "platinum", notes: "Reckitt brand — kitchen hygiene essential. Product placement in kitchen prep and cleanup sequences. 'Clean kitchen is a professional kitchen' messaging." },
  "Brookside": { tier: "diamond", notes: "Most frequently purchased brand (40 items). Butter and milk are essential cooking ingredients — natural product placement in every FK episode." },
  "Pick N Peel": { tier: "platinum", notes: "Kenyan juice brand — high-frequency purchase. Perfect for FK behind-the-scenes beverages and private dining table setting." },
  "Harpic": { tier: "content-owner", notes: "Reckitt brand — kitchen and home hygiene content segment ownership opportunity." },
  "Fay": { tier: "content-owner", notes: "Kitchen towels are essential production props — visible in every cooking scene. Behind-the-scenes content opportunity." },
  "Persil": { tier: "platinum", notes: "Henkel brand — home care premium positioning. Chef's apron care segment." },
  "Sunrice": { tier: "platinum", notes: "Rice is a staple in FK recipe episodes. Direct cooking ingredient placement — rice as the base for founder meals." },
  "Sensodyne": { tier: "content-owner", notes: "GSK brand — wellness and self-care content segment. Post-dinner dental care routine." },
  "Mortein": { tier: "content-owner", notes: "Reckitt brand — home environment quality. Tigoni House pest-free kitchen environment messaging." },
  "Royco": { tier: "platinum", notes: "Unilever brand — highest item count (28 cubes). Seasoning is used in every FK recipe. Most organic product placement opportunity." },
  "Bio Food": { tier: "platinum", notes: "Kenyan dairy brand — healthy breakfast and dessert ingredient. Recipe card co-branding opportunity." },
  "Supa Loaf": { tier: "content-owner", notes: "Most purchased single product by quantity (23 loaves). Breakfast prep scenes and artisan toast creations." },
  "Isinya": { tier: "platinum", notes: "Kenyan egg producer — essential cooking ingredient. Every breakfast and baking episode uses eggs." },
  "Pride": { tier: "content-owner", notes: "Kitchen cleaning essentials — post-cooking cleanup content segment ownership." },
  "Glade": { tier: "content-owner", notes: "SC Johnson brand — kitchen ambiance and home fragrance. Set dressing for FK filming days." },
  "Kericho Gold": { tier: "platinum", notes: "Premium Kenyan tea brand — cultural fit for FK's Kenyan identity. Tea service during founder conversations." },
  "Del Monte": { tier: "content-owner", notes: "International brand with local presence. Juice and condiment product placement." },
  "Tena": { tier: "content-owner", notes: "Household essential — behind-the-scenes home comfort branding." },
  "Dettol": { tier: "content-owner", notes: "Reckitt brand — kitchen hygiene and hand washing before food prep. Health-first messaging." },
  "Gofrut": { tier: "content-owner", notes: "Local juice brand — affordable alternative for volume beverage content." },
  "Mumias": { tier: "content-owner", notes: "Kenyan sugar brand — sweetening and baking ingredient. Local sourcing story." },
  "Velvex": { tier: "content-owner", notes: "Table setting essential — visible in every FK private dining event. Napkin branding opportunity." },
  "Festive": { tier: "content-owner", notes: "Tissue brand — household essential with steady purchase frequency." },
};

const BRAND_PARTNERS: BrandPartner[] = TOP_BRANDS.map(b => {
  const pitch = PITCH_NOTES[b.brand] || { tier: "content-owner" as const, notes: "Potential brand partnership based on real household consumption data." };
  return {
    ...b,
    tier: pitch.tier,
    status: "not-contacted" as PipelineStatus,
    notes: pitch.notes,
  };
});

const STATUS_CONFIG: Record<PipelineStatus, { label: string; color: string; bg: string; border: string }> = {
  "not-contacted": { label: "Not Contacted", color: "#6B7280", bg: "#F3F4F6", border: "#D1D5DB" },
  "pitched": { label: "Pitched", color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
  "in-discussion": { label: "In Discussion", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  "confirmed": { label: "Confirmed", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
};

const TIER_CONFIG = {
  diamond: { label: "Diamond Series Sponsor", icon: Gem, color: "#00827F" },
  platinum: { label: "Platinum Sponsor", icon: Star, color: "#8A5ABF" },
  "content-owner": { label: "Content Owner", icon: Crown, color: "#007FFF" },
};

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-[#F40009]" />
      <h2 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">{title}</h2>
    </div>
  );
}

export default function BrandPipeline() {
  const [partners, setPartners] = useState(BRAND_PARTNERS);
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  const [filterTier, setFilterTier] = useState<"all" | "diamond" | "platinum" | "content-owner">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | PipelineStatus>("all");

  const updateStatus = (brand: string, status: PipelineStatus) => {
    setPartners(prev => prev.map(p => p.brand === brand ? { ...p, status } : p));
  };

  const filtered = partners.filter(p => {
    if (filterTier !== "all" && p.tier !== filterTier) return false;
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    return true;
  });

  const totalBrandSpend = partners.reduce((s, p) => s + p.totalSpend, 0);
  const diamondCount = partners.filter(p => p.tier === "diamond").length;
  const platinumCount = partners.filter(p => p.tier === "platinum").length;
  const contentOwnerCount = partners.filter(p => p.tier === "content-owner").length;

  return (
    <section className="space-y-8">
      <div>
        <SectionHeader icon={ShoppingBag} title="Brand Engagement Pipeline" />
        <p className="text-sm text-muted-foreground mb-4">
          Real household consumption data from 15 Carrefour receipts (KES {(totalBrandSpend / 1000).toFixed(0)}K, {partners.length} brands) proves brand affinity.
          These are not hypothetical sponsorship targets — we already buy and use these products. FK sponsorship converts genuine consumption into brand partnerships.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <p className="text-2xl font-display font-bold text-foreground">{partners.length}</p>
          <p className="text-xs text-muted-foreground mt-1 font-label">Total Brands</p>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <p className="text-2xl font-display font-bold" style={{ color: "#00827F" }}>{diamondCount}</p>
          <p className="text-xs text-muted-foreground mt-1 font-label">Diamond Tier</p>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <p className="text-2xl font-display font-bold" style={{ color: "#8A5ABF" }}>{platinumCount}</p>
          <p className="text-xs text-muted-foreground mt-1 font-label">Platinum Tier</p>
        </div>
        <div className="bg-card border border-card-border rounded-xl p-4 text-center">
          <p className="text-2xl font-display font-bold" style={{ color: "#007FFF" }}>{contentOwnerCount}</p>
          <p className="text-xs text-muted-foreground mt-1 font-label">Content Owner</p>
        </div>
      </div>

      <div className="bg-[#003153]/5 border border-[#003153]/15 rounded-xl p-5">
        <h3 className="font-label text-base font-semibold text-foreground mb-3">Consumption Data Snapshot</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-xs text-muted-foreground font-body">Total Spend</p>
            <p className="font-label font-bold text-foreground">KES {Math.round(SHOPPING_SUMMARY.totalSpend / 1000)}K</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-body">Receipt Period</p>
            <p className="font-label font-bold text-foreground">{SHOPPING_SUMMARY.dateRange.from.slice(3)} – {SHOPPING_SUMMARY.dateRange.to.slice(3)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-body">Line Items</p>
            <p className="font-label font-bold text-foreground">{SHOPPING_SUMMARY.totalLineItems}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-body">Unique Products</p>
            <p className="font-label font-bold text-foreground">{SHOPPING_SUMMARY.uniqueProducts}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex gap-1">
          {[
            { id: "all" as const, label: "All Tiers" },
            { id: "diamond" as const, label: "Diamond" },
            { id: "platinum" as const, label: "Platinum" },
            { id: "content-owner" as const, label: "Content Owner" },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterTier(f.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterTier === f.id ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          {(["all", "not-contacted", "pitched", "in-discussion", "confirmed"] as const).map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterStatus === s ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {s === "all" ? "All Statuses" : STATUS_CONFIG[s].label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((partner, i) => {
          const tierCfg = TIER_CONFIG[partner.tier];
          const statusCfg = STATUS_CONFIG[partner.status];
          const TierIcon = tierCfg.icon;
          const isExpanded = expandedBrand === partner.brand;
          const maxSpend = partners[0].totalSpend;
          const spendPct = (partner.totalSpend / maxSpend) * 100;

          return (
            <div key={partner.brand} className="bg-card border border-card-border rounded-xl overflow-hidden">
              <div
                className="p-5 cursor-pointer"
                onClick={() => setExpandedBrand(isExpanded ? null : partner.brand)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0" style={{ backgroundColor: `${tierCfg.color}12`, border: `1px solid ${tierCfg.color}25` }}>
                    <TierIcon className="w-5 h-5" style={{ color: tierCfg.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs text-muted-foreground font-mono">#{i + 1}</span>
                      <h4 className="font-label text-base font-semibold text-foreground">{partner.brand}</h4>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${tierCfg.color}12`, color: tierCfg.color, border: `1px solid ${tierCfg.color}25` }}>
                        {tierCfg.label}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: statusCfg.bg, color: statusCfg.color, border: `1px solid ${statusCfg.border}` }}>
                        {statusCfg.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>KES {(partner.totalSpend / 1000).toFixed(1)}K spend</span>
                      <span>{partner.itemCount} items purchased</span>
                      <span>{partner.categories.join(", ")}</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${spendPct}%`, backgroundColor: tierCfg.color }} />
                    </div>
                  </div>
                  <div className="shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-border p-5 bg-muted/30 space-y-4">
                  <div>
                    <h5 className="text-xs font-semibold text-foreground mb-2">Sponsorship Notes</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{partner.notes}</p>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-foreground mb-2">Products Consumed ({partner.products.length})</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.products.map(p => (
                        <span key={p} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-foreground mb-2">Pitch Summary</h5>
                    <div className="bg-card border border-card-border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        <strong className="text-foreground">{partner.brand}</strong> is a genuine part of our household.
                        Over the past 12 months, we've spent <strong className="text-foreground">KES {partner.totalSpend.toLocaleString()}</strong> on
                        {" "}{partner.brand} products across <strong className="text-foreground">{partner.itemCount} purchases</strong>.
                        This isn't aspirational — it's proven consumption data.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        As a <strong className="text-foreground">{tierCfg.label}</strong> for Founders Kitchen,
                        {partner.brand} would benefit from natural product placement in cooking episodes, co-branded recipe cards,
                        social media reach across FK channels, and TV47 broadcast visibility.
                        The audience sees authentic use — not forced advertising.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold text-foreground mb-2">Update Status</h5>
                    <div className="flex gap-1.5 flex-wrap">
                      {(Object.keys(STATUS_CONFIG) as PipelineStatus[]).map(s => {
                        const cfg = STATUS_CONFIG[s];
                        const isActive = partner.status === s;
                        return (
                          <button
                            key={s}
                            onClick={(e) => { e.stopPropagation(); updateStatus(partner.brand, s); }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                              isActive ? "ring-2" : "opacity-60 hover:opacity-100"
                            }`}
                            style={{
                              backgroundColor: cfg.bg,
                              color: cfg.color,
                              border: `1px solid ${cfg.border}`,
                              ...(isActive ? { ringColor: cfg.color } : {}),
                            }}
                          >
                            {cfg.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
