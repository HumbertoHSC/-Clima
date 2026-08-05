"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  CalendarCheck,
  GearSix,
  Sparkle,
  FileText,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { SERVICES } from "@/lib/data";
import { waLink } from "@/lib/whatsapp";
import { Reveal, StaggerGroup, StaggerItem } from "./motion/Reveal";

const ICONS: Icon[] = [Wrench, CalendarCheck, GearSix, Sparkle, FileText];

export function Services() {
  return (
    <section id="servicos" className="pt-[88px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <Reveal className="mx-auto mb-11 max-w-[620px] text-center">
          <span className="mb-3 inline-block text-[0.8rem] font-bold uppercase tracking-wide text-blue">
            Serviços
          </span>
          <h2 className="font-head text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold text-navy">
            Cuidamos do seu ar do jeito certo
          </h2>
          <p className="mt-3.5 text-[1.03rem] leading-relaxed text-text-soft">
            Soluções completas para residências e empresas, com transparência do orçamento à entrega.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const IconComp = ICONS[i];
            return (
              <StaggerItem key={service.title}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-full flex-col gap-3.5 rounded-[20px] border border-card-border bg-white p-7"
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-navy to-navy-mid">
                    <IconComp weight="bold" className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-head text-[1.12rem] font-bold text-navy">{service.title}</h3>
                  <p className="flex-1 text-[0.95rem] leading-relaxed text-text-soft">{service.desc}</p>
                  <a
                    href={waLink(`Olá! Quero um orçamento para ${service.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-colors hover:text-navy"
                  >
                    Solicitar orçamento <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
