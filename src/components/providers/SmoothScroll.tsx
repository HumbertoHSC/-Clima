"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type LockFn = (locked: boolean) => void;

const ScrollLockContext = createContext<LockFn>(() => {});

/**
 * Trava a rolagem da página (menu aberto, lightbox, intro).
 * Precisa passar pelo Lenis: ele reescreve as classes do <html> a cada
 * frame, então marcar `lenis-stopped` na mão não sobrevive.
 */
export function useScrollLock(): LockFn {
  return useContext(ScrollLockContext);
}

/**
 * Rolagem suave (Lenis) amarrada ao ticker do GSAP.
 * O RAF do Lenis roda dentro do ticker para que ScrollTrigger e Lenis
 * atualizem no mesmo frame — sem isso o parallax "nada" atrás do scroll.
 *
 * Desliga por completo quando o sistema pede menos movimento.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  const lock = useCallback<LockFn>((locked) => {
    const lenis = lenisRef.current;
    if (lenis) {
      if (locked) lenis.stop();
      else lenis.start();
    }
    // Cobre o caso sem Lenis (reduced motion) e a rolagem nativa do toque.
    document.body.style.overflow = locked ? "hidden" : "";
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Posições de gatilho envelhecem quando fonte, imagem ou HMR mudam a
    // altura da página. Recalcula nesses três momentos.
    let resizeTimer = 0;
    const refresh = () => ScrollTrigger.refresh();
    const debouncedRefresh = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refresh, 180);
    };

    const observer = new ResizeObserver(debouncedRefresh);
    observer.observe(document.body);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    const cleanupShared = () => {
      observer.disconnect();
      window.removeEventListener("load", refresh);
      window.clearTimeout(resizeTimer);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      ScrollTrigger.refresh();
      return cleanupShared;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 1.6,
      // No toque, o scroll nativo é mais previsível e mais leve.
      syncTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Âncoras do menu passam a rolar pelo Lenis.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.2 });
    };

    document.addEventListener("click", onClick);
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onClick);
      cleanupShared();
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollLockContext.Provider value={lock}>
      {/* "user" faz o Framer Motion seguir a preferência do sistema:
          transformações são suprimidas, opacidade continua. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ScrollLockContext.Provider>
  );
}
