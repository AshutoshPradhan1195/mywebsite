import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { projects, certifications, awards } from "@/data/resume";

const GRID_COLS: Record<number, string> = {
  1: "sm:grid-cols-1 sm:max-w-xl",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export function Projects() {
  const gridCols = GRID_COLS[Math.min(projects.length, 3)] ?? GRID_COLS[3];

  return (
    <Section id="work">
      <SectionLabel index="03" title="Personal Work" />

      <div className={`grid grid-cols-1 gap-x-10 gap-y-14 ${gridCols}`}>
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 0.08}
            className={i > 0 ? "sm:border-l sm:border-ink/15 sm:pl-10" : ""}
          >
            <article>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Story {String(i + 1).padStart(2, "0")}
              </p>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 block"
                >
                  <h3 className="flex items-start gap-2 font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-accent">
                    {project.title}
                    <ArrowUpRightIcon
                      width={16}
                      height={16}
                      className="mt-1.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </h3>
                </a>
              ) : (
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">
                  {project.title}
                </h3>
              )}

              <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-wide text-muted">
                Stack — {project.stack.join(" · ")}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={0.2}
        className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-ink/15 pt-10 sm:grid-cols-2"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            In Brief — Certifications
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
            {certifications.map((c) => (
              <li key={c.name}>
                {c.name} <span className="text-muted">({c.year})</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            In Brief — Award
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
            {awards.map((a) => (
              <li key={a.name}>
                {a.name} — {a.org}{" "}
                <span className="text-muted">({a.year})</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
