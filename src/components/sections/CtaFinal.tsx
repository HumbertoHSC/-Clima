import { BUSINESS, AREAS, PROMO, SERVICES } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IconArrow } from "@/components/ui/Icons";

/**
 * Fechamento da página: sem formulário — o chamado sai direto pelo WhatsApp
 * ou pelo telefone, que é como o cliente já atende.
 */
export function CtaFinal() {
  return (
    <section
      id="contato"
      className="u-noise relative overflow-hidden border-t border-steel bg-ink-2 py-24 sm:py-32"
    >
      <div className="u-blueprint pointer-events-none absolute inset-0 opacity-45 [mask-image:radial-gradient(100%_80%_at_10%_0%,#000,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-ember-dim/25 blur-[150px]" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* ------------ chamada ------------ */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="u-tag text-ice">06</span>
              <span className="h-px w-8 bg-steel" />
              <span className="u-tag text-fog">Contato</span>
            </div>
            <h2 className="u-expanded text-[clamp(2rem,4.4vw,3.4rem)] uppercase leading-[0.95] text-white-warm">
              Manda uma mensagem
              <br />
              contando o problema.
              <br />
              <span className="text-ember">A gente vai aí.</span>
            </h2>
            <p className="mt-7 max-w-lg leading-relaxed text-fog">
              Sem formulário e sem espera: chame no WhatsApp — de preferência com
              um vídeo curto do aparelho ligado — e o retorno sai em minutos
              dentro do horário de atendimento.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href={waLink(MESSAGES.urgente)} arrow className="px-8 py-4">
              Chamar no WhatsApp
            </MagneticButton>
            <MagneticButton
              href={`tel:${BUSINESS.phoneRaw}`}
              variant="outline"
              className="px-8 py-4"
            >
              {BUSINESS.phoneDisplay}
            </MagneticButton>
          </Reveal>

          {/* lembrete da promoção no fechamento */}
          <Reveal delay={0.14} className="mt-10">
            <a
              href={waLink(MESSAGES.promo)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex max-w-lg items-center justify-between gap-6 border border-ember/50 bg-ember/[0.07] p-5 transition-colors duration-500 hover:bg-ember/15"
            >
              <span>
                <span className="u-tag block text-ember">{PROMO.eyebrow}</span>
                <span className="u-condensed mt-1.5 block text-xl font-bold text-white-warm">
                  {PROMO.title} {PROMO.priceLabel} R$ {PROMO.price}
                </span>
                <span className="u-tag mt-1.5 block text-fog/70">{PROMO.unit}</span>
              </span>
              <span className="h-5 w-5 shrink-0 text-ember transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1">
                <IconArrow />
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid gap-px border border-steel bg-steel sm:grid-cols-2">
            <div className="bg-ink-2 px-5 py-5">
              <span className="u-tag block text-fog">Atendimento</span>
              <span className="mt-1.5 block text-[0.98rem] text-chalk">
                {BUSINESS.hours}
              </span>
            </div>
            <div className="bg-ink-2 px-5 py-5">
              <span className="u-tag block text-fog">Base</span>
              <span className="mt-1.5 block text-[0.98rem] text-chalk">
                {BUSINESS.street}
              </span>
              <span className="u-tag mt-1 block text-fog/70">{BUSINESS.base}</span>
            </div>
          </Reveal>
        </div>

        {/* ------------ atalhos por serviço ------------ */}
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal y={40}>
            <span className="u-tag mb-3 block text-fog">
              Já sabe o que precisa? Chame direto:
            </span>
            <ul className="grid gap-px border border-steel bg-steel sm:grid-cols-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={waLink(MESSAGES.servico(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full items-center justify-between gap-3 bg-ink-2 px-4 py-4 transition-colors duration-300 hover:bg-ink-3"
                  >
                    <span className="text-[0.92rem] text-chalk transition-colors group-hover:text-ice">
                      {service.title}
                    </span>
                    <span className="h-3.5 w-3.5 shrink-0 text-fog/60 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ice">
                      <IconArrow />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="mt-4 border border-steel bg-ink-2 px-5 py-5">
            <span className="u-tag block text-fog">Área de cobertura</span>
            <span className="mt-2.5 flex flex-wrap gap-1.5">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="u-tag border border-steel px-2 py-1 text-[0.6rem] text-fog/85"
                >
                  {area}
                </span>
              ))}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
