import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Nappy Valley",
  description: "The terms governing your use of the Nappy Valley app and website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 2026">
      <Section heading="Welcome to Nappy Valley">
        These terms govern your use of the Nappy Valley app, website and
        related services (together, the &ldquo;Services&rdquo;). By creating
        an account or otherwise using the Services, you agree to these terms.
      </Section>

      <Section heading="1. About Nappy Valley and you">
        Nappy Valley is operated by Nappy Valley Limited, a company
        registered in England and Wales. Throughout these terms,
        &ldquo;Nappy Valley&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
        &ldquo;our&rdquo; refer to Nappy Valley Limited. &ldquo;You&rdquo;
        and &ldquo;your&rdquo; refer to you, the user.
      </Section>

      <Section heading="2. Creating and managing your account">
        You must be 18 or over to create a Nappy Valley account. You agree
        to provide accurate information, to keep your password confidential,
        and to be responsible for all activity under your account.
      </Section>

      <Section heading="3. Listing and selling items">
        When you list an item you confirm that: you own it and have the
        right to sell it; the photos and description are accurate; the item
        is safe, clean and suitable for resale; and the price is fair. We
        may remove listings that breach these terms.
      </Section>

      <Section heading="4. Buying items">
        Nappy Valley is a marketplace — we facilitate transactions between
        users, but we are not the seller. Disputes are between buyer and
        seller, though our team will help resolve them where reasonable.
      </Section>

      <Section heading="5. Payments">
        Payments are processed by Stripe. Nappy Valley charges a small
        platform fee on completed sales to keep the service running. By
        selling on Nappy Valley you authorise Stripe to handle payouts to
        your nominated bank account.
      </Section>

      <Section heading="6. What you must not do">
        <ul className="list-disc space-y-2 pl-6">
          <li>List counterfeit, recalled, or otherwise unsafe items.</li>
          <li>Use Nappy Valley to harass, defraud or impersonate anyone.</li>
          <li>Attempt to bypass our payment system or evade fees.</li>
          <li>Scrape, crawl or automate access to the Services.</li>
          <li>Upload anything that infringes another party&apos;s rights.</li>
        </ul>
      </Section>

      <Section heading="7. Handling concerns">
        If you encounter a problem with a listing, seller or buyer, please
        use the in-app Report feature or email{" "}
        <a className="font-semibold text-terracotta" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        . We aim to respond within 2 working days.
      </Section>

      <Section heading="8. Our liability">
        Because Nappy Valley is a peer-to-peer marketplace, our liability is
        limited. To the fullest extent permitted by law, we are not liable
        for any loss arising from a transaction between users, except where
        such loss is caused by our gross negligence or wilful misconduct.
      </Section>

      <Section heading="9. Ending our relationship">
        You may delete your account at any time from within the app. We
        may suspend or terminate accounts that breach these terms.
      </Section>

      <Section heading="10. Governing law">
        These terms are governed by the laws of England and Wales. Disputes
        will be resolved in the courts of England and Wales.
      </Section>

      <Section heading="Contact us">
        Questions about these terms? Email{" "}
        <a className="font-semibold text-terracotta" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        .
      </Section>
    </LegalLayout>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-ink">
        {heading}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
