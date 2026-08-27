"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NAV_LINKS, BUSINESS } from "@/lib/site";
import { waLink, MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IconPlus } from "@/components/ui/Icons";
import { useScrollLock } from "@/components/providers/SmoothScroll";

/**
 * Some ao descer, volta ao subir, com fundo desfocado depois do topo.
 * O menu mobile é uma cortina em tela cheia com links escalonados.
 */
export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lockScroll = useScrollLock();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = current - previous;
    setScrolled(current > 24);
    if (open) return;
    // histerese pequena para o cabeçalho não tremer em rolagens curtas
    if (delta > 6 && current > 220) setHidden(true);
    else if (delta < -6) setHidden(false);
  });

  // Trava a página enquanto a cortina estiver aberta — e garante que o
  // cabeçalho esteja à vista, senão o botão de fechar some junto.
  useEffect(() => {
    lockScroll(open);
    if (open) setHidden(false);
    return () => lockScroll(false);
  }, [open, lockScroll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? "-105%" : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "transition-[background-color,backdrop-filter,border-color] duration-500",
            scrolled || open
              ? "border-b border-steel/70 bg-ink/72 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8">
            <a href="#topo" aria-label={`${BUSINESS.legalName} — ir para o topo`} className="shrink-0">
              <Image
                src="/brand/lockup-navbar.jpg"
                alt={`${BUSINESS.legalName}`}
                width={808}
                height={380}
                priority
                className="h-9 w-auto rounded-sm sm:h-10"
              />
            </a>

            <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-3.5 py-2 text-[0.84rem] text-fog transition-colors duration-300 hover:text-chalk"
                >
                  {link.label}
                  <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-ice transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <MagneticButton
                href={waLink(MESSAGES.orcamento)}
                className="hidden sm:inline-flex"
                arrow
              >
                Orçamento
              </MagneticButton>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="menu-mobile"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                className="flex h-11 w-11 items-center justify-center border border-steel-2 text-chalk transition-colors hover:border-ice hover:text-ice lg:hidden"
              >
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-5 w-5"
                >
                  <IconPlus />
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
            className="u-noise fixed inset-0 z-40 bg-ink-2 lg:hidden"
          >
            <div className="u-blueprint absolute inset-0 opacity-40" />
            <nav
              aria-label="Menu"
              className="relative flex h-full flex-col justify-center gap-1 px-6 pb-16 pt-24"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline justify-between border-b border-steel/60 py-5"
                >
                  <span className="u-expanded text-3xl uppercase text-white-warm transition-colors group-hover:text-ice">
                    {link.label}
                  </span>
                  <span className="u-tag text-fog">0{i + 1}</span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-col gap-4"
              >
                <MagneticButton href={waLink(MESSAGES.orcamento)} arrow className="w-full">
                  Falar no WhatsApp
                </MagneticButton>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="u-tag text-fog">
                  {BUSINESS.phoneDisplay} · {BUSINESS.hoursShort}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
