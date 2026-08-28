import type { Faq } from '@/data/faqs'
import type { StreetwearPageContent } from './types'

const tshirtsFaqs: Faq[] = [
  {
    question: 'Do you offer sampling before a bulk order?',
    answer:
      'Yes. We never start bulk production without your approval. We send a physical Golden Sample for you to wash, wear, and approve before we cut the bulk fabric.',
  },
  {
    question: 'What printing techniques do you offer?',
    answer:
      'We offer extensive in-house printing, including Direct-to-Garment (DTG), Water-Based Screen Printing, Plastisol, Discharge inks (for a vintage feel), and 3D Puff Print.',
  },
  {
    question: 'What embroidery techniques do you offer?',
    answer:
      'We provide high-stitch-count Flat Embroidery, 3D Puff Embroidery, Chenille patches, and Appliqué, all backed with premium stabilizers to prevent shirt puckering.',
  },
  {
    question: 'Are you responsible for customs and import duties?',
    answer:
      'Yes. When you choose our DDP (Delivered Duty Paid) shipping option to the USA, UK, or EU, we handle all customs clearance, paperwork, and import duties.',
  },
  {
    question: 'What quality control steps do you take?',
    answer:
      'We utilise a strict multi-stage AQL 2.5 QC process. For t-shirts, this includes pull-testing neck ribbing, verifying shoulder-to-shoulder taping integrity, and wash-testing for shrinkage and dye migration.',
  },
  {
    question: 'What certifications do you hold?',
    answer:
      'Our manufacturing facilities are SMETA audited and ISO 9001 certified. We strictly partner with GRS and GOTS-compliant mills and use OEKO-TEX certified, skin-safe dyes.',
  },
  {
    question: 'How can I track the progress of my order?',
    answer:
      'You are assigned a dedicated account manager who provides real-time milestone updates. We offer radical transparency, including video updates from the cutting and printing floors.',
  },
  {
    question: 'Do you provide pattern-making services?',
    answer:
      'Yes. If you do not have a Tech Pack, our internal design team provides full pattern drafting and grading services to ensure your S, M, and XL fits are mathematically perfect.',
  },
  {
    question: 'How do you manage factory waste and carbon footprint?',
    answer:
      'We utilise a zero-wastewater system for our dyeing processes and employ CNC automated fabric cutters to maximise fabric yield, significantly minimising textile waste on the cutting floor.',
  },
  {
    question: 'Do you offer eco-friendly or recycled fabric options?',
    answer:
      'Absolutely. We offer GOTS-certified Organic Cotton, Bamboo blends, and RPET (Recycled Polyester) options for brands prioritizing sustainable and ethical storytelling.',
  },
]

