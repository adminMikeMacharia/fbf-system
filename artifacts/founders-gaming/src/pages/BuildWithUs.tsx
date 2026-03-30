import { useState } from "react";
import { Diamond, Shield, Film, CreditCard, Send, CheckCircle, Users, Gamepad2, Code, Megaphone } from "lucide-react";

const sponsorTiers = [
  {
    icon: Diamond,
    tier: "Diamond",
    label: "Series Sponsor",
    price: "Flagship",
    color: "#00B4D8",
    benefits: [
      "Season naming rights",
      "Logo on all Arena broadcasts",
      "Exclusive investor access sessions",
      "Custom founder challenge branded in your name",
      "Priority access to portfolio deal flow",
      "Co-branded content with FBF",
    ],
    slots: "1 available",
  },
  {
    icon: Shield,
    tier: "Platinum",
    label: "Season Sponsor",
    price: "Premium",
    color: "#c0c0c0",
    benefits: [
      "Logo on Arena broadcasts and digital assets",
      "Branded bracket stage",
      "Quarterly reporting on portfolio progress",
      "Speaking slot at Grand Arena",
      "Access to founder pitch decks",
    ],
    slots: "3 available",
  },
  {
    icon: Film,
    tier: "Content",
    label: "Content Owner",
    price: "Strategic",
    color: "#F4A61D",
    benefits: [
      "Co-production rights for Arena content",
      "Documentary series access",
      "Podcast integration",
      "Social media cross-promotion",
      "White-label content licensing",
    ],
    slots: "2 available",
  },
  {
    icon: CreditCard,
    tier: "Payments",
    label: "Payments Partner",
    price: "Integration",
    color: "#06D6A0",
    benefits: [
      "Integration into FBF platform payments",
      "Co-branded prize distribution",
      "Access to founder financial data insights",
      "Featured in XP reward flow",
    ],
    slots: "1 available",
  },
];

const partnerTypes = [
  {
    icon: Code,
    title: "Gaming Studios & Developers",
    desc: "Help build the technical layer of Founders Gaming — from the pitch simulator to the mobile app. Bring your engineering expertise to an untapped market.",
    cta: "Co-build",
  },
  {
    icon: Gamepad2,
    title: "Esports Organizations",
    desc: "Bring your audience, production value, and competitive gaming playbook to the Founders Arena. We have the content, you bring the format.",
    cta: "Partner",
  },
  {
    icon: Megaphone,
    title: "Brands & Sponsors",
    desc: "Connect with Africa's most ambitious founders at the moment of their highest engagement — in competition. See sponsor tiers below.",
    cta: "Sponsor",
  },
  {
    icon: Users,
    title: "Accelerators & Communities",
    desc: "Integrate Founders Gaming into your ecosystem — use our XP and badge system as a layer on top of your programming.",
    cta: "Integrate",
  },
];

const interestAreas = [
  "Diamond Series Sponsor",
  "Platinum Season Sponsor",
  "Content Partner",
  "Payments Partner",
  "Game Development",
  "Esports Partnership",
  "Accelerator Integration",
  "Other / General Inquiry",
];

