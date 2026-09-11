import type { Faq } from '@/data/faqs'
import type { BagPageContent } from './types'

const U = 'https://images.unsplash.com/photo-'
const img = (id: string) => `${U}${id}?w=1200&h=900&fit=crop`
const hero = (id: string) => `${U}${id}?w=1920&h=1080&fit=crop`

const cottonToteFaqs: Faq[] = [
  {
    question: 'Will the bags shrink after washing?',
    answer:
      'Natural cotton shrinks slightly under high heat. We pre-wash the heavier weights to take most of that out before cutting, and we recommend a cold wash and air dry on the care label — that holds the finished dimensions and protects a water-based print.',
  },
  {
    question: 'Can you add interior pockets to a 5oz bag?',
    answer:
      'We would advise against it. Interior pockets and brass zip hardware pull against 5oz cotton and warp the panel around the seam. Those features belong on an 8oz or 10oz body, where the fabric has enough structure to carry the extra weight.',
  },
  {
    question: 'Are your blanks suitable for DTG printing?',
    answer:
      'Yes. Smooth combed cotton is close to an ideal substrate for direct-to-garment, and a number of brands buy unbleached blanks from us specifically to print on demand for small drops.',
  },
  {
    question: 'What is the production and shipping timeline?',
    answer:
      'Standard bulk production runs 12 to 15 days after your Golden Sample is approved. Air freight adds 5 to 7 days; ocean freight is slower but comes with full tracking and a lower landed cost per unit. We quote both against your order size.',
  },
  {
    question: 'Can you add custom woven labels?',
    answer:
      'Yes. Full private label service — woven interior tags, exterior hem tags, printed care and composition labels, and branded packaging — all applied in-house before the bags are packed.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer:
      'Ten units per design and colourway, the same MOQ we hold across every Axiom Rise category. Unit pricing steps down meaningfully at the 500, 1,000 and 5,000 unit tiers.',
  },
  {
    question: 'What cotton weight should I order?',
    answer:
      '5oz for high-volume event giveaways where freight weight and unit cost dominate. 8oz for retail and everyday carry — it is fully opaque and holds books, a laptop or a grocery load. 10oz where you want the bag itself to read as the product.',
  },
]

