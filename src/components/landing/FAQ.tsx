'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { faqs } from '@/data/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-cream py-20 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="right">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-[24px] md:text-[31px] leading-[1.3] text-ink">
              FREQUENTLY ASKED QUESTIONS
            </h3>

            <div className="mt-8">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={faq.question} className="border-b border-primary-600">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full flex items-center justify-between gap-6 py-5 text-left font-display text-base md:text-xl font-semibold leading-[1.4] transition-colors duration-300 ${
                        isOpen ? 'text-primary-800' : 'text-body hover:text-primary-800'
                      }`}
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <span className="flex-shrink-0 text-primary-800 text-2xl leading-none font-sans">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="pb-7 pr-10 text-sm leading-relaxed text-body">{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
