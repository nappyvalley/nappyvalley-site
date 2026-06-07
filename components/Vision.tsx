export function Vision() {
  return (
    <section id="vision" className="container-page section">
      <div className="relative overflow-hidden rounded-card bg-white p-10 shadow-card ring-1 ring-soft sm:p-16">
        {/* Decorative blobs inside the card */}
        <span className="blob right-[-3rem] top-[-3rem] h-72 w-72 bg-butter/70" aria-hidden />
        <span className="blob left-[-3rem] bottom-[-3rem] h-72 w-72 bg-terracotta-xlight/80" aria-hidden />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Our vision
          </span>

          <h2
            className="mt-5 font-display font-semibold leading-tight tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            Built for growing families.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-walnut">
            We&apos;re building Nappy Valley to help parents dress, equip and
            care for their children more efficiently, more affordably, and with
            far less waste — all by leaning on the community of parents already
            around them.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-walnut">
            One in five items of children&apos;s clothing in the UK is worn
            fewer than three times. We think the next generation deserves a
            kinder, more circular wardrobe — and parents deserve a kinder,
            quieter way to shop for it.
          </p>

          {/* Three small value pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["Community", "Sustainability", "Convenience"].map((v) => (
              <span
                key={v}
                className="rounded-pill bg-warm px-4 py-1.5 text-sm font-semibold text-ink ring-1 ring-soft"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
