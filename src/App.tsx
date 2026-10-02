import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import Nav from '@/components/Nav'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import SectionHeader from '@/sections/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import StudyCard from '@/components/StudyCard'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'
import { BrandStripes } from '@/components/BrandStripes'
import { liveProjects, caseStudies } from '@/data/projects'

function App() {
  return (
    <div id="top" className="min-h-screen bg-canvas text-ink">
      <Nav />
      <main>
        <Hero />

        <Marquee />

        <section id="work" className="py-20 md:py-28">
          <SectionHeader
            title="Live products."
            description="Built, launched and operating today. Founded, co-built or led."
          />
          <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col gap-6">
            {liveProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <section id="studies" className="relative bg-surface border-y border-rail py-20 md:py-28 overflow-hidden">
          <BrandStripes className="pointer-events-none mask-[linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]" />
          <div className="relative">
            <SectionHeader
              title="Selected studies."
              description="Client work and collaborations across interiors, culture, talent, creators and marketing."
            />
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudies.map((p) => (
                  <StudyCard key={p.slug} project={p} />
                ))}
              </div>

              <p className="mt-8 flex flex-col items-center gap-1.5 text-center text-[13px] text-ink-3 leading-relaxed md:block">
                <span className="font-display font-bold text-ink text-[15px] md:text-[13px]">+10 more</span>
                <span className="hidden md:inline mx-2 text-rail">·</span>
                <span className="max-w-[18rem] md:max-w-none">
                  16 client builds and counting: AI automations, dashboards, apps and tools.
                </span>
                <a href="#contact" className="md:ml-2 inline-flex items-center gap-0.5 text-ink hover:text-ink-2 transition-colors">
                  Build yours
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={12} strokeWidth={2} />
                </a>
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
