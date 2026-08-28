import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { sweatshirtsContent } from '@/data/streetwearPages/sweatshirts'

export const metadata: Metadata = {
  title: sweatshirtsContent.metaTitle,
  description: sweatshirtsContent.metaDescription,
}

export default function SweatshirtsPage() {
  return <StreetwearPage content={sweatshirtsContent} />
}
