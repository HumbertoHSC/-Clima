"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { IconPlus } from "@/components/ui/Icons";
import { useScrollLock } from "@/components/providers/SmoothScroll";

const SPANS: Record<string, string> = {
  higienizacao: "lg:col-span-7",
  instalacao: "lg:col-span-5 lg:row-span-2",
  ambiente: "lg:col-span-4",
  fluxo: "lg:col-span-3",
};

/** Enquadramento por item — evita que a mesma foto pareça repetida. */
const POSITIONS: Record<string, string> = {
  higienizacao: "object-[45%_40%]",
  instalacao: "object-[50%_88%]",
  ambiente: "object-[60%_35%]",
  fluxo: "object-center",
};

const RATIOS: Record<string, string> = {
  higienizacao: "aspect-[16/10]",
  instalacao: "aspect-[3/4] lg:aspect-auto lg:h-full",
  ambiente: "aspect-[4/3]",
  fluxo: "aspect-[4/3]",
};

type Item = (typeof GALLERY)[number];

export function Gallery() {
  const [active, setActive] = useState<Item | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const lockScroll = useScrollLock();

  useEffect(() => {
    if (!active) return;
    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
      lastFocus.current?.focus();
    };
  }, [active, lockScroll]);

  return (
    <section
      id="galeria"
      className="relative border-t border-steel bg-ink-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionHeading
          index="04"
          label="Trabalhos"
          title={
            <>
              Serviço entregue
              <br />
              <span className="text-ice">é serviço</span> que a
              <br />
              gente mostra.
            </>
          }
          description="Alguns atendimentos recentes na região. Toque para ver o detalhe técnico de cada um."
        />

        <Stagger
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
          each={0.1}
          y={44}
        >
          {GALLERY.map((item) => (
            <StaggerItem key={item.id} className={SPANS[item.id]}>
              <button
                type="button"
                onClick={() => setActive(item)}
                aria-label={`Ampliar: ${item.title}, ${item.place}`}
                className={cn(
                  "group relative w-full overflow-hidden border border-steel text-left",
                  RATIOS[item.id],
                )}
              >
                <motion.div layoutId={`foto-${item.id}`} className="absolute inset-0">
                  <Image
                    src={item.src}
                    alt={`${item.title} — ${item.place}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className={cn(
                      "object-cover saturate-[0.35] contrast-[1.12] brightness-[0.9] transition-[transform,filter] duration-[1200ms] ease-out-expo group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-100",
                      POSITIONS[item.id],
                    )}
                  />
                </motion.div>

                {/* tratamento constante: azul frio + sombra por baixo */}
                <span className="pointer-events-none absolute inset-0 bg-ice-dark/40 mix-blend-color transition-opacity duration-700 group-hover:opacity-40" />
                <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent" />
                <span className="u-grille pointer-events-none absolute inset-0 opacity-10" />

                <span className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white-warm/30 bg-ink/40 text-white-warm backdrop-blur-sm transition-colors duration-500 group-hover:border-ice group-hover:text-ice">
                  <span className="h-4 w-4">
                    <IconPlus />
                  </span>
                </span>

                <span className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="u-tag block text-ice">{item.place}</span>
                  <span className="u-condensed mt-2 block text-xl font-bold uppercase text-white-warm sm:text-2xl">
                    {item.title}
                  </span>
                  <span className="mt-2 block max-w-sm text-[0.86rem] leading-snug text-fog opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {item.detail}
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* ---------------- lightbox ---------------- */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-void/92 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.figure
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl border border-steel-2 bg-ink"
            >
              <motion.div
                layoutId={`foto-${active.id}`}
                className="relative aspect-[16/10] w-full overflow-hidden"
              >
                <Image
                  src={active.src}
                  alt={`${active.title} — ${active.place}`}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-ice-dark/18 mix-blend-color" />
              </motion.div>

              <motion.figcaption
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="flex flex-col gap-2 border-t border-steel p-6"
              >
                <span className="u-tag text-ice">{active.place}</span>
                <h3 className="u-condensed text-2xl font-bold uppercase text-white-warm">
                  {active.title}
                </h3>
                <p className="max-w-2xl text-[0.95rem] leading-relaxed text-fog">
                  {active.detail}
                </p>
              </motion.figcaption>

              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="absolute right-3 top-3 flex h-11 w-11 rotate-45 items-center justify-center border border-white-warm/30 bg-ink/70 text-white-warm backdrop-blur-sm transition-colors hover:border-ember hover:text-ember"
              >
                <span className="h-5 w-5">
                  <IconPlus />
                </span>
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
