"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DIFFERENTIALS } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  IconBadge,
  IconClock,
  IconQuote,
  IconShield,
} from "@/components/ui/Icons";

const ICONS = {
  clock: IconClock,
  shield: IconShield,
  quote: IconQuote,
  badge: IconBadge,
} as const;

export function Differentials() {
  const root = useRef<HTMLElement>(null);

  // Os ícones se desenham sozinhos quando a seção entra na tela.
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        el.querySelectorAll<SVGSVGElement>("[data-draw] svg").forEach((svg, index) => {
          const paths = svg.querySelectorAll<SVGGeometryElement>("path, circle");
          paths.forEach((path) => {
            const length = path.getTotalLength?.() ?? 0;
            if (!length) return;
            gsap.fromTo(
              path,
              { strokeDasharray: length, strokeDashoffset: length },
              {
                strokeDashoffset: 0,
                duration: 1.4,
                ease: "power2.inOut",
                delay: index * 0.12,
                scrollTrigger: { trigger: svg, start: "top 88%", once: true },
              },
            );
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
      id="diferenciais"
      className="relative border-t border-steel bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionHeading
          index="01"
          label="Por que a +Clima"
          title={
            <>
              Contratar técnico
              <br />
              <span className="text-ice">não deveria</span> ser
              <br />
              uma aposta.
            </>
          }
          description="Todo mundo já esperou o dia inteiro por um técnico que não veio, ou levou um susto no valor final. A +Clima trabalha para eliminar exatamente esses dois riscos."
        />

        <Stagger className="mt-20 grid gap-px border border-steel bg-steel sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <StaggerItem key={item.id}>
                <div
                  className={`group relative flex h-full flex-col justify-between gap-10 p-7 transition-colors duration-500 hover:bg-ink-3 sm:p-8 ${
                    i % 2 === 1 ? "bg-ink-2" : "bg-ink"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      data-draw
                      className="h-11 w-11 text-ice transition-transform duration-700 ease-out-expo group-hover:-translate-y-1"
                    >
                      <Icon />
                    </span>
                    <span className="u-tag text-fog/50">{item.id}</span>
                  </div>

                  <div>
                    <h3 className="u-condensed text-[1.35rem] font-bold uppercase tracking-tight text-white-warm">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.93rem] leading-relaxed text-fog">
                      {item.desc}
                    </p>
                  </div>

                  {/* fio quente que corre na base no hover */}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
