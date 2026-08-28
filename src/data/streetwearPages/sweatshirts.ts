import type { Faq } from '@/data/faqs'
import type { StreetwearPageContent } from './types'

const sweatshirtsFaqs: Faq[] = [
  {
    question: 'What is the difference between French Terry and Fleece?',
    answer:
      'French Terry features loops on the interior for breathability and a premium drape, while Fleece is brushed (fuzzy) on the inside for maximum warmth and softness. We manufacture both based on your seasonal needs.',
  },
  {
    question: 'Can you manufacture heavyweight 500 GSM sweatshirts?',
    answer:
      'Yes. We specialize in heavyweight production. We can source or knit custom fabric weights from 300 GSM up to 600 GSM for that “luxury streetwear” feel.',
  },
  {
    question: 'What is your lead time for sampling and bulk production?',
    answer:
      'Sampling typically takes 2 to 3 weeks depending on complexity. Once your Golden Sample is signed off, bulk runs to a fixed 21-day lead time — 14 days production plus 7 days delivery — and we can discuss expedited handling for urgent drops.',
  },
  {
    question: 'Do you handle custom dyeing (Pantone matching)?',
    answer:
      'Yes. We offer lab dip services where we match your specific Pantone code to the fabric dye. We can also perform garment dyeing for a vintage, washed-out look.',
  },
  {
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer:
      'We support emerging brands with low MOQs starting at 10 pieces per design and colour. We can supply blank oversized sweatshirts or insert your private label tags to create a fully branded product.',
  },
  {
    question: 'How do you handle international shipping and customs?',
    answer:
      'We use major international carriers and sea freight consolidators. We offer DDP (Delivered Duty Paid) service, meaning we handle all customs paperwork and duties for you.',
  },
  {
    question: 'Do you offer organic or sustainable fabric options?',
    answer:
      'Absolutely. We offer GOTS-certified Organic Cotton and Recycled Polyester blends. We also use eco-friendly OEKO-TEX certified dyes to meet EU and US sustainability standards.',
  },
  {
    question: 'How much does a custom sweatshirt sample cost?',
    answer:
      'Sample cost depends on GSM weight, custom hardware, and printing complexity, and is fully credited toward your final bulk invoice. We cover the shipping.',
  },
]

