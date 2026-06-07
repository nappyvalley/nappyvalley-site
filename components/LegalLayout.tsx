import Link from "next/link";
import { Logo } from "./Logo";
import { Footer } from "./Footer";

/**
 * Minimal layout for legal pages (Privacy, Terms). Centred body, tight max
 * width for readability, simple top nav, our standard footer.
 */
export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="container-page flex items-center justify-between pt-8">
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-walnut hover:text-ink"
        >
          ← Back home
        </Link>
      </header>

      <article className="container-page max-w-3xl py-16 sm:py-24">
        <h1
          className="font-display font-semibold tracking-tight text-ink"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
        >
          {title}
        </h1>
        <p className="mt-2 text-sm text-walnut/70">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-walnut mt-10 space-y-6 text-base leading-relaxed text-walnut">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}
