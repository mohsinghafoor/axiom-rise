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
import { productsData, dedicatedProductRoutes } from '@/data/products'
import { lineForSlug } from '@/data/manufacturingLines'

export function generateStaticParams() {
  return productsData
    .filter((product) => !dedicatedProductRoutes.includes(product.slug))
    .map((product) => ({ slug: product.slug }))
}

const toTitleCase = (s: string) =>
  s.toLowerCase().replace(/(^|\s)\w/g, (c) => c.toUpperCase())

const capabilities = [
  {
    title: 'Custom Design & Tech Packs',
    description:
      "Don't have a pattern? Our team provides tech pack drafting and pattern grading from a rough sketch.",
    image: '/images/services/custom-design.webp',
  },
  {
    title: 'Private Label Production',
    description:
      'Your brand, your labels, your packaging — produced end to end under one roof with full confidentiality.',
    image: '/images/services/private-label.webp',
  },
  {
    title: 'Quality Assurance & AQL Checks',
    description:
      'Incoming material testing, in-line inspection during sewing, and AQL final check before packing.',
    image: '/images/services/quality-assurance.webp',
  },
  {
    title: 'DDP Shipping (No Customs Hassle)',
    description:
      'Delivered Duty Paid shipping to the USA, UK and Europe. We handle customs so you receive stock, not paperwork.',
    image: '/images/services/global-export.webp',
  },
]

const whyIconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const whyItems = [
  {
    title: 'Expert Production Team',
    description:
      'Specialised pattern, sewing and finishing teams who work your product category every single day.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Radical Transparency',
    description:
      'Production photos and status updates at every milestone — no black box between you and your order.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Low MOQ Flexibility',
    description:
      'Start at just 10 units per style and colour, then scale to thousands without switching suppliers.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: 'Global Logistics',
    description:
      'Consolidated worldwide shipping with one invoice and one point of contact for your whole order.',
    icon: (
      <svg className={whyIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const name = toTitleCase(product.title.replace(/\s*(MANUFACTURERS?|SUPPLIER AND VENDORS|VENDORS|WHOLESALE)\s*/gi, ' ').trim() || product.title)
  const line = lineForSlug(product.slug)
  const related = (line ? line.slugs.filter((s) => s !== product.slug) : productsData.map((p) => p.slug).slice(0, 3))
    .map((slug) => productsData.find((p) => p.slug === slug))
    .filter((p): p is (typeof productsData)[number] => Boolean(p))
    .slice(0, 3)
  const carouselImages = [product.image, ...related.map((p) => p.image)].slice(0, 5)

  return (
    <div className="bg-white">
      {/* Hero — product pitch */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={product.title}
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
                Let Us Scale Your {name} Brand Faster — Without Guesswork, Delays, or Overseas Risk
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
                {product.description}. Every cut starts with a physical Golden Sample you approve before
                we touch your bulk order.
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

      {/* Capabilities — navy band with cards spilling out */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-40 overflow-hidden">
            <Image src={product.image} alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                Our {name} Manufacturing Capabilities
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>
            <Reveal variant="fade" delay={100}>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90 text-center max-w-2xl mx-auto">
                From first sketch to duty-paid delivery, every step runs under one roof — so your{' '}
                {name.toLowerCase()} order ships on spec and on time.
              </p>
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <Reveal key={cap.title} variant="up" delay={(index % 4) * 100}>
                  <div className="group h-full rounded-card overflow-hidden shadow-card bg-primary-800">
                    <div className="relative h-[190px] overflow-hidden">
                      <Image
                        src={cap.image}
                        alt={cap.title}
                        fill
                        className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-display text-[18px] leading-snug text-white">{cap.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/80">{cap.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-4xl mx-auto">
              Why Global Brands Partner With Axiom Rise For {name} Production
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>
          <Reveal variant="fade" delay={100}>
            <p className="mt-6 text-[15px] leading-relaxed text-body text-center max-w-3xl mx-auto">
              A single fabric failure kills repeat purchases, and one batch with inconsistent sizing floods
              your support inbox. We built our {name.toLowerCase()} line so that never happens to your brand.
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
        title={`Get Your ${name} Sample With Free Global Shipping`}
        description="You bring the design vision. We send you a physical Golden Sample — just cover the sample cost and we handle the shipping. Approve it, and bulk production is held to that exact standard."
      />

      <Testimonials />

      {/* OEM / ODM section */}
      <section className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal variant="left">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">
                  Global OEM/ODM Solutions: Your Supply Chain, Simplified
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-body">
                  We replace the &ldquo;black box&rdquo; of overseas manufacturing with total transparency
                  and logistical ease. Fabric, trims, hardware and packaging are sourced to your spec,
                  production is photographed at every milestone, and your {name.toLowerCase()} order
                  arrives duty-paid at your warehouse.
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

      {/* Related lines */}
      {related.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <h2 className="font-display text-[26px] md:text-[39px] leading-tight text-ink text-center">
                Explore More From {line ? line.label : 'Our Range'}
              </h2>
              <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((rel, index) => (
                <Reveal key={rel.slug} variant="up" delay={index * 100}>
                  <ProductCard
                    title={rel.title}
                    description={rel.description}
                    image={rel.image}
                    slug={rel.slug}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <ContactSection />
    </div>
  )
}
