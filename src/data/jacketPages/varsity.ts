import type { Faq } from '@/data/faqs'
import type { JacketPageContent } from './types'

const varsityFaqs: Faq[] = [
  {
    question: 'Why does the wool-to-leather seam matter so much?',
    answer:
      'It’s the point where two very differently behaving materials meet, and it’s the first place a poorly constructed varsity jacket fails. We give it a dedicated QC checkpoint separate from general garment inspection.',
  },
  {
    question: 'Is the body actually wool, or is it felt?',
    answer:
      'Genuine 24oz Melton wool as standard, with the exact weight stated on your tech pack. We don’t substitute felt to cut cost.',
  },
  {
    question: 'How do you keep chenille patches from peeling?',
    answer:
      'Tackle-twill backing and a dense satin-stitch border, the same technique used for classic collegiate lettering, tested through repeated wash cycles before a production run is approved.',
  },
  {
    question: 'Do you offer vegan leather sleeves?',
    answer:
      'Yes, premium PU leather sleeves are available as a direct alternative to genuine cowhide, and we’ll disclose which you’re getting on the tech pack either way. The same hide-grading standard used on our leather jackets applies here.',
  },
  {
    question: 'What’s your MOQ for varsity jackets?',
    answer:
      '10 units per style and colourway — the same standard we run across every jacket category.',
  },
  {
    question: 'Can you turn around a mid-season order for a school or team programme?',
    answer:
      'Yes, our fixed 21-day lead time applies once your Golden Sample is approved, and we can prioritize repeat programme orders where the construction is already locked in from a prior run.',
  },
  {
    question: 'Are the snap buttons reliable, or do they pop open?',
    answer:
      'We use reinforced enamel snap closures and pull-test a sample unit from every batch before shipping, specifically because loose snaps are a common failure point on cheaper varsity jackets.',
  },
]

