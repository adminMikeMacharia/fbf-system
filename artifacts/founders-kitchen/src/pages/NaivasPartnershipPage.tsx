import { useState } from "react";
import {
  ShoppingCart,
  Store,
  Egg,
  Handshake,
  Camera,
  QrCode,
  MapPin,
  Crown,
  Target,
  TrendingUp,
  ExternalLink,
  Receipt,
  BarChart3,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  CARREFOUR_RECEIPTS,
  CARREFOUR_BRAND_SUMMARY,
  CARREFOUR_SHOPPING_SUMMARY,
} from "@workspace/shopping-data";

const BASE = import.meta.env.BASE_URL || "/";
const img = (name: string) => `${BASE}images/studio-design/${name}`;

const BRAND_PLACEMENT_MAP = [
  { zone: "Cooking Wall — Ovens", brands: "Bosch / Miele", method: "Built-in to cabinetry. Always visible in hero shot. Used every episode.", camera: "HERO · EVERY EP", episodes: "10/10" },
  { zone: "Cooking Wall — Range", brands: "Smeg / Wolf (Professional 6-burner)", method: "Stone alcove surround. Pot rail above. Central to all cooking sequences.", camera: "COOKING · EVERY EP", episodes: "10/10" },
  { zone: "Fridge", brands: "Samsung / Haier / Smeg (TBC)", method: "Ingredient reveal on opening. Samsung: screen displays episode content.", camera: "REVEAL · INGREDIENT PULL", episodes: "10/10" },
  { zone: "The Island Surface", brands: "Episode hero brand — rotates", method: "Ingredients dressed on island per episode. In active use throughout cooking.", camera: "CLOSE-UP · PREP", episodes: "Rotation" },
  { zone: "Spice Shelf", brands: "Tropical Heat · Kasuku · Bidco · Blue Band · Menengai", method: "Permanent shelf display. Stone backsplash behind. Always lit. Always in frame.", camera: "BACKGROUND · ALWAYS", episodes: "10/10" },
  { zone: "Open Shelving", brands: "Luminarc — full range", method: "All glassware and serveware is Luminarc. Every plating and meal reveal shot includes this zone.", camera: "MEAL REVEAL · PLATING", episodes: "10/10" },
  { zone: "Counter Appliances", brands: "Midea blender · Mika kettle", method: "Placed on counter. Used 2–3 times per episode in prep sequences.", camera: "PREP SEQUENCE", episodes: "10/10" },
  { zone: "Grill Station", brands: "Kenchic · Festive · Bidco oil", method: "Products in active use at grill. Packaging on prep counter beside grill.", camera: "FLAME · DRAMATIC", episodes: "4–5 eps" },
  { zone: "Dining Table", brands: "Naivas \"Shop the Episode\" + Luminarc", method: "Finished meal on Luminarc. Naivas QR display card on table. Episode brand in centrepiece.", camera: "EPISODE CLOSE", episodes: "10/10" },
  { zone: "Driveway + Exterior", brands: "Naivas (subtle) + Episode partner", method: "Episode-branded welcome elements at threshold — a branded apron, a recipe card, flowers.", camera: "ARRIVAL · OPEN", episodes: "10/10" },
];

const NAIVAS_VALUE_PROPS = [
  {
    title: "Retail Anchor",
    detail: "Naivas stocks the majority of brands that feature in the kitchen. Every ingredient used on screen links directly to Naivas shelves nationwide.",
    icon: Store,
  },
  {
    title: "Shop the Episode",
    detail: "QR code on the dining table and Samsung fridge screen links viewers directly to a curated Naivas shopping list for each episode's recipes.",
    icon: QrCode,
  },
  {
    title: "National Distribution",
    detail: "Naivas' network across Kenya means every episode partner brand gets shelf-to-screen visibility in the same supermarket the viewer shops at.",
    icon: MapPin,
  },
  {
    title: "Presenting Partner",
    detail: "Naivas as the static presenting partner of the series — the brand that frames every episode, every season, every piece of content.",
    icon: Crown,
  },
];

