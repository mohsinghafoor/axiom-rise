import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      title: "Manufacturing Excellence",
      description: "State-of-the-art manufacturing facilities equipped with modern machinery and skilled workforce",
      features: [
        "Advanced cutting and sewing equipment",
        "Quality control at every stage",
        "Skilled craftsmen and technicians",
        "Flexible production capacity"
      ],
      image: "/images/services/manufacturing-excellence.webp"
    },
    {
      title: "Custom Design & Development",
      description: "Transform your ideas into reality with our comprehensive design and development services",
      features: [
        "Pattern making and grading",
        "Sample development",
        "Design consultation",
        "Trend analysis and forecasting"
      ],
      image: "/images/services/custom-design.webp"
    },
    {
      title: "Global Export Services",
      description: "Seamless export solutions to deliver your products anywhere in the world",
      features: [
        "International shipping coordination",
        "Customs clearance assistance",
        "Documentation support",
        "Tracking and logistics management"
      ],
      image: "/images/services/global-export.webp"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive quality control processes ensuring products meet international standards",
      features: [
        "Pre-production quality planning",
        "In-line quality monitoring",
        "Final inspection protocols",
        "Compliance certifications"
      ],
      image: "/images/services/quality-assurance.webp"
    },
    {
      title: "Private Label Solutions",
      description: "Complete private label services from concept to delivery",
      features: [
        "Brand development support",
        "Custom packaging design",
        "Label and tag production",
        "Exclusive product lines"
      ],
      image: "/images/services/private-label.webp"
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions for maximum efficiency and cost-effectiveness",
      features: [
        "Raw material sourcing",
        "Inventory management",
        "Production planning",
        "Delivery scheduling"
      ],
      image: "/images/services/supply-chain.webp"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden  bg-gradient-to-br from-blue-50 via-blue-50/50 to-white" style={{ boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.04)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600">
            From manufacturing to global delivery, we provide end-to-end solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
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
