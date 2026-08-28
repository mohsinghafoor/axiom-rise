import type { Faq } from '@/data/faqs'

/**
 * Streetwear pages (shorts, hoodies, tracksuits) render through
 * src/components/products/StreetwearPage.tsx. They share the jacket template's
 * hero / intro / navy-band / why-watermark markup but carry a different section
 * set: six capability cards, an optional fabric block, a process strip, and an
 * optional OEM/ODM block. Copy here is plain strings — these pages carry no
 * inline links, so there is no RichSegment equivalent.
 */

/** One card in the navy capabilities band. */
export interface StreetwearCard {
  title: string
  description: string
  image: string
}

/** A titled paragraph — used by both the fabric and OEM/ODM sections. */
export interface StreetwearFeature {
  title: string
  description: string
}

export type StreetwearIcon =
  | 'team'
  | 'eye'
  | 'moq'
  | 'globe'
  | 'precision'
  | 'branding'
  | 'techpack'
  | 'sustainability'
  | 'check'
  | 'document'
  | 'cog'
  | 'stitch'

export interface StreetwearWhyItem {
  title: string
  description: string
  icon: StreetwearIcon
}

export interface StreetwearPageContent {
  metaTitle: string
  metaDescription: string
  hero: {
    h1: string
    sub: string
    ctaLabel: string
    image: string
    imageAlt: string
  }
  intro: {
    h2: string
    /** One entry per paragraph; the first gets mt-6, the rest mt-4. */
    paragraphs: string[]
    ctaLabel: string
    image: string
    imageAlt: string
  }
  capabilities: {
    heading: string
    /** Decorative navy-band backdrop; rendered with alt="". */
    bandImage: string
    /** Exactly 6 — laid out 1 / 2 / 3 across the breakpoints. */
    items: StreetwearCard[]
  }
  /** OPTIONAL. Exactly 3 items when present; `lead` is itself optional. */
  fabric?: {
    heading: string
    lead?: string
    items: StreetwearFeature[]
  }
  why: {
    heading: string
    /** Exactly 4: the first two render on the left, the last two on the right. */
    items: StreetwearWhyItem[]
    image: string
    imageAlt: string
  }
  /** Heading for the shared <ProcessSection />. */
  processTitle: string
  samples: {
    title: string
    /** Two paragraphs, rendered in sequence by <SamplesBand />. */
    description: string[]
    ctaLabel: string
    image: string
  }
  /** OPTIONAL. Exactly 2 items when present, each with an Inquire Now CTA. */
  oemOdm?: {
    heading: string
    lead: string
    items: StreetwearFeature[]
  }
  faqs: Faq[]
}
