import CountUp from '@/components/ui/CountUp'

/**
 * The four order facts that sit directly under the hero. Each tile pairs one of
 * our counters with the commitment behind it, so the number carries a claim
 * rather than standing on its own.
 */
const specs = [
  {
    end: 10,
    suffix: '',
    unit: 'Units',
    title: 'Minimum Order Quantity',
    description:
      'Starting minimum order quantity per style and colour, subject to fabric and process requirements.',
  },
  {
    end: 14,
    suffix: '',
    unit: 'Days',
    title: 'Production Window',
    description:
      'Cutting, sewing, decoration and finishing are scheduled against your approved sample.',
  },
  {
    end: 7,
    suffix: '',
    unit: 'Days',
    title: 'Dispatch and Delivery',
    description:
      'Transit and customs timing is confirmed per project, with tracked door-to-door options.',
  },
  {
    end: 100,
    suffix: '%',
    unit: 'Checked',
    title: 'Agreed Inspection Plan',
    description:
      'Quality control follows the approved measurement chart and the agreed sampling plan.',
  },
]

export default function SpecStrip() {
  return (
    <section className="relative z-10 bg-white shadow-float">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec, index) => (
            <div
              key={spec.title}
              className={`px-2 py-6 text-center sm:px-6 ${
                index > 0 ? 'border-t border-primary-200 sm:border-t-0 lg:border-l' : ''
              } ${index === 1 ? 'sm:border-l' : ''} ${index === 2 ? 'sm:border-t' : ''} ${
                index === 3 ? 'sm:border-t sm:border-l' : ''
              }`}
            >
              <p className="font-display text-[38px] leading-none tracking-[-1px] text-primary-650 md:text-[44px]">
                <CountUp end={spec.end} suffix={spec.suffix} />
                <span className="ml-2 align-middle text-[15px] font-semibold uppercase tracking-[2px] text-primary-600">
                  {spec.unit}
                </span>
              </p>
              <h3 className="mt-4 font-sans text-[18px] font-semibold leading-[1.4] tracking-normal text-primary-800 md:text-[20px]">
                {spec.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.5] text-ink/80">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
