"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'de' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    home: 'HOME',
    products: 'PRODUCTS',
    services: 'SERVICES',
    clients: 'CLIENTS',
    blog: 'BLOG',
    about: 'ABOUT US',
    contact: 'CONTACT',
    talkToExpert: 'CONTACT US',
    manufacturingBadge: 'Your Manufacturing Partner',
    manufacturingTitleStart: 'Are You Seeking a Trusted Partner in the Garment Industry for Your',
    manufacturingTitleHighlight: 'Perfect Clothing Manufacturing?',
    manufacturingDesc1Start: 'With countless garment producers in the market, finding the right partner can be overwhelming and exhausting.',
    manufacturingDesc1Highlight: 'But your search ends here!',
    manufacturingDesc1End: 'As one of the most reputable and established clothing manufacturing companies, we provide comprehensive solutions for all your garment production requirements.',
    manufacturingDesc2: 'As a pioneer of innovative fashion, we pride ourselves on being your ultimate manufacturing partner, ensuring your brand distinguishes itself in today\'s competitive marketplace through our premium garment manufacturing services. As a leading clothing manufacturer and exporter, we excel in delivering products that not only meet international quality standards but surpass expectations, guaranteeing your brand receives nothing less than exceptional excellence.',
    getQuote: 'GET A QUOTE',
    yearsExperience: 'Years Experience',
    countriesServed: 'Countries Served',
    customBadge: 'Custom Solutions',
    customTitleStart: 'Custom Clothing Manufacturers in Pakistan,',
    customTitleHighlight: 'Manufacturing Exclusive Clothing',
    customDesc1: 'If you are searching for a custom clothing manufacturer in Pakistan that can fulfill all your unique requirements? Your search ends here at Rijiz, where we deliver an extensive range of custom clothing solutions to transform your vision into reality. Unlike other bespoke apparel manufacturers, we provide complete custom clothing manufacturing services with limitless customization possibilities.',
    customDesc2Start: 'At Rijiz, we take pride in producing premium-quality clothing that aligns with your exact specifications. From screen printing and embroidery to digital printing,',
    customDesc2Link: 'private label clothing manufacturing',
    customDesc2End: ', cut and sew clothing production, and custom designing, we present a comprehensive array of customization services that are unparalleled in the industry.',
    customDesigns: 'Custom Designs',
    supportAvailable: 'Support Available'
  },
  de: {
    home: 'STARTSEITE',
    products: 'PRODUKTE',
    services: 'DIENSTLEISTUNGEN',
    clients: 'KUNDEN',
    blog: 'BLOG',
    about: 'ÜBER UNS',
    contact: 'KONTAKT',
    talkToExpert: 'KONTAKTIEREN SIE UNS',
    manufacturingBadge: 'Ihr Fertigungspartner',
    manufacturingTitleStart: 'Suchen Sie einen vertrauenswürdigen Partner in der Bekleidungsindustrie für Ihre',
    manufacturingTitleHighlight: 'perfekte Bekleidungsfertigung?',
    manufacturingDesc1Start: 'Mit unzähligen Bekleidungsproduzenten auf dem Markt kann die Suche nach dem richtigen Partner überwältigend und erschöpfend sein.',
    manufacturingDesc1Highlight: 'Aber Ihre Suche endet hier!',
    manufacturingDesc1End: 'Als eines der angesehensten und etabliertesten Bekleidungsfertigungsunternehmen bieten wir umfassende Lösungen für alle Ihre Bekleidungsproduktionsanforderungen.',
    manufacturingDesc2: 'Als Pionier innovativer Mode sind wir stolz darauf, Ihr ultimative Fertigungspartner zu sein und sicherzustellen, dass sich Ihre Marke auf dem heutigen wettbewerbsintensiven Markt durch unsere Premium-Bekleidungsfertigungsdienste auszeichnet. Als führender Bekleidungshersteller und Exporteur zeichnen wir uns durch die Lieferung von Produkten aus, die nicht nur internationale Qualitätsstandards erfüllen, sondern Erwartungen übertreffen und garantieren, dass Ihre Marke nichts weniger als außergewöhnliche Exzellenz erhält.',
    getQuote: 'ANGEBOT EINHOLEN',
    yearsExperience: 'Jahre Erfahrung',
    countriesServed: 'Bediente Länder',
    customBadge: 'Maßgeschneiderte Lösungen',
    customTitleStart: 'Maßgeschneiderte Bekleidungshersteller in Pakistan,',
    customTitleHighlight: 'Exklusive Bekleidung Herstellen',
    customDesc1: 'Wenn Sie nach einem maßgeschneiderten Bekleidungshersteller in Pakistan suchen, der alle Ihre einzigartigen Anforderungen erfüllen kann? Ihre Suche endet hier bei Rijiz, wo wir eine umfangreiche Palette maßgeschneiderter Bekleidungslösungen liefern, um Ihre Vision in die Realität umzusetzen. Im Gegensatz zu anderen Maßschneidern für Bekleidung bieten wir vollständige maßgeschneiderte Bekleidungsfertigungsdienste mit grenzenlosen Anpassungsmöglichkeiten.',
    customDesc2Start: 'Bei Rijiz sind wir stolz darauf, hochwertige Bekleidung zu produzieren, die genau Ihren Spezifikationen entspricht. Von Siebdruck und Stickerei bis hin zu Digitaldruck,',
    customDesc2Link: 'Private-Label-Bekleidungsfertigung',
    customDesc2End: ', Schneide- und Näh-Bekleidungsproduktion und maßgeschneidertem Design bieten wir eine umfassende Palette von Anpassungsdiensten, die in der Branche unübertroffen sind.',
    customDesigns: 'Maßgeschneiderte Designs',
    supportAvailable: 'Support Verfügbar'
  },
  es: {
    home: 'INICIO',
    products: 'PRODUCTOS',
    services: 'SERVICIOS',
    clients: 'CLIENTES',
    blog: 'BLOG',
    about: 'SOBRE NOSOTROS',
    contact: 'CONTACTO',
    talkToExpert: 'CONTÁCTENOS',
    manufacturingBadge: 'Su Socio de Manufactura',
    manufacturingTitleStart: '¿Está Buscando un Socio de Confianza en la Industria de la Ropa para Su',
    manufacturingTitleHighlight: 'Manufactura Perfecta de Ropa?',
    manufacturingDesc1Start: 'Con innumerables productores de ropa en el mercado, encontrar el socio adecuado puede ser abrumador y agotador.',
    manufacturingDesc1Highlight: '¡Pero su búsqueda termina aquí!',
    manufacturingDesc1End: 'Como una de las compañías de manufactura de ropa más reputadas y establecidas, proporcionamos soluciones integrales para todos sus requisitos de producción de ropa.',
    manufacturingDesc2: 'Como pionero de la moda innovadora, nos enorgullecemos de ser su socio de manufactura definitivo, asegurando que su marca se distinga en el mercado competitivo actual a través de nuestros servicios premium de manufactura de ropa. Como fabricante y exportador líder de ropa, sobresalimos en la entrega de productos que no solo cumplen con los estándares de calidad internacionales, sino que superan las expectativas, garantizando que su marca reciba nada menos que excelencia excepcional.',
    getQuote: 'OBTENER PRESUPUESTO',
    yearsExperience: 'Años de Experiencia',
    countriesServed: 'Países Atendidos',
    customBadge: 'Soluciones Personalizadas',
    customTitleStart: 'Fabricantes de Ropa Personalizada en Pakistán,',
    customTitleHighlight: 'Fabricando Ropa Exclusiva',
    customDesc1: '¿Está buscando un fabricante de ropa personalizada en Pakistán que pueda satisfacer todas sus necesidades únicas? Su búsqueda termina aquí en Rijiz, donde entregamos una amplia gama de soluciones de ropa personalizada para transformar su visión en realidad. A diferencia de otros fabricantes de ropa a medida, proporcionamos servicios completos de manufactura de ropa personalizada con posibilidades de personalización ilimitadas.',
    customDesc2Start: 'En Rijiz, nos enorgullecemos de producir ropa de calidad premium que se alinea con sus especificaciones exactas. Desde serigrafía y bordado hasta impresión digital,',
    customDesc2Link: 'manufactura de ropa de marca privada',
    customDesc2End: ', producción de ropa cortada y cosida, y diseño personalizado, presentamos una amplia gama de servicios de personalización que son incomparables en la industria.',
    customDesigns: 'Diseños Personalizados',
    supportAvailable: 'Soporte Disponible'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'de', 'es'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}