import type { Faq } from '@/data/faqs'
import type { BagPageContent } from './types'

const U = 'https://images.unsplash.com/photo-'
const img = (id: string) => `${U}${id}?w=1200&h=900&fit=crop`
const hero = (id: string) => `${U}${id}?w=1920&h=1080&fit=crop`

const leatherBagFaqs: Faq[] = [
  {
    question: 'What leather grade will my bags actually be made from?',
    answer:
      'Whatever you approve, stated explicitly on your tech pack before sampling: full-grain, top-grain or genuine leather, with the trade-offs of each spelled out. Full-grain keeps the hide’s natural surface and is the most durable. Top-grain is sanded for a uniform finish and slightly less durable. Genuine leather, despite the name, is the least durable of the three — a naming quirk that catches first-time buyers out.',
  },
  {
    question: 'How do you stop hide inconsistency showing up across a bulk order?',
    answer:
      'Every hide is manually graded before it goes to the cutting table. Panels with visible scarring, brand marks or dye-lot drift are pulled and replaced rather than bundled into the run to hit a quantity target. On a bag that matters more than on a jacket, because the large flat panels leave nowhere for a flaw to hide.',
  },
  {
    question: 'Chrome-tanned or vegetable-tanned — which should I specify?',
    answer:
      'Neither is universally better. Chrome tanning gives a softer hand, more consistent colour and a lower cost, which suits fashion-led handbags and crossbody styles. Vegetable tanning gives a firmer, more structured body that develops a visible patina, which suits heritage totes, weekenders and anything positioned as buy-it-for-life.',
  },
  {
    question: 'What hardware can you fit?',
    answer:
      'Solid brass, antique brass, nickel, gunmetal and matte black finishes across D-rings, swivel snaps, feet, magnetic closures and turn locks, plus YKK Excella and RiRi zippers where the closure is a visible design feature. Hardware finish is colour-matched across the whole bag and locked to the approved sample.',
  },
  {
    question: 'Can you brand the leather itself?',
    answer:
      'Yes — blind debossing, hot foil in gold or silver, UV laser engraving, or a stitched-on metal or leather patch. We can also embroider directly onto hide using leather needles and heavy backing stabilisers, though on most bag panels debossing or engraving gives a cleaner and more durable result.',
  },
  {
    question: 'Do you offer a vegan leather alternative?',
    answer:
      'Yes. Premium PU built to the same construction, edge finishing and hardware standard as our hide bags, for brands positioning on animal welfare. We will state the material composition on the tech pack and on the finished care label.',
  },
  {
    question: 'What is your MOQ for leather bags?',
    answer:
      'Ten units per style and colourway, the same standard we hold across every Axiom Rise category — though the material cost per unit is naturally higher than on a canvas or cotton programme, and pricing improves sharply once hides are cut at volume.',
  },
]

