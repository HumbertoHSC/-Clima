"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * reducedMotion="user" makes every Framer Motion animation in the tree
 * (including whileHover/whileTap and infinite loops) respect the OS-level
 * prefers-reduced-motion setting, not just CSS transitions.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
