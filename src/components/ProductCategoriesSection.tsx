"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import { productsData } from '@/data/products';

export default function ProductCategoriesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Reduced delay for faster appearance
              const delay = Math.min(index * 20, 100);
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05, // Triggers earlier
          rootMargin: '100px 0px 0px 0px' // Start loading 100px before entering viewport
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Show only first 6 products on landing page
  const categories = productsData.slice(0, 6);
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.04)' }}>
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#e9f0ff" fillOpacity="0.5"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-xl text-gray-600">Discover our diverse range of high-quality clothing for various markets</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              ref={(el) => {cardsRef.current[index] = el}}
              className={`bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)',
                transitionDelay: visibleCards.includes(index) ? `${Math.min(index * 20, 100)}ms` : '0ms'
              }}
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image 
                  src={category.image} 
                  alt={category.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link href={`/products/${category.slug}`} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  READ MORE
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            EXPLORE MORE PRODUCTS
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
