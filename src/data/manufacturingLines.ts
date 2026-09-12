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
    slug: 'bags',
    label: 'Bags',
    shortName: 'Bag',
    description:
      'Cut-and-sew bags — heavyweight duck canvas totes, combed cotton shoppers and graded-hide leather, with load-rated handles and the material spec stated on your tech pack.',
    bandImage: 'https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?w=1920&h=1080&fit=crop',
    slugs: [
      'canvas-tote-bags',
      'cotton-tote-bags',
      'leather-bags',
    ],
  },
]

export const lineForSlug = (slug: string) =>
  manufacturingLines.find((line) => line.slugs.includes(slug))

export const lineBySlug = (slug: string) =>
  manufacturingLines.find((line) => line.slug === slug)
