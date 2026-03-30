import { Router, type Request, type Response } from "express";
import { sendGenericEmail, EMAIL_SIGNATURE_HTML } from "../lib/email.js";

const router = Router();

const APPROVED_CL_RECIPIENTS = ["mugumomunene@gmail.com", "admin@mikemacharia.com"];

router.post("/comms/chapters-ledgers-summary", async (req: Request, res: Response) => {
  const { to, tasks, costs, partners } = req.body;
  if (!to) { res.status(400).json({ error: "Recipient email required" }); return; }
  if (!APPROVED_CL_RECIPIENTS.includes(to.toLowerCase())) {
    res.status(403).json({ error: "Recipient not in approved list" }); return;
  }

  function esc(s: unknown): string {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  const openTasks = (tasks || []).filter((t: Record<string, unknown>) => t.status === "Open" || t.status === "In Progress");
  const doneTasks = (tasks || []).filter((t: Record<string, unknown>) => t.status === "Done");
  const totalBudget = (costs || []).reduce((s: number, c: Record<string, unknown>) => s + (Number(c.estimatedCost) || 0), 0);

  const VALID_STATUSES = ["Open", "In Progress", "Done", "Blocked"];
  const VALID_PRIORITIES = ["Critical", "High", "Medium", "Low"];

  const taskRows = (tasks || []).map((t: Record<string, unknown>) => {
    const status = VALID_STATUSES.includes(String(t.status)) ? String(t.status) : "Open";
    const priority = VALID_PRIORITIES.includes(String(t.priority)) ? String(t.priority) : "Medium";
    return `<tr style="border-bottom:1px solid #f0f0f0">
      <td style="padding:8px 12px;font-size:13px;font-weight:600">${esc(t.title)}</td>
      <td style="padding:8px 12px;font-size:13px;text-align:center">
        <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;background:${
          status === "Done" ? "#dcfce7;color:#166534" : status === "In Progress" ? "#dbeafe;color:#1e40af" : "#f3f4f6;color:#374151"
        }">${esc(status)}</span>
      </td>
      <td style="padding:8px 12px;font-size:13px;text-align:center">
        <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;background:${
          priority === "Critical" ? "#fecaca;color:#991b1b" : priority === "High" ? "#fed7aa;color:#9a3412" : "#fef3c7;color:#92400e"
        }">${esc(priority)}</span>
      </td>
      <td style="padding:8px 12px;font-size:12px;color:#6b7280">${esc(t.category)}</td>
      <td style="padding:8px 12px;font-size:12px;color:#6b7280;text-align:center">${esc(t.dueDate) || "—"}</td>
    </tr>`;
  }).join("");

  const partnerRows = (partners || []).map((p: Record<string, unknown>) => `
    <tr style="border-bottom:1px solid #f0f0f0">
      <td style="padding:6px 12px;font-size:13px;font-weight:600">${esc(p.name)}</td>
      <td style="padding:6px 12px;font-size:12px">${esc(p.type)}</td>
      <td style="padding:6px 12px;font-size:12px">${esc(p.status)}</td>
      <td style="padding:6px 12px;font-size:12px;color:#6b7280">${esc(p.territory) || "—"}</td>
    </tr>`).join("");

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f6f3;font-family:'Inter',system-ui,sans-serif">
<div style="max-width:700px;margin:0 auto;padding:32px 16px">
  <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)">
    <div style="background:#8B6F47;padding:28px 32px;text-align:center">
      <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700">Chapters & Ledgers</h1>
      <p style="color:rgba(255,255,255,.8);margin:6px 0 0;font-size:13px">Ledgers of Africa — Project Summary</p>
    </div>
    <div style="padding:28px 32px">
      <p style="font-size:14px;color:#374151;margin:0 0 20px">Hi Mugumo,</p>
      <p style="font-size:14px;color:#374151;margin:0 0 24px">Here is the latest project summary for the Ledgers of Africa book series.</p>
      <div style="display:flex;gap:16px;margin-bottom:24px">
        <div style="flex:1;background:#f0fdf4;border-radius:8px;padding:16px;text-align:center">
          <div style="font-size:28px;font-weight:700;color:#166534">${openTasks.length}</div>
          <div style="font-size:11px;color:#6b7280;margin-top:2px">Active Tasks</div>
        </div>
        <div style="flex:1;background:#f0fdf4;border-radius:8px;padding:16px;text-align:center">
          <div style="font-size:28px;font-weight:700;color:#166534">${doneTasks.length}</div>
          <div style="font-size:11px;color:#6b7280;margin-top:2px">Completed</div>
        </div>
        <div style="flex:1;background:#eff6ff;border-radius:8px;padding:16px;text-align:center">
          <div style="font-size:28px;font-weight:700;color:#1e40af">$${totalBudget.toLocaleString()}</div>
          <div style="font-size:11px;color:#6b7280;margin-top:2px">Total Budget</div>
        </div>
      </div>
      <h2 style="font-size:16px;font-weight:700;color:#1f2937;margin:0 0 12px;border-bottom:2px solid #8B6F47;padding-bottom:8px">All Tasks</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
        <thead><tr style="background:#f9fafb;border-bottom:2px solid #e5e7eb">
          <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Task</th>
          <th style="padding:8px 12px;text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Status</th>
          <th style="padding:8px 12px;text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Priority</th>
          <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Category</th>
          <th style="padding:8px 12px;text-align:center;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Due</th>
        </tr></thead>
        <tbody>${taskRows}</tbody>
      </table>
      <h2 style="font-size:16px;font-weight:700;color:#1f2937;margin:0 0 12px;border-bottom:2px solid #8B6F47;padding-bottom:8px">Partners & Publishers</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
        <thead><tr style="background:#f9fafb;border-bottom:2px solid #e5e7eb">
          <th style="padding:6px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Name</th>
          <th style="padding:6px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Type</th>
          <th style="padding:6px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Status</th>
          <th style="padding:6px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280">Territory</th>
        </tr></thead>
        <tbody>${partnerRows}</tbody>
      </table>
      <p style="font-size:13px;color:#6b7280;margin:20px 0 0;font-style:italic">Generated from the Chapters & Ledgers project board.</p>
      ${EMAIL_SIGNATURE_HTML}
    </div>
  </div>
</div></body></html>`;

  const sent = await sendGenericEmail(to, "Ledgers of Africa — Project Board Summary", html, "Chapters & Ledgers");
  if (!sent) { res.status(500).json({ error: "Failed to send email" }); return; }

  res.json({
    message: "Project summary sent",
    to,
    taskCount: (tasks || []).length,
    partnerCount: (partners || []).length,
    sentAt: new Date().toISOString(),
  });
});

export default router;
