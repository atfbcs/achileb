"use client";

import {
  Bot,
  BriefcaseBusiness,
  GraduationCap,
  Plane,
} from "lucide-react";
import type { ReactNode } from "react";

const items: Array<{
  icon: typeof BriefcaseBusiness;
  text: string | ReactNode;
}> = [
  {
    icon: BriefcaseBusiness,
    text: "Software Engineer at Sidestream, building products.",
  },
  {
    icon: Bot,
    text: (
      <>
        Automation work delivered for{" "}
        <a
          href="https://youtu.be/YVOCStE1zJo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-zinc-400 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          House of Talents
        </a>{" "}
        and VNZ.be.
      </>
    ),
  },
  {
    icon: Plane,
    text: "Under contract at ASL Airlines to build a mobile app soon.",
  },
  {
    icon: GraduationCap,
    text: "Studying Business Economics at UGent.",
  },
];

export function AnimatedBanner() {
  return (
    <div className="relative -mx-4 overflow-hidden border-y border-zinc-200 py-6 dark:border-zinc-800 sm:-mx-8 md:-mx-16 lg:-mx-32">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950" />
      <div className="relative flex">
        <div className="flex animate-scroll gap-12 whitespace-nowrap">
          {[...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex shrink-0 items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
              >
                <Icon className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
        <div className="flex animate-scroll gap-12 whitespace-nowrap" aria-hidden="true">
          {[...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`duplicate-${index}`}
                className="flex shrink-0 items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
              >
                <Icon className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

