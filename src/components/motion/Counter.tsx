"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Contador que sobe quando entra na tela.
 * O valor final já vai no HTML — se o JS não rodar, o número continua lá.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const counter = { n: 0 };
      gsap.to(counter, {
        n: value,
        duration,
        ease: "power2.out",
        snap: { n: 1 },
        onUpdate: () => {
          el.textContent = String(Math.round(counter.n));
        },
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });

    return () => mm.revert();
  }, [value, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      <span ref={ref}>{value}</span>
      {suffix}
    </span>
  );
}
