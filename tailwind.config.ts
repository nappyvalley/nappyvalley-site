import type { Config } from "tailwindcss";

// Token names + hexes are taken from the Flutter app's AppTheme so the
// website renders pixel-identically to the in-app experience.
// (lib/theme/app_theme.dart)
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        cream:  "#F5F0E8", // bg — warm linen, every section background
        warm:   "#F9F5F0", // cardWarm — nested sections
        soft:   "#EAE0D0", // border colour
        softer: "#D8CABB", // border-mid

        // Brand — terracotta family
        terracotta: {
          DEFAULT: "#C86030", // primary
          dark:    "#501800", // primaryDark (logo, prices, deep CTAs)
          xdark:   "#3A1000", // primaryXDark (rarely used, max contrast)
          light:   "#E09060", // primaryLight (soft fills, secondary icons)
          xlight:  "#F0D8C8", // primaryXLight (blush tint)
        },

        // Accent — butter (selected pills only, never primary CTA)
        butter: {
          DEFAULT: "#F0D88A", // accent
          dark:    "#7A5000", // accentDark (text on butter)
        },

        // Text — two browns only (never lighter than walnut)
        ink:    "#2A1800", // textH — every heading
        walnut: "#6A4020", // textBody / textSub / textMuted

        // Semantic
        sage:    "#5A8050",
        sageBg:  "#DCF0D8",
        rust:    "#CC3322",
        rustBg:  "#FFF0EE",
      },
      fontFamily: {
        // Match app: Fredoka for display, DM Sans for body.
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans:    ["var(--font-sans)",    "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        // Mirror app's radius tokens
        xs:   "8px",
        sm:   "12px",
        md:   "16px",
        lg:   "18px",
        xl:   "22px",
        card: "18px",
        btn:  "22px",
        pill: "9999px",
      },
      boxShadow: {
        // Layered low-opacity browns to mirror AppTheme.shadowCard / Hero / Btn
        card:  "0 1px 3px rgba(58, 16, 0, 0.04), 0 4px 12px rgba(58, 16, 0, 0.08)",
        hero:  "0 2px 4px rgba(58, 16, 0, 0.04), 0 5px 16px rgba(58, 16, 0, 0.08)",
        btn:   "0 1px 2px rgba(58, 16, 0, 0.10), 0 3px 8px rgba(58, 16, 0, 0.20)",
        pill:  "0 1px 4px rgba(58, 16, 0, 0.05)",
        input: "0 1px 4px -1px rgba(58, 16, 0, 0.07)",
      },
      letterSpacing: {
        wordmark: "0.3px",
        eyebrow:  "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
