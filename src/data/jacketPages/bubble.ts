import type { Faq } from '@/data/faqs'
import type { JacketPageContent } from './types'

const bubbleFaqs: Faq[] = [
  {
    question: 'What’s actually different between your bubble jacket and puffer jacket builds?',
    answer:
      'Silhouette and baffle shaping. Bubble jackets are cut shorter and rounder for an urban look; puffer jackets run longer and straighter for maximum technical warmth. Both use baffle construction, but the pattern and typical fill weight differ.',
  },
  {
    question: 'How do you stop fill from clumping unevenly inside the baffles?',
    answer:
      'Baffle-box construction keeps each panel sealed and sized to hold a specific fill weight, which we weigh during production rather than estimating per batch.',
  },
  {
    question: 'What fill power do you offer?',
    answer:
      '600 fill power as a solid mid-range default, with 700 to 800 fill power available for premium builds. We’ll recommend based on your target warmth and price point.',
  },
  {
    question: 'Do you offer synthetic fill instead of down?',
    answer:
      'Yes, synthetic microfiber fill is available and commonly chosen for brands prioritizing a vegan or animal-free supply chain.',
  },
  {
    question: 'What’s your MOQ for bubble jackets?',
    answer:
      '10 units per style and colourway — the same standard we run across every jacket category.',
  },
  {
    question: 'Will my reorder look identical to my first order?',
    answer:
      'That’s the point of the Golden Sample. Reorders are checked against its silhouette and fill weight, not just re-quoted from a generic spec sheet.',
  },
  {
    question: 'Can you build a cropped or oversized fit specifically?',
    answer:
      'Yes, both are common requests for streetwear bubble jackets. Confirm the exact proportions in your tech pack or reference garment and our pattern team will grade accordingly.',
  },
]