export default function BuildWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Founders Gaming — ${form.interest || "Partnership Inquiry"}`;
    const body = `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:gaming@foundersbattlefield.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#001428" }}>
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #001428 0%, #001830 50%, #001428 100%)",
        }}
      >
        <div className="absolute inset-0 hud-grid opacity-30" />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: "#0080FF" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-poppins font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(0, 128, 255, 0.1)",
              border: "1px solid rgba(0, 128, 255, 0.25)",
              color: "#0080FF",
            }}
          >
            <Users className="w-3 h-3" />
            Co-Development
          </div>
          <h1
            className="font-condensed font-black uppercase leading-none mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
            }}
          >
            Build{" "}
            <span style={{ color: "#0080FF", textShadow: "0 0 30px rgba(0, 128, 255, 0.5)" }}>
              With Us
            </span>
          </h1>
          <p className="font-inter text-lg max-w-2xl mx-auto" style={{ color: "rgba(210, 230, 245, 0.65)" }}>
            Founders Gaming is being built in the open. We're looking for gaming studios, esports orgs, developers, and brands who want to be part of Africa's boldest gaming initiative.
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-1 h-8 rounded"
              style={{ background: "#0080FF", boxShadow: "0 0 8px rgba(0, 128, 255, 0.6)" }}
            />
            <h2
              className="font-condensed font-black text-3xl uppercase"
              style={{ color: "#ffffff", letterSpacing: "0.04em" }}
            >
              Partner Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {partnerTypes.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-5 rounded"
                  style={{
                    background: "rgba(0, 30, 56, 0.7)",
                    border: "1px solid rgba(0, 49, 83, 0.5)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(0, 128, 255, 0.12)",
                        border: "1px solid rgba(0, 128, 255, 0.2)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#0080FF" }} />
                    </div>
                    <div>
                      <h3
                        className="font-condensed font-bold text-lg uppercase mb-1"
                        style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                      >
                        {p.title}
                      </h3>
                      <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(210, 230, 245, 0.55)" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-1 h-8 rounded"
              style={{ background: "#DC143C", boxShadow: "0 0 8px rgba(220, 20, 60, 0.6)" }}
            />
            <h2
              className="font-condensed font-black text-3xl uppercase"
              style={{ color: "#ffffff", letterSpacing: "0.04em" }}
            >
              Sponsor Tiers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {sponsorTiers.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.tier}
                  className="p-5 rounded relative overflow-hidden"
                  style={{
                    background: "rgba(0, 25, 50, 0.8)",
                    border: `1px solid ${t.color}25`,
                    borderTop: `3px solid ${t.color}`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${t.color}18`,
                        border: `1px solid ${t.color}35`,
                      }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: t.color }} />
                    </div>
                    <div>
                      <div
                        className="font-condensed font-black text-base uppercase tracking-widest leading-none"
                        style={{ color: t.color }}
                      >
                        {t.tier}
                      </div>
                      <div
                        className="font-poppins text-[10px] font-semibold tracking-wider uppercase"
                        style={{ color: "rgba(210, 230, 245, 0.4)" }}
                      >
                        {t.label}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {t.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: t.color }} />
                        <span className="font-inter text-xs leading-snug" style={{ color: "rgba(210, 230, 245, 0.6)" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="text-[10px] font-poppins font-semibold tracking-wider uppercase"
                    style={{ color: "rgba(210, 230, 245, 0.3)" }}
                  >
                    {t.slots}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8 rounded"
                  style={{ background: "#06D6A0", boxShadow: "0 0 8px rgba(6, 214, 160, 0.6)" }}
                />
                <h2
                  className="font-condensed font-black text-3xl uppercase"
                  style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                >
                  Get In Touch
                </h2>
              </div>

              {submitted ? (
                <div
                  className="p-8 rounded text-center"
                  style={{
                    background: "rgba(6, 214, 160, 0.08)",
                    border: "1px solid rgba(6, 214, 160, 0.25)",
                  }}
                >
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: "#06D6A0" }} />
                  <h3 className="font-condensed font-bold text-xl uppercase mb-2" style={{ color: "#ffffff" }}>
                    Message Sent
                  </h3>
                  <p className="font-inter text-sm" style={{ color: "rgba(210, 230, 245, 0.6)" }}>
                    We'll be in touch soon. The arena awaits.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "Amara Kone" },
                    { label: "Organization", key: "org", type: "text", placeholder: "Acme Gaming Studio" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "hello@acmegaming.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        className="block font-poppins text-xs font-semibold tracking-wider uppercase mb-1.5"
                        style={{ color: "rgba(210, 230, 245, 0.5)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded font-inter text-sm outline-none transition-all"
                        style={{
                          background: "rgba(0, 30, 56, 0.8)",
                          border: "1px solid rgba(0, 49, 83, 0.6)",
                          color: "#ffffff",
                        }}
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor = "rgba(0, 128, 255, 0.5)";
                          (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0, 128, 255, 0.08)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor = "rgba(0, 49, 83, 0.6)";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className="block font-poppins text-xs font-semibold tracking-wider uppercase mb-1.5"
                      style={{ color: "rgba(210, 230, 245, 0.5)" }}
                    >
                      Area of Interest
                    </label>
                    <select
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded font-inter text-sm outline-none transition-all"
                      style={{
                        background: "rgba(0, 30, 56, 0.8)",
                        border: "1px solid rgba(0, 49, 83, 0.6)",
                        color: form.interest ? "#ffffff" : "rgba(210, 230, 245, 0.35)",
                      }}
                    >
                      <option value="" disabled>Select interest area...</option>
                      {interestAreas.map((a) => (
                        <option key={a} value={a} style={{ background: "#001e38", color: "#ffffff" }}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block font-poppins text-xs font-semibold tracking-wider uppercase mb-1.5"
                      style={{ color: "rgba(210, 230, 245, 0.5)" }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your vision for this partnership..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded font-inter text-sm outline-none transition-all resize-none"
                      style={{
                        background: "rgba(0, 30, 56, 0.8)",
                        border: "1px solid rgba(0, 49, 83, 0.6)",
                        color: "#ffffff",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(0, 128, 255, 0.5)";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0, 128, 255, 0.08)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(0, 49, 83, 0.6)";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 font-condensed font-bold text-base tracking-widest uppercase rounded transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #DC143C, #A50021)",
                      color: "#ffffff",
                      boxShadow: "0 0 16px rgba(220, 20, 60, 0.35)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Send Partnership Inquiry
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8 rounded"
                  style={{ background: "#F4A61D" }}
                />
                <h2
                  className="font-condensed font-black text-3xl uppercase"
                  style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                >
                  Why Join?
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "First Mover Advantage",
                    desc: "Founders Gaming is in early ideation. Partners who join now shape the format, name key elements, and lock in foundational rates before the platform scales.",
                    icon: "⚡",
                  },
                  {
                    title: "Access to Africa's Best Founders",
                    desc: "FBF's network spans Kenya, Nigeria, South Africa, Ghana, Senegal, and growing. These are curated, vetted founders — not a cold database.",
                    icon: "🌍",
                  },
                  {
                    title: "Integrated, Not Interruptive",
                    desc: "Sponsorship is built into the game mechanics — your brand becomes part of the experience, not a banner above it. Founders see you as a supporter, not an advertiser.",
                    icon: "🎮",
                  },
                  {
                    title: "Content Rights & IP Sharing",
                    desc: "Content partners share in the IP of the Arena format. As the platform grows, your early participation becomes equity in the narrative.",
                    icon: "🎬",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded"
                    style={{
                      background: "rgba(0, 30, 56, 0.6)",
                      border: "1px solid rgba(0, 49, 83, 0.4)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h4
                          className="font-condensed font-bold text-base uppercase mb-1"
                          style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                        >
                          {item.title}
                        </h4>
                        <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(210, 230, 245, 0.55)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
