import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    title: 'Review',
    image: '/images/process/consultation.webp',
    description:
      'Send a sketch, reference garment or tech pack with quantity, size range, destination and target date.',
  },
  {
    title: 'Develop',
    image: '/images/process/planning.webp',
    description:
      'Confirm the specification sheet, bill of materials, pattern, grade rules, fabric, trims, colours and artwork.',
  },
  {
    title: 'Sample',
    // process/sample.webp carries a third-party logo, so this step uses the
    // measurement shot instead.
    image: '/images/why/quality.webp',
    description:
      'Produce the prototype, fit sample, size set or pre-production sample required for approval.',
  },
  {
    title: 'Approve',
    image: '/images/services/quality-assurance.webp',
    description:
      'Freeze the accepted construction, measurements, materials, branding and packaging as the Golden Sample.',
  },
  {
    title: 'Manufacture',
    image: '/images/process/production.webp',
    description:
      'Prepare, cut, bundle, sew, decorate and finish the garments through the agreed cut-and-sew route.',
  },
  {
    title: 'Inspect and Dispatch',
    image: '/images/process/delivery.webp',
    description:
      'Incoming-material checks, in-line and final inspection, carton verification and shipment release.',
  },
]

export default function ProcessSection({
  title = "Here's Our Clothing Manufacturing Process",
}: {
  title?: string
} = {}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <SectionHeading
            title={title}
            subtitle="Six checkpoints, each with a written output you sign off before the next one starts."
            tone="navy"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} variant="up" delay={index * 100}>
              <div className="group h-full">
                <div className="relative h-56 overflow-hidden rounded-card shadow-card">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/90 via-primary-800/35 to-transparent" />

                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 font-display text-sm text-white">
                    0{index + 1}
                  </span>

                  <h3 className="absolute inset-x-5 bottom-5 font-display text-[24px] leading-[1.3] text-white md:text-[28px]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-body">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
