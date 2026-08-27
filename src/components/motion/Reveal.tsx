"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** deslocamento vertical inicial, em px */
  y?: number;
  /** escala inicial — use com parcimônia, some elementos ficam moles */
  scale?: number;
  delay?: number;
  duration?: number;
  start?: string;
  as?: ElementType;
};

/**
 * Revelação no scroll com GSAP/ScrollTrigger.
 * O elemento nasce invisível no HTML e o CSS devolve a visibilidade
 * quando não há JS ou quando o sistema pede menos movimento.
 */
export function Reveal({
  children,
  className,
  y = 34,
  scale,
  delay = 0,
  duration = 1,
  start = "top 86%",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { opacity: 0, y, scale: scale ?? 1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
    });

    return () => mm.revert();
  }, [y, scale, delay, duration, start]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn("u-will-change", className)}
      style={{ opacity: 0 }}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** intervalo entre os filhos — variado de propósito, nada de tudo igual */
  each?: number;
  y?: number;
  start?: string;
  as?: ElementType;
};

/**
 * Anima os filhos marcados com [data-stagger-item] em cascata.
 */
export function Stagger({
  children,
  className,
  each = 0.09,
  y = 40,
  start = "top 84%",
  as: Tag = "div",
}: StaggerProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const items = el.querySelectorAll<HTMLElement>("[data-stagger-item]");
    if (!items.length) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.05,
          ease: "expo.out",
          stagger: { each, from: "start" },
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(items, { opacity: 1, y: 0 });
    });

    return () => mm.revert();
  }, [each, y, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/** Filho de <Stagger>. Nasce invisível; o CSS cobre no-JS e reduced-motion. */
export function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag data-stagger-item="" className={cn("u-will-change", className)} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
