import { useState, type ReactNode } from "react";
import { FBFLogoLockup } from "./FBFLogoLockup";

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
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "#003153",
        fontFamily: "'Barlow Condensed', 'Poppins', system-ui, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <FBFLogoLockup size={56} variant="light" subtitle="Sponsorship Hub" />
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: "0 0 0.5rem",
              lineHeight: 1.1,
            }}
          >
            FBF Sponsorship Hub — Partner Access
          </h1>
          <p
            style={{
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Enter your password to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "1rem",
            padding: "1.75rem",
            backdropFilter: "blur(8px)",
          }}
        >
          <div style={{ marginBottom: "1.125rem" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "0.5rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter demo password"
              autoFocus
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(255,255,255,0.08)",
                border: error ? "1px solid #D32F2F" : "1px solid rgba(255,255,255,0.18)",
                borderRadius: "0.625rem",
                fontSize: "0.9rem",
                color: "#ffffff",
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "'Poppins', system-ui, sans-serif",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: "0.8rem",
                color: "#FF6B6B",
                margin: "0 0 1rem",
                fontWeight: 500,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.8rem",
              background: "#D32F2F",
              color: "#ffffff",
              border: "none",
              borderRadius: "0.625rem",
              fontFamily: "'Poppins', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#B71C1C"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#D32F2F"; }}
          >
            Access Platform
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "1.25rem",
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Founders Battlefield — Partner & Sponsor Portal
        </p>
      </div>
    </div>
  );
}
