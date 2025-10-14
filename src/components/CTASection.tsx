import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
        <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">Join thousands of satisfied clients worldwide. Get in touch today for competitive pricing and exceptional service.</p>
        <Link href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block">Contact Us Today</Link>
      </div>
    </section>
  );
}
