import type { Faq } from '@/data/faqs'
import type { JacketPageContent } from './types'

const softshellFaqs: Faq[] = [
  {
    question: 'What hydrostatic head rating do your softshells come in?',
    answer:
      "It depends on the fabric tier you choose. We'll confirm the exact mm rating for your selected fabric in the quote, typically ranging from 3,000mm for uniform-weight fabric up to 10,000mm-plus for technical outdoor builds.",
  },
  {
    question: 'Does embroidery void the waterproof rating?',
    answer:
      "It can, if it's done carelessly. We route embroidery through precision digitizing and use access-pocket construction on laminate fabric specifically to avoid puncturing the membrane in a way that compromises the rating.",
  },
  {
    question: 'Are the seams actually taped, or just stitched?',
    answer:
      "Taped as standard on shoulder, hood, and pocket seams for our 3-layer bonded builds. We'll confirm exactly which seams are taped for your specific style before you approve the sample.",
  },
  {
    question: 'How do I know if I need 2-layer, 3-layer, or bonded microfleece construction?',
    answer:
      "Tell us how the jacket will actually be worn — outdoors in real weather, a daily corporate uniform, or a transitional-season layer — and we'll recommend the right construction rather than defaulting to whichever is cheapest to produce.",
  },
  {
    question: 'Does the DWR coating wear off after washing?',
    answer:
      'On any DWR-treated fabric, yes, over time and repeated washing. We can advise on reapplication guidance for your care labels, and our 3-layer bonded construction holds its water resistance longer than a sprayed single-layer finish.',
  },
  {
    question: 'What is your MOQ for softshell jackets?',
    answer:
      '10 units per style and colourway — the same standard we run across every jacket category.',
  },
  {
    question: 'Can you match our exact corporate brand color?',
    answer:
      'Yes, using Pantone-matched fabric dyeing, confirmed against a lab dip before bulk production.',
  },
]

