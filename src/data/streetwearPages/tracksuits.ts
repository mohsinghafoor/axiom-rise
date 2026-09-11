import type { Faq } from '@/data/faqs'
import type { StreetwearPageContent } from './types'

const tracksuitsFaqs: Faq[] = [
  {
    question: 'Do you offer sampling before a bulk order?',
    answer:
      'Yes. We never start bulk production without your approval. We send a physical Golden Sample — both top and bottom — for you to wash, wear, and approve before we cut the bulk fabric.',
  },
  {
    question: 'What is the best fabric for a luxury streetwear matching set?',
    answer:
      'For a premium streetwear feel, we recommend Heavyweight French Terry (400 GSM) or Anti-Pilling Fleece. These provide the structure and weight that high-end customers associate with quality.',
  },
  {
    question: 'What printing techniques do you offer?',
    answer:
      'We specialize in Sublimation (for all-over retro prints), Water-based Screen Printing, Puff Print, and High-Density transfers that will not crack across seams.',
  },
  {
    question: 'What embroidery techniques do you offer?',
    answer:
      'We offer high-stitch-count 3D Puff Embroidery, Flat Embroidery, and Chenille Patches (ideal for varsity-style branding), backed with premium stabilizers to prevent the fabric from puckering.',
  },
  {
    question: 'Can you manufacture custom size charts (e.g. Tall or Plus Size)?',
    answer:
      'Absolutely. We can use your specific size chart or help you grade our standard block to fit your target demographic perfectly, including extended inseams for Tall sizing.',
  },
  {
    question: 'Are you responsible for customs and import duties?',
    answer:
      'Yes. When you choose our DDP (Delivered Duty Paid) shipping option to the USA, UK, or EU, we handle all customs clearance, paperwork, and import duties.',
  },
  {
    question: 'What quality control steps do you take?',
    answer:
      'We utilise a strict multi-stage AQL 2.5 QC process. For tracksuits, this includes pull-testing zippers, verifying crotch-gusset stitching, and ensuring dye-lot synchronization between the jacket and pants.',
  },
]