export const varsityContent: JacketPageContent = {
  metaTitle: 'Custom Varsity Jacket Manufacturer | Axiom Rise',
  metaDescription:
    'Custom varsity jackets in genuine 24oz Melton wool with a dedicated QC checkpoint on the wool-to-leather shoulder seam and chenille patches built not to peel.',
  hero: {
    h1: 'Custom Varsity Jackets: The Wool-to-Leather Seam Is Where Most Factories Fail',
    sub:
      'That single seam is what separates a heritage-quality varsity jacket from a costume version of one.',
    ctaLabel: 'Make An Enquiry',
    image: '/images/hero/varsity-jacket.webp',
    imageAlt: 'Custom varsity jacket manufacturing',
  },
  intro: {
    h2: 'Anyone can sew a straight seam. Very few factories can sew a clean, durable seam where 24oz wool meets leather sleeves without one side puckering or the other tearing under stress.',
    paragraphs: [
      [
        { text: 'Wool and leather behave completely differently under a sewing machine. ' },
        { text: 'Melton wool', href: 'https://iwto.org/wool/' },
        {
          text:
            ' is dense and felted with almost no stretch, while leather has some give but tears if needle spacing or thread tension is wrong. Joining them at the shoulder seam needs a different needle, different tension, and usually a walking-foot machine that feeds both layers evenly. Get it wrong and the seam either puckers on the wool side or perforates on the leather side, usually the first place a cheap varsity jacket visibly fails.',
        },
      ],
      [
        { text: 'We treat this seam as its own quality checkpoint, separate from our ' },
        { text: 'general stitch inspection process', href: '/services/quality-control' },
        {
          text:
            '. Every unit gets it checked for even tension and binding before final QC, because it’s the one detail that tells a buyer whether they’re holding heritage construction or an imitation.',
        },
      ],
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/process/production.webp',
    imageAlt: 'Wool-to-leather shoulder seam construction',
  },
  styles: {
    heading: 'Varsity Styles Built for Different Programmes',
    bandImage: '/images/process/consultation.webp',
    items: [
      {
        title: 'Classic Letterman Jackets',
        description:
          '24oz Melton wool bodies with genuine leather sleeves and striped ribbing, built for the traditional athletic programme look.',
        image: '/images/hero/varsity-jacket.webp',
      },
      {
        title: 'Fleece-Body Retro Varsity Jackets',
        description:
          'Heavy cotton fleece bodies with tonal snap buttons, built for brands chasing a vintage aesthetic without the wool weight.',
        image: '/images/hero/sweatshirt.webp',
      },
      {
        title: 'Hooded Streetwear Varsity Jackets',
        description:
          'A fleece hood integrated beneath the ribbed shawl collar, built for labels blending collegiate heritage with streetwear.',
        image: '/images/hero/hoodie.webp',
      },
      {
        title: 'Team and Club Nylon Varsity Jackets',
        description:
          'Durable nylon-shell styles with water-resistant coating, built for active sideline wear where wool isn’t practical.',
        image: '/images/products/uniform.webp',
      },
    ],
  },
  why: {
    heading: 'Why Schools, Programmes, and Streetwear Brands Source Varsity Jackets With Us',
    items: [
      {
        title: 'A Dedicated QC Check at the Hardest Seam in the Garment',
        description:
          'The wool-to-leather shoulder seam gets its own inspection step, not a general once-over.',
        icon: 'shield',
      },
      {
        title: 'Chenille Patches Built Not to Peel',
        description:
          'Tackle-twill backing and satin-stitch borders hold up through wash cycles that lift a basic sew-on patch within a season.',
        icon: 'stitch',
      },
      {
        title: 'Genuine Melton Wool Weight, Stated in Writing',
        description:
          'No felt substitutions. Your tech pack states the actual wool weight before you approve a sample.',
        icon: 'document',
      },
      {
        title: 'Season-Ready Turnarounds for Team Programmes',
        description:
          'A fixed 21-day lead time from sample approval, so a mid-season team order isn’t left guessing on a delivery date.',
        icon: 'clock',
      },
    ],
    image: '/images/why/customize.avif',
    imageAlt: 'Axiom Rise varsity jacket manufacturer',
  },
  deepDives: [
    {
      heading: 'Chenille Patches That Don’t Peel',
      lead: [
        {
          text:
            'A patch’s durability comes down to what’s underneath the pile, not the pile itself.',
        },
      ],
      bullets: [
        {
          label: 'Cheap construction',
          description:
            'Single straight stitch, no reinforcement — lifts at the corners within a few washes.',
        },
        {
          label: 'Our construction',
          description:
            'Tackle-twill backing, the same woven material used for classic collegiate lettering, edged with a dense satin stitch that locks the border down.',
        },
        {
          label: 'Embroidered lettering',
          description:
            'Uses the same satin-stitch border technique and passes the same wash-cycle stress test before a production run is approved.',
        },
      ],
      ctaLabel: 'Make An Enquiry',
      image: '/images/services/private-label.webp',
      imageAlt: 'Chenille patch and tackle-twill lettering construction',
    },
    {
      heading: 'Why the Shoulder Seam Gets Its Own QC Checkpoint',
      lead: [
        {
          text:
            'Standard inspection checks overall stitch quality across the whole jacket, which isn’t detailed enough for the point where wool meets leather. A seam can pass a general visual check and still fail after a season of wear. Our shoulder-seam checkpoint covers:',
        },
      ],
      bullets: [
        { description: 'Even stitch tension on both material types.' },
        { description: 'No puckering on the wool side, no perforation stress on the leather side.' },
        { description: 'A pull-test on a sample unit from every batch.' },
      ],
      ctaLabel: 'Inquire Now',
      image: '/images/services/quality-assurance.webp',
      imageAlt: 'Shoulder-seam tension and pull testing',
    },
  ],
  samples: {
    title: 'Get Your Varsity Jacket Sample With Free Global Shipping',
    description:
      'You bring the fabric combination, embroidery or chenille spec, and design brief. We send a physical Golden Sample at production cost, shipping covered free, with the wool weight and sleeve material confirmed in writing. No material or embroidery changes without your sign-off, and a fixed 21-day lead time once you approve.',
    ctaLabel: 'Request My Sample + Quote',
    image: '/images/process/delivery.webp',
  },
  faqs: varsityFaqs,
}
