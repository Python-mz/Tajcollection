"use client";

import { products } from '@/lib/products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { notFound } from 'next/navigation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { useState } from 'react';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="relative aspect-square flex items-center justify-center p-0">
                      <Image 
                        src={img} 
                        alt={`${product.name} - view ${index + 1}`} 
                        data-ai-hint="product photo"
                        fill 
                        className="object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>
        <div>
          <Badge variant="outline">{product.category}</Badge>
          <h1 className="mt-2 font-headline text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <p className="mt-6 text-muted-foreground">{product.description}</p>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)}>-</Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)}>+</Button>
            </div>
            <Button size="lg" onClick={handleAddToCart} className="flex-grow">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          
          <div className="mt-6 flex items-center text-sm text-green-600">
             <CheckCircle className="mr-2 h-5 w-5" />
             <span>
                {product.stock > 0 ? `${product.stock} items in stock` : 'Out of stock'} - SKU: {product.sku}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}
