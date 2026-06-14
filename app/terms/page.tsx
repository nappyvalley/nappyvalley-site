import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

const LEGAL_EMAIL = "nappyvalley11@gmail.com";

export const metadata: Metadata = {
  title: "Terms & Conditions — Nappy Valley",
  description:
    "The terms governing your use of the Nappy Valley app and website.",
};

function MailLink() {
  return (
    <a className="font-semibold text-terracotta" href={`mailto:${LEGAL_EMAIL}`}>
      {LEGAL_EMAIL}
    </a>
  );
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="May 2026">
      <Section heading="Welcome to Nappy Valley">
        <p>
          Nappy Valley is a community marketplace for parents and caregivers
          to buy and sell pre-loved children&apos;s clothing, equipment and
          accessories. These Terms and Conditions (the &ldquo;Terms&rdquo;)
          are a legal agreement between you and us and govern your use of
          the Nappy Valley mobile application and any associated services
          (together, the &ldquo;Platform&rdquo;). By creating an account or
          continuing to use the Platform, you confirm that you have read and
          agree to be bound by these Terms. We may update these Terms from
          time to time and will notify you when we do. Your continued use of
          the Platform after any update constitutes acceptance of the
          revised Terms.
        </p>
      </Section>

      <Section heading="1. About Nappy Valley and you">
        <p>
          <strong>Who we are.</strong> We are the team behind Nappy Valley.
          You can reach us at <MailLink /> for any questions about these
          Terms or your use of the Platform.
        </p>
        <p className="mt-3">
          <strong>What we do.</strong> We own and operate the Nappy Valley
          Platform, through which we provide the following services: a
          hosted marketplace where individual Sellers can list Items and
          individual Buyers can discover and purchase them (we are an
          intermediary and are not a party to any transaction between
          users); payment processing infrastructure that holds funds
          securely during a transaction; and optional promotional tools that
          Sellers can use to increase the visibility of their listings. We
          are responsible for the services we provide within the limits
          described in these Terms.
        </p>
        <p className="mt-3">
          <strong>About you.</strong> To use the Platform as a registered
          user, you must be at least 18 years old, have the legal capacity
          to enter into binding contracts, use the Platform for personal
          and non-commercial purposes only, and agree to these Terms. The
          Platform is designed for adults. If you are a parent or guardian
          and wish to manage an account that relates in part to a child in
          your care, you accept these Terms on that child&apos;s behalf and
          take full responsibility for all activity on the account.
        </p>
        <p className="mt-3">
          <strong>Buyers and Sellers.</strong> Users can act as a Seller, by
          listing pre-loved children&apos;s items for sale, and/or as a
          Buyer, by browsing the catalogue and purchasing items. A
          transaction is completed when a Buyer clicks to purchase and
          payment is accepted.
        </p>
      </Section>

      <Section heading="2. About these Terms">
        <p>
          These Terms, together with our Privacy Policy and any additional
          policies or guidelines we publish on the Platform, form the
          complete agreement between you and us. If anything in our
          additional policies conflicts with these Terms, the additional
          policy will take precedence for that specific matter. We provide
          links to relevant additional information throughout these Terms
          and within the Platform. If you cannot find what you are looking
          for, please contact us at <MailLink />.
        </p>
      </Section>

      <Section heading="3. How to contact us">
        <p>
          <strong>To report a concern about another user or a listing.</strong>{" "}
          If you believe another user has done something unlawful, violated
          someone&apos;s rights or breached these Terms, you can report it
          to us by contacting <MailLink />. We will investigate and
          cooperate with relevant authorities where required.
        </p>
        <p className="mt-3">
          <strong>To raise a dispute with us.</strong> If you have a
          disagreement with us about how we have handled something, please
          contact us at <MailLink /> and we will do our best to resolve it
          promptly.
        </p>
        <p className="mt-3">
          <strong>For general questions.</strong> You can reach us at{" "}
          <MailLink /> at any time.
        </p>
      </Section>

      <Section heading="What all users should know">
        <p>
          The sections below apply to everyone who uses Nappy Valley,
          whether you are buying, selling or both.
        </p>
      </Section>

      <Section heading="4. Creating and managing your account">
        <p>
          <strong>How to create an account.</strong> To register, you will
          need to provide your name, a valid email address and a password.
          You will need to verify your email address before your account
          becomes active. Please use a genuine email address — disposable or
          masked email addresses are not permitted.
        </p>
        <p className="mt-3">
          <strong>Keeping your account secure.</strong> You are responsible
          for keeping your login credentials confidential and for all
          activity that takes place under your account. If you suspect your
          account has been accessed without your authorisation, contact us
          immediately at <MailLink />.
        </p>
        <p className="mt-3">
          <strong>Verification.</strong> We may ask you to verify certain
          information on your account at any point during your use of the
          Platform. These requests will be proportionate to the concern we
          are seeking to address. If you do not cooperate with a
          verification request, we may restrict access to your account
          until the matter is resolved.
        </p>
        <p className="mt-3">
          <strong>One account per person.</strong> You may hold only one
          account at a time. Creating multiple accounts to circumvent a
          restriction or for any other reason is not permitted.
        </p>
      </Section>

      <Section heading="5. How we use content you share with us">
        <p>
          <strong>Your content.</strong> &ldquo;Your Content&rdquo; means
          anything you upload, submit or post on the Platform, including
          listing photographs, item descriptions, profile information and
          messages. You retain ownership of your content, but by submitting
          it to the Platform you grant us a worldwide, non-exclusive,
          royalty-free licence to use, reproduce, display, adapt and
          distribute it for the purposes of operating and promoting the
          Platform, and for improving our services. This licence ends when
          you delete the relevant content or your account, subject to any
          retention obligations described in our Privacy Policy.
        </p>
        <p className="mt-3">
          <strong>Your responsibility for your content.</strong> You confirm
          that you have all rights necessary to submit your content to the
          Platform, that it does not infringe anyone else&apos;s rights, and
          that it is accurate and not misleading. Please think carefully
          about what you share — check photographs before uploading to
          ensure they do not reveal unintended personal information about
          you or your family.
        </p>
        <p className="mt-3">
          <strong>How we process your personal data.</strong> We process your
          personal data to provide our services and fulfil our obligations
          under these Terms. Please read our{" "}
          <a className="font-semibold text-terracotta" href="/privacy">
            Privacy Policy
          </a>{" "}
          for full details of how your data is collected, used and protected.
        </p>
      </Section>

      <Section heading="6. What you must and must not do">
        <p>
          <strong>You agree to:</strong> comply with these Terms and all
          applicable laws; provide accurate and up-to-date information on
          your account; keep your login credentials confidential and notify
          us immediately of any suspected unauthorised access; take
          responsibility for the content you post and the transactions you
          enter into; and treat other users with respect at all times.
        </p>
        <p className="mt-3">
          <strong>You agree not to:</strong> do anything unlawful, unethical
          or that infringes the rights of others, including their privacy,
          intellectual property or personal safety; list items you do not
          own or have the right to sell; use automated tools, bots, scrapers
          or similar technologies to access or extract data from the
          Platform without our written consent; attempt to gain unauthorised
          access to any part of the Platform or to another user&apos;s
          account; introduce malware, viruses or other harmful code; attempt
          to conduct transactions outside the Platform in order to avoid
          fees or circumvent our policies; harass, threaten or abuse any
          other user; publish false, misleading or defamatory content;
          promote external websites or businesses through your listings or
          messages; or engage in any conduct that we reasonably consider
          harmful to other users, to the community or to the reputation of
          the Platform.
        </p>
      </Section>

      <Section heading="7. How we handle concerns and take action">
        <p>
          <strong>Actions we may take.</strong> If we become aware that you
          are acting in a way that breaches these Terms or is otherwise
          unlawful or harmful, we may take one or more of the following
          steps, proportionate to the nature of the concern: send you a
          warning; remove or correct a listing; restrict features on your
          account; temporarily or permanently suspend your account; or
          notify relevant authorities where there is a risk to safety.
        </p>
        <p className="mt-3">
          <strong>When we may act without notice.</strong> In serious cases
          — including where there is a genuine safety risk, suspected
          fraud, suspected illegal activity, or a significant threat to the
          security of the Platform — we may take action without notifying
          you in advance. We will always inform you of the action taken and
          our reasons, except where doing so would compromise an
          investigation or be prohibited by law.
        </p>
        <p className="mt-3">
          <strong>Your right to appeal.</strong> If we take action against
          your account or content, we will tell you our reasons and what
          action we have taken. You may challenge our decision by contacting
          us at <MailLink />. We will review your case and respond as
          quickly as we reasonably can. You also retain the right to seek
          redress through the courts.
        </p>
      </Section>

      <Section heading="Listing and selling items">
        <p>
          The sections below apply specifically to users who list items for
          sale on the Platform.
        </p>
      </Section>

      <Section heading="8. Listing items for sale">
        <p>
          <strong>What you can sell.</strong> You may list pre-loved
          children&apos;s clothing, equipment and accessories that you
          personally own and have the legal right to sell. Items must comply
          with applicable UK product safety legislation, must not be
          counterfeit, stolen, subject to a product recall, or otherwise
          prohibited. Items that are known to be unsafe or defective in a
          way that is not clearly disclosed must not be listed.
        </p>
        <p className="mt-3">
          <strong>How to create a listing.</strong> To list an item you
          must upload original photographs you have taken yourself and
          provide an honest, accurate description of the item&apos;s
          condition, including any faults, wear or damage. Once your
          listing is published, you are making an offer that a Buyer can
          accept.
        </p>
        <p className="mt-3">
          <strong>Your responsibility as a Seller.</strong> You are solely
          responsible for the accuracy, completeness and legality of your
          listing. By publishing a listing you confirm that you own the
          item, that it is as described, that it is safe and legal to sell
          in the UK, and that you will complete the transaction if a Buyer
          purchases it. Nappy Valley does not inspect, verify or guarantee
          the accuracy of listings.
        </p>
        <p className="mt-3">
          <strong>Removing a listing.</strong> You can remove a listing at
          any time before a Buyer completes a purchase. We may also remove
          listings at our discretion where we believe they breach these
          Terms or applicable law.
        </p>
      </Section>

      <Section heading="9. Completing a sale and arranging handover">
        <p>
          Once a Buyer completes a purchase, you are obligated to fulfil
          the transaction. You and the Buyer are responsible for agreeing a
          handover method — this may be in-person collection or postal
          delivery, as agreed between you. You must ensure the item is
          available and handed over in the condition described. If an issue
          arises with a transaction, please contact us at <MailLink />.
        </p>
      </Section>

      <Section heading="Buying items">
        <p>
          The sections below apply specifically to users purchasing items
          on the Platform.
        </p>
      </Section>

      <Section heading="10. How to buy an item">
        <p>
          To purchase an item, browse the catalogue, select the item you
          want and follow the checkout steps to select a payment method and
          confirm your purchase. The transaction is formed when your
          payment is accepted. Nappy Valley is not a party to the
          transaction — the contract is between you and the Seller. If you
          complete a purchase through any means other than the
          Platform&apos;s checkout, that transaction is entirely at your
          own risk and will not be covered by any protections we offer.
        </p>
        <p className="mt-3">
          <strong>Product safety.</strong> It is your responsibility as a
          Buyer to satisfy yourself that any item you purchase is safe and
          suitable for use by the child for whom it is intended. Please
          refer to our{" "}
          <a className="font-semibold text-terracotta" href="/disclaimer">
            Disclaimer
          </a>{" "}
          for specific guidance on categories of second-hand
          children&apos;s items that carry heightened safety considerations.
        </p>
      </Section>

      <Section heading="11. Transaction issues and disputes">
        <p>
          <strong>If something goes wrong.</strong> If the item you receive
          is significantly different from how it was described, is damaged,
          or is not delivered, please contact us at <MailLink /> as soon as
          reasonably possible after the issue becomes apparent. We will do
          our best to assist in resolving the dispute between you and the
          Seller fairly and promptly.
        </p>
        <p className="mt-3">
          <strong>How we handle disputes.</strong> We may ask both the Buyer
          and the Seller to provide information and evidence to help us
          reach a fair decision. Both parties agree to cooperate with our
          process and to respect the outcome. We are not obligated to
          intervene in every dispute and any decision we make is at our
          discretion. Our involvement does not affect your statutory rights
          as a consumer.
        </p>
        <p className="mt-3">
          <strong>What we cannot help with.</strong> We are unable to assist
          with transactions that were conducted outside the Platform or
          issues that are not reported to us within a reasonable time of
          the transaction.
        </p>
      </Section>

      <Section heading="Payments">
        <p>The section below covers how payments work on the Platform.</p>
      </Section>

      <Section heading="12. How payments work">
        <p>
          <strong>Processing payments.</strong> All payments on the Platform
          are processed by Stripe Payments Europe Limited, a regulated
          payment service provider. By making or receiving a payment
          through the Platform, you agree to Stripe&apos;s terms of service.
          We do not handle payment card details directly — these are
          processed securely by Stripe within their regulated environment.
        </p>
        <p className="mt-3">
          <strong>Holding funds.</strong> When a Buyer completes a purchase,
          funds are held by our payment infrastructure pending completion
          of the agreed handover. Once the transaction is satisfactorily
          completed, funds are released to the Seller. Where a dispute is
          raised, funds may be held for longer while the matter is
          investigated.
        </p>
        <p className="mt-3">
          <strong>Fees.</strong> We charge a platform fee on completed
          transactions. The applicable fee is displayed to you before you
          confirm a transaction. We reserve the right to update our fee
          structure from time to time and will notify you in advance of any
          changes. Fees are non-refundable except where a transaction is
          reversed due to a platform error or upheld dispute. All fees
          shown are inclusive of any applicable VAT.
        </p>
        <p className="mt-3">
          <strong>Payment security.</strong> Please ensure your payment
          details are accurate. To protect against fraud, automated checks
          are applied to transactions. If a payment appears unusual or
          potentially fraudulent, it may be held or declined pending
          review. If you believe an action has been taken incorrectly,
          contact us at <MailLink /> and we will review your case.
        </p>
      </Section>

      <Section heading="13. Messaging other users">
        <p>
          You can send private messages to other users to ask questions
          about listings or arrange transaction details. Messages must not
          be used for any other purpose, including advertising, sending
          unsolicited bulk messages, distributing malware, or sending
          content that is abusive, threatening or illegal. We may review
          messages where there is a reasonable basis to suspect misuse of
          the messaging function, and may hide or remove messages that
          breach these Terms.
        </p>
      </Section>

      <Section heading="14. Intellectual property">
        <p>
          All intellectual property rights in the Platform — including its
          design, software, branding, trade marks and any content we create
          — are owned by or licensed to us. Nothing in these Terms grants
          you any right, title or interest in our intellectual property.
          The licence you grant us over your content is described in
          section 5 above.
        </p>
      </Section>

      <Section heading="15. Our liability">
        <p>
          To the fullest extent permitted by applicable law, we are not
          liable for any indirect, incidental, consequential or punitive
          loss or damage arising from your use of the Platform, any
          transaction between users, or any reliance placed on listing
          information. We are responsible for the services we provide, but
          we are not a party to transactions between users and are not
          responsible for the condition, safety or delivery of items
          listed by Sellers. Nothing in these Terms excludes or limits our
          liability for death or personal injury caused by our negligence,
          for fraud or fraudulent misrepresentation, or for any other
          liability that cannot lawfully be limited.
        </p>
      </Section>

      <Section heading="16. Ending our relationship">
        <p>
          You can close your account at any time, free of charge, by going
          to Settings → Delete Account or by contacting us at <MailLink />.
          We can end these Terms at any time by giving you reasonable prior
          written notice, except in cases of serious breach where we may
          act immediately as described in section 7. These Terms continue
          to apply to any pending transactions or disputes that exist at
          the time of termination. Provisions that by their nature should
          survive termination — including those relating to intellectual
          property, liability and governing law — will do so.
        </p>
      </Section>

      <Section heading="17. Governing law">
        <p>
          These Terms and any dispute or claim arising out of or in
          connection with them shall be governed by the laws of England and
          Wales. You agree to submit to the non-exclusive jurisdiction of
          the courts of England and Wales. If you are a consumer, you may
          also have rights to seek redress through alternative dispute
          resolution schemes available in your jurisdiction. For any
          questions about these Terms, contact us at <MailLink />.
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
