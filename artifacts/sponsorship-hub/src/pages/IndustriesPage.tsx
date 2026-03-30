import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Building2, Target, Globe, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LIVE_SHOW_INDUSTRIES } from "@/data/pipeline";

function useLiveIndustries() {
  const [liveIndustries, setLiveIndustries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fbf-proxy/industries")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.industries && Array.isArray(data.industries)) {
          setLiveIndustries(data.industries.map((i: { name?: string } | string) => typeof i === "string" ? i : i.name || "").filter(Boolean));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { liveIndustries, loading };
}

const GALA_MATRIX = [
  { industry: "Financial Services", opportunities: ["Award Category Sponsor", "Table Sponsorship", "Investor Networking"], relevance: "High" },
  { industry: "Technology & Innovation", opportunities: ["Innovation Award Sponsor", "Tech Demo Zone", "Startup Showcase"], relevance: "High" },
  { industry: "FMCG & Retail", opportunities: ["Product Sampling", "Gift Bag Partner", "Food & Beverage Sponsor"], relevance: "High" },
  { industry: "Healthcare & Wellness", opportunities: ["Wellness Award", "Health Partner", "Retreat Sponsor"], relevance: "Medium" },
  { industry: "Real Estate & Construction", opportunities: ["Venue Partner", "Property Showcase", "Development Sponsor"], relevance: "Medium" },
  { industry: "Media & Entertainment", opportunities: ["Broadcast Partner", "Content Sponsor", "Music Curation"], relevance: "High" },
  { industry: "Education & Training", opportunities: ["Masterclass Sponsor", "Workshop Partner", "Scholarship Fund"], relevance: "Medium" },
  { industry: "Agriculture & Agribusiness", opportunities: ["Farm-to-Table Sponsor", "Ingredient Partner", "Sustainability Award"], relevance: "Medium" },
  { industry: "Professional Services", opportunities: ["Advisory Partner", "Legal Sponsor", "HR Innovation Award"], relevance: "Low" },
  { industry: "Automotive & Transport", opportunities: ["VIP Transport Partner", "Test Drive Experience", "Fleet Sponsor"], relevance: "Low" },
];

const ADDITIONAL_INDUSTRIES = [
  "Artificial Intelligence & Machine Learning",
  "Blockchain & Digital Assets",
  "Clean Energy & Sustainability",
  "Creative Arts & Design",
  "E-Commerce & Digital Marketplaces",
  "Fashion & Textiles",
  "Food & Beverage Processing",
  "Hospitality & Tourism",
  "Insurance & Risk Management",
  "Logistics & Supply Chain",
  "Manufacturing & Industrials",
  "Mining & Natural Resources",
  "Non-Profit & Social Impact",
  "Pharmaceuticals & Biotech",
  "Sports & Fitness",
  "Telecommunications",
  "Urban Planning & Smart Cities",
  "Venture Capital & Private Equity",
  "Water & Sanitation",
  "Youth & Women Empowerment",
];

export default function IndustriesPage() {
  const { liveIndustries, loading: industriesLoading } = useLiveIndustries();

  const allIndustries = liveIndustries.length > 0
    ? [...new Set([...ADDITIONAL_INDUSTRIES, ...liveIndustries])].sort()
    : ADDITIONAL_INDUSTRIES;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Industry Matrix</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Industry-Specific Opportunities
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Find sponsorship opportunities tailored to your industry.
            From the Gala sponsorship matrix to 60+ industry categories from our platform.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Gala Industry Sponsorship Matrix</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Tailored sponsorship opportunities for the Arena Gala Dinner by industry sector.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Industry</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Opportunities</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Relevance</th>
                  <th className="text-center py-3 px-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {GALA_MATRIX.map(row => (
                  <tr key={row.industry} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="font-medium text-foreground">{row.industry}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {row.opportunities.map(o => (
                          <span key={o} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{o}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        row.relevance === "High" ? "bg-green-100 text-green-700" :
                        row.relevance === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-slate-100 text-slate-600"
                      }`}>
                        {row.relevance}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Link href="/contact" className="text-xs font-medium text-primary hover:underline">
                        Inquire
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-serif font-bold text-foreground">Live Show Industry Topics</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            12 monthly live events, each focused on a specific industry vertical.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {LIVE_SHOW_INDUSTRIES.map((industry, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-background border border-border rounded-xl card-hover">
                <span className="text-lg font-serif font-bold text-primary w-8 shrink-0 text-center">{i + 1}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{industry}</p>
                  <p className="text-[10px] text-muted-foreground">Monthly live event topic</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-serif font-bold text-foreground">Extended Industry Categories</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            {allIndustries.length}+ industry categories from the Founders Battlefield platform. Any industry can sponsor.
            {industriesLoading && <Loader2 className="w-3 h-3 inline ml-1 animate-spin" />}
          </p>
          <div className="flex flex-wrap gap-2">
            {allIndustries.map(ind => (
              <span key={ind} className="text-xs px-3 py-1.5 rounded-full bg-white border border-border text-foreground hover:bg-primary/5 hover:border-primary/20 transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-serif font-bold text-foreground mb-3">Don't see your industry?</h2>
          <p className="text-muted-foreground mb-6">
            We craft custom sponsorship packages for any industry. Tell us about your brand and we'll find the perfect fit.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "#D32F2F" }}>
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
