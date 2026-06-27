"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { profile, contact, cvPath } from "@/data/resume";
import { GithubIcon, LinkedinIcon, MailIcon, FileIcon, DownloadIcon } from "@/components/icons";

let cachedNowMs = Date.now();

function subscribeClock(callback: () => void) {
  const id = setInterval(() => {
    cachedNowMs = Date.now();
    callback();
  }, 1000);
  return () => clearInterval(id);
}

function getClockSnapshot() {
  return cachedNowMs;
}

function getClockServerSnapshot() {
  return 0;
}

function LiveDateline() {
  const nowMs = useSyncExternalStore(subscribeClock, getClockSnapshot, getClockServerSnapshot);
  const now = nowMs ? new Date(nowMs) : null;

  const date = now
    ? now.toLocaleDateString("en-US", {
        timeZone: "Asia/Kathmandu",
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    : "—";

  const time = now
    ? now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "--:--:--";

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-y border-ink/15 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted sm:text-[11px]">
      <span>{date} · NPT</span>
      <span className="tabular-nums text-accent">{time}</span>
      <span>Kathmandu · Vol. I</span>
    </div>
  );
}

export function Masthead() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <Section id="top" className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pb-24">
      <LiveDateline />

      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-9 text-balance font-display text-[clamp(2.75rem,11vw,8rem)] font-semibold uppercase leading-[0.92] tracking-tight"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 max-w-3xl font-mono text-xs uppercase tracking-[0.18em] text-accent sm:text-sm"
      >
        {profile.kicker}
      </motion.p>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 max-w-[38rem] font-sans text-lg leading-[1.7] text-ink/90 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent sm:text-xl"
      >
        {profile.lede}
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <Button href={cvPath} target="_blank" rel="noopener noreferrer" variant="primary">
          <FileIcon width={14} height={14} /> Read CV
        </Button>
        <Button href={cvPath} download="Ashutosh_Pradhan_CV.pdf" variant="secondary">
          <DownloadIcon width={14} height={14} /> Download CV
        </Button>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3"
      >
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <GithubIcon width={15} height={15} />
          <span className="underline-offset-4 group-hover:underline">GitHub</span>
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <LinkedinIcon width={15} height={15} />
          <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="group flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <MailIcon width={15} height={15} />
          <span className="underline-offset-4 group-hover:underline">Email</span>
        </a>
      </motion.div>
    </Section>
  );
}
