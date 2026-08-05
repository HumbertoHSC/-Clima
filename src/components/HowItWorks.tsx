"use client";

import { STEPS } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-[88px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Como funciona
          </span>
          <h2 className="font-head text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Do primeiro contato ao ar gelado
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <StaggerItem key={step.n}>
              <div className="font-head mb-2 text-[2.2rem] font-extrabold text-sky">{step.n}</div>
              <h3 className="font-head mb-2 text-[1.08rem] font-bold text-navy">{step.title}</h3>
              <p className="text-[0.94rem] leading-relaxed text-slate">{step.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
