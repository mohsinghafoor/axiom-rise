"use client";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';

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

export default function HeroSection() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const { t } = useLanguage();

  const heroContent = [
    {
      title: t('heroTitle1'),
      subtitle: t('heroSubtitle1'),
      description: t('heroDesc1')
    },
    {
      title: t('heroTitle2'),
      subtitle: t('heroSubtitle2'),
      description: t('heroDesc2')
    },
    {
      title: t('heroTitle3'),
      subtitle: t('heroSubtitle3'),
      description: t('heroDesc3')
    },
    {
      title: t('heroTitle4'),
      subtitle: t('heroSubtitle4'),
      description: t('heroDesc4')
    },
    {
      title: t('heroTitle5'),
      subtitle: t('heroSubtitle5'),
      description: t('heroDesc5')
    },
    {
      title: t('heroTitle6'),
      subtitle: t('heroSubtitle6'),
      description: t('heroDesc6')
    },
    {
      title: t('heroTitle7'),
      subtitle: t('heroSubtitle7'),
      description: t('heroDesc7')
    },
    {
      title: t('heroTitle8'),
      subtitle: t('heroSubtitle8'),
      description: t('heroDesc8')
    }
  ];
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
              {t('viewProducts')}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors text-center backdrop-blur-sm"
            >
              {t('getQuote')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
