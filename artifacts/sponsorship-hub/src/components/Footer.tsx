import { Link } from "wouter";
import { Sparkles, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#D32F2F" }}>
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">FBF Sponsorship Hub</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your gateway to partnership opportunities across Africa's premier founder storytelling ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Explore</h4>
            <div className="space-y-2">
              <Link href="/opportunities" className="block text-sm text-slate-400 hover:text-white transition-colors">Opportunities</Link>
              <Link href="/tiers" className="block text-sm text-slate-400 hover:text-white transition-colors">Tiers & Pricing</Link>
              <Link href="/configurator" className="block text-sm text-slate-400 hover:text-white transition-colors">Build Package</Link>
              <Link href="/impact" className="block text-sm text-slate-400 hover:text-white transition-colors">Impact Gallery</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Ecosystem</h4>
            <div className="space-y-2">
              <a href="https://foundersbattlefield.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors">
                Founders Battlefield <ExternalLink className="w-3 h-3" />
              </a>
              <Link href="/industries" className="block text-sm text-slate-400 hover:text-white transition-colors">Industry Targeting</Link>
              <Link href="/contact" className="block text-sm text-slate-400 hover:text-white transition-colors">Get Started</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Channels</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>TV47 Broadcast</p>
              <p>Radio47</p>
              <p>YouTube / Social Media</p>
              <p>Live Events</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            FBF Sponsorship Hub · Founders Battlefield · AFOS Ecosystem
          </p>
          <p className="text-xs text-slate-500">
            Cape Media is a broadcast partner, not the platform owner.
          </p>
        </div>
      </div>
    </footer>
  );
}
