import type { Faq } from '@/data/faqs'
import type { StreetwearPageContent } from './types'

const shortsFaqs: Faq[] = [
  {
    question: 'What is the minimum order quantity (MOQ) for custom shorts?',
    answer:
      'We are flexible. Our standard MOQ is 10 units per design and colour, and we can discuss smaller test runs for simpler designs like blank mesh shorts.',
  },
  {
    question: 'Can you manufacture heavy “Basketball” style mesh shorts?',
    answer:
      'Yes. As experts in mesh shorts manufacturing, we use double-layered, heavyweight polyester mesh and elongated drawstrings for that authentic streetwear look.',
  },
  {
    question: 'Do you provide private labeling and tags?',
    answer:
      'Absolutely. We offer full Private Label services. We can create and attach woven waist labels, satin care tags, hang tags, and even custom poly-bags for a retail-ready finish.',
  },
  {
    question: 'Do you offer sustainable fabric options?',
    answer:
      'Yes. We offer Organic Cotton and Recycled Polyester blends. We practice ethical manufacturing and can provide certifications upon request to support your brand’s sustainability story.',
  },
  {
    question: 'Can you help if I don’t have a Tech Pack?',
    answer:
      'Yes. Our design team can help create a Tech Pack for you based on reference photos or sketches, ensuring the Inseam, Rise, and Waist measurements are accurate for production.',
  },
  {
    question: 'Do you produce swimwear or board shorts?',
    answer:
      'Yes. We use quick-dry, chlorine-resistant polyester and nylon fabrics with mesh linings and drainage eyelets.',
  },
  {
    question: 'How does shipping work for US/EU clients?',
    answer:
      'We offer Sea Freight (20-30 days). With our DDP service, we handle all customs and duties, so you don’t have to deal with the paperwork.',
  },
]

export const shortsContent: StreetwearPageContent = {
  metaTitle: 'Custom Shorts Manufacturer | Axiom Rise',
  metaDescription:
    'Custom shorts manufacturing — jogger, gym, denim, swim, mesh and cargo styles with AQL 2.5 quality control, low minimums and fixed 21-day lead times.',
  hero: {
    h1: 'Let Us Scale Your Shorts Brand Faster Without Guesswork, Delays, or Overseas Risk',
    sub:
      'Cargo Shorts, Mesh Styles, Jogger Shorts & More; Every Cut Starts With a Physical Sample You Approve Before We Touch Your Bulk Order.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/shorts.webp',
    imageAlt: 'Custom shorts manufacturing',
  },
  intro: {
    h2: 'Get Factory-Direct Quality, Free Shipping on Samples and Fixed 21-Day Delivery',
    paragraphs: [
      'Your summer collection can make or break seasonal revenue and a single fabric failure kills repeat purchases before August ends. One batch with poor stretch recovery or inconsistent inseam lengths destroys customer trust faster than any marketing can rebuild it. Vague supplier timelines. Fabrics that “look similar” but perform differently. Brokers who treat your tech pack like a suggestion.',
      'You don’t need overseas roulette; you need a global apparel factory that engineers fit consistency, fabric durability, and brand-accurate execution into every production run. We combine AQL 2.5 Quality Control with multi-fabric mastery: French Terry for athleisure drops, 4-way stretch Nylon-Spandex Blends for performance lines, or Heavyweight Cotton Twill for streetwear staples. We eliminate overseas risk through DDP (Delivered Duty Paid) Shipping — you receive one final invoice, customs-cleared inventory, and zero hidden costs draining your cash reserves.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/services/manufacturing-excellence.webp',
    imageAlt: 'Shorts production line running a bulk order',
  },
  capabilities: {
    heading: 'Our Shorts Manufacturing Capabilities',
    bandImage: '/images/services/quality-assurance.webp',
    items: [
      {
        title: 'Jogger Shorts',
        description: 'High-GSM French terry featuring deep side pockets and silicon-dipped drawcords.',
        image: '/images/hero/shorts.webp',
      },
      {
        title: 'Gym Shorts',
        description: 'We create opaque, high-stretch Lycra and nylon blends with squat-proof engineering.',
        image: '/images/hero/fitness.webp',
      },
      {
        title: 'Denim Shorts',
        description: 'Durable 10oz-14oz denim with custom rivets, acid washing, and heavy distressing.',
        image: '/images/hero/tshirt.webp',
      },
      {
        title: 'Swim Shorts',
        description:
          'We specialize in swim shorts construction, stitching contrasting panels for a premium finish.',
        image: '/images/hero/sports-wear.webp',
      },
      {
        title: 'Mesh Shorts',
        description:
          'Double-layered, heavyweight breathable mesh featuring secure zippered pockets and custom artwork.',
        image: '/images/products/rashguard.webp',
      },
      {
        title: 'Cargo Shorts',
        description:
          'Durable ripstop fabrics engineered with functional 3D bellows pockets and reinforced gussets.',
        image: '/images/products/uniform.webp',
      },
    ],
  },
  why: {
    heading: 'Why Global Brands Partner With Axiom Rise For Shorts Production',
    items: [
      {
        title: 'Expert Production Team',
        description:
          'Our specialized tailors understand complex construction, ensuring precision 5-inch and 7-inch inseams.',
        icon: 'team',
      },
      {
        title: 'Radical Transparency',
        description:
          'Receive video updates of the production line and detailed photos during AQL 2.5 Inspections.',
        icon: 'eye',
      },
      {
        title: 'Low MOQ Flexibility',
        description:
          'Launch your summer drop without overstocking. We offer Low MOQs starting at 10 pieces.',
        icon: 'moq',
      },
      {
        title: 'Global Logistics',
        description:
          'From export documentation to door-to-door delivery, we ensure your goods arrive on time.',
        icon: 'globe',
      },
    ],
    image: '/images/why/quality.webp',
    imageAlt: 'Quality inspection on a custom shorts production run',
  },
  processTitle: 'Here’s Our Clothing Manufacturing Process',
  samples: {
    title: 'Get Your Shorts Sample With Free Global Shipping',
    description: [
      'You bring the design vision. We send you a physical Golden Sample at production cost, just cover the sample, and we handle the shipping. Every order starts with a sample you approve before we cut a single unit of your bulk run. No surprise fabric changes. No construction substitutions without written approval. Pattern grading, fabric sourcing, and sample creation all handled under one roof by our dedicated production team.',
      'Whether you’re launching cargo shorts, mesh styles, or jogger shorts for your first drop, scaling an existing line, or testing a new cut before full production, we work as your direct manufacturing partner. Free global shipping on all sample orders. No intermediaries. No markups. Fixed 21-day lead times. Your design. Your sample. Your brand.',
    ],
    ctaLabel: 'Request Your Samples With Free Shipping',
    image: '/images/custom-manufacturer.webp',
  },
  faqs: shortsFaqs,
}
