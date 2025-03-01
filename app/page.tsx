import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Matrix } from "@/components/sections/matrix";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <Matrix />
        <Testimonials />
        <CTA />
        <FAQ />
      </Container>
      <Footer />
      <CookieConsent />
    </>
  );
}
