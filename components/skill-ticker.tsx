"use client";

import { useReducedMotion } from "motion/react";
import { skills } from "@/data/resume";

export function SkillTicker() {
  const reduceMotion = useReducedMotion();
  const flat = skills.flatMap((group) => group.items);

  if (reduceMotion) {
    return (
      <div className="w-full border-y border-ink/15 bg-ink py-4">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 px-6 font-mono text-xs uppercase tracking-widest text-paper">
          {flat.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden border-y border-ink/15 bg-ink py-4" aria-hidden="false">
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-3 pr-3" aria-hidden={dup === 1 || undefined}>
            {flat.map((item, i) => (
              <span
                key={`${dup}-${item}-${i}`}
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-paper"
              >
                {item}
                <span className="text-paper/40">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
