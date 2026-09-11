export interface ServiceInclude {
  title: string
  description: string
}

export interface Service {
  slug: string
  title: string
  shortName: string
  blurb: string
  image: string
  heroHeadline: string
  heroSub: string
  pain: { title: string; body: string }
  includes: ServiceInclude[]
}

export const services: Service[] = [
  {
    slug: 'tech-pack-design',
    title: 'Tech Pack Design Services',
    shortName: 'Tech Pack Design',
    blurb: 'Industrial-grade tech packs that factories can actually build from — no guesswork, no lost-in-translation samples.',
    image: '/images/services/custom-design.webp',
    heroHeadline: 'Stop Leaving Your Garment Production to Chance — Build Industrial-Grade Tech Packs Factories Actually Follow',
    heroSub: 'A drawing is not a blueprint. Our tech pack design service translates your creative vision into hard manufacturing data.',
    pain: {
      title: 'Why a Basic Sketch Will Destroy Your Bulk Production Run',
      body: 'You have a beautiful design. You send it to a manufacturer. When the physical sample arrives six weeks later, the pockets are wrong, the fit is off, and nobody can tell you why — because a sketch leaves every technical decision to guesswork. A proper tech pack locks every variable down before a single metre of fabric is cut.',
    },
    includes: [
      { title: 'Technical Flats & CAD Sketches', description: 'Front, back and detail drawings with every seam, panel and component called out for the production floor.' },
      { title: 'Detailed Bill of Materials (BOM)', description: 'Exact fabric compositions, thread weights, trims and hardware — specified so the factory sources precisely what you designed.' },
      { title: 'Points of Measure (POM) & Specs', description: 'A “medium” means nothing without numbers. Full measurement charts with tolerances for every size.' },
      { title: 'Construction & Stitch Callouts', description: 'How a piece is sewn determines how it survives. Stitch types, seam finishes and reinforcement points, documented.' },
      { title: 'Size Grading Rules', description: 'Your large is not just a blown-up small. Proper grading rules keep the fit intentional across the whole range.' },
      { title: 'Colorways & Pantone Mapping', description: '“Navy blue” is not a manufacturing colour. Every colourway mapped to exact Pantone references.' },
    ],
  },
  {
    slug: 'fabric-sourcing',
    title: 'Fabric Sourcing Services',
    shortName: 'Fabric Sourcing',
    blurb: 'Accredited mill access, batch testing and price leverage — the right fabric at the right cost, verified before cutting.',
    image: '/images/services/supply-chain.webp',
    heroHeadline: 'Source Certified Fabrics at Factory Prices — Without Flying to a Single Mill',
    heroSub: 'We put our mill network, testing lab and negotiating leverage behind your brand.',
    pain: {
      title: 'Why DIY Fabric Sourcing Quietly Kills Margins',
      body: 'Buying fabric through trading agents means paying stacked commissions for material you never see until it arrives — and discovering GSM or shade variance only after your production slot has passed. We source directly from accredited mills and test every batch before it reaches the cutting table.',
    },
    includes: [
      { title: 'Accredited Mill Network', description: 'Direct relationships with certified mills across Pakistan and Asia for knits, wovens, denim and technical fabrics.' },
      { title: 'Fabric Testing & Certification', description: 'GSM verification, shrinkage, colour-fastness and pilling tests on every incoming batch.' },
      { title: 'Composition & GSM Matching', description: 'Send us a swatch or a spec — we match the hand-feel, weight and stretch, or engineer an improvement.' },
      { title: 'Trims & Hardware Sourcing', description: 'Zippers, drawcords, buttons, elastics and labels sourced to spec alongside the main fabric.' },
      { title: 'Sustainable Options', description: 'Organic cotton, recycled polyester and low-impact dye routes with the certificates to prove it.' },
      { title: 'Price Negotiation & Consolidation', description: 'Our order volume becomes your leverage — one consolidated invoice instead of five supplier mark-ups.' },
    ],
  },
  {
    slug: 'cut-and-sew-manufacturing',
    title: 'Cut & Sew Manufacturing Services',
    shortName: 'Cut & Sew',
    blurb: 'Full-package garment production on specialised sewing lines, from marker making to needle-detected packing.',
    image: '/images/services/manufacturing-excellence.webp',
    heroHeadline: 'Cut & Sew Production That Ships On Spec, On Time — Run By Teams Who Sew Your Category Every Day',
    heroSub: 'From marker making to final pressing, your garment is built on a line dedicated to its product type.',
    pain: {
      title: 'Why Generalist Factories Ruin Technical Garments',
      body: 'A factory that sews everything masters nothing. Streetwear fleece, compression wear and structured jackets each demand different machines, tensions and handling — run them down the same line and quality becomes a lottery. Our floors are organised into category-specific lines with operators who build your product type daily.',
    },
    includes: [
      { title: 'Marker Making & Fabric Relaxation', description: 'Optimised markers cut waste; controlled relaxation stops your garments shrinking after the first wash.' },
      { title: 'Precision Cutting', description: 'Straight-knife and band-knife cutting with lay reports, so panel one matches panel one thousand.' },
      { title: 'Category-Specific Sewing Lines', description: 'Dedicated lines for fleece, wovens, activewear and outerwear — the right machines and the right hands.' },
      { title: 'In-Line Quality Control', description: 'Inspectors inside the line catching defects at the operation where they happen, not at the end.' },
      { title: 'Pressing & Finishing', description: 'Form pressing, thread trimming and final shaping so garments arrive retail-ready.' },
      { title: 'Needle Detection & Packing', description: 'Metal detection, AQL sampling and carton packing to your fulfilment spec.' },
    ],
  },
  {
    slug: 'private-label-clothing',
    title: 'Private Label Clothing Services',
    shortName: 'Private Label',
    blurb: 'Your brand, your labels, your packaging — produced end to end under one roof with full confidentiality.',
    image: '/images/services/private-label.webp',
    heroHeadline: 'Launch a Retail-Ready Private Label Line — Without Building a Factory Relationship From Scratch',
    heroSub: 'We handle the production engine; you keep the brand, the margin and the customer.',
    pain: {
      title: 'Why White-Label Blanks Cap Your Brand’s Growth',
      body: 'Reselling the same blanks as everyone else leaves you competing on price with identical products. True private label means your fit, your fabric and your finish — details a customer can feel — produced confidentially so your bestsellers stay yours.',
    },
    includes: [
      { title: 'Custom Fit Development', description: 'Your own block patterns and fits, developed once and locked for every future reorder.' },
      { title: 'Woven Labels & Custom Tags', description: 'Neck labels, care labels, hang tags and patches produced and attached in-house.' },
      { title: 'Branding Applications', description: 'Embroidery, screen print, DTG, sublimation and heat transfer under one roof.' },
      { title: 'Retail Packaging', description: 'Custom polybags, boxes and tissue with barcode and SKU labelling to your spec.' },
      { title: 'Fulfilment-Ready Packing', description: 'Size-ratio cartons, DDP shipping and labelling that goes dock-to-shelf without repacking.' },
      { title: 'Confidentiality & NDAs', description: 'Signed NDAs as standard — your designs, specs and sales data stay private.' },
    ],
  },
  {
    slug: 'custom-embroidery',
    title: 'Custom Embroidery Services',
    shortName: 'Embroidery',
    blurb: 'In-house digitising, 3D puff and appliqué embroidery with thread matching and durability testing.',
    image: '/images/hero/varsity-jacket.webp',
    heroHeadline: 'Embroidery That Survives 50 Washes — Digitised, Stitched and Tested In-House',
    heroSub: 'From chest logos to full varsity chenille, your artwork becomes thread without losing its shape.',
    pain: {
      title: 'Why Outsourced Embroidery Delays Whole Orders',
      body: 'When your sewing factory couriers panels to a third-party embroidery unit, every logo becomes a scheduling risk — and nobody owns the result when registration drifts or backing puckers. Our embroidery floor sits metres from the sewing lines, so decoration never becomes the bottleneck.',
    },
    includes: [
      { title: 'Artwork Digitising', description: 'Your logo converted to stitch files by digitisers who understand fabric behaviour, not just software.' },
      { title: 'Flat & 3D Puff Embroidery', description: 'Standard flat stitching or raised 3D puff for caps and streetwear statement pieces.' },
      { title: 'Appliqué & Chenille Patches', description: 'Varsity-style chenille, felt appliqué and embroidered patches — sewn or heat-sealed.' },
      { title: 'Placement Sampling', description: 'Stitch-outs on your actual fabric approved before bulk decoration begins.' },
      { title: 'Thread Colour Matching', description: 'Pantone-matched threads with wash-fast dye lots documented per order.' },
      { title: 'Durability Testing', description: 'Wash and abrasion testing so logos still look sharp after a season of wear.' },
    ],
  },
  {
    slug: 'screen-printing',
    title: 'Screen Printing Services',
    shortName: 'Screen Printing',
    blurb: 'Pantone-matched plastisol and water-based printing with speciality finishes and wash-fastness testing.',
    image: '/images/hero/tshirt.webp',
    heroHeadline: 'Screen Prints That Stay Soft, Bright and Crack-Free — Run Inside the Same Factory That Sews Your Garments',
    heroSub: 'Multi-colour separations, speciality inks and placement accuracy, panel after panel.',
    pain: {
      title: 'Why Cheap Printing Ruins Good Garments',
      body: 'A premium hoodie with a print that cracks after three washes is a refund waiting to happen. Ink chemistry, cure temperature and mesh selection decide whether your artwork survives — and those variables are exactly what low-bid print shops cut corners on.',
    },
    includes: [
      { title: 'Plastisol & Water-Based Inks', description: 'Classic opacity or premium soft-hand feel — chosen per fabric and design.' },
      { title: 'Pantone Colour Matching', description: 'Inks mixed and drawn-down against Pantone references before production.' },
      { title: 'Multi-Colour Separations', description: 'Up to 12-colour jobs with tight registration across large runs.' },
      { title: 'Speciality Finishes', description: 'Puff, high-density, discharge, metallic and glow effects for statement pieces.' },
      { title: 'Wash-Fastness Testing', description: 'Cure verification and wash tests on every new artwork before bulk.' },
      { title: 'Oversize & Placement Prints', description: 'All-over jumbo screens and precise placement printing on finished panels.' },
    ],
  },
  {
    slug: 'sublimation-printing',
    title: 'Sublimation Printing Services',
    shortName: 'Sublimation',
    blurb: 'All-over, zero-feel prints for performance wear — colour-managed and fade-resistant.',
    image: '/images/hero/sports-wear.webp',
    heroHeadline: 'All-Over Sublimation With Zero Feel and Zero Fade — Built For Performance Wear',
    heroSub: 'Ink becomes part of the fibre, so your design breathes, stretches and never peels.',
    pain: {
      title: 'Why Sublimation Fails Without Colour Management',
      body: 'Sublimation looks simple until the blues shift purple and panel seams break the pattern mid-torso. Colour profiles, paper handling and panel-matched printing separate professional kit from marketplace disappointment — and they are all process discipline, not luck.',
    },
    includes: [
      { title: 'All-Over Print Preparation', description: 'Your artwork engineered onto cut panels so patterns flow across seams correctly.' },
      { title: 'Colour Profile Management', description: 'Calibrated ICC profiles keep brand colours identical across orders and fabrics.' },
      { title: 'Performance Fabric Selection', description: 'Polyester and blend selection tuned for vivid transfer and moisture management.' },
      { title: 'Panel-Matched Printing', description: 'Prints aligned per panel before sewing, so stripes meet and logos sit straight.' },
      { title: 'Zero-Feel, Breathable Prints', description: 'No added hand-feel, no cracking, no peeling — the ink is inside the fibre.' },
      { title: 'Fade Resistance Testing', description: 'UV and wash testing so kit looks new deep into the season.' },
    ],
  },
  {
    slug: 'quality-control',
    title: 'Quality Control & Inspection Services',
    shortName: 'Quality Control',
    blurb: 'Three-checkpoint QC — incoming materials, in-line inspection and AQL 2.5 final audit with full reports.',
    image: '/images/services/quality-assurance.webp',
    heroHeadline: 'Ship Cartons You Never Have to Re-Open — Three-Checkpoint QC With Reports You Can Read',
    heroSub: 'Every batch measured against your approved Golden Sample, documented at every stage.',
    pain: {
      title: 'Why End-of-Line Inspection Is Always Too Late',
      body: 'If the first quality check happens when garments are already packed, every defect found is money already spent. Real quality control starts before cutting and lives inside the sewing line — the final AQL audit should be a confirmation, not a discovery.',
    },
    includes: [
      { title: 'Incoming Material Testing', description: 'Fabric GSM, shrinkage and shade checked before a single panel is cut.' },
      { title: 'In-Line Inspection', description: 'Checkpoints inside the sewing line catching defects at the source operation.' },
      { title: 'AQL 2.5 Final Inspection', description: 'Statistical sampling of finished goods against the approved Golden Sample.' },
      { title: 'Measurement Audits', description: 'Size-set and bulk measurement checks against your POM chart with tolerances.' },
      { title: 'Compliance Documentation', description: 'Fibre content, care labelling and safety compliance for your target market.' },
      { title: 'Pre-Shipment Reports', description: 'Photo-documented inspection reports delivered before cartons leave the floor.' },
    ],
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)
