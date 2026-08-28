import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { hoodiesContent } from '@/data/streetwearPages/hoodies'

export const metadata: Metadata = {
  title: hoodiesContent.metaTitle,
  description: hoodiesContent.metaDescription,
}

export default function HoodiesPage() {
  return <StreetwearPage content={hoodiesContent} />
}
