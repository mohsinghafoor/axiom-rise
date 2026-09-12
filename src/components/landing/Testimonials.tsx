'use client'

import { useEffect, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { testimonials } from '@/data/testimonials'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1 text-[28px] leading-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-amber-400' : 'text-primary-200'}>
          ★
        </span>
      ))}
    </div>
  )
}

interface TestimonialsProps {
  title?: string
}

export default function Testimonials({ title = 'Feedback From Clothing Buyers' }: TestimonialsProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[index]

  return (
    <section className="bg-white py-20">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="down">
          <p className="eyebrow">Testimonial</p>
          <h2 className="mt-3 font-display text-[28px] leading-[1.2] tracking-[0.7px] text-ink md:text-[40px]">
            {title}
          </h2>
          <div className="mt-5">
            <Stars count={current.rating} />
          </div>

          <div className="relative mt-8 min-h-[180px]">
            <blockquote className="text-[15px] leading-relaxed text-body">
              &ldquo;{current.text}&rdquo;
            </blockquote>
            <p className="mt-6 font-display text-lg text-ink">{current.name}</p>
            <p className="mt-1 text-sm text-body/70">{current.company}</p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-800 text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === index ? 'bg-primary-600' : 'bg-primary-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((index + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-800 text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
