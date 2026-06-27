"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { contact, profile } from "@/data/resume";
import {
  MailIcon,
  PinIcon,
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <footer id="contact" className="border-t border-ink/15">
      <Section className="pb-10">
        <SectionLabel index="05" title="Contact" />

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <MailIcon width={16} height={16} className="shrink-0 text-muted" />
                <a
                  href={`mailto:${contact.email}`}
                  className="font-mono text-sm text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                  className="flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-accent"
                >
                  {copied ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />}
                </button>
                <span role="status" aria-live="polite" className="sr-only">
                  {copied ? "Email copied to clipboard" : ""}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PinIcon width={16} height={16} className="shrink-0 text-muted" />
                <span className="font-mono text-sm text-ink">{contact.location}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-11 items-center gap-3 font-mono text-sm text-ink"
                >
                  <GithubIcon width={16} height={16} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
                  <span className="underline-offset-4 transition-colors group-hover:text-accent group-hover:underline">
                    GitHub
                  </span>
                  <ArrowUpRightIcon
                    width={13}
                    height={13}
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-11 items-center gap-3 font-mono text-sm text-ink"
                >
                  <LinkedinIcon width={16} height={16} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
                  <span className="underline-offset-4 transition-colors group-hover:text-accent group-hover:underline">
                    LinkedIn
                  </span>
                  <ArrowUpRightIcon
                    width={13}
                    height={13}
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-ink/15 pt-6 text-center font-mono text-[11px] uppercase tracking-widest text-muted">
          <p>Set in Fraunces &amp; Geist Mono. Built with Next.js, React, and TypeScript.</p>
          <p>
            © {year} {profile.name}
          </p>
        </div>
      </Section>
    </footer>
  );
}
