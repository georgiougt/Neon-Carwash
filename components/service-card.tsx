import Link from "next/link"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Service } from "@/lib/services"

interface ServiceCardProps {
    service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-[0_0_20px_-5px_var(--primary)]">
            {/* Poster Gradient/Image Placeholder */}
            <div className={cn("relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br p-6 flex flex-col justify-end", service.gradient)}>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

                {/* Neon Frame Effect on Hover (Optional CSS trick, but we keep it simple first) */}

                <div className="relative z-10 space-y-2">
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 backdrop-blur-md mb-2 w-fit">
                        {service.category}
                    </Badge>
                    <h3 className="font-outfit text-2xl font-bold uppercase leading-tight text-foreground group-hover:text-glow transition-all">
                        {service.name}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                        {service.shortDescription}
                    </p>
                </div>
            </div>

            {/* Content Bottom / Actions */}
            <div className="flex flex-1 flex-col justify-between space-y-4 p-6 pt-4 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{service.duration}</span>
                    </div>
                    <p className="font-semibold text-foreground">From €{service.priceFrom}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary" asChild>
                        <Link href={`/services/${service.slug}`}>Details</Link>
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
                        <Link href={`/book?service=${service.slug}`}>Book</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
