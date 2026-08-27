"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

/**
 * Faixa infinita. Duplica o conteúdo e translada de -50% a 0 em loop,
 * sem depender de scroll. Congela em reduced motion.
 */
export function Marquee({
  children,
  speed = 26,
  reverse = false,
  className,
  itemClassName,
}: {
  children: ReactNode;
  /** segundos por volta completa */
  speed?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(
        el,
        { xPercent: reverse ? -50 : 0 },
        {
          xPercent: reverse ? 0 : -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        },
      );
      return () => tween.kill();
    });

    return () => mm.revert();
  }, [speed, reverse]);

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div ref={track} className="u-will-change flex w-max shrink-0">
        <div className={cn("flex shrink-0 items-center", itemClassName)}>{children}</div>
        <div className={cn("flex shrink-0 items-center", itemClassName)} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
