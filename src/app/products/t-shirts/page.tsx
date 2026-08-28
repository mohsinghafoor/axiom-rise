import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { tshirtsContent } from '@/data/streetwearPages/tshirts'

export const metadata: Metadata = {
  title: tshirtsContent.metaTitle,
  description: tshirtsContent.metaDescription,
}

export default function TShirtsPage() {
  return <StreetwearPage content={tshirtsContent} />
}
