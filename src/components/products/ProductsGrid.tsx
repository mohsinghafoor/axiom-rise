import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { productsData } from '@/data/products'
import { manufacturingLines } from '@/data/manufacturingLines'

export default function ProductsGrid() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <SectionHeading title="Explore Our Dedicated Manufacturing Lines" />
        </Reveal>
        <Reveal variant="fade" delay={150}>
          <p className="mt-6 text-[15px] leading-relaxed text-body text-center max-w-3xl mx-auto">
            Finding one manufacturer who excels in both heavy outerwear and technical sportswear usually
            means compromising on quality. Our production floors are organised into dedicated lines, so
            every category gets a specialised team — and you get consistent quality across your whole range.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 space-y-24">
        {manufacturingLines.map((line) => {
          const products = line.slugs
            .map((slug) => productsData.find((p) => p.slug === slug))
            .filter((p): p is (typeof productsData)[number] => Boolean(p))

          return (
            <div key={line.label} className="relative">
              {/* Navy image band behind the group heading and upper cards */}
              <div className="absolute inset-x-0 top-0 bottom-40 overflow-hidden">
                <Image
                  src={line.bandImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary-800/80" />
              </div>

              <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16">
                <Reveal variant="down">
                  <h3 className="font-display text-[28px] md:text-[40px] leading-tight text-white text-center">
                    <Link href={`/categories/${line.slug}`} className="hover:text-primary-200 transition-colors duration-300">
                      {line.label}
                    </Link>
                  </h3>
                  <div className="mt-3 mx-auto w-[50px] border-t border-white/70" />
                </Reveal>
                <Reveal variant="fade" delay={100}>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/90 text-center max-w-2xl mx-auto">
                    {line.description}
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
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
