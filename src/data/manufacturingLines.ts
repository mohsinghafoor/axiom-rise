export interface ManufacturingLine {
  slug: string
  label: string
  shortName: string
  description: string
  bandImage: string
  slugs: string[]
}

export const manufacturingLines: ManufacturingLine[] = [
  {
    slug: 'jackets',
    label: 'Jackets',
    shortName: 'Jacket',
    description:
      'Structured outerwear — softshells, varsity and premium jackets built on verified fabric specs and taped-seam construction.',
    bandImage: '/images/hero/leather-jacket.webp',
    slugs: [
      'softshell-jacket',
      'bomber-jacket',
      'bubble-jacket',
      'puffer-jacket',
      'leather-jacket',
      'varsity-jacket',
    ],
  },
  {
    slug: 'streetwear',
    label: 'Streetwear',
    shortName: 'Streetwear',
    description:
      'Heavyweight streetwear staples — shorts, hoodies, tracksuits, tees and sweatshirts with the fabric, structure and fit premium brands demand.',
    bandImage: '/images/hero/sweatshirt.webp',
    slugs: [
      'shorts',
      'hoodies',
      'tracksuits',
      't-shirts',
      'sweatshirts',
    ],
  },
  {
    slug: 'activewear',
    label: 'Activewear & Sports',
    shortName: 'Activewear',
    description:
      'Performance-driven gear engineered for maximum durability during high-impact training and competition.',
    bandImage: '/images/hero/sports-wear.webp',
    slugs: [
      'fitness-clothing-manufacturer',
    ],
  },
  {
    slug: 'accessories',
    label: 'Accessories & Gear',
    shortName: 'Accessories',
    description:
      'Headwear, bags and finishing accessories that complete your collection under the same quality system.',
    bandImage: '/images/hero/shorts.webp',
    slugs: [
      'hat-manufacturers',
      'leather-bags-manufacturer',
      'backpack-manufacturer',
      'cap-manufacturer',
      'beanie-manufacturer',
      'scarf-manufacturer',
      'gloves-manufacturer',
      'socks-manufacturer',
      'belt-manufacturer',
      'wallet-manufacturer',
      'gym-bag-manufacturer',
    ],
  },
]

export const lineForSlug = (slug: string) =>
  manufacturingLines.find((line) => line.slugs.includes(slug))

export const lineBySlug = (slug: string) =>
  manufacturingLines.find((line) => line.slug === slug)
