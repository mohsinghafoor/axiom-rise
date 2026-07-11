"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { label: t("aboutStatsRnD"), value: "10+" },
    { label: t("aboutStatsCapacity"), value: "50k+" },
    { label: t("aboutStatsLeadTime"), value: "7–20 days" },
    { label: t("aboutStatsCountries"), value: "20+" }
  ]

  const values = [
    {
      title: t("aboutValue1Title"),
      description: t("aboutValue1Desc")
    },
    {
      title: t("aboutValue2Title"),
      description: t("aboutValue2Desc")
    },
    {
      title: t("aboutValue3Title"),
      description: t("aboutValue3Desc")
    }
  ]

  const services = [
    {
      title: t("aboutService1Title"),
      description: t("aboutService1Desc")
    },
    {
      title: t("aboutService2Title"),
      description: t("aboutService2Desc")
    },
    {
      title: t("aboutService3Title"),
      description: t("aboutService3Desc")
    }
  ]

  const capabilities = [
    t("aboutCapability1"),
    t("aboutCapability2"),
    t("aboutCapability3"),
    t("aboutCapability4"),
    t("aboutCapability5")
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-primary-200 text-sm font-semibold mb-4">
                {t("aboutHeroBadge")}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t("aboutHeroTitle")}
              </h1>
              <p className="text-lg text-primary-100 mb-8">
                {t("aboutHeroDesc")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-primary-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/hero/hoodies.webp"
                  alt={t("aboutHeroImageAlt")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary-700 rounded-xl p-5 shadow-xl max-w-xs">
                <p className="text-sm font-semibold">{t("aboutHeroCardTitle")}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {t("aboutHeroCardDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t("aboutStoryTitle")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("aboutStoryP1")}
              </p>
              <p className="text-lg text-gray-600">
                {t("aboutStoryP2")}
              </p>
              <p className="text-lg text-gray-600">
                {t("aboutStoryP3")}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/hero/tshirt.webp"
                  alt={t("aboutStoryImageAlt")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                <p className="text-sm font-semibold text-gray-900">{t("aboutStoryCardTitle")}</p>
                <p className="text-sm text-gray-600">{t("aboutStoryCardDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t("aboutValuesTitle")}</h2>
            <p className="text-lg text-gray-600 mt-3">
              {t("aboutValuesDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t("aboutCapabilitiesTitle")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("aboutCapabilitiesDesc")}
              </p>
              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-600"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "/images/process/planning.webp",
                  alt: t("aboutCapabilitiesImageAlt1")
                },
                {
                  src: "/images/process/sample.webp",
                  alt: t("aboutCapabilitiesImageAlt2")
                },
                {
                  src: "/images/process/production.webp",
                  alt: t("aboutCapabilitiesImageAlt3")
                },
                {
                  src: "/images/process/delivery.webp",
                  alt: t("aboutCapabilitiesImageAlt4")
                }
              ].map((image) => (
                <div key={image.src} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t("aboutServicesTitle")}</h2>
            <p className="text-lg text-gray-600 mt-3">
              {t("aboutServicesDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary-100 bg-primary-50">
                <Image
                  src="/images/services/quality-assurance.webp"
                  alt={t("aboutSustainabilityImageAlt")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <p className="text-sm font-semibold text-gray-900">{t("aboutSustainabilityCardTitle")}</p>
                <p className="text-sm text-gray-600">{t("aboutSustainabilityCardDesc")}</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t("aboutSustainabilityTitle")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("aboutSustainabilityP1")}
              </p>
              <p className="text-lg text-gray-600">
                {t("aboutSustainabilityP2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">{t("aboutCTAHeading")}</h2>
              <p className="text-primary-100 mt-2">
                {t("aboutCTADesc")}
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-primary-700 font-semibold shadow-lg hover:bg-primary-50 transition"
            >
              {t("aboutCTAButton")}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}