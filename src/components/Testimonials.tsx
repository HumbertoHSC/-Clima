"use client";

import { TESTIMONIALS } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

export function Testimonials() {
  return (
    <section id="depoimentos" className="pt-[88px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <Reveal className="mx-auto mb-11 max-w-[620px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Depoimentos
          </span>
          <h2 className="font-head text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Quem já chamou, confia
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <article className="flex h-full flex-col gap-[18px] rounded-[20px] border border-card-border bg-white p-7">
                <p className="italic leading-relaxed text-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{t.name}</div>
                    <div className="text-[0.83rem] text-text-softer">{t.location}</div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
