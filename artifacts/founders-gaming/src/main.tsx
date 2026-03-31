import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Gamepad2 } from "lucide-react";
import { PasswordGateway } from "@workspace/password-gateway";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGateway
      portalName="Founders Gaming"
      portalSubtitle="Founders Battlefield Gaming Initiative"
      icon={Gamepad2}
      storageKey="fbf-gate-gaming"
    >
      <App />
    </PasswordGateway>
  </StrictMode>,
);
