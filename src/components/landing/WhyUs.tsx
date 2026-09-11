import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

interface WhyItem {
  title: string
  description: string
  href: string
  cta: string
  icon: React.ReactNode
}

const iconClass = 'w-[42px] h-[42px] text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const leftItems: WhyItem[] = [
  {
    title: 'One Accountable Workflow',
    description:
      'Technical development, sourcing, sampling, production, branding, inspection and packing all follow the same approved order specification — and the same point of contact.',
    href: '/contact',
    cta: 'Inquire Now',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Materials Approved Before Cutting',
    description:
      'Fabric composition, GSM, stretch, Pantone colour, lab dip, dye lot, trims and any substitutions are documented and signed off before bulk production starts.',
    href: '/services/fabric-sourcing',
    cta: 'Explore Fabric Sourcing',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
]

const rightItems: WhyItem[] = [
  {
    title: 'Fit Controlled Across Sizes',
    description:
      'Digital pattern making, grading rules, points of measure and size-set approval protect the intended fit — so a large is not just a blown-up small.',
    href: '/services/tech-pack-design',
    cta: 'Pattern Making and Grading',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Branding Matched to the Fabric',
    description:
      'Embroidery, screen printing, DTG, sublimation, heat transfer or woven labels — chosen against the textile, the artwork and how the garment will actually be worn.',
    href: '/services/custom-embroidery',
    cta: 'Manufacturing Capabilities',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
]

function WhyBox({ item, alignRight = false }: { item: WhyItem; alignRight?: boolean }) {
  return (
    <div
      className={`group flex flex-col items-center gap-3.5 text-center md:text-left ${
        alignRight ? 'md:items-end md:text-right' : 'md:items-start'
      }`}
    >
      {item.icon}
      <h3 className="font-display text-[20px] leading-snug text-ink md:text-[25px]">{item.title}</h3>
      <p className="text-sm leading-relaxed text-body">{item.description}</p>
      <Link href={item.href} className="btn-pill-outline mt-1">
        {item.cta}
      </Link>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className="overflow-hidden bg-white pb-10 pt-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <SectionHeading
            title="Why Brands Choose Axiom Rise"
            subtitle="Four controls that decide whether a bulk run matches the sample you approved."
            tone="navy"
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-10">
          <div className="space-y-12 md:col-span-3">
            {leftItems.map((item) => (
              <Reveal key={item.title} variant="left">
                <WhyBox item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" className="md:col-span-4">
            <div className="relative h-[320px] w-full overflow-hidden rounded-card shadow-card md:h-[560px]">
              <Image
                src="/images/custom-manufacturer.webp"
                alt="Axiom Rise clothing manufacturer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <div className="space-y-12 md:col-span-3">
            {rightItems.map((item) => (
              <Reveal key={item.title} variant="right">
                <WhyBox item={item} alignRight />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="mt-10 select-none text-center pointer-events-none" aria-hidden="true">
        <span className="whitespace-nowrap font-display text-[80px] leading-none tracking-[-1.5px] text-primary-600/[0.08] md:text-[150px]">
          AXIOM RISE
        </span>
      </div>
    </section>
  )
}
