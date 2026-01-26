import * as z from "zod"

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone number is too short"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms",
    }),
})

export const bookingFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(8, "Phone number is too short"),
    email: z.string().email("Invalid email address").optional().or(z.literal("")),
    vehicleType: z.enum(["Sedan", "SUV", "Hatchback", "Truck", "Coupe", "Other"], {
        message: "Please select a vehicle type",
    }),
    vehicleSize: z.enum(["Small", "Medium", "Large"], {
        message: "Please select a vehicle size",
    }),
    service: z.string({
        message: "Please select a service",
    }),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date",
    }),
    time: z.enum(["Morning", "Afternoon", "Evening"], {
        message: "Please select a preferred time",
    }),
    notes: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms",
    }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type BookingFormValues = z.infer<typeof bookingFormSchema>
