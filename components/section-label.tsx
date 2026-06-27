export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="mb-4 flex items-baseline gap-4">
        <span className="font-mono text-sm tracking-[0.25em] text-accent">§{index}</span>
        <span className="h-px flex-1 bg-ink/15" />
      </div>
      <h2 className="font-display text-[2.5rem] font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  );
}
