export default function Services() {
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
      icon: "factory"
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
      icon: "design"
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
      icon: "shipping"
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
      icon: "quality"
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
      icon: "label"
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
      icon: "supply"
    }
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality standards"
    },
    {
      name: "OEKO-TEX Standard 100",
      description: "Textile certification for human and environmental safety"
    },
    {
      name: "GOTS Certified",
      description: "Global Organic Textile Standard for organic fiber processing"
    },
    {
      name: "BSCI Compliance",
      description: "Business Social Compliance Initiative for ethical manufacturing"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial discussion to understand your requirements and specifications"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Create detailed designs and production timeline based on your needs"
    },
    {
      step: "03",
      title: "Sample Development",
      description: "Develop and refine samples until they meet your exact requirements"
    },
    {
      step: "04",
      title: "Production",
      description: "Begin full-scale production with continuous quality monitoring"
    },
    {
      step: "05",
      title: "Quality Control",
      description: "Comprehensive quality checks before packaging and shipping"
    },
    {
      step: "06",
      title: "Delivery",
      description: "Secure packaging and timely delivery to your specified destination"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive clothing export solutions designed to meet your specific business needs 
              and deliver exceptional results every time
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined approach ensuring quality and efficiency at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600">
              Industry-recognized certifications ensuring quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact our team today to discuss your project requirements and discover how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}