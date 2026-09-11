import type { Faq } from '@/data/faqs'
import type { StreetwearPageContent } from './types'

const hoodiesFaqs: Faq[] = [
  {
    question: 'What is the best fabric weight (GSM) for a luxury hoodie?',
    answer:
      'For a premium, “luxury streetwear” feel, we recommend a GSM between 450 and 600. This weight provides the structured, boxy silhouette that defines modern high-end brands.',
  },
  {
    question: 'Can you manufacture “Puff Print” hoodies?',
    answer:
      'Yes. We use high-density plastisol inks and heat-curing processes to create a durable, 3D raised effect that won’t crack after washing.',
  },
  {
    question: 'What is the difference between Cut & Sew and Blanks?',
    answer:
      'Cut and sew manufacturers like us create the garment from scratch, cutting the fabric to your specific measurements. Blanks are pre-made. We recommend Cut & Sew for brands wanting a unique fit.',
  },
  {
    question: 'Do you provide help with Tech Packs?',
    answer:
      'Yes. If you don’t have a Tech Pack, our internal design team can create one for you, including measurement charts and construction details, based on your sketches or reference photos.',
  },
  {
    question: 'What is your lead time for samples and bulk?',
    answer:
      'Sampling typically takes 2 to 3 weeks depending on complexity. Once your Golden Sample is signed off, bulk runs to a fixed 21-day lead time — 14 days production plus 7 days delivery — with heavier decoration packages confirmed at quoting.',
  },
  {
    question: 'Do you offer sustainable fabric options?',
    answer:
      'Yes. We offer 100% cotton hoodie options using Organic Cotton (GOTS) and Recycled Polyester blends for brands focusing on sustainability.',
  },
  {
    question: 'How do you handle shipping to the USA and Europe?',
    answer:
      'We utilise global logistics partners and Sea Freight. We offer DDP terms, meaning we handle all import duties and taxes, providing a seamless door-to-door experience.',
  },
]

