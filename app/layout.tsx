import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
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
  title: "sejiux",
  description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable, adaptée à vos besoins. Faites passer votre commerce électronique au niveau supérieur !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="fr">
      <body className={cn(montserrat.variable, "font-montserrat relative text-white")}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
