import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  iconContainerClassName?: string;
};

export function LinkButton({
  href,
  title,
  subtitle,
  icon,
  iconContainerClassName,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 ring-1 ring-zinc-200 transition group-hover:ring-zinc-300 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-zinc-800 dark:group-hover:ring-zinc-700",
            iconContainerClassName ?? "",
          ].join(" ")}
        >
          {icon ?? <ExternalLink className="h-5 w-5" aria-hidden="true" />}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {title}
          </div>
          {subtitle ? (
            <div className="truncate text-xs text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
      <ExternalLink
        className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
        aria-hidden="true"
      />
      <span className="sr-only">Open {title}</span>
    </a>
  );
}


