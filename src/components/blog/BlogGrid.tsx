"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  // Helper function to format date with day gap
  const getFormattedDate = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const blogPosts = [
    {
      titleKey: "blogPost1Title",
      excerptKey: "blogPost1Excerpt",
      image: "/images/hero/hoodies.webp",
      category: "Manufacturing",
      date: getFormattedDate(0), // Today
      readTime: "8 min read",
      author: "Sarah Johnson"
    },
    {
      titleKey: "blogPost2Title",
      excerptKey: "blogPost2Excerpt",
      image: "/images/hero/fitness.webp",
      category: "Sustainability",
      date: getFormattedDate(1), // Yesterday
      readTime: "6 min read",
      author: "Michael Chen"
    },
    {
      titleKey: "blogPost3Title",
      excerptKey: "blogPost3Excerpt",
      image: "/images/hero/tshirt.webp",
      category: "Quality Control",
      date: getFormattedDate(2), // 2 days ago
      readTime: "10 min read",
      author: "Emily Rodriguez"
    },
    {
      titleKey: "blogPost4Title",
      excerptKey: "blogPost4Excerpt",
      image: "/images/hero/varsity-jacket.webp",
      category: "Export Guide",
      date: getFormattedDate(3), // 3 days ago
      readTime: "7 min read",
      author: "David Kim"
    },
    {
      titleKey: "blogPost5Title",
      excerptKey: "blogPost5Excerpt",
      image: "/images/hero/sports-wear.webp",
      category: "Fashion Trends",
      date: getFormattedDate(4), // 4 days ago
      readTime: "5 min read",
      author: "Jessica Martinez"
    },
    {
      titleKey: "blogPost6Title",
      excerptKey: "blogPost6Excerpt",
      image: "/images/hero/sweatshirt.webp",
      category: "Quality Control",
      date: getFormattedDate(5), // 5 days ago
      readTime: "9 min read",
      author: "Robert Thompson"
    },
    {
      titleKey: "blogPost7Title",
      excerptKey: "blogPost7Excerpt",
      image: "/images/hero/leather-jacket.webp",
      category: "Manufacturing",
      date: getFormattedDate(6), // 6 days ago
      readTime: "8 min read",
      author: "Amanda Lee"
    },
    {
      titleKey: "blogPost8Title",
      excerptKey: "blogPost8Excerpt",
      image: "/images/hero/shorts.webp",
      category: "Industry News",
      date: getFormattedDate(7), // 7 days ago
      readTime: "6 min read",
      author: "Chris Anderson"
    },
    {
      titleKey: "blogPost9Title",
      excerptKey: "blogPost9Excerpt",
      image: "/images/hero/hoodies.webp",
      category: "Manufacturing",
      date: getFormattedDate(8), // 8 days ago
      readTime: "7 min read",
      author: "Lisa Wang"
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    // Reset visible cards when filtered posts change
    setVisibleCards(new Set());
    
    // Minimal delay to ensure DOM is ready
    const setupTimer = setTimeout(() => {
      const observers: IntersectionObserver[] = [];
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Reduced delay for faster appearance
                const delay = Math.min(index * 20, 100); // Max 100ms delay
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const newSet = new Set(prev);
                    newSet.add(index);
                    return newSet;
                  });
                }, delay);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.05, // Reduced threshold - triggers earlier
            rootMargin: '100px 0px 0px 0px' // Start loading 100px before entering viewport
          }
        );

        observer.observe(card);
        observers.push(observer);
      });

      return () => {
        observers.forEach(obs => obs.disconnect());
      };
    }, 50); // Reduced initial delay

    return () => {
      clearTimeout(setupTimer);
    };
  }, [filteredPosts.length, activeCategory]);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t('blogGridShowingArticles')} <span className="font-bold text-primary-600 dark:text-primary-400">{filteredPosts.length}</span> {filteredPosts.length === 1 ? t('blogGridArticles') : t('blogGridArticlesPlural')}
            {activeCategory !== 'All' && <span className="ml-1">{t('blogGridInCategory')} <span className="font-semibold">{activeCategory}</span></span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={index}
              ref={(el) => {cardsRef.current[index] = el}}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-gray-700 overflow-hidden ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visibleCards.has(index) ? `${Math.min(index * 20, 100)}ms` : '0ms'
              }}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={post.image}
                  alt={t(post.titleKey)}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-black/70"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 dark:bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Link href={`/blog/${index + 1}`}>
                    {t(post.titleKey)}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {t(post.excerptKey)}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-200 font-medium">{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${index + 1}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm flex items-center"
                  >
                    {t('blogGridReadMore')}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('blogGridNoArticlesFound')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('blogGridNoArticlesMessage')}</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md">
              {t('blogGridLoadMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
