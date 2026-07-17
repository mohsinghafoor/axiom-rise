'use client'

import Reveal from '@/components/ui/Reveal'

interface BlogCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function BlogCategories({ activeCategory, setActiveCategory }: BlogCategoriesProps) {
  const categories = [
    'All',
    'Manufacturing',
    'Sustainability',
    'Fashion Trends',
    'Export Guide',
    'Quality Control',
    'Industry News'
  ];

  return (
    <section className="py-8 sm:py-10 bg-white border-b-[3px] border-primary-50">
      <div className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-8">
        <Reveal variant="fade">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-card font-sans text-xs uppercase tracking-[1.5px] whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-primary-600 border-primary-600 text-white shadow-card'
                    : 'bg-white border-primary-200 text-body hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
