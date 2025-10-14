export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      experience: "15+ years in textile industry",
      description: "Visionary leader with extensive experience in global textile markets"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      experience: "12+ years in manufacturing",
      description: "Expert in streamlining production processes and quality control"
    },
    {
      name: "Emily Rodriguez",
      role: "Export Manager",
      experience: "10+ years in international trade",
      description: "Specialist in global logistics and international compliance"
    },
    {
      name: "David Kumar",
      role: "Design Director",
      experience: "8+ years in fashion design",
      description: "Creative professional with expertise in contemporary and traditional designs"
    }
  ]

  const milestones = [
    { year: "2009", event: "Company founded with a vision to revolutionize clothing exports" },
    { year: "2012", event: "Expanded operations to serve 10+ countries" },
    { year: "2015", event: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2018", event: "Opened second manufacturing facility" },
    { year: "2020", event: "Reached milestone of 50+ countries served" },
    { year: "2024", event: "Celebrating 15 years of excellence in clothing exports" }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              About Axiom Rise
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Pioneering excellence in clothing exports for over 15 years, connecting quality craftsmanship with global markets
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, Axiom Rise began as a small textile company with a big dream: 
                to create high-quality clothing that would represent the best of craftsmanship 
                to markets around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have grown from a local manufacturer to a globally recognized 
                export company, serving clients in over 50 countries. Our success is built on 
                three fundamental pillars: uncompromising quality, innovative design, and 
                exceptional customer service.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push boundaries in the textile industry, combining 
                traditional craftsmanship with modern technology to deliver products that 
                exceed expectations.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Company Story Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional clothing products that combine quality, style, and 
                affordability while building lasting partnerships with clients worldwide.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading global clothing export company, recognized for innovation, 
                sustainability, and excellence in every aspect of our business.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, quality, innovation, and respect for our employees, customers, 
                and the environment guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that have shaped our company over the years
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Team Photo</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <p className="text-primary-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <p className="text-primary-100">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <p className="text-primary-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">2M+</div>
              <p className="text-primary-100">Garments Exported</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}