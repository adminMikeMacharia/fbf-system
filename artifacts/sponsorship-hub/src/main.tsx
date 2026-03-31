import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Megaphone } from "lucide-react";
import { PasswordGateway } from "@workspace/password-gateway";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGateway
      portalName="Sponsorship Hub"
      portalSubtitle="Founders Battlefield Ecosystem"
      icon={Megaphone}
      storageKey="fbf-gate-sponsorship"
    >
      <App />
    </PasswordGateway>
  </StrictMode>,
);
