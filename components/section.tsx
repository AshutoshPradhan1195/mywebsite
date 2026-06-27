import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={`w-full ${bleed ? "" : "px-6 py-20 sm:px-10 sm:py-24 lg:px-16"} ${className}`}
    >
      {bleed ? children : <div className="mx-auto w-full max-w-350">{children}</div>}
    </section>
  );
}
