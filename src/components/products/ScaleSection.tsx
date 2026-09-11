import Reveal from '@/components/ui/Reveal'

const iconClass = 'w-[42px] h-[42px] mx-auto text-primary-600 transition-colors duration-300 group-hover:text-primary-800'

const benefits = [
  {
    title: 'Consolidated Global Logistics',
    description:
      'One shipment, one invoice, one point of contact — even when your order spans multiple product categories.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Technical Teams',
    description:
      'Each manufacturing line runs its own specialised pattern, sewing and finishing team for its category.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Category Specific Quality Control',
    description:
      'QC checklists tailored per product type — from outerwear seam sealing to fleece shrinkage and print-durability testing.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Production Capacity',
    description:
      'Start at 10 units per style and scale to tens of thousands without ever switching suppliers.',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
]

export default function ScaleSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <h2 className="font-display text-[28px] md:text-[44px] leading-[1.15] text-ink text-center max-w-3xl mx-auto">
            Scale Your Apparel Brand Without Diluting Quality
          </h2>
          <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} variant="up" delay={index * 100}>
              <div className="group text-center px-4">
                {benefit.icon}
                <h5 className="mt-5 font-display text-[18px] md:text-[20px] font-semibold text-primary-800 leading-snug">
                  {benefit.title}
                </h5>
                <p className="mt-3 text-sm leading-relaxed text-body">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
