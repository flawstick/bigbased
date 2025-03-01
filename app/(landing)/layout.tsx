import "@/app/globals.css";
import { type Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import Script from "next/script";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BigBased.AI | Independent Wealth Through AI Trading",
  description:
    "Build independent wealth with our agentic crypto trading bot powered by advanced AI",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body className="min-h-screen overflow-x-hidden bg-zinc-950 font-['Neue_Haas_Grotesk_Display_Pro',helvetica,sans-serif]">
      <Toaster position="top-right" richColors />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
    </body>
  );
}
