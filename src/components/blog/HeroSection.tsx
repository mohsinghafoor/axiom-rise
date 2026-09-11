import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

export default function BlogHeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/images/hero/leather-jacket.webp"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-800/80" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <div className="text-center">
            <h1 className="font-display text-[32px] md:text-[48px] leading-tight text-white">
              Our Latest Blogs
            </h1>
            <div className="mt-4 mx-auto w-[50px] border-t border-white/70" />
            <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
              Insights, trends, and expert advice from the world of clothing manufacturing and textile exports
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
