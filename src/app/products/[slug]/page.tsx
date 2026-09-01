

"use client";

import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductPageProps {
  params: { slug: string };
}

interface Product {
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
  slug: string;
  gallery?: string[];
  heroImage?: string;
  introTitle?: Record<string, string>;
  introBody?: Record<string, string>;
  whatWeDo?: Record<string, { title: string; description: string }[]>;
  ctaBlock?: Record<string, { title: string; body: string }>;
  whyChoose?: Record<string, { title: string; description: string; icon?: string }[]>;
  solutionHighlights?: Record<string, { icon: string; title: string; description: string }[]>;
  materials?: Record<string, string[]>;
  constructionDetails?: Record<string, string[]>;
  customizationOptions?: Record<string, string[]>;
  moq?: string;
  leadTime?: string;
  certifications?: string[];
  fitAndSizing?: Record<string, string>;
  careInstructions?: Record<string, string>;
  faq?: Partial<Record<string, { question: string; answer: string }[]>>;
  relatedProductSlugs?: string[];
  orderSteps?: Record<string, { title: string; description: string }[]>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { language, t } = useLanguage();
  const product = productsData.find((p: Product) => p.slug === params.slug);
  if (!product) return notFound();

  const localizedTitle = product.title[language] || product.title.en;
  const localizedDescription = product.description[language] || product.description.en;

