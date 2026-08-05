"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";

export function About() {
  return (
    <section id="sobre" className="pt-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-12 px-5">
        <motion.div
          className="min-w-[260px] flex-1 basis-[320px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex aspect-square items-center justify-center rounded-[20px] bg-linear-to-br from-ice to-ice-border p-[18%] shadow-[0_24px_48px_-20px_rgba(20,51,90,0.25)]">
            {/* Decorative placeholder — substitua por uma foto real da equipe */}
            <Image src="/brand/icon-gradient.svg" alt="" width={160} height={160} className="h-full w-full object-contain" />
          </div>
        </motion.div>

        <Reveal className="min-w-[300px] flex-1 basis-[420px]" y={30}>
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Sobre a +Clima
          </span>
          <h2 className="font-head mb-4 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Quem cuida do seu ar-condicionado em Tamandaré e na Mata Sul de PE
          </h2>
          <p className="mb-4 text-[1.03rem] leading-relaxed text-text-soft">
            A +Clima nasceu para levar atendimento próximo e técnico para quem precisa de conforto térmico de
            verdade — sem enrolação e sem letras miúdas no orçamento.
          </p>
          <p className="text-[1.03rem] leading-relaxed text-text-soft">
            Nossa equipe é treinada, educada e trabalha com equipamentos calibrados, atendendo residências,
            escritórios e comércios em toda a região.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
