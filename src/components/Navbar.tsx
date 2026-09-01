"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import Button from './ui/Button'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-xl border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/axiom-rise-logo.png" 
                alt="Axiom Rise Logo" 
                width={150} 
                height={40}
                className="h-auto w-auto"
                style={{ height: '40px' }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu - Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6 flex-nowrap">
              <Link
                href="/"
                className={`px-1 lg:px-1 xl:px-2 py-4 text-xs lg:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  pathname === '/' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {t('home')}
              </Link>
              
              {/* Other navigation items excluding Contact */}
              <Link
                href="/products"
                className={`px-1 lg:px-1 xl:px-2 py-4 text-xs lg:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  pathname === '/products' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {t('products')}
              </Link>
              <Link
                href="/services"
                className={`px-1 lg:px-1 xl:px-2 py-4 text-xs lg:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  pathname === '/services' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {t('services')}
              </Link>

              <Link
                href="/clients"
                className={`px-1 lg:px-1 xl:px-2 py-4 text-xs lg:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  pathname === '/clients' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {t('clients')}
              </Link>
              <Link
                href="/blog"
                className={`px-1 lg:px-1 xl:px-2 py-4 text-xs lg:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  pathname === '/blog' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {t('blog')}
              </Link>
              <Link
                href="/about"
                className={`px-1 lg:px-1 xl:px-2 py-4 text-xs lg:text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  pathname === '/about' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {t('about')}
              </Link>
            </div>
          </div>

          {/* Right Side - Theme Toggle & Talk to Expert Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Button
              href="/contact"
              variant="primary"
              className="!rounded-full !px-2 lg:!px-3 xl:!px-4 !py-2 !text-xs lg:!text-sm whitespace-nowrap hover:!scale-100"
            >
              {t('talkToExpert')}
            </Button>
            <div className="flex-shrink-0">
              <LanguageSelector />
            </div>
            <div className="flex-shrink-0 ml-2 lg:ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              
              {/* Mobile Products Link - Simple Link */}
              <Link
                href="/products"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('products')}
              </Link>

              {/* Services Link */}
              <Link
                href="/services"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>

              {/* Clients Link */}
              <Link
                href="/clients"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('clients')}
              </Link>

              {/* Blog Link */}
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>

              {/* About Us Link */}
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>

              {/* Contact/Talk to Expert Link */}
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}