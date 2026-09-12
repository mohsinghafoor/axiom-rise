import type { Faq } from '@/data/faqs'
import type { JacketPageContent } from './types'

const bomberFaqs: Faq[] = [
  {
    question: 'How do you make sure the rib knit collar doesn’t stretch out?',
    answer:
      'We source rib knit against a minimum spandex content and knit gauge, and test elastic recovery on the approved Golden Sample before authorizing any bulk cutting.',
  },
  {
    question: 'Can you print or embroider directly onto the nylon shell?',
    answer:
      'Yes, using techniques built for synthetic fabric specifically: low-cure plastisol screen printing, DTF transfers, and heavily stabilized embroidery that won’t warp or pucker the satin.',
  },
  {
    question: 'Do you offer the reversible orange lining, or is that just decorative history?',
    answer:
      'Both are available. We can build a genuine reversible lining if you want the functional detail, or a fixed single-color lining if you just want the aesthetic reference.',
  },
  {
    question: 'What’s your MOQ for bomber jackets?',
    answer:
      '10 units per style and colourway — the same standard we run across every jacket category.',
  },
  {
    question: 'Can I get chenille patches on a nylon bomber shell?',
    answer:
      'Yes, using heavy backing stabilizers to prevent the satin shell from puckering around the patch — the same technique we use on our varsity jacket chenille work.',
  },
  {
    question: 'How long from sample approval to delivery?',
    answer:
      'A fixed 21-day lead time once your Golden Sample is signed off, with DDP shipping available for the USA, UK, and EU.',
  },
  {
    question: 'Do you offer snap-button or zip-only closures?',
    answer:
      'Both. Snap-front closures are more common on retro-styled bombers, standard zip is more common on streetwear cuts. We’ll confirm hardware options at the tech pack stage.',
  },
]

