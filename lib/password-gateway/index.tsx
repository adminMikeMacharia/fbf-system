import { useState, useEffect, type ReactNode, type ComponentType } from "react";

interface PasswordGatewayProps {
  portalName: string;
  portalSubtitle: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  storageKey: string;
  children: ReactNode;
}

const DEMO_PIN = "2403";

export function PasswordGateway({
  portalName,
  portalSubtitle,
  icon: Icon,
  storageKey,
  children,
}: PasswordGatewayProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored === "1") setAuthenticated(true);
  }, [storageKey]);

  if (authenticated) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DEMO_PIN) {
      sessionStorage.setItem(storageKey, "1");
      setAuthenticated(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #001e38 0%, #003153 50%, #002244 100%)",
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, sans-serif",
        padding: "20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 400, textAlign: "center" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#D32F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 8px 24px rgba(211,47,47,0.3)",
          }}
        >
          <Icon className="" style={{ width: 32, height: 32, color: "white" }} />
        </div>

        <h1
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontSize: "2rem",
            fontWeight: 800,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            margin: "0 0 6px",
          }}
        >
          {portalName}
        </h1>

        <p
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}
        >
          {portalSubtitle}
        </p>

        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 32px",
          }}
        >
          Enter the demo password to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "28px 24px",
              backdropFilter: "blur(12px)",
            }}
          >
            <label
              style={{
                display: "block",
                textAlign: "left",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                marginBottom: 8,
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              autoFocus
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "1rem",
                border: `2px solid ${error ? "#ef4444" : "#D32F2F"}`,
                borderRadius: 10,
                background: "rgba(255,255,255,0.92)",
                color: "#1a1a2e",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
                animation: shaking ? "shake 0.4s ease-in-out" : "none",
              }}
              placeholder="••••"
            />
            {error && (
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "0.8rem",
                  marginTop: 8,
                  textAlign: "left",
                }}
              >
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: 16,
                padding: "14px",
                fontSize: "1rem",
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(211,47,47,0.35)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Enter Demo
            </button>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
