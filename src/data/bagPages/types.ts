import type { StreetwearPageContent } from '@/data/streetwearPages/types'

/**
 * Bag pages (canvas totes, cotton totes, leather bags) render through the same
 * template as the streetwear pages — src/components/products/StreetwearPage.tsx.
 * The section set is identical, so the shape is reused rather than duplicated;
 * only the capabilities count differs in practice (bag pages carry 6 or 9 cards
 * so the 3-column grid stays square, where streetwear pages always carry 6).
 */
export type BagPageContent = StreetwearPageContent
