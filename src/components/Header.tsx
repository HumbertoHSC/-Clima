"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { NAV_LINKS } from "@/lib/data";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-header-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-5 py-3">
        <Link href="#topo" className="flex items-center">
          <Image src="/brand/logo-horizontal.svg" alt="+Clima" width={150} height={40} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Menu principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-semibold text-navy transition-colors hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="tel:+5581999999999"
            className="hidden rounded-full border-[1.5px] border-outline px-[18px] py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy sm:block"
          >
            (81) 99999-9999
          </a>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy-dark"
          >
            <WhatsappLogo weight="fill" className="h-4 w-4 text-accent" />
            <span className="hidden sm:inline">Solicitar Orçamento</span>
            <span className="sm:hidden">Orçamento</span>
          </a>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2.5 text-navy md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-header-border bg-bg md:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-navy hover:bg-ice"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
