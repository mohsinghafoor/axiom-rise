import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CountersStrip from '@/components/landing/CountersStrip'
import ProcessSection from '@/components/landing/ProcessSection'
import SamplesBand from '@/components/landing/SamplesBand'
import TrustStrip from '@/components/landing/TrustStrip'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import type {
  StreetwearIcon,
  StreetwearPageContent,
  StreetwearWhyItem,
} from '@/data/streetwearPages/types'

const iconClass = 'w-[42px] h-[42px] text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

/**
 * Heroicons-style outline paths, one entry per StreetwearIcon (some icons need
 * two paths). Deliberately duplicated from the jacket template rather than
 * shared — the two registries key off different unions and the jacket pages are
 * verified, so they are not refactored.
 */
const iconPaths: Record<StreetwearIcon, string[]> = {
  team: [
    'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  ],
  eye: [
    'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z',
    'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  ],
  moq: [
    'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z',
  ],
  globe: [
    'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  ],
  precision: [
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  ],
  branding: [
    'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z',
    'M6 6h.008v.008H6V6z',
  ],
  techpack: [
    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  ],
  sustainability: [
    'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  ],
  check: ['M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'],
  document: [
    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  ],
  cog: [
    'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z',
    'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  ],
  stitch: [
    'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10',
  ],
}

const renderIcon = (icon: StreetwearIcon) => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    {iconPaths[icon].map((d) => (
      <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
    ))}
  </svg>
)

const WhyBox = ({ item, alignRight = false }: { item: StreetwearWhyItem; alignRight?: boolean }) => (
  <div className={`group flex flex-col gap-3.5 text-center md:text-left ${alignRight ? 'md:items-end md:text-right' : 'md:items-start'} items-center`}>
    {renderIcon(item.icon)}
    <h3 className="font-display text-[20px] md:text-[19px] lg:text-[25px] leading-snug text-ink">{item.title}</h3>
    <p className="text-sm leading-relaxed text-body">{item.description}</p>
    <Link href="/contact" aria-label={`Inquire about ${item.title}`} className="btn-primary mt-1">
      Inquire Now
    </Link>
  </div>
)

export default function StreetwearPage({ content }: { content: StreetwearPageContent }) {
  const { hero, intro, capabilities, fabric, why, samples, oemOdm } = content

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
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
                {hero.h1}
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">{hero.sub}</p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  {hero.ctaLabel}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro — the problem and the answer */}
      <section className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal variant="left" className="min-h-[320px] md:min-h-[460px]">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[460px] rounded-card overflow-hidden shadow-card">
                <Image
                  src={intro.image}
                  alt={intro.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">{intro.h2}</h2>
                {intro.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`${index === 0 ? 'mt-6' : 'mt-4'} text-[15px] leading-relaxed text-body`}>
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    {intro.ctaLabel}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CountersStrip />

      {/* Capabilities — navy band with cards spilling out */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-[calc(100%-360px)] sm:bottom-[calc(100%-470px)] lg:bottom-40 overflow-hidden">
            <Image src={capabilities.bandImage} alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                {capabilities.heading}
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.items.map((item, index) => (
                <Reveal key={item.title} variant="up" delay={index * 100}>
                  <div className="group h-full flex flex-col rounded-card overflow-hidden shadow-card bg-primary-800">
                    <div className="relative h-[230px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
                    </div>
                    <div className="flex flex-col flex-1 p-6 text-center">
                      <h3 className="font-display text-[19px] md:text-[21px] leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/80">{item.description}</p>
                      <div className="mt-auto pt-5">
                        <Link
                          href="/contact"
                          aria-label={`Get a quote for ${item.title}`}
                          className="inline-block bg-primary-600 text-white font-sans text-[11px] uppercase tracking-[2px] leading-none rounded-card px-5 py-3 transition-colors duration-300 group-hover:bg-primary-900"
                        >
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fabric science — optional */}
      {fabric && (
        <section className="bg-white py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-ink text-center max-w-4xl mx-auto">
                {fabric.heading}
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-primary-600" />
              {fabric.lead && (
                <p className="mt-6 max-w-3xl mx-auto text-[15px] leading-relaxed text-body text-center">
                  {fabric.lead}
                </p>
              )}
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {fabric.items.map((item, index) => (
                <Reveal key={item.title} variant="up" delay={index * 100}>
                  <div className="h-full bg-cream rounded-card shadow-card p-8 text-center md:text-left">
                    <h3 className="font-display text-[19px] md:text-[21px] leading-snug text-ink">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-body">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why us */}
      <section className="bg-white pt-20 pb-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[30px] md:text-[54px] leading-[1.1] text-ink text-center max-w-4xl mx-auto">
              {why.heading}
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-10 gap-8 items-center">
            <div className="md:col-span-3 space-y-12">
              {why.items.slice(0, 2).map((item) => (
                <Reveal key={item.title} variant="left">
                  <WhyBox item={item} />
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" className="md:col-span-4">
              <div className="relative w-full h-[320px] md:h-[520px] rounded-card overflow-hidden shadow-card">
                <Image
                  src={why.image}
                  alt={why.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </Reveal>

            <div className="md:col-span-3 space-y-12">
              {why.items.slice(2).map((item) => (
                <Reveal key={item.title} variant="right">
                  <WhyBox item={item} alignRight />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Giant watermark */}
        <div className="mt-10 text-center select-none pointer-events-none" aria-hidden="true">
          <span className="font-display text-[80px] md:text-[150px] leading-none tracking-[-1.5px] text-primary-600/[0.08] whitespace-nowrap">
            AXIOM RISE
          </span>
        </div>
      </section>

      <ProcessSection title={content.processTitle} />

      <SamplesBand
        title={samples.title}
        description={samples.description}
        ctaLabel={samples.ctaLabel}
        image={samples.image}
      />

      <TrustStrip />
      <Testimonials />

      {/* OEM / ODM — optional */}
      {oemOdm && (
        <section className="bg-cream py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-ink text-center max-w-4xl mx-auto">
                {oemOdm.heading}
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-primary-600" />
              <p className="mt-6 max-w-3xl mx-auto text-[15px] leading-relaxed text-body text-center">
                {oemOdm.lead}
              </p>
            </Reveal>

            <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-8">
              {oemOdm.items.map((item, index) => (
                <Reveal key={item.title} variant="up" delay={index * 100}>
                  <div className="h-full bg-white/95 rounded-card shadow-card p-8 md:p-12 flex flex-col text-center md:text-left">
                    <h3 className="font-display text-[22px] md:text-[25px] leading-snug text-ink">{item.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-body">{item.description}</p>
                    <div className="mt-auto pt-8">
                      <Link
                        href="/contact"
                        aria-label={`Inquire about ${item.title}`}
                        className="btn-primary"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ items={content.faqs} />
      <ContactSection />
    </div>
  )
}
