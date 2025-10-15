export default function ProductsHeroSection() {
  return (
    <section className="relative text-white py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
            Explore our comprehensive range of high-quality clothing and textile products manufactured with precision and care
          </p>
        </div>
      </div>
    </section>
  );
}
