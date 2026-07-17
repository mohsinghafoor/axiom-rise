import ProductsHeroSection from '@/components/products/HeroSection'
import ProductsGrid from '@/components/products/ProductsGrid'
import ScaleSection from '@/components/products/ScaleSection'
import CountersStrip from '@/components/landing/CountersStrip'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import ContactSection from '@/components/landing/ContactSection'

export default function Products() {
  return (
    <div className="bg-white">
      <ProductsHeroSection />
      <CountersStrip />
      <ProductsGrid />
      <ScaleSection />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  )
}
