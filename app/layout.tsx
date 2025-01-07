import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-ms",
});

export const metadata: Metadata = {
  title: {
    default: "sejiux | Boutique Shopify Headless",
    template: "%s | sejiux"
  },
  description: "Offrez une expérience headless mémorable à vos clients grâce à une boutique en ligne rapide, performante et sur mesure avec Next.js et Shopify.",
  keywords: ["shopify headless", "shopify", "headless", "boutique headless", "boutique shopify headless", "dropshipping", "boutique dropshipping", "e-commerce", "design sur mesure", "design ux/ui", "designer web", "développeur shopify headless", "développeur shopify", "développeur fullstack", "shopify seo"],
  authors: [{ name: "sejiux" }],
  creator: "sejiux",
  publisher: "sejiux",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sejiux.com",
    siteName: "sejiux",
    title: "sejiux | Expert Shopify Headless",
    description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable.",
    images: [
      {
        url: "https://sejiux.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "sejiux - Expert Shopify Headless"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sejiux",
    creator: "@sejiux",
    title: "sejiux | Expert Shopify Headless",
    description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable.",
    images: ["https://sejiux.com/images/og-image.webp"],
  },
  verification: {
    google: "VeUQ003CQJEmqI8Jhat7AsydV1Lf4NOuzEaViRaR5BQ",
  },
  alternates: {
    canonical: "https://sejiux.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(montserrat.variable, "font-montserrat relative text-white overscroll-x-hidden")} suppressHydrationWarning>
        <SpeedInsights />
        <Analytics />
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
