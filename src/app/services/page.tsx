import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
import CountersStrip from '@/components/landing/CountersStrip'
import SamplesBand from '@/components/landing/SamplesBand'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import { services } from '@/data/services'

const stepIconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const steps = [
  {
    title: 'Technical Review & Sourcing',
    description: 'We audit your tech pack or build one from scratch, then source and test every material against it.',
    icon: (
      <svg className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Prototyping & the Golden Sample',
    description: 'You receive a physical Golden Sample to approve — bulk production is contractually held to it.',
    icon: (
      <svg className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Bulk Manufacturing',
    description: 'Your order runs on a category-specific line with in-line QC at every critical operation.',
    icon: (
      <svg className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Inspection & Global Shipping',
    description: 'AQL 2.5 final audit with photo reports, then DDP shipping so stock lands duty-paid at your door.',
    icon: (
      <svg className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
]

const reasons = [
  {
    title: 'Centralized Accountability',
    description: 'One partner owns the whole chain — no more suppliers blaming each other while your launch slips.',
  },
  {
    title: 'Contractual Golden Sample Guarantee',
    description: 'Bulk goods are held to the sample you physically approved. If it does not match, we fix it.',
  },
  {
    title: 'Ethical & Compliant Operations',
    description: 'Audited facilities, fair-wage labour and documented compliance for your target markets.',
  },
  {
    title: 'Transparent Minimums & Tiered Pricing',
    description: 'MOQs from 10 units and pricing tiers you can see up front — no quote-stage surprises.',
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <Image
          src="/images/services/manufacturing-excellence.webp"
          alt="Apparel manufacturing services"
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
                Stop Chasing Multiple Providers. Consolidate Your Supply Chain With End-to-End Apparel Manufacturing Services
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
                Tech packs, pattern making, prototyping, fabric sourcing, cut and sew production, decoration,
                labelling, packaging and inspection — one factory, one invoice, one point of accountability.
              </p>
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
                  src="/images/services/global-export.webp"
                  alt="Fragmented supply chains"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal variant="right">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">
                  Why Fragmented Service Providers Destroy Your Margins
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-body">
                  Most clothing brands end up acting as their own general contractor — paying one company
                  for patterns, another for fabric, a third for sewing and a fourth for printing. Every
                  hand-off adds a margin, a delay and a place for quality to slip.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-body">
                  You know the nightmare: the fabric supplier misses a deadline, which delays the cut and
                  sew, which pushes the print slot, and suddenly your launch is a season late. We run the
                  entire chain under one roof so that chain reaction never starts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services grid — navy band */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-40 overflow-hidden">
            <Image src="/images/services/manufacturing-excellence.webp" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                Explore Our End-to-End Apparel Production Services
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>
            <Reveal variant="fade" delay={100}>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90 text-center max-w-2xl mx-auto">
                Fourteen connected disciplines that take a design from first sketch to a barcoded carton on
                your warehouse shelf. Take a single service, or hand us the whole chain.
              </p>
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Reveal key={service.slug} variant="up" delay={(index % 3) * 100}>
                  <ProductCard
                    title={service.title}
                    description={service.blurb}
                    image={service.image}
                    slug={service.slug}
                    href={`/services/${service.slug}`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
              How Our Custom Garment Production Services Work
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Reveal key={step.title} variant="up" delay={index * 100}>
                <div className="group text-center px-4">
                  {step.icon}
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

      {/* Reasons */}
      <section className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
              Four Reasons Brands Choose Our Apparel Manufacturing Services
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} variant="up" delay={(index % 2) * 100}>
                <div className="bg-white rounded-card shadow-card p-8 h-full">
                  <div className="font-display text-primary-600 text-sm">0{index + 1}</div>
                  <h5 className="mt-2 font-display text-[19px] md:text-[22px] font-semibold text-primary-800 leading-snug">
                    {reason.title}
                  </h5>
                  <p className="mt-3 text-sm leading-relaxed text-body">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SamplesBand
        title="Get a Free Manufacturing Feasibility Review"
        description="You don't need to guess whether your designs are ready for the production floor. Send us your tech pack or reference pieces and our production engineers will review feasibility, flag risks and quote — free."
      />

      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  )
}
