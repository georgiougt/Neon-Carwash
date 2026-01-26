import Link from "next/link"
import { Metadata } from "next"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services"

export const metadata: Metadata = {
    title: "Services | NeonWash",
    description: "Explore our premium car wash and detailing services.",
}

export default function ServicesPage() {
    const categories = Array.from(new Set(services.map(s => s.category)))

    return (
        <div className="container py-12 md:py-20 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="font-outfit text-4xl md:text-6xl font-bold uppercase text-glow">
                    Our <span className="text-primary">Services</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    From express washes to full paint correction, we offer a range of services to suit your vehicle&apos;s needs.
                </p>
            </div>

            <div className="space-y-16">
                {categories.map((category) => (
                    <section key={category} id={category.toLowerCase()} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="font-outfit text-2xl md:text-3xl font-bold uppercase tracking-wider text-secondary">
                                {category}
                            </h2>
                            <Separator className="flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.filter(s => s.category === category).map(service => (
                                <ServiceCard key={service.slug} service={service} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="mt-20 rounded-2xl border border-border/50 bg-secondary/5 p-8 text-center backdrop-blur-sm">
                <Sparkles className="mx-auto h-8 w-8 text-secondary mb-4" />
                <h3 className="font-outfit text-xl font-bold uppercase mb-2">Not sure what you need?</h3>
                <p className="text-muted-foreground mb-6">Contact us for a free consultation and vehicle inspection.</p>
                <div className="flex gap-4 justify-center">
                    <Button variant="outline" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/book">Book Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
