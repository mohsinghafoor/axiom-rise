import type { Faq } from '@/data/faqs'
import type { JacketPageContent } from './types'

const pufferFaqs: Faq[] = [
  {
    question: 'What’s the real difference between a puffer and a bubble jacket build?',
    answer:
      'Silhouette and purpose. Puffer jackets run longer and straighter, engineered for genuine cold-weather performance. Bubble jackets are shorter and rounder, built for an urban silhouette first.',
  },
  {
    question: 'Are the seams actually welded, or just taped?',
    answer:
      'Depends on the build tier. Expedition-weight technical builds use welded seams as standard. More accessible price points use fully taped seams over a sewn construction — still sealed, at a lower cost. We’ll confirm which applies to your quote.',
  },
  {
    question: 'What fill power can you build to?',
    answer:
      'We source RDS-certified down up to premium fill-power ranges, and synthetic fill options at multiple weights. Tell us your target warmth and price point and we’ll recommend a spec.',
  },
  {
    question: 'Do you offer waterproof or storm-sealed zippers?',
    answer:
      'Yes, YKK Aquaguard and storm-flap-covered zipper options are available for expedition and worksite-rated builds.',
  },
  {
    question: 'What’s your MOQ for puffer jackets?',
    answer:
      '10 units per style and colourway — the same standard we run across every jacket category.',
  },
  {
    question: 'Can the hood be detachable or adjustable?',
    answer:
      'Yes, both are available. Confirm your preference at the tech pack stage since it affects the pattern and hardware spec.',
  },
  {
    question: 'How do you keep insulation from shifting after washing?',
    answer:
      'Baffle-box construction with quilted or box-stitched fill channels holds insulation in place through repeated washing, which we confirm on the Golden Sample before bulk production.',
  },
]

