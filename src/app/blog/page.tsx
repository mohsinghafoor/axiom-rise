"use client"

import { useState } from 'react'
import BlogHeroSection from '@/components/blog/HeroSection'
import BlogGrid from '@/components/blog/BlogGrid'
import BlogCategories from '@/components/blog/BlogCategories'
import BlogCTASection from '@/components/blog/CTASection'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <BlogHeroSection />
      <BlogCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <BlogGrid activeCategory={activeCategory} />
      <BlogCTASection />
    </div>
  )
}
