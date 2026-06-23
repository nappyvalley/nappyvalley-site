import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Server-side env vars — set in Vercel Project Settings → Environment Variables.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Optional: when set, notification emails fire to ADMIN_EMAIL on every
// successful signup. If unset we still record the signup, just no email.
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = process.env.WAITLIST_NOTIFY_EMAIL ?? "nappyvalley11@gmail.com";

// Salt used for hashing IPs before storage. Privacy-preserving — we never
// store raw IPs. Compromise wouldn't expose user data, only let an attacker
// hash-and-compare IPs (and the table isn't anon-readable anyway).
const IP_SALT = process.env.IP_HASH_SALT ?? "nappyvalley-waitlist-v1";

// Rate-limit thresholds. 5 signups per IP per hour is generous for real
// users (a household sharing a router) but blocks spammers.
const RATE_LIMIT_PER_HOUR = 5;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const rawEmail =
    typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const honeypot = typeof body?.website === "string" ? body.website : "";

  // Honeypot check — return success without doing anything so the bot
  // thinks it succeeded and stops retrying. Silent drop.
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!emailRe.test(rawEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error(
      "[waitlist] SUPABASE_URL or SUPABASE_ANON_KEY not set in Vercel env",
    );
    return NextResponse.json(
      { error: "Sign-up is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  // Hash the client IP for rate limiting. Vercel sets x-forwarded-for
  // (left-most is client). Falls back to a constant so we never crash if
  // unset, at the cost of weakened rate limiting in that edge case.
  const xff = req.headers.get("x-forwarded-for") ?? "";
  const ip = xff.split(",")[0]?.trim() || "unknown";
  const ipHash = createHash("sha256")
    .update(ip + ":" + IP_SALT)
    .digest("hex")
    .slice(0, 32);

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Rate limit: how many signups from this IP in the last hour?
  // (Counting from waitlist itself — no separate table needed.)
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("waitlist")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", oneHourAgo);

  if ((count ?? 0) >= RATE_LIMIT_PER_HOUR) {
    return NextResponse.json(
      { error: "Too many signups from this network. Please try again later." },
      { status: 429 },
    );
  }

  const userAgent = req.headers.get("user-agent") ?? null;

  const { error } = await supabase.from("waitlist").insert({
    email: rawEmail,
    source: "site",
    user_agent: userAgent,
    ip_hash: ipHash,
  });

  if (error) {
    if (error.code === "23505") {
      // Duplicate email — they're already on the list. Treat as success
      // (avoids enumeration leak) but skip the notification email.
      return NextResponse.json({ ok: true });
    }
    console.error("[waitlist] insert failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  // Best-effort notification email. We await so it fires before the
  // Vercel function terminates, but a failure here doesn't break the
  // signup itself. Errors (Resend 4xx, bad key, etc.) are logged but
  // never surfaced to the end user.
  if (RESEND_API_KEY) {
    try {
      await sendSignupEmail(rawEmail, userAgent ?? "");
    } catch (e) {
      console.error("[waitlist] notify email failed:", e);
    }
  } else {
    console.error(
      "[waitlist] RESEND_API_KEY env var is not set — skipping notification email",
    );
  }

  return NextResponse.json({ ok: true });
}

async function sendSignupEmail(email: string, ua: string) {
  const subject = `🎉 New waitlist signup — ${email}`;
  const html = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#F5F0E8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F0E8;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;">
        <tr><td style="background:linear-gradient(180deg,#C86030,#AD4920);border-radius:16px 16px 0 0;padding:28px 32px;text-align:center;">
          <div style="font-size:28px;margin-bottom:6px;">🎉</div>
          <div style="color:#fff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">New waitlist signup</div>
          <div style="color:rgba(255,255,255,0.75);font-size:13px;margin-top:4px;">Someone wants to be first into Nappy Valley</div>
        </td></tr>
        <tr><td style="background:#fff;padding:28px 32px;border-left:1px solid #EAE0D0;border-right:1px solid #EAE0D0;">
          <div style="margin-bottom:24px;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.8px;color:#C86030;text-transform:uppercase;margin-bottom:10px;">Email</div>
            <div style="font-size:16px;color:#2A1800;font-weight:600;padding:0 4px;">${escapeHtml(email)}</div>
          </div>
          <div style="margin-bottom:24px;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.8px;color:#C86030;text-transform:uppercase;margin-bottom:10px;">Source</div>
            <div style="font-size:14px;color:#2A1800;padding:0 4px;">Public site (nappyvalley-site.vercel.app)</div>
          </div>
          ${ua ? `<div style="margin-bottom:24px;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.8px;color:#C86030;text-transform:uppercase;margin-bottom:10px;">Device</div>
            <div style="font-size:12px;color:#6A4020;padding:0 4px;font-family:ui-monospace,monospace;">${escapeHtml(ua)}</div>
          </div>` : ""}
        </td></tr>
        <tr><td style="background:#F5F0E8;border:1px solid #EAE0D0;border-top:none;border-radius:0 0 16px 16px;padding:16px 32px;text-align:center;">
          <div style="font-size:12px;color:#6A4020;">Nappy Valley · automated waitlist alert</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Nappy Valley <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject,
      html,
    }),
  });

  // fetch() doesn't throw on 4xx/5xx — we have to inspect the response
  // explicitly. Without this, Resend's auth / validation errors are
  // swallowed and the call looks successful from Vercel's side.
  if (!res.ok) {
    const body = await res.text().catch(() => "<no body>");
    throw new Error(`Resend ${res.status} ${res.statusText}: ${body}`);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
