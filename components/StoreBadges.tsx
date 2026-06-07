import { site } from "@/lib/site";

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={site.appStoreUrl}
        aria-label="Download on the App Store"
        className="group inline-flex items-center gap-3 rounded-md bg-ink px-5 py-3 text-white shadow-pill transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M16.365 1.43c0 1.14-.49 2.27-1.3 3.08-.86.9-2.27 1.6-3.42 1.5-.14-1.1.45-2.27 1.21-3.04.86-.9 2.34-1.56 3.5-1.54zM20.5 17.2c-.55 1.2-.81 1.74-1.52 2.8-.99 1.48-2.4 3.32-4.13 3.34-1.54.02-1.94-1-4.04-.99-2.1.01-2.54.98-4.08.97-1.74-.02-3.07-1.7-4.06-3.18C0 16.55-.56 11.7 1.16 9.08c1.22-1.86 3.15-2.94 4.95-2.94 1.84 0 3 1.01 4.52 1.01 1.47 0 2.37-1.02 4.5-1.02 1.61 0 3.32.88 4.54 2.4-3.99 2.19-3.34 7.9.83 8.67z" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-white/70">
            Download on the
          </span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </a>

      <a
        href={site.playStoreUrl}
        aria-label="Get it on Google Play"
        className="group inline-flex items-center gap-3 rounded-md bg-ink px-5 py-3 text-white shadow-pill transition hover:-translate-y-0.5 hover:bg-terracotta-dark"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path d="M3.6 1.7c-.35.32-.55.81-.55 1.45v17.7c0 .64.2 1.13.56 1.45l.07.06 9.91-9.91v-.23L3.68 1.65l-.08.05z" fill="#F0D88A" />
          <path d="m17 14.4-3.4-3.4v-.23l3.4-3.4.08.04 4.02 2.28c1.15.65 1.15 1.71 0 2.37l-4.02 2.28-.08.06z" fill="#E09060" />
          <path d="m17.08 14.34-3.48-3.48-9.99 10c.38.4 1 .45 1.7.05L17.08 14.34" fill="#C86030" />
          <path d="M17.08 7.38 5.31.86c-.7-.4-1.32-.35-1.7.05l9.99 9.95 3.48-3.48z" fill="#F0D8C8" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-white/70">
            Get it on
          </span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
