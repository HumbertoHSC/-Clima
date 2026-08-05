"use client";

import { DIFFERENTIALS } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

export function WhyUs() {
  return (
    <section id="por-que" className="mt-[88px] bg-linear-to-b from-[#f3fbff] to-[#eaf4f8] py-20">
      <div className="mx-auto max-w-[1240px] px-5">
        <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Por que nos escolher
          </span>
          <h2 className="font-head text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Confiança do primeiro contato à garantia do serviço
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((d) => (
            <StaggerItem key={d.n} className="flex gap-4">
              <span className="font-head w-11 shrink-0 text-[1.6rem] font-extrabold text-sky">{d.n}</span>
              <div>
                <h3 className="font-head mb-1.5 text-[1.05rem] font-bold text-navy">{d.title}</h3>
                <p className="text-[0.94rem] leading-relaxed text-text-soft">{d.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
