"use client";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { useState } from "react";

const heroImages = [
  "/images/hero/hoodies.webp",
  "/images/hero/sports-wear.webp",
  "/images/hero/tshirt.webp",
  "/images/hero/varsity-jacket.webp",
  "/images/hero/leather-jacket.webp",
  "/images/hero/fitness.webp",
  "/images/hero/sweatshirt.webp",
  "/images/hero/shorts.webp"
];

const heroContent = [
  {
    title: "Premium Hoodies Collection",
    subtitle: "Ultimate Comfort Meets Style",
    description: "Crafted with premium materials and attention to detail, our hoodies blend streetwear aesthetics with unmatched comfort for the modern lifestyle."
  },
  {
    title: "Elite Sportswear Manufacturing",
    subtitle: "Performance-Driven Athletic Apparel",
    description: "Engineered for champions with moisture-wicking technology, breathable fabrics, and ergonomic designs that enhance athletic performance."
  },
  {
    title: "Classic T-Shirt Excellence",
    subtitle: "Timeless Style, Perfect Fit",
    description: "From premium cotton basics to designer cuts, our t-shirts represent the perfect fusion of comfort, durability, and contemporary fashion."
  },
  {
    title: "Varsity Jacket Heritage",
    subtitle: "Collegiate Style Redefined",
    description: "Authentic varsity craftsmanship with modern materials and designs that celebrate tradition while embracing contemporary streetwear culture."
  },
  {
    title: "Luxury Leather Jackets",
    subtitle: "Timeless Elegance & Sophistication",
    description: "Meticulously crafted from premium genuine leather, our jackets embody luxury, durability, and classic style that transcends seasons."
  },
  {
    title: "Peak Fitness Apparel",
    subtitle: "Activate Your Potential",
    description: "High-performance fitness wear designed with cutting-edge fabric technology to support your most intense workouts and active lifestyle."
  },
  {
    title: "Cozy Sweatshirt Collection",
    subtitle: "Relaxed Luxury for Everyday",
    description: "Soft, warm, and stylish sweatshirts that provide the perfect balance of comfort and fashion for casual and athleisure wear."
  },
  {
    title: "Premium Shorts Range",
    subtitle: "Freedom of Movement & Style",
    description: "From athletic performance to casual comfort, our shorts collection offers versatile designs with superior materials and modern fits."
  }
];

export default function HeroSection() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Carousel
          images={heroImages}
          autoPlay={true}
          interval={4000}
          onIndexChange={setCurrentHeroIndex}
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none"></div>
      <div className="relative z-30 flex items-center justify-center h-full pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-3">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider drop-shadow-lg">
              {heroContent[currentHeroIndex]?.subtitle}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg transition-all duration-500">
            {heroContent[currentHeroIndex]?.title}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg transition-all duration-500">
            {heroContent[currentHeroIndex]?.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link
              href="/products"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center shadow-lg"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center backdrop-blur-sm"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