export const pufferContent: JacketPageContent = {
  metaTitle: 'Custom Puffer Jacket Manufacturer | Axiom Rise',
  metaDescription:
    'Custom puffer jackets built for genuine cold — welded or fully taped seams, storm-sealed hardware and a disclosed fill power confirmed before bulk production.',
  hero: {
    h1: 'Custom Puffer Jackets Built for Genuine Cold, Not Just Cold-Weather Styling',
    sub:
      'That means welded seams, storm-sealed hardware, and a fill spec actually rated for the climate it’s sold into.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/custom-manufacturer.webp',
    imageAlt: 'Custom puffer jacket manufacturing',
  },
  intro: {
    h2: 'A puffer jacket has one job a bubble jacket doesn’t: perform in real sub-zero conditions, not just look warm in a product photo.',
    paragraphs: [
      [
        {
          text:
            'A puffer and a bubble jacket share the same basic idea — insulated baffles trapping warm air — but they’re engineered for different outcomes. A bubble jacket targets a cropped, rounded, urban silhouette. A puffer runs longer and straighter, aimed at genuine cold-weather performance first. Need the rounder streetwear profile instead? That’s covered on our ',
        },
        { text: 'bubble jacket page', href: '/products/bubble-jacket' },
        { text: '.' },
      ],
      [
        {
          text:
            'The failure point specific to puffers is seam integrity in extreme cold. A standard sewn seam punches needle holes through the shell and lining, and in cold, windy conditions those holes become cold-air infiltration points even with excellent fill. We spec welded or fully taped seams on technical builds because a jacket that’s warm everywhere except the seam lines isn’t solving the problem it’s bought for.',
        },
      ],
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/process/consultation.webp',
    imageAlt: 'Insulated puffer jacket baffle construction',
  },
  styles: {
    heading: 'Puffer Styles Built for Real Cold-Weather Use Cases',
    bandImage: '/images/process/planning.webp',
    items: [
      {
        title: 'Expedition-Weight Puffers',
        description:
          'Heavyweight RDS down or high fill-power synthetic with welded seams and a storm-sealed hood, for genuinely sub-zero climates.',
        image: '/images/products/jackets.webp',
      },
      {
        title: 'City Commuter Puffers',
        description:
          'Slimmer, lighter fill for daily wear in cold but not extreme climates, prioritizing packability over maximum warmth.',
        image: '/images/hero/leather-jacket.webp',
      },
      {
        title: 'Corporate Gifting Puffers',
        description:
          'Matte-finish shells with hidden embroidery access pockets, for a premium gift piece that still performs in the cold.',
        image: '/images/hero/varsity-jacket.webp',
      },
      {
        title: 'Worksite-Rated Puffers',
        description:
          'Reinforced ripstop shell with heavy-duty zippers and abrasion-resistant panels at high-wear points, for outdoor trades.',
        image: '/images/products/uniform.webp',
      },
    ],
  },
  why: {
    heading: 'Why Outdoor and Corporate Buyers Source Puffers With Us',
    items: [
      {
        title: 'Seams Built for Where Cold Actually Gets In',
        description:
          'Welded or taped seams as standard on technical builds, not an upsell buried in the fine print.',
        icon: 'shield',
      },
      {
        title: 'A Fill Power Number You Can Put on Your Product Page',
        description:
          'We disclose the actual fill power and type, so your own marketing isn’t guessing either.',
        icon: 'document',
      },
      {
        title: 'Hardware Rated for the Conditions It’s Sold Into',
        description:
          'Storm flaps, adjustable hoods, and cold-rated zippers available for genuinely technical builds.',
        icon: 'cog',
      },
      {
        title: 'Golden Sample Consistency Across Every Reorder',
        description:
          'Whatever fill weight and silhouette you approve is the fixed benchmark for every unit that follows.',
        icon: 'check',
      },
    ],
    image: '/images/why/unique.webp',
    imageAlt: 'Axiom Rise puffer jacket manufacturer',
  },
  deepDives: [
    {
      heading: 'Welded Seams vs. Sewn Seams in Genuine Cold',
      bullets: [
        {
          label: 'Sewn seams',
          description:
            'A needle pierces both layers at regular intervals. Fine in mild weather; in cold, windy conditions those punctures become a measurable performance gap.',
        },
        {
          label: 'Welded seams',
          description: 'Heat and pressure bond the layers, eliminating needle holes entirely.',
        },
        {
          label: 'Fully taped seams',
          description:
            'Tape bonded over a sewn seam — a more affordable middle ground that still seals the puncture points.',
        },
      ],
      close: [
        {
          text:
            'We’ll confirm which fits your budget and target climate rather than defaulting to the cheapest option.',
        },
      ],
      ctaLabel: 'Make An Enquiry',
      image: '/images/services/quality-assurance.webp',
      imageAlt: 'Welded and taped seam construction on a puffer jacket',
    },
    {
      heading: 'RDS Down vs. Synthetic Fill',
      bullets: [
        {
          label: 'Genuine down',
          description:
            'The best warmth-to-weight ratio, standard on premium expedition-grade builds. RDS certification confirms it was sourced without live-plucking or force-feeding.',
        },
        {
          label: 'Synthetic microfiber fill',
          description:
            'Costs less, performs better when wet since it doesn’t clump like saturated down, and sidesteps animal-sourcing questions, at the cost of slightly more fill weight for the same warmth.',
        },
      ],
      close: [
        {
          text:
            'Neither is objectively better — they suit different price points and brand stories. We’ll walk through both against your target retail price.',
        },
      ],
      ctaLabel: 'Inquire Now',
      image: '/images/services/global-export.webp',
      imageAlt: 'RDS-certified down and synthetic puffer fill options',
    },
  ],
  samples: {
    title: 'Get Your Puffer Jacket Sample With Free Global Shipping',
    description:
      'You bring the fill type, seam preference, and hardware spec. We send a physical Golden Sample at production cost, shipped free worldwide, with the fill power and seam construction confirmed in writing. No fill or seam substitutions without your sign-off, and a fixed 21-day lead time once approved.',
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/process/delivery.webp',
  },
  faqs: pufferFaqs,
}
