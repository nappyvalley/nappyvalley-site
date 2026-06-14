import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-soft bg-warm/70">
      <div className="container-page flex flex-col gap-10 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3 max-w-sm">
          <Logo />
          <p className="text-sm leading-relaxed text-walnut">
            Follow local parents whose style you love and never miss the next
            size up. Made for growing families in the UK.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-walnut sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-walnut/70">
              Product
            </span>
            <a href="#how" className="hover:text-ink">
              How it works
            </a>
            <a href="#preview" className="hover:text-ink">
              Preview
            </a>
            <a href="#vision" className="hover:text-ink">
              Our vision
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-walnut/70">
              Get the app
            </span>
            <a href={site.waitlistUrl} className="hover:text-ink">
              Join waitlist
            </a>
            <a href={site.appStoreUrl} className="hover:text-ink">
              App Store
            </a>
            {site.testFlightUrl && site.testFlightUrl !== "#" && (
              <a href={site.testFlightUrl} className="hover:text-ink">
                TestFlight
              </a>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-walnut/70">
              Company
            </span>
            <a href={`mailto:${site.supportEmail}`} className="hover:text-ink">
              Contact
            </a>
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-ink">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-soft/60 pb-8 pt-6 text-xs text-walnut/80 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nappy Valley Limited. All rights reserved.</p>
        <p>Made with care in London 🤍</p>
      </div>
    </footer>
  );
}
