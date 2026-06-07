import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Nappy Valley",
  description:
    "How Nappy Valley collects, uses and protects your personal data. UK GDPR compliant.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 2026">
      <Section heading="Our role in your privacy">
        We are Nappy Valley — the company behind the Nappy Valley app, a
        peer-to-peer marketplace for parents buying and selling pre-loved
        children&apos;s clothing, equipment and accessories in the United
        Kingdom. Our registered contact address and email for all
        privacy-related enquiries is{" "}
        <a className="font-semibold text-terracotta" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        . When you use Nappy Valley, we act as your &ldquo;data
        controller&rdquo; — meaning we are responsible for deciding how and
        why your personal data is collected, held and used, and for ensuring
        those activities comply with the UK General Data Protection
        Regulation (&ldquo;UK GDPR&rdquo;) and the Data Protection Act 2018.
      </Section>

      <Section heading="Data we collect">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Account data:</strong> name, email address, password (hashed),
            and verification status.
          </li>
          <li>
            <strong>Profile data:</strong> username, profile photo, neighbourhood,
            optional bio, and any details you choose to add about your
            children (name, age, gender, skin tone) for size-matching
            purposes.
          </li>
          <li>
            <strong>Listings and messages:</strong> photos, descriptions, prices,
            chat conversations with other users.
          </li>
          <li>
            <strong>Transaction data:</strong> orders, payouts and Stripe
            customer references (we don&apos;t see or store full card numbers).
          </li>
          <li>
            <strong>Device data:</strong> approximate location (neighbourhood
            level, never exact GPS), push notification token, app version,
            anonymised analytics events.
          </li>
        </ul>
      </Section>

      <Section heading="How we use your data">
        We use the data above to operate the marketplace: matching you to
        listings relevant to your child&apos;s size, enabling chat and
        payment, notifying you when wardrobes you follow list new items, and
        keeping the community safe through moderation and reports. We never
        sell your data, and we never share it with advertisers.
      </Section>

      <Section heading="Children and special category data">
        Children themselves do not use Nappy Valley. We do, however, store
        limited information about your children (first name, approximate
        date of birth, gender, skin tone) for the sole purpose of
        size-matching and avatar styling. We treat this data with extra care
        in line with the UK&apos;s Age Appropriate Design Code: children&apos;s
        date of birth is truncated to month precision in any public-facing
        view, and the underlying records are encrypted on your device.
      </Section>

      <Section heading="Who we share your data with">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Other users:</strong> your public profile (username,
            avatar, ratings, neighbourhood) is visible to other registered users.
          </li>
          <li>
            <strong>Supabase:</strong> our database and authentication
            provider, hosted in the EU.
          </li>
          <li>
            <strong>Stripe:</strong> for processing payments and seller payouts.
          </li>
          <li>
            <strong>Firebase Cloud Messaging:</strong> for delivering push
            notifications.
          </li>
          <li>
            <strong>Resend:</strong> for transactional emails (e.g.
            confirmations, moderation alerts).
          </li>
          <li>
            <strong>PostHog (EU instance):</strong> anonymised product
            analytics. No personally identifiable information is sent.
          </li>
        </ul>
      </Section>

      <Section heading="How long we keep your data">
        We keep your account data for as long as your account is active. If
        you delete your account, we permanently delete profile, listings,
        messages, ratings, follows and notification data within 30 days.
        Transaction records may be retained for up to 6 years to meet UK
        accounting and tax obligations.
      </Section>

      <Section heading="Your rights">
        Under UK GDPR you have the right to access, correct, delete, restrict
        or export your personal data, and to object to processing. To
        exercise any of these rights, email us at{" "}
        <a className="font-semibold text-terracotta" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        . We&apos;ll respond within 30 days. You also have the right to
        complain to the Information Commissioner&apos;s Office (ICO) at any
        time.
      </Section>

      <Section heading="How we protect your data">
        All connections to our servers use HTTPS/TLS. Sensitive personal data
        — push tokens, full names, children&apos;s exact birth dates — is
        stored in encrypted, owner-only tables. Image uploads have GPS
        metadata stripped automatically before they reach our servers. Admin
        accounts use two-factor authentication.
      </Section>

      <Section heading="Cookies and analytics">
        We use a minimal first-party cookie for keeping you signed in. We
        don&apos;t use advertising or tracking cookies. Analytics events are
        sent to PostHog (EU) with no personally identifiable information.
      </Section>

      <Section heading="Contact us">
        For any privacy questions or to exercise your rights, contact us at{" "}
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
