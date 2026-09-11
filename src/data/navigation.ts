export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const productMenu: NavItem[] = [
  {
    label: 'Jackets',
    href: '/categories/jackets',
    children: [
      { label: 'Softshell Jackets', href: '/products/softshell-jacket' },
      { label: 'Bomber Jackets', href: '/products/bomber-jacket' },
      { label: 'Bubble Jackets', href: '/products/bubble-jacket' },
      { label: 'Puffer Jackets', href: '/products/puffer-jacket' },
      { label: 'Leather Jackets', href: '/products/leather-jacket' },
      { label: 'Varsity Jackets', href: '/products/varsity-jacket' },
    ],
  },
  {
    label: 'Streetwear',
    href: '/categories/streetwear',
    children: [
      { label: 'Shorts', href: '/products/shorts' },
      { label: 'Hoodies', href: '/products/hoodies' },
      { label: 'Tracksuits', href: '/products/tracksuits' },
      { label: 'T-Shirts', href: '/products/t-shirts' },
      { label: 'Sweatshirts', href: '/products/sweatshirts' },
    ],
  },
  {
    label: 'Bags',
    href: '/categories/bags',
    children: [
      { label: 'Canvas Tote Bags', href: '/products/canvas-tote-bags' },
      { label: 'Cotton Tote Bags', href: '/products/cotton-tote-bags' },
      { label: 'Leather Bags', href: '/products/leather-bags' },
    ],
  },
]

export const servicesMenu: NavItem[] = [
  { label: 'Tech Pack Design', href: '/services/tech-pack-design' },
  { label: 'Fabric Sourcing', href: '/services/fabric-sourcing' },
  { label: 'Cut & Sew Manufacturing', href: '/services/cut-and-sew-manufacturing' },
  { label: 'Private Label Clothing', href: '/services/private-label-clothing' },
  { label: 'Custom Embroidery', href: '/services/custom-embroidery' },
  { label: 'Screen Printing', href: '/services/screen-printing' },
  { label: 'Sublimation Printing', href: '/services/sublimation-printing' },
  { label: 'Quality Control & Inspection', href: '/services/quality-control' },
]