const ISINYA_STORY = {
  company: "Isinya Feeds Limited",
  role: "Episode Product Partner",
  tier: "Platinum",
  description: "One of Kenya's largest integrated poultry companies. 40 years building a Kenyan agricultural institution from Kajiado into a national brand.",
  products: "Isinya Eggs — table eggs sold across Naivas network",
  integration: "Eggs are foundational to virtually every cooking tradition in Kenya. Scrambled, fried, baked, whisked into sauces, folded into pastry — eggs appear in more cooking contexts than almost any other single ingredient. Isinya Eggs, already trusted by Kenyan consumers and stocked across Naivas stores, are a natural, unforced presence in every Founders Kitchen episode.",
  threeWay: "Isinya Feeds as a trusted Naivas supplier and Episode Product Partner; Naivas as the retail anchor and presenting partner of the series; and Founders Kitchen as the content platform that brings both brands into the living rooms and phone screens of Kenya's most influential consumers. Isinya's eggs are on Naivas shelves. Naivas shelves are in Founders Kitchen. The circle is complete.",
  letter: {
    ref: "IFL/2026/FK/001",
    date: "15 March 2026",
    from: "Devan Jobanputra, Chief Operations Officer",
    to: "Andreas von Paleske, CEO — Naivas Supermarkets",
    cc: "Michael Macharia, Founder & Host — Founders' Battlefield",
  },
};

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-orange-400" />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
  );
}

