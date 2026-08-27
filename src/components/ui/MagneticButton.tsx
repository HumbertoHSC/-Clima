"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrow } from "./Icons";

type Variant = "solid" | "outline" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  strength?: number;
  disabled?: boolean;
  "aria-label"?: string;
};

const VARIANTS: Record<Variant, string> = {
  solid:
    "bg-ember text-ink hover:bg-ember-hot border border-ember hover:border-ember-hot",
  outline:
    "border border-steel-2 text-chalk hover:border-ice hover:text-ice bg-transparent",
  ghost: "border border-transparent text-fog hover:text-chalk bg-transparent",
};

/**
 * Botão que "puxa" o cursor. O ímã só existe em ponteiro fino:
 * no toque não há hover e em reduced motion o efeito é dispensável.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "solid",
  className,
  arrow = false,
  strength = 0.32,
  disabled,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const onMove = (event: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2.5 rounded-sharp px-6 py-3.5",
    "u-tag transition-colors duration-300 ease-out-expo",
    "disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <IconArrow />
        </span>
      )}
    </>
  );

  const style = { x: sx, y: sy };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {content}
    </motion.button>
  );
}
