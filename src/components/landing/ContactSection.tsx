'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'

const iconClass = 'w-9 h-9 flex-shrink-0 text-primary-800'

const contactItems = [
  {
    title: 'Head Office',
    lines: ['Axiom Rise Apparel — Kotla Amba Wala Road, Sialkot, Punjab 51310, Pakistan.'],
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Email Us',
    lines: ['info@axiomrise.co'],
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Call Us',
    lines: ['Phone: +92 327 1213923', 'WhatsApp: +92 327 1213923'],
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM (PKT)'],
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full bg-primary-100 rounded-[10px] border-0 px-4 py-3 text-sm text-body placeholder:text-body/50 focus:outline-none focus:ring-2 focus:ring-primary-600'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <section className="bg-cream py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="bg-white rounded-card shadow-glow overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Contact info */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <h2 className="font-display text-[28px] md:text-[39px] leading-tight text-ink">Get in touch</h2>
                <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-10">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      {item.icon}
                      <div>
                        <h5 className="font-display text-base md:text-lg font-semibold text-ink">{item.title}</h5>
                        {item.lines.map((line) => (
                          <p key={line} className="mt-1 text-sm leading-relaxed text-body">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-cream/60 p-8 md:p-12">
                <p className="text-[15px] font-medium text-body">Send us a message</p>
                {submitted ? (
                  <div className="mt-6 rounded-[10px] bg-primary-100 p-6 text-sm text-primary-800">
                    Thank you — your message has been received. We will get back to you within one business day.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className={inputClass} />
                      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className={inputClass} />
                      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
                    </div>
                    <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className={inputClass} />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={5} required className={inputClass} />
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
