"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong");
      }
      setStatus("success");
      setMessage("You're on the list. We'll be in touch as soon as we're live near you.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="waitlist" className="container-page pb-24 sm:pb-32">
      <div className="relative overflow-hidden rounded-card bg-warm px-7 py-14 shadow-card ring-1 ring-soft sm:px-14 sm:py-20">
        <span
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-butter/60 blur-3xl"
        />
        <span
          aria-hidden
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-terracotta-xlight/80 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Limited early access
          </span>

          <h2
            className="mt-5 font-display font-semibold leading-tight tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Be first into Nappy Valley.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-walnut">
            We&apos;re opening neighbourhood by neighbourhood. Drop your email
            and we&apos;ll let you know the moment Nappy Valley arrives near
            you — and which wardrobes are already worth following.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@home.com"
              className="w-full rounded-pill bg-white px-5 py-3.5 text-sm text-ink placeholder:text-walnut/60 ring-1 ring-soft focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary disabled:opacity-70"
            >
              {status === "loading" ? "Joining…" : "Join waitlist"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-sage">{message}</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-rust">{message}</p>
          )}

          <p className="mt-6 text-xs text-walnut/80">
            No spam. One email when we launch in your area. Unsubscribe with one click.
          </p>

          {/* Secondary link out to existing dedicated waitlist landing page */}
          {site.externalWaitlistUrl && (
            <p className="mt-8 text-sm text-walnut">
              Prefer the full sign-up page?{" "}
              <a
                href={site.externalWaitlistUrl}
                className="font-semibold text-terracotta underline-offset-4 hover:underline"
              >
                Visit our waitlist page →
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
