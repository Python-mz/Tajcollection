import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'All Products - Taj Marketplace',
  description: 'Browse the full collection of fine cloths and accessories from Taj Marketplace.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-center font-headline text-4xl font-bold">All Products</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
