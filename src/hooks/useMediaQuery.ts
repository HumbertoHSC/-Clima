"use client";

import { useEffect, useState } from "react";

/** matchMedia com SSR seguro — retorna false antes da hidratação. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Preferência do sistema por menos movimento. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** Ponto de corte usado para aliviar as animações no mobile. */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}
