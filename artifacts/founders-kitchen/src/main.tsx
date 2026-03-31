import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChefHat } from "lucide-react";
import { PasswordGateway } from "@workspace/password-gateway";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGateway
      portalName="Founders Kitchen"
      portalSubtitle="FBH Holdings · Culinary Storytelling"
      icon={ChefHat}
      storageKey="fbf-gate-kitchen"
    >
      <App />
    </PasswordGateway>
  </StrictMode>,
);
