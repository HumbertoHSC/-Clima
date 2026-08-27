"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { IconWhatsApp } from "@/components/ui/Icons";

/** Aparece depois do hero e some quando o formulário entra em cena. */
export function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setVisible(value > 700);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink(MESSAGES.urgente)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 border border-ice/40 bg-ink/85 py-3 pl-3 pr-4 backdrop-blur-md transition-colors hover:border-ice sm:bottom-7 sm:right-7"
          aria-label="Falar com a +Clima no WhatsApp"
        >
          <span className="relative flex h-9 w-9 items-center justify-center bg-ice text-ink">
            <IconWhatsApp className="h-5 w-5" />
            <span className="absolute inset-0 animate-ping bg-ice/40" />
          </span>
          <span className="u-tag hidden text-chalk transition-colors group-hover:text-ice sm:block">
            Falar agora
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
