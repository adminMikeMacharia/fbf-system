import { Link } from "wouter";
import {
  Shield,
  TrendingUp,
  Eye,
  Users,
  ArrowRight,
  CheckCircle2,
  Target,
  Landmark,
  BookOpen,
  Sparkles,
} from "lucide-react";

const STEPS = [
  {
    icon: Eye,
    title: "Browse",
    description: "Explore curated ventures from the Founders Battlefield network. Each opportunity is vetted, structured, and governed before it reaches you.",
  },
  {
    icon: Target,
    title: "Commit",
    description: "Choose your investment size and instrument — equity, convertible loan, or revenue share. All terms are transparent and legally documented before capital moves.",
  },
  {
    icon: TrendingUp,
    title: "Track",
    description: "Monitor your portfolio in real-time. Milestone updates, financial reports, and governance compliance — all in one place.",
  },
];

const BACKERS = [
  { name: "Mike Macharia", role: "Founder · FBH Holdings", initials: "MM" },
  { name: "Founders Battlefield", role: "Ecosystem · Community", initials: "FB" },
  { name: "AFOS Atlas", role: "Legal Intelligence", initials: "AA" },
  { name: "Founders Kitchen", role: "Content · Network", initials: "FK" },
];

const GOVERNANCE_PROMISE = [
  "No capital disbursement without signed legal agreements",
  "All ventures must be registered legal entities",
  "Joint-signatory bank accounts required for investor funds",
  "Monthly financial reporting with standardized templates",
  "KYC verification on all founders before fundraising",
  "Independent legal review on all deal terms",
];

export default function FVCLanding() {
  return (
    <div className="min-h-screen bg-[#003153] text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}images/hero-venture-capital.png`} alt="African venture capital meeting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003153]/90 via-[#003153]/75 to-[#003153]/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#F40009] flex items-center justify-center shadow-md">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-label font-semibold tracking-[0.3em] text-[#F40009] uppercase">FBH Holdings · MachariaOS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-wide text-white max-w-3xl leading-tight uppercase">
            Founders Venture Capital
          </h1>
          <p className="text-lg sm:text-xl text-white/60 mt-4 max-w-2xl leading-relaxed font-body">
            A structured funding platform for African ventures — backed by battle-tested founders, governed by hard-earned lessons, and built for the friends, family, and allies who believe in what we're building.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/ventures" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F40009] text-white font-label font-semibold text-sm hover:bg-[#DC143C] transition-colors no-underline shadow-md">
              Browse Ventures <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/governance" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/80 font-label font-medium text-sm hover:border-white/40 hover:text-white transition-colors no-underline">
              Governance Framework
            </Link>
          </div>
        </div>
      </header>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wide">How It Works</h2>
            <p className="text-white/50 mt-2 text-sm font-label">Three steps. Full transparency. No surprises.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#F40009]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F40009]/10 border border-[#F40009]/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#F40009]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F40009] font-label">STEP {i + 1}</span>
                    <h3 className="font-label text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#002040]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-[#F40009]" />
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">The Governance Promise</h2>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6 font-body">
                FVC exists because informal funding doesn't work. We learned this the hard way — through WhatsApp groups, personal loans, and trust-based handshakes that lacked structure. Every rule in our governance framework comes from a real experience.
              </p>
              <div className="space-y-3">
                {GOVERNANCE_PROMISE.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F40009] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80 font-body">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/governance" className="inline-flex items-center gap-2 mt-6 text-sm text-[#F40009] hover:text-[#DC143C] transition-colors no-underline font-label">
                Read full governance framework <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#F40009]/8 to-transparent border border-[#F40009]/15 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-[#F40009]" />
                  <h3 className="font-label text-lg font-semibold text-white">Why FVC Exists</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4 font-body">
                  Kola Entertainment was our first informal investment — KSh 1.5M raised through family and friends, managed via a WhatsApp group. The event was a success (2,400 attendees), but the venture lost KSh 1.39M because of governance failures: unsigned agreements, no joint bank accounts, financial reports delayed, and new commitments made without investor approval.
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-4 font-body">
                  FVC is the answer. Every governance requirement exists because its absence caused real damage. Every reporting template exists because its absence caused real confusion.
                </p>
                <Link href="/ventures/kola" className="inline-flex items-center gap-2 text-sm text-[#F40009] hover:text-[#DC143C] transition-colors no-underline font-label">
                  Read the Kola Case Study <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#F40009]" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wide">Backed by Battle-Tested Founders</h2>
            </div>
            <p className="text-white/50 mt-2 text-sm max-w-lg mx-auto font-label">
              FVC is not a fund managed by outsiders. It's a platform built by founders who have lived the journey — and who are invested in the outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BACKERS.map((backer) => (
              <div key={backer.name} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-[#F40009]/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#F40009]/10 border border-[#F40009]/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-[#F40009] font-label">{backer.initials}</span>
                </div>
                <h4 className="font-label text-base font-semibold text-white">{backer.name}</h4>
                <p className="text-xs text-white/40 mt-1 font-label">{backer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#002040]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <Users className="w-6 h-6 text-[#F40009] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-wide">Ecosystem Connections</h2>
            <p className="text-white/50 mt-2 text-sm font-label">FVC operates within the MachariaOS ecosystem</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Founders Kitchen", desc: "Content platform featuring founder stories. FK guests become FVC deal flow — founders who tell their story on the show get introduced to the investor network.", tag: "CONTENT" },
              { name: "AFOS Atlas", desc: "Legal intelligence and case management. AFOS provides the legal DD framework, contract templates, and compliance monitoring for FVC-funded ventures.", tag: "LEGAL" },
              { name: "Founders Battlefield", desc: "The community backbone. FBF chapters across Africa surface ventures, provide mentorship, and create the trust network that FVC relies on.", tag: "COMMUNITY" },
            ].map((item) => (
              <div key={item.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#F40009]/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-label text-base font-semibold text-white">{item.name}</h4>
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#F40009]/10 text-[#F40009] border border-[#F40009]/20 font-label">{item.tag}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 bg-[#001830]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/30 font-label uppercase tracking-widest">Founders Venture Capital · FBH Holdings · MachariaOS · Showcase Phase</p>
          <p className="text-[10px] text-white/20 font-label mt-1 uppercase tracking-[0.2em]">A Founders Battlefield Initiative</p>
        </div>
      </footer>
    </div>
  );
}
