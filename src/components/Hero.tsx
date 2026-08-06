"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { TRUST_POINTS } from "@/lib/data";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section id="topo" className="pt-10 pb-8 sm:pt-14">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-12 px-5">
        <motion.div
          className="min-w-[300px] flex-1 basis-[420px] text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="font-head text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.1] text-navy"
          >
            Seu ar-condicionado não gela mais?
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-4 max-w-[480px] text-[1.1rem] leading-relaxed text-ink-soft">
            A gente resolve hoje. Instalação, manutenção e conserto em Tamandaré-PE e Mata Sul.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap justify-center gap-3">
            <motion.a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 text-base font-bold text-white shadow-sm transition-shadow hover:shadow-md"
            >
              Agendar visita <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-full border-[1.5px] border-outline px-7 py-3.5 text-base font-bold text-navy transition-colors hover:border-navy"
            >
              Ver serviços
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-6">
            {TRUST_POINTS.map((tp) => (
              <div key={tp} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ice">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                </span>
                <span className="text-[0.9rem] font-semibold text-navy">{tp}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex min-w-[260px] flex-1 basis-[340px] justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="relative aspect-square w-full max-w-[400px]">
            <div className="absolute h-[88%] w-[88%] rounded-full bg-[radial-gradient(circle,var(--color-ice)_0%,rgba(238,246,250,0)_70%)]" />
            <div className="relative left-1/2 top-1/2 w-[82%] aspect-[4/5] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] bg-linear-to-br from-navy to-navy-mid shadow-[0_30px_60px_-20px_rgba(20,51,90,0.25)]">
              <div className="flex h-full w-full items-center justify-center p-[18%]">
                {/* Decorative placeholder — substitua por uma foto real de técnico em atendimento */}
                <Image src="/brand/icon-white.svg" alt="" width={120} height={120} className="h-full w-full object-contain opacity-90" />
              </div>
            </div>
            <motion.div
              className="absolute right-[6%] top-[4%] drop-shadow-[0_8px_14px_rgba(79,127,168,0.35)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/brand/icon-gradient.svg" alt="" width={44} height={44} />
            </motion.div>
            <motion.div
              className="absolute bottom-[6%] left-0 opacity-[0.85]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Image src="/brand/icon-gradient.svg" alt="" width={28} height={28} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
