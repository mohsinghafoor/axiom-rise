"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { blogPosts as blogPostsData, formatBlogDate } from '@/data/blogs';

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  const blogPosts = blogPostsData.map(post => ({
    ...post,
    date: formatBlogDate(post.daysAgo),
  }));

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    // Reset visible cards when filtered posts change
    setVisibleCards(new Set());

    const setupTimer = setTimeout(() => {
      const observers: IntersectionObserver[] = [];

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const delay = Math.min(index * 80, 240);
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
            threshold: 0.05,
            rootMargin: '100px 0px 0px 0px'
          }
        );

        observer.observe(card);
        observers.push(observer);
      });

      return () => {
        observers.forEach(obs => obs.disconnect());
      };
    }, 50);

    return () => {
      clearTimeout(setupTimer);
    };
  }, [filteredPosts.length, activeCategory]);

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Count */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[1.5px] text-body/70">
            Showing <span className="font-semibold text-primary-600">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <span className="ml-1">in <span className="font-semibold text-primary-800">{activeCategory}</span></span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={`${activeCategory}-${index}`}
              ref={(el) => {cardsRef.current[index] = el}}
              className={`group bg-white rounded-card shadow-card overflow-hidden transition-all duration-700 ease-out hover:-translate-y-2 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs tracking-[1px] uppercase">
                  {post.category}
                </span>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-xs uppercase tracking-[1px] text-body/60 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2 text-primary-600">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl leading-[30px] text-ink mb-3 line-clamp-2 group-hover:text-primary-800 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed text-body mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-primary-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-800 font-semibold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="ml-2 text-sm text-body font-medium">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-white text-primary-800 border border-primary-800 font-sans text-[10px] uppercase tracking-[1.5px] rounded-card px-4 py-2.5 transition-colors duration-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-24 h-24 mx-auto text-primary-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-display text-2xl text-ink mb-2">No Articles Found</h3>
            <p className="text-body">No articles available in this category yet. Check back soon!</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-14">
            <button className="btn-primary hover:scale-95 transform transition-all duration-300">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
