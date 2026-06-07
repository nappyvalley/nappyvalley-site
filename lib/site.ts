/**
 * Single source of truth for external URLs. Edit here, propagates everywhere.
 *
 * - waitlistUrl: external Coming Soon / waitlist page (or leave as anchor #waitlist
 *   to use the inline form on this site).
 * - appStoreUrl / playStoreUrl: store listings. Use # while the app is in
 *   private TestFlight; swap to real listing URLs at launch.
 * - testFlightUrl: public TestFlight invite link (optional).
 */
export const site = {
  name: "Nappy Valley",
  url: "https://nappyvalley.co.uk",
  supportEmail: "hello@nappyvalley.co.uk",

  // Link the Hero + Waitlist CTAs to either the inline form on this page
  // (anchor) or out to the existing Coming Soon landing page. Swap when ready.
  waitlistUrl: "#waitlist",
  externalWaitlistUrl: "https://nappyvalley.co.uk/waitlist", // existing Coming Soon page

  appStoreUrl: "#",      // TODO: live App Store URL at launch
  playStoreUrl: "#",     // TODO: Play Store URL when Android launches
  testFlightUrl: "#",    // TODO: public TestFlight invite link if you want one

  social: {
    instagram: "https://instagram.com/nappyvalley",
    tiktok: "https://tiktok.com/@nappyvalley",
  },
};
