import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.praisebuilding.com.au"), // replace with actual domain

  title: {
    default: "Praise Building | Residential Builders Sydney",
    template: "%s | Praise Building",
  },

  description:
    "Considered, lasting homes built across Sydney. Specialists in heritage renovations, extensions, alterations and custom new homes throughout Sydney's Eastern Suburbs and Inner West.",

  keywords: [
    "Residential Builders Sydney",
    "Custom Home Builders Sydney",
    "Heritage Renovations Sydney",
    "Home Extensions Sydney",
    "Eastern Suburbs Builders",
    "Inner West Builders",
    "Luxury Home Builders Sydney",
    "Renovation Builders Sydney",
    "Sydney Construction Company",
  ],

  authors: [
    {
      name: "Praise Building",
    },
  ],

  creator: "Praise Building",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.praisebuilding.com.au",
    siteName: "Praise Building",
    title: "Praise Building | Residential Builders Sydney",
    description:
      "Heritage renovations, extensions and custom-built homes across Sydney's Eastern Suburbs and Inner West.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Praise Building Sydney Residential Builders",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Praise Building | Residential Builders Sydney",
    description:
      "Heritage renovations, extensions and custom-built homes across Sydney.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Construction",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Praise Building",
  url: "https://www.praisebuilding.com.au",
  logo: "https://www.praisebuilding.com.au/logo.png",
  areaServed: "Sydney, NSW, Australia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}