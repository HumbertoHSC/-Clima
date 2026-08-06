import { Header } from "@/components/Header";
import { MobileMenuProvider } from "@/components/MobileMenuContext";
import { Hero } from "@/components/Hero";
import { Promo } from "@/components/Promo";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Areas } from "@/components/Areas";
import { Faq } from "@/components/Faq";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <MobileMenuProvider>
      <Header />
      <main id="conteudo">
        <Hero />
        <Promo />
        <Services />
        <About />
        <WhyUs />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Gallery />
        <Areas />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MobileMenuProvider>
  );
}
