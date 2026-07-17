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
    slug: 'outerwear',
    label: 'Outerwear Manufacturing',
    shortName: 'Outerwear',
    description:
      'Premium production for jackets, hoodies and sweatshirts demanding superior fabric, structure and fit.',
    bandImage: '/images/hero/leather-jacket.webp',
    slugs: [
      'jacket-manufacturer',
      'wholesale-varsity-jackets',
      'hoodies-manufacturer',
      'hoodies-supplier-vendors',
      'sweatshirt-manufacturers',
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
      'sportswear-manufacturer',
      'fitness-clothing-manufacturer',
      'wholesale-shorts',
      'martial-arts-clothing',
      'sports-uniform-manufacturer',
    ],
  },
  {
    slug: 'uniforms',
    label: 'Uniforms & Workwear',
    shortName: 'Uniforms',
    description:
      'Professional uniform programs with consistent sizing, colour-fastness and durability across every reorder.',
    bandImage: '/images/products/uniform.webp',
    slugs: [
      'uniform-manufacturers',
      'wholesale-scrub-vendors',
      'school-uniform-manufacturer',
      'corporate-uniform-manufacturer',
      'hospitality-uniform-manufacturer',
      'security-uniform-manufacturer',
      'chef-uniform-manufacturer',
    ],
  },
  {
    slug: 'essentials',
    label: 'Everyday Essentials',
    shortName: 'Essentials',
    description:
      'Core wardrobe staples produced in premium fabrics with full customisation on fit, colour and branding.',
    bandImage: '/images/hero/tshirt.webp',
    slugs: ['t-shirts-manufacturer', 'equestrian-clothing-manufacturer'],
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
