import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CountersStrip from '@/components/landing/CountersStrip'
import SamplesBand from '@/components/landing/SamplesBand'
import Testimonials from '@/components/landing/Testimonials'
import TrustStrip from '@/components/landing/TrustStrip'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import type { Service, ServiceAudit, ServiceBand, ServiceDetail, ServiceInclude } from '@/data/services'

/** Supporting imagery for the long-form bands. The hero and pain block use the service's own image. */
const warningImage = '/images/services/manufacturing-excellence.webp'
const processImage = '/images/process/planning.webp'
const spotlightImage = '/images/services/private-label.webp'
const auditImage = '/images/services/quality-assurance.webp'
const finalCtaImage = '/images/services/supply-chain.webp'

/** Cycled through the prose bands after the first, so consecutive bands never repeat an image. */
const bandImages = [
  '/images/process/production.webp',
  '/images/services/global-export.webp',
  '/images/process/delivery.webp',
  '/images/services/manufacturing-excellence.webp',
]

const stepIconClass = 'h-11 w-11 text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const stepIcons = [
  <svg key="step-1" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  <svg key="step-2" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>,
  <svg key="step-3" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>,
  <svg key="step-4" className={stepIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
]

const trustIconClass = 'h-10 w-10 text-primary-600'

const trustIcons = [
  <svg key="trust-1" className={trustIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>,
  <svg key="trust-2" className={trustIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
  <svg key="trust-3" className={trustIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>,
  <svg key="trust-4" className={trustIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  <svg key="trust-5" className={trustIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="trust-6" className={trustIconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>,
]

/** Icon paths a data entry can request by name, where the positional sets do not fit the content. */
const namedIconPaths: Record<string, React.ReactNode> = {
  pin: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </>
  ),
  wash: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </>
  ),
  motion: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </>
  ),
  shrink: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
    </>
  ),
  swatch: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </>
  ),
  heat: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
    </>
  ),
  droplet: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c1.88 2.2 6.75 8.3 6.75 12a6.75 6.75 0 11-13.5 0c0-3.7 4.87-9.8 6.75-12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25a3 3 0 003 3" />
    </>
  ),
  sparkles: (
    <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </>
  ),
  lock: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </>
  ),
  envelope: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </>
  ),
  carton: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </>
  ),
  cube: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </>
  ),
}

/** Renders a named icon at the size the calling band uses. */
function NamedIcon({ name, className }: { name: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      {namedIconPaths[name]}
    </svg>
  )
}
/** A spec card in the navy include band. `number` continues across groups so the run reads 01..n. */
function IncludeCard({ item, number }: { item: ServiceInclude; number: number }) {
  return (
    <div className="flex h-full flex-col rounded-card bg-white p-8 shadow-card md:p-10">
      <div className="font-display text-sm tracking-[2px] text-primary-600">
        {String(number).padStart(2, '0')}
      </div>
      <h3 className="mt-2 font-display text-[19px] font-semibold leading-snug text-primary-800 md:text-[22px]">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{item.description}</p>
      <div className="mt-6">
        <Link href="/contact" className="btn-pill-outline">
          Inquire Now
        </Link>
      </div>
    </div>
  )
}

/** One step of the process timeline, mirrored so the pair on the left reads toward the centre image. */
function ProcessStep({
  index,
  title,
  description,
  icon,
  align,
}: {
  index: number
  title: string
  description: string
  icon?: string
  align: 'left' | 'right'
}) {
  const toCentre = align === 'right' ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'

  return (
    <div className={`group flex flex-col items-start text-left ${toCentre}`}>
      {icon && namedIconPaths[icon] ? (
        <NamedIcon name={icon} className={stepIconClass} />
      ) : (
        stepIcons[index % stepIcons.length]
      )}
      <div className="mt-4 font-display text-sm text-primary-600">0{index + 1}</div>
      <h5 className="mt-1 font-display text-[18px] font-semibold leading-snug text-primary-800 md:text-[21px]">
        {title}
      </h5>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">{description}</p>
    </div>
  )
}

