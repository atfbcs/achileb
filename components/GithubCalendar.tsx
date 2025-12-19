"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type GithubCalendarProps = {
  username: string;
};

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  total?: { lastYear?: number };
  contributions: ContributionDay[];
};

function monthKeyUTC(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function splitByMonths(days: ContributionDay[], parts: 2 | 3) {
  const months: string[] = [];
  for (const day of days) {
    const key = monthKeyUTC(day.date);
    if (months[months.length - 1] !== key) months.push(key);
  }

  const chunkSize = Math.ceil(months.length / parts);
  const chunks: string[][] = [];
  for (let i = 0; i < months.length; i += chunkSize) {
    chunks.push(months.slice(i, i + chunkSize));
  }

  return chunks
    .map((chunk) => days.filter((d) => chunk.includes(monthKeyUTC(d.date))))
    .filter((seg) => seg.length > 0);
}

const ActivityCalendar = dynamic(
  () =>
    import("react-activity-calendar").then((m) => ({
      default: m.ActivityCalendar,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
        Loading GitHub activity…
      </div>
    ),
  },
);

export function GithubCalendar({ username }: GithubCalendarProps) {
  const [scheme, setScheme] = useState<"light" | "dark">("light");
  const [days, setDays] = useState<ContributionDay[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const update = () => setScheme(media.matches ? "dark" : "light");
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setError(null);
        setDays(null);

        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(
            username,
          )}?y=last`,
          { cache: "no-store" },
        );

        const json = (await res.json()) as ContributionsResponse & {
          error?: string;
        };

        if (!res.ok) {
          throw new Error(json.error ?? "Failed to load GitHub contributions.");
        }

        if (!cancelled) {
          setDays(json.contributions);
          setTotal(json.total?.lastYear ?? null);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load GitHub contributions.");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  const segments = days ? splitByMonths(days, 3) : [];

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="p-4">
        {error ? (
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Couldn’t load GitHub activity for{" "}
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              @{username}
            </span>
            . {error}
          </div>
        ) : null}

        {total !== null ? (
          <div className="mb-3 text-xs text-zinc-600 dark:text-zinc-400">
            {total} contributions in the last year
          </div>
        ) : null}

        {/* Mobile: split into 3 stacked chunks so it’s not one extra-wide strip */}
        <div className="space-y-4 md:hidden">
          {(segments.length ? segments : [days ?? []]).map((seg, idx) => (
            <div key={idx} className="overflow-x-auto">
              <div className="w-fit">
                <ActivityCalendar
                  data={seg}
                  loading={days === null && error === null}
                  blockSize={11}
                  blockMargin={3}
                  fontSize={12}
                  theme={{
                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  colorScheme={scheme}
                  weekStart={1}
                  labels={{
                    totalCount: "{{count}} contributions",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: keep the full-year view */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <div className="w-fit">
              <ActivityCalendar
                data={days ?? []}
                loading={days === null && error === null}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                theme={{
                  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                colorScheme={scheme}
                weekStart={1}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


