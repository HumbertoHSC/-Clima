"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IconPlus } from "@/components/ui/Icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative border-t border-steel bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="u-tag text-ice">05</span>
                <span className="h-px w-8 bg-steel" />
                <span className="u-tag text-fog">Dúvidas</span>
              </div>
              <h2 className="u-expanded text-[clamp(2rem,4.2vw,3.2rem)] uppercase text-white-warm">
                Perguntas que
                <br />
                a gente ouve
                <br />
                <span className="text-ice">toda semana.</span>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-fog">
                Se a sua não estiver aqui, manda no WhatsApp. Respondemos mesmo que
                não seja para fechar serviço.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8">
              <MagneticButton href={waLink(MESSAGES.orcamento)} variant="outline" arrow>
                Perguntar direto
              </MagneticButton>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-steel">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q} className="border-b border-steel">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-painel-${i}`}
                      id={`faq-botao-${i}`}
                      className="group flex w-full items-start gap-5 py-6 text-left transition-colors hover:text-ice sm:gap-8 sm:py-7"
                    >
                      <span className="u-tag mt-1.5 shrink-0 text-fog/50 transition-colors group-hover:text-ice">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="u-condensed flex-1 text-[1.15rem] font-semibold leading-snug text-white-warm transition-colors group-hover:text-ice sm:text-[1.35rem]">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-0.5 h-5 w-5 shrink-0 text-fog group-hover:text-ice"
                      >
                        <IconPlus />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="painel"
                        id={`faq-painel-${i}`}
                        role="region"
                        aria-labelledby={`faq-botao-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.3 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-[3.1rem] pr-8 leading-relaxed text-fog sm:pl-[4.4rem]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
