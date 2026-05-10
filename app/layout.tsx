import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScroll";
import { Navbar }          from "@/components/layout/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import { LoadingScreen }   from "@/components/ui/LoadingScreen";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE = "https://santorinidigitalsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Santorini Digital Solutions | Web Design & Digital Marketing",
    template: "%s | Santorini Digital Solutions",
  },
  description:
    "Boutique digital agency in Santorini, Greece — premium web design, SEO, booking systems, and digital marketing for hotels, villas, restaurants, and hospitality businesses.",
  keywords: [
    "Santorini digital agency",
    "web design Santorini",
    "digital marketing Greece",
    "hotel website Santorini",
    "SEO Santorini",
    "booking system Greece",
    "hospitality marketing Santorini",
    "villa website design",
    "e-shop Greece",
    "Santorini web developer",
    "ψηφιακό μάρκετινγκ Σαντορίνη",
    "κατασκευή ιστοσελίδας Σαντορίνη",
  ],
  authors: [{ name: "Santorini Digital Solutions" }],
  creator: "Santorini Digital Solutions",
  publisher: "Santorini Digital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    type: "website",
    url: BASE,
    title: "Santorini Digital Solutions | Web Design & Digital Marketing",
    description:
      "Premium web design, SEO, booking systems & digital marketing for Santorini hospitality businesses. Where the Aegean meets the digital age.",
    siteName: "Santorini Digital Solutions",
    locale: "en_US",
    alternateLocale: "el_GR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santorini Digital Solutions",
    description:
      "Premium web design & digital marketing for Santorini hospitality businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE}/#business`,
      name: "Santorini Digital Solutions",
      alternateName: "S.D.S",
      description:
        "Boutique digital agency rooted in Santorini offering premium web design, digital marketing, SEO, booking systems, and brand identity for hospitality businesses across Greece and globally.",
      url: BASE,
      email: "santorinidigitalsolutions@gmail.com",
      telephone: "+306970902261",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santorini",
        addressRegion: "South Aegean",
        addressCountry: "GR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.3932,
        longitude: 25.4615,
      },
      areaServed: [
        { "@type": "Place", name: "Santorini" },
        { "@type": "Place", name: "Greek Islands" },
        { "@type": "Country", name: "Greece" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Local Optimization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Booking System Integration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google & Meta Advertising" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Development" } },
        ],
      },
      priceRange: "€€",
      knowsLanguage: ["en", "el"],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Santorini Digital Solutions",
      description: "Where the Aegean meets the digital age.",
      publisher: { "@id": `${BASE}/#business` },
      inLanguage: ["en", "el"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <LoadingScreen />
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
