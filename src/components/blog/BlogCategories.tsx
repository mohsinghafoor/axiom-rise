"use client"

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
    <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
