import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  { title: 'Consultation', image: '/images/process/consultation.webp' },
  { title: 'Planning & Tech Pack', image: '/images/process/planning.webp' },
  { title: 'Golden Sample', image: '/images/process/sample.webp' },
  { title: 'Production', image: '/images/process/production.webp' },
  { title: 'Delivery', image: '/images/process/delivery.webp' },
]

export default function ProcessSection({
  title = "Here's Our Clothing Manufacturing Process",
}: {
  title?: string
} = {}) {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <SectionHeading title={title} />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.title} variant="up" delay={index * 100}>
              <div className="group text-center">
                <div className="relative h-44 rounded-card overflow-hidden shadow-card">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="mt-4 font-display text-primary-600 text-sm">0{index + 1}</div>
                <h5 className="mt-1 font-display text-base md:text-lg text-ink">{step.title}</h5>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
