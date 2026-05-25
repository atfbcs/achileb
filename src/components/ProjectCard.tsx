import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="ts-card p-2">
      <div className="grid lg:grid-cols-2 gap-2 items-stretch">
        <a
          href={project.url ?? '#'}
          target={project.url ? '_blank' : undefined}
          rel="noreferrer"
          className="group relative overflow-hidden rounded-[14px] border border-rail bg-card-inner aspect-16/10 lg:aspect-auto"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="flex h-full w-full items-end p-8"
              style={{
                background: `linear-gradient(135deg, ${project.accent}25, transparent 70%)`,
              }}
            >
              <span className="font-display text-5xl font-bold tracking-tight" style={{ color: project.accent }}>
                {project.name}
              </span>
            </div>
          )}
        </a>

        <div className="ts-card-inner p-7 md:p-8 lg:p-9 flex flex-col">
          <div className="flex items-baseline gap-3 mb-4 text-[13px]">
            <span className="font-display font-bold tabular-nums text-ink text-[15px]">
              {project.year}
            </span>
            <span className="h-3 w-px bg-rail self-center" />
            <span className="text-ink-2">{project.role}</span>
          </div>

          <h3 className="font-display text-[1.75rem] md:text-[2rem] font-bold leading-[1.05] mb-3">
            {project.name}
          </h3>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{project.tagline}</p>
          <p className="text-[14px] text-ink-3 leading-relaxed mb-6">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-ink-3 px-2 py-1 rounded-md border border-rail bg-card"
              >
                {s}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="ts-btn-secondary self-start"
            >
              Visit {project.name}
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
