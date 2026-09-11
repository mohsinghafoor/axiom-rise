import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { cottonToteContent } from '@/data/bagPages/cottonTote'

export const metadata: Metadata = {
  title: cottonToteContent.metaTitle,
  description: cottonToteContent.metaDescription,
}

export default function CottonToteBagsPage() {
  return <StreetwearPage content={cottonToteContent} />
}
