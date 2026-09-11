import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

interface WhyItem {
  title: string
  description: string
  icon: React.ReactNode
}

const iconClass = 'w-[42px] h-[42px] text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const leftItems: WhyItem[] = [
  {
    title: 'Quality Materials',
    description:
      'We source textiles from accredited global mills and test every batch before cutting. Each garment is built to meet or exceed the agreed specification.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'Low MOQ',
    description:
      'Minimum order is 10 units per style and colour. That applies whether you are placing your first capsule order or your fiftieth restock.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
]

const rightItems: WhyItem[] = [
  {
    title: 'Design Capability',
    description:
      'Our in-house pattern team handles everything from a rough sketch to a full graded tech pack, working in industry-standard design tools.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Full Customisation',
    description:
      'Every variable is open: fabric blend, weight, pantone colour, cut-and-sew construction, hardware, branding method, and retail packaging.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
]

function WhyBox({ item, alignRight = false }: { item: WhyItem; alignRight?: boolean }) {
  return (
    <div className={`group flex flex-col gap-3.5 text-center md:text-left ${alignRight ? 'md:items-end md:text-right' : 'md:items-start'} items-center`}>
      {item.icon}
      <h4 className="font-display text-[20px] md:text-[25px] leading-snug text-ink">{item.title}</h4>
      <p className="text-sm leading-relaxed text-body">{item.description}</p>
      <Link href="/contact" className="btn-primary mt-1">
        Inquire Now
      </Link>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className="bg-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <h2 className="font-display text-[30px] md:text-[54px] leading-[1.1] text-ink text-center max-w-4xl mx-auto">
            Why Axiom Rise Is Among the Leading Manufacturers in Pakistan
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-10 gap-8 items-center">
          <div className="md:col-span-3 space-y-12">
            {leftItems.map((item) => (
              <Reveal key={item.title} variant="left">
                <WhyBox item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" className="md:col-span-4">
            <div className="relative w-full h-[320px] md:h-[520px] rounded-card overflow-hidden shadow-card">
              <Image
                src="/images/custom-manufacturer.webp"
                alt="Axiom Rise clothing manufacturer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <div className="md:col-span-3 space-y-12">
            {rightItems.map((item) => (
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
  )
}
