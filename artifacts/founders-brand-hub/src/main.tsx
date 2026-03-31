import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Palette } from "lucide-react";
import { PasswordGateway } from "@workspace/password-gateway";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGateway
      portalName="Founders Brand Hub"
      portalSubtitle="FBF Visual Identity & Guidelines"
      icon={Palette}
      storageKey="fbf-gate-brand-hub"
    >
      <App />
    </PasswordGateway>
  </StrictMode>,
);
