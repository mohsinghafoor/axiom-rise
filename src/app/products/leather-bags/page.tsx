import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { leatherBagsContent } from '@/data/bagPages/leatherBags'

export const metadata: Metadata = {
  title: leatherBagsContent.metaTitle,
  description: leatherBagsContent.metaDescription,
}

export default function LeatherBagsPage() {
  return <StreetwearPage content={leatherBagsContent} />
}
