import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pb-40">
      <Image
        src="/images/hero/sweatshirt.webp"
        alt="Axiom Rise clothing manufacturing"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-24">
          <h1
            className="font-display text-[28px] sm:text-[34px] md:text-[44px] leading-[1.2] tracking-[-1px] text-white"
            style={{ textShadow: '0px 0px 2px rgba(0,0,0,0.3)' }}
          >
            Fashion Forward: Get Expertly Crafted Clothing from a Top Clothing Manufacturer in Pakistan
          </h1>
          <p
            className="mt-6 text-[17px] leading-relaxed text-white/95"
            style={{ textShadow: '0px 0px 2px rgba(0,0,0,0.3)' }}
          >
            Exceptional manufacturing services for brands, businesses and stores that want 100% quality and big margins.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Make An Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
