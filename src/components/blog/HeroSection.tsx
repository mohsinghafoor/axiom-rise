export default function BlogHeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-orange-500 to-yellow-400 dark:from-primary-700 dark:via-orange-600 dark:to-primary-800 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 dark:bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 dark:bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Our Blog
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white/95 dark:text-white/90 drop-shadow-md">
          Insights, trends, and expert advice from the world of clothing manufacturing and textile exports
        </p>
      </div>
    </section>
  );
}
