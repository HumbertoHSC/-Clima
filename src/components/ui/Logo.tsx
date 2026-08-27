import { cn } from "@/lib/utils";

/**
 * Marca desenhada em SVG: o "+" da +Clima construído como floco de neve
 * (dois eixos com barbas). Ganha traço fino de "esquema técnico" no anel.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
      fill="none"
    >
      <circle
        cx="24"
        cy="24"
        r="22.5"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <g
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 9v30M9 24h30" />
        <g strokeWidth="1.7">
          <path d="M24 13.5 20.6 10.1M24 13.5l3.4-3.4M24 34.5l-3.4 3.4M24 34.5l3.4 3.4" />
          <path d="M13.5 24l-3.4-3.4M13.5 24l-3.4 3.4M34.5 24l3.4-3.4M34.5 24l3.4 3.4" />
        </g>
      </g>
    </svg>
  );
}
