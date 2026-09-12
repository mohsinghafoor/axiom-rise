import type { Faq } from '@/data/faqs'
import type { BagPageContent } from './types'

const U = 'https://images.unsplash.com/photo-'
const img = (id: string) => `${U}${id}?w=1200&h=900&fit=crop`
const hero = (id: string) => `${U}${id}?w=1920&h=1080&fit=crop`

const canvasToteFaqs: Faq[] = [
  {
    question: 'What is the minimum order quantity for heavyweight canvas totes?',
    answer:
      'Ten units per design and colourway, the same MOQ we hold across every Axiom Rise category. Unit pricing then steps down at the 500, 1,000 and 5,000 unit tiers, so a boutique can test a design and reorder at volume without changing factory.',
  },
  {
    question: 'Do I need to go through a broker or sourcing agent?',
    answer:
      'No. You talk to the factory that cuts and sews your bags. Removing the broker layer typically takes 30 to 40 percent out of the landed unit cost, and it means specification questions are answered by the people running the machines rather than relayed through a middleman.',
  },
  {
    question: 'Can you sew a rigid base into the bottom of the bag?',
    answer:
      'Yes. Our gusseted utility totes take a rigid poly-board base insert, either sewn permanently into the bottom panel or supplied as a removable board. Either way the bag sits perfectly flat and keeps its box shape when it is loaded with heavy items.',
  },
  {
    question: 'What canvas weight should I choose?',
    answer:
      '10oz (around 340 GSM) is the entry point: opaque, sturdy and light enough to keep freight costs down on giveaway volumes. 12oz (around 400 GSM) is the retail standard and the lightest weight that reliably stands upright unaided. 15oz to 18oz is specialist territory for boat totes, tool bags and resort luggage.',
  },
  {
    question: 'Will a screen print crack on thick canvas?',
    answer:
      'Not when it is cured properly. Heavy canvas absorbs an enormous amount of heat, so a standard flash cure leaves the bottom ink layer under-bonded. We slow the forced-air conveyor dryers down until the plastisol reaches 320°F (160°C) right through to the base of the weave, which is what stops the logo cracking when the bag flexes.',
  },
  {
    question: 'Can you print full-colour photographic artwork on canvas?',
    answer:
      'Not on natural cotton duck — sublimation needs synthetic fibre to bond to. For edge-to-edge photographic work we source a poly-canvas blend that looks and handles like heavy duck but accepts sublimation dye, locking the image into the fibre core rather than sitting on top of it.',
  },
  {
    question: 'How do you ship to the USA, UK and Europe?',
    answer:
      'On DDP terms. We handle freight, duties and customs clearance and quote you one landed cost, so your bags arrive at the warehouse as stock rather than as paperwork.',
  },
]

