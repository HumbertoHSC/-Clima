"use client";

import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_12px_26px_-8px_rgba(20,51,90,0.5)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsappLogo weight="fill" className="h-7 w-7 text-white" />
    </motion.a>
  );
}
