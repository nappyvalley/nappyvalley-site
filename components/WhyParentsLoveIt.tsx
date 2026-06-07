const reasons = [
  {
    icon: "👋",
    title: "A trusted community",
    body: "Real parents, verified profiles, ratings from neighbours. Not strangers in a Facebook group.",
    tint: "bg-terracotta-xlight",
  },
  {
    icon: "👗",
    title: "Follow wardrobes",
    body: "Skip the noise. Build a feed of parents whose taste matches yours and never miss what they list.",
    tint: "bg-butter",
  },
  {
    icon: "📍",
    title: "Local first",
    body: "Items from your neighbourhood. No couriers, no waiting. Meet at the playground.",
    tint: "bg-sageBg",
  },
  {
    icon: "🌱",
    title: "Sustainable by design",
    body: "Each item lives three or four childhoods instead of one. A quietly greener way to dress your kids.",
    tint: "bg-warm",
  },
];

export function WhyParentsLoveIt() {
  return (
    <section className="container-page section">
      <div className="max-w-2xl">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-butter-dark" />
          Why parents love it
        </span>
        <h2
          className="mt-5 font-display font-semibold leading-tight tracking-tight text-ink"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          Built around how real families shop.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {reasons.map((r) => (
          <article key={r.title} className="card flex items-start gap-4">
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-[22px] ${r.tint} shadow-pill`}
            >
              {r.icon}
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {r.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-walnut">{r.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