export const canvasToteContent: BagPageContent = {
  metaTitle: 'Custom Canvas Tote Bag Manufacturer | Axiom Rise',
  metaDescription:
    'Heavy duty custom canvas tote bags cut and sewn from 10oz to 18oz double-fill duck canvas, with X-box stitched handles rated past 35lb and factory-direct pricing.',
  hero: {
    h1: 'Heavy Duty Custom Canvas Tote Bags Engineered to Stand Upright, Carry Real Weight, and Lift Your Retail Brand',
    sub:
      'Factory-direct canvas totes for boutique retail, corporate gifting and premium merchandise — double-fill duck canvas, 10oz to 18oz heavyweight weaves, and high-density screen printing that survives the flex.',
    ctaLabel: 'Make An Enquiry',
    image: hero('1578237493287-8d4d2b03591a'),
    imageAlt: 'Heavyweight custom canvas tote bag',
  },
  intro: {
    h2: 'A Bag That Slumps On The Shelf Tells Your Customer Exactly What Your Brand Is Worth',
    paragraphs: [
      'Thin fabric totes collapse the moment they are filled, the print creases across the fold, and the logo you paid to develop ends up looking like a giveaway. What you actually want is a rigid, retail-grade canvas bag that comfortably carries 35lb and stands upright on its own base — so the artwork stays flat, stays readable, and reads as a product rather than a freebie.',
      'We are not importing pre-sewn blanks and decorating them. We cut and sew heavy duck canvas from scratch on our own factory floor, which is what lets you dictate the fabric ounce-weight, the gusset depth, the handle drop and the cross-stitch pattern at the stress points. Every order starts with a physical Golden Sample you sign off before we touch the bulk run.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: img('1535981444082-2a5dc0548ef3'),
    imageAlt: 'Cotton webbing handle stitched into heavyweight duck canvas',
  },
  capabilities: {
    heading: 'Specialised Canvas Bag Architectures We Build',
    bandImage: '/images/services/manufacturing-excellence.webp',
    items: [
      {
        title: 'Classic Heavyweight Canvas Totes',
        description:
          'Built from thick 12oz (400+ GSM) duck. The dense weave holds its shape and stands unaided — the default for premium boutique merchandise.',
        image: img('1732963878674-651e7f5f71d7'),
      },
      {
        title: 'Medium Weight Canvas Totes',
        description:
          'Cut from 10oz (340 GSM) canvas. Slightly softer and noticeably lighter, built for corporate swag runs where bulk freight weight drives the cost.',
        image: img('1544816155-12df9643f363'),
      },
      {
        title: 'Super Heavy Boat Totes',
        description:
          '15oz to 18oz canvas with rigid coloured trim panels, exterior slip pockets and thick webbed handles, for beach and resort programmes.',
        image: img('1578237493287-8d4d2b03591a'),
      },
      {
        title: 'Zippered Canvas Totes',
        description:
          'Heavy canvas bodies closed with full-length brass or YKK plastic zippers, so valuables stay secure through daily commuter use.',
        image: img('1632942480766-9cee148c4ee8'),
      },
      {
        title: 'Gusseted Canvas Utility Bags',
        description:
          'Bottom and side gussets engineered into a true 3D box shape, reinforced with a rigid poly-board base insert for hauling heavy loads.',
        image: img('1535981444082-2a5dc0548ef3'),
      },
      {
        title: 'Canvas Wine & Bottle Totes',
        description:
          'Tall, narrow bodies with internal padded sleeves or sewn dividers for 2, 4 or 6 bottles, so glass never touches glass in transit.',
        image: img('1574365569389-a10d488ca3fb'),
      },
      {
        title: 'Two-Tone Contrast Canvas Totes',
        description:
          'Natural unbleached canvas paired with custom-dyed base panels and matching webbed handles, matched to your corporate colourway.',
        image: img('1572966059657-6e8910c8c3c0'),
      },
      {
        title: 'Canvas Sling & Crossbody Totes',
        description:
          'Standard hand-carry straps plus an adjustable canvas shoulder strap, for a modern silhouette that wears comfortably crossbody.',
        image: img('1630381260512-e3fe55c11973'),
      },
      {
        title: 'Mini Canvas Gift & Event Totes',
        description:
          'Small-format heavy canvas — 8"x8" and up — for wedding favours, jewellery packaging and luxury product launches.',
        image: img('1576695139696-e053aae84148'),
      },
    ],
  },
  fabric: {
    heading: 'The Textile Science Behind Duck Canvas',
    lead:
      'Canvas is not one fabric. The weave structure and the ounce weight decide whether your bag stands up on a shelf or folds in half, and whether your print stays sharp or bleeds into the surface.',
    items: [
      {
        title: 'Double-Fill Weave Construction',
        description:
          'Standard apparel cotton is woven from single yarns. Industrial duck canvas uses a double-fill weave — two thick yarns twisted together before they are woven across the weft. The result is a dense, tightly packed surface that resists tearing, puncture and water absorption, and gives high-density screen printing a smooth substrate to sit on without ink bleed.',
      },
      {
        title: 'Ounce Weight, Without The Guesswork',
        description:
          '10oz (approx. 340 GSM) is opaque and sturdy — the entry point for lightweight fashion and promotional totes. 12oz (approx. 400 GSM) is the retail standard: stiff enough that the bag stands upright, which is why it is effectively mandatory for grocery and premium retail. 15oz to 18oz (approx. 500+ GSM) is industrial thickness and needs specialist heavy-duty machines, reserved for boat totes, tool bags and resort luggage.',
      },
      {
        title: 'X-Box Stitch Handle Engineering',
        description:
          'Single-needle lockstitching is where cheap totes fail. We run heavy cotton webbing down the face of the bag so kinetic load disperses through the panel rather than concentrating at the hem, then fire a dense box stitch — a sewn square with an intersecting X — at the handle-to-hem junction. That geometry mechanically locks the webbing into the double-fill canvas and holds 35lb of direct tension without tearing out.',
      },
    ],
  },
  why: {
    heading: 'Why Retail Brands Bring Their Canvas Programmes To Axiom Rise',
    items: [
      {
        title: 'Cut & Sewn, Not Bought In',
        description:
          'We do not decorate imported blanks. Canvas is cut and sewn here, so ounce weight, gusset depth, handle drop and hardware are all yours to specify.',
        icon: 'stitch',
      },
      {
        title: 'Load-Rated Construction',
        description:
          'X-box stress-point reinforcement on every handle junction, verified against a 35lb load before a style is signed off for bulk.',
        icon: 'precision',
      },
      {
        title: 'No Broker Markup',
        description:
          'You buy direct from the factory floor. That typically removes 30 to 40 percent from the landed unit cost and puts you in contact with the people running your order.',
        icon: 'moq',
      },
      {
        title: 'DDP Global Delivery',
        description:
          'Freight, duties and customs clearance handled end to end on DDP terms, quoted as one landed cost to your warehouse or event venue.',
        icon: 'globe',
      },
    ],
    image: img('1663573690125-d326a87a2535'),
    imageAlt: 'Custom printed canvas tote carried over the shoulder',
  },
  processTitle: 'Here’s Our Canvas Bag Manufacturing Process',
  samples: {
    title: 'Get Your Canvas Tote Sample With Free Global Shipping',
    description: [
      'You bring the artwork and the spec. We cut, sew and decorate a physical Golden Sample at production cost — you cover the sample, we cover the shipping. Nothing goes into bulk until that sample is in your hands and signed off, and no fabric weight, handle webbing or hardware is substituted after approval without your written sign-off.',
      'Whether you are testing a first boutique run, scaling a proven merchandise line, or moving an existing programme off a broker, you work directly with the factory floor. Free global sample shipping. No intermediaries. No markups.',
    ],
    ctaLabel: 'Request Your Samples With Free Shipping',
    image: '/images/services/quality-assurance.webp',
  },
  oemOdm: {
    heading: 'Decoration Engineered Specifically For Heavy Canvas',
    lead:
      'Thick canvas behaves nothing like a t-shirt under a press or a needle. These are the process changes that keep your branding intact on a 400+ GSM substrate.',
    items: [
      {
        title: 'Plastisol Curing & High Thread Count Embroidery',
        description:
          'On 12oz and 15oz canvas a standard flash cure fails — the fabric sinks the heat before the bottom ink layer bonds. We slow the forced-air conveyor dryers until the plastisol holds 320°F (160°C) right down to the base of the weave, so the logo will not crack under flexing. For thread work, the canvas acts as its own stabiliser, which lets us drive 20,000+ stitch designs and heavy 3D puff embroidery into the panel without the fabric puckering or warping around the logo.',
      },
      {
        title: 'Full-Colour Sublimation On Poly-Canvas',
        description:
          'Natural unbleached cotton cannot be sublimated — the dye has nothing synthetic to bond with. When your artwork needs photographic, edge-to-edge colour, we source a specialist poly-canvas blend that looks and feels like heavy duck but whose polymer fibres let sublimation dye turn to gas and lock permanently into the core of the fabric. The print cannot peel, because it is not sitting on the surface.',
      },
    ],
  },
  faqs: canvasToteFaqs,
}
