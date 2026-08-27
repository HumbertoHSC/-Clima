import { cn } from "@/lib/utils";

type IconProps = { className?: string };

/**
 * Por padrão o ícone preenche o contêiner que o dimensiona. Quando quem
 * chama já passa altura/largura, o h-full/w-full sairia do caminho — então
 * ele nem entra, evitando empate de especificidade entre utilitários.
 */
function iconClass(className?: string): string {
  const sized = className ? /(^|\s)(h-|w-|size-)/.test(className) : false;
  return sized ? cn(className) : cn("h-full w-full", className);
}
const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Relógio com ponteiro em posição de "agora" — resposta no mesmo dia. */
export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke}>
        <circle cx="20" cy="20" r="13" />
        <path d="M20 12v8.6l6 3.4" />
        <path d="M20 4v3M20 33v3M4 20h3M33 20h3" strokeOpacity="0.45" />
      </g>
    </svg>
  );
}

/** Escudo com selo de garantia. */
export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke}>
        <path d="M20 4.5 33 9v11.5c0 7.4-5.3 12.6-13 15.5-7.7-2.9-13-8.1-13-15.5V9l13-4.5Z" />
        <path d="m14.5 20.2 4 4 7.5-8.4" />
      </g>
    </svg>
  );
}

/** Etiqueta de preço — orçamento fechado antes. */
export function IconQuote({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke}>
        <path d="M21.4 5.5H33a1.5 1.5 0 0 1 1.5 1.5v11.6a3 3 0 0 1-.9 2.1L20 34.3a2 2 0 0 1-2.8 0L5.7 22.8a2 2 0 0 1 0-2.8L19.3 6.4a3 3 0 0 1 2.1-.9Z" />
        <circle cx="27" cy="13" r="2.3" />
        <path d="m14.4 21.6 5.6 5.6" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

/** Manômetro/manifold — medir antes de trocar. */
export function IconBadge({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke}>
        <circle cx="20" cy="17" r="12.5" />
        <path d="M20 17 27 11" />
        <circle cx="20" cy="17" r="1.6" fill="currentColor" stroke="none" />
        <path d="M9.5 12.5A12.4 12.4 0 0 1 20 4.5" strokeOpacity="0.45" />
        <path d="M15 29.5 13 36h14l-2-6.5" />
      </g>
    </svg>
  );
}

/** Seta diagonal usada em links e botões. */
export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke} strokeWidth={1.6}>
        <path d="M6 18 18 6M9 6h9v9" />
      </g>
    </svg>
  );
}

export function IconPlus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke} strokeWidth={1.6}>
        <path d="M12 5v14M5 12h14" />
      </g>
    </svg>
  );
}

/** Grelha de ventilação — motivo recorrente da identidade. */
export function IconGrille({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 24" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke} strokeWidth={1.2} strokeOpacity="0.8">
        <path d="M2 4h60M2 9h60M2 14h48M2 19h30" />
      </g>
    </svg>
  );
}

/** Fluxo de ar — três linhas curvas escalonadas. */
export function IconAirflow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={iconClass(className)}>
      <g {...stroke}>
        <path d="M4 14h24a6 6 0 1 0-6-6" />
        <path d="M4 24h30a6 6 0 1 1-6 6" />
        <path d="M4 34h18a5 5 0 1 0-5-5" strokeOpacity="0.55" />
      </g>
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass(className)} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.688 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass(className)} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881" />
    </svg>
  );
}
