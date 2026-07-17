export interface Testimonial {
  name: string
  company: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'James Whitfield',
    company: 'Streetwear brand, United Kingdom',
    rating: 5,
    text: 'Axiom Rise handled our first hoodie run flawlessly. The Golden Sample matched the bulk order stitch for stitch, and communication was faster than suppliers we have used for years.',
  },
  {
    name: 'Elena Marquez',
    company: 'Fitness apparel label, Spain',
    rating: 5,
    text: 'The low minimums let us test three new legging styles without over-committing. Quality was consistent across all colourways and the fabric sourcing advice saved us real money.',
  },
  {
    name: 'Daniel Okafor',
    company: 'Corporate uniforms, UAE',
    rating: 5,
    text: 'We moved our uniform program to Axiom Rise last year. Deliveries have been on time, every time, and their in-line QC means we no longer inspect every carton ourselves.',
  },
  {
    name: 'Sophie Laurent',
    company: 'Boutique fashion house, France',
    rating: 5,
    text: 'From tech pack to finished varsity jackets in under five weeks. The embroidery detail exceeded what we thought was possible at this price point.',
  },
  {
    name: 'Marcus Bergström',
    company: 'Sports club supplier, Sweden',
    rating: 5,
    text: 'Their team caught a sizing issue in our spec before production and proposed the fix themselves. That is the kind of partner you keep.',
  },
]
