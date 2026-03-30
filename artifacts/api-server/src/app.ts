import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.set("trust proxy", 1);

const isProduction = process.env.NODE_ENV === "production";

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (!isProduction) return callback(null, true);
    if (/^https:\/\/.*\.replit\.(app|dev)$/.test(origin)) return callback(null, true);
    const allowed = (process.env.CORS_ORIGIN || "").split(",").map(s => s.trim()).filter(Boolean);
    if (allowed.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "fbf-api", timestamp: new Date().toISOString() });
});

app.use("/api", router);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default app;
