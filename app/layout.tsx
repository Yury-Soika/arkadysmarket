import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/cyrillic-400.css";
import "@fontsource/inter/cyrillic-600.css";
import "@fontsource/inter/cyrillic-700.css";
import "./globals.css";
import { BASE_PATH, business } from "./lib/business";

export const metadata: Metadata = {
  title: "Arkady’s Market | Eastern European Deli & Grocery in Plymouth, MN",
  description: "German bread baked daily, Eastern European deli favorites, imported groceries and sweets. Visit Arkady’s Market at 3435 Highway 169 N, Plymouth, Minnesota.",
  robots: { index: !BASE_PATH, follow: !BASE_PATH },
  icons: { icon: `${BASE_PATH}/images/logo.jpg` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  url: business.siteUrl,
  sameAs: [business.facebook],
  address: { "@type": "PostalAddress", streetAddress: business.street, addressLocality: "Plymouth", addressRegion: "MN", postalCode: "55441", addressCountry: "US" },
  hasMap: business.directions,
  knowsLanguage: ["en", "ru"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>;
}
