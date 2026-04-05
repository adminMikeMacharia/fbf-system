import { Router } from "express";
import fbfProxyRouter from "./fbf-proxy.js";
import sponsorshipRouter from "./sponsorship.js";
import bookAgentRouter from "./book-agent.js";
import commsRouter from "./comms.js";
import peopleRouter from "./people.js";
import organizationsRouter from "./organizations.js";
import episodesRouter from "./episodes.js";
import volumesRouter from "./volumes.js";
import sponsorshipDataRouter from "./sponsorship-data.js";
import venturesRouter from "./ventures.js";
import caseStudiesRouter from "./case-studies.js";
import shoppingRouter from "./shopping.js";
import projectManagementRouter from "./project-management.js";

const router = Router();

router.get("/hub/portal-verify", (_req, res) => {
  res.json({ authorized: true, source: "fbf-standalone" });
});

router.use(fbfProxyRouter);
router.use(sponsorshipRouter);
router.use(bookAgentRouter);
router.use(commsRouter);
router.use(peopleRouter);
router.use(organizationsRouter);
router.use(episodesRouter);
router.use(volumesRouter);
router.use(sponsorshipDataRouter);
router.use(venturesRouter);
router.use(caseStudiesRouter);
router.use(shoppingRouter);
router.use(projectManagementRouter);

export default router;
