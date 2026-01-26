import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, CheckCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services } from "@/lib/services"

/* 
 * In Next.js App Router with static params, we can generate params for valid slugs.
 */
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

// Correct type definition for page props in Next.js 15+
// Params is a Promise in recent versions, but for simple needs:
type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return {
            title: 'Service Not Found',
        }
    }

    return {
        title: `${service.name} | NeonWash`,
        description: service.shortDescription,
    }
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="container py-10 px-4 md:px-6">
            <div className="mb-8">
                <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <Badge variant="outline" className="mb-3 border-primary/50 text-primary bg-primary/10">{service.category}</Badge>
                        <h1 className="font-outfit text-4xl md:text-5xl font-bold uppercase text-glow mb-4">{service.name}</h1>
                        <p className="text-xl text-muted-foreground">{service.longDescription}</p>
                    </div>

                    <div className={`aspect-video w-full rounded-2xl bg-gradient-to-br ${service.gradient} opacity-80 shadow-lg shadow-primary/5`} />

                    <div className="space-y-6">
                        <h2 className="font-outfit text-2xl font-bold uppercase">What&apos;s Included</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.includes.map((item) => (
                                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/5 border border-border/50">
                                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {service.faqs.length > 0 && (
                        <div className="space-y-6">
                            <h2 className="font-outfit text-2xl font-bold uppercase">FAQ</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {service.faqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${i}`}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <Card className="border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                            <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Starting From</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-foreground">€{service.priceFrom}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <span>Duration: {service.duration}</span>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <Button className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                                        <Link href={`/book?service=${service.slug}`}>Book Now</Link>
                                    </Button>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/contact?subject=${service.name}`}>Ask a Question</Link>
                                    </Button>
                                </div>

                                <p className="text-xs text-center text-muted-foreground">
                                    *Final price may vary based on vehicle size and condition.
                                </p>
                            </CardContent>
                        </Card>

                        {service.addOns.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="font-bold text-sm uppercase text-muted-foreground tracking-wider">Available Add-Ons</h3>
                                {service.addOns.map((addon) => (
                                    <div key={addon.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-background/50">
                                        <div className="flex items-center gap-2">
                                            <Plus className="h-4 w-4 text-primary" />
                                            <span className="font-medium text-sm">{addon.name}</span>
                                        </div>
                                        <span className="text-sm font-semibold">+€{addon.price}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
