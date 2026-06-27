"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Section } from "@/components/section";
import { stats, type Stat } from "@/data/resume";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    let raf = 0;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, inView && !reduceMotion);

  const display = stat.staticDisplay
    ? stat.staticDisplay
    : `${stat.prefix ?? ""}${reduceMotion ? stat.value : count}${stat.suffix ?? ""}`;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-r border-ink/15 px-6 py-8 sm:px-8"
    >
      <p className="font-display text-4xl font-semibold tabular-nums text-ink sm:text-5xl">{display}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">{stat.label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <Section className="py-0">
      <div className="grid grid-cols-2 border-t border-l border-ink/15 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.id} stat={stat} index={i} />
        ))}
      </div>
    </Section>
  );
}
