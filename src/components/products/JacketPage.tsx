import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CountersStrip from '@/components/landing/CountersStrip'
import SamplesBand from '@/components/landing/SamplesBand'
import TrustStrip from '@/components/landing/TrustStrip'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import type {
  JacketDeepDive,
  JacketIcon,
  JacketPageContent,
  JacketWhyItem,
  RichSegment,
} from '@/data/jacketPages/types'

const iconClass = 'w-[42px] h-[42px] text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const linkClass =
  'text-primary-600 font-medium underline decoration-primary-600/40 underline-offset-2 hover:text-primary-800 hover:decoration-primary-800 transition-colors duration-300'

/** Heroicons-style outline paths, one entry per JacketIcon (some icons need two paths). */
const iconPaths: Record<JacketIcon, string[]> = {
  document: [
    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  ],
  stitch: [
    'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10',
  ],
  shield: [
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  ],
  clock: ['M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'],
  scale: [
    'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z',
  ],
  eye: [
    'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z',
    'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  ],
  box: [
    'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
  ],
  tag: [
    'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z',
    'M6 6h.008v.008H6V6z',
  ],
  ruler: [
    'M3.75 8.25h16.5c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125H3.75c-.621 0-1.125-.504-1.125-1.125v-5.25c0-.621.504-1.125 1.125-1.125z',
    'M6.75 8.25v3m3-3v2.25m3-2.25v3m3-3v2.25m3-2.25v3',
  ],
  chart: [
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  ],
  cog: [
    'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z',
    'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  ],
  check: ['M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'],
}

const renderIcon = (icon: JacketIcon) => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    {iconPaths[icon].map((d) => (
      <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
    ))}
  </svg>
)

const bulletIcon = (
  <svg
    className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-600"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const RichText = ({ segments }: { segments: RichSegment[] }) => (
  <>
    {segments.map((segment, index) => {
      if (!segment.href) return <Fragment key={index}>{segment.text}</Fragment>
      // Outbound citations (standards bodies, certification schemes) open in a new tab
      if (segment.href.startsWith('http')) {
        return (
          <a key={index} href={segment.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {segment.text}
          </a>
        )
      }
      return (
        <Link key={index} href={segment.href} className={linkClass}>
          {segment.text}
        </Link>
      )
    })}
  </>
)

const WhyBox = ({ item, alignRight = false }: { item: JacketWhyItem; alignRight?: boolean }) => (
  <div className={`group flex flex-col gap-3.5 text-center md:text-left ${alignRight ? 'md:items-end md:text-right' : 'md:items-start'} items-center`}>
    {renderIcon(item.icon)}
    <h3 className="font-display text-[20px] md:text-[19px] lg:text-[25px] leading-snug text-ink">{item.title}</h3>
    <p className="text-sm leading-relaxed text-body">{item.description}</p>
    <Link href="/contact" aria-label={`Inquire about ${item.title}`} className="btn-primary mt-1">
      Inquire Now
    </Link>
  </div>
)

const DeepDiveBody = ({ dive, withRule = false }: { dive: JacketDeepDive; withRule?: boolean }) => (
  <>
    <h2 className="font-display text-[22px] md:text-[31px] leading-snug text-ink">{dive.heading}</h2>
    {withRule && <div className="mt-4 mx-auto md:mx-0 w-[50px] border-t border-primary-600" />}
    {dive.lead && (
      <p className="mt-6 text-[15px] leading-relaxed text-body">
        <RichText segments={dive.lead} />
      </p>
    )}
    <ul className={`${dive.lead ? 'mt-5' : 'mt-6'} space-y-3 text-left`}>
      {dive.bullets.map((bullet, index) => (
        <li key={index} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
          {bulletIcon}
          <span>
            {bullet.label && (
              <>
                <strong className="font-semibold text-ink">{bullet.dash ? bullet.label : `${bullet.label}:`}</strong>
                {bullet.dash ? ' — ' : ' '}
              </>
            )}
            {typeof bullet.description === 'string' ? (
              bullet.description
            ) : (
              <RichText segments={bullet.description} />
            )}
          </span>
        </li>
      ))}
    </ul>
    {dive.close && (
      <p className="mt-5 text-[15px] leading-relaxed text-body">
        <RichText segments={dive.close} />
      </p>
    )}
    <div className="mt-8">
      <Link href="/contact" aria-label={`${dive.ctaLabel} about ${dive.heading}`} className="btn-primary">
        {dive.ctaLabel}
      </Link>
    </div>
  </>
)

export default function JacketPage({ content }: { content: JacketPageContent }) {
  const { hero, intro, styles, why, deepDives, samples } = content

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

      {/* Intro — the number behind the claim */}
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
                    <RichText segments={paragraph} />
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

      {/* Styles — navy band with cards spilling out */}
      <section className="bg-white pb-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 bottom-[calc(100%-360px)] sm:bottom-[calc(100%-470px)] lg:bottom-40 overflow-hidden">
            <Image src={styles.bandImage} alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-primary-800/85" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
            <Reveal variant="down">
              <h2 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                {styles.heading}
              </h2>
              <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
            </Reveal>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {styles.items.map((style, index) => (
                <Reveal key={style.title} variant="up" delay={index * 100}>
                  <div className="group h-full flex flex-col rounded-card overflow-hidden shadow-card bg-primary-800">
                    <div className="relative h-[230px] overflow-hidden">
                      <Image
                        src={style.image}
                        alt={style.title}
                        fill
                        className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
                    </div>
                    <div className="flex flex-col flex-1 p-6 text-center">
                      <h3 className="font-display text-[19px] md:text-[21px] leading-snug text-white">
                        {style.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/80">{style.description}</p>
                      <div className="mt-auto pt-5">
                        <Link
                          href="/contact"
                          aria-label={`Get a quote for ${style.title}`}
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

      {/* Deep dive 1 — image left, white card right */}
      <section className="bg-cream py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal variant="left" className="min-h-[320px] md:min-h-[460px]">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[460px] rounded-card overflow-hidden shadow-card">
                <Image
                  src={deepDives[0].image}
                  alt={deepDives[0].imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
                <DeepDiveBody dive={deepDives[0]} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deep dive 2 — text left, image right */}
      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal variant="left">
              <div className="text-center md:text-left">
                <DeepDiveBody dive={deepDives[1]} withRule />
              </div>
            </Reveal>

            <Reveal variant="right" className="min-h-[320px] md:min-h-[460px]">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[460px] rounded-card overflow-hidden shadow-card">
                <Image
                  src={deepDives[1].image}
                  alt={deepDives[1].imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SamplesBand
        title={samples.title}
        description={samples.description}
        ctaLabel={samples.ctaLabel}
        image={samples.image}
      />

      <TrustStrip />
      <Testimonials />
      <FAQ items={content.faqs} />
      <ContactSection />
    </div>
  )
}
