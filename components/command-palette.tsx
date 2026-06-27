"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { nav, contact, cvPath } from "@/data/resume";
import { useTheme } from "@/components/theme-provider";
import { ArrowUpRightIcon, SearchIcon, CloseIcon } from "@/components/icons";

interface PaletteContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PaletteContext = createContext<PaletteContextValue | null>(null);

export function useCommandPalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("useCommandPalette must be used within CommandPaletteProvider");
  return ctx;
}

interface Command {
  id: string;
  label: string;
  hint: string;
  group: "Jump to" | "Quick links" | "Theme";
  run: () => void;
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const jump: Command[] = nav.map((item) => ({
      id: `nav-${item.href}`,
      label: item.label,
      hint: item.href,
      group: "Jump to",
      run: () => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }),
    }));

    const links: Command[] = [
      {
        id: "github",
        label: "Open GitHub",
        hint: contact.github.replace("https://", ""),
        group: "Quick links",
        run: () => window.open(contact.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "linkedin.com/in/ashutosh-pradhan",
        group: "Quick links",
        run: () => window.open(contact.linkedin, "_blank", "noopener"),
      },
      {
        id: "email",
        label: "Email Ashutosh",
        hint: contact.email,
        group: "Quick links",
        run: () => {
          window.location.href = `mailto:${contact.email}`;
        },
      },
      {
        id: "download-cv",
        label: "Download CV",
        hint: cvPath,
        group: "Quick links",
        run: () => {
          const a = document.createElement("a");
          a.href = cvPath;
          a.download = "Ashutosh_Pradhan_CV.pdf";
          a.click();
        },
      },
    ];

    const themeCmd: Command[] = [
      {
        id: "theme",
        label: theme === "day" ? "Switch to Night Edition" : "Switch to Day Edition",
        hint: "toggle",
        group: "Theme",
        run: toggleTheme,
      },
    ];

    return [...jump, ...links, ...themeCmd];
  }, [theme, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  const runCommand = useCallback((cmd: Command) => {
    cmd.run();
    setOpen(false);
  }, []);

  const groups = useMemo(() => {
    const order: Command["group"][] = ["Jump to", "Quick links", "Theme"];
    return order
      .map((group) => ({ group, items: filtered.filter((c) => c.group === group) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[activeIndex];
      if (cmd) runCommand(cmd);
    }
  }

  let flatIndex = -1;

  return (
    <PaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        aria-label="Command palette"
        className="m-0 w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-transparent open:flex open:fixed open:inset-0 open:items-start open:justify-center open:p-0"
      >
        <div className="mt-[12vh] w-[min(560px,92vw)] overflow-hidden rounded-sm border border-ink/15 bg-paper-raised text-ink shadow-2xl">
          <div className="flex items-center gap-3 border-b border-ink/12 px-4 py-3">
            <SearchIcon width={16} height={16} className="text-muted" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKeyDown}
              role="combobox"
              aria-expanded="true"
              aria-controls="command-palette-listbox"
              aria-activedescendant={filtered[activeIndex] ? `cmd-${filtered[activeIndex].id}` : undefined}
              placeholder="Jump to a section or run a command…"
              className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-muted focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close command palette"
              className="text-muted transition-colors hover:text-accent"
            >
              <CloseIcon width={16} height={16} />
            </button>
          </div>

          <div id="command-palette-listbox" role="listbox" className="max-h-[60vh] overflow-y-auto py-2">
            {groups.length === 0 && (
              <p className="px-4 py-6 text-center font-mono text-xs text-muted">No matches.</p>
            )}
            {groups.map(({ group, items }) => (
              <div key={group} className="mb-1">
                <p className="px-4 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {group}
                </p>
                {items.map((cmd) => {
                  flatIndex += 1;
                  const isActive = flatIndex === activeIndex;
                  return (
                    <button
                      key={cmd.id}
                      id={`cmd-${cmd.id}`}
                      role="option"
                      aria-selected={isActive}
                      type="button"
                      onMouseEnter={() => setActiveIndex(flatIndex)}
                      onClick={() => runCommand(cmd)}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors ${
                        isActive ? "bg-accent/10 text-accent" : "text-ink hover:bg-ink/5"
                      }`}
                    >
                      <span className="font-sans text-sm">{cmd.label}</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-muted">
                        {cmd.hint}
                        {cmd.group === "Quick links" && <ArrowUpRightIcon width={12} height={12} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 border-t border-ink/12 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
        </div>
      </dialog>
    </PaletteContext.Provider>
  );
}
