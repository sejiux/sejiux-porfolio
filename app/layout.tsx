import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import ComponentWithSearchParams from "@/components/ComponentWithSearchParams";

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
  title: "Selimmersive",
  description: "Portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable, "bg-black text-white font-montserrat relative")}>
        <ComponentWithSearchParams />
        {children}
      </body>
    </html>
  );
}
