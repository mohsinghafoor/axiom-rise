import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
import Carousel from '@/components/Carousel'
import CountersStrip from '@/components/landing/CountersStrip'
import ProcessSection from '@/components/landing/ProcessSection'
import SamplesBand from '@/components/landing/SamplesBand'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import { productsData } from '@/data/products'
import { manufacturingLines, lineBySlug } from '@/data/manufacturingLines'

export function generateStaticParams() {
  return manufacturingLines.map((line) => ({ slug: line.slug }))
}

const serviceCards = [
  {
    title: 'Radical Transparency & IP Protection',
    description:
      'Production photos at every milestone and signed NDAs as standard — your designs stay yours.',
    image: '/images/services/quality-assurance.webp',
  },
  {
    title: 'Brand Stage Solutions (OEM/ODM)',
    description:
      'From first capsule drop to enterprise supply programs, production scales with your brand stage.',
    image: '/images/services/supply-chain.webp',
  },
]

const whyIconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const whyItems = [
  {
    title: 'Consistency is King',
    description:
      'Every batch is measured against your approved Golden Sample, so the fiftieth carton matches the first.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Rapid Restocks',
    description:
      'Approved patterns and graded specs stay on file, so reorders skip sampling and go straight to the line.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Complex Customization',
    description:
      'Panelling, embroidery, appliqué, custom hardware and speciality washes — handled in-house, not outsourced.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Low MOQ Flexibility',
    description:
      'Start at just 30 units per style and colour, then scale to thousands without switching suppliers.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const line = lineBySlug(params.slug)
  if (!line) notFound()

  const products = line.slugs
    .map((slug) => productsData.find((p) => p.slug === slug))
    .filter((p): p is (typeof productsData)[number] => Boolean(p))
  const carouselImages = products.map((p) => p.image).slice(0, 5)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <Image
          src={line.bandImage}
          alt={line.label}
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
                Axiom Rise — The {line.shortName} Manufacturer That Turns Your Rough Sketches Into 7-Figure Brands
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
                Private label &amp; OEM/ODM partner for creators, independent designers and enterprise
                brands worldwide. {line.description}
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

      {/* Core categories — navy band with product cards */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-40 overflow-hidden">
            <Image src={line.bandImage} alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                Here&apos;s Our Core {line.shortName} Categories
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>
            <Reveal variant="fade" delay={100}>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90 text-center max-w-2xl mx-auto">
                Every cut starts with a physical Golden Sample you approve before we touch your bulk order.
              </p>
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <Reveal key={product.slug} variant="up" delay={(index % 3) * 100}>
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    slug={product.slug}
                  />
                </Reveal>
              ))}
              {serviceCards.map((card, index) => (
                <Reveal key={card.title} variant="up" delay={((products.length + index) % 3) * 100}>
                  <div className="group h-full rounded-card overflow-hidden shadow-card bg-primary-800">
                    <div className="relative h-[300px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-display text-[20px] md:text-[24px] leading-snug text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{card.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-4xl mx-auto">
              Why Top-Tier Brands Switch To Axiom Rise For Their {line.shortName} Collections
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>
          <Reveal variant="fade" delay={100}>
            <p className="mt-6 text-[15px] leading-relaxed text-body text-center max-w-3xl mx-auto">
              You&apos;ve probably dealt with it before — a supplier who looked great on Instagram, promised
              three-week delivery, then went silent for a month. We built our {line.shortName.toLowerCase()}{' '}
              line to be the opposite of that.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item, index) => (
              <Reveal key={item.title} variant="up" delay={index * 100}>
                <div className="group text-center px-4">
                  {item.icon}
                  <h5 className="mt-5 font-display text-[18px] md:text-[20px] font-semibold text-primary-800 leading-snug">
                    {item.title}
                  </h5>
                  <p className="mt-3 text-sm leading-relaxed text-body">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <SamplesBand
        title={`Get Your ${line.shortName} Sample With Free Global Shipping`}
        description="You bring the design vision. We send you a physical Golden Sample — just cover the sample cost and we handle the shipping. Approve it, and bulk production is held to that exact standard."
      />

      <Testimonials />

      {/* Partnering / OEM section */}
      <section className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal variant="left">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">
                  Partnering With Up-And-Coming Brands: From Tech Pack To Global Delivery
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-body">
                  Scaling a brand is hard; manufacturing shouldn&apos;t be. We bridge the gap for
                  independent designers and enterprise buyers alike — tech pack drafting, fabric sourcing,
                  {` ${line.shortName.toLowerCase()} `}production and duty-paid delivery, all under one roof
                  with total transparency.
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Make An Enquiry
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" className="min-h-[320px] md:min-h-[420px]">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[420px] rounded-card overflow-hidden shadow-card">
                <Carousel images={carouselImages} interval={4000} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />
      <ContactSection />
    </div>
  )
}
