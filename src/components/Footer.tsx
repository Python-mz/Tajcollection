import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Taj Marketplace</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Exquisite collections from the finest manufacturers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="/#featured" className="text-sm text-muted-foreground hover:text-foreground">Featured</Link></li>
              <li><Link href="/categories/apparel" className="text-sm text-muted-foreground hover:text-foreground">Apparel</Link></li>
              <li><Link href="/categories/accessories" className="text-sm text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">About Us</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">Become a Seller</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="mt-2 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Taj Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
