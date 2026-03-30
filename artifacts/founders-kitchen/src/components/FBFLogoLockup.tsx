interface FBFLogoLockupProps {
  size?: number;
  variant?: "dark" | "light";
  subtitle?: string;
}

const BASE = import.meta.env.BASE_URL;

export function FBFLogoLockup({ size = 44, variant = "dark", subtitle }: FBFLogoLockupProps) {
  const primaryColor = variant === "light" ? "#ffffff" : "#003153";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src={`${BASE}fbf-logo.jpg`}
        alt="Founders Battlefield"
        style={{
          height: size,
          width: "auto",
          borderRadius: 6,
          flexShrink: 0,
          display: "block",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: size * 0.38,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: primaryColor,
            lineHeight: 1,
          }}
        >
          {subtitle ? `FOUNDERS ${subtitle.toUpperCase()}` : "FOUNDERS BATTLEFIELD"}
        </span>
      </div>
    </div>
  );
}
