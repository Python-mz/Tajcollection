import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type OrderConfirmationPageProps = {
  params: {
    orderId: string;
  };
};

export default function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-16">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="mt-4 text-3xl font-headline font-bold">
            Thank you for your order!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Your order has been placed successfully. An email confirmation has been sent to you.
          </p>
          <p className="mt-4 font-semibold">
            Order ID: <span className="font-mono text-primary">{params.orderId}</span>
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
