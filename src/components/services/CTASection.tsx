export default function ServicesCTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-orange-500 to-yellow-400 dark:from-primary-700 dark:via-orange-600 dark:to-primary-800 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 dark:bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 dark:bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95 dark:text-white/90 drop-shadow-md">
          Contact our team today to discuss your project requirements and discover how we can help bring your vision to life
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary-600 dark:bg-white dark:text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-white/90 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
            Request Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 dark:hover:bg-white dark:hover:text-primary-700 transition-all hover:scale-105 shadow-lg">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
