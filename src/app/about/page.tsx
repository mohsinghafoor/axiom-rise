import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import Carousel from '@/components/Carousel'
import CountersStrip from '@/components/landing/CountersStrip'
import Testimonials from '@/components/landing/Testimonials'
import ContactSection from '@/components/landing/ContactSection'

const philosophyCards = [
  {
    title: 'Golden Sample Integrity',
    description:
      'Bulk production is contractually held to the physical sample you approved — the fiftieth carton matches the first.',
    image: '/images/services/quality-assurance.webp',
  },
  {
    title: 'Agile Production Scaling',
    description:
      'Start at 30 units per style and scale to tens of thousands on the same lines, with the same teams.',
    image: '/images/services/manufacturing-excellence.webp',
  },
  {
    title: 'Border-Free Logistics',
    description:
      'DDP shipping to the USA, UK and Europe — you receive stock at your warehouse, not paperwork at customs.',
    image: '/images/services/global-export.webp',
  },
]

const advantageIconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const advantages = [
  {
    title: 'Activewear & Sports Gear',
    description:
      'Performance fabrics, compression construction and sublimated kit built for high-impact training and competition.',
    icon: (
      <svg className={advantageIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Premium Streetwear & Outerwear',
    description:
      'Heavyweight fleece, technical jackets and varsity classics with the structure and hand-feel premium brands demand.',
    icon: (
      <svg className={advantageIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'Corporate Uniforms & Utility',
    description:
      'Uniform programs with locked fits, consistent colour standards and durability that survives industrial laundering.',
    icon: (
      <svg className={advantageIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
]

const timeline = [
  {
    year: '2021',
    title: 'The Foundation',
    description: 'Axiom Rise is founded in Sialkot with a single sewing line and a direct-to-brand vision — no agents, no middlemen.',
  },
  {
    year: '2022',
    title: 'First Export Programs',
    description: 'The first private-label programs ship to the UK and Europe, built on the Golden Sample approval system still used today.',
  },
  {
    year: '2023',
    title: 'Certified Quality',
    description: 'ISO 9001:2015 certification formalises the three-checkpoint QC system that governs every order.',
  },
  {
    year: '2024',
    title: 'Global Reach',
    description: 'Shipments reach brands in 20+ countries, backed by consolidated DDP logistics to the USA, UK and Europe.',
  },
  {
    year: 'Today',
    title: 'Full-Package Production',
    description: 'A vertically integrated FPP partner — design, sourcing, production, decoration, QC and delivery under one roof.',
  },
]

const commitmentIconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const commitments = [
  {
    title: 'Zero Sweatshop Tolerance',
    description:
      'Audited facilities, fair wages and documented working conditions — we publish our standards and hold to them.',
    icon: (
      <svg className={commitmentIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Textile Sourcing',
    description:
      'Organic cotton, recycled polyester and low-impact dye routes available across every product category.',
    icon: (
      <svg className={commitmentIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Waste Reduction Systems',
    description:
      'Optimised markers, fabric recycling programs and made-to-order production keep waste off the floor and out of landfill.',
    icon: (
      <svg className={commitmentIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
]

const heritageImages = [
  '/images/custom-manufacturer.webp',
  '/images/hero/leather-jacket.webp',
  '/images/hero/sports-wear.webp',
  '/images/hero/varsity-jacket.webp',
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <Image
          src="/images/custom-manufacturer.webp"
          alt="About Axiom Rise"
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
                Engineering the Backbone of Global Apparel Brands Since 2021
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
                We are not sourcing agents. We are not middlemen. We are a vertically integrated cut-and-sew
                manufacturing facility dedicated to scaling serious apparel brands.
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

      {/* Philosophy — navy band with 3 cards */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-40 overflow-hidden">
            <Image src="/images/services/manufacturing-excellence.webp" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                Our Core Manufacturing Philosophy
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>
            <Reveal variant="fade" delay={100}>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90 text-center max-w-2xl mx-auto">
                The global apparel industry runs on a &ldquo;black box&rdquo; supply chain — tech packs go in,
                and whatever comes out six weeks later is your problem. We built Axiom Rise to be the opposite.
              </p>
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {philosophyCards.map((card, index) => (
                <Reveal key={card.title} variant="up" delay={(index % 3) * 100}>
                  <div className="group h-full rounded-card overflow-hidden shadow-card bg-primary-800">
                    <div className="relative h-[220px] overflow-hidden">
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
                      <h3 className="font-display text-[20px] md:text-[23px] leading-snug text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{card.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-disciplinary advantage */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
              The Axiom Rise Multi-Disciplinary Advantage
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>
          <Reveal variant="fade" delay={100}>
            <p className="mt-6 text-[15px] leading-relaxed text-body text-center max-w-3xl mx-auto">
              A common misconception in apparel manufacturing is that a factory can only be good at one thing.
              Our cross-category expertise means the precision of uniform programs, the durability of sports
              gear and the finish of premium streetwear inform every line we run.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
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

      {/* Sialkot heritage */}
      <section className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal variant="left">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">
                  The Sialkot Advantage: Our Geographic Heritage
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-body">
                  Location is not just an address — it is a manufacturing advantage. Axiom Rise is
                  headquartered in Sialkot, Pakistan: a city with over a century of export craftsmanship,
                  a dense ecosystem of accredited mills and trim suppliers, and generations of skilled
                  garment engineers.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-body">
                  That ecosystem is why we can source, sample and ship faster than offshore agents — every
                  supplier we depend on is minutes away, not oceans.
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" className="min-h-[320px] md:min-h-[420px]">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[420px] rounded-card overflow-hidden shadow-card">
                <Carousel images={heritageImages} interval={4000} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
              Our Path to Full-Package Production
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary-200 md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const left = index % 2 === 0
                return (
                  <div key={item.year} className="relative">
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary-600 ring-4 ring-primary-100 -translate-x-1/2" />
                    <Reveal variant={left ? 'left' : 'right'}>
                      <div
                        className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                          left ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                        }`}
                      >
                        <div className="bg-white rounded-card shadow-card p-6">
                          <div className="font-display text-[22px] text-primary-600">{item.year}</div>
                          <h5 className="mt-1 font-display text-[18px] md:text-[20px] font-semibold text-ink leading-snug">
                            {item.title}
                          </h5>
                          <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Ethics */}
      <section className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
              Our Ethical and Environmental Commitment
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {commitments.map((item, index) => (
              <Reveal key={item.title} variant="up" delay={index * 100}>
                <div className="group bg-white rounded-card shadow-card p-8 h-full text-center">
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

      <ContactSection />
    </div>
  )
}
