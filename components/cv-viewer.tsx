import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { FileIcon, DownloadIcon } from "@/components/icons";
import { cvPath } from "@/data/resume";

export function CvViewer() {
  return (
    <Section id="cv">
      <SectionLabel index="04" title="Curriculum Vitae" />

      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-[50ch] text-ink/85">
          The full résumé — work history, education, and references — typeset as a single PDF.
          Read it inline below or take a copy with you.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button href={cvPath} target="_blank" rel="noopener noreferrer" variant="primary">
            <FileIcon width={14} height={14} /> Read CV
          </Button>
          <Button href={cvPath} download="Ashutosh_Pradhan_CV.pdf" variant="secondary">
            <DownloadIcon width={14} height={14} /> Download CV
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 hidden md:block">
        <div className="border border-ink/20 bg-paper-raised p-2 shadow-[8px_8px_0_0_rgba(20,17,15,0.08)] dark:shadow-[8px_8px_0_0_rgba(0,0,0,0.35)]">
          <iframe
            src={`${cvPath}#view=FitH`}
            title="Ashutosh Pradhan — CV preview"
            className="h-[80vh] w-full"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 md:hidden">
        <div className="flex items-center gap-4 border border-ink/20 bg-paper-raised px-5 py-6">
          <FileIcon width={28} height={28} className="shrink-0 text-muted" />
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Inline preview is available on larger screens — use Read or Download above on mobile.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
