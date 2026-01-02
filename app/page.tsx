import {
  Bot,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Link as LinkIcon,
  Mail,
  Plane,
  Phone,
  PauseCircle,
} from "lucide-react";
import Image from "next/image";

import { GithubCalendar } from "@/components/GithubCalendar";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-xl px-4 py-10">
        <header className="text-center">
          <div className="mx-auto h-16 w-16 overflow-hidden rounded-2xl bg-transparent ">
            <Image
              src="/pfp.png"
              alt="Achile B."
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">
            Achile B.
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Software Engineer @ Sidestream · Student (Business Economics,
            UGent) · 20
          </p>
        </header>

        <main className="mt-8 space-y-10">
          <Section title="Links" description="Products, profiles, and work.">
            <div className="space-y-3">
              <LinkButton
                href="https://ticketbalie.com"
                title="Ticketbalie"
                subtitle="Ticketing platform for events — sales, check-in, and attendee access"
                icon={<LinkIcon className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="https://dazzap.com"
                title="Dazzap"
                subtitle="AI on WhatsApp that qualifies leads and captures customer details"
                icon={<LinkIcon className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="https://trapspotter.com"
                title="TrapSpotter"
                subtitle="Real-time community alerts for police controls and road checks"
                icon={<LinkIcon className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="https://github.com/atfbcs"
                title="GitHub — @atfbcs"
                subtitle="Code, experiments, and contributions"
                icon={<Github className="h-5 w-5" aria-hidden="true" />}
              />
            </div>
          </Section>

          <Section title="Contact" description="Fastest way to reach me.">
            <div className="space-y-3">
              <LinkButton
                href="tel:+32499811871"
                title="+32 499 81 18 71"
                subtitle="Phone"
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="mailto:achilebatier@gmail.com"
                title="achilebatier@gmail.com"
                subtitle="Email"
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="mailto:achile@dazzap.com"
                title="achile@dazzap.com"
                subtitle="Email (Dazzap)"
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="mailto:achile@ticketbalie.com"
                title="achile@ticketbalie.com"
                subtitle="Email (Ticketbalie)"
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              />
            </div>
          </Section>

          <Section title="Now" description="What I’m focused on lately.">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                  <span>
                    Software Engineer at <span className="font-medium">Sidestream</span>
                    , building products.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Bot className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                  <span>
                    Automation work delivered for{" "}
                    <a
                      className="font-medium underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
                      href="https://youtu.be/YVOCStE1zJo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      House of Talents
                    </a>{" "}
                    and{" "}
                    <span className="font-medium">VNZ.be</span>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Plane className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                  <span>
                    Under contract at <span className="font-medium">ASL Airlines</span>{" "}
                    to build a mobile app soon.
                  </span>
                </li>
                <li className="flex gap-2">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                  <span>
                    Studying <span className="font-medium">Business Economics</span>{" "}
                    at <span className="font-medium">UGent</span>.
                  </span>
                </li>
              </ul>
            </div>
          </Section>

          <Section
            title="Paused projects"
            description="Things I explored and may revisit."
          >
            <div className="space-y-3">
              <LinkButton
                href="https://bondable.co"
                title="Bondable.co"
                subtitle="Paused"
                icon={<PauseCircle className="h-5 w-5" aria-hidden="true" />}
              />
              <LinkButton
                href="https://censorship.cc"
                title="censorship.cc"
                subtitle="Paused"
                icon={<PauseCircle className="h-5 w-5" aria-hidden="true" />}
              />
            </div>
          </Section>

          <Section title="GitHub activity" description="Recent contribution graph.">
            <GithubCalendar username="atfbcs" />
          </Section>
        </main>

        <footer className="hidden mt-10 text-center text-xs text-zinc-500 dark:text-zinc-500">
          <p>
            Minimal portfolio · Built with Next.js + Tailwind · GitHub:{" "}
            <a
              className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
              href="https://github.com/atfbcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              @atfbcs
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
