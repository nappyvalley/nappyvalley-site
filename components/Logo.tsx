export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-terracotta-xlight shadow-pill ring-1 ring-terracotta/30"
      >
        {/* Simple wardrobe/hanger glyph — sits in a blush tile to match the app's
           category icon style. */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-terracotta" fill="none">
          <path
            d="M12 6c-1.1 0-2 .9-2 2 0 .3.1.6.2.9L4 14h16l-6.2-5.1c.1-.3.2-.6.2-.9 0-1.1-.9-2-2-2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M4 14h16v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-[1.35rem] font-semibold tracking-wordmark text-terracotta-dark">
        Nappy Valley
      </span>
    </div>
  );
}
