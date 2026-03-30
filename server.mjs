import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT || "5000", 10);

const apiApp = (await import("./artifacts/api-server/src/app.js")).default;

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

for (const portal of portals) {
  const distDir = path.join(__dirname, "artifacts", portal, "dist", "public");
  app.use(`/${portal}`, express.static(distDir));
}

app.use((req, res, next) => {
  const match = req.path.match(/^\/(founders-brand-hub|founders-kitchen|founders-gaming|fvc|sponsorship-hub|chapters-ledgers)(\/.*)?$/);
  if (match) {
    const portal = match[1];
    const distDir = path.join(__dirname, "artifacts", portal, "dist", "public");
    return res.sendFile(path.join(distDir, "index.html"));
  }
  next();
});

app.get("/", (_req, res) => {
  const links = portals.map(p => `<li><a href="/${p}/">${p}</a></li>`).join("\n");
  res.send(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>FBF System</title>
<style>body{font-family:system-ui;max-width:600px;margin:80px auto;padding:0 20px}
h1{color:#1a1a2e}a{color:#3b82f6;text-decoration:none}a:hover{text-decoration:underline}
li{margin:8px 0;font-size:1.1rem}</style></head>
<body><h1>Founders Brand Federation</h1><p>Select a portal:</p><ul>${links}</ul>
<p style="margin-top:40px;color:#666;font-size:0.9rem">API: <a href="/api/health">/api/health</a></p>
</body></html>`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[fbf-prod] Production server on port ${PORT}`);
});
