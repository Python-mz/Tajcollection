"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z.string().min(10, "Please enter a valid phone number").optional(),
  message: z.string().min(10, "Message is too short"),
  productPicture: z.any().optional(),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="space-y-6">
            <Badge variant="outline">Contact Us</Badge>
            <h1 className="font-headline text-4xl font-bold">Have a Question?</h1>
            <p className="text-lg text-muted-foreground">
                We're here to help. Send us a message, give us a call, or connect on WhatsApp for a quick response.
            </p>
            <div className="flex gap-4">
                <Button size="lg">
                    <Phone className="mr-2" />
                    Click to Call
                </Button>
                <Button size="lg" variant="secondary">
                    <MessageSquare className="mr-2" />
                    Chat on WhatsApp
                </Button>
            </div>
        </div>

        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Phone Number" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Your Message"
                                    className="min-h-[150px]"
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="productPicture"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Product Picture (Optional)</FormLabel>
                                <FormControl>
                                   <Input type="file" {...form.register("productPicture")} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" size="lg" className="w-full">
                            Submit
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
