import React from "react";

interface FBFLogoLockupProps {
  size?: number;
  variant?: "dark" | "light";
  subtitle?: string;
}

const BASE = import.meta.env.BASE_URL;

export function FBFLogoLockup({ size = 44, variant = "dark", subtitle }: FBFLogoLockupProps) {
  const primaryColor = variant === "light" ? "#ffffff" : "#003153";
  const subtitleColor = variant === "light" ? "rgba(255,255,255,0.65)" : "#64748b";

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
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: primaryColor,
            lineHeight: 1,
          }}
        >
          Founders Battlefield
        </span>
        {subtitle && (
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: size * 0.24,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: subtitleColor,
              lineHeight: 1,
              marginTop: 2,
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
