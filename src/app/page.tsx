import Hero from '@/components/landing/Hero'
import SpecStrip from '@/components/landing/SpecStrip'
import ProductionRoutes from '@/components/landing/ProductionRoutes'
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

const sampleCommitments = [
  {
    title: 'Sample Approval',
    description: 'Bulk begins only after the product and order details are approved in writing.',
  },
  {
    title: 'Documented Updates',
    description: 'Dated photos and approval records keep every change traceable.',
  },
  {
    title: 'Quality Control',
    description: 'Measurements, construction, branding and packaging are checked before release.',
  },
  {
    title: 'Delivery Options',
    description: 'Courier, air or sea freight quoted on suitable Incoterms such as FOB, DAP or DDP.',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <SpecStrip />
      <ProductionRoutes />
      <IntroSection />
      <ProductLines />
      <WhyUs />
      <ProcessSection />
      <SamplesBand
        title="Approve the Product Before Bulk Production"
        description={[
          'A physical sample lets you check fit, drape, mobility, seams, colour, branding and finishing before the production run begins. Your approved pre-production sample and revision notes become the reference for bulk.',
          'Send your product reference, target material, quantity, size range, branding files, packaging and destination — and we will quote against it.',
        ]}
        ctaLabel="Request a Sample Review"
        secondaryCta={{ label: 'See the Sampling Process', href: '/services/apparel-prototyping-and-sampling' }}
        features={sampleCommitments}
      />
      <TrustStrip />
      <CompanyDocs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <BlogsSection />
    </div>
  )
}
