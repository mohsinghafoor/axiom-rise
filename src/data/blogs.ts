export interface BlogPost {
  title: string
  excerpt: string
  image: string
  category: string
  daysAgo: number
  readTime: string
  author: string
}

export const formatBlogDate = (daysAgo: number) => {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Complete Guide to Starting Your Private Label Clothing Line",
    excerpt: "Learn everything you need to know about launching your own private label clothing brand, from finding the right manufacturer to quality control.",
    image: "/images/hero/hoodies.webp",
    category: "Manufacturing",
    daysAgo: 0,
    readTime: "8 min read",
    author: "Sarah Johnson"
  },
  {
    title: "Sustainable Manufacturing: The Future of Fashion Industry",
    excerpt: "Discover how eco-friendly practices and sustainable materials are transforming the clothing manufacturing landscape.",
    image: "/images/hero/fitness.webp",
    category: "Sustainability",
    daysAgo: 1,
    readTime: "6 min read",
    author: "Michael Chen"
  },
  {
    title: "Understanding Fabric Quality: A Buyer's Guide",
    excerpt: "Everything you need to know about fabric types, quality grades, and how to choose the right materials for your clothing line.",
    image: "/images/hero/tshirt.webp",
    category: "Quality Control",
    daysAgo: 2,
    readTime: "10 min read",
    author: "Emily Rodriguez"
  },
  {
    title: "Export Documentation: Essential Guide for Clothing Manufacturers",
    excerpt: "Navigate the complex world of international trade with our comprehensive guide to export documentation and customs clearance.",
    image: "/images/hero/varsity-jacket.webp",
    category: "Export Guide",
    daysAgo: 3,
    readTime: "7 min read",
    author: "David Kim"
  },
  {
    title: "Top 10 Fashion Trends Shaping 2025",
    excerpt: "Stay ahead of the curve with our analysis of the biggest fashion trends and how they're influencing manufacturing demands.",
    image: "/images/hero/sports-wear.webp",
    category: "Fashion Trends",
    daysAgo: 4,
    readTime: "5 min read",
    author: "Jessica Martinez"
  },
  {
    title: "Quality Control Checklist for Garment Manufacturing",
    excerpt: "A detailed checklist to ensure your products meet international quality standards and exceed customer expectations.",
    image: "/images/hero/sweatshirt.webp",
    category: "Quality Control",
    daysAgo: 5,
    readTime: "9 min read",
    author: "Robert Thompson"
  },
  {
    title: "How to Choose the Right Clothing Manufacturer for Your Brand",
    excerpt: "Key factors to consider when selecting a manufacturing partner, from production capacity to communication and reliability.",
    image: "/images/hero/leather-jacket.webp",
    category: "Manufacturing",
    daysAgo: 6,
    readTime: "8 min read",
    author: "Amanda Lee"
  },
  {
    title: "The Rise of Athleisure: Manufacturing Opportunities",
    excerpt: "Explore the booming athleisure market and how manufacturers can capitalize on this growing trend.",
    image: "/images/hero/shorts.webp",
    category: "Industry News",
    daysAgo: 7,
    readTime: "6 min read",
    author: "Chris Anderson"
  },
  {
    title: "Understanding MOQ: Minimum Order Quantities Explained",
    excerpt: "Learn about minimum order quantities, how they work, and strategies for negotiating better terms with manufacturers.",
    image: "/images/hero/hoodies.webp",
    category: "Manufacturing",
    daysAgo: 8,
    readTime: "7 min read",
    author: "Lisa Wang"
  }
];
