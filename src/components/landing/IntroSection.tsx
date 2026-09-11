import Link from 'next/link'
import Carousel from '@/components/Carousel'
import Reveal from '@/components/ui/Reveal'

const carouselImages = [
  '/images/hero/hoodies.webp',
  '/images/hero/varsity-jacket.webp',
  '/images/hero/sports-wear.webp',
  '/images/hero/leather-jacket.webp',
  '/images/hero/fitness.webp',
]

export default function IntroSection() {
  return (
    <section className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal variant="left" className="min-h-[320px] md:min-h-[460px]">
            <div className="relative w-full h-full min-h-[320px] md:min-h-[460px] rounded-card overflow-hidden shadow-card">
              <Carousel images={carouselImages} interval={4000} />
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="bg-white/95 rounded-card shadow-card p-8 md:p-12 h-full flex flex-col justify-center text-center md:text-left">
              <h2 className="font-display text-[22px] leading-snug text-primary-650 md:text-[30px]">
                Are you looking to connect with the right apparel factory to take your fashion business to the next level?
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-body">
                Axiom Rise is a direct-to-buyer apparel factory based in Sialkot, Pakistan — one of the
                world&apos;s most established garment production hubs. We work with startups, established
                brands and retailers across the globe, delivering export-grade quality without the
                middleman markup.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-body">
                We manufacture a wide range of product categories: custom jackets, hoodies, streetwear,
                sportswear and accessories — all built to your exact spec, with low minimums and full
                customisation on fabric, fit and branding.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link href="/contact" className="btn-primary">
                  Request a Free Quote
                </Link>
                <Link href="/about" className="btn-pill-outline self-center">
                  About Axiom Rise
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
