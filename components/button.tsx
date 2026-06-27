import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant }) {
  const base =
    "inline-flex min-h-11 items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-ink text-paper hover:bg-accent hover:text-paper",
    secondary: "border border-ink/30 text-ink hover:border-accent hover:text-accent",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
