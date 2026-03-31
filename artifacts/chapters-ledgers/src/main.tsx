import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen } from "lucide-react";
import { PasswordGateway } from "@workspace/password-gateway";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGateway
      portalName="Chapters & Ledgers"
      portalSubtitle="A Founders Battlefield Initiative"
      icon={BookOpen}
      storageKey="fbf-gate-chapters"
    >
      <App />
    </PasswordGateway>
  </StrictMode>,
);
