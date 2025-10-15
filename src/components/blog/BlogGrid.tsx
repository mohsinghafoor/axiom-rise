import Image from "next/image";
import Link from "next/link";

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const blogPosts = [
    {
      title: "The Complete Guide to Starting Your Private Label Clothing Line",
      excerpt: "Learn everything you need to know about launching your own private label clothing brand, from finding the right manufacturer to quality control.",
      image: "/images/hero/hoodies.png",
      category: "Manufacturing",
      date: "October 10, 2025",
      readTime: "8 min read",
      author: "Sarah Johnson"
    },
    {
      title: "Sustainable Manufacturing: The Future of Fashion Industry",
      excerpt: "Discover how eco-friendly practices and sustainable materials are transforming the clothing manufacturing landscape.",
      image: "/images/hero/fitness.jpg",
      category: "Sustainability",
      date: "October 8, 2025",
      readTime: "6 min read",
      author: "Michael Chen"
    },
    {
      title: "Understanding Fabric Quality: A Buyer's Guide",
      excerpt: "Everything you need to know about fabric types, quality grades, and how to choose the right materials for your clothing line.",
      image: "/images/hero/tshirt.jpg",
      category: "Quality Control",
      date: "October 5, 2025",
      readTime: "10 min read",
      author: "Emily Rodriguez"
    },
    {
      title: "Export Documentation: Essential Guide for Clothing Manufacturers",
      excerpt: "Navigate the complex world of international trade with our comprehensive guide to export documentation and customs clearance.",
      image: "/images/hero/varsity-jacket.png",
      category: "Export Guide",
      date: "October 3, 2025",
      readTime: "7 min read",
      author: "David Kim"
    },
    {
      title: "Top 10 Fashion Trends Shaping 2025",
      excerpt: "Stay ahead of the curve with our analysis of the biggest fashion trends and how they're influencing manufacturing demands.",
      image: "/images/hero/sports-wear.png",
      category: "Fashion Trends",
      date: "September 28, 2025",
      readTime: "5 min read",
      author: "Jessica Martinez"
    },
    {
      title: "Quality Control Checklist for Garment Manufacturing",
      excerpt: "A detailed checklist to ensure your products meet international quality standards and exceed customer expectations.",
      image: "/images/hero/sweatshirt.webp",
      category: "Quality Control",
      date: "September 25, 2025",
      readTime: "9 min read",
      author: "Robert Thompson"
    },
    {
      title: "How to Choose the Right Clothing Manufacturer for Your Brand",
      excerpt: "Key factors to consider when selecting a manufacturing partner, from production capacity to communication and reliability.",
      image: "/images/hero/leather-jacket.jpg",
      category: "Manufacturing",
      date: "September 20, 2025",
      readTime: "8 min read",
      author: "Amanda Lee"
    },
    {
      title: "The Rise of Athleisure: Manufacturing Opportunities",
      excerpt: "Explore the booming athleisure market and how manufacturers can capitalize on this growing trend.",
      image: "/images/hero/shorts.png",
      category: "Industry News",
      date: "September 15, 2025",
      readTime: "6 min read",
      author: "Chris Anderson"
    },
    {
      title: "Understanding MOQ: Minimum Order Quantities Explained",
      excerpt: "Learn about minimum order quantities, how they work, and strategies for negotiating better terms with manufacturers.",
      image: "/images/hero/hoodies.png",
      category: "Manufacturing",
      date: "September 10, 2025",
      readTime: "7 min read",
      author: "Lisa Wang"
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-primary-600">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <span className="ml-1">in <span className="font-semibold">{activeCategory}</span></span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${index + 1}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="ml-2 text-sm text-gray-700 font-medium">{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${index + 1}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center"
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
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Found</h3>
            <p className="text-gray-600">No articles available in this category yet. Check back soon!</p>
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
