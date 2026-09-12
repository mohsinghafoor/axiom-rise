import type { Faq } from '@/data/faqs'
import type { JacketPageContent } from './types'

const leatherFaqs: Faq[] = [
  {
    question: 'What leather grade will my jacket actually be made from?',
    answer:
      'We’ll state it explicitly on your tech pack: full-grain, top-grain, or genuine leather, along with the trade-offs of each, before you approve a sample.',
  },
  {
    question: 'How do you keep hide inconsistencies out of a bulk order?',
    answer:
      'Every hide is manually graded before cutting. Panels with visible scarring or dye-lot inconsistency are pulled and replaced rather than bundled into your run.',
  },
  {
    question: 'Can you embroider directly onto leather?',
    answer:
      'Yes, using leather-specific needles and heavy backing stabilizers to prevent tearing, though we generally recommend UV laser engraving or embossing for cleaner, more durable branding on hide.',
  },
  {
    question: 'Do you offer a vegan leather alternative?',
    answer:
      'Yes, premium PU leather built to the same construction and finishing standard as our genuine hide jackets, for brands prioritizing animal welfare.',
  },
  {
    question: 'What’s your MOQ for leather jackets?',
    answer:
      '10 units per style and colourway — the same standard we run across every jacket category, though material cost per unit is higher given the cost of hide.',
  },
  {
    question: 'Is chrome-tanned or vegetable-tanned leather better?',
    answer:
      'Neither is universally better. Chrome tanning suits a soft, consistently colored, fashion-forward build. Vegetable tanning suits a firmer, more structured piece meant to develop a visible patina over time.',
  },
  {
    question: 'How do I know the color will match across a large order?',
    answer:
      'We use lab-dip approval and Pantone referencing before bulk tanning, and manually grade panels for dye-lot consistency before cutting.',
  },
]

