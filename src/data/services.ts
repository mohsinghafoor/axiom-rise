export interface ServiceInclude {
  title: string
  description: string
}

export interface ServiceStep {
  title: string
  description: string
  /** Names an icon from the template's registry. Falls back to the positional set. */
  icon?: 'pin' | 'wash' | 'motion' | 'shrink' | 'swatch' | 'heat' | 'droplet' | 'sparkles' | 'lock' | 'envelope' | 'carton' | 'cube'
}

export interface ServiceFaq {
  question: string
  answer: string
}

/** A titled point used by the trust and audit blocks of the long-form layout. */
export interface ServicePoint {
  title: string
  description: string
  /** Names an icon from the template's registry. Falls back to the positional set. */
  icon?: 'pin' | 'wash' | 'motion' | 'shrink' | 'swatch' | 'heat' | 'droplet' | 'sparkles' | 'lock' | 'envelope' | 'carton' | 'cube'
}

/** A headed cluster of include cards, for services whose offer splits into distinct disciplines. */
export interface ServiceIncludeGroup {
  title: string
  /** Lead paragraph under the group heading. */
  intro?: string
  items: ServiceInclude[]
}

/** A checklist band: what we require, or what we verify, as a run of ticked criteria. */
export interface ServiceAudit {
  title: string
  intro: string
  /** Further paragraphs under the intro, for a band that argues rather than lists. */
  body?: string[]
  criteriaLabel?: string
  /** Omit on a prose-only band. */
  criteria?: ServicePoint[]
  closing?: string
  ctaLabel: string
  /** 'cream' breaks up a run of navy bands. Defaults to navy. */
  tone?: 'navy' | 'cream'  /** Supporting photograph. Defaults to the service image, then the cycled band imagery. */
  image?: string
}

/** A prose band with supporting imagery, for an argument that needs a section of its own. */
export interface ServiceBand {
  title: string
  body: string[]
  ctaLabel: string
  /** 'cream' breaks up a run of navy bands. Defaults to navy. */
  tone?: 'navy' | 'cream'  /** Supporting photograph. Defaults to the service image, then the cycled band imagery. */
  image?: string
}

/** A cross-link to a related service, rendered in the resources band. */
export interface ServiceResource {
  /** Link text, e.g. "Tech Pack Development Guide". */
  title: string
  description: string
  href: string
}

/**
 * Long-form page content. Services that carry a `detail` block render the
 * full editorial layout; the rest fall back to the compact layout.
 */
export interface ServiceDetail {
  /** Closing hero copy under the standfirst. One paragraph, or several in sequence. */
  heroBody: string | string[]
  /** Overrides the generated "What Our {shortName} Services Include" heading. */
  includesTitle?: string
  /** Lead paragraph under the "What ... Include" heading. */
  includesIntro?: string
  /** Splits the include cards into headed clusters instead of one flat grid. */
  includeGroups?: ServiceIncludeGroup[]
  /** Heading of the warning band, e.g. the risk of cheap freelance work. */
  warning?: { title: string; body: string[]; ctaLabel: string }
  /** Further prose bands, for standalone arguments that need their own section. */
  spotlight?: ServiceBand | ServiceBand[]
  /** Set false on pages with no card-shaped content of their own. */
  showIncludes?: boolean
  /** Set false on pages whose stages are already covered by the include cards. */
  showProcess?: boolean
  /** Overrides the generated "Our {shortName} Process" heading. */
  processTitle?: string
  /** Lead paragraph under the process heading. */
  processIntro?: string
  trust?: {
    eyebrow?: string
    title: string
    /** Lead copy above the cards. One paragraph, or several in sequence. */
    intro?: string | string[]
    /** 'cream' keeps the band off white where it would otherwise abut the testimonials. */
    tone?: 'white' | 'cream'
    points: ServicePoint[]
    /** Inquire pills under each card. Default true; false for advisory cards. */
    cardCtas?: boolean
  }
  /** One or more checklist bands. */
  audit?: ServiceAudit | ServiceAudit[]
  /**
   * Cross-links to related services. Occupies the same slot as `audit`;
   * use tone 'cream' when it follows the navy audit band.
   */
  resources?: { title: string; intro: string; tone?: 'navy' | 'cream'; items: ServiceResource[] }
  /** Omit to keep the component's default heading. */
  testimonialsTitle?: string
  faqTitle: string
  finalCta: {
    title: string
    body: string[]
    primaryLabel: string
    secondaryLabel: string
    /** Destination for the secondary button. Defaults to /contact. */
    secondaryHref?: string
  }
}

