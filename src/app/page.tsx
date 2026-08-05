import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Promo } from "@/components/Promo";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Areas } from "@/components/Areas";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
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
        <Areas />
        <Faq />
        <Contact />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
