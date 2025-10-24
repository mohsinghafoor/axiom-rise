"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ManufacturingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px 0px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      {/* Decorative accent circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - Wider on desktop, appears first on mobile */}
          <div className={`order-1 lg:col-span-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                {t('manufacturingBadge')}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('manufacturingTitleStart')}{' '}
              <span className="text-primary-600 dark:text-primary-400">{t('manufacturingTitleHighlight')}</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('manufacturingDesc1Start')}{' '}
              <span className="font-semibold text-gray-900 dark:text-white">{t('manufacturingDesc1Highlight')}</span>{' '}
              {t('manufacturingDesc1End')}
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t('manufacturingDesc2').split('garment manufacturing services').map((part, index, array) => (
                index === array.length - 1 ? (
                  part
                ) : (
                  <>
                    {part}
                    <Link href="/services" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      garment manufacturing services
                    </Link>
                  </>
                )
              ))}
            </p>
            
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-sm font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg">
                {t('getQuote')}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Image - Smaller on desktop, appears second on mobile */}
          <div className={`order-2 lg:col-span-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="group relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="/images/hero/fitness.webp" 
                  alt="Expert garment manufacturing process" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto object-cover" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-primary-500/20"></div>
              </div>
            
              {/* Enhanced Stats Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 font-semibold">{t('yearsExperience')}</div>
                </div>
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 font-semibold">{t('countriesServed')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
