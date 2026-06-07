import Link from "next/link";
import { PhoneMockup } from "./PhoneMockup";
import { StoreBadges } from "./StoreBadges";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="container-page relative pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* Decorative blobs */}
      <span className="blob right-[-6rem] top-[-4rem] h-[22rem] w-[22rem] bg-butter/60" aria-hidden />
      <span className="blob left-[-8rem] top-[6rem] h-[20rem] w-[20rem] bg-terracotta-xlight/80" aria-hidden />

      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Coming soon · For UK parents
          </span>

          <h1 className="mt-6 font-display font-semibold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Never miss the{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">next size up</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-butter/75"
              />
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-walnut">
            Follow local wardrobes you love and get notified the moment new
            items in your child&apos;s size are listed. No more endless scrolling
            through Facebook Marketplace.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={site.waitlistUrl} className="btn-primary">
              Join the waitlist
            </Link>
            <a href="#how" className="btn-secondary">
              See how it works
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-walnut">
            <div className="flex -space-x-2">
              {["bg-butter", "bg-terracotta-light", "bg-terracotta-xlight", "bg-sage"].map(
                (c, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full ring-2 ring-cream ${c}`}
                  />
                ),
              )}
            </div>
            <p>
              <span className="font-semibold text-ink">Parents in South London</span>{" "}
              are already adding their wardrobes
            </p>
          </div>

          <div className="mt-6">
            <StoreBadges />
          </div>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