export interface Service {
  slug: string
  title: string
  shortName: string
  blurb: string
  image: string
  heroHeadline: string
  heroSub: string
  pain: { title: string; body: string[] }
  includes: ServiceInclude[]
  process: ServiceStep[]
  faqs: ServiceFaq[]
  detail?: ServiceDetail
}
export const services: Service[] = [
  {
    slug: 'tech-pack-design',
    title: 'Tech Pack Design Services',
    shortName: 'Tech Pack Design',
    blurb:
      'Industrial-grade tech packs with full BOM, POM and construction callouts — so the factory builds what you designed, not what it guessed.',
    image: '/images/services/custom-design.webp',
    heroHeadline:
      'Stop Leaving Your Garment Production to Chance. Build Industrial-Grade Tech Packs That Factories Actually Understand.',
    heroSub:
      'A drawing is not a blueprint. Our tech pack design services translate your creative vision into hard manufacturing data, covering Bill of Materials (BOM), Points of Measure (POM), and exact construction tolerances so your bulk run is flawless.',
    pain: {
      title: 'Why a Basic Sketch Will Destroy Your Bulk Production Run',
      body: [
        'You have a beautiful design. You send it to a manufacturer. When the physical sample arrives six weeks later, the shoulder drop is wrong, the fabric drapes terribly, and they used a cheap zipper instead of the heavy-duty metal one you wanted.',
        'This happens when you rely on an illustration instead of a garment specification sheet.',
        'A factory floor does not operate on aesthetics. A sewing operator operates on stitch tension, seam allowances, and exact measurements. When you lack a professional clothing tech pack, you force the factory to make blind decisions on your behalf. As an experienced apparel technical design facility, we stop the bleeding before it starts. We map out the exact industrial math needed to execute your garment perfectly, ensuring that any factory in the world can build it right the first time.',
      ],
    },
    includes: [
      {
        title: 'Technical Flats & CAD Sketches',
        description:
          'A front and back drawing is useless if the factory cannot see the interior construction. We draft flat, 2D technical sketches (CADs) that show exact seam placements, darting, topstitching, and hidden hardware.',
      },
      {
        title: 'Detailed Bill of Materials (BOM)',
        description:
          'If you do not specify the exact thread weight, the factory will use whatever is cheapest. Our BOM outlines every single physical component of the garment: main fabric GSM, lining material, zipper gauge, button types, and specific label placements.',
      },
      {
        title: 'Points of Measure (POM) & Specs',
        description:
          'A medium shirt means nothing without math. We build a comprehensive POM sheet that dictates the exact measurement for the chest, sleeve length, sweep, and collar drop. We establish strict tolerance limits so the factory knows exactly what is acceptable.',
      },
      {
        title: 'Construction & Stitch Callouts',
        description:
          'How a piece is sewn determines how long it lasts. We specify the exact stitch type (e.g., flatlock, overlock, single needle) and the Seams Per Inch (SPI). This guarantees your activewear stretches correctly and your heavy denim does not unravel.',
      },
      {
        title: 'Size Grading Rules',
        description:
          'Your large size cannot just be a blown-up version of your small. We establish mathematical grading rules across your entire size run (XS to XXL). This ensures the garment proportions remain perfect regardless of the buyer’s body type.',
      },
      {
        title: 'Colorways & Pantone Mapping',
        description:
          '“Navy blue” is not a manufacturing color. We map your exact visual identity using industry-standard Pantone TCX or TPX codes. This ensures your fabric dyeing and custom embroidery match your brand guidelines perfectly.',
      },
    ],
    process: [
      {
        title: 'Design Review & Concept Handover',
        description:
          'You bring us your sketches, reference photos, or physical samples. We hold a technical review to understand the exact fit, function, and target retail price of the garment.',
      },
      {
        title: 'Measurement & Material Mapping',
        description:
          'We establish the base size measurements (the POM) and list every raw material required (the BOM). If you need help choosing fabrics, our sourcing team steps in to provide exact material recommendations.',
      },
      {
        title: 'Drafting the Technical Flats',
        description:
          'Our technical designers translate your creative concept into 2D industrial CADs. We map out the front, back, interior, and any specialized detail views needed for complex pockets or hardware.',
      },
      {
        title: 'Final Document Compilation',
        description:
          'We compile the flats, the math, the colorways, and the grading rules into one centralized PDF. You now have a proprietary asset that you can take to any factory on earth.',
      },
    ],
    faqs: [
      {
        question: 'What do I need to provide to start a tech pack?',
        answer:
          'You do not need to be an artist. We can start from a rough sketch, a Pinterest mood board, or a physical garment that you want to modify. We handle the technical translation.',
      },
      {
        question: 'How long does it take to create a tech pack?',
        answer:
          'For a standard garment, the initial technical flats and POM sheets are usually delivered within 7 to 10 business days, depending on complexity and revision rounds.',
      },
      {
        question: 'Do I need a tech pack if I just want a basic t-shirt?',
        answer:
          'Yes. Even a “basic” t-shirt requires specific GSM weights, exact neck ribbing measurements, and hem tolerances. Without a tech pack, the factory will just use their default blank, which defeats the purpose of custom manufacturing.',
      },
      {
        question: 'Can I take your tech pack to another factory?',
        answer:
          'Absolutely. While we are a full-scale manufacturer and would love to build your bulk run, you own the final PDF. It is an industry-standard document accepted by any professional factory globally.',
      },
      {
        question: 'Does the tech pack include pattern making?',
        answer:
          'A tech pack is the instruction manual; the pattern is the physical template. We build the tech pack first to define the rules, and then our pattern makers use it to cut the exact shapes for sampling.',
      },
    ],
    detail: {
      heroBody:
        'Most fashion founders send a basic sketch to an overseas factory and hope for the best. That is exactly how you end up with inconsistent sizing, the wrong zippers, and thousands of dollars in ruined inventory. Factory operators do not guess; they execute exactly what is on the page. We provide tech pack design services that eliminate the guesswork. From technical flats to strict grading rules, we engineer the document that dictates your entire production line.',
      includesIntro:
        'We do not just draw clothes. We build the exact technical parameters required for mass production. Every aspect of the following is meticulously documented to protect your investment.',
      warning: {
        title: 'The Danger of Buying Cheap Tech Packs from Freelancers',
        body: [
          'There is a major risk in buying a $50 tech pack from a freelance marketplace: the person drawing it has likely never actually sewn a garment.',
          'They deliver a document that looks professional but contains impossible construction methods. They suggest fabrics that cannot be sewn with the specified stitch type. When the factory tries to build it, the machine jams or the fabric puckers.',
          'Our tech pack manufacturer team works directly on a live factory floor. We know what machines are required to execute specific seams. We know how different GSM weights drape. When we hand you a technical document, it is not just a pretty drawing, it is an executable manufacturing blueprint tested by real production managers.',
          'Whether you are launching a first capsule, scaling an existing line, or re-engineering a product that never fit properly, we work as your direct production partner. Free global shipping on all sample orders. No intermediaries. No markups. Fixed 21-day lead times from sample sign-off to delivery. Your spec. Your sample. Your brand.',
        ],
        ctaLabel: 'Get a Quote',
      },
      processTitle: 'Our Apparel Technical Design Process',
      trust: {
        eyebrow: 'Axiom Rise',
        title: 'Six Reasons Brands Trust Our Fashion Tech Pack Services',
        points: [
          {
            title: 'Built by Real Factory Engineers',
            description:
              'We are not a standalone design studio. We are a full-service manufacturing facility. The people drafting your tech packs are the same people who manage bulk production runs.',
          },
          {
            title: 'Seamless Factory Integration',
            description:
              'If you choose to manufacture with us after the design phase, there is zero learning curve. The tech pack moves seamlessly from our design desks directly to our cutting room floor.',
          },
          {
            title: 'Sizing Consistency Guaranteed',
            description:
              'We obsess over grading. We ensure your jump from a Medium to a Large makes mathematical sense, preventing the fit issues that plague young fashion brands.',
          },
          {
            title: 'Component Sourcing Support',
            description:
              'We don’t just list a zipper; we help you find it. Our technical team has access to massive trim networks to ensure your BOM is actually sourceable.',
          },
          {
            title: 'Fast, Predictable Turnarounds',
            description:
              'You cannot launch a line if you are waiting months for a spec sheet. We deliver initial technical drafts quickly, keeping your production schedule on track.',
          },
          {
            title: 'Full Ownership of the Files',
            description:
              'You own the final documents. You are never locked into manufacturing with us. You can take our blueprints to any facility you choose.',
          },
        ],
      },
      audit: {
        title: 'Get a Free Manufacturing Feasibility Audit',
        intro:
          'Do you already have a design, but you aren’t sure if it can actually be manufactured at your target price point? Send it to us. Our technical design team will review your concept for free.',
        criteriaLabel: 'What we evaluate:',
        criteria: [
          {
            title: 'Construction Risks',
            description: 'We flag complex seams that will drive up your sewing costs.',
          },
          {
            title: 'Fabric Matching',
            description: 'We tell you if your chosen fabric will actually hold the structure of your design.',
          },
          {
            title: 'Cost-Saving Tweaks',
            description: 'We identify minor adjustments that look identical but reduce manufacturing time.',
          },
          {
            title: 'Production Timeline',
            description: 'We give you a realistic estimate of how long this garment will take to sample.',
          },
        ],
        closing: 'We review the logic. You decide the next step.',
        ctaLabel: 'Submit Your Design for Review',
      },
      testimonialsTitle: 'What Brands Say About Our Tech Pack Development',
      faqTitle: 'Common Questions About Tech Pack Services',
      finalCta: {
        title: 'Ready to Engineer Your Garment Correctly?',
        body: [
          'Every day you delay locking down your technical specifications is a day you risk expensive manufacturing errors, inconsistent sizing, and delayed launches.',
          'Our tech pack design services give you the exact industrial blueprint you need to control your production process. Stop guessing what the factory will do. Start dictating exactly how your garments are built.',
        ],
        primaryLabel: 'Start Your Tech Pack Today',
        secondaryLabel: 'Talk to a Technical Designer',
      },
    },
  },
  {
    slug: 'pattern-making-and-grading',
    title: 'Pattern Making & Grading Services',
    shortName: 'Pattern Making & Grading',
    blurb:
      'Digital blocks, trued seams, shrinkage compensation and true multi-axis grading — the geometry that decides how a garment really fits.',
    image: '/images/services/manufacturing-excellence.webp',
    heroHeadline: 'Industrial Pattern Making Services: The Mathematics Behind Flawless Garment Fit',
    heroSub:
      'A beautiful sketch is useless if it cannot be sewn. The physical reality of how a garment drapes, moves, and fits is dictated entirely by its geometric blueprint.',
    pain: {
      title: 'The Danger of Buying Cheap Patterns from Freelancers',
      body: [
        'There is a major risk in buying a cheap pattern from a freelance marketplace: the person drafting it has likely never actually sewn a garment.',
        'They deliver a file that looks professional but contains impossible construction methods. They suggest fabrics that cannot be sewn with the specified stitch type. When the factory tries to build it, the machine jams or the fabric puckers.',
        'Our pattern engineering team works directly on a live factory floor. We know what machines are required to execute specific seams. We know how different GSM weights drape. When we hand you a graded pattern, it is not just a pretty drawing, it is an executable manufacturing blueprint tested by real production managers.',
      ],
    },
    includes: [
      {
        title: 'Base Block Creation & Seam Truing',
        description:
          'Foundational patterns drafted from your precise Points of Measure, with every intersecting seam mathematically verified so panels meet cleanly instead of puckering.',
      },
      {
        title: 'Embedded Industrial Tolerances',
        description:
          'V-notches programmed at every alignment point and grainline axes locked into the digital vectors, so panels cannot drift during cutting or distort after washing.',
      },
      {
        title: 'Shrinkage Analytics & Compensation',
        description:
          'We calculate the exact shrinkage percentage of your specific fabric and embed that compensation directly into the digital pattern before anything is cut.',
      },
      {
        title: 'Independent Axis Grading',
        description:
          'Vertical and horizontal growth are treated separately, so a 2XL keeps the proportions and design lines of the sample size instead of stretching out of shape.',
      },
      {
        title: 'Plus-Size Shifts & Specialised Algorithms',
        description:
          'New base blocks for XL and above with repositioned darts and re-cut curves, plus dedicated grading rules for missy fits, athletic tapers and maternity wear.',
      },
      {
        title: 'Marker Making & Fabric Yield Optimisation',
        description:
          'Advanced CAD nesting that drives yield to 80–88%. On a 5,000-unit run, increasing fabric yield by just 3% pays for the pattern work several times over.',
      },
    ],
    process: [
      {
        title: 'Tech Pack & Measurement Intake',
        description:
          'We start from your tech pack — Points of Measure, fabric spec and construction callouts — and flag anything that will not draft cleanly before work begins.',
      },
      {
        title: 'Digital Block Drafting',
        description:
          'Base patterns are drafted in Optitex and Gerber, with seams trued and industrial tolerances embedded as the blocks are built.',
      },
      {
        title: 'Physical Muslin Validation',
        description:
          'Blocks are cut in muslin and fitted on a live fit model, because geometry only ever proves itself on a body.',
      },
      {
        title: 'Grading, Markers & File Handover',
        description:
          'Approved blocks are graded across your full size run, nested into production markers and exported as DXF, ASTM, AAMA and PLT files.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a tech pack before you make a pattern?',
        answer:
          'Yes. The tech pack tells us the exact measurements, the fabric type, and the construction methods. We cannot engineer a pattern without knowing exactly what the final garment is supposed to be.',
      },
      {
        question: 'What software do you use for digitizing and grading?',
        answer:
          'Our facility utilizes industry-standard apparel CAD systems like Optitex and Gerber. This ensures our files are highly accurate and universally compatible with modern cutting room machinery.',
      },
      {
        question: 'How long does marker making and grading take?',
        answer:
          'If the base pattern is already approved and the tech pack is clear, we typically complete full size grading and high-yield marker making within 3 to 5 business days.',
      },
    ],
    detail: {
      heroBody:
        'A fraction of an inch in an armhole or a miscalculated grading increment can cascade into thousands of distorted garments on the production floor. We provide apparel pattern making services that translate your creative vision into hard, executable geometry. No guesswork. Just mathematically perfect blueprints ready for the cutting room floor.',
      includeGroups: [
        {
          title: 'The Core Components of Our Pattern Engineering',
          items: [
            {
              title: 'Base Block Creation & Seam Truing',
              description:
                'We start by drafting the base pattern (the “sloper”) based on your exact Points of Measure (POM). In our CAD software, every intersecting seam must be mathematically verified — a process known as “truing.” If the side seam of a front panel is drafted at 14.25 inches, the adjoining back panel must match exactly. This eliminates fabric puckering during assembly.',
            },
            {
              title: 'Embedding Industrial Tolerances',
              description:
                'A pattern is only useful if it accounts for the machinery that will cut it. We program specific V-notches into the perimeter to dictate exact alignment points for sleeves and collars. We also lock the exact grainline axis directly into the digital vector so the automated cutter aligns perfectly with the fabric roll, preventing the garment from twisting after a wash.',
            },
            {
              title: 'Shrinkage Analytics & Compensation',
              description:
                'A pattern drafted for heavy raw denim cannot be used for a 4-way stretch activewear blend. We calculate the exact shrinkage percentage of your chosen raw material (e.g., 4% in the warp and 2% in the weft) and bake those compensation tolerances directly into the digital pattern.',
            },
          ],
        },
        {
          title: 'Advanced Pattern Grading Services',
          items: [
            {
              title: 'Independent Axis Scaling',
              description:
                'Fashion grading rules must treat vertical and horizontal growth independently. The grading jump between a Medium and a Large might add 1.5 inches to the chest circumference but only 0.25 inches to the overall body length. We use complex grading matrices to prevent common issues like dropping necklines on larger sizes.',
            },
            {
              title: 'Plus-Size Sizing Shifts',
              description:
                'Standard grading breaks down entirely once a size run surpasses an XL. Proper plus-size grading requires the establishment of a completely new base block. We reposition bust darts, adjust armscye curves, and extend rise measurements so the garment remains flattering rather than simply oversized.',
            },
            {
              title: 'Specialized Sizing Algorithms',
              description:
                'Different target demographics require entirely different grading rules. We build specific algorithms for missy fits, athletic tapers, big-and-tall ranges, and maternity wear. We ensure your brand’s sizing remains mathematically consistent across every collection.',
            },
          ],
        },
        {
          title: 'Fabric Yield Optimization (Marker Making)',
          items: [
            {
              title: 'Advanced CAD Nesting',
              description:
                'When providing marker making for production, our goal is to achieve the highest possible fabric utilization yield. Utilizing advanced nesting algorithms, our CAD systems rotate and interlock pattern pieces like a highly complex puzzle to minimize dead space on the cutting table.',
            },
            {
              title: 'Protecting Your Profit Margins',
              description:
                'A poorly arranged marker might leave 25% of your fabric as scrap. A highly optimized marker typically achieves an 80% to 88% fabric yield. For a bulk run of 5,000 units, increasing fabric yield by just 3% saves your brand thousands of dollars in raw material costs.',
            },
          ],
        },
        {
          title: 'Pattern Digitizing & Legacy Conversion',
          items: [
            {
              title: 'Precision Paper-to-CAD Digitizing',
              description:
                'Through pattern digitizing services, we permanently archive your physical geometry into digital space. Using precision digitizing tables and calibration pucks, our technicians trace the exact contours, drill holes, and grainlines of your physical assets.',
            },
            {
              title: 'Universal File Interoperability',
              description:
                'Data portability is critical in the modern supply chain. We export all digital files into universal industry-standard formats, including DXF, ASTM, AAMA, and PLT. Whether you manufacture with us or take the file to a facility in Europe, their machines will read our code perfectly.',
            },
          ],
        },
      ],
      trust: {
        eyebrow: 'Axiom Rise',
        title: 'What Makes Our Pattern Design Services Different',
        intro:
          'You can buy a cheap pattern online, but most factories will reject it. We operate as a full-scale manufacturing facility, which means our digital assets are built to strict industrial standards.',
        points: [
          {
            title: 'Built by Factory Engineers, Not Just Designers',
            description:
              'The people drafting your patterns are the same people who manage bulk production runs. We know exactly what machines are required to execute specific seams, and we build those exact seam allowances (e.g., 3/8" for an overlock stitch) directly into the perimeter of the digital file.',
          },
          {
            title: 'The Physical Validation Protocol',
            description:
              'Even with mathematically perfect CAD files, we do not move to bulk cutting without physical validation. The digital pattern is sent to a plotter, cut into muslin, and tested on a live fit model. Any required micro-adjustments are fed back into the CAD system before the final marker is generated.',
          },
          {
            title: 'Total Intellectual Property Ownership',
            description:
              'We never hold your sizing data hostage. Once the project is paid for, we release the fully graded DXF files to you. You are never locked into using our bulk manufacturing services to access your own digital blueprints.',
          },
        ],
      },
      resources: {
        title: 'Essential Resources for Production Planning',
        intro:
          'A flawless pattern is only one piece of the manufacturing puzzle. To ensure your production run is executed perfectly, we recommend reviewing our related technical guides:',
        items: [
          {
            title: 'Tech Pack Development Guide',
            description:
              'Learn how to build the Bill of Materials (BOM) and Points of Measure (POM) required before a pattern can be drafted.',
            href: '/services/tech-pack-design',
          },
          {
            title: 'Cut & Sew Manufacturing Process',
            description:
              'See how our digital markers are fed into automated laser cutters for high-volume bulk production.',
            href: '/services/cut-and-sew-manufacturing',
          },
          {
            title: 'Fabric Sourcing Standards',
            description:
              'Understand how different GSM weights and fabric blends impact shrinkage tolerances and pattern grading.',
            href: '/services/fabric-sourcing',
          },
        ],
      },
      testimonialsTitle: 'Customer Feedback',
      faqTitle: 'Common Technical Questions',
      finalCta: {
        title: 'Ready to Lock Down Your Sizing?',
        body: [
          'Every day you rely on amateur patterns is a day you risk expensive manufacturing errors, twisted seams, and angry customers returning ill-fitting garments.',
          'Stop guessing in the cutting room. Start dictating exactly how your garments are built with industrial-grade digital blueprints.',
        ],
        primaryLabel: 'Start Your Pattern Project',
        secondaryLabel: 'Talk to a CAD Engineer',
      },
    },
  },
  {
    slug: 'apparel-prototyping-and-sampling',
    title: 'Apparel Prototyping & Sampling Services',
    shortName: 'Prototyping & Sampling',
    blurb:
      'Muslin drafts, fit sessions, size sets and the Pre-Production Sample that becomes your contractual Golden Sample.',
    image: '/images/services/quality-assurance.webp',
    heroHeadline: 'Industrial Apparel Prototyping Services: Validating the Math Before Bulk Production',
    heroSub:
      'Moving directly from a digital tech pack to a bulk manufacturing run is the single fastest way to destroy a fashion brand. A digital CAD file assumes perfect conditions.',
    pain: {
      title: 'The Financial Risk of Skipping the Prototype Phase',
      body: [
        'You approve a digital blueprint. You pay the deposit for 2,000 units. Six weeks later, the freight arrives. The design looks correct on a hanger, but when your fit model puts it on, the armhole binds, the neckline droops, and the fabric puckers heavily along the side seam.',
        'Because you skipped the physical prototyping phase, you now own 2,000 unwearable garments.',
        'A professional clothing sample maker does more than just stitch fabric together. They validate the engineering. A physical prototype reveals the hidden mechanical conflicts between your chosen textile and the drafted geometry. By investing in rigorous garment sampling services, you isolate and fix these mechanical failures on a single unit, rather than replicating the failure thousands of times on the factory floor.',
      ],
    },
    includes: [
      {
        title: 'The Muslin Draft (First Proto)',
        description:
          'Before we cut into your expensive final fabric, we cut the base pattern out of muslin or a substitute fabric with a similar drape. The goal here is not aesthetic perfection; it is pure geometric validation. We test the initial sloper on a fit model to ensure the core Points of Measure (POM) align with the body’s natural mechanics.',
      },
      {
        title: 'The Fit Sample',
        description:
          'Once the muslin is approved, we cut the first physical sample using your actual bulk fabric. This is where we test fabric behavior. Does the 350 GSM fleece stretch properly across the shoulders? Does the zipper tape lay flat against the placket? We conduct deep fit sessions and mark any required micro-adjustments directly on the garment to feed back to the CAD pattern-making team.',
      },
      {
        title: 'The Size Set Sample (Grading Validation)',
        description:
          'Approving a size Medium does not guarantee the XXL will fit correctly. Before bulk grading is finalized, we produce a size set, a physical sample of every single size in your matrix (e.g., XS, M, XXL). This proves that our non-linear grading algorithms maintain the correct silhouette across extreme ends of the size spectrum.',
      },
      {
        title: 'The Pre-Production Sample (PPS)',
        description:
          'This is the most critical phase of our clothing prototype services. The PPS is built using the exact bulk fabric, the exact custom hardware, and the exact industrial sewing machines that will be used for the final run. This sample tests the factory floor’s capability to execute the tech pack. Once you approve this physical asset, it becomes the “Golden Sample.”',
      },
      {
        title: 'The Salesman Sample (SMS)',
        description:
          'Once the PPS is locked, brands often need physical units to show wholesale buyers or to shoot for their lookbook before bulk production finishes. We produce small-batch SMS runs so your marketing and sales teams can start generating revenue while the bulk line is running.',
      },
      {
        title: 'Top of Production Sample (TOP)',
        description:
          'The TOP sample is not a prototype; it is the first actual garment pulled directly off the active bulk production line. We overnight this unit to you. It serves as final proof that the bulk manufacturing run is adhering strictly to the approved PP Golden Sample before the rest of the units are boxed and shipped.',
      },
    ],
    process: [
      {
        title: 'Asset Review & Sample Brief',
        description:
          'We confirm the tech pack is finalised and the graded patterns are production-ready in DXF/ASTM, then assign a master sample maker to your style.',
      },
      {
        title: 'Muslin Draft & Fit Iteration',
        description:
          'The first proto is cut, fitted and adjusted. Iteration at this stage is normal — and far cheaper than iteration after bulk.',
      },
      {
        title: 'Machinery Calibration & Wash Testing',
        description:
          'Needle type, stitch selection and thread tension are set against your fabric, and wash testing documents shrinkage in warp and weft so patterns can be scaled.',
      },
      {
        title: 'PPS Approval & Golden Sample Sign-Off',
        description:
          'You approve a physical Pre-Production Sample. It is sealed as the Golden Sample and placed on the floor as the benchmark every AQL inspection measures against.',
      },
    ],
    faqs: [
      {
        question: 'Why do I have to pay for a sample if I am ordering bulk?',
        answer:
          'Sampling is a highly labor-intensive process. We must stop the automated bulk line, manually calibrate the cutting lasers for a single unit, and assign a master sample maker to construct the garment by hand. The cost of sampling covers the immense engineering hours required to set up the bulk run correctly.',
      },
      {
        question: 'What happens if the first fit sample is wrong?',
        answer:
          'Prototyping is an iterative process. It is completely normal for the first fit sample to require micro-adjustments. We log your pinned feedback during the fit session, update the digital pattern, and cut a second iteration. We do not proceed to the Pre-Production stage until the fit is mathematically flawless.',
      },
      {
        question: 'Can I skip the muslin draft and go straight to the PP sample?',
        answer:
          'If you are providing a verified, factory-tested pattern, yes. If this is a brand-new design that has never been sewn before, skipping the muslin draft is highly dangerous. It almost always results in wasted bulk fabric because the base geometry hasn’t been validated.',
      },
      {
        question: 'Do you offer 3D Virtual Prototyping?',
        answer:
          'We use 3D CAD modeling during the pattern-making phase to verify seam truing, but we do not rely on it as a final prototype. Virtual fabric does not behave exactly like physical fabric under the tension of a sewing machine. Physical sampling remains the only way to guarantee a flawless bulk run.',
      },
    ],
    detail: {
      heroBody:
        'The physical reality of raw materials — how a 4-way stretch fabric behaves under an industrial overlock machine, or how heavyweight denim shrinks after an enzyme wash — can only be verified through physical prototyping. We provide apparel prototyping services that act as the ultimate risk-mitigation protocol. We do not just sew a single test garment to check the visual aesthetic. We run a rigorous, multi-stage physical validation process to test stitch tension, fabric yield, and grading accuracy before a single piece of fabric is cut for bulk.',
      includesTitle: 'The Six Critical Stages of Industrial Garment Sampling',
      includesIntro:
        'Amateur facilities treat sampling as a single step. Professional manufacturing requires a staged progression. Our pre-production apparel sampling protocol isolates specific variables at distinct stages to ensure absolute perfection.',
      warning: {
        title: 'Machinery Calibration and Shrinkage Validation',
        body: [
          'A proper prototype tests the factory, not just the design. Different textiles require radically different industrial setups.',
          'During the Fit and PPS phases, our production engineers monitor exactly how the fabric interacts with the machinery. If a tightly woven nylon requires a specific ballpoint needle to prevent thread breakage, we identify that requirement during sampling. If a specific seam requires a 4-thread overlock instead of a standard lockstitch to maintain elasticity, we update the Bill of Materials (BOM) immediately.',
          'Furthermore, we subject the physical prototypes to strict wash testing. We document the exact shrinkage percentages in both the warp and weft directions. If the garment shrinks by 4% after a standard wash cycle, we feed that data back into the digital CAD system to scale the digital pattern up by 4%. This ensures the end consumer receives a garment that fits perfectly after laundering.',
        ],
        ctaLabel: 'Get a Quote',
      },
      spotlight: {
        title: 'The Contractual Power of the “Golden Sample”',
        body: [
          'Many brands view a prototype simply as a visual preview. At Axiom Rise, the Pre-Production Sample functions as a binding manufacturing contract.',
          'When you approve the final PPS, it officially becomes the Golden Sample. We place this physical garment directly on the factory floor alongside the digital tech pack. Our Quality Control inspectors use this physical garment as the absolute benchmark for Acceptable Quality Limits (AQL).',
          'If a garment on the bulk line has a collar width that deviates from the Golden Sample beyond the allowed tolerance (e.g., +/- 0.25 inches), it is instantly rejected. The prototype is what keeps the factory accountable.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      // The six sampling stages above already carry the sequence, so no separate process band.
      showProcess: false,
      trust: {
        title: 'How to Review a Garment Sample Like a Pro',
        intro:
          'When we send you a physical prototype, reviewing it requires more than just looking in the mirror. To keep production moving efficiently, we train our brand partners to provide actionable, industrial feedback.',
        cardCtas: false,
        points: [
          {
            title: 'Pinning and Taping',
            icon: 'pin',
            description:
              'If a seam is too loose, do not just say “make it tighter.” Put the garment on a fit model and physically pin or tape the excess fabric. Take detailed photographs of the pinned areas so our pattern makers know exactly how many centimeters to subtract from the digital file.',
          },
          {
            title: 'Wash Testing at Home',
            icon: 'wash',
            description:
              'We do our own industrial wash tests, but we always advise clients to wash the Fit Sample in a standard home washing machine. This validates how the garment will behave in the real world when your actual customer owns it.',
          },
          {
            title: 'Wear Testing for Mobility',
            icon: 'motion',
            description:
              'A garment might look perfect when the model is standing still. Have your fit model sit down, raise their arms, and stretch. If the armscye is cut too high, the entire shirt will lift when they raise their arms. Mobility testing is the only way to validate true athletic or streetwear fits.',
          },
        ],
      },
      audit: {
        title: 'Required Assets to Initiate Sampling',
        intro:
          'We cannot build an accurate physical prototype based on a mood board. To move into the sampling phase, the preliminary engineering must be complete.',
        criteria: [
          {
            title: 'Comprehensive Tech Packs',
            description:
              'Our sample makers require a fully finalized tech pack containing detailed construction callouts, stitch types, and exact Points of Measure (POM). Without this, the sewing operators are forced to guess your intentions.',
          },
          {
            title: 'Digital Graded Patterns',
            description:
              'We require production-ready digital CAD files (DXF/ASTM formats). If you only have sketches, you must route through our pattern drafting department before we can begin cutting fabric for a physical sample.',
          },
        ],
        ctaLabel: 'Inquire Now',
      },
      faqTitle: 'Technical Sourcing and Sampling FAQ',
      finalCta: {
        title: 'Ready to Validate Your Design?',
        body: [
          'Do not guess on your bulk production. A mechanical flaw in your pattern will multiply across thousands of units on the factory floor.',
          'Our clothing sample making services provide the hard physical validation you need to protect your investment. Let our engineers stress-test your design, lock in your shrinkage tolerances, and deliver the Golden Sample that guarantees a flawless bulk run.',
        ],
        primaryLabel: 'Start the Sampling Process',
        secondaryLabel: 'Talk to a Production Engineer',
      },
    },
  },
  {
    slug: 'fabric-sourcing',
    title: 'Fabric Sourcing Services',
    shortName: 'Fabric Sourcing',
    blurb:
      'Mill-direct custom knits and wovens, GSM engineering, dye-to-match lab dips and mandatory shrinkage and crocking tests before bulk is cut.',
    image: '/images/services/supply-chain.webp',
    heroHeadline: 'Industrial Fabric Sourcing Services: Engineering Your Textiles Before We Sew',
    heroSub:
      'The most perfectly graded pattern in the world will fail if the raw material is cheap. In industrial apparel manufacturing, fabric is not just a texture, it is a mathematical variable.',
    pain: {
      title: 'The Financial Trap of “Wholesale” and Deadstock Fabrics',
      body: [
        'Most young fashion brands start by buying “stock” fabrics from local wholesalers. This seems cost-effective until your brand scales. You order 500 yards of a specific blue twill. Six months later, you need 2,000 more yards for a restock, but the wholesaler has discontinued that exact fabric. Your supply chain is instantly paralyzed.',
        'When you use professional garment textile sourcing, you own the formula. We bypass the wholesalers and work directly with massive industrial mills. By utilizing our apparel material sourcing capabilities, we lock in your exact yarn blend, knitting structure, and dye recipe. When you need a restock two years from now, the fabric will be identical to the very first yard.',
      ],
    },
    includes: [
      {
        title: 'Custom Knitting & Weaving',
        description:
          'Premium long-staple, combed, ring-spun yarns specified over standard carded cotton, across custom knits (interlock, rib, jersey, pique) and wovens (twill, canvas, poplin) at controlled yarn tension.',
      },
      {
        title: 'GSM Engineering',
        description:
          'Weight calibrated to the exact number your product needs, from 120 GSM modal blends to 500 GSM loopback French Terry — because GSM is what decides drape.',
      },
      {
        title: 'Dye-To-Match Lab Dips',
        description:
          'Custom chemical dye recipes formulated to your Pantone TCX/TPX standard, with 5x5 inch lab dips approved under standardised light before a single bulk vat is filled.',
      },
      {
        title: 'Core Textile Capabilities',
        description:
          'Combed cotton jersey, French Terry and brushed fleece, selvedge and industrial denim in specific ounce weights (12oz, 14oz), and polyester, nylon and spandex blends that hold compression.',
      },
      {
        title: 'Technical Treatments & Finishes',
        description:
          'Enzyme washes to reduce pilling, silicone washes for a premium peach hand-feel, DWR coatings for outerwear and anti-microbial finishes for activewear.',
      },
      {
        title: 'Mandatory Performance Testing',
        description:
          '50x50cm squares run through industrial washers and dryers — batches are rejected past the 3–5% shrinkage tolerance — plus wet and dry crocking tests for colourfastness.',
      },
    ],
    process: [
      {
        title: 'Technical Translation',
        description:
          'We review your tech pack and translate your aesthetic desires into industrial specifications (e.g., translating “heavy and soft” to “400 GSM Combed Cotton French Terry with a Silicone Finish”).',
      },
      {
        title: 'Sourcing and Knitting',
        description:
          'We send the specifications to our network of vetted mills. If the fabric doesn’t exist, we commission the mill to custom-knit the greige (raw, undyed) goods from scratch.',
      },
      {
        title: 'Lab Dips and Swatch Approval',
        description:
          'We formulate the DTM dye recipes and send physical lab dips and feel-swatches to your headquarters for strict tactile and visual approval.',
      },
      {
        title: 'Bulk Dyeing and Testing',
        description:
          'Once the lab dip is approved, the mill dyes the bulk yardage. Before the fabric moves to our cutting room, it undergoes mandatory stress testing.',
      },
    ],
    faqs: [
      {
        question: 'Can I provide a physical shirt and ask you to match the fabric?',
        answer:
          'Yes. If you send us a physical reference garment, our textile engineers will analyze the weave, weigh the GSM, and burn-test the fibers to determine the exact blend. We will then instruct the mill to replicate it.',
      },
      {
        question: 'What is “Greige” fabric?',
        answer:
          'Greige (pronounced “gray”) refers to raw, unfinished, and undyed fabric straight off the knitting or weaving machine. We often buy massive quantities of greige goods and hold them in stock, allowing us to dye them quickly to your specific DTM Pantone codes.',
      },
      {
        question: 'Do you ensure ethical sourcing?',
        answer:
          'Absolutely. We partner exclusively with mills that hold international certifications such as OEKO-TEX Standard 100 (ensuring no harmful chemicals are used in the dyes) and GOTS for organic cotton requests.',
      },
      {
        question: 'Can I source fabric through you but sew it elsewhere?',
        answer:
          'Our sourcing services are tightly integrated into our full-package manufacturing pipeline. We do not operate as a standalone fabric wholesaler; we source the materials explicitly to feed into our own cut-and-sew production floors.',
      },
    ],
    detail: {
      heroBody:
        'If the GSM is too low, the garment will lose its structure. If the dye formulation is rushed, the color will bleed in the first wash. We provide apparel fabric sourcing services that eliminate the gamble of wholesale buying. We do not just buy pre-made rolls off a wholesale rack; we engineer your textiles from the yarn up. Whether you need custom-knit 450 GSM French Terry or a proprietary denim weave, we manage the exact specifications directly with the textile mills.',
      includeGroups: [
        {
          title: 'Custom Knitting and Weaving Capabilities',
          intro: 'We do not bend your tech pack to fit existing fabric; we build the fabric to fit your tech pack.',
          items: [
            {
              title: 'Controlling the Yarn',
              description:
                'The quality of a fabric starts at the fiber level. For premium cotton garments, we do not settle for standard carded cotton, which pills and degrades quickly. Our custom fabric sourcing network prioritizes long-staple, combed, and ring-spun yarns that provide a drastically softer hand-feel and superior durability over thousands of wash cycles.',
            },
            {
              title: 'Knit vs. Woven Engineering',
              description:
                'Whether you are building high-stretch activewear or rigid workwear, the construction of the textile matters. We manage the production of both custom knits (interlock, rib, jersey, pique) and strict wovens (twill, canvas, poplin). We specify the exact yarn tension on the knitting machines to ensure the fabric yields the correct stretch recovery.',
            },
          ],
        },
        {
          title: 'GSM Engineering: Controlling Drape and Weight',
          intro:
            'GSM (Grams per Square Meter) is the universal metric for fabric weight. It dictates how warm a garment is, how it drapes on the body, and how premium it feels on the retail rack.',
          items: [
            {
              title: 'Precision Weight Matching',
              description:
                'You cannot build a luxury streetwear hoodie using a 200 GSM fleece. When brands come to us for B2B fabric sourcing, we engineer the exact weight required for the silhouette. If you need a heavy, structured 500 GSM loopback French Terry or an ultra-light, breathable 120 GSM modal blend, we calibrate the mill’s knitting machines to hit that exact mathematical target.',
            },
          ],
        },
        {
          title: 'The Science of Color: Dye-To-Match (DTM) and Lab Dips',
          intro:
            '“Navy Blue” is a subjective term. In industrial manufacturing, color is a hard science dictated by chemical recipes.',
          items: [
            {
              title: 'Pantone TCX / TPX Matching',
              description:
                'We do not use stock dye lots. We use a rigorous Dye-To-Match (DTM) process. You provide us with an exact Pantone TCX code or a physical color swatch. We take that standard to the dye house and formulate a custom chemical recipe to match it perfectly.',
            },
            {
              title: 'The Lab Dip Approval Process',
              description:
                'Before we dye 3,000 yards of fabric, we run a “Lab Dip.” We dye a small 5x5 inch swatch of your specific raw fabric using different chemical variations (e.g., Option A, Option B, Option C). We ship these swatches to your headquarters for strict tactile and visual approval. We only proceed with bulk dyeing once you approve the exact chemical formulation under a standardized light box.',
            },
          ],
        },
        {
          title: 'Core Textile Capabilities',
          intro:
            'Our direct relationships with some of the largest textile mills in South Asia give us unparalleled access to premium raw materials.',
          items: [
            {
              title: 'Heavyweight Cottons and Fleece',
              description:
                'We excel in sourcing and knitting premium, high-GSM cottons. We supply combed cotton jersey for luxury t-shirts, and tightly knit French Terry and brushed fleece for high-end hoodies and sweatpants that require immense structural integrity.',
            },
            {
              title: 'Industrial and Selvedge Denim',
              description:
                'Denim requires specialized weaving capabilities. We source raw, sanforized, and selvedge denim in specific ounce weights (e.g., 12oz, 14oz). We also manage the exact blend of elastane required for stretch-denim fits.',
            },
            {
              title: 'Performance and Activewear Blends',
              description:
                'Athletic garments require strict moisture-wicking and four-way stretch properties. We source complex polyester, nylon, and spandex blends, ensuring the fabric retains its elasticity and compression after hundreds of uses.',
            },
          ],
        },
        {
          title: 'Technical Treatments and Fabric Finishes',
          intro:
            'The raw fabric is only the baseline. How the fabric is finished dictates how it feels against the skin and how it ages.',
          items: [
            {
              title: 'Enzyme and Silicone Washes',
              description:
                'Raw cotton can feel harsh. We mandate enzyme washes at the mill level to break down stray surface fibers, drastically reducing future pilling. We also apply silicone washes to give the textile a premium, ultra-soft “peach” hand-feel that luxury buyers expect.',
            },
            {
              title: 'Anti-Microbial and DWR Coatings',
              description:
                'For performance and outerwear brands, we manage advanced chemical finishes. This includes applying Durable Water Repellent (DWR) coatings to jacket shells, or anti-microbial treatments to activewear fabrics to prevent odor retention.',
            },
          ],
        },
      ],
      processTitle: 'The Four-Phase Sourcing Process',
      processIntro:
        'We treat garment factory fabric sourcing as a strict, phased progression to mitigate all financial risk before bulk production.',
      trust: {
        title: 'Mandatory Performance Testing',
        intro:
          'A fabric might feel great, but if it fails basic industrial stress tests, it will ruin your brand reputation. We do not accept fabric onto our cutting floor until it passes strict compliance checks.',
        cardCtas: false,
        points: [
          {
            title: 'Shrinkage and Skewing',
            icon: 'shrink',
            description:
              'We cut a 50x50cm square of the bulk fabric, mark it, and run it through industrial washers and dryers. We measure the exact shrinkage in the warp and weft directions. If it shrinks beyond the acceptable tolerance (typically 3-5%), the entire roll is rejected.',
          },
          {
            title: 'Colorfastness and Crocking',
            icon: 'swatch',
            description:
              'We test the dye’s stability. We perform “crocking” tests by rubbing the dyed fabric against a white cloth under wet and dry conditions. If the dye bleeds or rubs off, the chemical fixation failed, and the fabric is sent back to the dye house.',
          },
        ],
      },
      spotlight: {
        title: 'Understanding Sourcing Economics and MOQs',
        body: [
          'Custom fabric engineering is an industrial process. It requires spinning yarn, calibrating massive knitting machines, and filling massive dye vats.',
          'Because of this, true custom fabric sourcing manufacturer services carry Minimum Order Quantities (MOQs). While we can source smaller batches of stock fabric for sampling, commissioning a custom DTM dye run typically requires a minimum of 300 to 500 kilograms of fabric per colorway. This ensures the chemical recipes and machine calibrations remain economically viable for your bulk run.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      audit: {
        title: 'Get a Free Fabric Feasibility Review',
        intro:
          'Do not guess if your target fabric actually exists at your target price point. Our sourcing engineers will review your tech pack for free.',
        criteriaLabel: 'What we evaluate:',
        criteria: [
          {
            title: 'Availability',
            description: 'Can we knit this specific blend at this GSM?',
          },
          {
            title: 'Dye Complexity',
            description: 'Are you requesting a neon or reactive dye that requires specialized processing?',
          },
          {
            title: 'MOQ Reality Check',
            description:
              'We tell you exactly how many yards of fabric you will need to commit to based on your requested customization.',
          },
          {
            title: 'Finish Recommendations',
            description: 'We advise on which enzyme or silicone washes will achieve your desired hand-feel.',
          },
        ],
        closing: 'We review the science. You decide if you want us to source it.',
        ctaLabel: 'Request Your Free Review',
      },
      faqTitle: 'Technical Sourcing FAQ',
      finalCta: {
        title: 'Ready to Lock Down Your Raw Materials?',
        body: [
          'Every day you rely on unpredictable wholesale fabric markets is a day you risk a catastrophic supply chain failure.',
          'Our fabric sourcing services give you complete control over your raw materials. Stop settling for fabrics that are “close enough.” Start engineering textiles that perfectly match your brand’s premium standards.',
        ],
        primaryLabel: 'Start Your Sourcing Project',
        secondaryLabel: 'Talk to a Textile Engineer',
      },
    },
  },
  {
    slug: 'cut-and-sew-manufacturing',
    title: 'Cut & Sew Manufacturing Services',
    shortName: 'Cut & Sew Manufacturing',
    blurb:
      'Zero-tension spreading, CNC cutting, category-specific sewing mechanics and AQL audits measured against your Golden Sample.',
    image: '/images/services/global-export.webp',
    heroHeadline: 'Cut and Sew Manufacturing: The Engineering of the Assembly Line',
    heroSub:
      'In the apparel industry, a beautiful tech pack and expensive raw fabric mean nothing if the cutting and assembly phases are compromised. If a blade shifts by a millimeter during the cutting phase, or if a sewing operator applies too much tension to a 4-way stretch fabric, the entire production run is effectively ruined.',
    pain: {
      title: 'The Financial Reality of the Cutting Room Floor',
      body: [
        'Amateur brands spend months obsessing over design but completely ignore the cutting process. In reality, the cutting room is where the profit margins of your entire collection are determined.',
        'Fabric is the single highest cost variable in garment production. How that fabric is laid out, tensioned, and sliced dictates your raw material waste.',
      ],
    },
    includes: [
      {
        title: 'Fabric Relaxation & Zero-Tension Spreading',
        description:
          'Yardage is relaxed before it is laid and spread on zero-tension machines, so kinetic tension does not release later and pull your sizing out of spec.',
      },
      {
        title: 'CNC Laser Cutting & Band Knives',
        description:
          'Automated cutting to micro-millimetre accuracy across everything from 450 GSM fleece to delicate activewear, with manual band knives used where they are the better tool.',
      },
      {
        title: 'Bundling & Precision Notching',
        description:
          'CNC-punched drill holes and V-notches tell the sewing operator exactly where a pocket, sleeve cap or dart aligns — the panels carry their own instructions.',
      },
      {
        title: 'Stretch Tolerances & Activewear Assembly',
        description:
          '4-thread overlock and coverstitch deployment for stretch recovery, plus flatlock seams that eliminate chafing on activewear, swimwear and performance gear.',
      },
      {
        title: 'Torque Management & Bar-Tack Reinforcement',
        description:
          'Walking-foot machines for 14oz denim and 400+ GSM French Terry to stop skipped stitches and snapped needles, with automated bar-tacks at cargo pocket corners, belt loops and zip fly bases.',
      },
      {
        title: 'In-Line AQL Audits & Steam Finishing',
        description:
          'Continuous stitch audits measure Seams Per Inch and thread tension against the Golden Sample within +/- 0.25 inches, before thread trimming and industrial steam pressing.',
      },
    ],
    process: [
      {
        title: 'Production Assets Locked',
        description:
          'Three things reach the floor before a blade moves: the approved Golden Sample, production-ready DXF/ASTM markers, and a complete Bill of Materials.',
      },
      {
        title: 'Spreading & CNC Cutting',
        description:
          'Fabric is relaxed, spread at zero tension and cut to the nested marker, then notched, drilled and bundled by size for the line.',
      },
      {
        title: 'Line Assembly & In-Line QC',
        description:
          'Bundles run a line set up for your specific textile, with in-line stitch audits catching deviation at the operation where it happens rather than at the end.',
      },
      {
        title: 'Finishing, AQL & Packing',
        description:
          'Thread trimming, industrial steam pressing, AQL inspection against the Golden Sample, then folding, tagging, poly-bagging and barcode labelling.',
      },
    ],
    faqs: [
      {
        question: 'How do I know the factory won’t steal my excess fabric during CMT?',
        answer:
          'Transparency is our core operating principle. During a CMT run, we calculate the exact fabric yield based on the digital marker. We provide a full consumption report detailing exactly how many yards were used to cut the garments and how many yards remain as scrap.',
      },
      {
        question: 'How do you handle grading and shrinkage?',
        answer:
          'If a heavyweight 100% cotton hoodie is sewn perfectly to size but shrinks by 5% in the customer’s washing machine, the product is a failure. We mandate strict wash-testing during prototyping. We calculate the exact shrinkage percentage of the raw fabric and artificially inflate the digital patterns by that exact percentage before the CNC machine cuts them. The garment will look slightly oversized coming off the sewing line but will shrink to the perfect dimensions after its first wash.',
      },
      {
        question: 'What is the standard lead time for a bulk production run?',
        answer:
          'Once the Golden Sample is approved and the bulk fabric is secured on the factory floor, a standard cut and sew run typically takes 4 to 6 weeks. This timeline accounts for the CNC cutting, the assembly line sewing, and the rigorous AQL inspection phases.',
      },
      {
        question: 'Do you provide branded packaging and poly-bagging?',
        answer:
          'Yes. As part of our final trimming and finishing phase, we can fold, tag, and poly-bag every garment to your exact retail specifications. We can apply custom barcode stickers and warning labels so the inventory is instantly ready for Amazon FBA or your 3PL warehouse.',
      },
    ],
    detail: {
      heroBody: [
        'Cut and sew manufacturing is not simply “putting clothes together.” It is a strict mechanical science. It requires balancing fabric yield algorithms, stitch tension matrices, and rigorous quality control (AQL) at every workstation on the factory floor.',
        'At Axiom Rise, we operate an industrial cut and sew factory built for brands that demand precision over speed. Below we break down the mechanical realities, the production models, and the exact machinery protocols required to execute a high-volume production run flawlessly.',
      ],
      includeGroups: [
        {
          title: 'Inside the Cutting Room',
          items: [
            {
              title: 'Fabric Relaxation and Ply Tensioning',
              description:
                'Before a single blade is engaged, massive rolls of fabric are unspooled and layered onto cutting tables in stacks known as “plies.” If the fabric is pulled tightly during this spreading process, it retains kinetic tension. Once the fabric is cut, that tension releases, and the cut panels instantly shrink. If a facility does not employ automated, zero-tension spreaders, your final garments will be mathematically smaller than your approved pattern.',
            },
            {
              title: 'CNC Laser Cutting vs. Manual Band Knives',
              description:
                'Manual tracing and cutting with hand shears are acceptable for a single prototype, but they are catastrophic for bulk runs. We deploy automated CNC (Computer Numerical Control) cutting machines. Your digital DXF marker files are fed directly into the machine, which cuts through heavy 450 GSM fleece or delicate activewear with micro-millimeter precision. For extreme-density fabrics, our operators utilize industrial band knives to prevent fraying and edge distortion.',
            },
            {
              title: 'Bundling and Precision Notching',
              description:
                'Once the fabric is cut, every piece is bundled and labeled before it hits the sewing floor. During the cutting phase, the CNC machine punches exact drill holes and V-notches into the perimeter of the fabric. These industrial markers tell the sewing operators exactly where to align a pocket, a sleeve cap, or a dart, completely removing guesswork from the assembly line.',
            },
          ],
        },
        {
          title: 'Demystifying Production Models: CMT vs. Full Production Package (FPP)',
          intro:
            'Depending on the scale and structure of your supply chain, we offer two distinct avenues for bulk assembly. Understanding which production model fits your current operational capacity is crucial before initiating a run with any cut and sew apparel manufacturer.',
          items: [
            {
              title: 'What is CMT Manufacturing (Cut, Make, Trim)?',
              description:
                'In a CMT manufacturing model, the brand acts as the primary supplier. You purchase the raw fabric, source the custom zippers, buy the woven labels, and ship all the physical raw materials directly to our loading dock. We provide the labor and the machinery: we Cut the fabric based on your marker, Make (sew) the garment, and Trim (finish and package) the final product.',
            },
            {
              title: 'What is the Full Production Package (FPP)?',
              description:
                'For brands that want a single point of accountability, the Full Production Package (often referred to as OEM) is the industry standard. In this model, you provide the technical blueprint (the Tech Pack), and we handle the entire supply chain. We source the raw greige fabric, manage the Dye-to-Match (DTM) lab dips, engineer the patterns, and execute the final custom cut and sew services. FPP eliminates the logistical nightmare of coordinating between a fabric mill, a dye house, and a sewing floor.',
            },
          ],
        },
        {
          title: 'The Mechanics of Industrial Sewing',
          intro:
            'A standard straight-stitch sewing machine cannot build a complex technical garment. Different fabrics and structural stress points require entirely different mechanical setups. A premium contract sewing services facility must maintain a diverse fleet of specialized machinery to prevent seam failure.',
          items: [
            {
              title: 'Stretch Tolerances and Activewear Assembly',
              description:
                'If you sew four-way stretch spandex with a standard rigid lockstitch, the thread will snap the moment the end-user puts the garment on. For activewear, swimwear, and performance gear, we deploy 4-thread overlock and coverstitch machines. These machines loop the thread in a way that allows the seam to stretch simultaneously with the fabric. Furthermore, we utilize flatlock stitching to eliminate interior seam chafing on tight-fitting athletic wear.',
            },
            {
              title: 'Torque Management for Heavyweight Textiles',
              description:
                'Working with 14oz raw denim or 400+ GSM French Terry requires immense mechanical torque. Standard sewing machines will skip stitches or snap needles when attempting to penetrate multiple layers of heavy fabric. We utilize heavy-duty walking-foot machines that feed the thick layers of fabric evenly through the needle plate, ensuring the top layer does not bunch up or shift out of alignment.',
            },
            {
              title: 'Bar-Tacking and Stress Point Reinforcement',
              description:
                'Workwear and premium streetwear must endure heavy physical strain. We program automated bar-tack machines to fire concentrated zig-zag stitches over the specific stress points of the garment — such as the corners of cargo pockets, belt loops, and the base of a zipper fly. This industrial reinforcement ensures the garment does not tear during extreme use.',
            },
          ],
        },
        {
          title: 'Managing Seam Allowances (SA) and Edge Finishing',
          intro:
            'The raw edge of a cut piece of fabric will naturally fray and unravel. How that edge is treated inside the garment is the defining difference between cheap fast fashion and luxury apparel.',
          items: [
            {
              title: 'Binding and Taped Seams',
              description:
                'For unlined garments like luxury chore jackets or high-end trousers, exposed interior seams are unacceptable. We utilize specialized binding folders on the sewing machines to wrap the raw interior edges in a contrasting cotton or satin tape. This not only prevents fraying but provides a highly premium aesthetic when the garment is unbuttoned or flipped inside out.',
            },
            {
              title: 'Clean Finishing and French Seams',
              description:
                'For lightweight wovens and shirting, we deploy French seams. This is a double-sewing technique where the raw edge is folded in on itself and stitched down a second time, completely enclosing the fraying edge within the seam itself. It requires twice the labor of a standard overlock stitch but results in an incredibly durable, clean interior finish.',
            },
          ],
        },
        {
          title: 'Trimming, Pressing, and Final Finishing',
          intro:
            'A garment is not finished just because the sewing is complete. The final presentation of the product dictates how it will be perceived by the end consumer or the wholesale buyer.',
          items: [
            {
              title: 'Thread Trimming and Cleanup',
              description:
                'High-speed industrial sewing leaves “thread tails” at the end of every seam. Dedicated trimming operators manually inspect every inch of the garment, snipping away loose threads and verifying that all bar-tacks are securely locked in place.',
            },
            {
              title: 'Industrial Steam Pressing',
              description:
                'Fabric becomes wrinkled and distorted during the heavy handling of the sewing process. Before packaging, every garment is mounted on industrial ironing bucks and treated with high-pressure steam. This process forces the seams to lay completely flat, shrinks any minor fabric distortions back into place, and gives the garment its final, retail-ready drape.',
            },
          ],
        },
      ],
      warning: {
        title: 'Understanding MOQs and Production Economics',
        body: [
          'Setting up a factory line is highly labor-intensive. It requires calibrating the CNC lasers, changing the thread cones on 30 different sewing machines, and adjusting the feed-dogs for your specific fabric weight.',
          'Because of this intense setup time, true industrial facilities enforce Minimum Order Quantities (MOQs). Running micro-batches is economically unviable, as the setup costs would drastically inflate the price per unit, making it impossible for your brand to maintain a profitable retail markup.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      // The five capability groups above already carry the assembly sequence.
      showProcess: false,
      trust: {
        title: 'The Acceptable Quality Limit (AQL) Inspection Protocol',
        intro:
          'Fast sewing is financially useless if it results in high defect rates. A professional factory does not wait until a 5,000-unit run is completely finished to start checking for errors. Quality Control must be built directly into the assembly line workflow.',
        cardCtas: false,
        points: [
          {
            title: 'In-Line Stitch Audits',
            icon: 'shrink',
            description:
              'During the active sewing phase, our floor managers conduct random, continuous in-line audits. They pull garments directly off the sewing stations to measure Seams Per Inch (SPI) and inspect for thread tension issues. If a machine is dropping stitches or puckering the fabric, the entire line is halted. The machine is recalibrated immediately before the defect can replicate across the rest of the batch.',
          },
          {
            title: 'The Golden Sample Benchmark',
            icon: 'swatch',
            description:
              'Quality is not subjective; it is contractual. Before bulk production begins, you sign off on a physical Pre-Production (PP) sample. This physical garment is placed directly on the factory floor. Our QC inspectors measure the bulk garments against this “Golden Sample.” If a collar width on the bulk run deviates from the Golden Sample beyond the allowed mathematical tolerance (e.g., +/- 0.25 inches), the unit is instantly rejected and marked as a defect.',
          },
        ],
      },
      audit: {
        title: 'Required Assets to Initiate a Bulk Run',
        intro:
          'A factory cannot start a bulk cutting run on an assumption. To ensure precision, we require the following technical assets to be locked, verified, and approved before the fabric is ever loaded onto the spreading tables.',
        criteria: [
          {
            title: 'The Golden Sample',
            description:
              'The physical pre-production sample must be signed off. This acts as the legal baseline for all AQL quality checks.',
          },
          {
            title: 'Production-Ready Markers',
            description:
              'The DXF/ASTM pattern files must be finalized and nested into a high-yield “marker” file to ensure that when the CNC machine cuts the fabric, waste is minimized to protect your raw material margins.',
          },
          {
            title: 'Comprehensive BOM',
            description:
              'The sewing operators must know exactly what components to pull from inventory. The Bill of Materials must explicitly list the required thread weight, the exact zipper gauge (e.g., YKK #5 Metal), and the specific placement coordinates for all woven labels.',
          },
        ],
        ctaLabel: 'Submit Your Design for Review',
      },
      resources: {
        title: 'Essential Resources for Production Planning',
        intro:
          'The assembly line is only one component of a successful supply chain. To ensure your production run is executed perfectly, we recommend reviewing our related technical guides:',
        tone: 'cream',
        items: [
          {
            title: 'Apparel Prototyping & Sampling Services',
            description: 'Learn how we establish the Golden Sample before moving to the bulk cutting phase.',
            href: '/services/apparel-prototyping-and-sampling',
          },
          {
            title: 'Apparel Customization & Screen Printing',
            description: 'Explore how visual branding is applied during the cut and sew process.',
            href: '/services/screen-printing',
          },
          {
            title: 'Fabric Sourcing & Lab Dips',
            description: 'Understand the FPP model and how we source, knit, and dye raw greige goods.',
            href: '/services/fabric-sourcing',
          },
        ],
      },
      testimonialsTitle: 'Customer Feedback',
      faqTitle: 'Technical Production FAQ',
      finalCta: {
        title: 'Ready to Lock Down Your Bulk Production?',
        body: [
          'Do not trust your raw materials to a facility that cuts corners. A single misaligned blade or a poorly tensioned sewing machine can ruin thousands of dollars of custom-dyed fabric.',
          'Stop dealing with crooked seams, popped threads, and inconsistent sizing. Our production floors provide the hard industrial discipline needed to execute your tech pack flawlessly at scale.',
        ],
        primaryLabel: 'Submit Your Tech Pack for a Quote',
        secondaryLabel: 'Talk to a Floor Manager',
      },
    },
  },
  {
    slug: 'cmt-manufacturing',
    title: 'CMT Manufacturing Services',
    shortName: 'CMT Manufacturing',
    blurb:
      'Cut, make and trim on your own materials — laser-guided CNC cutting, machinery matched to the textile and a full fabric consumption report.',
    image: '/images/custom-manufacturer.webp',
    heroHeadline: 'CMT Manufacturing Services: Industrial Assembly for Brands That Own Their Supply Chain',
    heroSub:
      'In the apparel industry, Cut, Make, and Trim (CMT) is the ultimate test of a factory’s mechanical discipline. When you choose a CMT production model, you are acting as the primary supplier.',
    pain: {
      title: 'The Financial Reality of the Cutting Room Floor',
      body: [
        'Amateur brands obsess over the sewing phase, but the cutting room is where the profit margins of a CMT run are won or lost.',
        'How your raw fabric is laid out, tensioned, and sliced dictates your raw material waste and the final drape of the garment.',
      ],
    },
    includes: [
      {
        title: 'Fabric Relaxation & Zero-Tension Spreading',
        description:
          'Your yardage is relaxed before it is laid and spread on zero-tension machines, so kinetic tension does not release after cutting and shrink the panels you paid for.',
      },
      {
        title: 'CNC Laser Cutting & Precision Notching',
        description:
          'Micro-millimetre cutting accuracy in place of hand shears, with automated drill holes and V-notches acting as industrial markers that remove assembly guesswork.',
      },
      {
        title: 'Stretch Tolerances for Activewear',
        description:
          '4-thread overlock and coverstitch machines let the seam stretch with the fabric, and flatlock stitching eliminates interior chafing on performance garments.',
      },
      {
        title: 'Torque Management & Bar-Tacking',
        description:
          'Walking-foot machines handle 14oz denim and heavy canvas without skipped stitches, while automated bar-tacks reinforce cargo pockets, belt loops and zip fly bases.',
      },
      {
        title: 'Trimming, Hardware & Label Application',
        description:
          'Every seam inspected for loose threads, then woven labels, metal rivets and YKK zips applied to your tech pack coordinates and the garment steam pressed to a retail-ready drape.',
      },
      {
        title: 'Fabric Consumption & Yield Reporting',
        description:
          'A full consumption report detailing exactly how many yards arrived at our dock, how many were cut into garments, and how many remain as scrap or excess on the roll.',
      },
    ],
    process: [
      {
        title: 'Inbound Materials & Synchronised Logistics',
        description:
          'Your fabrics, trims, buttons and labels are booked in together and checked against the Bill of Materials before a production slot is confirmed.',
      },
      {
        title: 'Marker Loading & CNC Cutting',
        description:
          'Production-ready DXF/ASTM markers are loaded, fabric is relaxed and spread at zero tension, then cut, notched and bundled by size.',
      },
      {
        title: 'Assembly & In-Line Stitch Audits',
        description:
          'Floor managers run random, continuous in-line audits during sewing, measuring Seams Per Inch and thread tension against the Golden Sample.',
      },
      {
        title: 'Trim, Press & Consumption Report',
        description:
          'Threads trimmed, hardware and labels applied, garments industrially pressed — and the fabric consumption report issued alongside the shipment.',
      },
    ],
    faqs: [
      {
        question: 'How do you handle pattern grading and fabric shrinkage?',
        answer:
          'If a heavyweight 100% cotton hoodie is sewn perfectly to size but shrinks by 5% in the customer’s washing machine, the product is a failure. We mandate strict wash-testing during prototyping. We calculate the exact shrinkage percentage of your supplied fabric and artificially inflate the digital patterns by that exact percentage before the CNC machine cuts them. The garment will look slightly oversized coming off the sewing line but will shrink to the perfect dimensions after its first wash.',
      },
      {
        question: 'What happens if the fabric I supply has defects?',
        answer:
          'Before cutting, we run your supplied fabric through inspection machines to check for mill defects (like weaving errors or dye spots). If we find significant flaws in the raw material you provided, we halt production and notify you immediately so you can file a claim with your fabric mill.',
      },
      {
        question: 'What is the standard lead time for a bulk CMT production run?',
        answer:
          'Once the Golden Sample is approved, the tech pack is locked, and all of your physical raw materials have arrived on our factory floor, a standard CMT run typically takes 4 to 6 weeks. This timeline accounts for the CNC cutting, the assembly line sewing, and the rigorous AQL inspection phases.',
      },
      {
        question: 'Do you provide branded packaging and poly-bagging?',
        answer:
          'Yes. As part of the final “Trim” phase, we can fold, tag, and poly-bag every garment to your exact retail specifications. We can apply custom barcode stickers and warning labels so the inventory is instantly ready for Amazon FBA or your 3PL warehouse.',
      },
    ],
    detail: {
      heroBody: [
        'You have spent months sourcing the perfect raw denim, the ideal custom-dyed French Terry, or a highly technical activewear blend. You are shipping thousands of dollars of your own raw material directly to our loading dock. If a blade shifts by a millimeter on the cutting table, or if a sewing operator applies too much tension to a four-way stretch fabric, your proprietary textile investment is destroyed.',
        'We provide CMT manufacturing services built on strict industrial accountability. We do not use hand-scissors for bulk runs, and we do not hide our fabric consumption data. We deploy automated laser-guided CNC cutters, specialized industrial sewing machinery, and transparent yield reporting to ensure your approved Golden Sample is replicated flawlessly across thousands of units.',
      ],
      includeGroups: [
        {
          title: 'Inside the Cutting Room',
          items: [
            {
              title: 'Fabric Relaxation and Zero-Tension Spreading',
              description:
                'Before a single blade is engaged, massive rolls of your supplied fabric are unspooled and layered onto cutting tables in stacks known as “plies.” If the fabric is pulled tightly during this spreading process, it retains kinetic tension. Once the fabric is cut, that tension releases, and the cut panels instantly shrink. If a facility does not employ automated, zero-tension spreaders, your final garments will be mathematically smaller than your approved pattern.',
            },
            {
              title: 'CNC Laser Cutting vs. Manual Band Knives',
              description:
                'Manual tracing and cutting with hand shears are acceptable for a single prototype, but they are catastrophic for bulk runs. We deploy automated CNC (Computer Numerical Control) cutting machines. Your digital DXF marker files are fed directly into the machine, which cuts through heavy 450 GSM fleece or delicate activewear with micro-millimeter precision.',
            },
            {
              title: 'Precision Notching for Assembly Logic',
              description:
                'A sewing operator should never have to guess where a pocket goes or how a sleeve aligns with a shoulder. During the CNC cutting phase, automated drills punch microscopic holes and cut V-notches into the perimeter of the fabric. These industrial markers lock the pieces together perfectly, completely removing guesswork from the assembly line.',
            },
          ],
        },
        {
          title: 'The Mechanics of Industrial Assembly (The “Make”)',
          intro:
            'A standard straight-stitch sewing machine cannot build a complex technical garment. Different fabrics and structural stress points require entirely different mechanical setups. A premium CMT apparel production facility must maintain a diverse fleet of specialized machinery to prevent seam failure.',
          items: [
            {
              title: 'Stretch Tolerances and Activewear Assembly',
              description:
                'If you sew four-way stretch spandex with a standard rigid lockstitch, the thread will snap the moment the end-user puts the garment on. For activewear and performance gear, we deploy 4-thread overlock and coverstitch machines. These machines loop the thread in a way that allows the seam to stretch simultaneously with the fabric. Furthermore, we utilize flatlock stitching to eliminate interior seam chafing on tight-fitting athletic wear.',
            },
            {
              title: 'Torque Management for Heavyweight Textiles',
              description:
                'Working with 14oz raw denim or heavy canvas requires immense mechanical torque. Standard sewing machines will skip stitches or snap needles when attempting to penetrate multiple layers of heavy fabric. We utilize heavy-duty walking-foot machines that feed the thick layers of fabric evenly through the needle plate, ensuring the top layer does not bunch up or shift out of alignment.',
            },
            {
              title: 'Bar-Tacking and Stress Point Reinforcement',
              description:
                'Premium streetwear and workwear must endure heavy physical strain. We program automated bar-tack machines to fire concentrated zig-zag stitches over the specific stress points of the garment — such as the corners of cargo pockets, belt loops, and the base of a zipper fly. This industrial reinforcement ensures the garment does not tear during extreme use.',
            },
          ],
        },
        {
          title: 'Trimming, Pressing, and Final Finishing',
          intro:
            'A garment is not finished just because the sewing is complete. The final “Trim” phase dictates how the product will be perceived by the end consumer or the wholesale buyer.',
          items: [
            {
              title: 'Thread Trimming and Cleanup',
              description:
                'High-speed industrial sewing leaves “thread tails” at the end of every seam. Dedicated trimming operators manually inspect every inch of the garment, snipping away loose threads and verifying that all hardware is securely locked in place.',
            },
            {
              title: 'Hardware and Label Application',
              description:
                'In a CMT model, you supply the trims. During this phase, our operators attach your custom woven neck labels, punch in metal rivets, install the supplied YKK zippers, and attach the final retail hang tags based precisely on the coordinates listed in your tech pack.',
            },
            {
              title: 'Industrial Steam Pressing',
              description:
                'Fabric becomes wrinkled and distorted during the heavy handling of the sewing process. Before packaging, every garment is mounted on industrial ironing bucks and treated with high-pressure steam. This process forces the seams to lay completely flat, shrinks any minor fabric distortions back into place, and gives the garment its final, retail-ready drape.',
            },
          ],
        },
        {
          title: 'Analyzing Production Models: CMT vs. FPP',
          intro:
            'Depending on the scale and structure of your supply chain, you must decide how much control you want to retain. Understanding the difference between these two models is critical before initiating a bulk run.',
          items: [
            {
              title: 'When to Choose CMT Manufacturing',
              description:
                'Cut, Make, Trim is strictly an assembly service. You are responsible for sourcing the greige fabric, managing the Dye-to-Match (DTM) lab dips with the mill, purchasing the zippers, and dealing with customs to import the raw materials. You take on the logistical risk, but you maintain absolute, granular control over your Bill of Materials (BOM) and your material costs. This is best for established brands with dedicated sourcing departments.',
            },
            {
              title: 'When to Choose Full Package Production (FPP)',
              description:
                'For brands that want a single point of accountability, the Full Production Package is the industry standard. In this model, you provide the technical blueprint (the Tech Pack), and Axiom Rise handles the entire supply chain. We source the fabric, manage the dye houses, engineer the patterns, and execute the final assembly. FPP eliminates the massive logistical nightmare of coordinating between a fabric mill, a trim supplier, and a sewing floor.',
            },
          ],
        },
      ],
      warning: {
        title: 'The Fabric Yield Consumption Report (Total Transparency)',
        body: [
          'There is a major fear among brands using cut make trim clothing manufacturer services: will the factory steal my excess fabric?',
          'Transparency is our core operating principle. We do not operate in a black box. Before we cut a single yard of your supplied material, we run your graded patterns through advanced CAD nesting algorithms to generate a digital marker. This tells us the exact mathematical fabric yield required for the run.',
          'Upon completion of the project, we provide a full Fabric Consumption Report. This document details exactly how many yards were received at our loading dock, how many yards were used to cut the garments, and how many yards remain as scrap or excess on the roll. If you request it, the excess fabric rolls are shipped back to you alongside the final garments.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      // The four capability groups above already carry the Cut, Make and Trim sequence.
      showProcess: false,
      trust: {
        title: 'The Acceptable Quality Limit (AQL) Protocol',
        intro:
          'Fast sewing is financially useless if it results in high defect rates. A professional CMT factory does not wait until a 5,000-unit run is completely finished to start checking for errors. Quality Control must be built directly into the assembly line workflow.',
        cardCtas: false,
        points: [
          {
            title: 'In-Line Stitch Audits',
            icon: 'shrink',
            description:
              'During the active sewing phase, our floor managers conduct random, continuous in-line audits. They pull garments directly off the sewing stations to measure Seams Per Inch (SPI) and inspect for thread tension issues. If a machine is dropping stitches or puckering the fabric, the entire line is halted. The machine is recalibrated immediately before the defect can replicate across the rest of the batch.',
          },
          {
            title: 'The Golden Sample Benchmark',
            icon: 'swatch',
            description:
              'Quality is not subjective; it is contractual. Before bulk CMT production begins, you sign off on a physical Pre-Production (PP) sample. This physical garment is placed directly on the factory floor. Our QC inspectors measure the bulk garments against this “Golden Sample.” If a collar width on the bulk run deviates from the Golden Sample beyond the allowed mathematical tolerance (e.g., +/- 0.25 inches), the unit is instantly rejected.',
          },
        ],
      },
      audit: {
        title: 'Required Assets to Initiate a CMT Bulk Run',
        intro:
          'A factory cannot start a bulk cutting run on an assumption. To ensure precision, we require the following technical assets to be locked, verified, and approved before your fabric is ever loaded onto the spreading tables.',
        criteria: [
          {
            title: 'Production-Ready Marker Files',
            description:
              'We require finalized digital pattern files (DXF/ASTM). More importantly, those patterns must be nested into a high-yield “marker” file to ensure that when the CNC machine cuts your expensive fabric, waste is minimized to protect your margins.',
          },
          {
            title: 'Comprehensive Bill of Materials (BOM)',
            description:
              'The sewing operators must know exactly what components to pull from the bins. The Bill of Materials must explicitly list the exact zipper gauge, the specific placement coordinates for all woven labels, and the required thread weight.',
          },
          {
            title: 'The Physical Inbound Logistics',
            description:
              'All bulk fabrics, trims, buttons, and labels must arrive at our facility simultaneously. We cannot begin a CMT run if the fabric has arrived but the zippers are delayed in customs. If you are missing the digital assets, your project must first be routed through our tech pack and pattern making services.',
          },
        ],
        ctaLabel: 'Make An Enquiry',
      },
      resources: {
        title: 'Essential Resources for Production Planning',
        intro:
          'The assembly line is only one component of a successful supply chain. To ensure your production run is executed perfectly, we recommend reviewing our related technical guides:',
        tone: 'cream',
        items: [
          {
            title: 'Apparel Prototyping & Sampling Services',
            description: 'Learn how we establish the Golden Sample before moving to the bulk cutting phase.',
            href: '/services/apparel-prototyping-and-sampling',
          },
          {
            title: 'Fabric Sourcing & Lab Dips',
            description:
              'If you do not want to supply your own materials, understand how our FPP model sources and dyes raw greige goods.',
            href: '/services/fabric-sourcing',
          },
          {
            title: 'Apparel Customization & Screen Printing',
            description: 'Explore how visual branding is applied during the cut and sew process.',
            href: '/services/screen-printing',
          },
        ],
      },
      faqTitle: 'Technical CMT Production FAQ',
      finalCta: {
        title: 'Ready to Lock Down Your Assembly Line?',
        body: [
          'Do not trust your expensive raw materials to a facility that cuts corners. A single misaligned blade or a poorly tensioned sewing machine can ruin thousands of dollars of custom-milled fabric.',
          'Stop dealing with crooked seams, popped threads, and inconsistent sizing. Our production floors provide the hard industrial discipline needed to execute your tech pack flawlessly at scale.',
        ],
        primaryLabel: 'Submit Your Tech Pack for a CMT Quote',
        secondaryLabel: 'Talk to a Floor Manager',
      },
    },
  },
  {
    slug: 'private-label-clothing',
    title: 'Private Label Clothing Services',
    shortName: 'Private Label',
    blurb:
      'Pre-engineered premium blanks relabelled, decorated and packaged as your own — retail-ready in 14 to 21 days instead of 12 weeks.',
    image: '/images/services/private-label.webp',
    heroHeadline:
      'Industrial Private Label Clothing Production: Scale Your Brand Without the Engineering Lead Times',
    heroSub:
      'Designing a garment from scratch requires months of pattern making, prototyping, and fabric sourcing. For many brands, that level of granular engineering is unnecessary.',
    pain: {
      title: 'The Financial Advantage of Private Label Scaling',
      body: [
        'When you operate a high-volume streetwear or corporate merchandising brand, speed to market dictates your cash flow.',
        'If a new trend hits the market, you cannot afford to wait 12 weeks for a custom Full Production Package (FPP) run to finish. A private label clothing manufacturer allows you to capitalize on market trends immediately. Because the physical architecture of the garment is already locked and manufactured, your only variable is the visual branding. You collapse your production lead time from 12 weeks down to 14 days, allowing you to cycle inventory rapidly and drastically reduce your upfront capital risk.',
      ],
    },
    includes: [
      {
        title: 'Combed & Ring-Spun Blank Programme',
        description:
          'Our premium blanks are constructed exclusively from combed and ring-spun cotton yarns — a difference your customer feels before they read the label.',
      },
      {
        title: 'Pre-Shrunk & Tension-Washed Textiles',
        description:
          'Shrinkage tolerances locked down to a maximum of 3%, so the garment that comes out of your customer’s wash is the size they ordered.',
      },
      {
        title: 'Heavyweight Structure',
        description:
          'Stock built around 400+ GSM French Terry hoodies and 250+ GSM heavyweight t-shirts, rather than the lightweight promotional blanks everyone else is reselling.',
      },
      {
        title: 'Full Relabelling & Tagging',
        description:
          'Manufacturer tags removed or torn away, your woven and care labels applied, and swing tags fitted with swift-tacks during the final trimming phase.',
      },
      {
        title: 'Screen Print & Post-Construction Embroidery',
        description:
          'Flat-pallet screen printing with plastisol or water-based inks cured at exactly 320°F, plus tubular embroidery hoops that isolate the panel for clean 3D puff or flat stitching.',
      },
      {
        title: 'Dye-To-Match on Stock Blanks',
        description:
          'Send a Pantone TCX code and we garment-dye thousands of blank units simultaneously, so a stock body carries a colour nobody else on the shelf has.',
      },
    ],
    process: [
      {
        title: 'Blank Selection & Fit Confirmation',
        description:
          'You choose bodies from our engineered blank programme and approve the fit, weight and hand-feel on physical samples before committing.',
      },
      {
        title: 'Branding & Artwork Setup',
        description:
          'Labels, swing tags and artwork are set up — screens burned or files digitised — and a strike-off is approved ahead of the run.',
      },
      {
        title: 'Dyeing, Decoration & Relabelling',
        description:
          'Garment dyeing where required, then printing or embroidery and full relabelling, so the origin of the blank is completely masked.',
      },
      {
        title: 'Packing & Retail-Ready Dispatch',
        description:
          'Tagging, folding, poly-bagging and barcode labelling, so cartons go straight to your shelf or fulfilment centre without repacking.',
      },
    ],
    faqs: [
      {
        question: 'Can I supply my own blanks for you to print on?',
        answer:
          'Yes, but this shifts the model from Private Label to toll-processing. If you ship us blanks from a different manufacturer, we require a test run of 5 units to calibrate our printing presses and curing ovens to ensure your supplied fabric does not scorch or melt under industrial heat.',
      },
      {
        question: 'What is the lead time for a private label run?',
        answer:
          'If you are utilizing our existing stock colors, a fully printed, relabeled, and packaged run typically ships within 14 to 21 days from the approval of the digital mockups. If you require custom DTM garment dyeing, add 10 days for the lab dip and dyeing process.',
      },
      {
        question: 'Can you attach custom swing tags (hang tags)?',
        answer:
          'Absolutely. During the final trimming phase, our operators use tagging guns to drive swift-tacks through the armpit seam or woven label, attaching your custom cardboard retail hang tags.',
      },
      {
        question: 'Do your blanks have tear-away tags?',
        answer:
          'Yes. For brands that want the absolute fastest turnaround time without paying for surgical tag removal, we manufacture specific lines of our blanks with perforated tear-away tags that pull out cleanly in one motion.',
      },
    ],
    detail: {
      heroBody: [
        'You do not need to reinvent the t-shirt; you just need a mathematically perfect, ultra-premium blank that acts as the foundation for your brand identity.',
        'We provide private label clothing services designed for rapid scalability. We bypass the lengthy Cut and Sew phase by utilizing our massive inventory of pre-engineered, high-GSM blank garments. We then apply your exact branding, relabel the collars, and drop-ship retail-ready products that your customers will believe you engineered from the ground up.',
      ],
      includeGroups: [
        {
          title: 'Clarifying the Sourcing Models: Private Label vs. White Label',
          intro:
            'The industry uses these terms interchangeably, but for supply chain management, they denote entirely different procurement strategies.',
          items: [
            {
              title: 'What is White Label Apparel?',
              description:
                'White label apparel refers to purchasing generic, unbranded garments directly from our bulk stock. You buy 500 blank black hoodies, and we ship them to you exactly as they are. You handle the printing, the tagging, and the retail packaging at your own facility.',
            },
            {
              title: 'What is Private Label Production?',
              description:
                'In a private label model, you leverage our facility to completely mask the origin of the garment. We pull the blank hoodies from our stock, surgically remove our manufacturing tags, sew in your custom-branded neck labels, apply your screen-printed graphics, and package the garment in your branded poly-bags. The end consumer never knows the garment was built from a stock blank.',
            },
          ],
        },
        {
          title: 'Applying Visual Authority (Printing and Embroidery)',
          intro:
            'Because the garments are already constructed, the application of visual branding requires specialized machinery designed to work around finished seams and pockets.',
          items: [
            {
              title: 'Flat-Pallet Screen Printing',
              description:
                'Our automated screen printing carousels are calibrated to accept finished blanks. We utilize premium plastisol and water-based inks, pushing the prints through high-tension mesh screens. We cure the garments at exactly 320°F to ensure the ink bonds permanently with the fabric fibers, preventing cracking.',
            },
            {
              title: 'Post-Construction Embroidery',
              description:
                'Embroidering on a finished blank requires extreme mechanical precision to avoid sewing the front and back of the garment together. Our operators utilize specialized tubular embroidery hoops that isolate the specific panel (e.g., a left chest or a hood rim), allowing the Tajima needles to fire 3D puff or flat stitching cleanly without snagging interior seams.',
            },
          ],
        },
      ],
      warning: {
        title: 'Advanced Dye-To-Match (DTM) Capabilities on Stock Blanks',
        body: [
          'You are not restricted to basic black, white, and grey. If your brand requires a highly specific colorway, we execute bulk Dye-To-Match (DTM) processing on our raw, undyed (greige) blank stock.',
          'You provide a Pantone TCX code. We formulate the chemical dye recipe, send you a physical lab dip for approval, and then garment-dye thousands of blank units simultaneously. This gives you the speed of a custom blank apparel run with the exact visual uniqueness of a fully custom cut-and-sew project.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      // The source page has no process band; the sourcing models above carry the sequence.
      showProcess: false,
      trust: {
        title: 'The Engineering Standard of Our Blank Garments',
        intro:
          'The biggest risk in using private label apparel manufacturing services is the quality of the base garment. If you print a beautiful, six-color graphic on a cheap, carded-cotton t-shirt, the shirt will pill, shrink, and warp after two wash cycles. Your brand reputation is destroyed instantly.',
        cardCtas: false,
        points: [
          {
            title: 'Combed and Ring-Spun Yarns',
            description:
              'We do not use cheap, open-end cotton. Our premium blanks are constructed exclusively from combed and ring-spun cotton yarns. This industrial process physically removes short, stray fibers before knitting, resulting in a fabric surface that is profoundly softer and provides a mathematically flat surface for high-resolution screen printing.',
          },
          {
            title: 'Pre-Shrunk and Tension-Washed Textiles',
            icon: 'wash',
            description:
              'A standard stock blank will shrink by up to 10% after its first home wash. Our blanks undergo strict industrial enzyme washes before they are ever stocked on our shelves. We lock the shrinkage tolerances down to a maximum of 3%, ensuring the garment your customer buys retains its exact proportions months later.',
          },
          {
            title: 'Heavyweight Structure',
            description:
              'Modern streetwear and luxury casualwear demand structural integrity. Our blank inventory includes 400+ GSM French Terry hoodies and 250+ GSM heavyweight t-shirts that hold their drape without clinging to the body.',
          },
        ],
      },
      resources: {
        title: 'Essential Resources for Private Label Brands',
        intro: 'To ensure your brand scales efficiently, we recommend reviewing our related technical capabilities:',
        items: [
          {
            title: 'Apparel Customization & Screen Printing',
            description: 'Dive deeper into our plastisol, water-based, and CMYK printing mechanics.',
            href: '/services/screen-printing',
          },
          {
            title: 'Quality Control & Packaging',
            description:
              'Learn how we inspect the final prints and poly-bag your garments for retail distribution.',
            href: '/services/quality-control-and-inspection',
          },
          {
            title: 'Cut and Sew Manufacturing',
            description:
              'If you decide you want to build a garment from scratch instead of using our blanks, explore our full FPP services.',
            href: '/services/cut-and-sew-manufacturing',
          },
        ],
      },
      faqTitle: 'Technical Sourcing and Sampling FAQ',
      finalCta: {
        title: 'Ready to Scale Your Inventory?',
        body: [
          'Do not risk your brand equity by printing on cheap, disposable wholesale garments. Your customers can feel the difference in the GSM, the drape, and the wash-fastness.',
          'Our private label clothing manufacturer facility provides the industrial-grade blanks and the high-precision printing required to make your brand look untouchable. Stop waiting months for custom production. Start scaling your revenue today.',
        ],
        primaryLabel: 'Request a Private Label Quote',
        secondaryLabel: 'View Our Blank Catalog',
        secondaryHref: '/products',
      },
    },
  },
  {
    slug: 'custom-embroidery',
    title: 'Custom Embroidery Services',
    shortName: 'Custom Embroidery',
    blurb:
      'Hand-digitised stitch paths, 15-needle multi-head production and the right stabiliser for the textile — embroidery that does not wreck the drape.',
    image: '/images/hero/varsity-jacket.webp',
    heroHeadline: 'Industrial Custom Embroidery Services: The Physics of Thread and Fabric',
    heroSub:
      'Slapping a heavy logo onto a lightweight t-shirt will completely destroy the drape of the garment. Embroidery is not a printing technique; it is a structural modification to your fabric.',
    pain: {
      title: 'The Digitization Protocol: Translating Pixels to Stitch Paths',
      body: [
        'A JPEG image means absolutely nothing to an embroidery machine. Before a needle ever moves, your visual logo must be translated into a digital, machine-readable language (typically a DST or PES file). This process is known as digitization.',
        'Amateur facilities use auto-digitizing software, which treats every logo the same. This results in heavy, bulky thread build-ups that snap needles and distort text.',
        'Our commercial embroidery manufacturer team manually digitizes every file. A master digitizer plots the exact path the needle will take. They calculate the push-and-pull compensation required based on your specific fabric type. They dictate exactly where the machine should lay down a structural “underlay” stitch before applying the top satin stitch. This level of granular control ensures crisp, highly legible text, even at microscopic scale.',
      ],
    },
    includes: [
      {
        title: 'Manual Artwork Digitisation',
        description:
          'Every stitch path plotted by a master digitiser, with push-and-pull compensation calculated against the behaviour of your actual fabric.',
      },
      {
        title: 'Flat Embroidery',
        description:
          'The industry standard for corporate logos and monograms: dense satin stitching for lettering and tatami fill stitches for solid colour blocks.',
      },
      {
        title: '3D Puff Embroidery',
        description:
          '3mm EVA foam layered beneath the stitch for raised, three-dimensional graphics — mandatory for premium streetwear snapbacks, trucker caps and heavy hoodies.',
      },
      {
        title: 'Appliqué & Chenille',
        description:
          'Laser-cut fabric pieces secured with satin border stitching for large back pieces, so a full-size logo does not add full-size weight.',
      },
      {
        title: 'Stabiliser & Backing Engineering',
        description:
          'Tear-away backing for heavyweight wovens, cut-away for knits and activewear that need permanent stabilisation, and water-soluble topping for high-pile fabrics.',
      },
      {
        title: 'Thread Selection & Specialty Threads',
        description:
          'Polyester for resistance to bleach, industrial washing and UV fading; high-sheen rayon for premium corporate work; metallic, neon UV-reactive and fire-retardant where specified.',
      },
    ],
    process: [
      {
        title: 'Artwork Review & Manual Digitisation',
        description:
          'Your file is assessed for stitch count, minimum letter height and fabric behaviour, then digitised by hand into a production stitch path.',
      },
      {
        title: 'Stabiliser Selection & Stitch-Out',
        description:
          'Backing is matched to the textile and a stitch-out is run on your actual fabric, so placement, density and tension are approved before bulk.',
      },
      {
        title: 'Multi-Head Production Run',
        description:
          'Industrial 15-needle multi-head machines embroider 20 to 30 garments simultaneously, with high-torque motors that handle thick and metallic threads.',
      },
      {
        title: 'Backing Removal, Trim & Inspection',
        description:
          'Backing removed or trimmed, jump stitches cleaned, and every piece checked against the approved stitch-out before packing.',
      },
    ],
    faqs: [
      {
        question: 'Can you embroider over a pocket or a seam?',
        answer:
          'We can, but it requires careful engineering. Embroidering directly over a functional pocket sews the pocket shut. If you need a logo on a pocket, we highly recommend utilizing our Full Production Package (FPP), where we embroider the raw fabric panel before the pocket is actually sewn onto the garment.',
      },
      {
        question: 'Why does my text look messy at small sizes?',
        answer:
          'There is a physical limit to how small thread can be manipulated. If letter heights drop below 5 millimeters (0.2 inches), the needle punctures overlap, causing the text to look muddy. Our digitizers will warn you if your text is too small and suggest thickening the font or simplifying the logo.',
      },
      {
        question: 'Do you accept supplied blank garments?',
        answer:
          'Yes. If you operate as a Private Label brand and want to ship us your own blank hoodies or hats, we act strictly as your contract embroidery manufacturer. We will require a physical test run of 5 units to calibrate our thread tension to your specific supplied fabric.',
      },
      {
        question: 'Can you embroider 3D puff on a lightweight t-shirt?',
        answer:
          'No. 3D puff requires firing thousands of high-density satin stitches over a 3mm foam block. A standard 150 GSM t-shirt lacks the structural integrity to support that much weight. The fabric will heavily distort and sag. 3D puff is strictly reserved for structured hats, heavyweight fleece (400+ GSM), and thick outerwear.',
      },
    ],
    detail: {
      heroBody: [
        'Every time a needle punctures a textile, it introduces kinetic tension. If that tension is not managed mathematically, the fabric will pucker, the stitches will sink, and the logo will warp after a single wash.',
        'We provide high-volume custom embroidery services built on strict mechanical discipline. We do not just run your logo through an automated software converter. We engineer the stitch paths, calculate the exact backing required for your specific fabric GSM, and execute the run on high-torque, multi-head industrial embroidery machines.',
      ],
      includeGroups: [
        {
          title: 'Core Embroidery Capabilities',
          intro:
            'Different brand aesthetics require entirely different mechanical applications. We maintain the hardware and technical expertise to execute three distinct categories of thread work.',
          items: [
            {
              title: 'Flat Embroidery',
              description:
                'The industry standard for corporate logos, left-chest monograms, and intricate crests. The thread is stitched flat against the surface of the garment. For high-end bulk apparel embroidery, we utilize dense satin stitches for bold lettering and tatami (fill) stitches for large, solid blocks of color, ensuring zero fabric shows through the design.',
            },
            {
              title: '3D Puff Embroidery',
              description:
                'This technique is mandatory for premium streetwear snapbacks, trucker hats, and heavy hoodies. Before stitching, we lay a high-density, 3mm thick EVA foam over the fabric. The needle fires through the foam, encapsulating it completely within the thread. The result is a bold, raised, three-dimensional graphic that literally lifts off the garment.',
            },
            {
              title: 'Appliqué and Chenille',
              description:
                'For massive back-piece logos (like varsity jackets or collegiate sweaters), covering a 14-inch area with solid thread makes the garment too heavy and rigid to wear comfortably. Instead, we use Appliqué: laser-cutting a separate piece of fabric (like felt or twill) into the shape of your logo, laying it on the garment, and securing the edges with a tight satin border stitch. We also offer looping Chenille embroidery for classic, textured varsity aesthetics.',
            },
          ],
        },
        {
          title: 'Stabilizers and Backing Mechanics',
          intro:
            'The secret to flawless embroidery happens entirely on the inside of the garment. You cannot fire 10,000 stitches into a soft piece of cotton without reinforcing the textile first. Depending on the stretch and GSM of your garment, our technicians apply specific industrial stabilizers (backing) to the interior of the fabric before hooping it into the machine.',
          items: [
            {
              title: 'Tear-Away Backing',
              description:
                'Used for highly stable, heavyweight wovens (like denim or thick twill) that do not stretch. Once the embroidery is complete, the excess backing is simply torn away by hand, leaving a clean interior.',
            },
            {
              title: 'Cut-Away Backing',
              description:
                'Mandatory for knits, activewear, and any fabric that stretches. This backing permanently stabilizes the fabric so the embroidery doesn’t warp when the garment is pulled over a body. The excess is surgically trimmed with scissors post-production.',
            },
            {
              title: 'Water-Soluble Topping',
              description:
                'When embroidering high-pile fabrics like thick fleece, towels, or beanies, the stitches tend to sink into the fuzz and disappear. We lay a transparent, water-soluble film over the fabric before stitching. This keeps the thread elevated and crisp. The film dissolves instantly during the first wash.',
            },
          ],
        },
        {
          title: 'Thread Anatomy and Color Theory',
          intro:
            'The visual impact of your logo is dictated by the chemical makeup of the thread itself. We stock thousands of thread cones and match your exact brand guidelines using the Pantone Solid Coated (PMS) system.',
          items: [
            {
              title: 'Polyester Thread',
              description:
                'This is the workhorse of industrial embroidery. It is highly resistant to bleach, industrial washing, and UV fading. It possesses a high tensile strength, meaning it will not snap during high-speed multi-head runs, making it the default choice for heavy workwear and activewear.',
            },
            {
              title: 'Rayon Thread',
              description:
                'Rayon is slightly more delicate than polyester but possesses an incredibly high-sheen, glossy finish. We utilize rayon for high-end corporate apparel, luxury streetwear, and intricate crests where a premium, light-catching aesthetic is required.',
            },
            {
              title: 'Specialty and Metallic Threads',
              description:
                'For highly specialized branding, we deploy metallic threads, neon UV-reactive threads, and fire-retardant threads (mandatory for specific industrial uniform contracts).',
            },
          ],
        },
      ],
      warning: {
        title: 'High-Torque Multi-Head Production',
        body: [
          'As a dedicated apparel embroidery factory, we do not run single-head hobbyist machines. Bulk production requires massive scale and mechanical reliability.',
          'We deploy industrial, 15-needle, multi-head machines (such as Tajima or Barudan equivalents). These machines allow us to embroider 20 to 30 garments simultaneously with exact mechanical synchronization. The high-torque motors are capable of driving thick metallic threads through the heavy seams of a heavyweight work jacket or the rigid buckram of a structured baseball cap without dropping a single stitch or breaking tension.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      spotlight: {
        title: 'Understanding Contract Embroidery Economics',
        body: [
          'In the embroidery industry, pricing is not based on the number of colors in your logo; it is based strictly on “Stitch Count.”',
          'A small, minimalist left-chest logo might require 3,500 stitches and run in four minutes. A massive, fully-filled back piece might require 85,000 stitches and tie up a machine head for over an hour.',
          'When you contract our 3D puff embroidery services or standard flat stitching, we run your digital file to calculate the exact stitch count. We then multiply that count by our bulk run rate. Because of the intensive setup required to digitize the file, hoop the garments, and thread the multi-head machines, we enforce strict Minimum Order Quantities (MOQs), typically starting at 100 units per design.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      // The three capability groups above already carry the production sequence.
      showProcess: false,
      faqTitle: 'Technical Embroidery FAQ',
      finalCta: {
        title: 'Ready to Execute High-Density Visual Branding?',
        body: [
          'A cheap, poorly digitized logo will ruin an otherwise perfectly manufactured garment. Do not trust your visual identity to software auto-converters and weak hobbyist machines.',
          'Our custom embroidery services provide the industrial hardware, the mechanical backing protocols, and the expert digitization required to make your logo look unshakeably premium.',
        ],
        primaryLabel: 'Submit Your Logo for a Stitch Count Quote',
        secondaryLabel: 'Talk to an Embroidery Tech',
      },
    },
  },
  {
    slug: 'screen-printing',
    title: 'Screen Printing Services',
    shortName: 'Screen Printing',
    blurb:
      'Mesh counts matched to the artwork, Pantone-exact ink formulation and conveyor curing at 320°F verified by physical wash testing.',
    image: '/images/hero/tshirt.webp',
    heroHeadline: 'Industrial Screen Printing Services: The Chemistry of Ink and Textile',
    heroSub: 'Pushing ink into a t-shirt isn’t just an art project. It’s a chemical process.',
    pain: {
      title: 'The Pre-Press Phase: Why Mesh Counts Matter',
      body: [
        'The quality of a print is decided long before the ink touches the shirt.',
        'A “screen” is a tightly woven mesh stretched over a metal frame. The microscopic holes in that mesh decide exactly how much ink passes through onto your fabric.',
        'Most commercial shops use a standard 110-mesh screen for every single job. It saves them money. But it leaves you with heavy, blocky prints.',
      ],
    },
    includes: [
      {
        title: 'Mesh Counts Matched to the Artwork',
        description:
          'Low mesh for maximum ink flow and solid opacity on dark fabric; ultra-fine 230–305 mesh that separates colour into microscopic halftone dots for smooth, photorealistic blends.',
      },
      {
        title: 'Plastisol Inks',
        description:
          'The industry standard where you need the highest level of colour opacity and exact Pantone matching, at full vibrancy on any fabric colour.',
      },
      {
        title: 'Water-Based Inks',
        description:
          'For luxury casualwear: the ink soaks directly into the textile fibres, leaving colour with effectively no added hand-feel.',
      },
      {
        title: 'Discharge Printing',
        description:
          'A safe bleaching agent replaces the dark dye in the fabric itself, so the design becomes part of the garment instead of a layer sitting on top of it.',
      },
      {
        title: 'Speciality Applications',
        description:
          'Puff ink additives for raised 3D texture, metallic and shimmer flakes suspended in a clear base, and CMYK simulated process for four-colour photorealism.',
      },
      {
        title: 'Thermal Curing & Wash Testing',
        description:
          'Forced-air conveyor dryers holding plastisol at exactly 320°F, with physical wash testing to verify the cure before a bulk run ships.',
      },
    ],
    process: [
      {
        title: 'Artwork & Pantone Intake',
        description:
          'We need vector files (.AI, .EPS or .SVG) and exact Pantone Solid Coated callouts — that is what makes your colour repeatable across every reorder.',
      },
      {
        title: 'Separations & Screen Burning',
        description:
          'Colours are separated and a screen burned for each one, at the mesh count that particular artwork demands.',
      },
      {
        title: 'Ink Mixing & Strike-Off',
        description:
          'Inks are mixed and drawn down against your PMS codes, then a strike-off is printed on your actual garment for approval.',
      },
      {
        title: 'Production Run & Cure Verification',
        description:
          'The run is printed and registered on press, cured to temperature on conveyor dryers, and wash tested before it is packed.',
      },
    ],
    faqs: [
      {
        question: 'Why is screen printing better than Direct-To-Garment (DTG)?',
        answer:
          'DTG acts like a standard office inkjet printer. It’s great for printing one-off shirts. However, DTG ink is very thin and often looks faded on dark garments. Screen printing pushes thick, highly durable ink directly into the fabric. It results in much higher vibrancy, far superior durability, and much lower costs at high volumes.',
      },
      {
        question: 'Will the ink bleed on polyester activewear?',
        answer:
          'Polyester fabrics are famous for “dye migration.” This is where the dye of the shirt bleeds up into the printed ink when it gets hot in the curing oven. A white logo on a red shirt will suddenly turn pink. We stop this by using specialized poly-blocking grey underbase inks. They act as a chemical shield, keeping your logos perfectly crisp on activewear.',
      },
      {
        question: 'Do you offer tagless neck label printing?',
        answer:
          'Yes. We highly recommend removing scratchy manufacturer tags. We replace them with a soft, water-based printed neck label. We swap out the main carousel boards for specialized neck-boards to print your brand’s size, care instructions, and logo directly onto the inside collar.',
      },
    ],
    detail: {
      heroBody: [
        'When amateur print shops ignore the chemistry, the results are terrible. Prints crack after two washes. Heavy layers of ink feel like wearing a plastic shield. Bright colors bleed and turn muddy.',
        'We provide custom screen printing services engineered specifically for high-volume apparel brands. We don’t use cheap hobby heat presses. We use automated multi-station presses, exact mesh-count mathematics, and forced-air conveyor dryers.',
        'Our goal is simple. We make sure your graphics outlast the garment itself.',
      ],
      includeGroups: [
        {
          title: 'Mesh Count Selection',
          intro:
            'When executing high-end bulk apparel screen printing, we match the mesh count to your artwork.',
          items: [
            {
              title: 'Low Mesh for Bold Opacity',
              description:
                'If you have a bold, single-color athletic logo, we use lower mesh counts. This allows maximum ink to flow through, giving you bright, solid coverage that pops on dark fabrics.',
            },
            {
              title: 'High Mesh for Photorealism',
              description:
                'For complex gradients or photorealistic artwork, we burn the image onto ultra-fine 230 to 305-mesh screens. This separates the colors into microscopic halftone dots. It creates smooth, flawless blends that generic printers simply cannot replicate.',
            },
          ],
        },
        {
          title: 'The Ink Formulation Matrix',
          intro:
            'Not all inks belong on all fabrics. Putting heavy plastic ink on a lightweight vintage t-shirt ruins how the shirt drapes and feels. As a dedicated commercial screen printing factory, we mix specific inks based on the weight and material of your garments.',
          items: [
            {
              title: 'Plastisol Inks: The Industry Standard',
              description:
                'Plastisol is a thick ink that sits directly on top of the fabric. It provides the highest level of color opacity. It is perfect for exact Pantone matching. Because of its durability, we use plastisol for heavy streetwear hoodies, canvas workwear, and athletic apparel. To stop the print from feeling too thick (the “bulletproof” effect), we add specific curable reducers. This softens the final feel of the print.',
            },
            {
              title: 'Water-Based Inks',
              description:
                'For luxury casualwear and lightweight cottons, the print should feel like part of the shirt. Water-based inks do exactly that. They soak directly into the textile fibers. You can barely feel them when you run your hand across the fabric.',
            },
            {
              title: 'Discharge Printing for Dark Garments',
              description:
                'Printing bright colors on black shirts usually requires a thick, heavy base layer. Discharge printing avoids this. We mix a safe bleaching agent directly into water-based ink. When the squeegee pushes the ink into the fabric, it removes the shirt’s original dye and replaces it with your custom color at the exact same time. The result is a vibrant, breathable print on dark fabric.',
            },
          ],
        },
        {
          title: 'Advanced Specialty Applications',
          intro:
            'Sometimes, standard flat colors aren’t enough to capture a high-end streetwear aesthetic. Our factory floors handle complex specialty additives to make your designs stand out.',
          items: [
            {
              title: 'Puff Ink Additives',
              description:
                'We mix a special foaming agent into the ink. When the garment hits the curing oven, the heat activates the foam. The ink expands upward, creating a raised, 3D texture. It is perfect for vintage athletic fonts and bold streetwear logos.',
            },
            {
              title: 'Metallic and Shimmer Flakes',
              description:
                'For high-contrast designs, we mix microscopic metallic flakes into a clear base gel. This requires highly specialized screens so the physical flakes can pass through without clogging the mesh.',
            },
            {
              title: 'CMYK Simulated Process',
              description:
                'When your design features full-color photography, we use complex software to separate the image into Cyan, Magenta, Yellow, and Black. We print these four colors wet-on-wet. They blend directly on the fabric to create millions of photorealistic colors.',
            },
          ],
        },
      ],
      warning: {
        title: 'Thermal Curing: Making the Print Permanent',
        body: [
          'A print is only permanent if the ink is “cured” correctly using heat.',
          'If a garment is flash-cured with a cheap heat gun, only the top layer of the ink dries. The bottom layer stays wet. The very first time your customer washes the shirt, the print will crack, flake, and wash down the drain.',
        ],
        ctaLabel: 'Talk to a Print Technician',
      },
      spotlight: {
        title: 'Contract Screen Printing and Economics',
        body: [
          'If you operate a private label brand and already own your blank garments, we act exclusively as your contract screen printing manufacturer. You ship the blanks to our loading dock; we execute the print runs and ship them out.',
          'Industrial screen printing requires massive upfront labor. For a 4-color design, we have to burn 4 separate screens. We have to perfectly align them on a massive mechanical press. We have to custom-mix 4 vats of ink. Because of this intense setup, we enforce Minimum Order Quantities (MOQs). Running tiny batches is economically impossible, as the setup labor would drastically inflate your price per shirt.',
          'The beauty of traditional screen printing is the economy of scale. Once the presses are aligned and the ink is loaded, the machine can print 1,000 shirts almost as fast as it prints 100. As your bulk volume goes up, the cost of the initial setup is spread across more units. This drives your per-unit cost down significantly.',
        ],
        ctaLabel: 'Inquire Now',
      },
      showProcess: false,
      trust: {
        title: 'We Don’t Guess on Temperature',
        points: [
          {
            title: 'Forced-Air Conveyor Dryers',
            description:
              'Every garment that comes off our automated presses is fed through massive forced-air conveyor dryers. For standard plastisol, the entire ink layer must reach exactly 320°F (160°C), all the way down to the fabric base.',
            icon: 'heat',
          },
          {
            title: 'Water-Based Curing',
            description:
              'For water-based inks, the garments must stay in the heat chamber longer. The heat has to completely evaporate the water content before the pigment can permanently set into the fibers.',
            icon: 'droplet',
          },
          {
            title: 'Physical Wash Testing',
            description:
              'We routinely pull finished garments off the line. We stretch them. We wash them. We make absolutely sure the ink bond is mathematically permanent before we ship your order.',
            icon: 'wash',
          },
        ],
        cardCtas: false,
      },
      audit: {
        title: 'Required Assets for a Bulk Print Run',
        intro:
          'To protect your raw material investment, we do not start burning screens until the following technical assets are locked in.',
        criteria: [
          {
            title: 'Vector Artwork Files',
            description:
              'We cannot separate colors using low-resolution JPEGs. We require pure vector artwork (Adobe Illustrator .AI, .EPS, or .SVG formats). All typography must be converted to outlines.',
          },
          {
            title: 'Exact Pantone Callouts',
            description:
              'We do not eyeball colors from a computer monitor. You must provide the exact Pantone Solid Coated (PMS) codes for every color in your design. This tells our ink technicians exactly what chemical recipe to mix.',
          },
        ],
        closing:
          'If your artwork isn’t vectorized, our pre-production design team can rebuild your graphics before the print run starts.',
        ctaLabel: 'Submit Your Artwork for a Quote',
      },
      faqTitle: 'Technical Screen Printing FAQ',
      finalCta: {
        title: 'Ready to Scale Your Visual Branding?',
        body: [
          'Do not trust your brand’s visual identity to a retail print shop that doesn’t understand mesh counts or curing chemistry. A cracked, heavy print instantly destroys the value of your clothing.',
          'Our bulk t-shirt screen printing services provide the industrial hardware and ink engineering required to make your graphics look unshakeably premium.',
        ],
        primaryLabel: 'Submit Your Artwork for a Quote',
        secondaryLabel: 'Talk to a Print Technician',
      },
    },
  },
  {
    slug: 'dtg-printing',
    title: 'DTG Printing Services',
    shortName: 'DTG Printing',
    blurb:
      'Photorealistic direct-to-garment printing on 100% ring-spun cotton — dual-CMYK heads, OEKO-TEX water-based pigments, no plastic hand-feel.',
    image: '/images/hero/hoodie.webp',
    heroHeadline: 'Industrial DTG Printing Services: Precision Engineering for Photorealistic Apparel',
    heroSub:
      'Screen printing is an incredible technology for bold, flat colors, but it hits a hard mechanical wall the moment a design requires millions of overlapping gradients, drop shadows, or true photographic reproduction.',
    pain: {
      title: 'The Chemistry of Water-Based Pigments and Cellulose Fibers',
      body: [
        'Amateur print shops will tell you that a DTG machine can print on any fabric. They are lying to secure your business, and their clients pay the ultimate price when the prints wash out after a single laundry cycle.',
        'The water-based inks used in true direct to garment manufacturing are chemically engineered to bond exclusively with natural cellulose fibers (cotton, bamboo, hemp). They physically cannot bond with synthetic plastics. If you attempt to run a DTG print on a 100% polyester athletic shirt or a cheap tri-blend, the ink will simply sit on the surface of the plastic fibers. It will bleed wildly during the curing process and flake off the moment the customer washes it.',
      ],
    },
    includes: [
      {
        title: 'Automated Pre-Treatment Chambers',
        description:
          'Chemical misting applied with mathematical precision to the programmed print zone only, which eliminates the yellow box halo around the artwork.',
      },
      {
        title: 'High-Pressure Dual-CMYK Systems',
        description:
          'Industrial machinery fires ink under immense pressure so pigment penetrates deep into heavyweight fabrics rather than sitting on the surface.',
      },
      {
        title: 'Advanced Pre-Press Engineering',
        description:
          'Specialised RIP software handles transparencies, drop shadows and opacity masks. Artwork is required at 300 DPI at its exact physical dimensions.',
      },
      {
        title: 'CMYK Conversion & Swatch Testing',
        description:
          'Prepress engineers convert RGB files to a strict CMYK profile, flag out-of-gamut colours and send a physical swatch for approval before production.',
      },
      {
        title: 'Thermal Curing at 330°F',
        description:
          'Forced-air conveyor drying or a calibrated heat press at exactly 330°F (165°C) for up to 90 seconds permanently locks the pigment into the cotton cellulose.',
      },
      {
        title: 'Post-Print Washing & OEKO-TEX Inks',
        description:
          'Post-cure wash cycles neutralise the pre-treatment for a retail-ready hand-feel with zero chemical odour, using inks that are vegan, biodegradable and OEKO-TEX certified.',
      },
    ],
    process: [
      {
        title: 'Artwork & Fabric Qualification',
        description:
          'We confirm the garment is 100% ring-spun cotton and the file is 300 DPI at final size, then flag any colour that falls outside the printable gamut.',
      },
      {
        title: 'Colour Profiling & Swatch Approval',
        description:
          'RGB is converted to a strict CMYK profile and a physical swatch is printed on your actual garment for sign-off before the run.',
      },
      {
        title: 'Pre-Treatment & Printing',
        description:
          'Pre-treatment is misted to the print zone, then dual-CMYK heads lay the image down in a room held at 50–60% humidity around the clock.',
      },
      {
        title: 'Curing, Washing & Inspection',
        description:
          'Garments cure at 330°F, run the post-print wash protocol, and are inspected for colour accuracy against the approved swatch.',
      },
    ],
    faqs: [
      {
        question: 'Does a DTG print last as long as a screen print?',
        answer:
          'If cured correctly with our thermal protocols on 100% cotton, a premium DTG print will easily survive 50+ heavy wash cycles without significant fading. However, it will never outlast a heavy plastisol screen print, which is essentially a permanent layer of melted PVC plastic sitting on top of the shirt. DTG trades a slight amount of sheer, bulletproof durability for an incredibly soft hand-feel, superior breathability, and infinite color complexity.',
      },
      {
        question: 'Can you print over zippers, seams, or pockets?',
        answer:
          'No. The print heads on an industrial DTG machine hover just millimeters above the fabric surface. If a thick zipper, a bulky seam, or a raised pocket hits the print head during its rapid pass, it will instantly destroy a highly expensive, precision-calibrated piece of equipment. DTG printing must be executed on perfectly flat, unobstructed panels.',
      },
      {
        question: 'What is the maximum print size for your DTG machines?',
        answer:
          'Our industrial platens can accommodate massive oversized prints, typically maxing out at 16 inches wide by 20 inches tall. This easily covers the entire front or back panel of a standard adult heavyweight hoodie or t-shirt, allowing for massive, wrap-around graphic placements.',
      },
      {
        question: 'Will the white ink crack over time?',
        answer:
          'White ink cracking is caused by two things: under-curing or printing on highly elastic fabric. Because DTG ink is designed for rigid 100% cotton, it does not stretch well. If a customer buys a shirt that is too tight and the cotton stretches across their chest, the layer of white underbase ink will micro-fracture. We mitigate this by ensuring deep ink penetration and exact 330°F curing, but we always advise clients to print on heavier GSM cottons to reduce fabric stretch.',
      },
    ],
    detail: {
      heroBody: [
        'If your brand relies on complex watercolor illustrations, high-resolution portrait photography, or intricate 3D shading, forcing that artwork through a traditional mesh screen often results in a thick, muddy graphic that lacks detail.',
        'We provide DTG printing services (Direct-To-Garment) designed specifically to bypass the physical limitations of screen mesh.',
        'However, DTG is not the cheap, “print-on-demand” fallback that internet marketers claim it is. It is a highly specialized chemical process. We utilize industrial-grade, dual-CMYK print heads to inject eco-friendly water-based pigments directly into the fibers of the garment. The result is a profoundly soft, highly detailed print that captures every microscopic pixel of your original digital artwork, entirely without the heavy, plastic feel of traditional plastisol ink.',
      ],
      includeGroups: [
        {
          title: 'Industrial Hardware vs. Modified Office Printers',
          intro:
            'There is a massive, unspoken divide in the DTG industry regarding the hardware used on the factory floor. Over 90% of local print shops and entry-level dropshippers use modified desktop inkjet printers that process one shirt every ten to fifteen minutes. While fine for a hobbyist, these machines lack the pneumatic pressure and ink flow necessary to force pigment deep into heavyweight, premium garments.',
          items: [
            {
              title: 'High-Pressure Dual-CMYK Systems',
              description:
                'As a high-volume commercial DTG printer services facility, we utilize true industrial manufacturing machinery. These industrial machines feature dual-CMYK heads and massive built-in white underbase channels. They fire ink with immense pressure, driving the pigment deep into the core of a 400 GSM heavyweight French Terry hoodie just as easily as a lightweight 150 GSM t-shirt. This deep penetration ensures the print survives intense industrial wash cycles without degrading, cracking, or fading.',
            },
            {
              title: 'Environmental Humidity and Factory Climate Control',
              description:
                'Water-based DTG inks are incredibly sensitive to environmental factors. If the air in the factory is too dry, the ink will literally dry and clog inside the microscopic print heads before it ever reaches the shirt. Our DTG production floors operate under strict, 24/7 climate control, maintaining a constant 50-60% ambient humidity. This prevents head-strikes, banding, and inconsistent color output across massive bulk runs.',
            },
          ],
        },
        {
          title: 'Advanced Pre-Press Engineering for DTG',
          intro:
            'Because DTG relies entirely on digital print heads rather than physical mesh screens, the quality of the final output is 100% dependent on the quality of your input file. A machine cannot “fix” a blurry image during the printing phase. Our prepress team institutes strict engineering protocols on your files before the machine is engaged.',
          items: [
            {
              title: 'Handling Transparencies and Drop Shadows',
              description:
                'A common mistake in amateur DTG printing involves drop shadows and semi-transparent gradients (like smoke or glowing effects) fading into a black shirt. If not engineered correctly, the machine will print a solid white underbase beneath the semi-transparent smoke, resulting in a horrible grey blob instead of a smooth fade. Our prepress team utilizes specialized RIP (Raster Image Processor) software to manually adjust the opacity masks, ensuring the white underbase chokes back exactly where it needs to, allowing smooth, flawless gradients.',
            },
            {
              title: 'Resolution and DPI Mandates',
              description:
                'We require all artwork to be exported at exactly 300 DPI (Dots Per Inch) at the exact physical dimensions you want it printed (e.g., 14 inches wide by 18 inches tall). Upscaling a low-resolution JPEG will result in jagged, pixelated edges that the DTG machine will print with brutal accuracy.',
            },
          ],
        },
      ],
      warning: {
        title: 'The 100% Ring-Spun Cotton Mandate',
        body: [
          'To achieve gallery-quality, permanent prints that outlast the garment itself, we strictly enforce a 100% cotton requirement for our DTG production lines. We highly recommend using combed and ring-spun cotton. This industrial spinning process removes stray, fuzzy fibers from the yarn before it is knitted, creating an incredibly flat, smooth surface area for the microscopic ink droplets to land on.',
          'If your project mandates polyester blends, moisture-wicking activewear, or tri-blends, we will immediately route your order to our Screen Printing or Sublimation hubs. We refuse to execute a printing method if the chemistry guarantees failure.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      spotlight: [
        {
          title: 'Navigating Color Gamut Limitations (RGB vs CMYK)',
          body: [
            'The most common point of friction between a fashion designer and a printing factory is color expectation. When you look at your artwork on a high-resolution monitor, you are seeing light emitted in RGB (Red, Green, Blue). A monitor can display glowing neon greens, hyper-vibrant pinks, and impossibly bright blues.',
            'Printers do not use light; they use physical liquid pigment. DTG machines mix Cyan, Magenta, Yellow, and Black (CMYK) to recreate your image. The CMYK color gamut is physically smaller than the RGB gamut. It simply cannot replicate glowing neon or fluorescent colors.',
            'Before we accept a bulk run for our B2B direct to garment services, our prepress engineers actively convert your digital files into a strict CMYK color profile. We then flag any “out-of-gamut” colors — these are specific shades in your artwork that will look duller when printed than they do on your glowing screen. We run a physical swatch test so you can approve the exact, real-world physical color output before we initiate the full production run.',
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'Thermal Curing and Permanent Ink Fixation',
          tone: 'cream',
          body: [
            'A DTG print fresh off the machine is essentially a wet watercolor painting sitting on a piece of fabric. If it is not cured correctly with exact thermal science, the water will evaporate but the pigment will not physically bond to the cotton fibers.',
            'Every garment that comes off our DTG line is immediately processed through a massive forced-air conveyor dryer or a strictly calibrated industrial heat press. The garment is held at exactly 330°F (165°C) for up to 90 seconds.',
            'This specific thermal window is critical. It evaporates the water base and triggers a chemical reaction that permanently locks the CMYK pigments into the cotton cellulose. If the temperature drops to 310°F, the bond fails. If it spikes to 360°F, the cotton fibers scorch. Our conveyor belts are digitally monitored to maintain exact thermal equilibrium throughout the entire bulk run.',
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'Environmental Sustainability and OEKO-TEX Standards',
          body: [
            'Modern consumers demand sustainability, and traditional screen printing can involve heavy PVC plastics (plastisol) and harsh chemical solvents during the screen-washing process.',
            'DTG printing provides a massive environmental advantage. The water-based inks we utilize in our contract DTG printing operations are 100% non-toxic, vegan, and biodegradable. Our primary ink sets are certified by the OEKO-TEX Standard 100, meaning they are guaranteed to contain no harmful chemicals, heavy metals, or volatile organic compounds (VOCs). They are completely safe for infant and toddler apparel.',
            'Furthermore, because DTG eliminates the need to wash out physical screens with heavy chemical solvents, our water consumption and chemical runoff footprint is a fraction of a traditional print shop.',
          ],
          ctaLabel: 'Make An Enquiry',
        },
      ],
      showProcess: false,
      trust: {
        title: 'Solving the Pre-Treatment “Yellow Box” Problem',
        tone: 'cream',
        intro: [
          'The single biggest complaint brands have when dealing with a cheap bulk DTG printing company is the infamous “yellow box effect” or “stain ring.”',
          'When you print liquid water-based ink onto a dark-colored shirt, the fabric instantly absorbs the ink like a sponge, making the image completely invisible. To fix this, the printer must apply a chemical pre-treatment fluid to the shirt. This fluid acts as a chemical primer, allowing the white ink underbase to sit on top of the fabric rather than soaking in.',
          'Cheap print shops spray this chemical unevenly using hand-held spray bottles. They then press the shirt and ship it. This leaves a stiff, crusty, yellowed square around the logo that infuriates retail customers.',
        ],
        points: [
          {
            title: 'Automated Pre-Treatment Chambers',
            description:
              'At Axiom Rise, we do not apply pre-treatment chemicals by hand. We utilize enclosed, automated pre-treatment cabinets. These machines apply a mathematically exact, ultra-fine mist of the chemical specifically to the programmed print zone. This ensures the fabric is perfectly primed to accept the white underbase without oversaturating the surrounding cotton.',
            icon: 'droplet',
          },
          {
            title: 'Mandatory Post-Print Washing Protocols',
            description:
              'Unlike cheap print-on-demand dropshipping facilities that shove the shirt into a poly-bag the exact second it comes off the hot press, we actively manage the chemical residue. Our premium bulk runs include a dedicated post-cure wash cycle. This cycle completely neutralizes and removes the stiff pre-treatment agent. When your customer opens their package, they receive a shirt with a flawless, retail-ready hand feel straight out of the box, with zero chemical odor or stiffness.',
            icon: 'sparkles',
          },
        ],
        cardCtas: false,
      },
      faqTitle: 'Technical DTG Production FAQ',
      finalCta: {
        title: 'Ready to Execute Photorealistic Apparel?',
        body: [
          'Do not trust complex, high-color artwork to a shop that forces everything through a standard mesh screen, and do not trust it to a dropshipper using a cheap desktop printer in a garage. If your design features gradients, shading, or photographic elements, you need the heavy-duty precision of industrial inkjet technology.',
          'Our DTG printing services provide the dual-CMYK hardware, the exact pre-treatment chemistry, the environmental controls, and the strict thermal curing protocols required to make your detailed graphics look flawless and feel permanent.',
        ],
        primaryLabel: 'Submit Your Artwork for a DTG Review',
        secondaryLabel: 'Talk to a Print Engineer',
      },
    },
  },
  {
    slug: 'sublimation-printing',
    title: 'Sublimation Printing Services',
    shortName: 'Sublimation Printing',
    blurb:
      'Disperse dyes driven into the fibre at 400°F, printed on the roll before a seam is sewn — edge-to-edge graphics with no hand-feel and no white creases.',
    image: '/images/hero/sports-wear.webp',
    heroHeadline:
      'Custom Sublimation Printing Services: How We Engineer Fade-Proof, All-Over Print Apparel for High-Performance Brands',
    heroSub:
      'When an athlete is training hard or running a marathon in 90-degree heat, traditional apparel printing fails.',
    pain: {
      title: 'What is Dye Sublimation, and How Do We Make Your Graphics Permanent?',
      body: [
        'To understand why a sublimated garment outlasts a standard screen-printed garment, you have to look at what actually happens inside our factory’s heat presses.',
        'We do not use standard liquid inks for this service. Bulk dye sublimation clothing relies on “Disperse Dyes.” These are highly specialized colorants formulated specifically to bond with synthetic plastics.',
        'The color is no longer sitting on the shirt. The color is the shirt. You can run your hand across a massive, full-color chest graphic and feel absolutely nothing but bare fabric.',
      ],
    },
    includes: [
      {
        title: 'Disperse Dye Chemistry at 400°F',
        description:
          'Solid disperse dyes are printed onto release paper, then pressed against raw fabric at exactly 400°F (204°C). The polyester pores open, the dye turns to gas, and cooling seals it inside the fibre.',
      },
      {
        title: 'Cut-and-Sew All-Over Print (AOP)',
        description:
          'Fabric is printed on the roll and cut into panels afterwards, never pressed as a sewn blank, so graphics run edge to edge with no white creases at the armpits or collar.',
      },
      {
        title: 'Rotary Calendering for Bulk AOP',
        description:
          'Continuous rolls of fabric and transfer paper feed together into a spinning, oil-heated drum held at 400°F without wrinkling or shifting, sublimating thousands of yards a day with zero colour variance.',
      },
      {
        title: 'Flatbed Presses for Spot Sublimation',
        description:
          'Industrial pneumatic flatbed presses take a single cut panel on the lower platen, align the transfer paper and press for 45 seconds — economical for chest logos and player numbers, as it uses far less transfer paper per unit.',
      },
      {
        title: 'ICC Colour Profiling & Dot Gain Chokes',
        description:
          'Profiles calibrated to our exact disperse dye brand, factory humidity and drum pressure, plus “chokes” applied to fine vector linework so the expanding gas swells text back to its intended thickness.',
      },
      {
        title: 'Fabric Sourcing & Qualification',
        description:
          'Disperse dye needs a synthetic polymer to bind to at all, so the sourcing team qualifies the exact substrate before a run is booked — 100% polyester, or a 250 GSM 4-way stretch poly-spandex where the garment is activewear.',
      },
    ],
    process: [
      {
        title: 'Digital Plotting',
        description:
          'We first print your high-resolution artwork onto specialized release paper using solid, microscopic disperse dye particles.',
        icon: 'swatch',
      },
      {
        title: 'Thermal Activation',
        description:
          'We sandwich this printed paper against the raw white fabric and feed it into a high-pressure heat press calibrated to exactly 400°F (204°C).',
        icon: 'heat',
      },
      {
        title: 'The Molecular Bond',
        description:
          'At 400°F, the pores of the polyester fabric expand and open up. At the exact same second, the solid dye on the paper turns into a massive cloud of colored gas, which is forced downward into the open pores of the fabric.',
        icon: 'shrink',
      },
      {
        title: 'Permanent Fixation',
        description:
          'As the fabric exits the machine and cools to room temperature, the pores of the polyester snap shut, permanently trapping the dye gas inside the actual fiber.',
        icon: 'lock',
      },
    ],
    faqs: [
      {
        question: 'Can you sublimate onto 100% cotton?',
        answer:
          'No, and we refuse the request outright. Cotton is a natural fiber with no synthetic pores to trap the dye gas, so the graphic looks beautiful coming off the press and then 90% of it washes down the drain the first time the garment goes through a washing machine.',
      },
      {
        question: 'What happens if I specify a poly-cotton blend?',
        answer:
          'On a 65% polyester / 35% cotton blend the dye bonds permanently to the polyester and ignores the cotton entirely, so the print washes back to a faded, heathered finish. That is a genuine tool for a vintage aesthetic, but for pitch-black saturation we mandate 100% polyester or poly-spandex (Lycra).',
      },
      {
        question: 'Why does a sublimated graphic have no hand-feel?',
        answer:
          'Because the color sits inside the fiber rather than on top of it. At 400°F (204°C) the polyester pores open while the solid dye converts to gas, and as the fabric cools the pores snap shut around it. Run a hand across a full-chest graphic and you feel nothing but bare fabric.',
      },
      {
        question: 'How do you stop ghosting and color banding?',
        answer:
          'Transfer paper that shifts even a millimeter inside the press blurs the gas into a double image, so the paper is locked to the fabric with a thermal-adhesive spray. Clogged plotter heads leave horizontal white lines across the paper, so nozzle checks are mandated daily before printing begins.',
      },
      {
        question: 'What do you need from me, and what is the minimum order?',
        answer:
          'Vector artwork with every critical color called out in Pantone Solid Coated codes, plus an approved physical strike-off. The minimum order is 30 pieces per product, production runs to 14 days, and delivery follows within 7 days.',
      },
    ],
    detail: {
      heroBody: [
        'Heavy plastisol screen prints act like a shield, trapping sweat against the body. Direct-to-Garment (DTG) inks simply slide right off synthetic athletic fabrics. If you are manufacturing performance gear, swimwear, or compression wear, you cannot rely on surface inks. You need dedicated custom sublimation printing services.',
        'At Axiom Rise, we do not print on your fabric. We use massive, high-pressure rotary calendering machines to trigger a permanent thermal reaction, forcing solid dyes directly into the core of the polyester fiber itself.',
        'Below we break down exactly what our services entail, how we handle your artwork, and how we engineer edge-to-edge, All-Over Print (AOP) garments that refuse to fade, crack, or restrict airflow under extreme physical stress.',
      ],
      includeGroups: [
        {
          title: 'What Fabrics Actually Work? How We Optimize Your Run for 100% Polyester',
          intro:
            'Because the chemistry of disperse dyes requires a synthetic polymer to bind with, your choice of raw material during the sourcing phase is critical.',
          items: [
            {
              title: 'Why We Do Not Sublimate on 100% Cotton',
              description:
                'If an amateur print shop tries to sublimate a graphic onto a 100% cotton t-shirt, it will look beautiful when it comes off the press. However, because cotton is a natural fiber, it has no synthetic pores to trap the gas. The very first time your customer puts that shirt into a washing machine, 90% of the image will wash down the drain. We categorically refuse to execute sublimation services on 100% cotton to protect your brand’s reputation.',
            },
            {
              title: 'How We Handle Poly-Blend Requests',
              description:
                'We can execute contract dye sublimation printing on blended fabrics (e.g., a 65% Polyester / 35% Cotton blend), but we ensure our clients understand the visual consequences. During the heat press phase, the dye will permanently bond to the 65% polyester fibers, but it will completely ignore the 35% cotton fibers. When washed, the ink washes out of the cotton, leaving behind a heavily faded or “heathered” look. If your design targets a vintage aesthetic, poly-blends are an incredible tool. But if you demand pitch-black saturation, our sourcing team will mandate 100% polyester or poly-spandex (Lycra) for your run.',
            },
          ],
        },
        {
          title: 'How We Prevent “White Creases” Using True Cut-and-Sew Sublimation',
          intro:
            'The most critical decision you must make when sourcing a sublimation apparel manufacturer is determining when the printing actually happens. Choosing the wrong production method will ruin the look of your garments.',
          items: [
            {
              title: 'The Failure of “Blank” Sublimation',
              description:
                'Thousands of print-on-demand drop-shippers operate by buying fully sewn, blank white t-shirts and laying them flat on a heat press. Because the shirt is 3D (with seams and armpits), it is physically impossible to lay it perfectly flat. When the heat press clamps down, the dye gas cannot reach inside the microscopic folds in the fabric. This creates “Ghosting” or the “White Crease Effect” — ugly white streaks scattered randomly across the armpits and collar where the ink failed to reach.',
            },
            {
              title: 'Our Cut-and-Sew Sublimation Process',
              description:
                'At Axiom Rise, we operate exclusively on a Cut-and-Sew sublimation model. We do not press finished garments. When you contract us as your all over print clothing manufacturer, we print your graphics onto massive, flat rolls of raw white fabric before a single seam is sewn. Because the fabric roll is perfectly flat, the dye saturates 100% of the surface area with absolute perfection. Only after the fabric is fully dyed do we laser-cut the pattern panels and pass them to our sewing floor for assembly. This is the only way to achieve a flawless, edge-to-edge graphic without a single white crease.',
            },
          ],
        },
        {
          title: 'How We Scale Your Production: Spot Sublimation and All-Over Print (AOP)',
          intro:
            'To execute flawless cut-and-sew sublimation at scale, a factory requires massive industrial hardware. Here is how we route your specific design to the right machinery on our factory floor.',
          items: [
            {
              title: 'Flatbed Heat Presses for Spot Sublimation',
              description:
                'If you are manufacturing white athletic jerseys and only require a vibrant sponsor logo on the chest and a player number on the back, we use industrial pneumatic flatbed presses. We lay the specific cut panel on the lower platen, align the transfer paper, and press it for 45 seconds. This “Spot Sublimation” service is highly economical because it drastically reduces the amount of expensive transfer paper required per unit.',
            },
            {
              title: 'Rotary Calendar Heat Presses for AOP',
              description:
                'For true edge-to-edge All-Over Print (AOP) garments — like complex camouflage rash guards or galaxy-print hoodies — flatbeds are too small. We deploy massive rotary calendering machines. The raw fabric is fed from a continuous roll into a massive, spinning, oil-heated drum alongside a continuous roll of printed transfer paper. The continuous feed system ensures the fabric is never wrinkled or shifted during the 400°F exposure, allowing us to sublimate thousands of yards of fabric a day with zero color variance.',
            },
          ],
        },
      ],
      processTitle: 'The Sublimation Phase Transition',
      processIntro:
        'In physics, “sublimation” is the process where a solid substance turns directly into a gas, skipping the liquid phase entirely. Here is how our team executes this process.',
      trust: {
        title: 'How We Engineer Your Digital Artwork: Dot Gain and Exact Color Matching',
        intro:
          'Because sublimation relies on a radical phase transition (solid to gas to trapped solid), the color you see on the printed transfer paper will look dull, muted, and completely wrong compared to the final baked fabric. Here is how our pre-press team ensures your final product matches your screen.',
        points: [
          {
            title: 'Advanced ICC Color Profiling',
            description:
              'Our pre-press engineers do not guess color theory. We use advanced ICC (International Color Consortium) software profiles specifically calibrated for the exact brand of disperse dye we use, the exact humidity of our factory, and the exact pressure of our calendering drums. This ensures that the digital CMYK values in your design file translate perfectly to the final physical fabric.',
            icon: 'swatch',
          },
          {
            title: 'Compensating for Sublimation Dot Gain',
            description:
              'When the solid dye turns into a gas, it expands. If a designer submits artwork with incredibly tiny text, the expanding gas will cause the edges of the letters to blur and bleed into each other. Our prepress team actively reviews your vector files and applies “chokes” (thinning the lines slightly in the digital file). When the gas expands on the heat press, the final text swells to the perfect, crisp intended thickness.',
            icon: 'shrink',
          },
        ],
        cardCtas: false,
      },
      audit: [
        {
          title: 'What is a “Strike-Off”? How We Physically Validate Your Colors',
          intro:
            'We do not accept a 5,000-unit bulk order and blindly hope the colors match your expectations. We mandate a strict, physical validation process before bulk manufacturing begins.',
          criteria: [
            {
              title: 'Digital Asset Submission',
              description:
                'You submit your vector files, ensuring all critical colors are called out using Pantone Solid Coated (PMS) codes.',
            },
            {
              title: 'Fabric Selection',
              description:
                'Our sourcing team provides exact polyester blends (e.g., 250 GSM 4-way stretch poly-spandex for activewear).',
            },
            {
              title: 'The Physical Strike-Off',
              description:
                'We print a small 12×12 inch swatch of your artwork and bake it onto the exact fabric you selected. We ship this physical strike-off to your headquarters.',
            },
            {
              title: 'Lighting Validation',
              description:
                'You physically verify that the deep blacks aren’t printing as dark green, and that the vibrant reds match your exact brand guidelines under real-world lighting.',
            },
            {
              title: 'Bulk Authorization',
              description:
                'Once the strike-off is approved, it becomes the legally binding color standard for our team to execute the entire bulk run.',
            },
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'How We Protect Your Run: Quality Control and Defect Prevention',
          tone: 'cream',
          intro:
            'Even the most advanced sublimation factory must maintain intense vigilance. Our Quality Control teams are trained to spot and instantly reject the specific mechanical defects inherent to thermal printing before they reach your warehouse.',
          criteria: [
            {
              title: 'Preventing Ghosting',
              description:
                'If the transfer paper shifts even a millimeter while the fabric is inside the heat press, the gas will blur, creating a double-image or “ghost” effect. We use specialized thermal-adhesive spray to lock the paper to the fabric, virtually eliminating ghosting.',
            },
            {
              title: 'Preventing Color Banding',
              description:
                'If the print heads on the large-format inkjet plotters become clogged, they will leave horizontal white lines (banding) across the transfer paper. We mandate strict daily nozzle checks to ensure the initial paper print is flawless.',
            },
            {
              title: 'Preventing Heat Press Blowout',
              description:
                'If the temperature of the rotary calendar drops from 400°F to 380°F during a massive 1,000-yard run, the dye will not fully convert to gas. The resulting fabric will look faded. Our calendering drums feature digital thermal sensors that halt the machine instantly if the oil temperature drops.',
            },
          ],
          ctaLabel: 'Request A Quote',
        },
      ],
      faqTitle: 'Technical Sublimation FAQ',
      finalCta: {
        title: 'Ready to Build Unbreakable Activewear with Our Sublimation Services?',
        body: [
          'Do not trust complex activewear or high-end streetwear to a print-on-demand shop that presses designs onto cheap, pre-sewn blanks. The resulting white creases and ghosting errors will instantly destroy the perceived value of your brand.',
          'Our custom dye sublimation services provide the heavy-duty rotary calendering hardware, the advanced ICC color profiling, and the strict cut-and-sew assembly protocols required to execute flawless, edge-to-edge graphics that never fade.',
        ],
        primaryLabel: 'Initiate a Strike-Off Sample',
        secondaryLabel: 'Speak with a Production Engineer',
      },
    },
  },
  {
    slug: 'custom-clothing-labels',
    title: 'Custom Clothing Label Services',
    shortName: 'Custom Labeling',
    blurb:
      'High-definition 100-denier Damask weaving, ultrasonic-cut edges, tagless heat transfers, FTC-compliant care tags and 400+ GSM hang tags with UPC or RFID.',
    image: '/images/why/unique.webp',
    heroHeadline:
      'Custom Clothing Label Manufacturing: High-Definition Woven Tags and Retail-Ready Trims',
    heroSub:
      'You can spend a year sourcing the perfect heavyweight fabric and dialing in your tech packs, but if you sew a cheap, scratchy piece of plastic into the back of your customer’s neck, the garment is ruined. They will cut the tag out, throw it away, and completely forget your brand name.',
    pain: {
      title: 'Apparel Labeling Is Not an Afterthought',
      body: [
        'It is the physical signature of your company, and more importantly, it is a strict legal requirement.',
        'When you ask a standard factory for a “woven label,” they will almost always default to Taffeta. Taffeta is cheap to produce, rigid, and uses a very low thread count. If your brand logo has fine lettering, a Taffeta label will render it as a blurry, pixelated mess.',
      ],
    },
    includes: [
      {
        title: '100-Denier High-Definition Damask',
        description:
          'Ultra-fine 100-denier polyester threads woven on precision industrial looms hold the exact curves and typography of your artwork, and the high-density weave leaves a surface that feels soft against the skin, not rigid like Taffeta. Where even Damask is too heavy, we rotary-print your logo onto double-faced satin ribbon.',
      },
      {
        title: 'Ultrasonic Cutting for Zero Scratching',
        description:
          'High-frequency sound waves slice and bind the label edge in a single pass, rather than a hot knife melting it into a sharp ridge of plastic. The result is zero friction against the wearer’s skin.',
      },
      {
        title: 'Tagless Plastisol Heat Transfers',
        description:
          'Where a woven tag is obsolete — compression gear, rash guards, swimwear, high-performance activewear — logo, sizing and care data are screen-printed in reverse onto transparent release film in plastisol or water-based ink, then stamped onto the inside yoke by pneumatic heat press for a zero-hand-feel finish.',
      },
      {
        title: 'FTC-Compliant Care Tags',
        description:
          'Interior side-seam tags carrying exact fibre content, the country of manufacture, your FTC-issued RN number, and wash instructions given both in writing and as universal geometric care symbols.',
      },
      {
        title: 'Manhattan Fold Hem Tags & Size Pips',
        description:
          'Double-sided woven tags wrap a t-shirt hem, beanie rim or hoodie cuff, top edges folded before the half-fold so no raw edge is exposed. Separate S, M, L pips sit beneath one standardised logo label.',
      },
      {
        title: 'Hang Tags, Barcoding & RFID',
        description:
          'Hang tags punched from 400+ GSM cardstock with custom die-cutting, matte lamination, spot UV gloss or metallic foil stamping, printed with scannable UPC/EAN barcodes or embedded with RFID chips so a whole pallet scans into a warehouse system in seconds.',
      },
    ],
    process: [
      {
        title: 'Artwork, Fold & Compliance Review',
        description:
          'We vet your artwork against the weave, agree the fold — centre-fold for a neck seam, end-fold for a flat vintage placement — and assemble the exact fibre content, RN number and care data the tag must legally carry.',
      },
      {
        title: 'Loom Setup & Press Calibration',
        description:
          'The Damask loom is set up for your artwork, and for tagless work the pneumatic press is calibrated to the exact temperature, pressure and dwell time your specific fabric weight requires before any bulk is run.',
      },
      {
        title: 'Bulk Production & Finishing',
        description:
          'Labels are woven and ultrasonically cut, transfers screen-printed in reverse onto release film, and hang tags punched from 400+ GSM cardstock, then finished with lamination, spot UV or foil stamping.',
      },
      {
        title: 'Application & Attachment',
        description:
          'Transfers are pressed onto the inside yoke during final trimming. At quality control, hang tags are attached with industrial tagging guns driving swift-tacks through the interior woven label or the heavy armpit seam, never through the main fabric. Luxury outerwear takes branded safety pins and waxed cotton strings.',
      },
    ],
    faqs: [
      {
        question: 'Can I order labels from you if I am manufacturing my clothes somewhere else?',
        answer:
          'While our labeling capabilities are built to seamlessly integrate with our own Full Production Package (FPP) and Cut-and-Sew lines, we do operate as a standalone supplier. We can manufacture bulk runs of woven tags, heat transfers, and RFID hang tags and ship them directly to your secondary factory for application.',
      },
      {
        question: 'What is the Minimum Order Quantity (MOQ) for custom woven labels?',
        answer:
          'Because weaving a custom Damask label requires highly intricate mechanical loom setups, our minimum order quantity typically starts at 1,000 units. However, these labels do not expire. We highly recommend ordering your tags in bulk and allowing us to hold them in our inventory for you, pulling from the stock as you initiate new cut-and-sew orders over the year.',
      },
      {
        question: 'What is the difference between a Center-Fold and an End-Fold label?',
        answer:
          'We engineer the physical fold of the label based entirely on how you want the tag attached to the shirt. A Center-Fold is folded exactly in half, with the raw open ends sewn directly into the interior neck seam. An End-Fold has the left and right edges folded inward, placing the label flat against the fabric for a very clean, vintage look.',
      },
    ],
    detail: {
      heroBody: [
        'We provide custom clothing labels and trimming services built specifically for B2B brands and high-end retail. We don’t sell cheap craft ribbons to hobbyists. From high-definition Damask weaves to tagless heat-transfer logistics and RFID enterprise integration, we engineer the microscopic details that make your garments feel unshakeably premium.',
      ],
      includeGroups: [
        {
          title: 'Our Woven Label Manufacturing Capabilities',
          intro:
            'When you contract our woven label manufacturer services, we default exclusively to High-Definition Damask to ensure your branding looks flawless.',
          items: [
            {
              title: '100-Denier High-Definition Damask',
              description:
                'Damask utilizes ultra-fine, 100-denier polyester threads tightly woven together on precision industrial looms. Because the threads are microscopic, we can replicate the exact curves and typography of a high-resolution digital file. More importantly, this high-density weave results in a surface that feels incredibly soft and luxurious against the skin.',
            },
            {
              title: 'Double-Faced Satin Woven Labels',
              description:
                'If you are manufacturing luxury intimate apparel or delicate silk blouses, even Damask might be too heavy. For these specific use cases, we manufacture double-faced Satin labels. The brand logo is rotary-printed directly onto a silky-smooth satin ribbon, providing the ultimate luxury hand-feel for delicate garments.',
            },
            {
              title: 'The Ultrasonic Cutting Standard (Zero Scratching)',
              description:
                'A woven label is essentially a piece of raw fabric. Most clothing brand labeling services use a standard hot knife to cut their tags, which melts the edge into a hard, sharp ridge of microscopic plastic. When that plastic rubs against a sweaty neck all day, it causes severe irritation. For our luxury labels, we deploy Ultrasonic Cutting machines. These industrial machines use high-frequency sound waves to slice and bind the edges of the label simultaneously, leaving the edge unbelievably soft and ensuring zero friction against the wearer’s skin.',
            },
          ],
        },
        {
          title: 'Exterior Branding and Placement Services',
          intro:
            'The interior neck label is just the baseline. We provide secondary labeling and placement services to add subtle visual weight to the exterior of your garments.',
          items: [
            {
              title: 'The Manhattan Fold Hem Tag',
              description:
                'A hem tag is a small, double-sided woven label that wraps around the bottom edge of a t-shirt, the rim of a beanie, or the cuff of a hoodie sleeve. We engineer these using a “Manhattan Fold” (where the top edges are folded over before being folded in half) so that no raw edges are exposed when sewn directly onto the exterior hem of the garment.',
            },
            {
              title: 'Interior Size Pips',
              description:
                'If you use a single, universal woven logo label for every shirt, you still need to indicate the size. Instead of paying us to weave 5 different logo labels, we sew a tiny, separate “Size Pip” (a small tag simply reading S, M, L) directly under the main woven label. This drastically reduces your cost of label manufacturing by standardizing your main logo run.',
            },
          ],
        },
        {
          title: 'Wholesale Hang Tags and Retail RFID Logistics',
          intro:
            'Your exterior hang tags handle the immediate retail sale. A premium, thick hang tag instantly elevates the perceived monetary value of a garment sitting on a boutique rack.',
          items: [
            {
              title: 'Heavyweight Cardstock Manufacturing',
              description:
                'We don’t use flimsy printer paper. Our wholesale garment hang tags are punched from heavy 400+ GSM cardstock. We offer custom die-cutting alongside premium finishes like matte-lamination, spot UV gloss, and metallic foil stamping to make your logo catch the light in a retail setting.',
            },
            {
              title: 'Industrial Swift-Tacking vs. Safety Pins',
              description:
                'During the final Quality Control phase, our operators physically attach the hang tags to your garments. We absolutely never punch holes directly through the main fabric. Instead, we use industrial tagging guns to drive micro-plastic swift-tacks securely through the interior woven label or the heavy seam of the armpit. For luxury outerwear, we utilize custom-branded safety pins and waxed cotton strings.',
            },
            {
              title: 'Barcoding and RFID Integration',
              description:
                'If you are selling wholesale to major department stores or using Amazon FBA, a simple paper tag isn’t enough. We generate and print scannable UPC/EAN barcodes directly onto the hang tags. For advanced enterprise inventory management, we can embed RFID (Radio Frequency Identification) chips inside the hang tags, allowing entire pallets of clothing to be scanned into a warehouse inventory system in seconds.',
            },
          ],
        },
      ],
      showProcess: false,
      trust: {
        title: 'Tagless Branding: Custom Heat Press Label Services',
        intro:
          'If your brand manufactures compression gear, rash guards, swimwear, or high-performance activewear, physical woven tags are entirely obsolete. Athletes will not tolerate anything rubbing against their skin while they train.',
        points: [
          {
            title: 'Plastisol Thermal Transfers',
            description:
              'To solve this, we manufacture custom heat press labels. Using specialized plastisol inks or water-based transfers, we screen-print your logo, sizing information, and care instructions in reverse onto a transparent release film. During the final trimming phase of our Cut-and-Sew line, our operators use industrial pneumatic heat presses to stamp the label directly onto the inside yoke of the shirt, creating a zero-hand-feel experience.',
            icon: 'heat',
          },
          {
            title: 'Eliminating the Sticky “Halo Effect”',
            description:
              'A common defect in cheap heat-press tags is the “Halo Effect” — a shiny, sticky square of leftover adhesive surrounding the printed text on the inside of the shirt. Our production engineers eliminate this by calibrating the exact temperature, pressure, and dwell time (usually 320°F for exactly 10 seconds) required for your specific fabric weight, ensuring only the pigment transfers to the garment.',
            icon: 'sparkles',
          },
        ],
        cardCtas: false,
      },
      audit: {
        title: 'FTC-Compliant Care Tags and Legal Labeling Services',
        intro:
          'A clothing label isn’t just for branding; it is a strict legal requirement. If you sell apparel in the United States, the Federal Trade Commission (FTC) mandates that every single garment contain specific, highly legible information.',
        criteriaLabel:
          'If you miss a single detail on your care tags, your entire bulk shipment can be seized at customs. As your dedicated custom apparel tags provider, our technical team ensures your interior side-seam tags contain the exact required data:',
        criteria: [
          {
            title: 'Exact Fiber Content',
            description: 'Mathematically accurate breakdowns (e.g., 60% Cotton / 40% Polyester).',
          },
          {
            title: 'Country of Origin',
            description:
              'Clearly stating where the garment was manufactured (e.g., Made in Pakistan).',
          },
          {
            title: 'Manufacturer Identity (RN Number)',
            description: 'A Registered Identification Number (RN) issued by the FTC.',
          },
          {
            title: 'Wash and Care Instructions',
            description:
              'Both written instructions and universal geometric care symbols.',
          },
        ],
        ctaLabel: 'Make An Enquiry',
      },
      faqTitle: 'Technical Labeling FAQ',
      finalCta: {
        title: 'Finalize the Details That Define Your Brand',
        body: [
          'Do not let a cheap, scratchy piece of polyester destroy the customer experience of a garment you spent months designing.',
          'Our custom labeling and trimming services provide the high-definition weaving, the ultrasonic cutting, and the strict FTC legal compliance required to make your brand look — and feel — unshakeably professional on the retail rack.',
        ],
        primaryLabel: 'Request a Label and Trim Quote',
        secondaryLabel: 'Speak with a Production Expert',
      },
    },
  },
  {
    slug: 'custom-packaging',
    title: 'Custom Packaging Services',
    shortName: 'Custom Packaging',
    blurb:
      'Garments folded, bagged in micro-perforated LDPE or frosted EVA, desiccant-protected and barcoded — off our line and straight onto a 3PL or FBA shelf.',
    image: '/images/process/delivery.webp',
    heroHeadline:
      'Custom Apparel Packaging Services: Delivering Retail-Ready Garments Straight Off the Factory Floor',
    heroSub:
      'You just received your bulk manufacturing order. You open the freight boxes, and instead of retail-ready products, you are staring at 5,000 loose, wrinkled t-shirts stuffed into giant cardboard crates.',
    pain: {
      title: 'Why Receiving Loose Garments Destroys Your Warehouse Efficiency',
      body: [
        'When a brand scales, warehouse labor becomes one of their highest operational costs. If you are paying hourly staff to fold and bag garments that just arrived from overseas, you are losing money on every single unit.',
        'A premium clothing packaging manufacturer understands that packaging is actually a logistics service. By integrating the folding and bagging process directly at the source — where the labor cost of handling the garment is already absorbed into the final trim phase — you completely eliminate the most tedious bottleneck in your supply chain. We treat the final presentation of your garment with the exact same industrial rigor as the sewing process.',
      ],
    },
    includes: [
      {
        title: 'Clear LDPE Polybags',
        description:
          'Clear Low-Density Polyethylene bags, the tear-resistant high-volume standard, carrying microscopic perforations so trapped air and moisture escape in transit. Operators fold every shirt on industrial folding boards to identical geometric dimensions before the bag is filled and sealed during the final quality control phase.',
      },
      {
        title: 'Frosted EVA Slider Bags',
        description:
          'Ethylene Vinyl Acetate sliders with a soft, matte, semi-translucent finish and a premium zip-lock closure. Customers reuse them for travel or gym kit, which keeps your branding in circulation long after the sale.',
      },
      {
        title: 'Recycled Kraft Bags & Glassine Envelopes',
        description:
          'For lines that must eliminate single-use plastic, 100% recycled Kraft paper bags and Glassine envelopes give an organic, rustic presentation suited to vintage denim and eco-conscious apparel.',
      },
      {
        title: 'Custom Poly Mailers & Folding Cartons',
        description:
          'Heavy-duty, waterproof poly mailers printed in full-colour CMYK turn every direct-to-consumer despatch into a moving billboard, and lightweight paperboard folding cartons for socks, underwear and rolled t-shirts ship flat to cut freight, then pop into shape on the retail shelf.',
      },
      {
        title: 'Size Stickering & UPC/EAN Barcoding',
        description:
          'Colour-coded size stickers go on the outside of every sealed bag, and your UPC or EAN codes print onto high-adhesion thermal labels, so warehouse staff can sort and shelve a unit without opening it — the handling that triggers 3PL intake penalty fees.',
      },
      {
        title: 'E-Flute Rigid Apparel Boxes',
        description:
          'For luxury jackets, heavy selvedge denim and limited-edition collaborations, E-flute corrugated rigid boxes survive the postal system without crushing, and take magnetic closures, branded acid-free tissue paper and die-cut foam inserts.',
      },
    ],
    process: [
      {
        title: 'Packaging Specification & DIM Modelling',
        description:
          'We select the inner bag and exterior enclosure against your price point, then shrink the volumetric footprint so the enclosure hugs the folded garment and you are billed on the lowest dimensional weight the product allows.',
      },
      {
        title: 'Artwork Proofing & Plate Set-Up',
        description:
          'Full-colour CMYK logos, patterns or matte-black minimalist designs are proofed against your artwork, then industrial flexographic printing plates are cut for the custom bag and mailer run, while print-ready dielines are released for folding cartons and rigid boxes.',
      },
      {
        title: 'Folding, Bagging & Moisture Protection',
        description:
          'On the final quality control line every piece is folded on an industrial board to standardised dimensions, sealed into a micro-perforated bag and, on heavy cottons and denim, packed with a silica gel desiccant.',
      },
      {
        title: 'Stickering, Barcoding & Freight Packout',
        description:
          'Colour-coded size stickers and thermal UPC or EAN labels go onto the exterior of each bag or retail box, and cartons are packed out ready to scan into a 3PL or Amazon fulfilment centre.',
      },
    ],
    faqs: [
      {
        question: 'Do I have to buy packaging from you if I manufacture somewhere else?',
        answer:
          'No. While our packaging services are seamlessly integrated into our own Cut-and-Sew factory line, we operate as an independent clothing packaging manufacturer. We can design and produce bulk runs of custom poly mailers, frosted slider bags, and rigid apparel boxes, and ship them directly to your warehouse or secondary factory.',
      },
      {
        question: 'What is the Minimum Order Quantity (MOQ) for custom printed bags?',
        answer:
          'Because printing a custom logo onto a frosted EVA bag or a poly mailer requires setting up industrial flexographic printing plates, our MOQs for fully custom packaging typically start at 1,000 units. For plain, unbranded packaging, the minimums are significantly lower.',
      },
      {
        question: 'Do you offer tissue paper and custom stickers?',
        answer:
          'Absolutely. We provide fully branded, acid-free tissue paper to wrap luxury garments before they are placed in the box. We also print roll-labels and custom die-cut stickers to seal the tissue paper, completing the boutique unboxing experience.',
      },
    ],
    detail: {
      heroBody: [
        'Now, your entire team has to spend the next three days manually folding, bagging, and stickering every single shirt before you can sell them. This happens constantly when factories treat packaging as an afterthought.',
        'At Axiom Rise, we do not ship raw, loose inventory. Our custom apparel packaging services are fully integrated into our final Quality Control assembly line. By the time your garments leave our loading dock, they are individually folded, protected in branded polybags, stickered with inventory barcodes, and completely ready to be scanned straight into a 3PL warehouse or an Amazon FBA fulfillment center.',
      ],
      includeGroups: [
        {
          title: 'How We Handle Final Folding and Inner Packaging',
          intro:
            'The unboxing experience dictates how a customer perceives the value of your brand. A wrinkled shirt stuffed into a cheap, shiny plastic bag feels like fast fashion. We offer several inner packaging solutions to elevate that initial touchpoint.',
          items: [
            {
              title: 'The Standard Polybag (Clear LDPE)',
              description:
                'This is the industry standard for high-volume apparel fulfillment packaging services. We utilize clear Low-Density Polyethylene (LDPE) bags. They are highly durable, tear-resistant, and incredibly cost-effective. During the final Quality Control phase, our operators use industrial folding boards to ensure every shirt is folded to the exact same geometric dimensions before sliding it into the polybag and sealing it.',
            },
            {
              title: 'Frosted EVA Zipper Bags',
              description:
                'For luxury streetwear, activewear, and premium boutiques, the packaging needs to feel expensive. We utilize frosted EVA (Ethylene Vinyl Acetate) slider bags. These bags feature a soft, matte, semi-translucent finish that feels thick and rubbery to the touch. They utilize a premium zip-lock closure, meaning the customer can reuse the bag for travel or gym gear, extending your brand’s visibility.',
            },
            {
              title: 'Eco-Friendly Kraft Paper Bags',
              description:
                'Modern consumers demand sustainability. To eliminate single-use plastics, we offer 100% recycled Kraft paper bags and Glassine envelopes. These options provide a beautiful, organic, rustic aesthetic that perfectly aligns with vintage denim or eco-conscious apparel lines.',
            },
          ],
        },
        {
          title: 'Amazon FBA and 3PL Readiness: Barcodes and Size Stickering',
          intro:
            'If you are shipping your inventory to a Third-Party Logistics (3PL) center or directly to an Amazon FBA warehouse, your packaging must meet incredibly strict intake requirements. If a 3PL worker has to open a bag to figure out what size the shirt is, they will charge you an intake penalty fee.',
          items: [
            {
              title: 'Exterior Size Stickering',
              description:
                'Once the garment is sealed inside its frosted or clear polybag, our operators apply a highly visible, color-coded size sticker (e.g., a red ‘M’ or a blue ‘L’) directly to the outside of the bag. This allows warehouse workers to rapidly sort and stack inventory without squinting at the interior neck label.',
            },
            {
              title: 'UPC and EAN Barcode Application',
              description:
                'Enterprise retail systems run on barcodes. You provide us with your digital UPC or EAN codes, and we print them on high-adhesion thermal labels. We apply these barcodes directly to the exterior of the polybag or custom retail box. When your freight arrives at an Amazon fulfillment center, they simply scan the outside of the bag and load it directly onto their shelves.',
            },
          ],
        },
      ],
      warning: {
        title: 'Protecting Your Freight: Why We Mandate Silica Gel and Micro-Perforations',
        body: [
          'When you order thousands of garments, they spend weeks sitting in metal shipping containers crossing the ocean. During that transit, the temperature inside the container fluctuates wildly.',
          'When hot air cools, it creates condensation. If that moisture is trapped inside a sealed plastic bag with your clothing, the garments will develop mildew, mold, and a horrific odor.',
          'As an experienced garment packaging supplier, we engineer our packaging to breathe. Our standard polybags are manufactured with microscopic perforations — tiny holes that allow trapped air and moisture to escape. Furthermore, for heavy cottons and denim, we mandate the insertion of silica gel desiccant packets into every single bag. These packets actively absorb any rogue moisture during transit, ensuring your garments smell clean and fresh the moment they are unboxed.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      showProcess: false,
      trust: {
        title: 'Exterior Branding: Custom Mailers and Structural Retail Boxes',
        tone: 'cream',
        intro:
          'While the inner polybag protects the garment in the warehouse, the exterior packaging is what the mail carrier drops on your customer’s doorstep. We manufacture advanced exterior enclosures tailored to your brand’s price point.',
        points: [
          {
            title: 'Custom Poly Mailers',
            description:
              'For e-commerce brands fulfilling orders directly to the consumer, we manufacture custom-printed poly mailers. These heavy-duty, waterproof shipping bags act as a moving billboard for your brand. We can print full-color CMYK logos, custom patterns, or matte-black minimalist designs directly onto the mailer.',
            icon: 'envelope',
          },
          {
            title: 'Folding Cartons for Retail Shelves',
            description:
              'For garments sold in physical retail environments (like socks, underwear, or rolled t-shirts), we engineer custom folding cartons. Made from lightweight paperboard, these boxes are shipped to you flat to save on freight costs. They quickly pop into shape and are fully printable on every exterior face, providing a massive canvas for branding and product information.',
            icon: 'carton',
          },
          {
            title: 'Corrugated Rigid Apparel Boxes',
            description:
              'For high-ticket items like luxury jackets or heavy selvedge denim, a standard mailer bag or folding carton is not enough protection. We design and construct E-flute corrugated rigid boxes. These industrial-strength boxes survive the postal system without crushing. They can be customized with magnetic closures, interior branded tissue paper, and custom die-cut foam inserts to create a massive, premium unboxing experience.',
            icon: 'cube',
          },
        ],
        cardCtas: false,
      },
      audit: {
        title: 'The Mathematics of Dimensional Weight (DIM) in Shipping',
        intro:
          'When you design custom clothing packaging, you are not just designing for aesthetics; you are designing for shipping economics.',
        body: [
          'FedEx, UPS, and DHL do not just charge by how heavy a box is. They charge by “Dimensional Weight” (DIM). This means they calculate the physical size of the box (Length x Width x Height) and compare it to the actual weight, charging you for whichever number is higher.',
          'If you put a single lightweight t-shirt into a massive, oversized luxury box, the courier will charge you as if that box weighs 10 pounds, completely destroying your profit margin on that sale. Our packaging engineers work with your team to shrink the volumetric footprint of your packaging. We design mailers and boxes that perfectly hug the folded dimensions of the garment, ensuring you pay the absolute lowest possible shipping rates while maintaining a premium presentation.',
        ],
        ctaLabel: 'Make An Enquiry',
      },
      faqTitle: 'Answers to Your Packaging and Fulfillment Questions',
      finalCta: {
        title: 'Stop Wasting Your Team’s Time on Manual Bagging',
        body: [
          'Your team should be focused on marketing and selling your apparel, not standing in a warehouse folding thousands of t-shirts and sticking barcodes on plastic bags.',
          'Let our factory handle the logistics. From premium frosted zipper bags to complete FBA warehouse readiness, our custom packaging and fulfillment services ensure your garments arrive pristine, protected, and instantly ready to sell.',
        ],
        primaryLabel: 'Get a Custom Packaging Quote',
        secondaryLabel: 'Talk to a Logistics Expert',
      },
    },
  },
  {
    slug: 'quality-control-and-inspection',
    title: 'Quality Control & Inspection Services',
    shortName: 'Quality Control & Inspection',
    blurb:
      'Six audit checkpoints — 4-point fabric grading, two-hourly in-line audits, destructive testing and needle detection — before a carton leaves our floor.',
    image: '/images/why/quality.webp',
    heroHeadline: 'Industrial Apparel Quality Control: The Factory Audit Manual',
    heroSub:
      'The apparel industry operates on a dangerous financial premise: sew it fast, ship it out, and pray the client doesn’t catch the mistakes.',
    pain: {
      title: 'Checkpoint 01: Inbound Raw Material Audits (The 4-Point System)',
      body: [
        'You cannot build a flawless garment out of compromised fabric. The biggest mistake a generic garment inspection company makes is waiting until the clothes are completely sewn to start checking for errors.',
        'Before a single roll of fabric is allowed onto our cutting tables, it undergoes a grueling inbound audit known in textile engineering as the 4-Point Grading System.',
        'Inspector’s Note: Our technicians unroll the greige or dyed fabric across massive, backlit inspection tables. As the fabric rolls over the high-intensity light, the technician visually hunts for slubs, misweaves, dye spots, and microscopic holes. Every defect is assigned a penalty point based on its physical size. If a roll of fabric accumulates more than 40 penalty points per 100 square yards, the entire roll is classified as “Grade B” and is legally rejected and returned to the textile mill.',
      ],
    },
    includes: [
      {
        title: 'Inbound 4-Point Fabric Grading',
        description:
          'Greige and dyed rolls are unrolled across backlit inspection tables and scored for slubs, misweaves, dye spots and microscopic holes. A roll accumulating more than 40 penalty points per 100 square yards is classified Grade B, rejected and returned to the textile mill.',
      },
      {
        title: 'Two-Hourly In-Line Stitch Audits',
        description:
          'Every two hours a QA manager pulls garments straight from the operators’ hands, measures Stitches Per Inch against the tech pack with a magnifying glass and verifies the bobbin thread colour matches the exterior thread.',
      },
      {
        title: 'Final Random Inspection Against Your Golden Sample',
        description:
          'Random boxes are opened from the sealed pallet and torn down against your approved Golden Sample: chest width, sleeve length and sweep measured flat against the POM chart, any deviation beyond tolerance logged as a Major Defect.',
      },
      {
        title: 'Destructive Hardware & Crocking Tests',
        description:
          'Pneumatic pull-tests take YKK hardware, snap buttons and drawstrings to breaking point, and dyed swatches are rubbed wet and dry against pure white cotton; any bleed means fixation failed at the dye house and the fabric is rejected.',
      },
      {
        title: 'Industrial Needle Detection',
        description:
          'Every sealed polybag passes through an industrial conveyor needle detector before any carton leaves the facility. A snapped needle tip buried in a denim seam or under a pocket fold halts the machine and sounds an alarm, so nothing ships without 100% safety compliance.',
      },
      {
        title: 'Packaging & Freight Discrepancy Checks',
        description:
          'Your 3PL or Amazon FBA warehouse will penalise you heavily for a mislabelled box or a carton weight that does not match the shipping manifest, so UPC barcodes are scanned to confirm they read correctly into retail systems and master cartons are weighed against the theoretical weight calculated in your tech pack.',
      },
    ],
    process: [
      {
        title: 'Golden Sample & Standard Lock-In',
        description:
          'Your approved prototype becomes the Golden Sample, and the POM chart, tolerances and theoretical carton weights from your tech pack become the benchmark every checkpoint measures against.',
      },
      {
        title: 'Inbound Raw Material Audit',
        description:
          'No roll reaches the cutting tables until it has cleared the 4-Point Grading System on backlit tables. Anything above 40 penalty points per 100 square yards is classified Grade B and sent back to the textile mill.',
      },
      {
        title: 'Continuous In-Line Auditing',
        description:
          'A QA manager walks the live sewing line every two hours checking SPI and bobbin colour. If a machine drops stitches the line is halted instantly, a mechanic recalibrates it and the operator corrects the last batch before sewing resumes.',
      },
      {
        title: 'Final Random Inspection & Sign-Off',
        description:
          'Random cartons are torn down against the Golden Sample and folded down the centre vertical axis, so shoulder seams that do not align expose off-grain cutting. Every polybag then passes the needle detector, and a digital inspection report is issued before release to your freight forwarder.',
      },
    ],
    faqs: [
      {
        question: 'Can I still hire a third-party inspection company like QIMA or SGS?',
        answer:
          'Absolutely. We operate a completely transparent factory floor. You are always welcome to hire an independent garment inspection company to conduct a Final Random Inspection (FRI) at our facility before you authorize the final payment for shipping. We welcome external audits because our internal standards are just as strict.',
      },
      {
        question: 'What happens to the garments that fail the AQL inspection?',
        answer:
          'Garments with Minor or Major defects are routed to a dedicated rework line. If a hem is crooked, the thread is unpicked, and the hem is re-sewn perfectly by a master operator. If the garment has a Critical defect (like a burn hole or torn fabric), it is physically destroyed and replaced with a newly manufactured unit. You never pay for defective goods.',
      },
      {
        question: 'Do you provide a final inspection report?',
        answer:
          'Yes. Before we release the shipment to the freight forwarder, we provide you with a comprehensive digital inspection report. This includes high-resolution photos of the garments, the AQL statistical breakdown, and the results of the hardware pull-tests, proving the batch meets your exact standard.',
      },
    ],
    detail: {
      heroBody: [
        'This culture of speed over precision is exactly why an entire industry of third-party auditing companies (like QIMA, SGS, and HQTS) exists. Brands are forced to pay external inspectors hundreds of dollars a day just to fly to a factory and verify that the clothes they already paid for aren’t falling apart.',
        'You should not have to hire an external police force to manage your own manufacturer.',
        'At Axiom Rise, we operate our facility under a zero-trust policy. We do not inspect garments at the end of the line; we audit them continuously at every single workstation. Below we break down the mechanical stress tests, the acceptable defect mathematics, and exactly how our quality control and inspection services guarantee your bulk run matches your approved prototype perfectly.',
      ],
      showIncludes: false,
      showProcess: false,
      audit: [
        {
          title: 'Checkpoint 02: In-Line Stitch and Tension Audits',
          intro:
            'If an overlock sewing machine has the wrong thread tension, it will pucker the fabric. If you wait until the end of the day to check the garments, you will have 500 puckered, unsellable shirts.',
          criteriaLabel:
            'To prevent this, our floor managers execute rigorous In-Line Inspections. Every two hours, a QA manager walks the active sewing line and pulls garments directly out of the operators’ hands.',
          criteria: [
            {
              title: 'SPI Verification',
              description:
                'They measure the Stitches Per Inch (SPI) with a magnifying glass to ensure it matches the tech pack.',
            },
            {
              title: 'Bobbin Checks',
              description:
                'They verify that the color of the interior bobbin thread matches the exterior thread exactly.',
            },
            {
              title: 'Tension Halts',
              description:
                'If a sewing machine is dropping stitches, the entire production line is halted instantly. The mechanic recalibrates the machine, and the operator must correct the last batch of garments before they are allowed to resume sewing. This proactive clothing AQL inspection protocol stops defects from multiplying.',
            },
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'Checkpoint 03: The Final Random Inspection (FRI) Protocol',
          image: '/images/services/quality-assurance.webp',
          tone: 'cream',
          intro:
            'Once the garments are fully assembled, pressed, tagged, and folded into their polybags, they enter the Final Random Inspection (FRI) phase. This is the last line of defense before your inventory is loaded onto a shipping container.',
          criteriaLabel:
            'Our internal auditors open random boxes from the sealed pallet. They pull out the packaged garments and subject them to a brutal, comprehensive teardown based strictly on your approved Golden Sample.',
          criteria: [
            {
              title: 'Dimensional Tolerance Verification',
              description:
                'A size Large must measure exactly like a size Large. The inspector lays the garment completely flat and uses a specialized measuring tape to check the chest width, sleeve length, and sweep against the Points of Measure (POM) chart. If the measurement deviates beyond the allowed fraction of an inch (the tolerance), it is marked as a Major Defect.',
            },
            {
              title: 'Symmetrical Visual Alignment',
              description:
                'The inspector folds the garment exactly in half down the center vertical axis. If the left shoulder seam does not perfectly align with the right shoulder seam, the garment was cut off-grain during the laser cutting phase. An off-grain garment will twist heavily after its first wash. It is instantly rejected.',
            },
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'Checkpoint 04: The Destructive Testing Lab',
          image: '/images/services/manufacturing-excellence.webp',
          intro:
            'Visual checks are not enough for high-performance apparel. Certain fabrics and hardware require brutal, physical stress testing — meaning we actually try to destroy the sample garment to see where its breaking point lies.',
          criteria: [
            {
              title: 'Hardware Pull-Tests',
              description:
                'We do not just look at the zippers to see if they zip. Inspectors perform physical pneumatic pull-tests on all YKK hardware, snap buttons, and drawstrings. The machine pulls the hardware until it breaks to ensure it will not detach when an end-consumer violently yanks on it.',
            },
            {
              title: 'Crocking Tests',
              description:
                'We must verify the chemical stability of the fabric dye. We perform “crocking” tests by taking a swatch of your dyed fabric and violently rubbing it against a piece of pure white cotton, under both wet and dry conditions. If the dye bleeds onto the white cotton, the chemical fixation failed at the dye house, and the fabric is rejected.',
            },
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'Checkpoint 05: Metal Detection and Zero-Tolerance Safety Protocols',
          image: '/images/process/production.webp',
          tone: 'cream',
          intro:
            'During the rapid pace of an industrial sewing line, needles frequently snap. A broken needle tip can easily become embedded inside a heavy denim seam or hidden under a pocket fold. If a consumer finds a needle in their garment, the liability to your brand is catastrophic.',
          body: [
            'Before any shipping carton leaves our facility, we pass every single sealed polybag through an industrial conveyor needle detector. If a microscopic shard of metal is trapped inside the garment, the machine halts and sounds an alarm, ensuring 100% safety compliance.',
          ],
          ctaLabel: 'Make An Enquiry',
        },
        {
          title: 'Checkpoint 06: Packaging Compliance and Freight Discrepancy Checks',
          image: '/images/services/global-export.webp',
          intro:
            'Your logistics provider (Amazon FBA or your 3PL warehouse) will penalize you heavily if your shipping boxes are labeled incorrectly or if the carton weights do not match the shipping manifest.',
          body: [
            'Our final factory garment inspection process extends beyond the clothes themselves into the actual logistics. We scan the UPC barcodes on your polybags to ensure they read correctly into retail systems.',
            'We then weigh the master shipping cartons against the theoretical weight calculated in your tech pack. If a box is supposed to hold 50 shirts and weigh exactly 25 lbs, but the scale reads 22 lbs, the inspector knows immediately that the box is missing garments. The carton is opened, recounted, and corrected before it ever leaves our loading dock.',
          ],
          ctaLabel: 'Make An Enquiry',
        },
      ],
      faqTitle: 'Technical Auditing FAQ',
      finalCta: {
        title: 'Secure Your Production Run',
        body: [
          'Do not accept a 10% defect rate as “the cost of doing business overseas.” You are losing thousands of dollars to poor tension, skipped stitches, and off-grain cutting.',
          'Our apparel quality control services provide the strict statistical mathematics, the in-line auditing, and the brutal hardware stress tests required to ensure your inventory is completely flawless the moment you open the box.',
        ],
        primaryLabel: 'Request a Production Quote',
        secondaryLabel: 'Speak with a Quality Control Engineer',
      },
    },
  },
]

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)
