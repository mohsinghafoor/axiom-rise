import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { blogPosts, formatBlogDate } from '@/data/blogs'

export default function BlogsSection() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="down">
          <SectionHeading title="Our Latest Blogs" />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Reveal key={post.title} variant="up" delay={index * 100}>
              <article className="group">
                <Link href={`/blog/${post.slug}`} className="block relative h-56 rounded-card overflow-hidden shadow-card">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                    {formatBlogDate(post.daysAgo)}
                  </span>
                </Link>
                <h3 className="mt-5 font-display text-lg md:text-xl leading-[30px] text-ink group-hover:text-primary-800 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block bg-white text-primary-800 border border-primary-800 font-sans text-xs uppercase tracking-[2px] rounded-card px-5 py-3 transition-colors duration-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white"
                >
                  Read More
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
