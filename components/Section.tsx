import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, description, children, className }: SectionProps) {
  return (
    <section className={`space-y-3 ${className ?? ""}`}>
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}


