interface FBFLogoLockupProps {
  size?: number;
  variant?: "dark" | "light";
  subtitle?: string;
}

const BASE = import.meta.env.BASE_URL;

export function FBFLogoLockup({ size = 44, variant = "dark", subtitle }: FBFLogoLockupProps) {
  const primaryColor = variant === "light" ? "#ffffff" : "#003153";
  const accentColor = "#D32F2F";

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
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{
              fontFamily: "'Poppins', 'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: size * 0.36,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: accentColor,
              lineHeight: 1,
            }}
          >
            FBF
          </span>
          {subtitle && (
            <span
              style={{
                fontFamily: "'Poppins', 'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: size * 0.32,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: primaryColor,
                lineHeight: 1,
              }}
            >
              {subtitle.toUpperCase()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
