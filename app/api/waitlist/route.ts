import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  // TODO: swap for real provider (Resend audience, Mailchimp, Loops, etc.)
  console.log("[waitlist] signup:", email);

  return NextResponse.json({ ok: true });
}
