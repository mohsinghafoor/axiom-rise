import type { Metadata } from 'next'
import JacketPage from '@/components/products/JacketPage'
import { bomberContent } from '@/data/jacketPages/bomber'

export const metadata: Metadata = {
  title: bomberContent.metaTitle,
  description: bomberContent.metaDescription,
}

export default function BomberJacketPage() {
  return <JacketPage content={bomberContent} />
}
