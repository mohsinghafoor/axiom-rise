import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/ui/ProductCard'
import { productsData } from '@/data/products'

export default function ProductLines() {
  const products = productsData.slice(0, 6)

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

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
    </section>
  )
}
