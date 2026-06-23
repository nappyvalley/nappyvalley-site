import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Server-side env vars — set in Vercel Project Settings → Environment Variables.
// Both required. If missing, fail loud at request time (we don't want to
// silently drop signups).
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const rawEmail =
    typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!emailRe.test(rawEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    // Misconfiguration on our side — log it and fail honestly. Surface a
    // generic "temporarily unavailable" so we don't leak detail.
    console.error(
      "[waitlist] SUPABASE_URL or SUPABASE_ANON_KEY not set in Vercel env",
    );
    return NextResponse.json(
      { error: "Sign-up is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Optional context — best-effort, never blocks the insert.
  const userAgent = req.headers.get("user-agent") ?? null;

  const { error } = await supabase.from("waitlist").insert({
    email: rawEmail,
    source: "site",
    user_agent: userAgent,
  });

  if (error) {
    // Postgres unique-violation = the email is already on the list. Treat
    // that as success from the user's POV — they're on the list, just from
    // an earlier attempt. We don't tell them they were already signed up
    // because that's a known email-enumeration leak.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true });
    }

    console.error("[waitlist] insert failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