export const leatherBagsContent: BagPageContent = {
  metaTitle: 'Custom Leather Bag Manufacturer | Axiom Rise',
  metaDescription:
    'Custom leather bags with the hide grade and tanning method stated on your tech pack, saddle-stitched stress points, burnished edges and every hide graded before cutting.',
  hero: {
    h1: 'Custom Leather Bags With The Hide Grade On The Tech Pack, Not Buried In The Small Print',
    sub:
      'Totes, holdalls, backpacks, messengers and crossbody styles cut from graded hides — tanning method disclosed, stress points saddle-stitched, edges burnished by hand, and a Golden Sample you approve before bulk.',
    ctaLabel: 'Make An Enquiry',
    image: hero('1636098152681-ea367dcb7ca7'),
    imageAlt: 'Custom full-grain leather holdall',
  },
  intro: {
    h2: 'The Real Risk In A Bulk Leather Order Is Not The Design — It Is What Arrives In Carton Forty',
    paragraphs: [
      'One bag with a scar across the front panel. Another half a shade off. A third where the strap anchor pulls loose inside a season. “Leather” covers an enormous range of quality, and a supplier who will not commit to a grade on paper has left themselves room to swap in a cheaper hide mid-order without ever technically lying to you.',
      'We state the grade and the tanning method on your tech pack before sampling, and every hide is manually graded before it is cut. A visible flaw or a dye-lot mismatch gets pulled and replaced. Stress points — strap anchors, gusset corners, handle roots — are saddle-stitched with bonded nylon rather than run through on a single lockstitch, and every edge is bevelled, sanded and burnished by hand before the bag is boxed.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: img('1605733513597-a8f8341084e6'),
    imageAlt: 'Hand-finished leather satchel with burnished edges',
  },
  capabilities: {
    heading: 'Leather Bag Lines We Manufacture',
    bandImage: '/images/hero/leather-jacket.webp',
    items: [
      {
        title: 'Full-Grain Leather Totes',
        description:
          'Structured open-top and magnetic-close totes on vegetable-tanned hide, built to soften into a patina rather than wear out.',
        image: img('1564422170194-896b89110ef8'),
      },
      {
        title: 'Leather Weekenders & Holdalls',
        description:
          'Barrel and duffel bodies with reinforced base panels, protective metal feet, a full-length heavy zip and a detachable padded shoulder strap.',
        image: img('1525103504173-8dc1582c7430'),
      },
      {
        title: 'Leather Backpacks & Rucksacks',
        description:
          'Roll-top and flap-over builds with padded laptop sleeves, anchored yoke straps and load-bearing seams tested to the weight you specify.',
        image: img('1622560480605-d83c853bc5c3'),
      },
      {
        title: 'Leather Messenger & Laptop Bags',
        description:
          'Slim commuter silhouettes with sized device compartments, buckled or magnetic closures and a suitcase pass-through on the rear panel.',
        image: img('1605733513597-a8f8341084e6'),
      },
      {
        title: 'Leather Crossbody & Sling Bags',
        description:
          'Compact bodies on adjustable leather or webbing straps, with contrast hardware and lining specified to your colourway.',
        image: img('1524498250077-390f9e378fc0'),
      },
      {
        title: 'Leather Handbags & Satchels',
        description:
          'Turn-lock and top-handle constructions with reinforced gussets, hand-burnished edges and a fully lined, pocketed interior.',
        image: img('1594223274512-ad4803739b7c'),
      },
    ],
  },
  fabric: {
    heading: 'Materials, Hardware And Finishing — Specified Before You Sample',
    lead:
      'On a leather bag, the things that fail first are rarely the leather. They are the thread, the hardware and the edges. All three are written into your spec before the first sample is cut.',
    items: [
      {
        title: 'Hide Grade & Tanning Method',
        description:
          'Full-grain keeps the natural surface and is the most durable option. Top-grain is sanded to a uniform finish, slightly less durable but more consistent across a large run. We disclose which one you are getting, along with the tannage: chrome for a soft, colour-consistent, fashion-led build, or vegetable for a firmer structured body that develops a patina. Hide thickness is specified in millimetres per panel, so a tote body and its strap are not cut from the same weight by accident.',
      },
      {
        title: 'Thread, Stitching & Hardware',
        description:
          'Bonded nylon thread throughout, with saddle stitching at every stress point — strap anchors, gusset corners, handle roots — rather than a single lockstitch pass. Hardware comes in solid brass, antique brass, nickel, gunmetal or matte black, colour-matched across D-rings, feet, snaps and closures, with YKK Excella or RiRi zippers where the zip is part of the design. Every hardware finish is locked to the approved sample.',
      },
      {
        title: 'Edge Finishing & Lining',
        description:
          'Raw edges are bevelled, sanded, dyed and burnished by hand — the step most factories skip, and the one customers notice first when it has been skipped. Interiors are lined in cotton twill, suede split or branded jacquard to your spec, with slip and zip pockets positioned on your pattern. Branding goes on as a blind deboss, hot foil, UV laser engraving or a stitched metal or leather patch.',
      },
    ],
  },
  why: {
    heading: 'Why Leather Brands Move Their Production To Axiom Rise',
    items: [
      {
        title: 'Every Hide Graded Before Cutting',
        description:
          'Scarred panels and dye-lot outliers are pulled and replaced, not buried mid-carton to hit a quantity target.',
        icon: 'eye',
      },
      {
        title: 'Specification In Writing',
        description:
          'Grade, tannage, thickness in millimetres, thread, hardware finish and lining all stated on the tech pack before you approve a sample.',
        icon: 'techpack',
      },
      {
        title: 'Low MOQ On Hide',
        description:
          'Ten units per style and colourway, so you can launch a leather line without committing to a container of stock up front.',
        icon: 'moq',
      },
      {
        title: 'DDP Global Delivery',
        description:
          'Freight, duties and customs clearance handled end to end, quoted as one landed cost to your warehouse.',
        icon: 'globe',
      },
    ],
    image: img('1549943872-1af399ac7e3a'),
    imageAlt: 'Waxed leather barrel duffel with hand-burnished edges',
  },
  processTitle: 'Here’s Our Leather Bag Manufacturing Process',
  samples: {
    title: 'Get Your Leather Bag Sample With Free Global Shipping',
    description: [
      'Send a sketch, a reference bag or a finished tech pack. We return a costed spec with the hide grade, tannage, thickness, hardware and lining written down, then cut a physical Golden Sample at production cost — you cover the sample, we cover the shipping worldwide.',
      'Bulk is held to that sample. No hide substitution, no hardware downgrade, no lining swap without your written approval, and production photographs at every milestone so you can see the run before it ships.',
    ],
    ctaLabel: 'Request Your Samples With Free Shipping',
    image: img('1556216756-9791daa53ad5'),
  },
  oemOdm: {
    heading: 'Global OEM/ODM Leather Programmes, Start To Finish',
    lead:
      'From a first prototype through to repeat production runs, under one roof and one point of contact.',
    items: [
      {
        title: 'Pattern Making, Prototyping & Tech Packs',
        description:
          'No pattern? Our team drafts one. We build paper and leather prototypes, resolve the gusset geometry and strap geometry before any hide is committed, and hand you a full tech pack — panel dimensions, hide thickness per component, stitch density, hardware schedule and a bill of materials you own. Approved patterns stay on file, so a reorder skips sampling and goes straight to the cutting table.',
        },
      {
        title: 'Responsible Sourcing & Vegan Alternatives',
        description:
          'Hides are sourced from tanneries that can document their process, and we can supply chrome-free and vegetable-tanned options where your compliance file or your customers require it. For animal-welfare positioning we build the same constructions in premium PU, finished to the same edge and hardware standard, with the material composition stated on the tech pack and the care label.',
      },
    ],
  },
  faqs: leatherBagFaqs,
}
