"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function CustomClothingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="py-20 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Decorative accent circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image - Smaller on desktop, appears first on mobile */}
          <div className={`order-1 lg:order-1 lg:col-span-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="group relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="/images/custom-manufacturer.webp" 
                  alt="Custom clothing manufacturing process" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto object-cover" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-yellow-500/20"></div>
              </div>
            
              {/* Enhanced Stats Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 font-semibold">Custom Designs</div>
                </div>
                <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 font-semibold">Support Available</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content - Wider on desktop, appears second on mobile */}
          <div className={`order-2 lg:order-2 lg:col-span-3 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Custom Solutions
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Custom Clothing Manufacturers in Pakistan,{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Manufacturing Exclusive Clothing</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              If you are searching for a custom clothing manufacturer in Pakistan that can fulfill all your unique requirements? Your search ends here at Rijiz, where we deliver an extensive range of custom clothing solutions to transform your vision into reality. Unlike other bespoke apparel manufacturers, we provide complete custom clothing manufacturing services with limitless customization possibilities.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Rijiz, we take pride in producing premium-quality clothing that aligns with your exact specifications. From screen printing and embroidery to digital printing,{' '}
              <Link href="/services" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                private label clothing manufacturing
              </Link>
              , cut and sew clothing production, and custom designing, we present a comprehensive array of customization services that are unparalleled in the industry.
            </p>
            
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg">
                GET A QUOTE
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
