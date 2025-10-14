import Link from "next/link";
import Image from "next/image";

export default function ProductCategoriesSection() {
  const categories = [
    { 
      title: "JACKET MANUFACTURER", 
      description: "Quality jackets from casual to premium outerwear",
      image: "/images/hero/leather-jacket.jpg"
    },
    { 
      title: "HOODIES MANUFACTURER", 
      description: "Comfortable and stylish hoodies for all seasons",
      image: "/images/hero/hoodies.png"
    },
    { 
      title: "WHOLESALE VARSITY JACKETS", 
      description: "Classic varsity jackets with modern styling",
      image: "/images/hero/varsity-jacket.png"
    },
    { 
      title: "HOODIES SUPPLIER AND VENDORS", 
      description: "Bulk hoodie supply with customization options",
      image: "/images/hero/hoodie.avif"
    },
    { 
      title: "T-SHIRTS MANUFACTURER", 
      description: "Premium custom t-shirts in various styles and fabrics",
      image: "/images/hero/tshirt.jpg"
    },
    { 
      title: "WHOLESALE SCRUB VENDORS", 
      description: "High-quality medical scrubs for healthcare professionals",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
    },
    { 
      title: "UNIFORM MANUFACTURERS", 
      description: "Professional uniforms for corporate and industrial needs",
      image: "/images/products/uniform.png"
    },
    { 
      title: "SPORTSWEAR MANUFACTURER", 
      description: "Performance-driven athletic wear for active lifestyles",
      image: "/images/hero/sports-wear.png"
    },
    { 
      title: "WHOLESALE SHORTS", 
      description: "Versatile shorts for sports, casual, and activewear",
      image: "/images/hero/shorts.png"
    },
    { 
      title: "FITNESS CLOTHING MANUFACTURER", 
      description: "Advanced workout gear and gym apparel",
      image: "/images/hero/fitness.jpg"
    },
    { 
      title: "SWEATSHIRT MANUFACTURERS", 
      description: "Cozy and durable sweatshirts for everyday comfort",
      image: "/images/hero/sweatshirt.webp"
    },
    { 
      title: "MARTIAL ARTS CLOTHING", 
      description: "Specialized martial arts uniforms and training gear",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop"
    },
    { 
      title: "EQUESTRIAN CLOTHING MANUFACTURER", 
      description: "Professional equestrian apparel and riding gear",
      image: "/images/products/equestrian.webp"
    },
    { 
      title: "HAT MANUFACTURERS", 
      description: "Custom hats and headwear for all occasions",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=400&fit=crop"
    },
    { 
      title: "LEATHER BAGS MANUFACTURER", 
      description: "Premium leather bags and accessories",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=400&fit=crop"
    }
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-xl text-gray-600">Discover our diverse range of high-quality clothing for various markets</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image 
                  src={category.image} 
                  alt={category.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link href="/products" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  READ MORE
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
