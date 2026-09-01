"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import { productsData } from '@/data/products';
import { useLanguage } from '../contexts/LanguageContext';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
export default function ProductCategoriesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t, language } = useLanguage();

  const getTranslatedTitle = (product: typeof productsData[0]) => {
    return typeof product.title === 'string' ? product.title : product.title[language as keyof typeof product.title] || product.title.en;
  };

  const getTranslatedDescription = (product: typeof productsData[0]) => {
    return typeof product.description === 'string' ? product.description : product.description[language as keyof typeof product.description] || product.description.en;
  };

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
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-stone-50 to-primary-50/60 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-primary-50 dark:fill-gray-800/50" fillOpacity="0.5"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge>{t('productCategoriesBadge')}</Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('productCategoriesTitle')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('productCategoriesDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              ref={(el) => {cardsRef.current[index] = el}}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 border border-transparent dark:border-gray-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)',
                transitionDelay: visibleCards.includes(index) ? `${Math.min(index * 20, 100)}ms` : '0ms'
              }}
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image 
                  src={category.image} 
                  alt={getTranslatedTitle(category)}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-400">{getTranslatedTitle(category)}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{getTranslatedDescription(category)}</p>
                <Link href={`/products/${category.slug}`} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  {t('productCategoriesReadMore')}
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
          <Button href="/products" variant="primary" withArrow>
            {t('productCategoriesExploreMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}
