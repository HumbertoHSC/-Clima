"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { useMobileMenu } from "./MobileMenuContext";

export function WhatsAppFloat() {
  const { open } = useMobileMenu();

  return (
    <motion.a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_12px_26px_-8px_rgba(20,51,90,0.5)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={open ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ delay: open ? 0 : 0.6, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: open ? "none" : "auto" }}
    >
      <Image src="/brand/logo-whatsapp.png" alt="" width={56} height={56} className="h-full w-full object-cover" />
    </motion.a>
  );
}
