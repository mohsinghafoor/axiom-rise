"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { productsData } from '@/data/products';

export default function ProductsGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ['All', 'Jackets', 'Hoodies', 'T-Shirts', 'Sportswear', 'Uniforms', 'Accessories'];

  const getCategoryKeyword = (category: string): string[] => {
    const categoryMap: { [key: string]: string[] } = {
      'Jackets': ['jacket'],
      'Hoodies': ['hoodie'],
      'T-Shirts': ['t-shirt', 'tshirt'],
      'Sportswear': ['sport', 'fitness', 'martial', 'equestrian'],
      'Uniforms': ['uniform', 'scrub'],
      'Accessories': ['hat', 'bag', 'backpack', 'cap', 'beanie', 'scarf', 'glove', 'sock', 'belt', 'wallet']
    };
    return categoryMap[category] || [];
  };

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || 
                           getCategoryKeyword(selectedCategory).some(keyword => 
                             product.title.toLowerCase().includes(keyword) || 
                             product.description.toLowerCase().includes(keyword)
                           );
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // Reset visible cards when filtered products change
    setVisibleCards(new Set());
    
    // Minimal delay to ensure DOM is ready
    const setupTimer = setTimeout(() => {
      const observers: IntersectionObserver[] = [];

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => {
                  const updated = new Set(prev);
                  updated.add(index);
                  return updated;
                });
                observer.unobserve(card);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '50px 0px 0px 0px',
          }
        );
        observer.observe(card);
        observers.push(observer);
      });

      // Cleanup observers on unmount or filter change
      return () => {
        observers.forEach((observer) => observer.disconnect());
        clearTimeout(setupTimer);
      };
    }, 50);
    // Cleanup timer on unmount
    return () => clearTimeout(setupTimer);
  }, [filteredProducts.length]);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Decorative accent circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:border-primary-600 dark:focus:border-primary-500 focus:outline-none text-gray-900 dark:text-white bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md border border-transparent dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Showing <span className="font-bold text-primary-600 dark:text-primary-400">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={`${product.slug}-${index}`}
              ref={(el) => {cardsRef.current[index] = el}}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-gray-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visibleCards.has(index) ? `${Math.min(index * 20, 100)}ms` : '0ms'
              }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-xl bg-gray-200 dark:bg-gray-700">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact"
                    className="px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors text-sm font-semibold"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Products Found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