export const cottonToteContent: BagPageContent = {
  metaTitle: 'Custom Cotton Tote Bag Manufacturer | Axiom Rise',
  metaDescription:
    'Factory-direct custom cotton tote bags in 5oz to 10oz combed cotton sheeting, with cross-stitched handle reinforcement, AQL 2.5 inspection and no broker markup.',
  hero: {
    h1: 'Custom Cotton Tote Bags Engineered To Survive Heavy Loads, Maximise Retail Appeal, and Cut Out Broker Markups',
    sub:
      'Factory-direct sustainable cotton bags for B2B procurement — unbleached combed cotton sheeting, cross-stitched handle reinforcement, and wholesale pricing with nobody standing in the middle.',
    ctaLabel: 'Make An Enquiry',
    image: hero('1630381260512-e3fe55c11973'),
    imageAlt: 'Custom cotton tote bag carried by hand',
  },
  intro: {
    h2: 'Stop Handing Out Flimsy Promotional Bags With Your Logo On Them',
    paragraphs: [
      'Heavy duck canvas prices you out of a 10,000-unit giveaway. Cheap non-woven plastic gets binned before your guest reaches the car park. Cotton sheeting is the mathematical middle ground — it has the tactile quality of a real retail product at a unit cost that survives high-volume distribution, and it is the one promotional item people genuinely keep using.',
      'We run a direct manufacturing pipeline rather than buying in blank bags and decorating them, which means we control fabric thickness to the ounce and there is no reseller margin stacked on top of your quote. You specify the GSM, the gusset, the handle length and the decoration method, and you approve a physical Golden Sample before a single bulk unit is cut.',
    ],
    ctaLabel: 'Make An Enquiry',
    image: img('1574365569389-a10d488ca3fb'),
    imageAlt: 'Unbleached combed cotton tote bag',
  },
  capabilities: {
    heading: 'Our High-Volume Cotton Tote Bag Catalogue',
    bandImage: '/images/services/manufacturing-excellence.webp',
    items: [
      {
        title: '5oz Lightweight Event Shopper',
        description:
          'Highly breathable and packs down small. Built for trade show literature, soft goods and giveaway volumes where freight weight drives the cost.',
        image: img('1632942480766-9cee148c4ee8'),
      },
      {
        title: '8oz Medium-Weight Retail Tote',
        description:
          'The industry standard. Fully opaque, with natural drape balanced against the tensile strength to carry books, a laptop or a grocery shop.',
        image: img('1574365569389-a10d488ca3fb'),
      },
      {
        title: 'Unbleached Natural “Greige” Tote',
        description:
          'Raw, unprocessed cotton that keeps its natural seed flecks — the visual shorthand for organic origin, with no chemical bleaching in the chain.',
        image: img('1544816155-12df9643f363'),
      },
      {
        title: 'Flat-Bottom Cotton Book Bag',
        description:
          'A dedicated flat bottom seam so the bag stacks textbooks squarely without the load distorting the logo across the front panel.',
        image: img('1732963878674-651e7f5f71d7'),
      },
      {
        title: 'Full-Gusset Cotton Grocery Bag',
        description:
          'Expandable side and bottom gussets that open a flat bag into a true 3D box shape, sized and reinforced for a weekly grocery load.',
        image: img('1578237493287-8d4d2b03591a'),
      },
      {
        title: 'Long-Handle Over-Shoulder Tote',
        description:
          'Extended 26"+ reinforced webbing handles for genuine shoulder carry — the detail that turns an event bag into a bag people use daily.',
        image: img('1663573690125-d326a87a2535'),
      },
    ],
  },
  fabric: {
    heading: 'The Yarn And Dye Decisions That Decide Your Print Quality',
    lead:
      'Two cotton bags at the same GSM can print completely differently. What separates them is how the yarn was spun and how the cloth was finished before it ever reached the screen.',
    items: [
      {
        title: 'Combed Cotton, Not Carded Open-End',
        description:
          'Cheap promotional bags are woven from carded open-end yarn, which traps short fibres and leaves a fuzzy surface — that fuzz is why screen printing ink bleeds at the edges and cracks along the fold. We spin combed cotton, where the raw fibres are physically aligned before spinning. The surface comes out smooth and tightly woven, so water-based ink lays flat and your logo holds a razor-sharp edge.',
      },
      {
        title: 'Unbleached Greige vs. Low-Impact Dye',
        description:
          'Chemical bleaching burns through enormous volumes of water and harsh chlorine processing. Leaving the cotton unbleached cuts that out of your footprint entirely and gives you the natural greige colour customers now read as a sustainability signal. Where you need a specific brand colour, we use low-impact reactive dyes that bond permanently to the fibre without toxic runoff.',
      },
      {
        title: 'Certified Organic Cotton Blends',
        description:
          'For premium sustainable retail lines we run certified organic cotton grown without pesticides, available as a straight organic body or as an organic cotton canvas blend where you want extra structure. Third-party lab testing for lead, phthalates and restricted azo dyes is available on request for EU and US compliance files.',
      },
    ],
  },
  why: {
    heading: 'Why Procurement Teams Trust Axiom Rise With Cotton Programmes',
    items: [
      {
        title: 'Cross-Stitched Handle Reinforcement',
        description:
          'Dense X-box stitching mechanically locks the webbing into the panel at every stress point, so an 8oz bag carries 20lb+ without the handle tearing out.',
        icon: 'stitch',
      },
      {
        title: 'Zero Broker Markups',
        description:
          'Buying direct bypasses the 40 to 60 percent middleman margin. We control the chain from yarn spinning through to the shipping label.',
        icon: 'moq',
      },
      {
        title: 'Full Control Of Fabric Weight',
        description:
          'You name the GSM. 5oz for a mass giveaway, 10oz for a premium retail launch, and anything in between held consistently across the run.',
        icon: 'precision',
      },
      {
        title: 'Strict AQL 2.5 Inspection',
        description:
          'Every batch is inspected to AQL 2.5 — handle tensile strength, print opacity and seam integrity checked before the cartons are sealed.',
        icon: 'check',
      },
    ],
    image: img('1576695139696-e053aae84148'),
    imageAlt: 'Printed cotton tote bags from a high-volume production run',
  },
  processTitle: 'Here’s Our Cotton Bag Manufacturing Process',
  samples: {
    title: 'Get Your Cotton Tote Sample With Free Global Shipping',
    description: [
      'Send us the spec — cotton weight, dimensions, gusset, handle drop — and your vector artwork. Our pre-press team calibrates the separation for water-based ink, and we send you a physical strike-off sample at production cost with the shipping on us. Bulk does not start until you have approved it in your hands.',
      'From that point the run is held to the sample: no yarn substitution, no weight drop, no colour drift signed off without you. AQL 2.5 checks run throughout production, and freight and customs are handled to your warehouse or straight to the event venue.',
    ],
    ctaLabel: 'Request Your Samples With Free Shipping',
    image: '/images/services/quality-assurance.webp',
  },
  oemOdm: {
    heading: 'Printing Capability Built Around Cotton, Not Bolted Onto It',
    lead:
      'Because we weave and cut the fabric ourselves, decoration is not limited to a flat press on a finished bag.',
    items: [
      {
        title: 'Water-Based Ink & High-Volume Screen Printing',
        description:
          'Plastisol sits on top of the cloth. Water-based ink penetrates the porous cotton fibre, which gives you a breathable, vintage-handle print that flexes with the fabric and survives machine washing without cracking. Automated 14-colour carousels then take complex multi-colour vector artwork across 10,000+ unit orders at speed and hold registration through the run.',
      },
      {
        title: 'Edge-To-Edge Printing & Full Private Label',
        description:
          'Cutting and sewing in-house means we can print the flat fabric before assembly — so artwork runs across the gussets and up the handles, which is simply not available from a promotional broker working with finished blanks. The same applies to branding: woven interior labels, exterior hem tags, printed care instructions and retail-ready packaging all go on before the bags are boxed.',
      },
    ],
  },
  faqs: cottonToteFaqs,
}
