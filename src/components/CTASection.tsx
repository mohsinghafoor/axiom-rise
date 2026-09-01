"use client"

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '@/components/ui/Button';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative text-white py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 dark:from-primary-900 dark:via-primary-950 dark:to-gray-900 transition-colors duration-300">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-600 relative z-10 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 
          className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {t('ctaTitle')}
        </h2>
        <p 
          className={`text-xl mb-8 max-w-2xl mx-auto transition-all duration-500 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ color: 'rgba(255, 255, 255, 0.95)' }}
        >
          {t('ctaDesc')}
        </p>
        <div
          className={`transition-all duration-500 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <Button href="/contact" variant="secondary">
            {t('ctaButton')}
          </Button>
        </div>
      </div>
    </section>
  );
}
