export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const productMenu: NavItem[] = [
  {
    label: 'Outerwear',
    href: '/categories/outerwear',
    children: [
      { label: 'Jackets', href: '/products/jacket-manufacturer' },
      { label: 'Varsity Jackets', href: '/products/wholesale-varsity-jackets' },
      { label: 'Hoodies', href: '/products/hoodies-manufacturer' },
      { label: 'Sweatshirts', href: '/products/sweatshirt-manufacturers' },
    ],
  },
  {
    label: 'Activewear',
    href: '/categories/activewear',
    children: [
      { label: 'Sportswear', href: '/products/sportswear-manufacturer' },
      { label: 'Fitness Clothing', href: '/products/fitness-clothing-manufacturer' },
      { label: 'Shorts', href: '/products/wholesale-shorts' },
      { label: 'Martial Arts Clothing', href: '/products/martial-arts-clothing' },
      { label: 'Sports Uniforms', href: '/products/sports-uniform-manufacturer' },
    ],
  },
  {
    label: 'Uniforms',
    href: '/categories/uniforms',
    children: [
      { label: 'Corporate Uniforms', href: '/products/corporate-uniform-manufacturer' },
      { label: 'School Uniforms', href: '/products/school-uniform-manufacturer' },
      { label: 'Medical Scrubs', href: '/products/wholesale-scrub-vendors' },
      { label: 'Hospitality Uniforms', href: '/products/hospitality-uniform-manufacturer' },
      { label: 'Security Uniforms', href: '/products/security-uniform-manufacturer' },
      { label: 'Chef Uniforms', href: '/products/chef-uniform-manufacturer' },
    ],
  },
  {
    label: 'Essentials',
    href: '/categories/essentials',
    children: [
      { label: 'T-Shirts', href: '/products/t-shirts-manufacturer' },
      { label: 'Equestrian Clothing', href: '/products/equestrian-clothing-manufacturer' },
    ],
  },
  {
    label: 'Accessories',
    href: '/categories/accessories',
    children: [
      { label: 'Caps & Hats', href: '/products/cap-manufacturer' },
      { label: 'Beanies', href: '/products/beanie-manufacturer' },
      { label: 'Bags & Backpacks', href: '/products/backpack-manufacturer' },
      { label: 'Leather Goods', href: '/products/leather-bags-manufacturer' },
      { label: 'Scarves & Gloves', href: '/products/scarf-manufacturer' },
      { label: 'Socks', href: '/products/socks-manufacturer' },
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
