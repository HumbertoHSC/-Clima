import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Promo } from "@/components/sections/Promo";
import { Differentials } from "@/components/sections/Differentials";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main id="conteudo">
        <Hero />
        <Promo />
        <Differentials />
        <Services />
        <Process />
        <Stats />
        <Gallery />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
