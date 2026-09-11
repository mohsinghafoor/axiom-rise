import type { Metadata } from 'next'
import JacketPage from '@/components/products/JacketPage'
import { bubbleContent } from '@/data/jacketPages/bubble'

export const metadata: Metadata = {
  title: bubbleContent.metaTitle,
  description: bubbleContent.metaDescription,
}

export default function BubbleJacketPage() {
  return <JacketPage content={bubbleContent} />
}
