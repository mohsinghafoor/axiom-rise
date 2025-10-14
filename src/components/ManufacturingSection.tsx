import Link from "next/link";
import Image from "next/image";

export default function ManufacturingSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative accent circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - Wider on desktop, appears first on mobile */}
          <div className="order-1 lg:col-span-3">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Your Manufacturing Partner
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Are You Seeking a Trusted Partner in the Garment Industry for Your{' '}
              <span className="text-primary-600">Perfect Clothing Manufacturing?</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              With countless garment producers in the market, finding the right partner can be overwhelming and exhausting. 
              <span className="font-semibold text-gray-900"> But your search ends here!</span> As one of the most reputable and established clothing manufacturing companies, we provide comprehensive solutions for all your garment production requirements.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              As a pioneer of innovative fashion, we pride ourselves on being your ultimate manufacturing partner, ensuring your brand distinguishes itself in today&apos;s competitive marketplace through our premium{' '}
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-4 transition-colors">
                garment manufacturing services
              </Link>
              . As a leading clothing manufacturer and exporter, we excel in delivering products that not only meet international quality standards but surpass expectations, guaranteeing your brand receives nothing less than exceptional excellence.
            </p>
            
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-sm font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-lg">
                GET A QUOTE
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Image - Smaller on desktop, appears second on mobile */}
          <div className="order-2 lg:col-span-2">
            <div className="group relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none hover:shadow-xl transition-shadow duration-300">
                <Image 
                  src="/images/hero/fitness.jpg" 
                  alt="Expert garment manufacturing process" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto object-cover" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-primary-500/20"></div>
              </div>
            
              {/* Enhanced Stats Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">5+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 font-semibold">Years Experience</div>
                </div>
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 text-center border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">20+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 font-semibold">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
