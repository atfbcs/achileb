import { cn } from '@/lib/cn'

type Props = React.HTMLAttributes<HTMLDivElement>

/**
 * Skewed CSS-grid stripe pattern in the brand orange.
 * Ported from superstream's BackgroundStripes — pure CSS, zero JS.
 */
export function BrandStripes({ className, ...props }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute top-0 h-[832px] w-full overflow-hidden pt-[152px] md:pt-[200px] 2xl:h-[512px] 2xl:pt-[136px]',
        className,
      )}
      {...props}
    >
      <div className="-skew-y-[7deg] [--column-width:minmax(0,calc(1280px/var(--content-columns)))] [--content-columns:12] [--gutter-columns:4] [--stripe-height:34px] sm:[--stripe-height:48px] lg:[--stripe-height:72px]">
        {/* Soft mid-band wash */}
        <div className="absolute bottom-[var(--stripe-height)] h-[440px] w-full bg-brand-500/[0.04]" />
        {/* Architectural stripes */}
        <div
          className="relative grid h-full"
          style={{
            gridTemplateRows: 'repeat(3,var(--stripe-height))',
            gridTemplateColumns:
              '[viewport-start] 1fr [left-gutter-start] repeat(var(--gutter-columns),var(--column-width)) [left-gutter-end content-start] repeat(var(--content-columns),var(--column-width)) [content-end right-gutter-start] repeat(var(--gutter-columns),var(--column-width)) [right-gutter-end] 1fr [viewport-end]',
          }}
        >
          <div style={{ gridArea: '2 / left-gutter-start / auto / span 5' }} className="bg-brand-500/[0.08]" />
          <div style={{ gridArea: '3 / viewport-start / auto / span 4' }} className="bg-brand-500/[0.18]" />
          <div style={{ gridArea: '1 / span 7 / auto / viewport-end' }} className="bg-brand-500/[0.18]" />
          <div style={{ gridArea: '2 / span 8 / auto / right-gutter-end' }} className="bg-brand-500/[0.13]" />
          <div style={{ gridArea: '3 / span 3 / auto / viewport-end' }} className="bg-brand-500/[0.08]" />
        </div>
      </div>
    </div>
  )
}
