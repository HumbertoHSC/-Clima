"use client";

import { STATS } from "@/lib/data";
import { Counter } from "./motion/Counter";
import { StaggerGroup, StaggerItem } from "./motion/Reveal";

export function Stats() {
  return (
    <section className="mt-[88px] bg-navy py-16">
      <div className="mx-auto max-w-[1240px] px-5">
        <StaggerGroup className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-head text-[clamp(2rem,4vw,2.6rem)] font-extrabold text-white">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-[0.92rem] font-semibold text-ink-pale">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
