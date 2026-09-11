type Tone = 'navy' | 'ink' | 'white'

interface SectionHeadingProps {
  title: string
  /** Lead paragraph under the heading, as the reference pairs with every H2. */
  subtitle?: string
  tone?: Tone
  align?: 'center' | 'left'
  /** The short rule under the heading. Off for headings that carry a subtitle. */
  divider?: boolean
  /** Deprecated alias for tone="white" — kept for existing call sites. */
  light?: boolean
  className?: string
}

const toneClass: Record<Tone, string> = {
  navy: 'text-primary-650',
  ink: 'text-ink',
  white: 'text-white',
}

export default function SectionHeading({
  title,
  subtitle,
  tone = 'ink',
  align = 'center',
  divider,
  light = false,
  className = '',
}: SectionHeadingProps) {
  const resolvedTone: Tone = light ? 'white' : tone
  const centered = align === 'center'
  const showDivider = divider ?? !subtitle

  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2
        className={`font-display text-[30px] leading-[1.2] md:text-[44px] lg:text-[50px] ${toneClass[resolvedTone]} ${
          centered ? 'mx-auto max-w-[900px]' : ''
        }`}
      >
        {title}
      </h2>

      {showDivider && (
        <div
          className={`mt-4 w-[50px] border-t ${
            resolvedTone === 'white' ? 'border-white/70' : 'border-primary-600'
          } ${centered ? 'mx-auto' : ''}`}
        />
      )}

      {subtitle && (
        <p
          className={`mt-5 text-[15px] leading-relaxed md:text-base ${
            resolvedTone === 'white' ? 'text-white/90' : 'text-body'
          } ${centered ? 'mx-auto max-w-[760px]' : 'max-w-[760px]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
