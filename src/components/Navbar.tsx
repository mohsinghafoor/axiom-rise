'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { productMenu, servicesMenu, NavItem } from '@/data/navigation'

function Caret({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function DesktopDropdown({
  label,
  href,
  items,
  active,
  pathname,
}: {
  label: string
  href: string
  items: NavItem[]
  active: boolean
  pathname: string
}) {
  const [open, setOpen] = useState(false)
  const openTimer = useRef<ReturnType<typeof setTimeout>>()
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()

  // Close whenever the route changes (e.g. after clicking a dropdown item)
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    return () => {
      clearTimeout(openTimer.current)
      clearTimeout(closeTimer.current)
    }
  }, [])

  const handleEnter = () => {
    clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => setOpen(true), 120)
  }

  const handleLeave = () => {
    clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 180)
  }

  const close = () => {
    clearTimeout(openTimer.current)
    setOpen(false)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={() => {
        clearTimeout(closeTimer.current)
        setOpen(true)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <Link
        href={href}
        onClick={close}
        className={`flex items-center gap-1.5 font-display font-medium text-[15px] tracking-[1.2px] transition-colors duration-300 ${
          active || open ? 'text-primary-600' : 'text-black hover:text-primary-600'
        }`}
      >
        {label}
        <Caret className={`mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </Link>

      <div
        className={`absolute left-0 top-full pt-3 z-50 transition-all duration-300 ease-out ${
          open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white min-w-[230px] shadow-card py-3">
          {items.map((item, index) => (
            <div key={item.label} className="relative group/sub">
              <Link
                href={item.href}
                onClick={close}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 font-display font-medium text-xs uppercase tracking-[1px] text-black hover:bg-primary-800 hover:text-white transition-all duration-300 ${
                  open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
                style={{ transitionDelay: open ? `${80 + index * 40}ms` : '0ms' }}
              >
                {item.label}
                {item.children && <Caret className="-rotate-90" />}
              </Link>
              {item.children && (
                <div className="absolute left-full top-0 pl-1 invisible opacity-0 translate-x-1 group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-focus-within/sub:translate-x-0 transition-all duration-300 ease-out">
                  <div className="bg-white min-w-[220px] shadow-card py-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={close}
                        className="block px-4 py-2.5 font-display font-medium text-xs uppercase tracking-[1px] text-black hover:bg-primary-800 hover:text-white transition-colors duration-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenMobileSection(null)
    setOpenMobileGroup(null)
  }

  const linkClass = (href: string) =>
    `font-display font-medium text-[15px] tracking-[1.2px] transition-colors duration-300 ${
      pathname === href ? 'text-primary-600' : 'text-black hover:text-primary-600'
    }`

  return (
    <nav className="bg-white border-b-[3px] border-primary-50 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
            <Image
              src="/images/axiom-rise-logo.png"
              alt="Axiom Rise"
              width={160}
              height={40}
              className="w-auto"
              style={{ height: '40px' }}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={linkClass('/')}>HOME</Link>
            <DesktopDropdown
              label="PRODUCTS"
              href="/products"
              items={productMenu}
              active={pathname.startsWith('/products') || pathname.startsWith('/categories')}
              pathname={pathname}
            />
            <DesktopDropdown
              label="SERVICES"
              href="/services"
              items={servicesMenu}
              active={pathname.startsWith('/services')}
              pathname={pathname}
            />
            <Link href="/blog" className={linkClass('/blog')}>BLOG</Link>
            <Link href="/about" className={linkClass('/about')}>ABOUT US</Link>
            <Link href="/#faq" className="font-display font-medium text-[15px] tracking-[1.2px] text-black hover:text-primary-600 transition-colors duration-300">FAQ&apos;S</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary hover:scale-95 transform transition-all duration-300">
              INQUIRE NOW
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden w-[45px] h-[41px] bg-primary-600 hover:bg-primary-800 rounded-[3px] flex items-center justify-center transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile off-canvas */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/40" onClick={closeMenu} />
      )}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-primary-50">
          <Image src="/images/axiom-rise-logo.png" alt="Axiom Rise" width={120} height={30} className="w-auto" style={{ height: '30px' }} />
          <button
            onClick={closeMenu}
            className="w-[45px] h-[41px] bg-primary-600 hover:bg-primary-800 rounded-[3px] flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-1">
          <Link href="/" onClick={closeMenu} className="block py-3 font-display font-medium text-sm tracking-[1.2px] text-black hover:text-primary-600 border-b border-primary-50">HOME</Link>

          {/* Products accordion */}
          <div className="border-b border-primary-50">
            <button
              onClick={() => setOpenMobileSection(openMobileSection === 'products' ? null : 'products')}
              className="w-full flex items-center justify-between py-3 font-display font-medium text-sm tracking-[1.2px] text-black"
            >
              PRODUCTS
              <Caret className={`transition-transform duration-300 ${openMobileSection === 'products' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'products' && (
              <div className="pb-2 pl-3">
                <Link href="/products" onClick={closeMenu} className="block py-2 font-display font-medium text-xs uppercase tracking-[1px] text-primary-600">
                  All Products
                </Link>
                {productMenu.map((group) => (
                  <div key={group.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={group.href}
                        onClick={closeMenu}
                        className="py-2 font-display font-medium text-xs uppercase tracking-[1px] text-body hover:text-primary-600"
                      >
                        {group.label}
                      </Link>
                      <button
                        onClick={() => setOpenMobileGroup(openMobileGroup === group.label ? null : group.label)}
                        className="p-2 text-body"
                        aria-label={`Toggle ${group.label}`}
                      >
                        <Caret className={`transition-transform duration-300 ${openMobileGroup === group.label ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {openMobileGroup === group.label &&
                      group.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMenu}
                          className="block py-2 pl-4 text-sm text-body hover:text-primary-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services accordion */}
          <div className="border-b border-primary-50">
            <button
              onClick={() => setOpenMobileSection(openMobileSection === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between py-3 font-display font-medium text-sm tracking-[1.2px] text-black"
            >
              SERVICES
              <Caret className={`transition-transform duration-300 ${openMobileSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'services' && (
              <div className="pb-2 pl-3">
                {servicesMenu.map((item) => (
                  <Link key={item.label} href={item.href} onClick={closeMenu} className="block py-2 text-sm text-body hover:text-primary-600">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeMenu} className="block py-3 font-display font-medium text-sm tracking-[1.2px] text-black hover:text-primary-600 border-b border-primary-50">BLOG</Link>
          <Link href="/about" onClick={closeMenu} className="block py-3 font-display font-medium text-sm tracking-[1.2px] text-black hover:text-primary-600 border-b border-primary-50">ABOUT US</Link>
          <Link href="/#faq" onClick={closeMenu} className="block py-3 font-display font-medium text-sm tracking-[1.2px] text-black hover:text-primary-600 border-b border-primary-50">FAQ&apos;S</Link>
          <Link href="/contact" onClick={closeMenu} className="block py-3 font-display font-medium text-sm tracking-[1.2px] text-black hover:text-primary-600">CONTACT US</Link>

          <div className="pt-4">
            <Link href="/contact" onClick={closeMenu} className="btn-primary block text-center">
              INQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
