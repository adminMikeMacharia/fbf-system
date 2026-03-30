import { Router } from "express";
import fbfProxyRouter from "./fbf-proxy.js";
import sponsorshipRouter from "./sponsorship.js";
import bookAgentRouter from "./book-agent.js";
import commsRouter from "./comms.js";

const router = Router();

router.get("/hub/portal-verify", (_req, res) => {
  res.json({ authorized: true, source: "fbf-standalone" });
});

router.use(fbfProxyRouter);
router.use(sponsorshipRouter);
router.use(bookAgentRouter);
router.use(commsRouter);

export default router;
