import ProductsHeroSection from '@/components/products/HeroSection'
import ProductsGrid from '@/components/products/ProductsGrid'
import ProductsCTASection from '@/components/products/CTASection'

export default function Products() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <ProductsHeroSection />
      <ProductsGrid />
      <ProductsCTASection />
    </div>
  )
}