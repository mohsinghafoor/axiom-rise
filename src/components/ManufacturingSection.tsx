"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - Wider on desktop, appears first on mobile */}
          <div className={`order-1 lg:col-span-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge>{t('manufacturingBadge')}</Badge>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
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
                  <span key={index}>{part}</span>
                ) : (
                  <Fragment key={index}>
                    {part}
                    <Link href="/services" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                      garment manufacturing services
                    </Link>
                  </Fragment>
                )
              ))}
            </p>
            
            <div className="mt-8">
              <Button href="/contact" variant="primary" withArrow>
                {t('getQuote')}
              </Button>
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
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-transparent to-primary-500/20"></div>
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
