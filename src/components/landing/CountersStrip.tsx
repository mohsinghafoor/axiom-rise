import CountUp from '@/components/ui/CountUp'

const counters = [
  { end: 7, suffix: '', label: 'Days Delivery' },
  { end: 14, suffix: '', label: 'Days Production Time' },
  { end: 10, suffix: '', label: 'Min Order Per Product' },
  { end: 100, suffix: '%', label: 'Satisfaction' },
]

export default function CountersStrip() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {counters.map((counter) => (
            <div key={counter.label}>
              <CountUp
                end={counter.end}
                suffix={counter.suffix}
                className="font-display text-4xl md:text-5xl tracking-[-1px] text-primary-800"
              />
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-body">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
