import { PhoneMockup } from "./PhoneMockup";

/**
 * "Taste tester" sneak peek section. Currently renders three styled phone
 * mockups. When real screenshots are ready, replace each <PhoneMockup /> with
 * an <Image src="/screenshots/foo.png" /> at the same dimensions (300–340px
 * wide on mobile, scales up on desktop).
 */
export function AppPreview() {
  return (
    <section id="preview" className="container-page section">
      <div className="max-w-2xl">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          A taste of the app
        </span>
        <h2
          className="mt-5 font-display font-semibold leading-tight tracking-tight text-ink"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          A calm, focused shopping experience.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-walnut">
          Designed for parents who don&apos;t have time to scroll. Everything
          you need on the home screen — your child, their next size, and the
          wardrobes you follow.
        </p>
      </div>

      {/* Phone gallery */}
      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6">
        <PreviewCard
          label="Home"
          caption="Shopping for Tommy · 12–18m"
          variant="hero"
        />
        <PreviewCard
          label="Wardrobes"
          caption="@megs.wardrobe · ✓ Following"
          variant="wardrobe"
          translateY="md:translate-y-12"
        />
        <PreviewCard
          label="Browse"
          caption="Tommy's age range · Clothes"
          variant="browse"
        />
      </div>

      <p className="mt-12 text-center text-sm text-walnut">
        Real app screenshots coming as soon as we launch. Watch this space.
      </p>
    </section>
  );
}

function PreviewCard({
  label,
  caption,
  variant,
  translateY = "",
}: {
  label: string;
  caption: string;
  variant: "hero" | "wardrobe" | "browse";
  translateY?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-4 ${translateY}`}>
      <PhoneMockup variant={variant} />
      <div className="text-center">
        <span className="rounded-pill bg-warm px-3 py-1 text-xs font-semibold uppercase tracking-eyebrow text-walnut ring-1 ring-soft">
          {label}
        </span>
        <p className="mt-2 text-sm font-medium text-ink">{caption}</p>
      </div>
    </div>
  );
}
