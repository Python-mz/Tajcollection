"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is too short"),
  city: z.string().min(2, "City is too short"),
  state: z.string().min(2, "State is too short"),
  zip: z.string().min(5, "Invalid zip code"),
  cardName: z.string().min(2, "Name on card is required"),
  cardNumber: z.string().length(16, "Card number must be 16 digits"),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  cardCvc: z.string().length(3, "CVC must be 3 digits"),
});

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", address: "", city: "", state: "", zip: "",
      cardName: "", cardNumber: "", cardExpiry: "", cardCvc: "",
    },
  });
  
  if (cartItems.length === 0) {
    router.push('/cart');
    return null;
  }
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Order placed:", values);
    const orderId = Math.random().toString(36).substr(2, 9);
    clearCart();
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase.",
    });
    router.push(`/order-confirmation/${orderId}`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold">Checkout</h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Card>
                <CardHeader><CardTitle>Shipping Information</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="address" render={({ field }) => (
                        <FormItem><FormLabel>Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField control={form.control} name="city" render={({ field }) => (
                            <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="state" render={({ field }) => (
                            <FormItem><FormLabel>State</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="zip" render={({ field }) => (
                            <FormItem><FormLabel>Zip Code</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                    </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Payment Information</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                   <FormField control={form.control} name="cardName" render={({ field }) => (
                        <FormItem><FormLabel>Name on Card</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="cardNumber" render={({ field }) => (
                        <FormItem><FormLabel>Card Number</FormLabel><FormControl><Input placeholder="•••• •••• •••• ••••" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField control={form.control} name="cardExpiry" render={({ field }) => (
                            <FormItem><FormLabel>Expiry Date (MM/YY)</FormLabel><FormControl><Input placeholder="MM/YY" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="cardCvc" render={({ field }) => (
                            <FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="•••" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" size="lg" className="w-full">Place Order</Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </div>
        <div className="lg:col-span-2">
           <Card>
             <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
             <CardContent>
                <ul className="space-y-4">
                    {cartItems.map(item => (
                        <li key={item.product.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                               <Image src={item.product.images[0]} alt={item.product.name} width={64} height={64} className="rounded-md object-cover"/>
                               <div>
                                   <p className="font-semibold">{item.product.name}</p>
                                   <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                               </div>
                            </div>
                            <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
                <Separator className="my-4"/>
                <div className="space-y-2">
                    <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
                    <Separator className="my-2"/>
                    <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div>
                </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
