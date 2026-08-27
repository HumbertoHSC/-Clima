"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/ui/Logo";
import { useScrollLock } from "@/components/providers/SmoothScroll";

/**
 * Cortina de entrada de ~1,1s: o contador sobe e a cortina sai de baixo
 * para cima. Só na primeira visita da sessão, e nunca em reduced motion.
 */
export function Preloader() {
  const [done, setDone] = useState(true);
  const [pct, setPct] = useState(0);
  const lockScroll = useScrollLock();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("clima:intro");
    if (reduced || seen) return;

    setDone(false);
    lockScroll(true);

    const started = performance.now();
    let frame = 0;

    const tick = () => {
      const elapsed = performance.now() - started;
      const value = Math.min(100, Math.round((elapsed / 950) * 100));
      setPct(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("clima:intro", "1");
        window.setTimeout(() => {
          setDone(true);
          lockScroll(false);
        }, 180);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      lockScroll(false);
    };
  }, [lockScroll]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="u-noise fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8"
          aria-hidden="true"
        >
          <div className="u-blueprint absolute inset-0 opacity-30" />

          <div className="relative flex items-center gap-3">
            <LogoMark className="h-8 w-8 animate-[spin_5s_linear_infinite] text-ice" />
            <span className="u-tag text-fog">+Clima Refrigeração</span>
          </div>

          <div className="relative flex items-end justify-between gap-6">
            <span className="u-expanded text-[clamp(3.5rem,14vw,9rem)] leading-none text-white-warm">
              {String(pct).padStart(3, "0")}
            </span>
            <span className="u-tag mb-3 text-fog">Preparando o ambiente</span>
          </div>

          <div className="relative h-px w-full bg-steel">
            <motion.span
              className="absolute inset-y-0 left-0 bg-ice"
              animate={{ width: `${pct}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
