"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function WhyChooseSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => new Set(prev).add(index));
              }, Math.min(index * 150, 300));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px 0px 0px'
      }
    );

    const currentCards = cardsRef.current;
    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const features = [
    {
      title: "Guaranteed Quality Products",
      description: "We take quality seriously at Axiom Rise Apparel. All of our products are made using the best materials and are rigorously tested to ensure they meet our high standards.",
      image: "/images/why/quality.webp",
      imageAlt: "Quality control in clothing manufacturing"
    },
    {
      title: "Low MOQ, Zero Inventory Risk",
      description: "We understand that inventory risk can be a concern for our clients, which is why we offer a low minimum order quantity. This means you can order exactly what you need without worrying about excess inventory.",
      image: "/images/why/moq.webp",
      imageAlt: "Minimum order quantity flexibility"
    },
    {
      title: "Exquisite Custom Styles",
      description: "Our team of experienced designers and craftsmen work closely with you to create custom clothing that perfectly represents your brand and vision, ensuring every piece is unique and exceptional.",
      image: "/images/hero/hoodies.webp",
      imageAlt: "Custom clothing design styles"
    },
    {
      title: "Creative And Unique Designs",
      description: "Our design team is committed to creating innovative and unique designs that will make your brand stand out. We&apos;re constantly pushing the boundaries to create something truly special.",
      image: "/images/why/unique.webp",
      imageAlt: "Creative and unique clothing designs"
    },
    {
      title: "Endless Customization Options",
      description: "We offer a vast array of customization options to choose from. Whether it&apos;s the material, color, or design, we can help you create the perfect product for your brand.",
      image: "/images/why/customize.avif",
      imageAlt: "Endless customization options for clothing"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Axiom Rise Apparel Is Among One Of The Leading{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Clothing Manufacturer
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {cardsRef.current[index] = el}}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Side */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 dark:from-orange-500 dark:to-yellow-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-orange-500/10">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-yellow-500/20 dark:from-orange-900/40 dark:to-yellow-500/30"></div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-orange-500/10 transition-all duration-300 border border-transparent dark:border-gray-700">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
