import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
import CountersStrip from '@/components/landing/CountersStrip'
import SamplesBand from '@/components/landing/SamplesBand'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { services, serviceBySlug } from '@/data/services'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

const stepIconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const stepIcons = [
  (
    <svg key="step-1" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
  ),
  (
    <svg key="step-2" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  ),
  (
    <svg key="step-3" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="step-4" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
]

const trustPoints = [
  {
    title: 'Built by Real Factory Engineers',
    description: 'Every service is delivered by the same team that runs bulk production — not an outsourced studio.',
  },
  {
    title: 'Seamless Factory Integration',
    description: 'The output plugs straight into our production floor, or any factory you choose to work with.',
  },
  {
    title: 'Fast, Predictable Turnarounds',
    description: 'Fixed timelines agreed up front, with milestone updates so you always know where things stand.',
  },
  {
    title: 'Full Ownership of the Files',
    description: 'Specs, patterns, artwork and reports are delivered to you and remain your property.',
  },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug)
  if (!service) notFound()

  // Services with long-form content render the full editorial layout.
  if (service.detail) return <ServiceDetailPage service={service} detail={service.detail} />

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-[30px] md:text-[46px] leading-[1.15] tracking-[-1px] text-white">
                {service.heroHeadline}
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">{service.heroSub}</p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Make An Enquiry
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CountersStrip />

      {/* Pain section */}
      <section className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal variant="left" className="min-h-[300px]">
              <div className="relative w-full h-full min-h-[300px] rounded-card overflow-hidden shadow-card">
                <Image
                  src={service.image}
                  alt={service.pain.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">
                  {service.pain.title}
                </h2>
                {service.pain.body.map((paragraph, index) => (
                  <p key={index} className={`text-[15px] leading-relaxed text-body ${index === 0 ? 'mt-6' : 'mt-4'}`}>
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Review
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included — navy band */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-40 overflow-hidden">
            <Image src={service.image} alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                What Our {service.shortName} Services Include
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {service.includes.map((item, index) => (
                <Reveal key={item.title} variant="up" delay={(index % 3) * 100}>
                  <div className="bg-primary-800 rounded-card shadow-card p-8 h-full">
                    <div className="font-display text-primary-200 text-sm">0{index + 1}</div>
                    <h3 className="mt-2 font-display text-[19px] md:text-[21px] font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
              Our {service.shortName} Process
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <Reveal key={step.title} variant="up" delay={index * 100}>
                <div className="group text-center px-4">
                  {stepIcons[index % stepIcons.length]}
                  <div className="mt-4 font-display text-primary-600 text-sm">0{index + 1}</div>
                  <h5 className="mt-1 font-display text-[18px] md:text-[20px] font-semibold text-primary-800 leading-snug">
                    {step.title}
                  </h5>
                  <p className="mt-3 text-sm leading-relaxed text-body">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-4xl mx-auto">
              Why Brands Trust Our {service.shortName} Services
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {trustPoints.map((point, index) => (
              <Reveal key={point.title} variant="up" delay={(index % 2) * 100}>
                <div className="bg-white rounded-card shadow-card p-8 h-full">
                  <div className="font-display text-primary-600 text-sm">0{index + 1}</div>
                  <h5 className="mt-2 font-display text-[19px] md:text-[22px] font-semibold text-primary-800 leading-snug">
                    {point.title}
                  </h5>
                  <p className="mt-3 text-sm leading-relaxed text-body">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SamplesBand
        title="Get a Free Manufacturing Feasibility Audit"
        description="Already have a design but not sure it can be manufactured at your target price? Send it over — our production engineers will review it, flag the risks and send you an honest assessment, free."
      />

      <Testimonials />

      {/* Related services */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[26px] md:text-[39px] leading-tight text-ink text-center">
              Explore More Production Services
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((rel, index) => (
              <Reveal key={rel.slug} variant="up" delay={index * 100}>
                <ProductCard
                  title={rel.title}
                  description={rel.blurb}
                  image={rel.image}
                  slug={rel.slug}
                  href={`/services/${rel.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={service.faqs} />
      <ContactSection />
    </div>
  )
}