function CarrefourSection() {
  const [expandedReceipt, setExpandedReceipt] = useState<string | null>(null);
  const topBrands = CARREFOUR_BRAND_SUMMARY.slice(0, 20);
  const maxSpend = topBrands[0]?.totalSpend || 1;

  const fkOverlapBrands = [
    "Dove", "Farmers Choice", "Brookside", "Jik", "Pick N Peel", "Harpic",
    "Fay", "Persil", "Sunrice", "Sensodyne", "Royco", "Isinya", "Kericho Gold",
    "Tropical Heat", "Festive", "Kenchic", "Cadbury", "Zesta", "Pembe", "Mumias",
    "Velvex", "Tena", "Gofrut", "Del Monte", "Glade", "Mortein", "Downy", "Colgate",
  ];

  const overlapCount = topBrands.filter(b => fkOverlapBrands.includes(b.brand)).length;

  return (
    <section>
      <SectionHeader icon={Store} title="Carrefour — Alternative Retail Sponsor" />

      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <span className="text-white font-black text-sm">CF</span>
          </div>
          <div>
            <h3 className="text-white font-bold">Carrefour Kenya (Majid Al Futtaim)</h3>
            <span className="text-blue-400/80 text-xs">Potential Presenting Partner — Competitive Alternative</span>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Carrefour Kenya operates as a premium hypermarket chain under Majid Al Futtaim, with locations across Nairobi's key malls — The Hub Karen, Two Rivers, Sarit Centre, Village Market, The Junction. Their brand ecosystem overlaps significantly with FK's target product partners, and their premium positioning aligns with FK's production values.
        </p>

        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-white">{CARREFOUR_SHOPPING_SUMMARY.totalReceipts}</p>
            <p className="text-white/50 text-xs mt-1">Receipts Scanned</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-blue-400">KES {(CARREFOUR_SHOPPING_SUMMARY.totalSpend / 1000).toFixed(0)}K</p>
            <p className="text-white/50 text-xs mt-1">Total Spend</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-white">{CARREFOUR_SHOPPING_SUMMARY.totalLineItems}</p>
            <p className="text-white/50 text-xs mt-1">Line Items</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-green-400">{overlapCount}/{topBrands.length}</p>
            <p className="text-white/50 text-xs mt-1">FK Brand Overlap</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h4 className="text-blue-400 text-xs font-bold mb-2">Strategic Value</h4>
            <ul className="space-y-1.5">
              <li className="text-white/60 text-xs flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span> Premium brand positioning matches FK production quality</li>
              <li className="text-white/60 text-xs flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span> International Carrefour brand adds global credibility to FK partnership deck</li>
              <li className="text-white/60 text-xs flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span> Karen location (The Hub) — proximity to FK studio location search area</li>
              <li className="text-white/60 text-xs flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span> Same "Shop the Episode" QR mechanic applies — scan, shop, cook</li>
              <li className="text-white/60 text-xs flex items-start gap-1.5"><span className="text-blue-400 mt-0.5">•</span> {CARREFOUR_SHOPPING_SUMMARY.totalReceipts} real household receipts confirm FK's brand universe matches what families actually buy</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h4 className="text-blue-400 text-xs font-bold mb-2">Negotiation Leverage</h4>
            <p className="text-white/60 text-xs leading-relaxed mb-3">
              Having both Naivas and Carrefour as viable presenting partners creates competitive tension. The message to both:
            </p>
            <p className="text-white/80 text-xs italic leading-relaxed">
              "Whichever retailer partners with FK gets exclusive shelf-to-screen visibility for every brand in their stores. The other one watches from the sideline while 10 episodes, Netflix Africa distribution, and a national audience drives traffic to a competitor."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
        <h3 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-400" /> Top Brands by Spend — From Real Carrefour Receipts
        </h3>
        <p className="text-white/40 text-xs mb-4">{CARREFOUR_SHOPPING_SUMMARY.dateRange.from} — {CARREFOUR_SHOPPING_SUMMARY.dateRange.to} · {CARREFOUR_SHOPPING_SUMMARY.totalReceipts} orders · KES {CARREFOUR_SHOPPING_SUMMARY.totalSpend.toLocaleString()}</p>
        <div className="space-y-2">
          {topBrands.map((brand) => {
            const isOverlap = fkOverlapBrands.includes(brand.brand);
            const pct = (brand.totalSpend / maxSpend) * 100;
            return (
              <div key={brand.brand} className="group">
                <div className="flex items-center gap-3">
                  <div className="w-28 flex-shrink-0 text-right">
                    <span className={`text-xs font-medium ${isOverlap ? "text-blue-400" : "text-white/60"}`}>
                      {brand.brand}
                    </span>
                  </div>
                  <div className="flex-1 h-5 bg-white/5 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full rounded-full transition-all ${isOverlap ? "bg-gradient-to-r from-blue-600 to-blue-400" : "bg-white/20"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="text-white/60 text-[10px] font-mono">KES {brand.totalSpend.toLocaleString()}</span>
                  </div>
                  {isOverlap && (
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-medium flex-shrink-0">FK</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-white/30 text-[10px] mt-4">
          <span className="text-blue-400">■</span> = Brand appears in FK product placement map · 
          <span className="text-white/40">■</span> = Other household brands
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
          <Receipt className="w-4 h-4 text-blue-400" /> Receipt Ledger — {CARREFOUR_RECEIPTS.length} Orders
        </h3>
        <div className="space-y-2">
          {CARREFOUR_RECEIPTS.map((receipt) => {
            const isExpanded = expandedReceipt === receipt.invoiceNo;
            return (
              <div key={receipt.invoiceNo} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedReceipt(isExpanded ? null : receipt.invoiceNo)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-xs font-mono">#{receipt.invoiceNo}</span>
                    <span className="text-white text-xs font-medium">{receipt.date}</span>
                    <span className="text-white/50 text-xs">{receipt.store}</span>
                    <span className="text-white/40 text-[10px]">{receipt.items.length} items</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xs font-bold font-mono">KES {receipt.total.toLocaleString()}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3 text-white/40" /> : <ChevronDown className="w-3 h-3 text-white/40" />}
                  </div>
                </button>
                {isExpanded && (
                  <div className="border-t border-white/5 px-4 py-3">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/5">
                          <th className="py-1 text-[10px] text-white/40 uppercase">Product</th>
                          <th className="py-1 text-[10px] text-white/40 uppercase">Brand</th>
                          <th className="py-1 text-[10px] text-white/40 uppercase text-center">Qty</th>
                          <th className="py-1 text-[10px] text-white/40 uppercase text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {receipt.items.map((item, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0">
                            <td className="py-1.5 text-white/70 text-[11px]">{item.product}</td>
                            <td className="py-1.5 text-xs">
                              <span className={fkOverlapBrands.includes(item.brand) ? "text-blue-400" : "text-white/50"}>
                                {item.brand}
                              </span>
                            </td>
                            <td className="py-1.5 text-white/50 text-[11px] text-center">{item.qty}</td>
                            <td className="py-1.5 text-white/60 text-[11px] text-right font-mono">
                              {item.lineTotal.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function NaivasPartnershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#0d0d0d] to-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">

        <header className="text-center space-y-4 py-8">
          <p className="text-orange-400/80 text-xs tracking-[0.2em] uppercase font-medium">Founders Kitchen · Brand Strategy</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Naivas Partnership</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Brand placement strategy, the Naivas–Isinya three-way alignment, and the "Shop the Episode" commercial mechanic
          </p>
        </header>

        <section>
          <SectionHeader icon={Store} title="The Naivas Model" />
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-6">
            <img src={img("naivas-brands.jpg")} alt="Naivas Home of Deals — brand partners" className="w-full object-contain" />
          </div>
          <p className="text-white/60 text-sm mb-6">
            Naivas — Kenya's largest supermarket chain — is the natural retail anchor for Founders Kitchen. Their "Home of Deals" brand ecosystem includes every major FMCG brand that would appear naturally in the FK kitchen. The model is simple: every ingredient used on screen is available on Naivas shelves. Viewers can shop the episode.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {NAIVAS_VALUE_PROPS.map((prop) => {
              const Icon = prop.icon;
              return (
                <div key={prop.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-400/30 transition-colors">
                  <Icon className="w-5 h-5 text-orange-400 mb-3" />
                  <h3 className="text-white font-bold text-sm mb-2">{prop.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{prop.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionHeader icon={Camera} title="Product Placement Map" />
          <p className="text-white/60 text-sm mb-6">Every brand. Every zone. Every camera moment. Architectural — not promotional.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-xs font-bold text-amber-400 uppercase tracking-wider">Zone</th>
                  <th className="px-4 py-3 text-xs font-bold text-amber-400 uppercase tracking-wider">Brand(s)</th>
                  <th className="px-4 py-3 text-xs font-bold text-amber-400 uppercase tracking-wider hidden md:table-cell">Method</th>
                  <th className="px-4 py-3 text-xs font-bold text-amber-400 uppercase tracking-wider">Camera</th>
                  <th className="px-4 py-3 text-xs font-bold text-amber-400 uppercase tracking-wider text-center">Eps</th>
                </tr>
              </thead>
              <tbody>
                {BRAND_PLACEMENT_MAP.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white font-medium text-xs">{row.zone}</td>
                    <td className="px-4 py-3 text-white/70 text-xs">{row.brands}</td>
                    <td className="px-4 py-3 text-white/50 text-xs hidden md:table-cell">{row.method}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-medium whitespace-nowrap">{row.camera}</span>
                    </td>
                    <td className="px-4 py-3 text-white/70 text-xs text-center font-mono">{row.episodes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <SectionHeader icon={Egg} title="Isinya Feeds — Episode Product Partner" />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                    <span className="text-white font-black text-lg">IF</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{ISINYA_STORY.company}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-medium">{ISINYA_STORY.tier}</span>
                      <span className="text-white/50 text-xs">{ISINYA_STORY.role}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{ISINYA_STORY.description}</p>
                <p className="text-white/60 text-sm leading-relaxed">{ISINYA_STORY.integration}</p>
              </div>
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-orange-400 font-bold text-sm mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Three-Way Alignment
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{ISINYA_STORY.threeWay}</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-amber-400" /> Partnership Letter
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Reference</p>
                  <p className="text-white/80 text-xs font-mono">{ISINYA_STORY.letter.ref}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Date</p>
                  <p className="text-white/80 text-xs">{ISINYA_STORY.letter.date}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">From</p>
                  <p className="text-white/80 text-xs">{ISINYA_STORY.letter.from}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">To</p>
                  <p className="text-white/80 text-xs">{ISINYA_STORY.letter.to}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">CC</p>
                  <p className="text-white/80 text-xs">{ISINYA_STORY.letter.cc}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/50 text-[10px] leading-relaxed">
                  The ask: 30 minutes with Andreas — alongside Michael Macharia — to present the FK concept, the Isinya partnership proposition, and how Naivas might anchor this initiative as presenting partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CarrefourSection />

        <section>
          <SectionHeader icon={TrendingUp} title="Commercial Model" />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Presenting Partner</p>
              <p className="text-white font-black text-xl">Naivas</p>
              <p className="text-white/50 text-xs mt-2">Static branding across all 10 episodes. "Shop the Episode" QR mechanic. Retail anchor for all product partners.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Episode Product Partners</p>
              <p className="text-white font-black text-xl">Rotating</p>
              <p className="text-white/50 text-xs mt-2">Isinya, Farmers Choice, Brookside, Kenchic, and more — brands that appear as natural cooking ingredients per episode.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Category Sponsors</p>
              <p className="text-white font-black text-xl">Appliances</p>
              <p className="text-white/50 text-xs mt-2">Samsung/Haier (fridge), Bosch/Miele (ovens), Luminarc (serveware) — permanent set fixtures with seasonal partnership value.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
            <h3 className="text-white font-bold text-sm mb-3">The Founders Kitchen Proposition</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Founders Kitchen is being developed for Netflix Africa and Showmax as primary distribution platforms, with parallel release across YouTube and all Founders' Battlefield social channels. The production will be filmed at a permanent, purpose-built studio — an owned asset.
                </p>
              </div>
              <div>
                <p className="text-white/60 text-xs leading-relaxed">
                  The platform already has: 15 podcast episodes live across Spotify, Apple, YouTube; 4 episodes on TV47 broadcast; The Arena Live flagship events; a weekly Business Daily Africa column; and a growing community of African founders, investors, and business leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
