"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [activeThirdLevel, setActiveThirdLevel] = useState<string | null>(null)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ]
  const productCategories = [
    {
      title: 'HOODIES MANUFACTURER',
      href: '/products/hoodies',
      subcategories: [
        { 
          title: 'Hoodies Manufacturer', 
          href: '/products/hoodies/manufacturer',
          subcategories: [
            { title: 'Custom Hoodies Wholesale', href: '/products/hoodies/manufacturer/custom-wholesale' },
            { title: 'Bulk Cheap Hoodies', href: '/products/hoodies/manufacturer/bulk-cheap' },
            { title: 'Tie Dye Hoodies Wholesale and Bulk', href: '/products/hoodies/manufacturer/tie-dye-wholesale' },
            { title: 'Wholesale 100 Cotton Hoodies', href: '/products/hoodies/manufacturer/100-cotton-wholesale' },
            { title: 'Wholesale Cropped Hoodies', href: '/products/hoodies/manufacturer/cropped-wholesale' },
            { title: 'Wholesale Camo Hoodies', href: '/products/hoodies/manufacturer/camo-wholesale' },
            { title: 'Wholesale Zip-Up-Hoodies', href: '/products/hoodies/manufacturer/zip-up-wholesale' },
            { title: 'Wholesale White Hoodies', href: '/products/hoodies/manufacturer/white-wholesale' },
            { title: 'Wholesale Polyester Hoodies', href: '/products/hoodies/manufacturer/polyester-wholesale' },
            { title: 'Wholesale Womens Hoodies', href: '/products/hoodies/manufacturer/womens-wholesale' },
            { title: 'Wholesale French Terry Hoodies', href: '/products/hoodies/manufacturer/french-terry-wholesale' },
            { title: 'Wholesale Heavyweight Hoodies', href: '/products/hoodies/manufacturer/heavyweight-wholesale' },
            { title: 'Wholesale Kids and Youth Hoodies', href: '/products/hoodies/manufacturer/kids-youth-wholesale' },
            { title: 'Wholesale Sublimation Hoodies', href: '/products/hoodies/manufacturer/sublimation-wholesale' },
            { title: 'Wholesale Vintage Hoodies', href: '/products/hoodies/manufacturer/vintage-wholesale' },
            { title: 'Wholesale Unisex Hoodies', href: '/products/hoodies/manufacturer/unisex-wholesale' },
            { title: 'Wholesale & Bulk Black Hoodies', href: '/products/hoodies/manufacturer/black-wholesale' }
          ]
        },
        { title: 'Hoodies Supplier & Vendors', href: '/products/hoodies/suppliers' },
        { title: 'Bulk-And-Wholesale-Hoodies', href: '/products/hoodies/wholesale' }
      ]
    },
    {
      title: 'UNIFORM MANUFACTURERS',
      href: '/products/uniforms',
      subcategories: [
        { title: 'WORK-WEAR-UNIFORM-MANUFACTURERS', href: '/products/uniforms/workwear' },
        { title: 'HOSPITAL-UNIFORMS-MANUFACTURERS', href: '/products/uniforms/hospital' },
        { title: 'MARTIAL-ARTS-UNIFORM-MANUFACTURER', href: '/products/uniforms/martial-arts' },
        { title: 'UNIFORM-T-SHIRT-MANUFACTURER', href: '/products/uniforms/tshirt' },
        { title: 'School Uniforms', href: '/products/uniforms/school' },
        { title: 'Corporate Uniforms', href: '/products/uniforms/corporate' },
        { title: 'Medical Uniforms', href: '/products/uniforms/medical' },
        {
          title: 'WHOLESALE-SHORTS',
          href: '/products/uniforms/wholesale-shorts',
          subcategories: [
            { title: 'WHOLESALE BASKETBALL SHORTS', href: '/products/uniforms/wholesale-shorts/basketball' },
            { title: 'WHOLESALE MESH SHORTS', href: '/products/uniforms/wholesale-shorts/mesh' }
          ]
        },
        {
          title: 'WHOLESALE SCRUBS VENDOR',
          href: '/products/uniforms/scrubs',
        }
      ]
    },
    {
      title: 'T-SHIRT MANUFACTURER',
      href: '/products/tshirts',
      subcategories: [
        { title: 'Custom T-Shirts', href: '/products/tshirts/custom' },
        { title: 'Bulk T-Shirts', href: '/products/tshirts/bulk' },
        { title: 'Branded T-Shirts', href: '/products/tshirts/branded' }
      ]
    },
    {
      title: 'SPORTSWEAR MANUFACTURER',
      href: '/products/sportswear',
      subcategories: [
        {
          title: 'TEAM UNIFORM',
          href: '/products/sportswear/team-uniform',
          subcategories: [
            { title: 'CUSTOM SOCCER UNIFORMS', href: '/products/sportswear/team-uniform/soccer' },
            { title: 'CUSTOM LACROSSE UNIFORMS', href: '/products/sportswear/team-uniform/lacrosse' },
            {
              title: 'BASKETBALL-UNIFORM',
              href: '/products/sportswear/team-uniform/basketball',
              subcategories: [
                { title: 'YOUTH BASKETBALL UNIFORMS', href: '/products/sportswear/team-uniform/basketball/youth' },
                { title: 'CUSTOM BASKETBALL SHIRTS', href: '/products/sportswear/team-uniform/basketball/shirts' },
                { title: 'CUSTOM BASKETBALL HOODIES', href: '/products/sportswear/team-uniform/basketball/hoodies' },
                { title: 'CUSTOM BASKETBALL JERSEYS', href: '/products/sportswear/team-uniform/basketball/jerseys' }
              ]
            },
            { title: 'BASEBALL UNIFORM', href: '/products/sportswear/team-uniform/baseball' },
            { title: 'VOLLEYBALL-UNIFORMS', href: '/products/sportswear/team-uniform/volleyball' },
            { title: 'CUSTOM TRACKSUITS', href: '/products/sportswear/team-uniform/tracksuits' },
            { title: 'FIELD HOCKEY UNIFORMS', href: '/products/sportswear/team-uniform/field-hockey' },
            { title: 'TOPGOLF-UNIFORM', href: '/products/sportswear/team-uniform/topgolf' },
            { title: 'TENNIS UNIFORMS', href: '/products/sportswear/team-uniform/tennis' },
            { title: 'ICE HOCKEY UNIFORM', href: '/products/sportswear/team-uniform/ice-hockey' }
          ]
        }
      ]
    },
    {
      title: 'EQUESTRIAN CLOTHING MANUFACTURER',
      href: '/products/equestrian',
      subcategories: [
        { title: 'Horse Riding Gear', href: '/products/equestrian/riding-gear' },
        { title: 'Equestrian Apparel', href: '/products/equestrian/apparel' },
        { title: 'Horse Competition Wear', href: '/products/equestrian/competition' }
      ]
    },
    {
      title: 'JACKET MANUFACTURER',
      href: '/products/jackets',
      subcategories: [
        {
          title: 'VARSITY JACKET MANUFACTURER',
          href: '/products/jackets/varsity',
        },
        {
          title: 'PUFFER JACKET MANUFACTURER',
          href: '/products/jackets/puffer',
        },
        {
          title: 'LEATHER JACKET MANUFACTURER',
          href: '/products/jackets/leather',
        },
        {
          title: 'BOMBER JACKET MANUFACTURER',
          href: '/products/jackets/bomber',
        },
        {
          title: 'RAIN JACKET MANUFACTURER',
          href: '/products/jackets/rain',
          subcategories: [
            { title: 'RAIN JACKET SUBITEM 1', href: '/products/jackets/rain/subitem1' },
            { title: 'RAIN JACKET SUBITEM 2', href: '/products/jackets/rain/subitem2' }
          ]
        }
      ]
    },
    {
      title: 'WHOLESALE VARSITY JACKETS',
      href: '/products/wholesale-varsity-jackets',
      subcategories: [
        { title: 'Custom Varsity Jackets', href: '/products/wholesale-varsity-jackets/custom' },
        { title: 'Bulk Varsity Jackets', href: '/products/wholesale-varsity-jackets/bulk' },
        { title: 'Team Varsity Jackets', href: '/products/wholesale-varsity-jackets/team' }
      ]
    },
    {
      title: 'SWEATSHIRT MANUFACTURERS',
      href: '/products/sweatshirts',
      subcategories: [
        { title: 'Custom Sweatshirts', href: '/products/sweatshirts/custom' },
        { title: 'Wholesale Sweatshirts', href: '/products/sweatshirts/wholesale' },
        { title: 'Branded Sweatshirts', href: '/products/sweatshirts/branded' }
      ]
    },
    {
      title: 'HAT MANUFACTURERS',
      href: '/products/hats',
      subcategories: [
        { title: 'Baseball Caps', href: '/products/hats/baseball-caps' },
        { title: 'Beanies', href: '/products/hats/beanies' },
        { title: 'Custom Hats', href: '/products/hats/custom' }
      ]
    },
    {
      title: 'SHORTS MANUFACTURER',
      href: '/products/shorts',
      subcategories: [
        { title: 'Athletic Shorts', href: '/products/shorts/athletic' },
        { title: 'Casual Shorts', href: '/products/shorts/casual' },
        { title: 'Custom Shorts', href: '/products/shorts/custom' }
      ]
    },
    {
      title: 'FITNESS CLOTHING MANUFACTURERS',
      href: '/products/fitness',
      subcategories: [
        { title: 'Gym Wear', href: '/products/fitness/gym' },
        { title: 'Yoga Clothing', href: '/products/fitness/yoga' },
        { title: 'Running Gear', href: '/products/fitness/running' }
      ]
    },
    {
      title: 'TACTICAL CLOTHING',
      href: '/products/tactical',
      subcategories: [
        { title: 'Military Gear', href: '/products/tactical/military' },
        { title: 'Security Uniforms', href: '/products/tactical/security' },
        { title: 'Outdoor Tactical', href: '/products/tactical/outdoor' }
      ]
    },
    {
      title: 'LEATHER BAGS MANUFACTURER',
      href: '/products/bags',
      subcategories: [
        {
          title: 'HANDBAGS-MANUFACTURER',
          href: '/products/bags/handbags',
          subcategories: [
            { title: 'LEATHER-HANDBAGS-MANUFACTURER', href: '/products/bags/handbags/leather' },
            { title: 'TOTE HANDBAGS MANUFACTURER', href: '/products/bags/handbags/tote' }
          ]
        },
        { title: 'MARTIAL ARTS CLOTHING', href: '/products/bags/martial-arts' }
      ]
    },
    {
      title: 'MARTIAL ARTS CLOTHING',
      href: '/products/martial-arts',
      subcategories: [
        { title: 'Karate Uniforms', href: '/products/martial-arts/karate' },
        { title: 'Judo Gear', href: '/products/martial-arts/judo' },
        { title: 'Taekwondo Clothing', href: '/products/martial-arts/taekwondo' }
      ]
    }
  ]

  return (
    <nav className="bg-white shadow-xl border-b border-gray-100 sticky top-0 z-50" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/axiom-rise.png" 
                alt="Axiom Rise Logo" 
                width={150} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu - Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`px-3 py-4 text-sm font-semibold transition-colors relative ${
                  pathname === '/' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                HOME
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => {
                  setIsProductsOpen(true)
                }}
                onMouseLeave={() => {
                  setIsProductsOpen(false)
                  setActiveSubmenu(null)
                  setActiveThirdLevel(null)
                }}
              >
                <button className="text-gray-600 hover:text-gray-800 px-3 py-4 text-sm font-semibold transition-colors flex items-center">
                  Our Products
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Main Dropdown */}
                {isProductsOpen && (
                  <div className="absolute left-0 top-full w-80 bg-white rounded-xl border border-gray-200 z-50" style={{ boxShadow: '0 8px 32px 0 rgba(60,72,88,0.18)' }}>
                    <div className="py-2">
                      {productCategories.map((category, index) => (
                        <div
                          key={category.title}
                          className="relative"
                          onMouseEnter={() => setActiveSubmenu(category.title)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          <Link
                            href={category.href}
                            className={`flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors ${
                              index !== productCategories.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                          >
                            <span className="font-medium">{category.title}</span>
                            <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </Link>

                          {/* Submenu */}
                          {activeSubmenu === category.title && (
                            <div 
                              className="absolute left-full top-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-60"
                              onMouseEnter={() => setActiveSubmenu(category.title)}
                              onMouseLeave={() => {
                                setActiveSubmenu(null)
                                setActiveThirdLevel(null)
                              }}
                            >
                              <div className="py-2">
                                {category.subcategories.map((subcategory, subIndex) => (
                                  <div 
                                    key={subcategory.href}
                                    className="relative"
                                    onMouseEnter={() => setActiveThirdLevel(subcategory.title)}
                                    onMouseLeave={() => setActiveThirdLevel(null)}
                                  >
                                    <Link
                                      href={subcategory.href}
                                      className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                                        activeThirdLevel && activeThirdLevel.startsWith(subcategory.title)
                                          ? 'bg-blue-600 text-white'
                                          : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                                      } ${subIndex !== category.subcategories.length - 1 ? 'border-b border-gray-100' : ''}`}
                                    >
                                      <span>{subcategory.title}</span>
                                      {subcategory.subcategories && (
                                        <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </Link>

                                    {/* Third Level Submenu */}
                                    {subcategory.subcategories && activeThirdLevel === subcategory.title && (
                                      <div 
                                        className="absolute left-full top-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-70 max-h-96 overflow-y-auto"
                                        onMouseEnter={() => setActiveThirdLevel(subcategory.title)}
                                        onMouseLeave={() => setActiveThirdLevel(null)}
                                      >
                                        <div className="py-2">
                                          {subcategory.subcategories.map((thirdLevel, thirdIndex) => (
                                            <Link
                                              key={thirdLevel.href}
                                              href={thirdLevel.href}
                                              className={`block px-4 py-2 text-sm text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors ${
                                                thirdIndex !== subcategory.subcategories!.length - 1 ? 'border-b border-gray-50' : ''
                                              }`}
                                            >
                                              {thirdLevel.title}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other navigation items excluding Contact */}
              <Link
                href="/services"
                className={`px-3 py-4 text-sm font-semibold transition-colors relative ${
                  pathname === '/services' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                SERVICES
              </Link>
              <Link
                href="/clients"
                className={`px-3 py-4 text-sm font-semibold transition-colors relative ${
                  pathname === '/clients' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                CLIENTS
              </Link>
              <Link
                href="/blog"
                className={`px-3 py-4 text-sm font-semibold transition-colors relative ${
                  pathname === '/blog' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                BLOG
              </Link>
            </div>
          </div>

          {/* Right Side - Talk to Expert Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              TALK TO AN EXPERT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Products Section */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full text-left text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                >
                  Products
                  <svg 
                    className={`h-4 w-4 transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isProductsOpen && (
                  <div className="pl-4 space-y-1">
                    {productCategories.map((category) => (
                      <div key={category.title}>
                        <button
                          onClick={() => setActiveSubmenu(activeSubmenu === category.title ? null : category.title)}
                          className="w-full text-left text-gray-600 hover:text-primary-600 px-3 py-2 text-sm flex items-center justify-between"
                        >
                          {category.title}
                          <svg 
                            className={`h-3 w-3 transform transition-transform ${activeSubmenu === category.title ? 'rotate-180' : ''}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {activeSubmenu === category.title && (
                          <div className="pl-4 space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <div key={subcategory.href}>
                                {subcategory.subcategories ? (
                                  <div>
                                    <button
                                      onClick={() => setActiveThirdLevel(activeThirdLevel === subcategory.title ? null : subcategory.title)}
                                      className="w-full text-left text-gray-500 hover:text-primary-600 px-3 py-1 text-sm flex items-center justify-between"
                                    >
                                      {subcategory.title}
                                      <svg 
                                        className={`h-2 w-2 transform transition-transform ${activeThirdLevel === subcategory.title ? 'rotate-180' : ''}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                      >
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                    
                                    {activeThirdLevel === subcategory.title && (
                                      <div className="pl-4 space-y-1 max-h-48 overflow-y-auto">
                                        {subcategory.subcategories.map((thirdLevel) => (
                                          <Link
                                            key={thirdLevel.href}
                                            href={thirdLevel.href}
                                            className="block text-gray-400 hover:text-primary-600 px-3 py-1 text-xs"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {thirdLevel.title}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    href={subcategory.href}
                                    className="block text-gray-500 hover:text-primary-600 px-3 py-1 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subcategory.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}