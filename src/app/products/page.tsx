export default function Products() {
  const productCategories = [
    {
      title: "Formal Wear",
      items: [
        { name: "Business Suits", description: "Professional tailored suits for corporate environments", features: ["Premium fabrics", "Custom tailoring", "Multiple colors"] },
        { name: "Dress Shirts", description: "Crisp, professional shirts for business attire", features: ["Cotton blend", "Wrinkle-resistant", "Classic cuts"] },
        { name: "Formal Dresses", description: "Elegant dresses for professional and formal occasions", features: ["Quality materials", "Modern designs", "Various sizes"] }
      ]
    },
    {
      title: "Casual Wear",
      items: [
        { name: "T-Shirts", description: "Comfortable everyday wear in various styles", features: ["100% cotton", "Pre-shrunk", "Colorfast"] },
        { name: "Jeans & Trousers", description: "Durable and stylish bottoms for casual occasions", features: ["Premium denim", "Multiple fits", "Fade-resistant"] },
        { name: "Casual Shirts", description: "Relaxed fit shirts for everyday comfort", features: ["Breathable fabric", "Easy care", "Versatile styles"] }
      ]
    },
    {
      title: "Sportswear",
      items: [
        { name: "Athletic Wear", description: "Performance clothing for sports and fitness", features: ["Moisture-wicking", "Flexible fit", "Durable construction"] },
        { name: "Activewear", description: "Comfortable clothing for active lifestyles", features: ["Stretchable fabric", "Quick-dry", "Odor-resistant"] },
        { name: "Sports Uniforms", description: "Professional uniforms for teams and organizations", features: ["Custom designs", "Team colors", "Durable materials"] }
      ]
    },
    {
      title: "Kids Clothing",
      items: [
        { name: "School Uniforms", description: "Comfortable and durable uniforms for students", features: ["Easy maintenance", "Growth-friendly", "School compliant"] },
        { name: "Casual Kids Wear", description: "Fun and comfortable clothing for children", features: ["Soft materials", "Playful designs", "Safety first"] },
        { name: "Baby Clothing", description: "Gentle and safe clothing for infants", features: ["Organic cotton", "Hypoallergenic", "Easy dressing"] }
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality clothing designed for global markets. 
              From formal wear to casual attire, we deliver excellence in every thread.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Product Image Placeholder */}
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Product Image</p>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product undergoes rigorous quality control to ensure it meets international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Material Testing", description: "Advanced testing for fabric quality and durability" },
              { title: "Size Verification", description: "Precise measurements to ensure perfect fit" },
              { title: "Color Consistency", description: "Strict color matching across all batches" },
              { title: "Final Inspection", description: "Comprehensive quality check before shipping" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a customized quote
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Request Catalog
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}