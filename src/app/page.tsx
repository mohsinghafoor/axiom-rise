import HeroSection from '@/components/HeroSection'
import ManufacturingSection from '@/components/ManufacturingSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductCategoriesSection from '@/components/ProductCategoriesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ManufacturingSection />
      <FeaturesSection />
      <ProductCategoriesSection />
      <CTASection />
    </div>
  )
}