  const productLabel = localizedTitle
    .replace(/\bMANUFACTURERS?\b/gi, '')
    .replace(/\bWHOLESALE\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  const defaultGallery = [
    product.image,
    "/images/hero/hoodies.webp",
    "/images/hero/varsity-jacket.webp",
    "/images/hero/sports-wear.webp",
    "/images/hero/tshirt.webp",
    "/images/hero/fitness.webp"
  ].filter(Boolean);

  const gallery = (product.gallery && product.gallery.length > 0) ? product.gallery : defaultGallery;

  const defaultContent = {
    en: {
      introTitle: `High Quality Custom ${productLabel || localizedTitle}`,
      introBody: `We manufacture ${productLabel || localizedTitle.toLowerCase()} with reliable quality, modern production, and flexible customization for brands of every size.`,
      whatWeDo: [
        { title: "Consistent Quality", description: "Quality checks at every stage to meet your standards." },
        { title: "Custom Options", description: "Materials, colors, trims, and branding tailored to your needs." },
        { title: "Scalable Production", description: "From small batches to large runs with dependable timelines." }
      ],
      whyChoose: [
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/superior-quality.svg",
          title: "Premium Quality",
          description: "Crafted with attention to detail and durable finishes."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/affordably-priced.svg",
          title: "Competitive Pricing",
          description: "Great value without compromising quality."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/rapid-turnaround.svg",
          title: "Reliable Delivery",
          description: "Streamlined timelines for predictable launches."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/sustainable.svg",
          title: "Responsible Options",
          description: "Sustainable materials and mindful production choices."
        }
      ],
      solutionHighlights: [
        { icon: "🎨", title: "Flexible Styles", description: "Options across fits and finishes" },
        { icon: "🧵", title: "Custom Branding", description: "Labels, trims, and packaging" },
        { icon: "⚙️", title: "Efficient Process", description: "Sampling to bulk production" },
        { icon: "🚚", title: "Dependable Delivery", description: "Clear timelines and shipping" }
      ],
      orderSteps: [
        { title: "Share Requirements", description: "Send your style, quantity, and branding needs." },
        { title: "Confirm Details", description: "Finalize fabrics, colors, and trims." },
        { title: "Review Sample", description: "Approve a prototype before production." },
        { title: "Bulk Production", description: "Manufacturing with quality checks." },
        { title: "Delivery", description: "Secure packing and shipment." }
      ],
      faq: [
        {
          question: "Can you support custom designs?",
          answer: "Yes, we offer private labeling, custom trims, and flexible design options."
        },
        {
          question: "What is the typical lead time?",
          answer: "Lead times vary by complexity, but we prioritize fast, reliable delivery."
        },
        {
          question: "Do you accept small orders?",
          answer: "We offer flexible MOQs to support new and growing brands."
        }
      ],
      ctaBlock: {
        title: `Start Your ${productLabel || localizedTitle} Project`,
        body: "Share your requirements and we’ll guide you from sampling to delivery."
      }
    },
    de: {
      introTitle: `Hochwertige Maßanfertigung für ${productLabel || localizedTitle}`,
      introBody: `Wir fertigen ${productLabel || localizedTitle.toLowerCase()} mit zuverlässiger Qualität, moderner Produktion und flexibler Anpassung für Marken jeder Größe.`,
      whatWeDo: [
        { title: "Konstante Qualität", description: "Qualitätsprüfungen in jeder Phase nach Ihren Standards." },
        { title: "Individuelle Optionen", description: "Materialien, Farben, Details und Branding nach Bedarf." },
        { title: "Skalierbare Produktion", description: "Von kleinen Chargen bis zu großen Serien mit klaren Zeitplänen." }
      ],
      whyChoose: [
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/superior-quality.svg",
          title: "Premium‑Qualität",
          description: "Sorgfältige Verarbeitung und langlebige Finishes."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/affordably-priced.svg",
          title: "Wettbewerbsfähige Preise",
          description: "Hoher Gegenwert ohne Qualitätskompromisse."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/rapid-turnaround.svg",
          title: "Zuverlässige Lieferung",
          description: "Planbare Zeitpläne für Ihre Launches."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/sustainable.svg",
          title: "Verantwortungsvolle Optionen",
          description: "Nachhaltige Materialien und bewusste Produktion."
        }
      ],
      solutionHighlights: [
        { icon: "🎨", title: "Flexible Styles", description: "Optionen für Passformen und Finishes" },
        { icon: "🧵", title: "Custom Branding", description: "Labels, Details und Verpackung" },
        { icon: "⚙️", title: "Effizienter Prozess", description: "Sampling bis Serienproduktion" },
        { icon: "🚚", title: "Zuverlässige Lieferung", description: "Klare Zeitpläne und Versand" }
      ],
      orderSteps: [
        { title: "Anforderungen teilen", description: "Stil, Menge und Branding mitteilen." },
        { title: "Details bestätigen", description: "Stoffe, Farben und Details finalisieren." },
        { title: "Muster prüfen", description: "Prototyp vor Produktion freigeben." },
        { title: "Serienproduktion", description: "Fertigung mit Qualitätsprüfungen." },
        { title: "Lieferung", description: "Sichere Verpackung und Versand." }
      ],
      faq: [
        {
          question: "Unterstützen Sie individuelle Designs?",
          answer: "Ja, wir bieten Private Label, individuelle Details und flexible Designoptionen."
        },
        {
          question: "Wie lang ist die typische Lieferzeit?",
          answer: "Die Zeiten variieren je nach Komplexität, wir priorisieren schnelle und zuverlässige Lieferung."
        },
        {
          question: "Akzeptieren Sie kleine Bestellungen?",
          answer: "Wir bieten flexible MOQs für neue und wachsende Marken."
        }
      ],
      ctaBlock: {
        title: `Starten Sie Ihr ${productLabel || localizedTitle}‑Projekt`,
        body: "Teilen Sie Ihre Anforderungen, wir begleiten Sie von Sampling bis Lieferung."
      }
    },
    es: {
      introTitle: `Fabricación personalizada de ${productLabel || localizedTitle}`,
      introBody: `Fabricamos ${productLabel || localizedTitle.toLowerCase()} con calidad confiable, producción moderna y personalización flexible para marcas de cualquier tamaño.`,
      whatWeDo: [
        { title: "Calidad constante", description: "Controles en cada etapa para cumplir sus estándares." },
        { title: "Opciones personalizadas", description: "Materiales, colores, detalles y branding a medida." },
        { title: "Producción escalable", description: "De lotes pequeños a grandes series con plazos claros." }
      ],
      whyChoose: [
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/superior-quality.svg",
          title: "Calidad premium",
          description: "Acabados duraderos y atención al detalle."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/affordably-priced.svg",
          title: "Precios competitivos",
          description: "Gran valor sin comprometer la calidad."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/rapid-turnaround.svg",
          title: "Entrega confiable",
          description: "Plazos consistentes para sus lanzamientos."
        },
        {
          icon: "https://appareify.com/cdn/public/images/iconImg/sustainable.svg",
          title: "Opciones responsables",
          description: "Materiales sostenibles y producción consciente."
        }
      ],
      solutionHighlights: [
        { icon: "🎨", title: "Estilos flexibles", description: "Opciones de cortes y acabados" },
        { icon: "🧵", title: "Branding personalizado", description: "Etiquetas, detalles y empaque" },
        { icon: "⚙️", title: "Proceso eficiente", description: "Del muestreo a la producción" },
        { icon: "🚚", title: "Entrega confiable", description: "Plazos claros y envío" }
      ],
      orderSteps: [
        { title: "Compartir requisitos", description: "Envíe estilo, cantidad y branding." },
        { title: "Confirmar detalles", description: "Finalizar telas, colores y detalles." },
        { title: "Revisar muestra", description: "Aprobar prototipo antes de producir." },
        { title: "Producción en volumen", description: "Fabricación con controles de calidad." },
        { title: "Entrega", description: "Empaque seguro y envío." }
      ],
      faq: [
        {
          question: "¿Pueden apoyar diseños personalizados?",
          answer: "Sí, ofrecemos marca privada, detalles personalizados y opciones de diseño flexibles."
        },
        {
          question: "¿Cuál es el plazo típico?",
          answer: "Los plazos varían según la complejidad, pero priorizamos entregas rápidas y confiables."
        },
        {
          question: "¿Aceptan pedidos pequeños?",
          answer: "Ofrecemos MOQs flexibles para marcas nuevas y en crecimiento."
        }
      ],
      ctaBlock: {
        title: `Inicie su proyecto de ${productLabel || localizedTitle}`,
        body: "Comparta sus requisitos y le guiaremos desde el muestreo hasta la entrega."
      }
    }
  };

  const defaults = defaultContent[language] || defaultContent.en;

  const introTitle = product.introTitle?.[language] || product.introTitle?.en || defaults.introTitle;
  const introBody = product.introBody?.[language] || product.introBody?.en || defaults.introBody;
  const whatWeDo = product.whatWeDo?.[language]?.length ? product.whatWeDo[language] : (product.whatWeDo?.en?.length ? product.whatWeDo.en : defaults.whatWeDo);
  const whyChoose = product.whyChoose?.[language]?.length ? product.whyChoose[language] : (product.whyChoose?.en?.length ? product.whyChoose.en : defaults.whyChoose);
  const solutionHighlights = product.solutionHighlights?.[language]?.length
    ? product.solutionHighlights[language]
    : (product.solutionHighlights?.en?.length ? product.solutionHighlights.en : defaults.solutionHighlights);
  const orderSteps = product.orderSteps?.[language]?.length ? product.orderSteps[language] : (product.orderSteps?.en?.length ? product.orderSteps.en : defaults.orderSteps);
  const faq = product.faq?.[language]?.length ? product.faq[language] : (product.faq?.en?.length ? product.faq.en : defaults.faq);
  const ctaBlock = product.ctaBlock?.[language] || product.ctaBlock?.en || defaults.ctaBlock;

  const relatedProducts = product.relatedProductSlugs
    ? productsData.filter((p: Product) => product.relatedProductSlugs?.includes(p.slug))
    : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 sm:py-24 overflow-hidden bg-center bg-cover"
        style={{
          backgroundImage: `url(${product.heroImage || gallery[0]})`
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="text-white/80 text-sm mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white">{t('home')}</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">{t('products')}</Link>
            <span>/</span>
            <span className="text-white">{localizedTitle}</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {localizedTitle}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              {introBody}
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Intro Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl py-6 px-3 sm:p-8 lg:p-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {introTitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {introBody}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We provide full-service support from design and sampling to bulk manufacturing and delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={gallery[2] || gallery[0]}
                alt={`${localizedTitle} preview 1`}
                className="w-full h-40 object-cover rounded-2xl"
              />
              <img
                src={gallery[3] || gallery[1] || gallery[0]}
                alt={`${localizedTitle} preview 2`}
                className="w-full h-40 object-cover rounded-2xl"
              />
              <img
                src={gallery[4] || gallery[0]}
                alt={`${localizedTitle} preview 3`}
                className="w-full h-40 object-cover rounded-2xl"
              />
              <img
                src={gallery[5] || gallery[1] || gallery[0]}
                alt={`${localizedTitle} preview 4`}
                className="w-full h-40 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* What We Do */}
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-gray-50 dark:bg-gray-900/40 rounded-2xl py-6 px-3 sm:p-8 lg:p-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {`What We Do to Create High-Quality ${productLabel || product.title.en}`}
              </h2>
              <div className="space-y-4">
                {whatWeDo.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={gallery[1] || gallery[0]}
                alt={`${localizedTitle} production`}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl py-6 px-3 sm:p-8 lg:p-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{ctaBlock.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{ctaBlock.body}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                Inquire Now
              </Link>
            </div>
            <div>
              <img
                src={gallery[0]}
                alt={`${localizedTitle} inquiry`}
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-gray-50 dark:bg-gray-900/40 rounded-2xl py-6 px-3 sm:p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {`${t('productWhyChoosePrefix')} ${productLabel || localizedTitle}`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/70 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  {item.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                      <img src={item.icon} alt={item.title} className="w-7 h-7" />
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ultimate Solution */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl py-6 px-3 sm:p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {`${t('productUltimateSolutionPrefix')} ${productLabel || localizedTitle}`}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {solutionHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 flex gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Steps */}
          <div className="bg-gray-50 dark:bg-gray-900/40 rounded-2xl py-6 px-3 sm:p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {`${t('productOrderStepsPrefix')} ${productLabel || localizedTitle}`}
            </h2>
            <div className="flex flex-wrap items-stretch gap-6">
              {orderSteps.map((step, index) => (
                <div key={step.title} className="flex items-center w-full sm:w-auto">
                  <div className="bg-white/90 dark:bg-gray-900/60 rounded-2xl p-6 shadow-sm border border-gray-200/70 dark:border-gray-700 hover:shadow-md transition-shadow w-full sm:w-80">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 flex items-center justify-center text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 leading-relaxed">{step.description}</p>
                  </div>
                  {index < orderSteps.length - 1 && (
                    <div className="hidden lg:flex items-center mx-3 text-primary-500">
                      <span className="text-2xl">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-900/40 rounded-2xl py-6 px-3 sm:p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">FAQ</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <details key={item.question} className="bg-white dark:bg-gray-800 rounded-2xl p-4">
                  <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl py-6 px-3 sm:p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((item: Product) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                  >
                    <img src={item.image} alt={item.title[language] || item.title.en} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">
                        {item.title[language] || item.title.en}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {item.description[language] || item.description.en}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Contact us today to discuss your custom {(productLabel || localizedTitle).toLowerCase()} requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
                >
                  Contact Us Now
                </Link>
                <Link
                  href={`tel:+1234567890`}
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-all hover:scale-105"
                >
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
