'use client';

import Image from "next/image";
import { useLanguage } from '../../contexts/LanguageContext';

export default function ServicesGrid() {
  const { t } = useLanguage();
  const services = [
    {
      titleKey: "servicesManufacturingTitle",
      descriptionKey: "servicesManufacturingDesc",
      features: [
        "servicesManufacturingFeature1",
        "servicesManufacturingFeature2",
        "servicesManufacturingFeature3",
        "servicesManufacturingFeature4"
      ],
      image: "/images/services/manufacturing-excellence.webp"
    },
    {
      titleKey: "servicesCustomDesignTitle",
      descriptionKey: "servicesCustomDesignDesc",
      features: [
        "servicesCustomDesignFeature1",
        "servicesCustomDesignFeature2",
        "servicesCustomDesignFeature3",
        "servicesCustomDesignFeature4"
      ],
      image: "/images/services/custom-design.webp"
    },
    {
      titleKey: "servicesGlobalExportTitle",
      descriptionKey: "servicesGlobalExportDesc",
      features: [
        "servicesGlobalExportFeature1",
        "servicesGlobalExportFeature2",
        "servicesGlobalExportFeature3",
        "servicesGlobalExportFeature4"
      ],
      image: "/images/services/global-export.webp"
    },
    {
      titleKey: "servicesQualityTitle",
      descriptionKey: "servicesQualityDesc",
      features: [
        "servicesQualityFeature1",
        "servicesQualityFeature2",
        "servicesQualityFeature3",
        "servicesQualityFeature4"
      ],
      image: "/images/services/quality-assurance.webp"
    },
    {
      titleKey: "servicesPrivateLabelTitle",
      descriptionKey: "servicesPrivateLabelDesc",
      features: [
        "servicesPrivateLabelFeature1",
        "servicesPrivateLabelFeature2",
        "servicesPrivateLabelFeature3",
        "servicesPrivateLabelFeature4"
      ],
      image: "/images/services/private-label.webp"
    },
    {
      titleKey: "servicesSupplyChainTitle",
      descriptionKey: "servicesSupplyChainDesc",
      features: [
        "servicesSupplyChainFeature1",
        "servicesSupplyChainFeature2",
        "servicesSupplyChainFeature3",
        "servicesSupplyChainFeature4"
      ],
      image: "/images/services/supply-chain.webp"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('servicesGridTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('servicesGridDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-gray-700">
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50 dark:from-gray-700 dark:to-gray-800">
                <Image 
                  src={service.image}
                  alt={t(service.titleKey)}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t(service.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{t(service.descriptionKey)}</p>
                <ul className="space-y-2">
                  {service.features.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
