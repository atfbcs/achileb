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
              description="Client work and collaborations across hospitality, culture, talent, fintech and aviation."
            />
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudies.map((p) => (
                  <StudyCard key={p.slug} project={p} />
                ))}
              </div>
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
