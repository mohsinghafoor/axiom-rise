

"use client";

import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { Metadata } from 'next';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeftIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface ProductPageProps {
  params: { slug: string };
}

interface Product {
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
  slug: string;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { t } = useLanguage();
  const product = productsData.find((p: Product) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden
        bg-gradient-to-br from-[#11998e] to-[#38ef7d]
        dark:from-[#065f46] dark:via-[#0f766e] dark:to-[#14b8a6]
        transition-colors duration-300">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title.en}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {product.title.en}
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                {product.description.en}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Get Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all hover:scale-105"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our {product.title.en}?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premium Quality</h3>
                    <p className="text-gray-600 dark:text-gray-300">High-quality materials and expert craftsmanship ensure durability and style.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Options</h3>
                    <p className="text-gray-600 dark:text-gray-300">Personalize your order with custom colors, sizes, and branding options.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-300">Quick turnaround times and reliable shipping to get your products when you need them.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our team of experts is here to help you choose the perfect products for your needs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contact us today to discuss your custom {product.title.en.toLowerCase()} requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg"
                  >
                    Contact Us Now
                  </Link>
                  <Link
                    href={`tel:+1234567890`}
                    className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-all hover:scale-105"
                  >
                    Call Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
