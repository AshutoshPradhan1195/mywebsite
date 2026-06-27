"use client";

import { useTheme } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isNight}
      aria-label="Toggle Day / Night Edition theme"
      className={`group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent ${className}`}
    >
      <span className={isNight ? "text-muted" : "text-accent"}>Day</span>
      <span className="relative inline-flex h-4 w-8 items-center rounded-full border border-ink/25 bg-ink/5 transition-colors">
        <span
          className={`inline-flex h-3 w-3 items-center justify-center rounded-full bg-accent text-paper transition-transform ${
            isNight ? "translate-x-[18px]" : "translate-x-[2px]"
          }`}
        >
          {isNight ? <MoonIcon width={8} height={8} /> : <SunIcon width={8} height={8} />}
        </span>
      </span>
      <span className={isNight ? "text-accent" : "text-muted"}>Night</span>
    </button>
  );
}
