import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

interface SamplesBandProps {
  title?: string
  /** A single paragraph, or several rendered in sequence. */
  description?: string | string[]
  ctaLabel?: string
  image?: string
}

export default function SamplesBand({
  title = 'Get Your Samples With Free Shipping; No Hidden Costs, No Commitment',
  description = 'You bring the brand vision. We send you physical Golden Samples with zero shipping cost. Every order starts with a sample you physically approve — whether you are launching a new streetwear label, scaling an existing line, or sourcing a reliable factory for a national brand.',
  ctaLabel = 'Request Samples With Free Shipping Today',
  image = '/images/hero/fitness.webp',
}: SamplesBandProps) {
  return (
    <section className="relative py-28 md:py-40">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/60" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-14 h-14 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <h2 className="mt-6 font-display text-[25px] md:text-[39px] leading-[1.2] text-white">
              {title}
            </h2>
            {(Array.isArray(description) ? description : [description]).map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? 'mt-6' : 'mt-4'} text-base leading-relaxed tracking-[0.3px] text-white/95`}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Link href="/contact" className="btn-primary leading-tight">
                {ctaLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
