import type { Project } from '@/data/projects'

export default function StudyCard({ project }: { project: Project }) {
  return (
    <div className="ts-card p-2 h-full">
      <div className="ts-card-inner p-5 md:p-6 h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="font-display text-[1.25rem] font-bold leading-tight">{project.name}</h4>
          <span className="font-display font-bold tabular-nums text-[13px] text-ink-2 mt-1 shrink-0">{project.year}</span>
        </div>

        <p className="text-[14px] text-ink-2 leading-snug mb-3">{project.tagline}</p>
        <p className="text-[13px] text-ink-3 leading-relaxed mb-5">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-rail">
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] text-ink-3 px-1.5 py-0.5 rounded border border-rail bg-card"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
            {project.role}
          </span>
        </div>
      </div>
    </div>
  )
}