/** A checklist band — ticked criteria on one side, imagery on the other. Navy by default; cream breaks up a run. */
function AuditBand({ audit, image, flip }: { audit: ServiceAudit; image: string; flip: boolean }) {
  const cream = audit.tone === 'cream'

  return (
    <section className={`relative overflow-hidden py-20 md:py-24 ${cream ? 'bg-cream' : ''}`}>
      {!cream && (
        <>
          <Image src={auditImage} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-primary-800/90" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variant={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : ''}>
            <div>
              <h2
                className={`font-display text-[26px] leading-snug md:text-[38px] ${cream ? 'text-ink' : 'text-white'}`}
              >
                {audit.title}
              </h2>
              <div className={`mt-4 w-[50px] border-t ${cream ? 'border-primary-600' : 'border-white/70'}`} />
              <p className={`mt-5 text-[15px] leading-relaxed md:text-base ${cream ? 'text-body' : 'text-white/90'}`}>
                {audit.intro}
              </p>
              {audit.body?.map((paragraph, index) => (
                <p
                  key={index}
                  className={`mt-4 text-[15px] leading-relaxed md:text-base ${cream ? 'text-body' : 'text-white/90'}`}
                >
                  {paragraph}
                </p>
              ))}
              {audit.criteriaLabel && (
                <p
                  className={`mt-6 font-display text-[17px] font-semibold ${cream ? 'text-primary-800' : 'text-white'}`}
                >
                  {audit.criteriaLabel}
                </p>
              )}

              {audit.criteria && (
                <ul className="mt-4 space-y-4">
                  {audit.criteria.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${cream ? 'text-primary-600' : 'text-white'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <p className={`text-sm leading-relaxed ${cream ? 'text-body' : 'text-white/85'}`}>
                        <span className={`font-semibold ${cream ? 'text-primary-800' : 'text-white'}`}>
                          {item.title}:
                        </span>{' '}
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {audit.closing && (
                <p className={`mt-6 text-[15px] leading-relaxed ${cream ? 'text-body' : 'text-white/90'}`}>
                  {audit.closing}
                </p>
              )}

              <div className="mt-8">
                <Link href="/contact" className={cream ? 'btn-primary' : 'btn-secondary leading-tight'}>
                  {audit.ctaLabel}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal variant={flip ? 'left' : 'right'} className="min-h-[340px]">
            <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-card shadow-card">
              <Image
                src={image}
                alt={audit.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** A prose band — supporting image on one side, copy on the other. Navy by default; cream breaks up a run. */
function SpotlightBand({ band, image, flip }: { band: ServiceBand; image: string; flip: boolean }) {
  const cream = band.tone === 'cream'

  return (
    <section className={`relative overflow-hidden py-20 md:py-24 ${cream ? 'bg-cream' : ''}`}>
      {!cream && (
        <>
          <Image src={spotlightImage} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-primary-800/90" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variant={flip ? 'right' : 'left'} className={`min-h-[320px] ${flip ? 'lg:order-2' : ''}`}>
            <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-card shadow-card">
              <Image
                src={image}
                alt={band.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal variant={flip ? 'left' : 'right'}>
            <div>
              <h2
                className={`font-display text-[24px] leading-snug md:text-[34px] ${cream ? 'text-ink' : 'text-white'}`}
              >
                {band.title}
              </h2>
              <div className={`mt-4 w-[50px] border-t ${cream ? 'border-primary-600' : 'border-white/70'}`} />
              {band.body.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[15px] leading-relaxed ${cream ? 'text-body' : 'text-white/90'} ${
                    index === 0 ? 'mt-6' : 'mt-4'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8">
                <Link href="/contact" className={cream ? 'btn-primary' : 'btn-secondary leading-tight'}>
                  {band.ctaLabel}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function ServiceDetailPage({
  service,
  detail,
}: {
  service: Service
  detail: ServiceDetail
}) {
  const leftSteps = service.process.slice(0, 2)
  const rightSteps = service.process.slice(2, 4)
  const processTitle = detail.processTitle ?? `Our ${service.shortName} Process`
  // The resources band sits on cream when it trails the navy audit band.
  const cream = detail.resources?.tone === 'cream'
  const trust = detail.trust
  // One band or several: the data may hold either.
  const spotlights = detail.spotlight
    ? Array.isArray(detail.spotlight)
      ? detail.spotlight
      : [detail.spotlight]
    : []
  const audits = detail.audit ? (Array.isArray(detail.audit) ? detail.audit : [detail.audit]) : []

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-black py-24 md:min-h-[760px] md:py-32">
        <Image src={service.image} alt={service.title} fill className="object-cover opacity-80" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-black/55 to-black/70" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-[30px] leading-[1.15] tracking-[-1px] text-white md:text-[46px]">
                {service.heroHeadline}
              </h1>
              <div className="mx-auto mt-5 w-[50px] border-t border-white/70" />
              <p className="mx-auto mt-5 max-w-3xl text-base text-white/95 md:text-lg">{service.heroSub}</p>
              {(Array.isArray(detail.heroBody) ? detail.heroBody : [detail.heroBody]).map((paragraph, index) => (
                <p key={index} className="mx-auto mt-5 max-w-3xl text-[15px] leading-relaxed text-white/80">
                  {paragraph}
                </p>
              ))}
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

      {/* Why a basic sketch fails — image left, copy right */}
      <section className="overflow-hidden bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <Reveal variant="left" className="min-h-[320px]">
              <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-card shadow-card">
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
              <div className="flex h-full flex-col justify-center rounded-card bg-white/95 p-8 text-center shadow-card md:p-12 md:text-left">
                <h2 className="font-display text-[22px] leading-snug text-ink md:text-[31px]">{service.pain.title}</h2>
                {service.pain.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-[15px] leading-relaxed text-body ${index === 0 ? 'mt-6' : 'mt-4'}`}
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Make An Enquiry
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What the service includes — navy band, spec-sheet cards */}
      {detail.showIncludes !== false && (
        <section className="bg-primary-800 py-20 md:py-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <div className="text-center">
                <h2 className="mx-auto max-w-[900px] font-display text-[28px] leading-tight text-white md:text-[40px]">
                  {detail.includesTitle ?? `What Our ${service.shortName} Services Include`}
                </h2>
                <div className="mx-auto mt-4 w-[50px] border-t border-white/70" />
                {detail.includesIntro && (
                  <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-relaxed text-white/85 md:text-base">
                    {detail.includesIntro}
                  </p>
                )}
              </div>
            </Reveal>

            {detail.includeGroups ? (
              <div className="mt-12 space-y-14 md:mt-14">
                {detail.includeGroups.map((group, groupIndex) => {
                  // Card numbering runs continuously across every group.
                  const offset = detail.includeGroups!
                    .slice(0, groupIndex)
                    .reduce((total, g) => total + g.items.length, 0)

                  // Fit the grid to the group so no row is left part empty.
                  const count = group.items.length
                  const columns = count === 1 ? 'lg:grid-cols-1' : count % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
                  const stagger = count % 3 === 0 ? 3 : 2

                  return (
                    <div key={group.title}>
                      <Reveal variant="down">
                        <h3 className="font-display text-[21px] font-semibold leading-snug text-white md:text-[26px]">
                          {group.title}
                        </h3>
                        <div className="mt-3 w-[40px] border-t border-white/50" />
                        {group.intro && (
                          <p className="mt-4 max-w-[820px] text-[15px] leading-relaxed text-white/85">{group.intro}</p>
                        )}
                      </Reveal>

                      <div
                        className={`mt-8 grid grid-cols-1 gap-6 md:gap-8 ${
                          // A lone card keeps a readable measure instead of spanning the full band.
                          count === 1 ? 'lg:max-w-[860px]' : 'sm:grid-cols-2'
                        } ${columns}`}
                      >
                        {group.items.map((item, index) => (
                          <Reveal key={item.title} variant="up" delay={(index % stagger) * 100}>
                            <IncludeCard item={item} number={offset + index + 1} />
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:gap-8 lg:grid-cols-2">
                {service.includes.map((item, index) => (
                  <Reveal key={item.title} variant="up" delay={(index % 2) * 100}>
                    <IncludeCard item={item} number={index + 1} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* The risk of cheap freelance work — copy left, image right */}
      {detail.warning && (
        <section className="overflow-hidden bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
              <Reveal variant="left">
                <div className="border-l-2 border-primary-600 pl-6 md:pl-8">
                  <h2 className="font-display text-[24px] leading-snug text-ink md:text-[34px]">{detail.warning.title}</h2>
                  {detail.warning.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-[15px] leading-relaxed text-body ${index === 0 ? 'mt-6' : 'mt-4'}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary">
                      {detail.warning.ctaLabel}
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="right" className="min-h-[340px]">
                <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-card shadow-card">
                  <Image
                    src={warningImage}
                    alt={detail.warning.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Spotlight — a second prose argument, on navy, image left */}
      {spotlights.map((band, index) => (
        <SpotlightBand
          key={band.title}
          band={band}
          // The first band carries the service photograph; later ones cycle supporting imagery.
          image={band.image ?? (index === 0 ? service.image : bandImages[(index - 1) % bandImages.length])}
          flip={index % 2 === 1}
        />
      ))}

      {/* Process — two steps, centre image, two steps */}
      {detail.showProcess !== false && (
          <section className="bg-cream py-20 md:py-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <h2 className="mx-auto max-w-3xl text-center font-display text-[28px] leading-[1.15] text-ink md:text-[44px]">
                {processTitle}
              </h2>
              <div className="mx-auto mt-4 w-[50px] border-t border-primary-600" />
              {detail.processIntro && (
                <p className="mx-auto mt-5 max-w-[760px] text-center text-[15px] leading-relaxed text-body md:text-base">
                  {detail.processIntro}
                </p>
              )}
            </Reveal>

            <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,380px)_1fr] lg:gap-12">
              <div className="flex flex-col gap-12">
                {leftSteps.map((step, index) => (
                  <Reveal key={step.title} variant="left" delay={index * 100}>
                    <ProcessStep
                      index={index}
                      title={step.title}
                      description={step.description}
                      icon={step.icon}
                      align="right"
                    />
                  </Reveal>
                ))}
              </div>

              <Reveal variant="fade" className="order-first lg:order-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card shadow-card">
                  <Image
                    src={processImage}
                    alt={processTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
              </Reveal>

              <div className="flex flex-col gap-12">
                {rightSteps.map((step, index) => (
                  <Reveal key={step.title} variant="right" delay={index * 100}>
                    <ProcessStep
                      index={leftSteps.length + index}
                      title={step.title}
                      description={step.description}
                      icon={step.icon}
                      align="left"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Six reasons brands trust us */}
      {trust && (
        <section className={`py-20 md:py-24 ${trust.tone === 'cream' ? 'bg-cream' : 'bg-white'}`}>
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <div className="text-center">
                {trust.eyebrow && <p className="eyebrow">{trust.eyebrow}</p>}
                <h2 className="mx-auto mt-3 max-w-4xl font-display text-[28px] leading-[1.15] text-ink md:text-[44px]">
                  {trust.title}
                </h2>
                <div className="mx-auto mt-4 w-[50px] border-t border-primary-600" />
                {(Array.isArray(trust.intro) ? trust.intro : trust.intro ? [trust.intro] : []).map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="mx-auto mt-5 max-w-[760px] text-[15px] leading-relaxed text-body md:text-base"
                    >
                      {paragraph}
                    </p>
                  ),
                )}
              </div>
            </Reveal>

            <div
              className={`mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 ${
                trust.points.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
              }`}
            >
              {trust.points.map((point, index) => (
                <Reveal key={point.title} variant="up" delay={(index % 3) * 100}>
                  <div
                    className={`flex h-full flex-col rounded-card p-8 transition-shadow duration-300 hover:shadow-card ${
                      trust.tone === 'cream' ? 'bg-white shadow-card' : 'bg-cream'
                    }`}
                  >
                    {point.icon && namedIconPaths[point.icon] ? (
                      <NamedIcon name={point.icon} className={trustIconClass} />
                    ) : (
                      trustIcons[index % trustIcons.length]
                    )}
                    <h5 className="mt-5 font-display text-[19px] font-semibold leading-snug text-primary-800 md:text-[21px]">
                      {point.title}
                    </h5>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{point.description}</p>
                    {trust.cardCtas !== false && (
                      <div className="mt-6">
                        <Link href="/contact" className="btn-pill-outline">
                          Inquire Now
                        </Link>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Free feasibility audit */}
      {audits.map((audit, index) => (
        <AuditBand
          key={audit.title}
          audit={audit}
          image={audit.image ?? (index === 0 ? service.image : bandImages[(index - 1) % bandImages.length])}
          flip={index % 2 === 1}
        />
      ))}

      {/* Related-service resources — occupies the same slot as the audit band */}
      {detail.resources && (
        <section className={`relative overflow-hidden py-20 md:py-24 ${cream ? 'bg-cream' : ''}`}>
          {!cream && (
            <>
              <Image src={auditImage} alt="" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-primary-800/90" />
            </>
          )}

          <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <Reveal variant="down">
              <div className="text-center">
                <h2
                  className={`mx-auto max-w-[900px] font-display text-[26px] leading-snug md:text-[38px] ${
                    cream ? 'text-ink' : 'text-white'
                  }`}
                >
                  {detail.resources.title}
                </h2>
                <div
                  className={`mx-auto mt-4 w-[50px] border-t ${cream ? 'border-primary-600' : 'border-white/70'}`}
                />
                <p
                  className={`mx-auto mt-5 max-w-[760px] text-[15px] leading-relaxed md:text-base ${
                    cream ? 'text-body' : 'text-white/90'
                  }`}
                >
                  {detail.resources.intro}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
              {detail.resources.items.map((item, index) => (
                <Reveal key={item.href} variant="up" delay={(index % 3) * 100}>
                  <Link
                    href={item.href}
                    className={`group flex h-full flex-col rounded-card p-8 transition-colors duration-300 ${
                      cream
                        ? 'bg-white shadow-card hover:bg-primary-50'
                        : 'border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20'
                    }`}
                  >
                    <p className={`flex-1 text-sm leading-relaxed ${cream ? 'text-body' : 'text-white/85'}`}>
                      {item.description}
                    </p>
                    <span
                      className={`mt-6 inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[1.5px] ${
                        cream ? 'text-primary-800' : 'text-white'
                      }`}
                    >
                      {item.title}
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials title={detail.testimonialsTitle} />

      <FAQ items={service.faqs} title={detail.faqTitle} />

      <SamplesBand
        title={detail.finalCta.title}
        description={detail.finalCta.body}
        ctaLabel={detail.finalCta.primaryLabel}
        secondaryCta={{ label: detail.finalCta.secondaryLabel, href: detail.finalCta.secondaryHref ?? '/contact' }}
        image={finalCtaImage}
      />

      <TrustStrip />
      <ContactSection />
    </div>
  )
}
