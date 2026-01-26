"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Calendar, Clock, Car, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { bookingFormSchema, type BookingFormValues } from "@/lib/schemas"
import { services } from "@/lib/services"

function BookingForm() {
    const searchParams = useSearchParams()
    const defaultService = searchParams.get("service") || ""

    const form = useForm<BookingFormValues>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            vehicleType: undefined,
            vehicleSize: undefined,
            service: defaultService,
            date: "",
            time: undefined,
            notes: "",
            consent: undefined,
        },
    })

    function onSubmit(data: BookingFormValues) {
        const requestId = "REQ-" + Math.floor(Math.random() * 10000)
        console.log(data)

        toast.success("Request Received!", {
            description: `Your request ID is ${requestId}. We will call you shortly to confirm availability.`,
            duration: 5000,
        })

        // Optional: reset form or redirect
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6">
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
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Vehicle Details */}
                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="vehicleType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Vehicle Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Sedan">Sedan</SelectItem>
                                        <SelectItem value="SUV">SUV</SelectItem>
                                        <SelectItem value="Hatchback">Hatchback</SelectItem>
                                        <SelectItem value="Truck">Truck/Pickup</SelectItem>
                                        <SelectItem value="Coupe">Coupe</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="vehicleSize"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Vehicle Size</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select size" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Small">Small (e.g. Mini, Fit)</SelectItem>
                                        <SelectItem value="Medium">Medium (e.g. Corolla, 3 Series)</SelectItem>
                                        <SelectItem value="Large">Large (e.g. X5, Range Rover)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Service Selection */}
                <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Service Package</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose a service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {services.map(s => (
                                        <SelectItem key={s.slug} value={s.slug}>
                                            {s.name} (from €{s.priceFrom})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Date</FormLabel>
                                <FormControl>
                                    {/* Using native date input for simplicity as requested */}
                                    <Input type="date" {...field} className="block" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Time</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Morning">Morning (08:00 - 12:00)</SelectItem>
                                        <SelectItem value="Afternoon">Afternoon (12:00 - 15:00)</SelectItem>
                                        <SelectItem value="Evening">Evening (15:00 - 18:00)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Any specific concerns or requests?" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border/50 p-4 bg-secondary/5">
                            <FormControl>
                                <Checkbox
                                    checked={field.value === true}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    I understand this is a <span className="text-primary font-bold">booking request</span> only.
                                    We will contact you to confirm the exact date and time.
                                </FormLabel>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Submit Booking Request
                </Button>
            </form>
        </Form>
    )
}

export default function BookPage() {
    return (
        <div className="container py-12 md:py-20 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="font-outfit text-4xl md:text-6xl font-bold uppercase text-glow">
                    Book <span className="text-primary">Now</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Fill out the form below to request an appointment. We'll confirm via phone/sms.
                </p>
            </div>

            <div className="max-w-2xl mx-auto rounded-2xl border border-border/50 bg-card p-6 md:p-10 shadow-2xl shadow-primary/5">
                <React.Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading form...</div>}>
                    <BookingForm />
                </React.Suspense>
            </div>
        </div>
    )
}
