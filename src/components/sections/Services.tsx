"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SERVICES, BRANDS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { IconArrow } from "@/components/ui/Icons";
import { useIsDesktop } from "@/hooks/useMediaQuery";

/** Cantos chanfrados — detalhe de chapa metálica, no lugar do card arredondado. */
const CHAMFER =
  "[clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)]";

const SPANS: Record<string, string> = {
  instalacao: "lg:col-span-8",
  corretiva: "lg:col-span-4",
  preventiva: "lg:col-span-4",
  higienizacao: "lg:col-span-4",
  gas: "lg:col-span-4",
  venda: "lg:col-span-12",
};

type Service = (typeof SERVICES)[number];
type Variant = "default" | "featured" | "wide";

function ServiceCard({
  service,
  variant = "default",
}: {
  service: Service;
  variant?: Variant;
}) {
  const featured = variant === "featured";
  const wide = variant === "wide";

  return (
    <a
      href={waLink(MESSAGES.servico(service.title))}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden border border-steel bg-ink-2 p-7 sm:p-8",
        "transition-[border-color,background-color] duration-500 hover:border-steel-2 hover:bg-ink-3",
        featured ? "min-h-[340px]" : wide ? "min-h-0" : "min-h-[248px]",
        wide && "lg:flex-row lg:items-center lg:justify-start lg:gap-12",
        CHAMFER,
      )}
    >
      {featured && (
        <>
          {/* A foto só aparece no hover, sempre tratada — nunca a foto crua */}
          <div className="pointer-events-none absolute inset-0 opacity-45 transition-opacity duration-700 ease-out-expo group-hover:opacity-90">
            <Image
              src="/images/fluxo.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="scale-[1.15] object-cover object-[70%_50%] saturate-[0.4] contrast-[1.15] brightness-[0.85] transition-transform duration-[1400ms] ease-out-expo group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/35" />
            <div className="absolute inset-0 bg-ice-dark/25 mix-blend-color" />
          </div>
          <div className="u-blueprint-fine pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_top_left,#000,transparent_60%)]" />
        </>
      )}

      <div className={cn("relative flex items-start justify-between gap-6", wide && "lg:w-24 lg:flex-col lg:items-start lg:gap-8")}>
        <span className="u-tag text-ice">{service.n}</span>
        <span className="h-4 w-4 shrink-0 text-fog transition-all duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember">
          <IconArrow />
        </span>
      </div>

      <div className={cn("relative mt-8", wide && "lg:mt-0 lg:flex lg:flex-1 lg:items-center lg:gap-12")}>
        <div className={cn(wide && "lg:w-[38%] lg:shrink-0")}>
          <span className="u-tag text-fog/70">{service.lead}</span>
          <h3
            className={cn(
              "u-expanded mt-3 uppercase text-white-warm",
              featured ? "text-[clamp(1.9rem,3.4vw,2.9rem)]" : "text-[1.5rem]",
            )}
          >
            {service.title}
          </h3>
        </div>
        <p
          className={cn(
            "mt-4 leading-relaxed text-fog",
            featured ? "max-w-md text-[1rem]" : "text-[0.92rem]",
            wide && "lg:mt-0 lg:max-w-md",
          )}
        >
          {service.desc}
        </p>

        <ul className={cn("mt-6 flex flex-wrap gap-2", wide && "lg:mt-0 lg:ml-auto lg:justify-end")}>
          {service.points.map((point) => (
            <li
              key={point}
              className="u-tag border border-steel px-2.5 py-1.5 text-[0.62rem] text-fog/85 transition-colors duration-500 group-hover:border-steel-2"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ice transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
    </a>
  );
}

export function Services() {
  const isDesktop = useIsDesktop();
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);

  // Arraste com inércia no mobile: mede o excedente do trilho.
  useEffect(() => {
    if (isDesktop) return;
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      setDragLimit(Math.max(0, el.scrollWidth - el.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktop]);

  return (
    <section id="servicos" className="relative border-t border-steel bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionHeading
          index="02"
          label="Serviços"
          title={
            <>
              Do furo na parede
              <br />
              ao <span className="text-ice">ar gelado</span> saindo
              <br />
              da grelha.
            </>
          }
          description="Atendemos residência, comércio e pousada em Tamandaré e região. Split hi-wall, multi-split, cassete, piso-teto e janela — de todas as marcas."
        />

        {isDesktop ? (
          <Stagger
            className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-12"
            each={0.07}
          >
            {SERVICES.map((service) => (
              <StaggerItem key={service.id} className={SPANS[service.id]}>
                <ServiceCard
                  service={service}
                  variant={
                    service.id === "instalacao"
                      ? "featured"
                      : service.id === "venda"
                        ? "wide"
                        : "default"
                  }
                />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <div className="mt-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-ember" />
              <span className="u-tag text-fog">Arraste para o lado</span>
            </div>
            <div className="overflow-hidden">
              <motion.div
                ref={trackRef}
                drag="x"
                dragConstraints={{ left: -dragLimit, right: 0 }}
                dragElastic={0.09}
                dragTransition={{ power: 0.28, timeConstant: 320, bounceStiffness: 260, bounceDamping: 30 }}
                className="flex cursor-grab gap-4 active:cursor-grabbing"
              >
                {SERVICES.map((service) => (
                  <div key={service.id} className="w-[78vw] max-w-[340px] shrink-0">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Faixa de marcas — respiro entre blocos densos */}
      <div className="mt-20 border-y border-steel py-5">
        <Marquee speed={44} itemClassName="gap-10 pr-10">
          {BRANDS.map((brand) => (
            <span key={brand} className="flex items-center gap-10">
              <span className="u-condensed whitespace-nowrap text-xl font-semibold uppercase text-fog/45">
                {brand}
              </span>
              <span className="h-3 w-px bg-steel-2" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
