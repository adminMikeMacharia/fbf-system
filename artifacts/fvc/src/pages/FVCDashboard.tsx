import { useState } from "react";
import { Link } from "wouter";
import {
  TrendingUp,
  Wallet,
  Target,
  Bell,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import { PORTFOLIO, NOTIFICATIONS } from "../data/portfolio";

function formatCurrency(amount: number) {
  if (amount >= 1000000) return `KSh ${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `KSh ${(amount / 1000).toFixed(0)}K`;
  return `KSh ${amount.toLocaleString()}`;
}

export default function FVCDashboard() {
  const totalInvested = PORTFOLIO.reduce((s, p) => s + p.invested, 0);
  const totalCurrentValue = PORTFOLIO.reduce((s, p) => s + p.currentValue, 0);
  const overallReturn = totalInvested > 0 ? ((totalCurrentValue - totalInvested) / totalInvested) * 100 : 0;
  const activeVentures = PORTFOLIO.filter((p) => p.status === "Active").length;

  return (
    <div className="min-h-screen bg-[#003153] text-white">
      <header className="border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-medium tracking-[0.3em] text-[#F40009] uppercase mb-1">Investor Portal</p>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-white">Investor Dashboard</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Your FVC portfolio at a glance — ventures funded, capital deployed, milestone progress, and notifications.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Wallet} label="Total Invested" value={formatCurrency(totalInvested)} sub={`${PORTFOLIO.length} ventures`} color="text-[#F40009]" />
          <StatCard icon={TrendingUp} label="Current Value" value={formatCurrency(totalCurrentValue)} sub={`${overallReturn >= 0 ? "+" : ""}${overallReturn.toFixed(1)}% return`} color={overallReturn >= 0 ? "text-green-400" : "text-red-400"} />
          <StatCard icon={Target} label="Active Ventures" value={String(activeVentures)} sub={`of ${PORTFOLIO.length} total`} color="text-blue-400" />
          <StatCard icon={Bell} label="Pending Actions" value={String(NOTIFICATIONS.filter((n) => n.type === "critical" || n.type === "warning").length)} sub="require attention" color="text-red-400" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-[#F40009]" />
              <h2 className="font-display text-xl font-semibold text-white">Portfolio</h2>
            </div>
            {PORTFOLIO.map((p) => {
              const mPct = p.milestones.total > 0 ? Math.round((p.milestones.completed / p.milestones.total) * 100) : 0;
              return (
                <Link key={p.id} href={`/ventures/${p.id}`} className="block no-underline">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-[#F40009]/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-base font-semibold text-white">{p.venture}</h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${p.status === "In Default" ? "bg-red-900/50 text-red-300" : "bg-green-900/50 text-green-300"}`}>
                            {p.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-1">
                          <span>{p.instrument}</span>
                          <span>Stage: {p.stage}</span>
                          <span>Last update: {p.lastUpdate}</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-lg font-bold text-[#F40009]">{formatCurrency(p.invested)}</div>
                        <div className={`text-xs font-medium ${p.returnRate >= 0 ? "text-green-400" : "text-red-400"}`}>
                          {p.returnRate >= 0 ? "+" : ""}{p.returnRate}% return
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-800/50">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Milestones: {p.milestones.completed}/{p.milestones.total}</span>
                        <span className="text-xs text-gray-500">{mPct}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#F40009] transition-all" style={{ width: `${mPct}%` }} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            <div className="bg-gray-900/30 border border-dashed border-gray-700 rounded-xl p-6 text-center">
              <Activity className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500 mb-2">New investment opportunities available</p>
              <Link href="/ventures" className="inline-flex items-center gap-1 text-sm text-[#F40009] hover:text-[#F40009]/80 no-underline">
                Browse Ventures <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-[#F40009]" />
              <h2 className="font-display text-lg font-semibold text-white">Notifications</h2>
            </div>
            <div className="space-y-2">
              {NOTIFICATIONS.map((n, i) => (
                <Link key={i} href={`/ventures/${n.venture}`} className="block no-underline">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-gray-700 transition-colors">
                    <div className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.type === "critical" ? "bg-red-400" : n.type === "warning" ? "bg-amber-400" : n.type === "positive" ? "bg-green-400" : "bg-blue-400"}`} />
                      <div>
                        <p className="text-xs text-gray-400 leading-relaxed">{n.message}</p>
                        <span className="text-[10px] text-gray-600 mt-1 block">{n.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-[#F40009]" />
            <h2 className="font-display text-xl font-semibold text-white">Investment Summary</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">By Instrument</div>
              <div className="space-y-2 mt-3">
                {["Convertible Loan", "Revenue Share", "Equity (SAFE Note)"].map((inst) => {
                  const total = PORTFOLIO.filter((p) => p.instrument === inst).reduce((s, p) => s + p.invested, 0);
                  const pct = totalInvested > 0 ? Math.round((total / totalInvested) * 100) : 0;
                  return total > 0 ? (
                    <div key={inst}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">{inst}</span>
                        <span className="text-white">{pct}%</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#F40009]" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">By Status</div>
              <div className="space-y-2 mt-3">
                <StatusRow label="Active" count={PORTFOLIO.filter((p) => p.status === "Active").length} color="bg-green-400" />
                <StatusRow label="In Default" count={PORTFOLIO.filter((p) => p.status === "In Default").length} color="bg-red-400" />
              </div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">Milestone Progress</div>
              <div className="space-y-2 mt-3">
                {PORTFOLIO.map((p) => (
                  <div key={p.id}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 truncate mr-2">{p.venture.split(" ")[0]}</span>
                      <span className="text-white">{p.milestones.completed}/{p.milestones.total}</span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#F40009]" style={{ width: `${(p.milestones.completed / p.milestones.total) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-600">Founders Venture Capital · Investor Dashboard · Showcase Phase</p>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub: string; color: string }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className="text-xs text-gray-500">{label}</span>
      </div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-gray-600 mt-1">{sub}</div>
    </div>
  );
}

function StatusRow({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-xs text-gray-400 flex-1">{label}</span>
      <span className="text-xs text-white font-medium">{count}</span>
    </div>
  );
}
