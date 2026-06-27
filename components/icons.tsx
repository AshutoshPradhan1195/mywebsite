import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5 0-1-.4-2-1-2.7.1-.3.4-1.4 0-2.8 0 0-1 .1-2.5 1.3a9.6 9.6 0 0 0-2 .9-9.6 9.6 0 0 0-5 0 9.6 9.6 0 0 0-2-.9c-1.5-1.2-2.5-1.3-2.5-1.3-.4 1.4-.1 2.5 0 2.8a3.9 3.9 0 0 0-1 2.7c0 3.5 2 4.3 4 4.5-.5.6-.5 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M7.5 10.5v6M7.5 7.8v.01M11.5 16.5v-3.6c0-1.2.8-2.4 2.25-2.4S16 11.7 16 12.9v3.6" />
      <path d="M11.5 10.5v6" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 7.4 5.6a1 1 0 0 0 1.2 0L20 6.5" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8.5" y="8.5" width="11.5" height="11.5" rx="1.5" />
      <path d="M15.5 8.5V5.5a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 5 16h3" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15 15" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19.5h14" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M3 12h2.2M18.8 12H21M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5Z" />
    </svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3.5h7l3.5 3.5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V7a1 1 0 0 0 1 1h3.5" />
    </svg>
  );
}
