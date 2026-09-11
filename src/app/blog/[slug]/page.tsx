import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/ui/Reveal'
import BlogCTASection from '@/components/blog/CTASection'
import { blogPosts, formatBlogDate } from '@/data/blogs'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-800/85" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block bg-primary-600 text-white text-xs uppercase tracking-[1.5px] px-4 py-1.5 rounded-full hover:bg-primary-900 transition-colors duration-300"
              >
                {post.category}
              </Link>
              <h1 className="mt-6 font-display text-[28px] md:text-[42px] leading-[1.2] text-white">
                {post.title}
              </h1>
              <div className="mt-5 mx-auto w-[50px] border-t border-white/70" />
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 text-xs uppercase tracking-[1.5px] text-white/85">
                <span>{formatBlogDate(post.daysAgo)}</span>
                <span className="text-white/50">•</span>
                <span>{post.readTime}</span>
                <span className="text-white/50">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <Reveal variant="up">
            <div className="relative h-[260px] md:h-[420px] rounded-card overflow-hidden shadow-card">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 820px) 100vw, 820px"
              />
            </div>
          </Reveal>

          {/* Sections */}
          <div className="mt-12 space-y-10">
            {post.content.map((section, index) => (
              <Reveal key={index} variant="up">
                <section>
                  {section.heading && (
                    <>
                      <h2 className="font-display text-[22px] md:text-[27px] leading-snug text-ink">
                        {section.heading}
                      </h2>
                      <div className="mt-3 w-[50px] border-t border-primary-600" />
                    </>
                  )}
                  <div className={section.heading ? 'mt-5 space-y-4' : 'space-y-4'}>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="text-[15px] md:text-base leading-relaxed text-body">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.list && (
                    <ul className="mt-5 space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          {/* Author + back link */}
          <Reveal variant="up">
            <div className="mt-14 pt-8 border-t border-primary-50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-800 font-semibold text-sm">
                    {post.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink">{post.author}</p>
                  <p className="text-sm text-body/70">Contributor, Axiom Rise</p>
                </div>
              </div>
              <Link
                href="/blog"
                className="inline-block bg-white text-primary-800 border border-primary-800 font-sans text-[11px] uppercase tracking-[1.5px] rounded-card px-5 py-3 transition-colors duration-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white"
              >
                ← Back to All Articles
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="down">
            <h2 className="font-display text-[26px] md:text-[39px] leading-tight text-ink text-center">
              Related Articles
            </h2>
            <div className="mt-4 mx-auto w-[50px] border-t border-primary-600" />
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {related.map((rel, index) => (
              <Reveal key={rel.slug} variant="up" delay={index * 100}>
                <article className="group bg-white rounded-card shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <Link href={`/blog/${rel.slug}`} className="block relative h-52 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
                    <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs tracking-[1px] uppercase">
                      {rel.category}
                    </span>
                  </Link>
                  <div className="p-6">
                    <h3 className="font-display text-lg leading-[28px] text-ink line-clamp-2 group-hover:text-primary-800 transition-colors duration-300">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body line-clamp-2">{rel.excerpt}</p>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="mt-4 inline-block bg-white text-primary-800 border border-primary-800 font-sans text-[10px] uppercase tracking-[1.5px] rounded-card px-4 py-2.5 transition-colors duration-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BlogCTASection />
    </div>
  )
}
