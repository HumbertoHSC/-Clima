"use client";

import { PROMO, BUSINESS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Faixa da promoção — o único bloco em laranja cheio do site inteiro.
 * Vem logo depois do hero de propósito: é o gancho que faz a pessoa chamar.
 */
export function Promo() {
  return (
    <section
      id="promocao"
      aria-labelledby="promo-titulo"
      className="relative border-t border-ember/50 bg-ink"
    >
      <div className="u-noise relative overflow-hidden">
        <div className="u-blueprint-fine pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:linear-gradient(to_right,#000,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-ember-dim/35 blur-[130px]" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-12 lg:gap-8">
          {/* preço */}
          <Reveal className="lg:col-span-4" y={30}>
            <span className="u-tag mb-5 inline-flex items-center gap-2 border border-ember px-3 py-1.5 text-ember">
              <span className="h-1.5 w-1.5 rotate-45 bg-ember" />
              {PROMO.eyebrow}
            </span>

            <h2 id="promo-titulo" className="u-expanded text-[clamp(1.9rem,3.6vw,2.8rem)] uppercase text-white-warm">
              {PROMO.title}
            </h2>

            <div className="mt-6">
              <span className="u-tag block text-fog">{PROMO.priceLabel}</span>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-4">
                <span className="u-expanded flex items-baseline text-ember">
                  <span className="text-2xl font-bold sm:text-3xl">R$</span>
                  <span className="ml-3 text-[clamp(4.2rem,11vw,8rem)] font-extrabold leading-[0.85]">
                    {PROMO.price}
                  </span>
                </span>
                <span className="u-tag text-fog">{PROMO.unit}</span>
              </div>
            </div>
          </Reveal>

          {/* o que entra */}
          <Reveal className="lg:col-span-4 lg:col-start-6" y={30} delay={0.1}>
            <p className="max-w-md leading-relaxed text-chalk">{PROMO.desc}</p>

            <ul className="mt-7 flex flex-col gap-3">
              {PROMO.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-fog">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-ice" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="u-tag mt-6 text-fog/60">{PROMO.note}</p>
          </Reveal>

          {/* ação */}
          <Reveal className="lg:col-span-3 lg:col-start-10" y={30} delay={0.18}>
            <div className="flex flex-col gap-4">
              <MagneticButton
                href={waLink(MESSAGES.promo)}
                arrow
                className="w-full justify-center py-4"
              >
                Quero a promoção
              </MagneticButton>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="u-tag text-center text-fog transition-colors hover:text-ice"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
