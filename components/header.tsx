"use client";

import { nav, profile } from "@/data/resume";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCommandPalette } from "@/components/command-palette";
import { SearchIcon } from "@/components/icons";

export function Header() {
  const { setOpen } = useCommandPalette();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/12 bg-paper">
      <div className="mx-auto flex h-16 w-full max-w-350 items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-accent"
        >
          {profile.initials} <span className="hidden lg:inline">/ {profile.name}</span>
        </a>

        <nav aria-label="Section navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open command palette"
            className="flex items-center gap-1.5 rounded-sm border border-ink/20 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <SearchIcon width={13} height={13} />
            <span className="hidden sm:inline">⌘K</span>
          </button>
        </div>
      </div>
    </header>
  );
}
