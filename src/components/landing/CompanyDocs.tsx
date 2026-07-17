import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

const docs = [
  {
    title: 'COMPANY PROFILE',
    image: '/images/services/manufacturing-excellence.webp',
    href: '/about',
    cta: 'Learn About Us',
  },
  {
    title: 'COMPANY PORTFOLIO',
    image: '/images/services/private-label.webp',
    href: '/products',
    cta: 'View Our Work',
  },
]

export default function CompanyDocs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {docs.map((doc, index) => (
            <Reveal key={doc.title} variant="up" delay={index * 100}>
              <Link
                href={doc.href}
                className="group relative block h-[280px] md:h-[430px] rounded-card overflow-hidden shadow-card"
              >
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary-800/40 group-hover:bg-primary-800/55 transition-colors duration-[600ms]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-display text-[24px] md:text-[31px] text-white tracking-wide">
                    {doc.title}
                  </h3>
                  <span className="btn-outline-white mt-5">{doc.cta}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
