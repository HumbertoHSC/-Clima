"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { IconAirflow } from "@/components/ui/Icons";

/**
 * Linha do tempo presa ao scroll: o trilho se preenche conforme a página
 * avança e cada etapa acende quando chega na altura de leitura.
 */
export function Process() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const steps = gsap.utils.toArray<HTMLElement>("[data-step]");

        gsap.fromTo(
          "[data-rail-fill]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: "[data-steps]",
              start: "top 62%",
              end: "bottom 78%",
              scrub: 0.6,
            },
          },
        );

        steps.forEach((step, i) => {
          gsap.fromTo(
            step,
            { opacity: 0, y: 46 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "expo.out",
              scrollTrigger: { trigger: step, start: "top 84%", once: true },
            },
          );
          ScrollTrigger.create({
            trigger: step,
            start: "top 62%",
            end: "bottom 40%",
            onToggle: (self) => {
              if (self.isActive) step.setAttribute("data-active", "");
              else step.removeAttribute("data-active");
            },
            id: `step-${i}`,
          });
        });
      }, el);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      id="processo"
      className="u-noise relative overflow-hidden border-t border-steel bg-ink-2 py-24 sm:py-32"
    >
      <div className="u-blueprint pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(90%_70%_at_80%_10%,#000,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* ------- coluna fixa ------- */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="u-tag text-ice">03</span>
                <span className="h-px w-8 bg-steel" />
                <span className="u-tag text-fog">Como funciona</span>
              </div>
              <h2 className="u-expanded text-[clamp(2.1rem,4.6vw,3.6rem)] uppercase text-white-warm">
                Quatro passos,
                <br />
                <span className="text-ember">zero surpresa</span>
                <br />
                no final.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-fog">
                O mesmo roteiro em todo atendimento, do apartamento de um quarto à
                pousada com dez aparelhos. Você sempre sabe qual é o próximo passo.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <Parallax amount={10} className="relative aspect-[4/3] overflow-hidden border border-steel-2/70">
                <Image
                  src="/images/ambiente.jpg"
                  alt="Unidade evaporadora instalada em ambiente residencial"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="scale-[1.08] object-cover"
                />
                <div className="absolute inset-0 bg-ice-dark/35 mix-blend-color" />
                <div className="absolute inset-0 bg-linear-to-t from-ink-2 via-transparent to-transparent" />
                <div className="u-grille absolute inset-0 opacity-15" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <IconAirflow className="h-6 w-6 text-ice" />
                  <span className="u-tag text-white-warm/85">Entrega testada</span>
                </div>
              </Parallax>
            </Reveal>

            <Reveal delay={0.16} className="mt-8 hidden lg:block">
              <MagneticButton href={waLink(MESSAGES.orcamento)} arrow>
                Começar pelo passo 1
              </MagneticButton>
            </Reveal>
          </div>
        </div>

        {/* ------- etapas ------- */}
        <div data-steps className="relative lg:col-span-6 lg:col-start-7">
          {/* trilho */}
          <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-steel sm:left-[19px]">
            <div data-rail-fill className="h-full w-full origin-top bg-linear-to-b from-ice via-ice/70 to-ember" />
          </div>

          <ol className="space-y-14 sm:space-y-16">
            {PROCESS.map((step) => (
              <li
                key={step.n}
                data-step
                className="group relative pl-14 sm:pl-20"
                style={{ opacity: 0 }}
              >
                {/* marcador */}
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center border border-steel-2 bg-ink-2 transition-colors duration-500 group-data-[active]:border-ice sm:h-10 sm:w-10">
                  <span className="h-1.5 w-1.5 rotate-45 bg-steel-2 transition-all duration-500 group-data-[active]:scale-150 group-data-[active]:bg-ice" />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="u-tag text-fog/60 transition-colors duration-500 group-data-[active]:text-ice">
                    Etapa {step.n}
                  </span>
                  <span className="u-tag text-ember">{step.time}</span>
                </div>

                <h3 className="u-expanded mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)] uppercase text-white-warm">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-fog">{step.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 lg:hidden">
            <MagneticButton href={waLink(MESSAGES.orcamento)} arrow className="w-full">
              Começar pelo passo 1
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
