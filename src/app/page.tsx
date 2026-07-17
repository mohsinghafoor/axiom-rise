import Hero from '@/components/landing/Hero'
import CountersStrip from '@/components/landing/CountersStrip'
import IntroSection from '@/components/landing/IntroSection'
import ProductLines from '@/components/landing/ProductLines'
import WhyUs from '@/components/landing/WhyUs'
import ProcessSection from '@/components/landing/ProcessSection'
import SamplesBand from '@/components/landing/SamplesBand'
import TrustStrip from '@/components/landing/TrustStrip'
import CompanyDocs from '@/components/landing/CompanyDocs'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'
import BlogsSection from '@/components/landing/BlogsSection'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <CountersStrip />
      <IntroSection />
      <ProductLines />
      <WhyUs />
      <ProcessSection />
      <SamplesBand />
      <TrustStrip />
      <CompanyDocs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <BlogsSection />
    </div>
  )
}
