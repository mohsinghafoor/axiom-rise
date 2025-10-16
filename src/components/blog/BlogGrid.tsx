"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
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
      title: "The Complete Guide to Starting Your Private Label Clothing Line",
      excerpt: "Learn everything you need to know about launching your own private label clothing brand, from finding the right manufacturer to quality control.",
      image: "/images/hero/hoodies.webp",
      category: "Manufacturing",
      date: getFormattedDate(0), // Today
      readTime: "8 min read",
      author: "Sarah Johnson"
    },
    {
      title: "Sustainable Manufacturing: The Future of Fashion Industry",
      excerpt: "Discover how eco-friendly practices and sustainable materials are transforming the clothing manufacturing landscape.",
      image: "/images/hero/fitness.webp",
      category: "Sustainability",
      date: getFormattedDate(1), // Yesterday
      readTime: "6 min read",
      author: "Michael Chen"
    },
    {
      title: "Understanding Fabric Quality: A Buyer's Guide",
      excerpt: "Everything you need to know about fabric types, quality grades, and how to choose the right materials for your clothing line.",
      image: "/images/hero/tshirt.webp",
      category: "Quality Control",
      date: getFormattedDate(2), // 2 days ago
      readTime: "10 min read",
      author: "Emily Rodriguez"
    },
    {
      title: "Export Documentation: Essential Guide for Clothing Manufacturers",
      excerpt: "Navigate the complex world of international trade with our comprehensive guide to export documentation and customs clearance.",
      image: "/images/hero/varsity-jacket.webp",
      category: "Export Guide",
      date: getFormattedDate(3), // 3 days ago
      readTime: "7 min read",
      author: "David Kim"
    },
    {
      title: "Top 10 Fashion Trends Shaping 2025",
      excerpt: "Stay ahead of the curve with our analysis of the biggest fashion trends and how they're influencing manufacturing demands.",
      image: "/images/hero/sports-wear.webp",
      category: "Fashion Trends",
      date: getFormattedDate(4), // 4 days ago
      readTime: "5 min read",
      author: "Jessica Martinez"
    },
    {
      title: "Quality Control Checklist for Garment Manufacturing",
      excerpt: "A detailed checklist to ensure your products meet international quality standards and exceed customer expectations.",
      image: "/images/hero/sweatshirt.webp",
      category: "Quality Control",
      date: getFormattedDate(5), // 5 days ago
      readTime: "9 min read",
      author: "Robert Thompson"
    },
    {
      title: "How to Choose the Right Clothing Manufacturer for Your Brand",
      excerpt: "Key factors to consider when selecting a manufacturing partner, from production capacity to communication and reliability.",
      image: "/images/hero/leather-jacket.webp",
      category: "Manufacturing",
      date: getFormattedDate(6), // 6 days ago
      readTime: "8 min read",
      author: "Amanda Lee"
    },
    {
      title: "The Rise of Athleisure: Manufacturing Opportunities",
      excerpt: "Explore the booming athleisure market and how manufacturers can capitalize on this growing trend.",
      image: "/images/hero/shorts.webp",
      category: "Industry News",
      date: getFormattedDate(7), // 7 days ago
      readTime: "6 min read",
      author: "Chris Anderson"
    },
    {
      title: "Understanding MOQ: Minimum Order Quantities Explained",
      excerpt: "Learn about minimum order quantities, how they work, and strategies for negotiating better terms with manufacturers.",
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
            Showing <span className="font-bold text-primary-600 dark:text-primary-400">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <span className="ml-1">in <span className="font-semibold">{activeCategory}</span></span>}
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
                  alt={post.title}
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
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
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
                    Read More
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Articles Found</h3>
            <p className="text-gray-600 dark:text-gray-300">No articles available in this category yet. Check back soon!</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
