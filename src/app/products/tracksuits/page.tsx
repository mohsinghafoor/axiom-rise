import type { Metadata } from 'next'
import StreetwearPage from '@/components/products/StreetwearPage'
import { tracksuitsContent } from '@/data/streetwearPages/tracksuits'

export const metadata: Metadata = {
  title: tracksuitsContent.metaTitle,
  description: tracksuitsContent.metaDescription,
}

export default function TracksuitsPage() {
  return <StreetwearPage content={tracksuitsContent} />
}
