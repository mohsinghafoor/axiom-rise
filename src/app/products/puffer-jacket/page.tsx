import type { Metadata } from 'next'
import JacketPage from '@/components/products/JacketPage'
import { pufferContent } from '@/data/jacketPages/puffer'

export const metadata: Metadata = {
  title: pufferContent.metaTitle,
  description: pufferContent.metaDescription,
}

export default function PufferJacketPage() {
  return <JacketPage content={pufferContent} />
}
