"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { experience, education } from "@/data/resume";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 75%"],
  });

  return (
    <Section id="experience">
      <SectionLabel index="01" title="Experience" />

      <div ref={containerRef} className="relative">
        <div
          className="absolute top-1.5 bottom-1.5 left-2 w-px bg-ink/15 sm:left-3"
          aria-hidden="true"
        />
        {!reduceMotion && (
          <motion.div
            className="absolute top-1.5 bottom-1.5 left-2 w-px origin-top bg-accent sm:left-3"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />
        )}

        <ol className="flex flex-col gap-12 sm:gap-14">
          {experience.map((entry, i) => (
            <Reveal key={`${entry.org}-${entry.start}`} delay={i * 0.08}>
              <li className="relative pl-8 sm:pl-12">
                <span className="absolute top-1.5 left-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-paper sm:left-3" />
                <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <div className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {entry.start} – {entry.end}
                    </p>
                    <span
                      className={`inline-block w-fit px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        entry.type === "ENGINEERING" ? "bg-accent text-paper" : "bg-marker text-ink"
                      }`}
                    >
                      {entry.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight sm:text-[1.75rem]">
                      {entry.role}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                      {entry.org} — {entry.location}
                    </p>
                    <p className="mt-3 max-w-[65ch] leading-relaxed text-ink/85">{entry.summary}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={0.1} className="mt-16 border-t border-ink/15 pt-10">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">Education</p>
        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div>
                <h4 className="font-display text-lg font-semibold">{edu.school}</h4>
                <p className="text-sm text-ink/80">{edu.credential}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted">
                {edu.start} – {edu.end}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
