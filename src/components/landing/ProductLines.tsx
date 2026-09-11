import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { manufacturingLines } from '@/data/manufacturingLines'

export default function ProductLines() {
  const gridClass =
    manufacturingLines.length <= 2
      ? 'lg:grid-cols-2 max-w-[900px] mx-auto'
      : 'lg:grid-cols-3'

  return (
    <section className="bg-white pb-20">
      <div className="relative">
        {/* Navy image band behind the heading and upper part of the grid */}
        <div className="absolute inset-x-0 top-0 h-[65%] overflow-hidden md:h-[70%]">
          <Image src="/images/hero/hoodies.webp" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-primary-800/[0.85]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
          <Reveal variant="down">
            <SectionHeading
              title="Custom Apparel for Fashion, Sport and Business"
              subtitle="Each production line is matched to its real fabric, fit, construction and wear requirements."
              tone="white"
            />
          </Reveal>

          <div className={`mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 ${gridClass}`}>
            {manufacturingLines.map((line, index) => (
              <Reveal key={line.slug} variant="up" delay={index * 100}>
                <ProductCard
                  title={line.label}
                  description={line.description}
                  image={line.bandImage}
                  slug={line.slug}
                  href={`/categories/${line.slug}`}
                  ctaLabel={`Explore ${line.shortName} Manufacturing`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
