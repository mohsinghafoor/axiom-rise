"use client"

import { useLanguage } from '../../contexts/LanguageContext'

interface BlogCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function BlogCategories({ activeCategory, setActiveCategory }: BlogCategoriesProps) {
  const { t } = useLanguage()

  const categories = [
    { key: 'All', label: t('blogCategoryAll') },
    { key: 'Manufacturing', label: t('blogCategoryManufacturing') },
    { key: 'Sustainability', label: t('blogCategorySustainability') },
    { key: 'Fashion Trends', label: t('blogCategoryFashionTrends') },
    { key: 'Export Guide', label: t('blogCategoryExportGuide') },
    { key: 'Quality Control', label: t('blogCategoryQualityControl') },
    { key: 'Industry News', label: t('blogCategoryIndustryNews') }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all whitespace-nowrap ${
                activeCategory === category.key
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent dark:border-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
