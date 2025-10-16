import HeroSection from '@/components/HeroSection'
import ManufacturingSection from '@/components/ManufacturingSection'
import CustomClothingSection from '@/components/CustomClothingSection'
import FeaturesSection from '@/components/FeaturesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ProductCategoriesSection from '@/components/ProductCategoriesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <ManufacturingSection />
      <CustomClothingSection />
      <FeaturesSection />
      <WhyChooseSection />
      <ProductCategoriesSection />
      <CTASection />
    </div>
  )
}