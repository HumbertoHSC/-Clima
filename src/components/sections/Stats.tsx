"use client";

import { STATS } from "@/lib/site";
import { Counter } from "@/components/motion/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Faixa clara no meio do site escuro — quebra o ritmo e faz os números
 * pesarem. Fundo em papel quente com sujeira de ruído.
 */
export function Stats() {
  return (
    <section
      aria-labelledby="numeros-titulo"
      className="u-noise relative overflow-hidden border-y border-paper-2 bg-paper py-20 text-ink sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #0b0e13 0 1px, transparent 1px 9px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="numeros-titulo"
            className="u-expanded max-w-xl text-[clamp(1.7rem,3.4vw,2.6rem)] uppercase text-ink"
          >
            Cinco anos subindo em escada
            <span className="text-ember"> na Mata Sul.</span>
          </h2>
          <p className="u-tag max-w-xs text-ink/50">
            Números de operação — atualizados a cada temporada
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" each={0.11} y={30}>
          {STATS.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={[
                "border-t border-ink/15 py-8 sm:py-10",
                i > 0 ? "lg:border-l lg:pl-8" : "",
                i % 2 === 1 ? "sm:border-l sm:pl-8 lg:pl-8" : "",
              ].join(" ")}
            >
              <div className="u-expanded whitespace-nowrap text-[clamp(2.7rem,5.4vw,4.4rem)] font-extrabold leading-none tracking-tight text-ink">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-4 max-w-[15rem] text-[0.95rem] font-medium leading-snug text-ink/75">
                {stat.label}
              </p>
              <p className="u-tag mt-2 text-ink/40">{stat.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
