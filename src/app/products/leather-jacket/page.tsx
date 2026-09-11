import type { Metadata } from 'next'
import JacketPage from '@/components/products/JacketPage'
import { leatherContent } from '@/data/jacketPages/leather'

export const metadata: Metadata = {
  title: leatherContent.metaTitle,
  description: leatherContent.metaDescription,
}

export default function LeatherJacketPage() {
  return <JacketPage content={leatherContent} />
}
