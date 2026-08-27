import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Cabeçalho de seção com índice técnico ("03 / Serviços") e régua.
 * O texto de apoio entra deslocado à direita, quebrando o eixo central.
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  aside,
  className,
  align = "left",
  tone = "dark",
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const muted = tone === "dark" ? "text-fog" : "text-ink-3/70";
  const rule = tone === "dark" ? "bg-steel" : "bg-ink/15";

  return (
    <div
      className={cn(
        "grid gap-x-10 gap-y-6 lg:grid-cols-12",
        align === "center" && "text-center",
        className,
      )}
    >
      <Reveal className={cn("lg:col-span-7", align === "center" && "lg:col-span-12")} y={26}>
        <div
          className={cn(
            "mb-6 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="u-tag text-ice">{index}</span>
          <span className={cn("h-px w-8", rule)} />
          <span className={cn("u-tag", muted)}>{label}</span>
        </div>
        <h2
          className={cn(
            "u-expanded text-[clamp(2rem,4.4vw,3.4rem)] uppercase",
            tone === "dark" ? "text-white-warm" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {(description || aside) && (
        <Reveal
          className={cn(
            "flex flex-col justify-end gap-5 lg:col-span-4 lg:col-start-9",
            align === "center" && "lg:col-span-8 lg:col-start-3 lg:items-center",
          )}
          y={26}
          delay={0.12}
        >
          {description && (
            <p className={cn("max-w-md text-[0.98rem] leading-relaxed", muted)}>
              {description}
            </p>
          )}
          {aside}
        </Reveal>
      )}
    </div>
  );
}