export const softshellContent: JacketPageContent = {
  metaTitle: 'Custom Softshell Jacket Manufacturer | Axiom Rise',
  metaDescription:
    'Custom softshell jackets built on 3-layer bonded fabric with a stated hydrostatic head rating and taped seams, confirmed in writing before your Golden Sample is cut.',
  hero: {
    h1: 'Custom Softshell Jackets, Built With a Waterproof Rating You Can Actually Verify',
    sub:
      'Every softshell run ships with a stated hydrostatic head rating and taped seam spec in writing, before you approve the sample.',
    ctaLabel: 'Request Your Spec Sheet',
    image: '/images/hero/varsity-jacket.webp',
    imageAlt: 'Custom softshell jacket manufacturing',
  },
  intro: {
    h2: 'Most “water-resistant” softshell claims never come with a number attached. Ours do.',
    paragraphs: [
      [
        {
          text:
            "Almost every softshell gets marketed as “water-resistant,” but that phrase alone tells you nothing. A jacket rated to 3,000mm and one rated to 10,000mm are both technically “water-resistant,” and the gap between them is light drizzle versus sustained rain with wind. Suppliers who won't disclose the actual number are the ones whose jackets fail the first time they're tested outdoors.",
        },
      ],
      [
        {
          text:
            'We build softshells on 3-layer bonded fabric, sourced and lab-dip approved through our own ',
        },
        { text: 'fabric sourcing process', href: '/services/fabric-sourcing' },
        {
          text:
            ', rather than a single-layer DWR spray finish that washes out after a handful of commercial launderings. Seams at stress points are taped, not just stitched. Every order comes with the hydrostatic head rating, seam construction, and breathability spec stated in writing before your Golden Sample is cut. Need more insulation than a shell alone provides? See our ',
        },
        { text: 'Puffer Jackets', href: '/products/puffer-jacket' },
        { text: ' for genuine cold-weather builds.' },
      ],
    ],
    ctaLabel: 'Make An Enquiry',
    image: '/images/process/production.webp',
    imageAlt: 'Three-layer bonded softshell jacket fabric',
  },
  styles: {
    heading: 'Softshell Styles Built for Different Jobs',
    bandImage: '/images/hero/leather-jacket.webp',
    items: [
      {
        title: 'All-Weather Technical Softshells',
        description:
          'Wind-blocking, water-resistant construction rated for sustained outdoor use, built for activewear and outdoor labels.',
        image: '/images/hero/sports-wear.webp',
      },
      {
        title: 'Corporate Uniform Softshells',
        description:
          'Bonded microfleece with mechanical stretch on the outer shell, built for gym and activewear brands prioritizing mobility.',
        image: '/images/products/uniform.webp',
      },
      {
        title: 'Heavy-Duty Workwear Softshells',
        description:
          'Abrasion-resistant fabric with reinforced elbows and secure zip pockets, built to survive a job site, not just a photoshoot.',
        image: '/images/products/jackets.webp',
      },
      {
        title: 'Four-Way Stretch Performance Softshells',
        description:
          'Clean, structured silhouettes with a reinforced embroidery zone, built for teams that need to look sharp and stay dry.',
        image: '/images/hero/fitness.webp',
      },
    ],
  },
  why: {
    heading: 'Why Corporate and Activewear Buyers Source Softshells With Us',
    items: [
      {
        title: 'A Waterproof Number in Writing, Not a Marketing Word',
        description:
          "Your tech pack states the hydrostatic head rating before we cut fabric. If a batch tests below spec, it doesn't ship.",
        icon: 'document',
      },
      {
        title: "Embroidery That Doesn't Compromise the Membrane",
        description:
          "Our digitizing team routes stitching to avoid puncturing the waterproof laminate, so your logo doesn't become a leak point.",
        icon: 'stitch',
      },
      {
        title: 'Seams Taped Where Water Actually Gets In',
        description:
          'Shoulder seams, hood seams, and pocket zips are the first failure points on a softshell. We tape these as standard, not as a paid upgrade.',
        icon: 'shield',
      },
      {
        title: 'Fixed 21-Day Lead Times From Sample Approval',
        description:
          'Corporate uniform rollouts run on a deadline. Once your Golden Sample is signed off, your bulk date is fixed, not a moving target.',
        icon: 'clock',
      },
    ],
    image: '/images/custom-manufacturer.webp',
    imageAlt: 'Axiom Rise softshell jacket manufacturer',
  },
  deepDives: [
    {
      heading: 'The Membrane Construction Matrix',
      lead: [
        {
          text:
            'Construction type, not color or cut, is what actually determines how a softshell performs in real weather:',
        },
      ],
      bullets: [
        {
          label: '2-Layer',
          description:
            'face fabric bonded to a membrane, loose mesh lining inside. Lightest and most affordable; fine for a uniform worn indoors and out, weaker in genuinely wet field conditions.',
        },
        {
          label: '3-Layer Bonded (our standard)',
          description:
            'face fabric, membrane, and backer laminated into one sheet. No loose lining to trap moisture, and it holds up best under repeated commercial washing.',
        },
        {
          label: 'Bonded Microfleece',
          description:
            'swaps the technical membrane for a soft, brushed interior. Trades some waterproofing for comfort, right for transitional-season corporate wear.',
        },
      ],
      close: [
        {
          text:
            "We'll recommend based on how the jacket is actually worn, not whichever is cheapest to produce.",
        },
      ],
      ctaLabel: 'Make An Enquiry',
      image: '/images/services/manufacturing-excellence.webp',
      imageAlt: 'Bonded softshell fabric construction',
    },
    {
      heading: 'Reading a Real Waterproof Rating',
      lead: [
        {
          text:
            'Hydrostatic head measures how many millimeters of standing water a fabric holds before it leaks, tested to the ISO 811 standard. As a guide:',
        },
      ],
      bullets: [
        { label: '3,000mm to 5,000mm', description: 'light rain, everyday drizzle', dash: true },
        { label: '6,000mm to 10,000mm', description: 'sustained rain', dash: true },
        { label: '10,000mm+', description: 'genuinely technical outdoor gear', dash: true },
      ],
      close: [
        {
          text:
            "“Waterproof” and “water-resistant” aren't regulated terms, so ask any supplier for the actual number. Breathability matters just as much: ask for the MVTR or CFM rating too, since a jacket can be waterproof and still leave the wearer soaked in sweat from the inside. We provide both figures on request.",
        },
      ],
      ctaLabel: 'Inquire Now',
      image: '/images/services/quality-assurance.webp',
      imageAlt: 'Hydrostatic head and seam testing',
    },
  ],
  samples: {
    title: 'Get Your Softshell Sample With a Verified Spec Sheet Attached',
    description:
      'You send the use case — outdoor, corporate uniform, or workwear. We return a fabric recommendation with a hydrostatic head rating and breathability figure attached, not just a price. Every order starts with a physical Golden Sample, shipped free worldwide, tested and approved before we cut bulk fabric.',
    ctaLabel: 'Request My Sample + Spec Sheet',
    image: '/images/process/sample.webp',
  },
  faqs: softshellFaqs,
}
