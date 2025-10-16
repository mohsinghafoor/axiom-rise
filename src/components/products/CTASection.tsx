import Link from "next/link";

export default function ProductsCTASection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(214,40,40,1) 0%, rgba(255,195,0,1) 90%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Can&apos;t Find What You&apos;re Looking For?
        </h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
          We offer custom manufacturing solutions tailored to your specific needs. Contact us to discuss your requirements
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
          <Link 
            href="/services"
            className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all hover:scale-105"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
