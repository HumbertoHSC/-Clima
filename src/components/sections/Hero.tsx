"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO, BUSINESS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import { IconGrille } from "@/components/ui/Icons";

/** Palavra dentro de máscara — o reveal sobe de dentro da caixa. */
function MaskedWord({ children, accent }: { children: string; accent?: boolean }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <span
        data-hero-word=""
        className={accent ? "inline-block text-ember" : "inline-block"}
      >
        {children}
      </span>
    </span>
  );
}

function Line({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <span className="block">
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`}>
          <MaskedWord accent={accent}>{word}</MaskedWord>{" "}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15, defaults: { ease: "expo.out" } });

        tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.8 })
          .from(
            "[data-hero-word]",
            { yPercent: 118, duration: 1.15, stagger: 0.055 },
            "-=0.45",
          )
          .fromTo(
            "[data-hero-frame]",
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35 },
            "-=1.0",
          )
          .from("[data-hero-img]", { scale: 1.18, duration: 1.6 }, "<")
          .from(
            "[data-hero-fade]",
            { opacity: 0, y: 24, duration: 0.9, stagger: 0.1 },
            "-=1.05",
          )
          .from(
            "[data-hero-chip]",
            { opacity: 0, x: 18, duration: 0.8, stagger: 0.12 },
            "-=0.7",
          )
          .from("[data-hero-rule]", { scaleX: 0, duration: 1.1, transformOrigin: "left" }, "-=1.1");

        // Parallax: a foto sobe mais devagar que o texto ao rolar.
        gsap.to("[data-hero-img]", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-hero-copy]", {
          yPercent: -8,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
      }, el);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      id="topo"
      className="u-noise relative isolate overflow-hidden bg-ink pt-[104px] sm:pt-[120px]"
    >
      {/* Camadas de fundo: grid técnico + brilho frio deslocado do centro */}
      <div className="u-blueprint pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(120%_90%_at_20%_0%,#000_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-[-12%] h-[560px] w-[560px] rounded-full bg-ice-dark/22 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-[-18%] h-[420px] w-[420px] rounded-full bg-ember-dim/30 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid items-end gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          {/* ---------------- coluna de texto ---------------- */}
          <div data-hero-copy className="lg:col-span-7 lg:pb-10">
            <div data-hero-eyebrow className="mb-8 flex flex-wrap items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ice opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ice" />
              </span>
              <span className="u-tag text-chalk">{HERO.eyebrow}</span>
              <span className="h-px w-10 bg-steel-2" />
              <span className="u-tag text-fog">{BUSINESS.hoursShort}</span>
            </div>

            <h1 className="u-expanded text-[clamp(2.55rem,6vw,5.1rem)] uppercase leading-[0.9] text-white-warm">
              {HERO.headline.map((line) => (
                <Line key={line} text={line} />
              ))}
              {/* a resposta entra menor e recuada — hierarquia, não repetição de peso */}
              <span className="mt-3 block pl-[5%] text-[0.46em] leading-[1.05] sm:pl-[9%]">
                <Line text={HERO.headlineAccent} accent />
              </span>
            </h1>

            <div data-hero-rule className="my-8 h-px w-full max-w-md bg-linear-to-r from-ice/70 to-transparent" />

            <p
              data-hero-fade
              className="max-w-xl text-[1.02rem] leading-relaxed text-fog sm:text-[1.08rem]"
            >
              {HERO.sub}
            </p>

            <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={waLink(MESSAGES.urgente)} arrow className="px-8 py-4">
                Chamar agora
              </MagneticButton>
              <MagneticButton href="#servicos" variant="outline" className="px-8 py-4">
                Ver serviços
              </MagneticButton>
            </div>

            <dl
              data-hero-fade
              className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-steel pt-7 sm:grid-cols-3"
            >
              {[
                { k: "Resposta", v: "Mesmo dia" },
                { k: "Garantia", v: "90 dias" },
                { k: "Orçamento", v: "Sem taxa" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="u-tag text-fog/70">{item.k}</dt>
                  <dd className="u-condensed mt-1.5 text-lg font-semibold text-chalk">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------------- coluna da imagem ---------------- */}
          <div className="relative lg:col-span-5 lg:col-start-8">
            <div
              data-hero-frame
              className="relative aspect-[4/5] w-full overflow-hidden border border-steel-2/70 sm:aspect-[3/4] lg:aspect-[3/3.5]"
            >
              <div data-hero-img className="absolute inset-0 u-will-change">
                <Image
                  src="/images/tecnico.jpg"
                  alt="Técnico da +Clima com uma unidade evaporadora de ar-condicionado nas mãos"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top contrast-[1.08] saturate-[0.82]"
                />
              </div>

              {/* Tratamento: duotone frio por cima, calor por baixo, grelha e vinheta */}
              <div className="pointer-events-none absolute inset-0 bg-ice-dark/28 mix-blend-color" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/12 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-ember/12 mix-blend-overlay" />
              <div className="u-grille pointer-events-none absolute inset-0 opacity-[0.16]" />

              {/* Marcações de esquema técnico nos cantos */}
              <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-ice/60" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-ice/60" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="u-tag text-white-warm/90">
                  <span className="block text-ice">Insuflamento</span>
                  <span className="u-condensed block text-3xl font-bold tracking-tight">
                    11,4°C
                  </span>
                </div>
                <IconGrille className="h-5 w-16 text-white-warm/50" />
              </div>
            </div>

            {/* Fichas técnicas flutuantes, fora do quadro — quebra de grade */}
            <div
              data-hero-chip
              className="absolute -left-3 top-10 hidden border border-steel-2 bg-ink-2/90 px-4 py-3 backdrop-blur-md sm:block lg:-left-16"
            >
              <span className="u-tag block text-fog">Técnico</span>
              <span className="mt-1 block text-sm font-semibold text-chalk">
                Certificado NR-35
              </span>
            </div>

            <a
              data-hero-chip
              href="#promocao"
              className="group absolute -bottom-7 -right-2 hidden border border-ember bg-ink-2/95 px-5 py-4 backdrop-blur-md transition-colors duration-500 hover:bg-ember sm:block lg:-right-10"
            >
              <span className="u-tag block text-ember transition-colors group-hover:text-ink">
                Promoção vigente
              </span>
              <span className="u-condensed mt-1.5 flex items-baseline gap-1.5 text-white-warm transition-colors group-hover:text-ink">
                <span className="text-sm">Limpeza de split</span>
                <span className="u-expanded text-2xl font-extrabold leading-none text-ember transition-colors group-hover:text-ink">
                  R$ 100
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* ---------------- rodapé do hero ---------------- */}
        <div
          data-hero-fade
          className="mt-14 flex items-center gap-6 border-t border-steel pb-10 pt-5 sm:mt-16"
        >
          <a
            href="#diferenciais"
            className="group hidden shrink-0 items-center gap-2 sm:flex"
            aria-label="Rolar para a próxima seção"
          >
            <span className="u-tag text-fog transition-colors group-hover:text-ice">
              Role
            </span>
            <span className="relative block h-8 w-px overflow-hidden bg-steel-2">
              <span className="absolute inset-x-0 top-0 h-3 animate-[scrollhint_1.9s_ease-in-out_infinite] bg-ice" />
            </span>
          </a>

          <Marquee className="flex-1" speed={34} itemClassName="gap-8 pr-8">
            {HERO.ticker.map((item) => (
              <span key={item} className="flex items-center gap-8">
                <span className="u-tag whitespace-nowrap text-fog">{item}</span>
                <span className="h-1 w-1 rotate-45 bg-ember" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
