"use client"

import * as React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas"
import { siteConfig } from "@/lib/config"

export default function ContactPage() {

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            consent: undefined,
        },
    })

    function onSubmit(data: ContactFormValues) {
        // Simulate API call
        console.log(data)
        toast.success("Message Sent!", {
            description: "We'll get back to you as soon as possible.",
        })
        form.reset()
    }

    return (
        <div className="container py-12 md:py-20 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <h1 className="font-outfit text-4xl md:text-6xl font-bold uppercase text-glow">
                    Contact <span className="text-primary">Us</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Have questions? Visit us, call us, or send a message below.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="grid gap-6">
                        <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                            <Phone className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                            <Mail className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                            <Clock className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                                <p className="text-muted-foreground">{siteConfig.contact.hours}</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="aspect-video w-full rounded-xl overflow-hidden border border-border/50 relative group">
                        <div className="absolute inset-0 bg-[url('https://placehold.co/800x450/111/444.png?text=Map+Embed')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-background/80backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                                <span className="font-bold text-sm">Google Maps Embed Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 shadow-lg shadow-black/20">
                    <div className="mb-6">
                        <h2 className="font-outfit text-2xl font-bold uppercase mb-2">Send a Message</h2>
                        <p className="text-sm text-muted-foreground">Fill out the form and our team will respond within 24 hours.</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" {...field} />
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
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="+357..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="How can we help you?"
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="consent"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border/50 p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value === true}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                I consent to NeonWash processing my data to respond to my inquiry.
                                            </FormLabel>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                                <Send className="mr-2 h-4 w-4" /> Send Message
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