export const sweatshirtsContent: StreetwearPageContent = {
  metaTitle: 'Custom Sweatshirt Manufacturer | Axiom Rise',
  metaDescription:
    'Custom sweatshirts in 320 to 600 GSM loopback, brushed and garment-dyed fleece with precision size grading from S to 3XL and a Golden Sample before bulk.',
  hero: {
    h1: 'Engineering Heavyweight Fleece Sweatshirts & High-Margin Essentials Without Production Delays',
    sub:
      'Private label & OEM/ODM partner for streetwear brands — create luxury streetwear collections without manufacturing headaches.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/sweatshirt.webp',
    imageAlt: 'Custom heavyweight fleece sweatshirt manufacturing',
  },
  intro: {
    h2: 'Struggling to Find a Sweatshirt Partner Who Actually Delivers What They Promise? Here’s the Partner Your Brand Has Been Looking For',
    paragraphs: [
      'Sweatshirts drive repeat purchases — until size Medium fits like Large and wholesale buyers reject shipments because your production doesn’t match approved samples. Shoulder seams that shift forward after washing. Fabrics that arrive softer in samples than bulk orders. Size charts that work for Small and Medium but fail at XL. One inconsistent batch doesn’t just delay your launch — it kills retailer trust, forces expensive rework, and drains cash before you’ve even restocked.',
      'We are a direct, sweatshop-free apparel factory built for brands that demand production accuracy, not apologies. We deliver 320–600 GSM Fleece Loopback, Brushed, or Garment-Dyed blanks with precision size grading (S-3XL) that scales proportionally across every silhouette. DDP Shipping covers production through delivery, so you forecast margins accurately and grow without chasing suppliers or gambling on bait-and-switch overseas consistency.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/services/private-label.webp',
    imageAlt: 'Sweatshirt size grading and private-label finishing',
  },
  capabilities: {
    heading: 'Our Sweatshirt Manufacturing Capabilities, Explore Our Creations',
    bandImage: '/images/services/quality-assurance.webp',
    items: [
      {
        title: 'Crewneck Sweatshirts',
        description:
          'Cross-grain construction and double-needle coverstitching to prevent vertical shrinkage.',
        image: '/images/hero/sweatshirt.webp',
      },
      {
        title: 'Oversized Sweatshirts',
        description:
          'Drop-shoulder patterns engineered with heavyweight fleece for perfect structural drape.',
        image: '/images/hero/hoodies.webp',
      },
      {
        title: 'Half-Zip & Quarter-Zip',
        description:
          'High-collared lifestyle silhouettes featuring 3-panel collar construction and metallic hardware.',
        image: '/images/hero/hoodie.webp',
      },
      {
        title: 'Cropped Sweatshirts',
        description: 'Fashion-forward women’s cuts featuring raw hems or 2x2 spandex ribbing.',
        image: '/images/hero/tshirt.webp',
      },
      {
        title: 'Sleeveless Sweatshirts',
        description: 'Deep-cut armholes with breathable French terry blends for summer drops.',
        image: '/images/products/rashguard.webp',
      },
      {
        title: 'Colorblock Sweatshirts',
        description:
          'Precision cut-and-sew paneling ensuring zero color bleeding during industrial washes.',
        image: '/images/products/uniform.webp',
      },
    ],
  },
  fabric: {
    heading: 'Fabric-First Engineering: The Foundation of Luxury Streetwear',
    lead:
      'Your brand is defined by the hand-feel of your fabric. We don’t just “make sweatshirts”; we engineer textiles.',
    items: [
      {
        title: 'Weight & GSM Mastery',
        description:
          'We categorize our production by weight to match your market position: Lightweight fabric (280 GSM) for summer layers, Midweight (350 GSM) for year-round retail, and Heavyweight Cross-Grain fabric (450-600 GSM).',
      },
      {
        title: 'Premium Knitting Techniques',
        description:
          'Our premium knitting techniques enhance your apparel’s quality. Crucially, we knit with a 100% cotton face yarn to provide an embellishment-ready, perfectly smooth surface for DTG and screen printing.',
      },
      {
        title: 'Advanced Dye & Wash House',
        description:
          'Achieve the vintage look that today’s buyers crave. We offer acid wash, stone wash, and sun fade techniques. We also supply PFD (Prepared for Dye) garments and utilize Pantone Exact Color Matching for perfect brand consistency.',
      },
    ],
  },
  why: {
    heading: 'Why Global Brands Partner With Axiom Rise For Sweatshirt Production',
    items: [
      {
        title: 'Radical Transparency',
        description:
          'We don’t hide our factory. We offer video-call walkthroughs and ethical compliance reports, ensuring your customers know their clothes are made ethically with fair wages.',
        icon: 'eye',
      },
      {
        title: 'Scalable MOQs',
        description:
          'From “Small Batch” drops of 10 pieces for startups to “Container Loads” for enterprise retailers. Our production lines flex to meet your demand without compromising quality.',
        icon: 'moq',
      },
      {
        title: 'Retail-Ready Finishing',
        description:
          'We provide full Private Label services: tear-away tags, custom woven neck labels, and retail finishing (folding and bagging). Your product arrives ready to ship to the customer.',
        icon: 'branding',
      },
      {
        title: 'In-House Printing Mastery',
        description:
          'DTG (Direct-to-Garment), screen printing, puff printing, and chenille embroidery are done under one roof. This ensures your logo placement is millimeter-perfect every time.',
        icon: 'stitch',
      },
    ],
    image: '/images/why/quality.webp',
    imageAlt: 'Axiom Rise custom sweatshirt manufacturer',
  },
  processTitle: 'Here’s Our Manufacturing Process',
  samples: {
    title: 'Get Your Sweatshirt Sample With Free Global Shipping',
    description: [
      'You bring the design vision. We send you a physical Golden Sample at production cost — just cover the sample, and we handle the shipping. Every sweatshirt order starts with a sample you approve before we cut a single unit of your bulk run. No surprise fabric swaps. No GSM substitutions without written approval. Pattern grading, fabric sourcing, and sample creation all handled under one roof by our dedicated production team.',
      'Whether you’re launching your first sweatshirt drop, scaling an existing line, or testing a new oversized silhouette before full production, we work as your direct manufacturing partner. Free global shipping on all sample orders. No intermediaries. No markups. Fixed 21-day lead times. Your design. Your sample. Your brand.',
    ],
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/custom-manufacturer.webp',
  },
  faqs: sweatshirtsFaqs,
}
