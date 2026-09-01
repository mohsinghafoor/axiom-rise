import ServicesHeroSection from '@/components/services/HeroSection'
import ServicesGrid from '@/components/services/ServicesGrid'
import ProcessSection from '@/components/services/ProcessSection'
import CertificationsSection from '@/components/services/CertificationsSection'
import ServicesCTASection from '@/components/services/CTASection'

export default function Services() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <ServicesHeroSection />
      <ServicesGrid />
      <ProcessSection />
      {/* <CertificationsSection /> */}
      <ServicesCTASection />
    </div>
  )
}