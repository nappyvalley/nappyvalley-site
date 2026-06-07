import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="container-page flex items-center justify-between pt-8">
      <Logo />

      <nav className="hidden items-center gap-1 rounded-pill bg-white/70 p-1 ring-1 ring-soft backdrop-blur md:flex">
        <a
          href="#how"
          className="rounded-pill px-4 py-2 text-sm font-medium text-walnut transition hover:bg-warm"
        >
          How it works
        </a>
        <a
          href="#vision"
          className="rounded-pill px-4 py-2 text-sm font-medium text-walnut transition hover:bg-warm"
        >
          Vision
        </a>
        <Link
          href={site.waitlistUrl}
          className="rounded-pill bg-terracotta px-4 py-2 text-sm font-semibold text-white shadow-pill transition hover:bg-[#B5552B]"
        >
          Join the waitlist
        </Link>
      </nav>

      <Link
        href={site.waitlistUrl}
        className="rounded-pill bg-terracotta px-4 py-2 text-sm font-semibold text-white shadow-pill md:hidden"
      >
        Join
      </Link>
    </header>
  );
}
