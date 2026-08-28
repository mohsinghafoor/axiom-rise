import type { Faq } from '@/data/faqs'

/**
 * A run of body copy. A segment carrying `href` is rendered as an inline <Link>;
 * a segment without one is plain text. Put real typographic characters (“ ” — )
 * straight into `text` — the renderer never escapes JSX entities.
 */
export interface RichSegment {
  text: string
  href?: string
}

export interface JacketStyle {
  title: string
  description: string
  image: string
}

export type JacketIcon =
  | 'document'
  | 'stitch'
  | 'shield'
  | 'clock'
  | 'scale'
  | 'eye'
  | 'box'
  | 'tag'
  | 'ruler'
  | 'chart'
  | 'cog'
  | 'check'

export interface JacketWhyItem {
  title: string
  description: string
  icon: JacketIcon
}

/**
 * One bulleted line inside a deep dive.
 *   label set, dash falsy -> <strong>Label:</strong> description
 *   label set, dash true  -> <strong>Label</strong> — description
 *   label omitted         -> description alone (a plain-sentence bullet)
 */
export interface JacketBullet {
  label?: string
  /** A plain string, or RichSegment[] when the line needs an inline link. */
  description: string | RichSegment[]
  dash?: boolean
}

/**
 * DECISION — `lead` and `close` are ALWAYS RichSegment[], never plain strings.
 * Both lines can carry an inline link (the bomber page links inside
 * deepDives[1].close), so a single shape is used for both to keep the renderer
 * uniform. A plain sentence is one segment with no href:
 *   close: [{ text: 'One plain sentence.' }]
 * Omit the field entirely when a page has no lead or no close line.
 */
export interface JacketDeepDive {
  heading: string
  lead?: RichSegment[]
  bullets: JacketBullet[]
  close?: RichSegment[]
  ctaLabel: string
  image: string
  imageAlt: string
}

export interface JacketPageContent {
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
    /** One RichSegment[] per paragraph; the first gets mt-6, the rest mt-4. */
    paragraphs: RichSegment[][]
    ctaLabel: string
    image: string
    imageAlt: string
  }
  styles: {
    heading: string
    /** Decorative navy-band backdrop; rendered with alt="". */
    bandImage: string
    items: JacketStyle[]
  }
  why: {
    heading: string
    /** Exactly 4: the first two render on the left, the last two on the right. */
    items: JacketWhyItem[]
    image: string
    imageAlt: string
  }
  /** Exactly 2 — sections 6 (cream, image left) and 7 (white, text left). */
  deepDives: JacketDeepDive[]
  samples: {
    title: string
    description: string
    ctaLabel: string
    image: string
  }
  faqs: Faq[]
}
