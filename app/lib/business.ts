export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || process.env.DEMO_BASE_PATH || "").replace(/\/$/, "");
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const business = {
  name: "Arkady's Market",
  phone: "+1 763 544 9000",
  phoneDisplay: "(763) 544-9000",
  phoneHref: "tel:+17635449000",
  email: "fainaalbert@yahoo.com",
  street: "3435 Highway 169 N",
  city: "Plymouth, MN 55441",
  facebook: "https://www.facebook.com/p/Arkadys-Market-100063665405259/",
  directions: "https://www.google.com/maps/search/?api=1&query=Arkadys+Market+3435+Highway+169+N+Plymouth+MN+55441",
  hours: "10:00–21:00",
  timeZone: "America/Chicago",
  siteUrl: BASE_PATH ? `https://demo.plexrs.com${BASE_PATH}` : "https://arkadysmarket.com",
};
