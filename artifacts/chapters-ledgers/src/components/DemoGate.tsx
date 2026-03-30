import { useState, type ReactNode } from "react";

const DEMO_PASSWORD = "2403";
const STORAGE_KEY = "demo_authenticated";

export default function DemoGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "true");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (authenticated) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#003153", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-[#F40009] flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }} className="text-2xl text-white">Chapters & Ledgers</h1>
          <p className="text-xs text-white/50 mt-1 uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>A Founders Battlefield Initiative</p>
          <p className="text-sm text-white/60 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Enter the demo password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-white/80" style={{ fontFamily: "'Poppins', sans-serif" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter demo password"
              className="w-full px-3 py-2 border border-white/20 rounded-lg text-sm bg-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#F40009]/50 focus:border-[#F40009]/50"
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-[#F40009]">{error}</p>}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#F40009] text-white rounded-lg font-medium text-sm hover:bg-[#DC143C] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Enter Demo
          </button>
        </form>
      </div>
    </div>
  );
}
