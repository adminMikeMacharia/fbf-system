import nodemailer from "nodemailer";

const ZOHO_USER = "admin@mikemacharia.com";

export const EMAIL_SIGNATURE_HTML = `
<div style="border-top:1px solid #e2e8f0;margin-top:24px;padding-top:16px">
  <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6">
    <strong style="color:#1e293b">Michael Anthony Macharia</strong><br/>
    Tel: +254722511013<br/>
    <a href="mailto:admin@mikemacharia.com" style="color:#0284c7;text-decoration:none">admin@mikemacharia.com</a>
  </p>
</div>`;

export async function sendGenericEmail(
  to: string,
  subject: string,
  html: string,
  _from?: string
): Promise<boolean> {
  const password = process.env.ZOHO_MAIL_APP_PASSWORD;
  if (!password) {
    console.error("[email] ZOHO_MAIL_APP_PASSWORD not set — email not sent");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: { user: ZOHO_USER, pass: password },
    });

    await transporter.sendMail({ from: ZOHO_USER, to, subject, html });
    return true;
  } catch (err: unknown) {
    console.error("[email] Send failed:", err instanceof Error ? err.message : err);
    return false;
  }
}
