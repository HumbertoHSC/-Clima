"use client";

import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

const PAIRS = [1, 2, 3];

export function Gallery() {
  return (
    <section id="galeria" className="mt-[88px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <Reveal className="mx-auto mb-11 max-w-[620px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Nosso trabalho
          </span>
          <h2 className="font-head text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Antes e depois
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PAIRS.map((n) => (
            <StaggerItem key={n}>
              {/* Placeholder — substitua pelas fotos reais de antes/depois de cada atendimento */}
              <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-[20px] border border-card-border">
                <div className="relative flex aspect-square items-center justify-center bg-ice">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-navy">
                    Antes
                  </span>
                  <Image src="/brand/icon-navy.svg" alt="" width={40} height={40} className="opacity-40" />
                </div>
                <div className="relative flex aspect-square items-center justify-center bg-linear-to-br from-navy to-navy-mid">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-navy">
                    Depois
                  </span>
                  <Image src="/brand/icon-white.svg" alt="" width={40} height={40} className="opacity-90" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