export const tracksuitsContent: StreetwearPageContent = {
  metaTitle: 'Custom Tracksuit & Matching Set Manufacturer | Axiom Rise',
  metaDescription:
    'Custom tracksuits and matching sets with ribbing elasticity, hardware and dye lots synchronised across top and bottom, tested as complete sets before shipping.',
  hero: {
    h1: 'Custom Matching Sets Built to Help You Scale Globally Without Quality Surprises or Cashflow Risk',
    sub:
      'From Matching Co-Ord Sets to Technical Training Gear; Every Order Starts With a Physical Sample You Approve Before Bulk Production Is Confirmed.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/sports-wear.webp',
    imageAlt: 'Custom tracksuit and matching set manufacturing',
  },
  intro: {
    h2: 'Get Premium Private Label Apparel at Factory-Direct Prices. Low MOQ, Free Global Sample Shipping and Consistent Quality Across Every Unit.',
    paragraphs: [
      'Tracksuits sell as complete outfits, but when your jacket zips smoothly and your pants drawstring breaks in week two, customers buy the top and return the bottom, killing your bundled average order value. These component failures do not just hurt individual sales; they destroy your ability to market matching sets and force customers to buy separates at lower margins. You do not need siloed manufacturing; you need a cut and sew facility that batch-produces components together, synchronizes hardware sourcing, and tests complete sets as single units before shipping.',
      'We engineer ribbing elasticity to match across cuffs, hems, and waistbands, preventing the visual mismatch of fresh jacket cuffs paired with stretched-out pant ankles after ten wears. Our gender-specific pattern libraries mean women’s sets are not just scaled-down men’s cuts; they are engineered for hip-to-waist ratios, inseam proportions, and shoulder-width differences. Landed cost calculators show you final per-set pricing including duties and freight, so you price competitively without guessing margins.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/services/supply-chain.webp',
    imageAlt: 'Synchronised supply chain for matching tracksuit tops and bottoms',
  },
  capabilities: {
    heading: 'Our Manufacturing Capabilities: From Retro-Sport to High-Fashion',
    bandImage: '/images/services/global-export.webp',
    items: [
      {
        title: 'Full-Zip Classics',
        description: 'Poly-tricot funnel necks with raglan sleeves and ribbed cuffs for team aesthetics.',
        image: '/images/hero/sports-wear.webp',
      },
      {
        title: 'Slim Jogger Sets',
        description:
          'Four-way stretch tapered fits featuring zippered side pockets for a streamlined gym silhouette.',
        image: '/images/hero/fitness.webp',
      },
      {
        title: 'Oversized Sets',
        description:
          'Heavyweight 400 GSM fleece featuring drop shoulders and thick encased elastic waistbands.',
        image: '/images/hero/sweatshirt.webp',
      },
      {
        title: 'Performance Training Sets',
        description:
          'Breathable mesh-lined wind-resistant shells featuring articulated knees and reflective graphics.',
        image: '/images/hero/hoodie.webp',
      },
      {
        title: 'Velour Luxe Sets',
        description: 'Plush deep-pile velour featuring intricate embroidery applique and rhinestone detailing.',
        image: '/images/products/rashguard.webp',
      },
      {
        title: 'Colorblock Editions',
        description:
          'Cut-and-sew contrasting fabric panels with strict color-fastness testing to prevent bleeding.',
        image: '/images/products/uniform.webp',
      },
    ],
  },
  fabric: {
    heading: 'Fabric-First Engineering: The Anatomy of a Premium Tracksuit',
    items: [
      {
        title: 'Material Innovations',
        description:
          'Choose from our global fabric library. We specialize in Heavyweight Fleece (350-500 GSM) for structure, French Terry for trans-seasonal comfort, and Nylon Tricot for that classic retro-sport aesthetic. We also offer Moisture-Wicking Tech Blends for performance lines.',
      },
      {
        title: 'Silhouette Engineering',
        description:
          'Fit is everything. We offer specific cuts: Slim-Fit Athleisure for the gym, Relaxed Tapered for lifestyle, and Boxy Oversized for the luxury streetwear market. We use digital Pattern Grading to ensure consistent sizing from XS to 5XL.',
      },
      {
        title: 'Custom Hardware & Finish',
        description:
          'Details sell the garment. Customize your sets with YKK Nylon Coil Zippers, custom engraved metal pullers, and weighted aglets. We reinforce stress points with Crotch Gussets and bar-tack stitching for maximum mobility and durability.',
      },
    ],
  },
  why: {
    heading: 'Why Global Brands Partner With Axiom Rise For Tracksuit Production',
    items: [
      {
        title: 'End-to-End FPP',
        description:
          'We are not just a sewing floor. We handle knitting, dyeing, cutting, sewing, and packaging. This vertical integration ensures AQL 2.5 Quality Standards are met at every stage.',
        icon: 'precision',
      },
      {
        title: 'Professional Production Team',
        description:
          'Our expert pattern makers and quality auditors specialize in complex sportswear construction. We ensure your half-zip tracksuit styles have perfectly aligned zippers and seams.',
        icon: 'team',
      },
      {
        title: 'Low MOQ Flexibility',
        description:
          'Start small, scale big. Our Low MOQ starts at 10 sets per design, making us the ideal partner for startups and limited-edition capsule drops testing the market.',
        icon: 'moq',
      },
      {
        title: 'Global Logistics Network',
        description:
          'We ship where you sell. Whether you need delivery in the UK or fulfilment in the USA, our logistics partners ensure on-time delivery with full tracking.',
        icon: 'globe',
      },
    ],
    image: '/images/why/customize.avif',
    imageAlt: 'Customising a matching tracksuit set to a brand specification',
  },
  processTitle: 'Here’s Our Manufacturing Process',
  samples: {
    title: 'Get Your Pre-Production Sample With Free Global Shipping',
    description: [
      'You bring the design vision. We send you a physical Golden Sample at production cost, just cover the sample, and we handle the shipping. Every order starts with a sample you approve before we cut a single unit of your bulk run. No surprise fabric swaps. No colorway or construction substitutions without written approval. Pattern grading, fabric sourcing, and sample creation all handled under one roof by our dedicated production team.',
      'Whether you are launching a matching co-ord set, scaling a team uniform programme, or testing a new silhouette before full production, we work as your direct manufacturing partner. Free global shipping on all sample orders. No intermediaries. No markups. Fixed 21-day lead times. Your design. Your sample. Your brand.',
    ],
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/custom-manufacturer.webp',
  },
  faqs: tracksuitsFaqs,
}
