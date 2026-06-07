const steps = [
  {
    n: "01",
    icon: "💛",
    title: "Find a wardrobe you love",
    body: "Browse local parents whose style, brands and quality match your own. Follow the ones you love.",
    tone: "bg-terracotta-xlight",
  },
  {
    n: "02",
    icon: "🔔",
    title: "Get notified",
    body: "When they list your child's next size — coat, shoes, sleep suits — you're the first to know.",
    tone: "bg-butter",
  },
  {
    n: "03",
    icon: "🤝",
    title: "Buy locally",
    body: "Message the seller, arrange collection nearby. Trusted parents in your own community.",
    tone: "bg-sageBg",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="container-page section">
      <div className="max-w-2xl">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          How it works
        </span>
        <h2
          className="mt-5 font-display font-semibold leading-tight tracking-tight text-ink"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
        >
          Follow. Get notified. Buy.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-walnut">
          One simple loop, designed for how parents actually shop for growing
          children — over and over, season after season.
        </p>
      </div>

      {/* Three step cards */}
      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.n} className="card relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-md ${s.tone} font-display text-lg font-semibold text-ink shadow-pill`}
              >
                {s.n}
              </span>
              <span className="text-2xl" aria-hidden>
                {s.icon}
              </span>
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="leading-relaxed text-walnut">{s.body}</p>

            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-walnut ring-1 ring-soft md:flex"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-10 text-center text-base italic text-walnut">
        Then your child grows into the next size — and the loop starts again.
      </p>
    </section>
  );
}
