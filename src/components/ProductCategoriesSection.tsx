"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

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
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 40); // Stagger animation by 40ms (reduced from 80ms)
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const categories = [
    { 
      title: "JACKET MANUFACTURER", 
      description: "Quality jackets from casual to premium outerwear",
      image: "/images/products/jackets.png"
    },
    { 
      title: "HOODIES MANUFACTURER", 
      description: "Comfortable and stylish hoodies for all seasons",
      image: "/images/hero/hoodies.png"
    },
    { 
      title: "WHOLESALE VARSITY JACKETS", 
      description: "Classic varsity jackets with modern styling",
      image: "/images/hero/varsity-jacket.png"
    },
    { 
      title: "HOODIES SUPPLIER AND VENDORS", 
      description: "Bulk hoodie supply with customization options",
      image: "/images/hero/hoodie.avif"
    },
    { 
      title: "T-SHIRTS MANUFACTURER", 
      description: "Premium custom t-shirts in various styles and fabrics",
      image: "/images/hero/tshirt.jpg"
    },
    { 
      title: "WHOLESALE SCRUB VENDORS", 
      description: "High-quality medical scrubs for healthcare professionals",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
    },
    { 
      title: "UNIFORM MANUFACTURERS", 
      description: "Professional uniforms for corporate and industrial needs",
      image: "/images/products/uniform.png"
    },
    { 
      title: "SPORTSWEAR MANUFACTURER", 
      description: "Performance-driven athletic wear for active lifestyles",
      image: "/images/hero/sports-wear.png"
    },
    { 
      title: "WHOLESALE SHORTS", 
      description: "Versatile shorts for sports, casual, and activewear",
      image: "/images/hero/shorts.png"
    },
    { 
      title: "FITNESS CLOTHING MANUFACTURER", 
      description: "Advanced workout gear and gym apparel",
      image: "/images/hero/fitness.jpg"
    },
    { 
      title: "SWEATSHIRT MANUFACTURERS", 
      description: "Cozy and durable sweatshirts for everyday comfort",
      image: "/images/hero/sweatshirt.webp"
    },
    { 
      title: "MARTIAL ARTS CLOTHING", 
      description: "Specialized martial arts uniforms and training gear",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop"
    },
    { 
      title: "EQUESTRIAN CLOTHING MANUFACTURER", 
      description: "Professional equestrian apparel and riding gear",
      image: "/images/products/equestrian.webp"
    },
    { 
      title: "HAT MANUFACTURERS", 
      description: "Custom hats and headwear for all occasions",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=400&fit=crop"
    },
    { 
      title: "LEATHER BAGS MANUFACTURER", 
      description: "Premium leather bags and accessories",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=400&fit=crop"
    }
  ];
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
              className={`bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.02)',
                transitionDelay: visibleCards.includes(index) ? `${index * 40}ms` : '0ms'
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
                <Link href="/products" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  READ MORE
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
