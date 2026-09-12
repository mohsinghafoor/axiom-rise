import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { canvasToteContent } from '@/data/bagPages/canvasTote'

export const metadata: Metadata = {
  title: canvasToteContent.metaTitle,
  description: canvasToteContent.metaDescription,
}

export default function CanvasToteBagsPage() {
  return <StreetwearPage content={canvasToteContent} />
}
