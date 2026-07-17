import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import ContactSection from '@/components/landing/ContactSection'

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/custom-manufacturer.webp"
          alt="Contact Axiom Rise"
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
                Contact Us
              </h1>
              <div className="mt-4 mx-auto w-[50px] border-t border-white/70" />
              <p className="mt-5 text-base md:text-lg text-white/95 max-w-3xl mx-auto">
                Get in touch and let us know how we can help — our team replies within one business day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info + form card */}
      <ContactSection />

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="rounded-card overflow-hidden shadow-card">
              <iframe
                title="Axiom Rise Apparel — Kotla Amba Wala Road, Sialkot, Pakistan"
                src="https://maps.google.com/maps?q=Kotla%20Amba%20Wala%20Road%2C%20Sialkot%2C%20Punjab%2C%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