export const bomberContent: JacketPageContent = {
  metaTitle: 'Custom Bomber Jacket Manufacturer | Axiom Rise',
  metaDescription:
    'Custom bomber jackets built on rib knit sourced for elastic recovery and tested for snap-back before bulk cutting, with branding methods chosen for nylon satin.',
  hero: {
    h1: 'Custom Bomber Jackets Built on Rib Knit That Actually Keeps Its Shape',
    sub:
      'If the rib knit loses its elastic memory after a few wears, the whole silhouette collapses, no matter how good the nylon shell looks on day one.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/products/jackets.webp',
    imageAlt: 'Custom bomber jacket manufacturing',
  },
  intro: {
    h2: 'A bomber jacket lives or dies on the collar and cuffs, and that’s exactly where most suppliers get it wrong.',
    paragraphs: [
      [
        {
          text:
            'Look at any cheap bomber after a handful of wears and the failure point is almost always the same: the ribbed collar and cuffs have stretched out and stopped snapping back. That’s a spandex content and knit density problem, not a fabric problem. Low-cost rib knit uses minimal stretch fiber and a loose gauge to save cost, and it shows within weeks.',
        },
      ],
      [
        {
          text:
            'We source rib knit specifically for elastic recovery, not just initial stretch, and test every collar and cuff for snap-back before a bulk run. Nylon shells also carry their own branding risk: standard screen-print heat can warp satin, and standard needles can pucker it. We use low-cure plastisol, DTF transfers, and ',
        },
        { text: 'stabilized embroidery', href: '/services/custom-embroidery' },
        { text: ' built for that.' },
      ],
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/leather-jacket.webp',
    imageAlt: 'Rib knit collar and cuffs on a custom nylon bomber jacket',
  },
  styles: {
    heading: 'Bomber Styles Built for Different Markets',
    bandImage: '/images/process/planning.webp',
    items: [
      {
        title: 'Streetwear Flight Bombers',
        description:
          'Authentic oversized MA-1 proportions with a contrast reversible lining, for labels chasing real flight-jacket heritage.',
        image: '/images/hero/varsity-jacket.webp',
      },
      {
        title: 'Lightweight Transition Bombers',
        description:
          'Unlined nylon shells built for spring and summer capsule drops, where drape matters more than warmth.',
        image: '/images/products/jackets.webp',
      },
      {
        title: 'Corporate Branded Bombers',
        description:
          'Matte-finish nylon in a cleaner cut, built around an embroidery zone that won’t pucker under a logo.',
        image: '/images/products/uniform.webp',
      },
      {
        title: 'Bespoke Development Bombers',
        description:
          'Full control over shell weight, lining color, and hardware for brands with a specific silhouette in mind.',
        image: '/images/hero/leather-jacket.webp',
      },
    ],
  },
  why: {
    heading: 'Why Streetwear and Corporate Buyers Source Bombers With Us',
    items: [
      {
        title: 'Collar and Cuff Recovery Tested Before Bulk Cutting',
        description:
          'We don’t find out the rib knit stretches out after 500 units have shipped. It’s tested against your approved sample first.',
        icon: 'check',
      },
      {
        title: 'Branding Built for Synthetic Shells, Not Cotton',
        description:
          'Plastisol, DTF, and stabilized embroidery techniques chosen specifically because standard printing damages nylon satin.',
        icon: 'stitch',
      },
      {
        title: 'True MA-1 Proportions, Not a Generic Oversized Cut',
        description:
          'Our pattern block references the original flight-jacket silhouette, so “oversized” still looks intentional rather than shapeless.',
        icon: 'ruler',
      },
      {
        title: 'Scale From 10 Units Without Resampling',
        description:
          'Your Golden Sample stays the benchmark whether you’re ordering 10 units or 3,000.',
        icon: 'chart',
      },
    ],
    image: '/images/why/quality.webp',
    imageAlt: 'Axiom Rise bomber jacket manufacturer',
  },
  deepDives: [
    {
      heading: 'MA-1 Construction: Military Spec to Streetwear Staple',
      lead: [{ text: 'The MA-1 wasn’t designed as a fashion piece:' }],
      bullets: [
        {
          description:
            'Developed for the US Air Force under spec MIL-J-8279, replacing the bulkier leather B-15 jacket',
        },
        {
          description:
            'Built from nylon because it doesn’t stiffen or crack in extreme cold, unlike horsehide',
        },
        {
          description:
            'The reversible orange lining let pilots signal for search and rescue against snow or water',
        },
        {
          description:
            'The rib collar and cuffs seal in warmth without a zipper, but only if the knit holds its shape',
        },
      ],
      close: [
        {
          text:
            'We still offer the reversible lining as a real construction option, not decorative trim.',
        },
      ],
      ctaLabel: 'Make An Enquiry',
      image: '/images/services/custom-design.webp',
      imageAlt: 'MA-1 bomber jacket pattern and construction development',
    },
    {
      heading: 'Why Rib Knit Quality Is the Silent Failure Point',
      lead: [{ text: 'Rib knit is graded by two things a basic spec sheet rarely shows:' }],
      bullets: [
        {
          label: 'Knit gauge',
          description:
            'a 2x1 rib (two knit stitches to one purl) holds tension more consistently than a wider 1x1 rib',
        },
        {
          label: 'Spandex content',
          description:
            '4 to 8 percent gives genuine elastic recovery instead of a one-time stretch that never snaps back',
        },
      ],
      close: [
        {
          text:
            'Cheap suppliers cut this corner because rib trim is a small share of fabric cost but the most visible failure point once a collar goes slack. We test recovery on the approved Golden Sample as part of our standard ',
        },
        { text: 'QC and inspection process', href: '/services/quality-control-and-inspection' },
        { text: ' before authorizing bulk cutting.' },
      ],
      ctaLabel: 'Inquire Now',
      image: '/images/services/manufacturing-excellence.webp',
      imageAlt: 'Rib knit gauge and elastic recovery testing',
    },
  ],
  samples: {
    title: 'Get Your Bomber Jacket Sample With Free Global Shipping',
    description:
      'You bring the cut, lining, and branding placement. We send a physical Golden Sample at production cost, shipped free worldwide, with the rib knit recovery test result attached. No fabric or silhouette changes without your sign-off, and a fixed 21-day lead time once approved.',
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/process/delivery.webp',
  },
  faqs: bomberFaqs,
}
