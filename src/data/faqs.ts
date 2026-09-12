export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "What is Axiom Rise's minimum order quantity?",
    answer:
      "10 units per style and colour. That applies to every product category — jackets, streetwear, sportswear, bags and accessories. Whether you are placing your first capsule order or your fiftieth restock, the same low MOQ keeps your inventory risk manageable.",
  },
  {
    question: 'How much does it cost to manufacture custom clothing in Pakistan?',
    answer:
      'There is no fixed answer; unit cost depends on fabric GSM, garment complexity, order volume, and branding method. A 100-unit run of printed t-shirts prices very differently from a 10-unit run of technical outerwear. Send us your tech pack or reference images and we will return an itemised quote within 48 hours.',
  },
  {
    question: 'How long does production take?',
    answer:
      'It depends on your order size and product complexity, but after reviewing your requirements we give you an exact timeline — typically 14 days of production after sample approval, plus 7 days delivery to most destinations.',
  },
  {
    question: 'What is a Golden Sample and why does it matter?',
    answer:
      'A Golden Sample is a physical prototype built to your exact spec before bulk production begins. You receive it, inspect it, and approve it — and bulk production is then held to that approved standard, so there are no surprises when your order arrives.',
  },
  {
    question: 'How do you keep quality consistent across large or repeat orders?',
    answer:
      'Three checkpoints: incoming material testing before cutting, in-line inspection during sewing, and AQL final check before packing. Every batch is measured against your approved Golden Sample, so the fiftieth carton matches the first.',
  },
  {
    question: 'Do I need to supply my own fabric or do you source it?',
    answer:
      'We handle full-package production by default — fabric, trims, hardware, and packaging are all sourced by us to your spec. If you have preferred mills or certified materials, we are happy to work with supplied fabric as well.',
  },
]
