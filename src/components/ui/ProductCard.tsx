import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  slug: string
  href?: string
  /** Overrides the default pill label, e.g. "Explore Jacket Manufacturing". */
  ctaLabel?: string
}

export default function ProductCard({
  title,
  description,
  image,
  slug,
  href,
  ctaLabel = 'Discover the Range',
}: ProductCardProps) {
  return (
    <Link
      href={href ?? `/products/${slug}`}
      className="group block h-full overflow-hidden rounded-card bg-primary-800 shadow-card"
    >
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary-600/0 transition-colors duration-[600ms] group-hover:bg-primary-600/10" />
        <span className="absolute left-4 top-4 rounded-full bg-primary-800/90 px-3 py-1 text-[10px] uppercase tracking-[1px] text-white">
          Axiom Rise
        </span>
      </div>

      <div className="p-6 text-center">
        <h3 className="font-display text-[20px] leading-snug text-white md:text-[24px]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
        <span className="btn-pill mt-5 group-hover:border-white group-hover:bg-white group-hover:text-primary-800">
          {ctaLabel}
        </span>
      </div>
    </Link>
  )
}
