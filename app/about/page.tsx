import Link from "next/link"
import { Metadata } from "next"
import { CheckCircle, Users, Award, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
    title: "About Us | NeonWash",
    description: "Learn about our premium car care philosophy and team.",
}

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-20 px-4 md:px-6">
            {/* Hero */}
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <h1 className="font-outfit text-4xl md:text-6xl font-bold uppercase text-glow">
                    About <span className="text-primary">NeonWash</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl text-lg">
                    We are not just a car wash. We are automotive enthusiasts dedicated to preserving the beauty and value of your vehicle.
                </p>
            </div>

            {/* Story Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="font-outfit text-3xl font-bold uppercase">Our Story</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Founded with a passion for perfection, NeonWash started as a small detailing studio in {siteConfig.location}.
                        Our mission was simple: provide a level of care that goes beyond the standard "wash and go."
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        We realized that modern vehicles need modern care. That's why we invested in pH-neutral chemicals,
                        ultra-soft microfiber technology, and air-filtration drying systems to ensure a scratch-free finish every time.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-4xl font-bold text-primary">5k+</span>
                            <span className="text-sm text-muted-foreground">Cars Detailed</span>
                        </div>
                        <div className="w-px bg-border/50 h-12" />
                        <div className="flex flex-col gap-1">
                            <span className="text-4xl font-bold text-secondary">100%</span>
                            <span className="text-sm text-muted-foreground">Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden border border-border/50 bg-secondary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="h-32 w-32 text-white/10" />
                    </div>
                    {/* Placeholder for Team/Shop Image */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                        <p className="font-bold text-white mb-1">State of the Art Facility</p>
                        <p className="text-xs text-white/70">Equipped with the best tools in the industry</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
                <h2 className="font-outfit text-3xl font-bold uppercase text-center mb-12">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, title: "Expert Team", desc: "Our detailers are trained and certified in the latest paint correction and ceramic coating techniques." },
                        { icon: Award, title: "Premium Products", desc: "We use only top-tier brands like Gtechniq, CarPro, and Koch Chemie. No cheap bulk detergents." },
                        { icon: CheckCircle, title: "Satisfaction Guarantee", desc: "If you're not happy with the result, we'll make it right. Your satisfaction is our priority." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                            <item.icon className="h-10 w-10 text-secondary mb-4" />
                            <h3 className="font-bold text-xl uppercase mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-secondary/10 border border-secondary/20 p-8 md:p-12 text-center">
                <h2 className="font-outfit text-3xl font-bold uppercase mb-4">Experience the Difference</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Your car deserves the best. Book an appointment today and see why we are {siteConfig.location}'s #1 detailing studio.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
                    <Link href="/book">Book Now</Link>
                </Button>
            </div>
        </div>
    )
}