export const tshirtsContent: StreetwearPageContent = {
  metaTitle: 'Custom T-Shirt Manufacturer | Axiom Rise',
  metaDescription:
    'Custom cut-and-sew t-shirts in combed ring-spun cotton from 180 to 300 GSM, side-seamed construction and AQL 2.5 quality control, with a Golden Sample before bulk.',
  hero: {
    h1: 'Scale Your Apparel Brand With a T-Shirt Manufacturer Built for Growth, Not Guesswork',
    sub:
      'From Graphic Tees to Oversized Heavyweight Blanks; Every Order Starts With a Golden Sample You Approve Before a Single Unit Goes Into Bulk.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/tshirt.webp',
    imageAlt: 'Custom t-shirt manufacturing',
  },
  intro: {
    h2: 'Why Are Brands Switching to Us for Their 2026 T-Shirt Collections? Lower Costs, Tighter QC and Lead Times That Never Slip',
    paragraphs: [
      'Your audience judges your brand in seconds, and your t-shirt quality decides whether they ever buy again. In streetwear, one bad drop means dead stock, refunds, and lost trust. Wrong GSM. Cheap cotton. Prints that crack. Brokers who figure it out later. You do not need excuses; you need a direct manufacturing partner that understands fabric science, fit accuracy, and drop-based production, so every release feels intentional, premium, and repeat-worthy.',
      'The right apparel factory does not just sew garments; it protects your brand image, keeps launches on schedule, and helps you build collections customers actually line up for. We combine AQL 2.5 Quality Control with flexible production tiers — whether you need 32-singles combed ring-spun cotton for a luxury line or heavyweight carded cotton for vintage boxy drops. We handle the logistics via DDP (Delivered Duty Paid) Shipping. You pay one final price, receive floor-ready stock, and keep your cash flow healthy.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/services/custom-design.webp',
    imageAlt: 'T-shirt pattern drafting and fabric selection',
  },
  capabilities: {
    heading: 'Our T-Shirt Manufacturing Lines',
    bandImage: '/images/services/supply-chain.webp',
    items: [
      {
        title: 'Crew Neck T-Shirts',
        description: 'Preshrunk jersey featuring 1x1 ribbed collars for ultimate fit retention.',
        image: '/images/hero/tshirt.webp',
      },
      {
        title: 'Oversized T-Shirts',
        description:
          'Heavyweight 10oz drop-shoulder boxy fits, engineered as the perfect printing canvas.',
        image: '/images/hero/sweatshirt.webp',
      },
      {
        title: 'V-Neck T-Shirts',
        description: 'Elevated essentials crafted from Tri-Blend or Modal fabrics for superior drape.',
        image: '/images/hero/hoodie.webp',
      },
      {
        title: 'Longline T-Shirts',
        description: 'Extended curved hems with bar-tack reinforced side-split vents for layering.',
        image: '/images/hero/fitness.webp',
      },
      {
        title: 'Sleeveless T-Shirts',
        description:
          'Raw-edge muscle cuts using moisture-wicking fabric optimized for fitness capsules.',
        image: '/images/products/rashguard.webp',
      },
      {
        title: 'Henley T-Shirts',
        description: 'Waffle knit or slub jersey featuring functional 3-button utility plackets.',
        image: '/images/products/uniform.webp',
      },
    ],
  },
  fabric: {
    heading: 'The Anatomy of a Premium Tee: Fabric Science & Finishing',
    lead: 'Stop selling scratchy generic tees. We engineer fabrics that justify premium retail price points.',
    items: [
      {
        title: 'Fabric Engineering (Singles & Weight)',
        description:
          'We specialize in 100% Combed Ring-Spun Cotton and 32 Singles yarn for the ultimate smooth printing surface. Choose from Lightweight Jersey (180-220 GSM) or trend-heavy Heavyweight Cotton (240-300 GSM) for that boxy streetwear drape.',
      },
      {
        title: 'Specialty Dye House',
        description:
          'Capture the “Vintage” aesthetic. Our dye house offers Garment Dyeing, Pigment Dyes, and Mineral Washes that eliminate shrinkage and provide a soft, broken-in feel with sun-faded effects. We utilize Eco-Triblend dyes for sustainable collections.',
      },
      {
        title: 'Construction & Durability',
        description:
          'Built to last. We utilize Side-Seamed Construction (never tubular) for a tailored fit. Features include Double-Needle Hems, reinforced shoulder taping, and tear-away tags for easy private labeling.',
      },
    ],
  },
  why: {
    heading: 'Why Global Brands Switch To Axiom Rise For T-Shirt Production',
    items: [
      {
        title: 'Internal Production Control',
        description:
          'We are not a middleman. As a vertical t-shirt garment manufacturer, we own the knitting, cutting, and sewing floors. This allows us to maintain AQL 2.5 Quality Control standards on every batch.',
        icon: 'precision',
      },
      {
        title: 'Talented Design & Tech Team',
        description:
          'Our internal pattern makers and “Design Lab” experts ensure your vision is translated correctly. From Tech Pack creation to color separation for screen printing, we handle the technical heavy lifting.',
        icon: 'techpack',
      },
      {
        title: 'Reasonably Priced MOQs',
        description:
          'Scale without stress. Our Low MOQ starts at 10 pieces per design, making us the ideal custom t-shirt manufacturer for startups testing new graphics or established brands running limited drops.',
        icon: 'moq',
      },
      {
        title: 'Worldwide DDP Shipping',
        description:
          'We guarantee safe, on-time delivery using premium carriers. Our DDP service eliminates surprise tax bills upon arrival, ensuring your margins stay healthy.',
        icon: 'globe',
      },
    ],
    image: '/images/why/moq.webp',
    imageAlt: 'Axiom Rise custom t-shirt manufacturer',
  },
  processTitle: 'Here’s Our Manufacturing Process',
  samples: {
    title: 'Get Your T-Shirt Sample With Free Global Shipping',
    description: [
      'You bring the design vision. We send you a physical Golden Sample at production cost — just cover the sample, and we handle the shipping. Every t-shirt order starts with a sample you approve before we cut a single unit of your bulk run. No surprise fabric swaps. No GSM or colorway substitutions without written approval. Pattern grading, fabric sourcing, and sample creation all handled under one roof by our dedicated production team.',
      'Whether you’re launching a graphic tee drop, scaling a blank t-shirt line, or testing a new oversized silhouette before committing to bulk, we work as your direct manufacturing partner. Free global shipping on all sample orders. No intermediaries. No markups. Fixed 21-day lead times. Your design. Your sample. Your brand.',
    ],
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/services/manufacturing-excellence.webp',
  },
  faqs: tshirtsFaqs,
}
