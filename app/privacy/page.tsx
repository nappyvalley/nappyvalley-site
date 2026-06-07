import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

const PRIVACY_EMAIL = "nappyvalley11@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy — Nappy Valley",
  description:
    "How Nappy Valley collects, uses and protects your personal data. UK GDPR compliant.",
};

function MailLink() {
  return (
    <a className="font-semibold text-terracotta" href={`mailto:${PRIVACY_EMAIL}`}>
      {PRIVACY_EMAIL}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2026">
      <Section heading="Our role in your privacy">
        <p>
          &ldquo;We&rdquo; are Nappy Valley — the company behind the Nappy
          Valley app, a peer-to-peer marketplace for parents buying and
          selling pre-loved children&apos;s clothing, equipment and accessories
          in the United Kingdom. Our registered contact address and email for
          all privacy-related enquiries is <MailLink />. When you use Nappy
          Valley, we act as your &ldquo;data controller&rdquo; — meaning we
          are responsible for deciding how and why your personal data is
          collected, held and used, and for ensuring those activities comply
          with the UK General Data Protection Regulation (&ldquo;UK
          GDPR&rdquo;) and the Data Protection Act 2018. &ldquo;Personal
          data&rdquo; means any information that can identify you, directly
          or indirectly, including your name, email address, device
          identifiers, location data or any combination of data points that
          together identify you as an individual. &ldquo;Processing&rdquo;
          covers any operation performed on that data — from the moment it
          is collected, stored or used, to the moment it is deleted. This
          Policy explains in full what data we collect, why we collect it,
          what we do with it, who we share it with, how long we keep it, and
          what rights you have. We have tried to be as clear and complete as
          possible, because we believe transparency is the foundation of a
          trustworthy community.
        </p>
      </Section>

      <Section heading="Your choices">
        <p>
          You are in control of much of the data we hold about you, and there
          are several ways you can manage it. You can choose what you share:
          most of the information you provide on Nappy Valley — profile
          details, listing photographs and descriptions, wardrobe information
          — is optional beyond the minimum required to create an account and
          use the Platform. You decide what to include in your profile, what
          photographs to upload and what information to include in your
          listings. You should check all photographs before uploading to
          ensure they do not inadvertently reveal personal information about
          you or your family. You can manage push notifications: you can
          enable or disable push notifications for different event types
          through your device&apos;s notification settings at any time.
          Disabling push notifications will not affect your ability to use
          the Platform, though you may miss time-sensitive updates about
          orders and messages. You can manage analytics consent: when you
          first access the Platform after logging in, you will be presented
          with a cookie and analytics consent prompt. Selecting
          &ldquo;Essential only&rdquo; will disable PostHog product analytics
          and limit Firebase to crash-reporting only, which is classified as
          a strictly necessary function. You can change this preference at
          any time by contacting us at <MailLink />. You can manage your
          market research consent: if you agreed to the market research
          privacy agreement at registration or through Settings, you can
          withdraw that consent at any time by navigating to Settings →
          Privacy → Privacy agreement and toggling it off, or by contacting
          us. Withdrawal is immediate and prospective — it does not affect
          insights already produced using data collected prior to withdrawal.
          You can delete your account: you can delete your account at any
          time through Settings → Delete Account. Deletion closes your
          account immediately and triggers the data retention and deletion
          schedule described in this Policy.
        </p>
      </Section>

      <Section heading="Your rights">
        <p>
          Under the UK GDPR and the Data Protection Act 2018, you have a
          number of rights in relation to your personal data. The right of
          access: you may request a copy of the personal data we hold about
          you, along with information about how it is used. We will provide
          this free of charge within one calendar month. The right to
          rectification: if any data we hold about you is inaccurate or
          incomplete, you may ask us to correct or complete it. The right to
          erasure: in certain circumstances — for example where the data is
          no longer necessary for the purpose for which it was collected, or
          where you withdraw consent and there is no other legal basis for
          processing — you may ask us to delete your personal data. Note
          that some data may need to be retained to comply with legal
          obligations or to defend legal claims even after an erasure
          request. The right to restriction of processing: in certain
          circumstances, such as where you contest the accuracy of data or
          have objected to processing, you may ask us to restrict its use
          while the matter is resolved. The right to data portability: where
          processing is based on consent or contract and is carried out by
          automated means, you may request a copy of the data you have
          provided to us in a structured, commonly used, machine-readable
          format, and, where technically feasible, ask us to transfer it
          directly to another controller. The right to object: you may object
          at any time to processing that is based on legitimate interests,
          including profiling. We will cease such processing unless we can
          demonstrate compelling legitimate grounds that override your
          interests, or the processing is necessary for the establishment,
          exercise or defence of legal claims. You also have an absolute
          right to object to processing of your data for direct marketing
          purposes. To exercise any of the above rights, please contact us at{" "}
          <MailLink />. We will respond within one calendar month. We may
          need to verify your identity before acting on your request. If you
          are not satisfied with our response or believe we are processing
          your data unlawfully, you have the right to lodge a complaint with
          the UK Information Commissioner&apos;s Office (ICO) at{" "}
          <a
            className="font-semibold text-terracotta"
            href="https://ico.org.uk/make-a-complaint"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk/make-a-complaint
          </a>
          , by post to ICO, Wycliffe House, Water Lane, Wilmslow, Cheshire,
          SK9 5AF, or by telephone on 0303 123 1113.
        </p>
      </Section>

      <Section heading="How we protect your data">
        <p>
          We take the security of your personal data seriously and have put
          in place a range of technical and organisational measures designed
          to protect it against unauthorised access, accidental loss,
          alteration, disclosure or destruction. At the technical level, all
          data in transit between your device and our servers is encrypted
          using TLS (Transport Layer Security). Data at rest is encrypted at
          the storage level within Supabase&apos;s infrastructure.
          Authentication is managed using Supabase Auth, which stores
          passwords in bcrypt-hashed form — plaintext passwords are never
          stored or transmitted. Database access is governed by Row Level
          Security policies that restrict each authenticated user to their
          own data, so no user can access another user&apos;s private
          information through the API. Payment card details are never
          transmitted to or stored on our servers — all card processing is
          handled end-to-end by Stripe within their PCI DSS-compliant
          environment. Crash analytics data transmitted to Firebase
          Crashlytics is pseudonymised and does not contain your email
          address or full name. At the organisational level, access to
          production systems and personal data is restricted to those with a
          documented need. We review our security practices regularly and
          act promptly on any vulnerabilities identified. Despite these
          measures, no system connected to the internet can be guaranteed to
          be completely secure. You also play an important role in protecting
          your data: please use a strong, unique password for your Nappy
          Valley account, do not share your login credentials with anyone,
          and contact us immediately at <MailLink /> if you suspect
          unauthorised access to your account.
        </p>
      </Section>

      <Section heading="How long we keep your data">
        <p>
          We retain your personal data only for as long as is necessary for
          the purposes described in this Policy, and in no case for longer
          than required by applicable law. Our standard retention periods
          are as follows. Account, profile and identity data is retained for
          the lifetime of your account and for a period of up to six years
          following account deletion, in order to meet our obligations under
          tax and financial reporting legislation and to defend against any
          legal claims that may arise during that period. If you deactivate
          your account, it is closed immediately but your data is retained
          for 90 days in case you wish to reactivate — after which deletion
          proceeds. Transaction data, including records of purchases, sales
          and payments, is retained for seven years from the date of the
          relevant transaction in line with our obligations under the Taxes
          Management Act 1970 and related accounting legislation.
          Communications data, comprising in-app messages between users, is
          retained for two years from the date of each message, after which
          it is permanently deleted, unless retention is required in
          connection with a live dispute or legal claim. Children&apos;s
          wardrobe data is deleted within 30 days of account deletion and is
          not subject to extended retention for legal purposes. Technical
          and usage data collected through analytics tools is retained for a
          maximum of 24 months from collection, after which it is aggregated
          or deleted. Push notification tokens and device identifiers are
          deleted within 30 days of account deletion. Where data is retained
          beyond its primary purpose solely to meet a legal obligation,
          access is restricted to personnel with a strict operational need.
        </p>
      </Section>

      <Section heading="Who we share your data with">
        <p>
          We do not sell your personal data to any third party. We share your
          data only in the circumstances described below, and only to the
          extent necessary for each specific purpose. Other users of the
          Platform: your username, profile photograph, listings, ratings and
          publicly visible profile information are accessible to all
          registered users of the Platform as part of its normal operation.
          If you complete a transaction, the other party to that transaction
          may also see your full name and, where relevant to the handover,
          your general location or agreed collection point. Service providers
          and sub-processors acting under our instruction: Supabase Inc.,
          which provides our cloud database and authentication infrastructure
          on servers located within the European Economic Area; Stripe
          Payments Europe Limited, which processes all in-app payments under
          their own regulatory framework as a licensed payment institution
          regulated by the Central Bank of Ireland; Google LLC trading as
          Firebase, which provides crash analytics (Firebase Crashlytics) and
          push notification delivery (Firebase Cloud Messaging); PostHog
          Inc., which provides product analytics under PostHog&apos;s EU
          Cloud, with all data stored on servers within the European Union;
          and any other third-party service providers we engage from time to
          time, each of whom is bound by data processing agreements. Law
          enforcement, courts and regulatory authorities: we may disclose
          your data to government bodies, law enforcement agencies, courts or
          regulators where we are required to do so by applicable law.
          Prospective business acquirers: in the event of a proposed merger,
          acquisition, or sale of all or part of Nappy Valley&apos;s business
          or assets, we may disclose your data to the relevant counterparty
          subject to confidentiality obligations and compliance with
          applicable data protection law.
        </p>
      </Section>

      <Section heading="International transfers">
        <p>
          Some of the sub-processors we use are based outside the United
          Kingdom or process data on servers located outside the UK. Where
          personal data is transferred from the UK to a country that has not
          received an adequacy decision from the UK Secretary of State, we
          ensure appropriate safeguards are in place in accordance with UK
          GDPR requirements. For transfers to Supabase Inc. and PostHog
          Inc., data is stored on servers within the European Economic Area,
          which benefits from UK adequacy regulations. For transfers to
          Google LLC (Firebase), we rely on the International Data Transfer
          Agreement (&ldquo;IDTA&rdquo;) approved by the UK Information
          Commissioner&apos;s Office (&ldquo;ICO&rdquo;), incorporated into
          our agreements with Google. For transfers to Stripe Payments
          Europe Limited, data is processed primarily within the EEA under
          Stripe&apos;s EU entity structure. You may request a copy of the
          relevant transfer safeguards in place for any specific processing
          activity by contacting us at <MailLink />.
        </p>
      </Section>

      <Section heading="Cookies and analytics technologies">
        <p>
          The Nappy Valley app uses a small number of software technologies —
          analogous to cookies in a mobile context — to collect technical
          and usage data. These fall into two categories. Strictly necessary
          technologies are essential for the Platform to function and are
          active regardless of your consent preferences. They include the
          Supabase authentication session token, which is stored securely on
          your device and keeps you logged in between sessions; local device
          storage used to cache listing data and user preferences for
          performance and offline availability; and Firebase Crashlytics,
          which collects anonymised crash reports and performance diagnostics
          necessary to identify and fix bugs. These technologies do not track
          your behaviour for marketing purposes and cannot be disabled
          without breaking core functionality. Optional analytics
          technologies are active only where you have given consent. They
          include the PostHog product analytics SDK, which collects
          pseudonymous usage data — including screen views, feature
          interactions, session duration and device type — to help us
          understand how users engage with the Platform and to guide
          improvements to its design and functionality. PostHog data is
          stored on EU-based servers under PostHog&apos;s EU Cloud
          infrastructure. You may withdraw consent to optional analytics
          technologies at any time by contacting us at <MailLink />, after
          which PostHog data collection will be disabled on your device. We
          do not use advertising technologies, third-party tracking pixels,
          retargeting tools or any technology designed to build a profile of
          you for the purpose of serving advertisements on other platforms.
        </p>
      </Section>

      <Section heading="Children and special category data">
        <p>
          The Nappy Valley Platform is intended exclusively for use by
          adults aged 18 and over. We do not knowingly collect personal data
          directly from children. If you are under 18, please do not create
          an account or submit any personal data through the Platform. If we
          become aware that a person under 18 has created an account, we
          will take steps to delete the account and associated data
          promptly. We collect limited data relating to children only in the
          context of the wardrobe feature, where a parent or guardian user
          creates and manages a wardrobe in their own account for a child in
          their care. This data — which typically comprises a first name or
          nickname, an approximate age range and clothing size — is used
          solely to personalise the user&apos;s browsing experience within
          their own account. It is never displayed publicly in a way that
          identifies a specific child, never cross-referenced with other
          users&apos; data, and never used for any purpose other than those
          described in this Policy. We do not process any special category
          personal data as defined in Article 9 of the UK GDPR, including
          data revealing racial or ethnic origin, political opinions,
          religious or philosophical beliefs, trade union membership,
          genetic data, biometric data, health data, or data concerning sex
          life or sexual orientation. If you believe that data about a child
          or special category data has been submitted to the Platform
          otherwise than as described in this Policy, please contact us
          immediately at <MailLink />.
        </p>
      </Section>

      <Section heading="Market research and anonymised insights">
        <p>
          One of the long-term commercial activities of Nappy Valley is the
          production and sale of anonymised, aggregated market intelligence
          to children&apos;s clothing brands, retailers and related
          commercial partners. This is a revenue-generating activity: we
          sell or otherwise commercialise the statistical insights we
          generate from user behaviour on the Platform. We want to be
          completely transparent about this. Where you have given your
          explicit, informed and freely given consent — at the point of
          registration by checking the relevant box, or subsequently through
          your Privacy settings — we will include your anonymised shopping
          activity data in the datasets from which these insights are
          derived.
        </p>
        <p className="mt-3">
          The insights we produce and sell are statistical in nature. They
          might, for example, describe what proportion of users in a
          particular London borough purchased girls&apos; clothing in a
          specific size range at a given median price point during a
          particular season; or how purchasing patterns in one area differ
          from those in another; or which categories are growing fastest
          among users with children in a particular age range. These
          insights help brands understand real parental purchasing behaviour
          at a granular geographic level — information that is genuinely
          valuable to the children&apos;s apparel and equipment market.
        </p>
        <p className="mt-3">
          No insight we sell or share will contain any personal identifiers
          of any kind. No names, email addresses, usernames, account IDs,
          device identifiers, children&apos;s names or any other data point
          capable of identifying you or your family will ever be included in
          or derivable from any insight we commercialise. All insights are
          produced at an aggregated cohort level, with a minimum cohort size
          of five or more users per segment, so that no individual&apos;s
          behaviour can be inferred. We do not sell, licence or share raw
          transaction data, unaggregated records, or any data that refers to
          identifiable individuals, whether directly or indirectly.
        </p>
        <p className="mt-3">
          Your consent to this commercial processing activity is entirely
          optional. It has no bearing whatsoever on your ability to use any
          feature of the Platform. You may withdraw your consent at any time
          with immediate effect by navigating to Settings → Privacy →
          Privacy agreement and toggling it off, or by contacting us at{" "}
          <MailLink />. Withdrawal of consent stops us including your data
          in future insight derivations but does not affect insights already
          produced, as those contain no data referable to you as an
          individual and cannot be &ldquo;un-aggregated&rdquo;. The consent
          record itself is retained for six years as evidence of lawful
          processing.
        </p>
      </Section>

      <Section heading="Data we collect">
        <p>
          When you interact with Nappy Valley — whether browsing, creating
          an account, listing items, making purchases or contacting us — we
          collect certain information about you. The nature and volume of
          that information depends on how you choose to use the Platform.
          We collect only what is reasonably necessary for the purposes
          described in this Policy.
        </p>
        <p className="mt-3">
          <strong>Information you provide to us.</strong> We collect
          information you provide when you register an account, complete or
          update your profile, create or manage a children&apos;s wardrobe,
          submit a listing, make or receive a payment, communicate with
          other users, or get in touch with us directly. This may include
          identity and contact information, account credentials, details
          relating to the children in your care (used solely to personalise
          your experience), listing and item information, transaction
          details, the content of your communications with other users and
          with us, and records of any preferences or consents you have
          given.
        </p>
        <p className="mt-3">
          <strong>Information we collect from your device and your use of
          the Platform.</strong> We collect certain information automatically
          as you use the Platform, including technical information about your
          device and internet connection, information about how you navigate
          and interact with the app, and approximate location information.
          We may also collect this information through the device permissions
          you grant us, which may include access to your camera and photo
          library (used only when you choose to upload images), access to
          your device&apos;s location services, and permission to send you
          push notifications. You can manage these permissions through your
          device settings at any time.
        </p>
        <p className="mt-3">
          <strong>Information we receive from third parties.</strong> We
          receive limited information from our trusted service providers in
          connection with payments, notification delivery, security
          monitoring and platform analytics. We may also receive information
          about you from other users of the Platform, for example through
          ratings, reviews or reports.
        </p>
      </Section>

      <Section heading="How we use data">
        <p>
          We use your data for several distinct purposes, each of which
          rests on a defined legal basis under UK GDPR. To create and
          maintain your account and allow you to access the Platform, we
          process your identity and contact data on the basis of our
          contract with you. To enable buying and selling, including listing
          items, browsing, messaging between users and completing
          transactions, we process your listing, transaction and
          communications data on the basis of our contract with you. To
          process payments and hold funds pending completion of a handover,
          we process your transaction data via our payment processor Stripe,
          on the basis of our contract with you. To deliver push
          notifications about messages, orders and account activity, we
          process your contact data and device identifiers on the basis of
          our contract with you (for transactional notifications) and your
          consent (for promotional notifications). To personalise your
          browsing experience, including surfacing listings relevant to the
          children in your wardrobe, we process your wardrobe and usage data
          on the basis of our contract with you and our legitimate interest
          in making the Platform useful. To keep the community safe and
          detect fraud, we process technical and usage data on the basis of
          our legitimate interests. To analyse how the Platform is used and
          improve it, we process usage data through PostHog analytics on the
          basis of our legitimate interests. To respond to support requests
          and complaints, we process relevant data on the basis of our
          contract with you or our legitimate interests. To comply with
          legal obligations, we process data as required by applicable law.
          To generate and sell anonymised market intelligence, we process
          your aggregated and anonymised shopping patterns on the basis of
          your explicit consent only. We will never use your data for a
          purpose incompatible with the purpose for which it was collected
          without your consent or another lawful basis.
        </p>
      </Section>

      <Section heading="Contact us">
        <p>
          If you have any questions, concerns or requests relating to this
          Privacy Policy or to the way we handle your personal data, please
          contact us by email at <MailLink />. We aim to acknowledge all
          enquiries within 5 business days and to provide a full response
          within one calendar month. We may update this Privacy Policy from
          time to time to reflect changes in our data processing activities,
          the services we offer, the technologies we use, or applicable
          legal requirements. Where changes are material, we will notify you
          by displaying a prominent notice within the app before the changes
          take effect. Your continued use of the Platform after notification
          of changes constitutes your acknowledgement of the updated Policy.
          We encourage you to review this Policy periodically to stay
          informed about how we protect your data.
        </p>
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
      <div className="mt-3 space-y-0">{children}</div>
    </section>
  );
}
