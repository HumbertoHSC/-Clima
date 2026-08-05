"use client";

import { motion } from "framer-motion";
import { Tag } from "@phosphor-icons/react/dist/ssr";
import { waLink } from "@/lib/whatsapp";
import { Reveal } from "./motion/Reveal";

export function Promo() {
  return (
    <section className="pt-4">
      <div className="mx-auto max-w-[1240px] px-5">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] bg-linear-to-br from-navy to-navy-mid px-7 py-6 shadow-[0_20px_40px_-20px_rgba(20,51,90,0.4)]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 rounded-full bg-cta px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
                <Tag weight="fill" className="h-3.5 w-3.5" /> Promoção
              </span>
              <p className="m-0 text-[1.1rem] font-bold text-white">
                Manutenção preventiva a partir de <span className="text-accent">R$ 100</span>
              </p>
            </div>
            <motion.a
              href={waLink("Olá! Quero aproveitar a promoção de manutenção preventiva.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-ice"
            >
              Aproveitar agora
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
