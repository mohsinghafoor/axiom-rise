import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export interface SampleFeature {
  title: string
  description: string
}

interface SamplesBandProps {
  title?: string
  /** A single paragraph, or several rendered in sequence. */
  description?: string | string[]
  ctaLabel?: string
  ctaHref?: string
  /** Optional second CTA, rendered as a white button beside the primary one. */
  secondaryCta?: { label: string; href: string }
  /** Optional commitment boxes under the CTAs. Omitted on pages that don't pass them. */
  features?: SampleFeature[]
  image?: string
}

export default function SamplesBand({
  title = 'Get Your Samples With Free Shipping; No Hidden Costs, No Commitment',
  description = 'You bring the brand vision. We send you physical Golden Samples with zero shipping cost. Every order starts with a sample you physically approve — whether you are launching a new streetwear label, scaling an existing line, or sourcing a reliable factory for a national brand.',
  ctaLabel = 'Request Samples With Free Shipping Today',
  ctaHref = '/contact',
  secondaryCta,
  features,
  image = '/images/hero/fitness.webp',
}: SamplesBandProps) {
  return (
    <section className="relative py-24 md:py-32">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-primary-800/75" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <div className="mx-auto max-w-3xl text-center">
            <svg
              className="mx-auto h-14 w-14 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

            <h2 className="mt-6 font-display text-[28px] leading-[1.2] tracking-[0.7px] text-white md:text-[42px]">
              {title}
            </h2>

            {(Array.isArray(description) ? description : [description]).map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? 'mt-6' : 'mt-4'} text-[15px] leading-relaxed text-white/90 md:text-base`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href={ctaHref} className="btn-primary leading-tight">
                {ctaLabel}
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary leading-tight">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </Reveal>

        {features && features.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} variant="up" delay={index * 100}>
                <div className="h-full rounded-card border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="font-sans text-[17px] font-semibold leading-snug tracking-normal text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
