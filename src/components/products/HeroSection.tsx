import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

export default function ProductsHeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <Image
        src="/images/hero/varsity-jacket.webp"
        alt=""
        fill
        className="object-cover opacity-80"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-[30px] md:text-[48px] leading-[1.15] tracking-[-1px] text-white">
              Secure Your Supply Chain Across Every Apparel Category Under One Roof
            </h1>
            <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
            <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
              Specialized technical production floors delivering consistent quality for your global brand requirements
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