export const bubbleContent: JacketPageContent = {
  metaTitle: 'Custom Bubble Jacket Manufacturer | Axiom Rise',
  metaDescription:
    'Custom bubble jackets in baffle-box construction with fill weighed per panel and the silhouette matched to your Golden Sample, not just its total weight.',
  hero: {
    h1: 'Custom Bubble Jackets: Short, Round, and Built So Every Unit Puffs Up the Same',
    sub:
      'If fill weight drifts between units, some jackets in the same order look noticeably flatter than others.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/leather-jacket.webp',
    imageAlt: 'Custom bubble jacket manufacturing',
  },
  intro: {
    h2: 'A bubble jacket’s whole visual identity depends on volume and shape holding consistent across a production run, and that’s the fastest way to lose a reorder if it slips.',
    paragraphs: [
      [
        {
          text:
            'A bubble jacket and a puffer jacket both use insulated baffle construction, but they target different silhouettes. A puffer runs longer and straighter for maximum warmth. A bubble jacket is cut shorter and rounder on purpose, so the baffle pattern and fill weight per panel are engineered differently before a single unit gets cut. See our ',
        },
        { text: 'puffer jacket page', href: '/products/puffer-jacket' },
        { text: ' for that build.' },
      ],
      [
        {
          text:
            'The biggest quality risk specific to bubble jackets is fill consistency between panels. Underfilled panels look flat; overfilled panels stress the seams. We weigh fill per panel and spot-check finished units against the Golden Sample’s silhouette as part of our standard ',
        },
        { text: 'QC and inspection process', href: '/services/quality-control' },
        {
          text:
            ', not just its weight, because two jackets can weigh the same and still look different.',
        },
      ],
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/process/production.webp',
    imageAlt: 'Baffle-box bubble jacket panels in production',
  },
  styles: {
    heading: 'Bubble Jacket Styles Built for the Urban Market',
    bandImage: '/images/process/consultation.webp',
    items: [
      {
        title: 'Cropped Streetwear Bubble Jackets',
        description:
          'Short-body, rounded baffle construction with a high-volume silhouette, for labels chasing the oversized-but-cropped proportion.',
        image: '/images/products/jackets.webp',
      },
      {
        title: 'Lightweight Layering Bubble Jackets',
        description:
          'Lower fill weight and a packable build, for city climates where the jacket layers under a coat.',
        image: '/images/hero/leather-jacket.webp',
      },
      {
        title: 'Corporate Bubble Jackets',
        description:
          'Matte-finish shell with a subtler baffle pattern and an embroidery zone, for brands wanting the silhouette without full volume.',
        image: '/images/products/uniform.webp',
      },
      {
        title: 'Bespoke Fill and Colorway Development',
        description:
          'Full control over fill type, baffle shape, and colorway for brands building a signature silhouette.',
        image: '/images/hero/varsity-jacket.webp',
      },
    ],
  },
  why: {
    heading: 'Why Streetwear and Lifestyle Brands Source Bubble Jackets With Us',
    items: [
      {
        title: 'Fill Weighed Per Panel, Not Just Per Garment',
        description:
          'A jacket can hit the right total weight and still look uneven if one baffle panel is underfilled. We check both.',
        icon: 'scale',
      },
      {
        title: 'Silhouette Matched to the Golden Sample, Not Just the Weight',
        description:
          'Reorders are checked against how the approved sample actually looks, not only what it weighs on a scale.',
        icon: 'eye',
      },
      {
        title: 'Baffle-Box Construction as Standard',
        description:
          'Sewn-through seams create visible cold lines and flat spots. Baffle-box construction keeps the fill lofted at every seam.',
        icon: 'box',
      },
      {
        title: 'RDS Down or Synthetic, Your Call, Disclosed Either Way',
        description:
          'We state exactly what’s inside the jacket on the tech pack, so your product description isn’t guessing either.',
        icon: 'tag',
      },
    ],
    image: '/images/why/customize.avif',
    imageAlt: 'Axiom Rise bubble jacket manufacturer',
  },
  deepDives: [
    {
      heading: 'Baffle-Box vs. Sewn-Through Construction',
      bullets: [
        {
          label: 'Sewn-through',
          description:
            'Shell stitched directly to lining at each baffle line. Cheap and fast, but creates a hard compression point with almost no insulation at every seam — the “cold lines” you can feel on a cheap jacket.',
        },
        {
          label: 'Baffle-box (our standard)',
          description:
            'a fabric “box wall” between shell and lining keeps fill lofted right up to the stitch line, instead of crushed flat.',
        },
      ],
      close: [
        {
          text:
            'Baffle-box costs more, which is why cheaper suppliers default to sewn-through without telling you. It’s also what gives the silhouette its full, rounded shape.',
        },
      ],
      ctaLabel: 'Make An Enquiry',
      image: '/images/services/supply-chain.webp',
      imageAlt: 'Baffle-box bubble jacket construction detail',
    },
    {
      heading: 'Fill Power, Explained Without the Jargon',
      lead: [
        {
          text:
            'Fill power measures how much loft a given weight of down produces. Higher means more warmth for less weight:',
        },
      ],
      bullets: [
        {
          label: '600 fill power',
          description: 'solid mid-range choice, full look without added weight',
        },
        {
          label: '700-800 fill power',
          description: 'premium territory, more warmth and loft for the same weight',
        },
        {
          label: 'Synthetic microfiber',
          description:
            'closes most of the performance gap with down, no animal-sourcing questions, slightly more fill weight needed for the same loft',
        },
      ],
      close: [{ text: 'RDS-certified down is available on request and disclosed on your tech pack.' }],
      ctaLabel: 'Inquire Now',
      image: '/images/services/private-label.webp',
      imageAlt: 'Down and synthetic fill weighed per panel',
    },
  ],
  samples: {
    title: 'Get Your Bubble Jacket Sample With Free Global Shipping',
    description:
      'You bring the fill type, colorway, and silhouette reference. We send a physical Golden Sample at production cost, shipped free worldwide, with the per-panel fill weight confirmed alongside it. No fill or color changes without your sign-off, and a fixed 21-day lead time once approved.',
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/services/global-export.webp',
  },
  faqs: bubbleFaqs,
}
