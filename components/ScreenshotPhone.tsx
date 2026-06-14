import Image from "next/image";

/**
 * Real iPhone-frame mockup that holds an actual screenshot.
 *
 * The frame is locked to modern iPhone aspect (9:19.5 → 393:852 logical),
 * so screenshots taken on a real iPhone Pro (1179×2556) fit edge-to-edge
 * without stretch. Source screenshots should be ≥1170px wide for sharpness.
 *
 * JPEG or PNG both work — Next.js Image handles either; pick whichever
 * the source screenshot is rather than renaming the extension.
 *
 * Pass src + alt; everything else is fixed to keep the device-look
 * consistent.
 */
export function ScreenshotPhone({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Soft glow blob behind the device */}
      <span
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-butter/40 blur-3xl"
      />

      {/* Outer iPhone shell — dark bezel + drop shadow */}
      <div className="rounded-[2.8rem] bg-ink p-2 shadow-card">
        {/* Inner screen — clip the image to the rounded screen shape and
            lock the aspect ratio to the source screenshot (1179x2314), so
            nothing crops at the edges. */}
        <div
          className="relative overflow-hidden rounded-[2.3rem] bg-cream"
          style={{ aspectRatio: "1179 / 2314" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 640px) 320px, 280px"
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
