import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { Matrix } from "@/components/sections/matrix";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { MarqueeDemo } from "@/components/sections/logos";
import { TestimonialsMarquee } from "@/components/sections/testimonials-marquee";
import { Details } from "@/components/sections/details";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";
import { RetroGrid } from "./_components/retro-grid";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <main className="flex-1 pt-16">
        <Navbar />
        <div className="relative">
          <Container>
            <Hero />
            <MarqueeDemo />
            <About />
            <Details />

            <Matrix />
            <TestimonialsMarquee />
            {/* <Testimonials /> */}
            {/* <Testimonials2 /> */}
            <CTA />
            <FAQ />
          </Container>
          <div className="relative">
            <RetroGrid />

            <Contact />
          </div>

          {/* <NewsLetter /> */}
        </div>
        <Footer />
        <CookieConsent />
      </main>
    </>
  );
}
