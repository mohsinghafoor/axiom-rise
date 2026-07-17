import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  slug: string
  href?: string
}

export default function ProductCard({ title, description, image, slug, href }: ProductCardProps) {
  return (
    <Link
      href={href ?? `/products/${slug}`}
      className="group block h-full rounded-card overflow-hidden shadow-card bg-primary-800"
    >
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-[600ms]" />
        <span className="absolute top-4 left-4 bg-primary-800/90 text-white text-[10px] uppercase tracking-[1px] px-3 py-1 rounded-full">
          Axiom Rise
        </span>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-display text-[20px] md:text-[24px] leading-snug text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {description}
        </p>
        <span className="inline-block mt-5 bg-primary-600 text-white font-sans text-[11px] uppercase tracking-[2px] leading-none rounded-card px-5 py-3 transition-colors duration-300 group-hover:bg-primary-900">
          Discover the Range
        </span>
      </div>
    </Link>
  )
}
