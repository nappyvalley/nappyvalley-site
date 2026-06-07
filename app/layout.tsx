import type { Metadata, Viewport } from "next";
import { Fredoka, DM_Sans } from "next/font/google";
import "./globals.css";

// Match the Flutter app: Fredoka for display, DM Sans for body.
// (lib/theme/app_theme.dart uses GoogleFonts.fredoka + GoogleFonts.dmSans.)
const display = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nappy Valley — Never miss the next size up",
  description:
    "Follow local parents whose style you love and get notified when they list the next size up. The wardrobe-following marketplace for growing families.",
  keywords: [
    "secondhand kids clothes",
    "preloved baby clothes",
    "wardrobe sharing",
    "local kids marketplace",
    "Nappy Valley",
  ],
  openGraph: {
    title: "Nappy Valley — Never miss the next size up",
    description:
      "Follow local parents whose style you love and get notified when they list the next size up.",
    url: "https://nappyvalley.co.uk",
    siteName: "Nappy Valley",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nappy Valley — Never miss the next size up",
    description:
      "Follow local parents whose style you love and get notified when they list the next size up.",
  },
  metadataBase: new URL("https://nappyvalley.co.uk"),
};

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
