import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Elegant textiles and fabrics"
          data-ai-hint="elegant textiles"
          fill
          style={{objectFit: "cover"}}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/50 p-8 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            The Art of Fine Cloth
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover exquisite collections from the finest manufacturers, curated for the modern connoisseur.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#featured">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="featured" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            For Wholesalers & Manufacturers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Join Taj Marketplace to showcase your collection to a global audience. We provide the tools you need to grow your business online.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/register">Become a Seller</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/login">Seller Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
