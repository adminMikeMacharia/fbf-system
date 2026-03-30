import { useEffect, useState } from "react";

interface Props {
  slug: string;
  portalName: string;
  children: React.ReactNode;
}

type State = "loading" | "authorized" | "unauthorized" | "error";

const HUB_URL = "/hub/";

export default function HubPortalGuard({ slug, portalName, children }: Props) {
  const [state, setState] = useState<State>("loading");
  const [reason, setReason] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("hub_token");
    if (!token) {
      setState("unauthorized");
      setReason("no_token");
      return;
    }

    const _apiBase = (import.meta.env.VITE_API_BASE as string | undefined)
      ? `${(import.meta.env.VITE_API_BASE as string).replace(/\/$/, "")}/api`
      : "/api";
    fetch(`${_apiBase}/hub/portal-verify?slug=${encodeURIComponent(slug)}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (r) => {
        const body = await r.json().catch(() => ({}));
        if (r.ok && body.authorized) {
          setState("authorized");
        } else {
          setState("unauthorized");
          setReason(body.reason ?? "denied");
        }
      })
      .catch(() => {
        setState("error");
      });
  }, [slug]);

  if (state === "authorized") return <>{children}</>;

  const bg = "#0d1a10";
  const card = "#162319";
  const accent = "#2D4A28";
  const green = "#4ade80";
  const text = "#e8f0e9";
  const muted = "#7a9e82";

  return (
    <div style={{
      minHeight: "100vh", background: bg, display: "flex",
      alignItems: "center", justifyContent: "center",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{
        background: card, border: `1px solid ${accent}`,
        borderRadius: 16, padding: "48px 40px",
        maxWidth: 440, width: "100%", textAlign: "center",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
      }}>
        {state === "loading" ? (
          <>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              border: `3px solid ${accent}`, borderTopColor: green,
              animation: "hub-spin 0.8s linear infinite",
              margin: "0 auto 20px",
            }} />
            <style>{`@keyframes hub-spin{to{transform:rotate(360deg)}}`}</style>
            <div style={{ color: muted, fontSize: 14 }}>Verifying access…</div>
          </>
        ) : state === "error" ? (
          <>
            <div style={{ fontSize: 36, marginBottom: 16 }}>⚠️</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: text, marginBottom: 10 }}>Connection Error</div>
            <div style={{ fontSize: 14, color: muted, lineHeight: 1.6, marginBottom: 28 }}>
              Unable to verify your session. Please check your connection and try again.
            </div>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: accent, color: text, border: "none", borderRadius: 8,
                padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>
              Retry
            </button>
          </>
        ) : (
          <>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "rgba(45,74,40,0.4)", border: `2px solid ${accent}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: muted, textTransform: "uppercase", marginBottom: 10 }}>
              MachariaOS Hub
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: text, marginBottom: 12 }}>
              Access Required
            </div>
            <div style={{ fontSize: 14, color: muted, lineHeight: 1.7, marginBottom: 28 }}>
              {reason === "no_token" || reason === "invalid_session"
                ? <>This is a private portal. Please sign in to MachariaOS Hub to access <strong style={{ color: text }}>{portalName}</strong>.</>
                : reason === "grant_expired"
                ? <>Your access to <strong style={{ color: text }}>{portalName}</strong> has expired. Contact an administrator to renew.</>
                : <>You don't currently have access to <strong style={{ color: text }}>{portalName}</strong>. If you believe this is an error, contact the administrator.</>
              }
            </div>

            <a
              href={HUB_URL}
              style={{
                display: "inline-block", background: "#2D4A28",
                color: text, textDecoration: "none", borderRadius: 9,
                padding: "12px 28px", fontSize: 14, fontWeight: 700,
                letterSpacing: "0.01em",
              }}>
              Go to MachariaOS Hub
            </a>

            <div style={{ marginTop: 20, fontSize: 12, color: muted }}>
              Having trouble? Contact{" "}
              <a href="mailto:admin@mikemacharia.com" style={{ color: green }}>admin@mikemacharia.com</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
