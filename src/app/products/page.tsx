import ProductsHeroSection from '@/components/products/HeroSection'
import ProductsGrid from '@/components/products/ProductsGrid'
import ProductsCTASection from '@/components/products/CTASection'

export default function Products() {
  return (
    <div className="bg-white">
      <ProductsHeroSection />
      <ProductsGrid />
      <ProductsCTASection />
    </div>
  )
}