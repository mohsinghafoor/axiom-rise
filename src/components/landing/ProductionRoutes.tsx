import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

interface Route {
  title: string
  description: string
  href: string
  cta: string
}

const routes: Route[] = [
  {
    title: 'OEM and ODM',
    description:
      'Use OEM production when your specification is already locked. Choose ODM development when you need support with design, materials, fit and product engineering.',
    href: '/services/tech-pack-design',
    cta: 'Tech Pack Design',
  },
  {
    title: 'Full-Package Production (FPP)',
    description:
      'We take the order end to end — pattern, fabric and trim sourcing, sampling, bulk manufacturing, branding, inspection and packing under one accountable scope.',
    href: '/services/cut-and-sew-manufacturing',
    cta: 'Full-Package Service',
  },
  {
    title: 'Cut-Make-Trim (CMT)',
    description:
      'You supply approved patterns, specifications and materials; we handle cutting, sewing and finishing against the agreed production scope.',
    href: '/services/cut-and-sew-manufacturing',
    cta: 'Cut and Sew Service',
  },
  {
    title: 'Private Label Production',
    description:
      'Apply your brand identity through woven labels, care labels, hangtags, packaging and approved decoration on garments built to your spec.',
    href: '/services/private-label-clothing',
    cta: 'Private Label Service',
  },
]

export default function ProductionRoutes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <SectionHeading
            title="One Production Partner, Four Ways to Start"
            subtitle="You may have only a sketch, a complete tech pack, approved materials or a product ready for branding. Choose the route that matches your current stage."
            tone="navy"
          />
        </Reveal>

        <div className="mt-12 grid gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-y-0">
          {routes.map((route, index) => (
            <Reveal key={route.title} variant="up" delay={index * 100}>
              <div
                className={`flex h-full flex-col items-center px-5 text-center lg:px-6 ${
                  index > 0 ? 'lg:border-l lg:border-primary-200' : ''
                }`}
              >
                <span className="font-display text-[13px] font-semibold uppercase tracking-[3px] text-primary-600">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-[22px] leading-[1.3] text-primary-800 md:text-[26px]">
                  {route.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-body">
                  {route.description}
                </p>
                <Link href={route.href} className="btn-pill-outline mt-6 leading-[1.4]">
                  {route.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
