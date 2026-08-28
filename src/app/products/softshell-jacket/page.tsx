import type { Metadata } from 'next'
import JacketPage from '@/components/products/JacketPage'
import { softshellContent } from '@/data/jacketPages/softshell'

export const metadata: Metadata = {
  title: softshellContent.metaTitle,
  description: softshellContent.metaDescription,
}

export default function SoftshellJacketPage() {
  return <JacketPage content={softshellContent} />
}
