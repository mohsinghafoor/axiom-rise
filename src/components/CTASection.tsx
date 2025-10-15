"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="relative text-white py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%)' }}>
      {/* Curved top border using clip-path */}
      {/* <div className="absolute inset-0" style={{ clipPath: 'ellipse(120% 100% at 50% 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #4f46e5 100%)' }}></div>
      </div> */}
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
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
          Ready to Partner with Us?
        </h2>
        <p 
          className={`text-xl mb-8 max-w-2xl mx-auto transition-all duration-500 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ color: 'rgba(255, 255, 255, 0.95)' }}
        >
          Join thousands of satisfied clients worldwide. Get in touch today for competitive pricing and exceptional service.
        </p>
        <div
          className={`transition-all duration-500 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <Link 
            href="/contact" 
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block hover:scale-105 transform"
            style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)' }}
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
