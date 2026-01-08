import {
  Bot,
  BriefcaseBusiness,
  Car,
  Github,
  GraduationCap,
  Link as LinkIcon,
  Mail,
  MessageCircle,
  Plane,
  Phone,
  PauseCircle,
  Store,
} from "lucide-react";
import Image from "next/image";

import { AnimatedBanner } from "@/components/AnimatedBanner";
import { AnimatedEmail } from "@/components/AnimatedEmail";
import { GithubCalendar } from "@/components/GithubCalendar";
import { LinkButton } from "@/components/LinkButton";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { GradientBarsBackground } from "@/components/ui/gradient-bars-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <GradientBarsBackground
        numBars={7}
        gradientFrom="rgba(0, 0, 0, 0.03)"
        gradientTo="transparent"
        gradientFromDark="rgba(255, 255, 255, 0.05)"
        gradientToDark="transparent"
        animationDuration={4}
      />
      <div className="relative z-10 mx-auto max-w-xl px-4 pt-10">
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
            <div className="space-y-4">
              <ProductCard
                href="https://ticketbalie.com"
                title="Ticketbalie"
                subtitle="Ticketing platform for events — sales, check-in, and attendee access"
                screenshotUrl="https://ticketbalie.com"
                localImagePath="/ticketbalie.png"
              />
              <ProductCard
                href="https://dazzap.com"
                title="Dazzap"
                subtitle="AI on WhatsApp that qualifies leads and captures customer details"
                screenshotUrl="https://dazzap.com"
                localImagePath="/dazzap.png"
              />
              <ProductCard
                href="https://trapspotter-home.vercel.app"
                title="TrapSpotter"
                subtitle="Real-time community alerts for police controls and road checks"
                screenshotUrl="https://trapspotter-home.vercel.app"
                localImagePath="/trapspotter.png"
              />
              <ProductCard
                href="https://gooner.be"
                title="investeren.org"
                subtitle="Investment platform and financial services"
                screenshotUrl="https://investeren.org"
                localImagePath="/investeren.png"
              />
              <ProductCard
                href="https://www.vnz.be"
                title="VNZ.be"
                subtitle="Automation in development for healthcare insurance services"
                screenshotUrl="https://www.vnz.be"
                localImagePath="/vnz.png"
              />
              <ProductCard
                href="https://www.houseoftalents.be/nl-be"
                title="House of Talents"
                subtitle="Automation in development for HR and talent management"
                screenshotUrl="https://www.houseoftalents.be/nl-be"
                localImagePath="/hot.png"
              />
            </div>
          </Section>

          <div className="hidden">
            <AnimatedBanner />
          </div>

          <Section
            title="Paused projects"
            description="Things I explored and may revisit."
            className="hidden"
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

          <div className="hidden">
            <Section title="GitHub activity" description="Recent contribution graph.">
              <GithubCalendar username="atfbcs" />
            </Section>
          </div>
        </main>

        <section className="relative -mx-4 pt-8 pb-12 dark:border-zinc-800 sm:-mx-8 md:-mx-16 lg:-mx-32">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-950" />
          <div className="relative z-10 mx-auto max-w-xl px-4">
            <div className="mb-4">
              <h2 className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Contact
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Fastest way to reach me.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <a
                href="tel:+32499811871"
                className="flex items-center gap-2 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                <Phone className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
                <span>+32 499 81 18 71</span>
              </a>
              <AnimatedEmail />
            </div>
          </div>
        </section>

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
