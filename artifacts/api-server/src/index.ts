import http from "http";
import app from "./app.js";

process.on("uncaughtException", (err) => {
  console.error("[fatal] Uncaught exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("[fatal] Unhandled rejection:", reason);
});

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 8080;

if (Number.isNaN(port) || port <= 0) throw new Error(`Invalid PORT: "${rawPort}"`);

const server = http.createServer(app);

server.listen(port, "0.0.0.0", () => {
  console.log(`[fbf-api] Server listening on port ${port}`);
  console.log(`[fbf-api] Health: http://localhost:${port}/api/health`);
});
