import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "./_contexts";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/hooks/google/gtag";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BigBased.AI | Independent Wealth Through AI Trading",
  description:
    "Build independent wealth with our agentic crypto trading bot powered by advanced AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} dark antialiased bg-white dark:bg-neutral-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
