"use client";

import { motion } from "framer-motion";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { Reveal } from "./motion/Reveal";

export function CtaFinal() {
  return (
    <section className="mt-[88px] bg-navy py-[72px] text-center">
      <div className="mx-auto max-w-[620px] px-5">
        <Reveal>
          <h2 className="font-head mb-4 text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold text-white">
            Conforto que dá pra confiar
          </h2>
          <p className="mb-7 text-[1.05rem] leading-relaxed text-ink-pale">
            Resposta rápida, sem robô e sem enrolação.
          </p>
          <motion.a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center rounded-full bg-cta px-8 py-4 text-[1.05rem] font-bold text-white"
          >
            Chamar no WhatsApp
          </motion.a>
          <a href="tel:+558173023718" className="mt-4 block text-[0.95rem] font-semibold text-ink-pale hover:text-white">
            ou ligue: (81) 7302-3718
          </a>
        </Reveal>
      </div>
    </section>
  );
}
