import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import { Providers } from "@/components/Providers";

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
  description: "I create tailor-made headless online stores, combining unique design and performance, to offer your brand a fluid, memorable user experience tailored to your needs. Take your ecommerce to the next level!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable, "font-montserrat relative text-white bg-background")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
