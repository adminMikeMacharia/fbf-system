import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HubPortalGuard from "./HubPortalGuard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HubPortalGuard slug="fvc" portalName="Founders Venture Capital">
      <App />
    </HubPortalGuard>
  </StrictMode>,
);
