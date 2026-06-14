import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

const LEGAL_EMAIL = "nappyvalley11@gmail.com";

export const metadata: Metadata = {
  title: "Disclaimer — Nappy Valley",
  description:
    "Important safety information about purchasing second-hand children's items through Nappy Valley.",
};

function MailLink() {
  return (
    <a className="font-semibold text-terracotta" href={`mailto:${LEGAL_EMAIL}`}>
      {LEGAL_EMAIL}
    </a>
  );
}

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="May 2026">
      <Section>
        <p>
          This Disclaimer is issued by Nappy Valley Limited (&ldquo;Nappy
          Valley&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;) and applies to all users of the Nappy Valley
          mobile application and associated services (the
          &ldquo;Platform&rdquo;). By accessing or using the Platform, you
          acknowledge that you have read, understood and accepted the
          contents of this Disclaimer. This Disclaimer should be read in
          conjunction with our{" "}
          <a className="font-semibold text-terracotta" href="/terms">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a className="font-semibold text-terracotta" href="/privacy">
            Privacy Policy
          </a>
          , which together form the complete agreement between you and Nappy
          Valley Limited in connection with your use of the Platform.
        </p>
      </Section>

      <Section heading="Peer-to-peer marketplace">
        <p>
          Nappy Valley operates as a technology platform that connects
          individual private sellers and buyers of second-hand
          children&apos;s clothing, equipment and related items. Nappy
          Valley Limited is not itself a seller and is not a party to any
          transaction concluded between users of the Platform. We do not
          own, possess, inspect, handle or take title to any item listed on
          the Platform at any time before, during or after a transaction.
          All items are sold directly by the individual Seller to the
          individual Buyer. Nappy Valley&apos;s role is limited to providing
          the technology infrastructure that facilitates discovery and
          communication between users.
        </p>
      </Section>

      <Section heading="No warranty on items">
        <p>
          All items listed on the Platform are offered for sale by
          individual private Sellers and are described solely on the basis
          of information provided by those Sellers. Nappy Valley makes no
          representation or warranty of any kind, whether express, implied,
          statutory or otherwise, with respect to any item listed on the
          Platform, including without limitation any warranty as to the
          accuracy or completeness of any listing description, the
          condition, quality, safety, fitness for purpose, merchantability,
          authenticity or legality of any item. Buyers purchase all items
          entirely at their own risk and are strongly encouraged to satisfy
          themselves as to the condition, suitability and safety of any
          item before completing a purchase.
        </p>
      </Section>

      <Section heading="Product safety">
        <p>
          Parents and guardians are solely and exclusively responsible for
          assessing the suitability and safety of any second-hand item for
          use by or in connection with a child. Nappy Valley Limited does
          not inspect, test, certify, approve or guarantee the safety or
          regulatory compliance of any item listed on the Platform. The
          purchase of second-hand children&apos;s items carries inherent
          risks that do not apply to the purchase of new items, including
          the risk that an item has been subject to undisclosed damage,
          wear or misuse, has been subject to a product safety recall, or
          no longer meets current UK product safety standards.
        </p>
        <p className="mt-3">
          The following categories of item carry specific and heightened
          safety considerations when purchased second-hand, and buyers
          should exercise particular caution and conduct thorough
          independent enquiry before purchasing:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Child car seats and booster seats</strong>, which may
            have been involved in a road traffic collision and should not
            be reused under any circumstances unless the full collision and
            service history is known and verified.
          </li>
          <li>
            <strong>Cot mattresses and sleep surfaces for infants</strong>,
            in respect of which current health guidance recommends the use
            of a new mattress for each infant due to hygiene considerations
            and the potential risk of sudden infant death.
          </li>
          <li>
            <strong>Cots, moses baskets, bedside cribs and other infant
            sleep structures</strong>, which should be checked for recalls,
            structural integrity, missing or damaged components and
            compliance with current British Standards.
          </li>
          <li>
            <strong>Prams, pushchairs, buggies and travel systems</strong>,
            which should be thoroughly inspected for frame integrity,
            buckle and harness function, brake reliability and the absence
            of recalls.
          </li>
          <li>
            <strong>Highchairs, booster seats and feeding chairs</strong>,
            which should be checked for stability, harness integrity and
            the absence of sharp edges or broken components.
          </li>
          <li>
            <strong>Cycle helmets, equestrian helmets and other protective
            headgear</strong>, which should not be used if there is any
            reason to believe the item has previously been involved in an
            impact, as protective integrity cannot be verified by visual
            inspection.
          </li>
          <li>
            <strong>Electrical items and battery-operated toys</strong>,
            which should be checked for compliance with current UK
            Electrical Equipment (Safety) Regulations and UKCA or CE
            marking and for signs of damage, fraying or modification to
            cables or housings.
          </li>
          <li>
            <strong>Toys and play equipment</strong>, which should be
            examined for broken or missing parts, sharp edges, loose
            components that could present a choking hazard, and compliance
            with current UK toy safety legislation.
          </li>
          <li>
            <strong>Open-system breast pumps</strong>, defined as pumps
            where milk or milk residue could come into contact with
            internal components of the motor unit, which are not
            recommended for use by more than one person due to
            cross-contamination risks and the impracticability of effective
            sterilisation of internal components.
          </li>
        </ul>
        <p className="mt-3">
          This list is not exhaustive. If you have any doubt whatsoever
          about the safety or suitability of an item for a child, you
          should not purchase it.
        </p>
      </Section>

      <Section heading="Limitation of liability">
        <p>
          To the fullest extent permitted by the laws of England and Wales
          and any other applicable jurisdiction, Nappy Valley Limited,
          together with its officers, directors, employees, agents,
          licensors and successors, expressly excludes and disclaims all
          liability for any loss, damage, injury, cost or expense of any
          nature whatsoever, whether direct, indirect, consequential,
          incidental, special or punitive, arising out of or in connection
          with: any transaction between users of the Platform; the
          condition, safety, fitness for purpose or quality of any item
          purchased through the Platform; any inaccuracy, omission or
          misrepresentation in any listing; the failure of any Seller to
          deliver an item or any Buyer to complete a purchase; any injury
          to any person, including a child, arising from the use of any
          item purchased through the Platform; or any reliance placed by
          any person on any information appearing on the Platform. Nothing
          in this Disclaimer shall exclude or limit any liability that
          cannot lawfully be excluded or limited under applicable consumer
          protection legislation, including the Consumer Rights Act 2015.
        </p>
      </Section>

      <Section heading="Disputes between users">
        <p>
          Nappy Valley is not obligated to and does not guarantee that it
          will intervene in, mediate or resolve any dispute between a Buyer
          and Seller. Where we do choose to assist in resolving a dispute,
          any decision we make is made at our absolute discretion and does
          not constitute a binding determination of any legal rights or
          obligations. Users are encouraged to resolve disputes between
          themselves directly and in good faith in the first instance.
          Where a dispute cannot be resolved directly, users may seek
          recourse through the courts of England and Wales or through any
          applicable alternative dispute resolution scheme. Contact us at{" "}
          <MailLink /> if you have a concern about a transaction or a
          listing and we will endeavour to assist where we are reasonably
          able to do so.
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      {heading && (
        <h2 className="font-display text-2xl font-semibold text-ink">
          {heading}
        </h2>
      )}
      <div className={heading ? "mt-3 space-y-0" : ""}>{children}</div>
    </section>
  );
}
