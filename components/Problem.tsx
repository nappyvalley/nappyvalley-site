export function Problem() {
  return (
    <section id="problem" className="container-page section">
      <div className="max-w-2xl">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-rust" />
          The honest bit
        </span>
        <h2
          className="mt-5 font-display font-semibold leading-tight tracking-tight text-ink"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          Children&apos;s clothing shopping is broken.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-walnut">
          They outgrow it before you&apos;ve worn it twice. So every season you
          start from scratch — opening the same five apps, scrolling the same
          messy feeds, hoping the good stuff hasn&apos;t already gone.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((p) => (
          <article key={p.title} className="card flex flex-col gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-rustBg text-[20px]">
              {p.icon}
            </span>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-walnut">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const painPoints = [
  {
    icon: "⏱",
    title: "They grow fast",
    body: "Sizes change every 2–3 months. The 6–12m bundle you bought is already too small.",
  },
  {
    icon: "🔁",
    title: "Starting from scratch",
    body: "Every season is another hunt across Facebook, Vinted, charity shops and dusty WhatsApp groups.",
  },
  {
    icon: "🧱",
    title: "Marketplaces are messy",
    body: "Endless scroll, irrelevant items, far-away sellers, the same blurry photo of the same playmat.",
  },
  {
    icon: "🌟",
    title: "The great stuff is hidden",
    body: "Some parents have brilliant taste — but you only stumble across their listings by accident.",
  },
];
