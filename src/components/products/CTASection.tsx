import Link from "next/link";

export default function ProductsCTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#d62828] via-[#f77f00] to-[#fcbf49] dark:from-orange-900 dark:via-orange-800 dark:to-yellow-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Can&apos;t Find What You&apos;re Looking For?
        </h2>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          We offer custom manufacturing solutions tailored to your specific needs. Contact us to discuss your requirements
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
          <Link 
            href="/services"
            className="px-8 py-3 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-all hover:scale-105"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
