"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AREAS } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

export function Areas() {
  return (
    <section id="areas" className="mt-[88px] pb-4">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-12 px-5">
        <Reveal className="min-w-[280px] flex-1 basis-[380px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Áreas atendidas
          </span>
          <h2 className="font-head mb-3.5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Perto de você, quando você precisa
          </h2>
          <p className="mx-auto mb-6 max-w-[460px] text-[1.03rem] leading-relaxed text-text-soft">
            Atendemos residências, escritórios e comércios em Tamandaré-PE e em toda a Mata Sul de Pernambuco — e
            arredores.
          </p>
          <StaggerGroup className="flex flex-wrap justify-center gap-2.5" stagger={0.05}>
            {AREAS.map((area) => (
              <StaggerItem key={area}>
                <span className="rounded-full border border-ice-border bg-ice px-[18px] py-2 text-sm font-semibold text-navy">
                  {area}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <motion.div
          className="flex min-w-[220px] flex-1 basis-[260px] justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex h-60 w-60 items-center justify-center">
            <motion.div
              className="absolute h-full w-full rounded-full border border-ice-border"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute h-[72%] w-[72%] rounded-full border border-sky"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <div className="absolute h-[44%] w-[44%] rounded-full border border-sky-deep bg-[rgba(191,224,238,0.25)]" />
            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-navy shadow-[0_12px_24px_-8px_rgba(20,51,90,0.5)]">
              <Image src="/brand/icon-white.svg" alt="" width={26} height={26} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
