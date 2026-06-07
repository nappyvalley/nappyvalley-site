/**
 * Phone mockup with placeholder app screen. Designed to communicate the
 * "follow a wardrobe + get notified" loop, not generic browsing.
 *
 * Variants:
 *   "hero"     — top notification + wardrobe card (hero default)
 *   "wardrobe" — a sample followed wardrobe with listings
 *   "browse"   — home feed / age-bracket browsing
 */
type Variant = "hero" | "wardrobe" | "browse";

export function PhoneMockup({ variant = "hero" }: { variant?: Variant }) {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      <span
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-butter/40 blur-3xl"
      />

      {/* iPhone-style outer shell */}
      <div className="rounded-[2.8rem] bg-ink p-2 shadow-card">
        <div className="relative overflow-hidden rounded-[2.3rem] bg-cream">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-ink/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
            </span>
          </div>

          {/* Terracotta gradient header (matches in-app GradientHeader) */}
          <div
            className="relative mt-1 mx-2 rounded-[1.4rem] px-5 pt-4 pb-5"
            style={{
              background: "linear-gradient(180deg, #C86030, #AD4920)",
            }}
          >
            <p className="text-center text-[14px] font-semibold text-white">
              Nappy Valley
            </p>

            {variant === "hero" && <HeroPanel />}
            {variant === "wardrobe" && <WardrobePanel />}
            {variant === "browse" && <BrowsePanel />}
          </div>

          {/* Body — push notification + listings */}
          {variant === "hero" && <HeroBody />}
          {variant === "wardrobe" && <WardrobeBody />}
          {variant === "browse" && <BrowseBody />}

          {/* Bottom tab bar */}
          <div className="mx-3 mb-3 mt-2 flex items-center justify-between rounded-[1rem] bg-white px-3 py-2 shadow-pill ring-1 ring-soft">
            {[
              { l: "Home", active: true },
              { l: "Browse", active: false },
              { l: "Basket", active: false },
              { l: "Me", active: false },
            ].map((tab) => (
              <span
                key={tab.l}
                className={`flex-1 rounded-md py-1 text-center text-[10px] font-semibold ${
                  tab.active ? "text-terracotta" : "text-walnut/60"
                }`}
              >
                {tab.l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Variant: hero (shopping for Tommy + age ring) ─────────────────────── */

function HeroPanel() {
  return (
    <>
      {/* Shopping for badge */}
      <div className="mt-3 flex items-center gap-3 rounded-md bg-white/15 p-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/80 text-[10px] font-bold text-white">
          12–18m
        </span>
        <div className="flex-1">
          <p className="text-[10px] font-medium text-white/70">Shopping for</p>
          <p className="text-[13px] font-semibold text-white">Tommy</p>
        </div>
        <span className="rounded-pill bg-white px-2.5 py-1 text-[10px] font-semibold text-terracotta-dark">
          Next size
        </span>
      </div>
      {/* Child selector chips */}
      <div className="mt-3 flex gap-1.5 rounded-pill bg-white/15 p-1">
        {[
          { name: "Tilly", age: "5m", active: false },
          { name: "Tommy", age: "1y", active: true },
          { name: "Tyler", age: "2y", active: false },
        ].map((c) => (
          <span
            key={c.name}
            className={`flex-1 rounded-pill px-2 py-1 text-center text-[10px] font-semibold ${
              c.active ? "bg-white text-terracotta-dark" : "text-white/70"
            }`}
          >
            {c.name}
          </span>
        ))}
      </div>
    </>
  );
}

function HeroBody() {
  return (
    <div className="px-3 pt-3 pb-4">
      {/* In-app notification banner — the moment of magic */}
      <div className="mb-3 flex items-center gap-2.5 rounded-md bg-white p-2.5 shadow-pill ring-1 ring-soft">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta-xlight text-[14px]">
          🔔
        </span>
        <div className="flex-1 leading-tight">
          <p className="text-[10px] font-semibold text-ink">@meg just listed in 12–18m</p>
          <p className="text-[9px] text-walnut">3 new items in a wardrobe you follow</p>
        </div>
      </div>

      <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-walnut">
        Wardrobes you follow
      </p>

      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          { brand: "MORI", size: "12–18m", price: "£12", tone: "bg-terracotta-xlight" },
          { brand: "Frugi", size: "12–18m", price: "£8", tone: "bg-butter" },
        ].map((c) => (
          <div
            key={c.brand}
            className="overflow-hidden rounded-md bg-white shadow-pill ring-1 ring-soft"
          >
            <div className={`h-16 ${c.tone}`} />
            <div className="px-2 py-1.5">
              <p className="text-[9px] font-medium text-walnut">{c.brand}</p>
              <p className="text-[10px] font-semibold text-ink">{c.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Variant: wardrobe ─────────────────────────────────────────────────── */

function WardrobePanel() {
  return (
    <div className="mt-3 flex items-center gap-2.5 rounded-md bg-white/15 p-2">
      <span className="h-9 w-9 rounded-full bg-butter" />
      <div className="flex-1">
        <p className="text-[10px] font-medium text-white/70">@megs.wardrobe</p>
        <p className="text-[12px] font-semibold text-white">★ 4.8 · 24 sold</p>
      </div>
      <span className="rounded-pill bg-white px-2.5 py-1 text-[10px] font-semibold text-terracotta-dark">
        ✓ Following
      </span>
    </div>
  );
}

function WardrobeBody() {
  return (
    <div className="px-3 pt-3 pb-4">
      <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-walnut">
        Meg&apos;s wardrobe · 12 items
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          { tone: "bg-terracotta-xlight", price: "£12", new: true },
          { tone: "bg-butter", price: "£8", new: false },
          { tone: "bg-warm", price: "£15", new: false },
          { tone: "bg-terracotta-light/60", price: "£10", new: false },
        ].map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-md bg-white shadow-pill ring-1 ring-soft"
          >
            {c.new && (
              <span className="absolute right-1 top-1 z-10 rounded-pill bg-terracotta px-1.5 py-0.5 text-[8px] font-bold text-white">
                NEW
              </span>
            )}
            <div className={`h-16 ${c.tone}`} />
            <div className="px-2 py-1.5">
              <p className="text-[10px] font-semibold text-ink">{c.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Variant: browse ───────────────────────────────────────────────────── */

function BrowsePanel() {
  return (
    <div className="mt-3 flex items-center gap-2 overflow-hidden">
      {["Clothes", "Travel", "Toys", "Sleep"].map((c, i) => (
        <span
          key={c}
          className={`shrink-0 rounded-pill px-2.5 py-1 text-[10px] font-semibold ${
            i === 0
              ? "bg-white text-terracotta-dark"
              : "bg-white/15 text-white/80"
          }`}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function BrowseBody() {
  return (
    <div className="px-3 pt-3 pb-4">
      <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-walnut">
        Shop Tommy&apos;s age range
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          { tone: "bg-terracotta-xlight", price: "£18" },
          { tone: "bg-butter", price: "£10" },
          { tone: "bg-warm", price: "£14" },
          { tone: "bg-terracotta-light/60", price: "£25" },
        ].map((c, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-md bg-white shadow-pill ring-1 ring-soft"
          >
            <div className={`h-16 ${c.tone}`} />
            <div className="px-2 py-1.5">
              <p className="text-[10px] font-semibold text-ink">{c.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
