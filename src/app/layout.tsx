import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Axiom Rise - Premium Clothing Export',
  description: 'Leading clothing export company specializing in high-quality garments for global markets',
  icons: {
    icon: '/images/axiom-rise-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jakarta.variable} font-sans text-body`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
