import type { Metadata } from 'next'
import JacketPage from '@/components/products/JacketPage'
import { varsityContent } from '@/data/jacketPages/varsity'

export const metadata: Metadata = {
  title: varsityContent.metaTitle,
  description: varsityContent.metaDescription,
}

export default function VarsityJacketPage() {
  return <JacketPage content={varsityContent} />
}
