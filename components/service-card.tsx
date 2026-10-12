import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Service } from "@/lib/services"

interface ServiceCardProps {
    service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group relative flex h-full flex-col overflow-hidden border border-border/40 bg-card/60 backdrop-blur-md rounded-xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_-5px_var(--primary)] hover:-translate-y-1">
            {/* Real Photography with Cinematic Overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                    <Badge variant="outline" className="border-primary/50 text-primary bg-black/60 backdrop-blur-md uppercase tracking-wider text-[11px] font-bold">
                        {service.category}
                    </Badge>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="font-outfit text-2xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                        {service.name}
                    </h3>
                </div>
            </div>

            {/* Content Bottom / Actions */}
            <div className="flex flex-1 flex-col justify-between space-y-4 p-5 pt-3">
                <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                    {service.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/30">
                    <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>{service.duration}</span>
                    </div>
                    <p className="font-bold text-foreground text-sm font-mono text-primary">From €{service.priceFrom}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                    <Button variant="outline" size="sm" className="w-full border-border/50 text-xs hover:bg-white/5 hover:text-white" asChild>
                        <Link href={`/services/${service.slug}`}>Details</Link>
                    </Button>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-md shadow-primary/20" asChild>
                        <Link href={`/book?service=${service.slug}`}>Book</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
