import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { skills } from "@/data/resume";

export function Skills() {
  return (
    <Section id="skills">
      <SectionLabel index="02" title="Technical Skills" />

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 0.07}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")} / {group.label}
              </p>
              <div className="mt-3 h-px bg-ink/15" />
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-display text-lg leading-relaxed text-ink/90 sm:text-xl">
                {group.items.flatMap((item, idx) => {
                  const nodes = [
                    <span key={item} className="cursor-default transition-colors hover:text-accent">
                      {item}
                    </span>,
                  ];
                  if (idx < group.items.length - 1) {
                    nodes.push(
                      <span key={`${item}-sep`} aria-hidden="true" className="text-ink/30">
                        ·
                      </span>
                    );
                  }
                  return nodes;
                })}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
