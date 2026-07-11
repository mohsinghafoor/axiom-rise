"use client"

import Link from "next/link";
import { useLanguage } from '../../contexts/LanguageContext';

export default function ProductsCTASection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100
dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {t('productsCTATitle')}
        </h2>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          {t('productsCTADesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
          >
            {t('productsCTAContactUs')}
          </Link>
          <Link 
            href="/services"
            className="px-8 py-3 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-all hover:scale-105"
          >
            {t('productsCTAViewServices')}
          </Link>
        </div>
      </div>
    </section>
  );
}