export const leatherContent: JacketPageContent = {
  metaTitle: 'Custom Leather Jacket Manufacturer | Axiom Rise',
  metaDescription:
    'Custom leather jackets with the hide grade and tanning method stated on your tech pack, and every hide manually graded before cutting.',
  hero: {
    h1: 'Custom Leather Jackets: Graded Hides, Disclosed Tanning, No Surprises in the Batch',
    sub: 'We grade every hide before it’s cut and disclose the tanning method on your tech pack.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/leather-jacket.webp',
    imageAlt: 'Custom leather jacket manufacturing',
  },
  intro: {
    h2: 'The single biggest risk in a bulk leather order isn’t the design, it’s inconsistency.',
    paragraphs: [
      [
        {
          text:
            'One jacket with a visible scar panel, another slightly off in color, a third that cracks at the elbow within a season. The word “leather” covers an enormous range of quality, and a supplier who won’t specify the grade is leaving room to substitute a cheaper hide mid-order without technically lying to you. Full-grain retains the hide’s natural surface and is the most durable grade. Top-grain is sanded for a more uniform finish, slightly less durable. Genuine leather, despite sounding premium, is actually the least durable of the three, a naming quirk that catches first-time buyers off guard.',
        },
      ],
      [
        {
          text:
            'We state the exact grade and tanning method on your tech pack before sampling, and every hide is ',
        },
        { text: 'manually graded', href: '/services/pattern-making-and-grading' },
        {
          text:
            ' before cutting. A visible scar or inconsistent dye lot gets pulled and replaced, not bundled in to hit a quantity target.',
        },
      ],
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/why/quality.webp',
    imageAlt: 'Manual hide grading before cutting',
  },
  styles: {
    heading: 'Leather Styles Built for Different Price Points and Positioning',
    bandImage: '/images/process/planning.webp',
    items: [
      {
        title: 'Classic Aviator Jackets',
        description:
          'Full-grain cowhide bodies with ribbed cuffs and shearling collars, for brands referencing genuine flight-jacket heritage.',
        image: '/images/hero/leather-jacket.webp',
      },
      {
        title: 'Asymmetrical Moto Jackets',
        description:
          'Premium lambskin with diagonal zippers and belted waists, for fashion labels chasing a sharper, tailored silhouette.',
        image: '/images/products/jackets.webp',
      },
      {
        title: 'Minimalist Corporate Leather',
        description:
          'Clean semi-aniline finish with smart paneling, for professional environments where leather needs to read as polished.',
        image: '/images/products/uniform.webp',
      },
      {
        title: 'Fully Bespoke Leather Development',
        description:
          'Total control over hide grade, tanning, and hardware for brands building a signature piece.',
        image: '/images/services/custom-design.webp',
      },
    ],
  },
  why: {
    heading: 'Why Premium and Private Label Brands Source Leather With Us',
    items: [
      {
        title: 'Hide Grade Stated, Not Implied',
        description:
          'You know exactly whether you’re paying for full-grain, top-grain, or genuine leather before you approve a sample.',
        icon: 'document',
      },
      {
        title: 'Manual Grading Before Every Cut',
        description:
          'Scarred or inconsistent hide panels are pulled before cutting, not discovered by your customer after delivery.',
        icon: 'eye',
      },
      {
        title: 'Tanning Method Disclosed and Explained',
        description:
          'Chrome or vegetable tanning changes the feel, the smell, and the environmental footprint. We tell you which you’re getting and why.',
        icon: 'tag',
      },
      {
        title: 'A Vegan Leather Option That Isn’t an Afterthought',
        description:
          'Premium PU alternatives are built to the same construction standard as our genuine hide jackets, not a lower-effort substitute line.',
        icon: 'check',
      },
    ],
    image: '/images/why/unique.webp',
    imageAlt: 'Axiom Rise leather jacket manufacturer',
  },
  deepDives: [
    {
      heading: 'Full-Grain vs. Top-Grain vs. Genuine Leather',
      bullets: [
        {
          label: 'Full-grain',
          description:
            'The hide’s natural top layer, markings and all. Most durable grade, develops a patina with age.',
        },
        {
          label: 'Top-grain',
          description:
            'Sanded and buffed for a more uniform, blemish-free look. Slightly less durable, more consistent across a batch.',
        },
        {
          label: 'Genuine leather',
          description:
            'Cut from the layers beneath the top grain. Real leather, but the least durable of the three despite the premium-sounding name.',
        },
      ],
      close: [
        {
          text:
            'We confirm in writing which grade your jacket uses and why it fits your price point.',
        },
      ],
      ctaLabel: 'Make An Enquiry',
      image: '/images/services/manufacturing-excellence.webp',
      imageAlt: 'Full-grain, top-grain and genuine leather hides',
    },
    {
      heading: 'Chrome Tanning vs. Vegetable Tanning',
      bullets: [
        {
          label: 'Chrome tanning',
          description:
            'Chromium salts, faster and more affordable, produces the soft, consistently colored leather most people picture. Used on most commercial leather goods.',
        },
        {
          label: 'Vegetable tanning',
          description: [
            {
              text:
                'natural tree-bark tannins, takes weeks not days, produces a firmer hide that develops a visible patina. Generally the more eco-conscious process, and the kind of practice assessed under standards like the ',
            },
            {
              text: 'Leather Working Group’s manufacturer standard',
              href: 'https://www.leatherworkinggroup.com/certification/leather-manufacturer-standard/',
            },
            { text: '.' },
          ],
        },
      ],
      close: [
        {
          text:
            'Chrome suits a soft, fashion-forward moto build; vegetable suits a structured, heritage piece meant to age visibly. The same graded-hide approach carries over to the leather sleeves on our ',
        },
        { text: 'Varsity Jackets', href: '/products/varsity-jacket' },
        { text: '.' },
      ],
      ctaLabel: 'Inquire Now',
      image: '/images/services/supply-chain.webp',
      imageAlt: 'Chrome and vegetable tanning processes',
    },
  ],
  samples: {
    title: 'Get Your Leather Jacket Sample With Free Global Shipping',
    description:
      'You bring the hide grade, hardware preference, and design brief. We send a physical Golden Sample at production cost, shipping covered free, with the hide grade and tanning method confirmed in writing. No material or hardware substitutions without your approval, and a fixed 21-day lead time once you sign off.',
    ctaLabel: 'Request Your Sample + Quote',
    image: '/images/process/sample.webp',
  },
  faqs: leatherFaqs,
}
