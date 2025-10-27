"use client"


import { useLanguage } from '../../contexts/LanguageContext';

export default function ProductsHeroSection() {
  const { t } = useLanguage();

  return (
<section className="relative text-white py-20 overflow-hidden 
  bg-gradient-to-br from-[#11998e] to-[#38ef7d] 
  dark:from-[#065f46] dark:via-[#0f766e] dark:to-[#14b8a6] 
  transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('productsHeroTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
            {t('productsHeroDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}
