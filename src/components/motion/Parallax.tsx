"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * Parallax por scrub — só transform, nunca top/height.
 * Desligado no mobile (custo alto, ganho baixo) e em reduced motion.
 */
export function Parallax({
  children,
  className,
  /** deslocamento total em % da altura do elemento */
  amount = 12,
  scale,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { yPercent: -amount / 2, scale: scale ?? 1 },
        {
          yPercent: amount / 2,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, [amount, scale]);

  return (
    <div ref={ref} className={cn("u-will-change", className)}>
      {children}
    </div>
  );
}
