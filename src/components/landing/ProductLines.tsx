import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
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
        <div className="absolute inset-x-0 top-0 h-[65%] md:h-[70%] overflow-hidden">
          <Image
            src="/images/hero/hoodies.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary-800/80" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <Reveal variant="down">
            <h2 className="font-display text-[28px] md:text-[44px] leading-tight text-white text-center max-w-[1000px] mx-auto">
              Explore Our Product Lines. One Factory. Consistent Quality Across Every Order.
            </h2>
          </Reveal>

          <div className={`mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 ${gridClass} gap-6 md:gap-8`}>
            {manufacturingLines.map((line, index) => (
              <Reveal key={line.slug} variant="up" delay={index * 100}>
                <ProductCard
                  title={line.label}
                  description={line.description}
                  image={line.bandImage}
                  slug={line.slug}
                  href={`/categories/${line.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
