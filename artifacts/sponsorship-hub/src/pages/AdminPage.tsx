import { useState } from "react";
import {
  Target, EyeOff, ChevronDown, ChevronUp, Shield, Loader2, UtensilsCrossed
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TARGET_PIPELINE, BSE_AGENTS } from "@/data/pipeline";

const FK_BRAND_PIPELINE = [
  { brand: "Dove", tier: "diamond", notes: "Unilever brand — highest household spend. Natural fit for FK personal care segment." },
  { brand: "Farmers Choice", tier: "diamond", notes: "Kenyan meat brand — direct ingredient placement for FK episodes." },
  { brand: "Brookside", tier: "diamond", notes: "Most frequently purchased brand (40 items). Butter and milk are essential cooking ingredients." },
  { brand: "Jik", tier: "platinum", notes: "Reckitt brand — kitchen hygiene essential." },
  { brand: "Pick N Peel", tier: "platinum", notes: "Kenyan juice brand — high-frequency purchase." },
  { brand: "Royco", tier: "platinum", notes: "Unilever brand — highest item count (28 cubes). Seasoning used in every FK recipe." },
  { brand: "Kericho Gold", tier: "platinum", notes: "Premium Kenyan tea brand — cultural fit for FK's Kenyan identity." },
  { brand: "Isinya", tier: "platinum", notes: "Kenyan egg producer — essential cooking ingredient." },
  { brand: "Sunrice", tier: "platinum", notes: "Rice is a staple in FK recipe episodes." },
  { brand: "Bio Food", tier: "platinum", notes: "Kenyan dairy brand — healthy breakfast and dessert ingredient." },
  { brand: "Harpic", tier: "content-owner", notes: "Reckitt brand — kitchen and home hygiene content segment ownership." },
  { brand: "Fay", tier: "content-owner", notes: "Kitchen towels are essential production props." },
  { brand: "Supa Loaf", tier: "content-owner", notes: "Most purchased single product by quantity (23 loaves)." },
  { brand: "Dettol", tier: "content-owner", notes: "Reckitt brand — kitchen hygiene and hand washing before food prep." },
  { brand: "Del Monte", tier: "content-owner", notes: "International brand with local presence. Juice and condiment product placement." },
];

const FK_TIER_COLORS: Record<string, string> = {
  diamond: "#0EA5E9",
  platinum: "#64748B",
  "content-owner": "#D4A832",
};

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined)
  ? `${(import.meta.env.VITE_API_BASE as string).replace(/\/$/, "")}/api`
  : "/api";

export default function AdminPage() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [filterBSE, setFilterBSE] = useState<string>("all");
  const [filterType, setFilterType] = useState<"all" | "bullseye" | "runrate">("all");
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  async function verifyPin() {
    if (!pin.trim()) return;
    setVerifying(true);
    setPinError("");
    try {
      const resp = await fetch(`${API_BASE}/sponsorship/admin/verify-pin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      if (resp.ok) {
        setShowAdmin(true);
      } else {
        setPinError("Invalid PIN. Please try again.");
      }
    } catch {
      setPinError("Unable to verify PIN. Please try again.");
    } finally {
      setVerifying(false);
    }
  }

  if (!showAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-xl font-serif font-bold text-foreground mb-2">Admin Pipeline View</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Internal view for the CML sales pipeline. Enter the admin PIN to access.
          </p>
          <form onSubmit={e => { e.preventDefault(); verifyPin(); }} className="flex gap-2 justify-center">
            <input
              type="password"
              placeholder="Admin PIN"
              className="px-4 py-2.5 rounded-lg border border-input text-sm bg-background w-40"
              value={pin}
              onChange={e => { setPin(e.target.value); setPinError(""); }}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={verifying || !pin.trim()}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white disabled:opacity-50 flex items-center gap-2"
              style={{ background: "#D32F2F" }}
            >
              {verifying && <Loader2 className="w-3 h-3 animate-spin" />}
              Access
            </button>
          </form>
          {pinError && (
            <p className="text-xs text-red-600 mt-3">{pinError}</p>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  const filtered = TARGET_PIPELINE.filter(t => {
    if (filterBSE !== "all" && t.bse !== filterBSE) return false;
    if (filterType === "bullseye" && !t.bullsEye) return false;
    if (filterType === "runrate" && !t.runrate) return false;
    return true;
  });

  const bseCounts = BSE_AGENTS.map(bse => ({
    name: bse,
    total: TARGET_PIPELINE.filter(t => t.bse === bse).length,
    bullsEye: TARGET_PIPELINE.filter(t => t.bse === bse && t.bullsEye).length,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-1">Admin View</p>
            <h1 className="text-2xl font-serif font-bold text-white">Target Client Pipeline</h1>
            <p className="text-sm text-slate-400">CML Sales Pipeline — BSE Assignments</p>
          </div>
          <button onClick={() => { setShowAdmin(false); setPin(""); }} className="flex items-center gap-1 text-xs text-slate-400 hover:text-white">
            <EyeOff className="w-3 h-3" /> Lock
          </button>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {bseCounts.map(bse => (
              <div
                key={bse.name}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  filterBSE === bse.name ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/30"
                }`}
                onClick={() => setFilterBSE(filterBSE === bse.name ? "all" : bse.name)}
              >
                <p className="text-xs font-semibold text-foreground truncate">{bse.name.split(" ")[0]}</p>
                <p className="text-lg font-serif font-bold text-foreground">{bse.total}</p>
                <p className="text-[10px] text-muted-foreground">{bse.bullsEye} bulls-eye</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground">Type:</span>
            {([["all", "All"], ["bullseye", "Bulls-Eye"], ["runrate", "Run-rate"]] as const).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setFilterType(id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                  filterType === id ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {label}
              </button>
            ))}
            <span className="text-xs text-muted-foreground ml-auto">{filtered.length} targets</span>
          </div>

          <div className="space-y-2">
            {filtered.map((target, i) => {
              const isExpanded = expandedCompany === target.company;
              return (
                <div key={`${target.bse}-${target.company}`} className="bg-white border border-border rounded-xl overflow-hidden">
                  <div className="p-4 flex items-center gap-4 cursor-pointer" onClick={() => setExpandedCompany(isExpanded ? null : target.company)}>
                    <span className="text-xs text-muted-foreground font-mono w-5 shrink-0">#{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-sm text-foreground">{target.company}</h4>
                        {target.bullsEye && (
                          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                            <Target className="w-2.5 h-2.5 inline mr-0.5" /> Bulls-Eye
                          </span>
                        )}
                        {target.runrate && (
                          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                            Run-rate
                          </span>
                        )}
                        {target.relationshipType && (
                          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                            {target.relationshipType}
                          </span>
                        )}
                        {target.thirdParty && (
                          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                            via {target.thirdParty}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">BSE: {target.bse}</p>
                    </div>
                    <div className="shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="border-t border-border p-4 bg-muted/20">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">Pipeline Status</p>
                          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                            {target.status}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">Assigned BSE</p>
                          <p className="text-sm text-foreground">{target.bse}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <UtensilsCrossed className="w-5 h-5 text-primary" />
            <div>
              <h2 className="text-lg font-serif font-bold text-foreground">Founders' Kitchen — Brand Pipeline</h2>
              <p className="text-xs text-muted-foreground">FK-specific brand targets from household purchase data</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FK_BRAND_PIPELINE.map(b => (
              <div key={b.brand} className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm text-foreground">{b.brand}</h4>
                  <span
                    className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: FK_TIER_COLORS[b.tier] || "#999" }}
                  >
                    {b.tier}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
