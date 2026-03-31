import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Landmark } from "lucide-react";
import { PasswordGateway } from "@workspace/password-gateway";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGateway
      portalName="Founders Venture Capital"
      portalSubtitle="FBH Holdings · MachariaOS"
      icon={Landmark}
      storageKey="fbf-gate-fvc"
    >
      <App />
    </PasswordGateway>
  </StrictMode>,
);
