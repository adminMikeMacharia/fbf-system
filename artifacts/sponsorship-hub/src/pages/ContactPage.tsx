import { useState } from "react";
import { Check, ArrowRight, Send, Building2, Mail, Phone, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SERVICE_CATALOG } from "@/data/service-catalog";
import { TIERS } from "@/data/tier-pricing";

const API_BASE = "/api";

const RELATIONSHIP_TYPES = ["Direct Brand", "Agency-Managed", "Investor", "Non-Profit / NGO", "Government / Parastatal"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    relationshipType: "",
    preferredTier: "",
    interestedProducts: [] as string[],
    message: "",
    budget: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleProduct(id: string) {
    setFormData(prev => ({
      ...prev,
      interestedProducts: prev.interestedProducts.includes(id)
        ? prev.interestedProducts.filter(p => p !== id)
        : [...prev.interestedProducts, id],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!formData.companyName.trim() || !formData.contactName.trim() || !formData.email.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const resp = await fetch(`${API_BASE}/sponsorship/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Something went wrong" }));
        throw new Error(err.error || `HTTP ${resp.status}`);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-foreground mb-3">Thank You!</h1>
          <p className="text-muted-foreground mb-6">
            Your sponsorship inquiry has been submitted. Our team will review your interest and reach out within 2 business days.
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ companyName: "", contactName: "", email: "", phone: "", relationshipType: "", preferredTier: "", interestedProducts: [], message: "", budget: "" }); }}
            className="px-5 py-2.5 rounded-xl text-sm font-medium border border-border hover:bg-muted"
          >
            Submit Another Inquiry
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="hero-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm mb-4 border border-white/10">
            <Sparkles className="w-4 h-4" />
            Sponsorship Inquiry
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Get Started
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Tell us about your brand and sponsorship interests. We'll match you to the perfect package.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-lg font-serif font-bold text-foreground mb-1">Sponsorship Inquiry Form</h2>
                <p className="text-sm text-muted-foreground mb-6">All fields marked * are required.</p>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Company / Brand Name *</label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Contact Person *</label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                        placeholder="Your full name"
                        value={formData.contactName}
                        onChange={e => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Relationship Type</label>
                      <select
                        className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                        value={formData.relationshipType}
                        onChange={e => setFormData(prev => ({ ...prev, relationshipType: e.target.value }))}
                      >
                        <option value="">Select type</option>
                        {RELATIONSHIP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Preferred Tier</label>
                      <select
                        className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                        value={formData.preferredTier}
                        onChange={e => setFormData(prev => ({ ...prev, preferredTier: e.target.value }))}
                      >
                        <option value="">Select tier (optional)</option>
                        {TIERS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Products of Interest</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICE_CATALOG.map(service => (
                        <div
                          key={service.id}
                          className={`flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                            formData.interestedProducts.includes(service.id) ? "border-primary/30 bg-primary/5" : "border-border hover:bg-muted/50"
                          }`}
                          onClick={() => toggleProduct(service.id)}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            formData.interestedProducts.includes(service.id) ? "bg-primary border-primary" : "border-border"
                          }`}>
                            {formData.interestedProducts.includes(service.id) && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-xs text-foreground">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Estimated Budget (optional)</label>
                    <input
                      className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background"
                      placeholder="e.g. KES 500,000 or USD 5,000"
                      value={formData.budget}
                      onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                    <textarea
                      className="w-full px-3 py-2.5 rounded-lg border border-input text-sm bg-background min-h-[100px]"
                      placeholder="Tell us about your sponsorship goals..."
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
                    style={{ background: "#D32F2F" }}
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-sm mb-4">What Happens Next</h3>
                {[
                  { step: 1, title: "Review", desc: "Our team reviews your inquiry within 24 hours" },
                  { step: 2, title: "Match", desc: "We match you to the right products and tier" },
                  { step: 3, title: "Propose", desc: "Custom proposal with pricing and timeline" },
                  { step: 4, title: "Activate", desc: "Onboarding and campaign launch" },
                ].map(s => (
                  <div key={s.step} className="flex items-start gap-3 mb-3 last:mb-0">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: s.step <= 2 ? "#D32F2F" : "#0f172a" }}>
                      {s.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-sm mb-3">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" /> sponsorship@foundersbattlefield.org
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" /> Founders Battlefield
                  </div>
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
