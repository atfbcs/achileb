export default function SectionHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 mb-10 md:mb-14">
      <h2 className="font-display text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.05] tracking-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] md:text-[17px] text-ink-2 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
