import express from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT || "5000", 10);

const apiApp = (await import("./artifacts/api-server/src/app.ts")).default;

const app = express();

app.use("/api", (req, res, next) => {
  req.url = "/api" + req.url;
  apiApp(req, res, next);
});

const portals = [
  "founders-brand-hub",
  "founders-kitchen",
  "founders-gaming",
  "fvc",
  "sponsorship-hub",
  "chapters-ledgers",
];

function getDistDir(portal) {
  const serve = path.join(__dirname, "artifacts", portal, "dist", "serve");
  if (fs.existsSync(serve)) return serve;
  return path.join(__dirname, "artifacts", portal, "dist", "public");
}

for (const portal of portals) {
  app.use(`/${portal}`, express.static(getDistDir(portal)));
}

const battlefieldDir = path.join(__dirname, "artifacts", "founders-battlefield");
app.use("/founders-battlefield", express.static(battlefieldDir));
app.get("/founders-battlefield", (_req, res) => {
  res.sendFile(path.join(battlefieldDir, "index.html"));
});

app.use((req, res, next) => {
  const match = req.path.match(/^\/(founders-brand-hub|founders-kitchen|founders-gaming|fvc|sponsorship-hub|chapters-ledgers)(\/.*)?$/);
  if (match) {
    const portal = match[1];
    return res.sendFile(path.join(getDistDir(portal), "index.html"));
  }
  next();
});

app.get("/", (_req, res) => {
  const allLinks = [...portals, "founders-battlefield"].map(p => `<li><a href="/${p}/">${p}</a></li>`).join("\n");
  res.send(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>FBF System</title>
<style>body{font-family:system-ui;max-width:600px;margin:80px auto;padding:0 20px}
h1{color:#1a1a2e}a{color:#3b82f6;text-decoration:none}a:hover{text-decoration:underline}
li{margin:8px 0;font-size:1.1rem}</style></head>
<body><h1>Founders Brand Federation</h1><p>Select a portal:</p><ul>${allLinks}</ul>
<p style="margin-top:40px;color:#666;font-size:0.9rem">API: <a href="/api/health">/api/health</a></p>
</body></html>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[fbf-prod] Production server on port ${PORT}`);
});
