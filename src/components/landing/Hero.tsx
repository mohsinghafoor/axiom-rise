import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center py-24 md:min-h-[660px] md:py-28">
      <Image
        src="/images/hero/sweatshirt.webp"
        alt="Axiom Rise clothing manufacturing"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Directional scrim so the left-aligned copy stays legible over the photo. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px]">
          <h1 className="font-display text-[30px] leading-[1.2] tracking-[0.5px] text-white sm:text-[38px] lg:text-[46px]">
            Custom Clothing Manufacturer for Brands Ready to Scale
          </h1>

          <p className="mt-6 text-[18px] font-medium leading-[1.35] text-white md:text-[20px]">
            Turn your designs into production-ready apparel without managing separate pattern,
            fabric, sampling, sewing and branding suppliers.
          </p>

          <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/90">
            Axiom Rise supports startups, established labels, retailers and business buyers — from
            first concept to approved sample, bulk production, custom packaging and delivery.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Free Quote
            </Link>
            <Link href="/products" className="btn-secondary">
              Explore the Product Range
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
