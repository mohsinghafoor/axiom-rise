import Image from "next/image";

export default function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial discussion to understand your requirements and specifications",
      image: "/images/process/consultation.png"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Create detailed designs and production timeline based on your needs",
      image: "/images/process/planning.png"
    },
    {
      step: "03",
      title: "Sample Development",
      description: "Develop and refine samples until they meet your exact requirements",
      image: "/images/process/sample.png"
    },
    {
      step: "04",
      title: "Production",
      description: "Begin full-scale production with continuous quality monitoring",
      image: "/images/process/production.png"
    },
    {
      step: "05",
      title: "Quality Control",
      description: "Comprehensive quality checks before packaging and shipping",
      image: "/images/services/quality-assurance.png"
    },
    {
      step: "06",
      title: "Delivery",
      description: "Secure packaging and timely delivery to your specified destination",
      image: "/images/process/delivery.png"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgb(253, 252, 251) 0%, rgb(226, 209, 195) 100%);' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600">
            A streamlined approach ensuring quality and efficiency at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {/* Arrow - hide for last item in each row */}
              {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 items-center justify-center">
                  <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
