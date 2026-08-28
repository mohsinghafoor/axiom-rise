import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { shortsContent } from '@/data/streetwearPages/shorts'

export const metadata: Metadata = {
  title: shortsContent.metaTitle,
  description: shortsContent.metaDescription,
}

export default function ShortsPage() {
  return <StreetwearPage content={shortsContent} />
}