export const hoodiesContent: StreetwearPageContent = {
  metaTitle: 'Custom Hoodie Manufacturer | Axiom Rise',
  metaDescription:
    'Custom cut-and-sew hoodies in 350 to 600 GSM heavyweight fleece, with pattern grading, private-label finishing and a Golden Sample you sign off before bulk.',
  hero: {
    h1: 'The Last Hoodies Factory Your Brand Will Ever Need, Even If You’re Just Starting',
    sub:
      'From Pullover to Full-Zip, Lightweight to 1000 GSM Heavyweight, Every Order Starts With a Golden Sample You Sign Off Before Bulk Production Begins.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/hoodies.webp',
    imageAlt: 'Custom heavyweight fleece hoodie manufacturing',
  },
  intro: {
    h2: 'Factory-Direct Pricing, Free Global Shipping & 21-Day Lead Times That Actually Hold',
    paragraphs: [
      'Your garment quality determines whether customers become collectors or write one-star reviews, and thin, generic fleece kills premium positioning in seconds. A customer pulls a hoodie from the box, feels the cheap hand-feel, and immediately questions your $80 price point. Returns spike. Refund requests flood your inbox. Most brokers promise “premium” but deliver blank-grade stock.',
      'You don’t need vague assurances; you need a manufacturing partner that engineers Heavyweight Fleece (400–600 GSM) with Cross-Grain Construction, precise Pattern Grading, and production systems built for brand longevity, not shortcuts. Our Custom Cut & Sew capabilities ensure architectural fits — oversized without being boxy, cropped without riding up. Meanwhile, DDP Shipping delivers one final landed cost, eliminating surprise duties, brokerage fees, and cash flow anxiety.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/services/custom-design.webp',
    imageAlt: 'Hoodie design and pattern grading at our custom design desk',
  },
  capabilities: {
    heading: 'Our Hoodie Manufacturing Lines',
    bandImage: '/images/services/manufacturing-excellence.webp',
    items: [
      {
        title: 'Pullover Hoodies',
        description:
          'Reinforced kangaroo pockets and 3-panel hood construction for premium private label programs.',
        image: '/images/hero/hoodie.webp',
      },
      {
        title: 'Oversized Hoodies',
        description:
          'Drop-shoulder construction engineered with heavyweight fleece to ensure structural drape.',
        image: '/images/hero/hoodies.webp',
      },
      {
        title: 'Zipper Hoodies',
        description: 'Premium YKK metal zippers and thermal linings catering to diverse market aesthetics.',
        image: '/images/hero/sweatshirt.webp',
      },
      {
        title: 'Cropped Hoodies',
        description: 'Raw-edge hems or thick ribbing, mathematically graded to hit the exact waistline.',
        image: '/images/hero/tshirt.webp',
      },
      {
        title: 'Sleeveless Hoodies',
        description:
          'Deep-cut armholes with reinforced binding and breathable fleece for fitness capsules.',
        image: '/images/hero/fitness.webp',
      },
      {
        title: 'Colour Block Hoodies',
        description:
          'Complex cut-and-sew multi-fabric construction with strict color-fastness testing to prevent bleeding.',
        image: '/images/services/private-label.webp',
      },
    ],
  },
  fabric: {
    heading: 'Fabric Science & Technical Specs You Must Know',
    lead:
      'Your brand’s reputation hangs on the fabric quality. We don’t just sew; we engineer textiles to your exact specifications.',
    items: [
      {
        title: 'Weight & GSM Mastery',
        description:
          'We categorize our production by tier: Standard Midweight (350 GSM) for commercial retail, and Ultra-Heavyweight (450–600 GSM) for the luxury streetwear market. We ensure minimal shrinkage and maximum structural integrity for that premium “stand-up” hood effect.',
      },
      {
        title: 'Weave Construction Types',
        description:
          'We manufacture French terry offering breathability, and brushed fleece (80/20 cotton-poly) for exceptional warmth. Our expertise in reverse-weave techniques and jersey-lined hoods helps your garments resist vertical shrinkage, maintaining a consistent fit.',
      },
      {
        title: 'Advanced Finishing & Hardware',
        description:
          'Details matter. We offer proprietary Pigment Dyeing, Acid Washing, and Vintage Fades. Elevate your garment with custom hardware options: Metal Aglets, heavy-gauge drawcords, nickel eyelets, and heavy-duty YKK Zippers.',
      },
    ],
  },
  why: {
    heading: 'Why Global Brands Trust Us as Their Manufacturing Authority',
    items: [
      {
        title: 'Manufacturing Precision',
        description:
          'We don’t just sew; we audit. Our multi-stage Quality Control ensures that every seam, print, and drawstring meets international AQL 2.5 standards before it leaves the factory.',
        icon: 'precision',
      },
      {
        title: 'Low MOQ Flexibility',
        description:
          'Launch your brand without overstocking. We offer Low Minimum Order Quantities (MOQs) starting at 10 pieces, allowing you to test new designs and scale winners fast.',
        icon: 'moq',
      },
      {
        title: 'Branding Customization',
        description:
          'We go beyond the garment. We provide custom woven neck labels, satin wash tags, branded hang-tags, and biodegradable poly-bags for a retail-ready unboxing experience.',
        icon: 'branding',
      },
      {
        title: 'Global Logistics',
        description:
          'We handle the headache of customs. With DDP (Delivered Duty Paid) shipping, we manage freight forwarding, duties, and clearance. Your goods arrive at your warehouse ready to sell.',
        icon: 'globe',
      },
    ],
    image: '/images/why/unique.webp',
    imageAlt: 'Custom hoodie detailing that keeps a brand’s look unique',
  },
  processTitle: 'Here’s Our Manufacturing Process',
  samples: {
    title: 'Get Your Hoodie Sample With Free Global Shipping',
    description: [
      'You bring the design vision. We send you a physical Golden Sample at production cost — just cover the sample, and we handle the shipping. Every order starts with a sample you approve before we cut a single unit of your bulk run. No surprise fabric swaps. No weight or colorway substitutions without written approval. Pattern grading, fabric sourcing, and sample creation all handled under one roof by our dedicated production team.',
      'Whether you’re launching your first drop, scaling a bestselling style, or testing a new heavyweight blank before committing to bulk, we work as your direct manufacturing partner. Free global shipping on all sample orders. No intermediaries. No markups. Fixed 21-day lead times. Your design. Your sample. Your brand.',
    ],
    ctaLabel: 'Request Your Samples With Free Shipping',
    image: '/images/services/quality-assurance.webp',
  },
  oemOdm: {
    heading: 'Global OEM/ODM Solutions: From Tech Pack to Doorstep',
    lead: 'We replace the chaos of overseas sourcing with a streamlined, transparent partnership.',
    items: [
      {
        title: 'Tech Pack Drafting & Pattern Grading',
        description:
          'Don’t have a file? No problem. Our design team offers Custom Tech Pack creation and Pattern Grading services. We use digital referencing to ensure your “Small” and “2XL” fits are mathematically consistent across the entire size run.',
      },
      {
        title: 'Sustainable Supply Chain',
        description:
          'Win the trust of the eco-conscious consumer. We offer GOTS-Certified Organic Cotton and Recycled Polyester options. Our production floor adheres to ethical labor standards, giving you the transparency data needed for the EU and US markets.',
      },
    ],
  },
  faqs: hoodiesFaqs,
}
