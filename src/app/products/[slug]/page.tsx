import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { Metadata } from 'next';



interface ProductPageProps {
  params: { slug: string };
}


interface Product {
  title: Record<string, string>;
  description: Record<string, string>;
  image: string;
  slug: string;
}


export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = productsData.find((p: Product) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.title.en,
    description: product.description.en,
  };
}


export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData.find((p: Product) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{product.title.en}</h1>
      <img src={product.image} alt={product.title.en} className="mb-6 rounded shadow-md max-h-80" />
      <p className="mb-6">{product.description.en}</p>
      {/* Add more product details and images here as needed */}
    </main>
  );
}
