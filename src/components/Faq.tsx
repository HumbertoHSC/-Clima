import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { FAQS } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="pt-[88px] pb-[88px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[820px] px-5">
        <Reveal className="mx-auto mb-11 max-w-[620px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Perguntas frequentes
          </span>
          <h2 className="font-head text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Tire suas dúvidas
          </h2>
        </Reveal>

        <StaggerGroup className="flex flex-col gap-3">
          {FAQS.map((faq) => (
            <StaggerItem key={faq.question}>
              <details className="group rounded-2xl border border-card-border bg-white px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-[1.02rem] font-bold text-navy marker:content-none">
                  {faq.question}
                  <CaretDown weight="bold" className="h-4 w-4 shrink-0 text-blue transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-text-soft">{faq.answer}</p>
              </details>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
