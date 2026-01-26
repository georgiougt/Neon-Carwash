"use client"

import * as React from "react"
import Image from "next/image" // Next.js Image optimization will assume internal usage, but for placeholders we use divs mostly or colorful boxes
import { Sparkles, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Mock Gallery Data
const galleryItems = [
    { id: 1, category: "Wash", title: "Showroom Shine", gradient: "from-pink-500 to-purple-500" },
    { id: 2, category: "Interior", title: "Leather Care", gradient: "from-blue-500 to-cyan-500" },
    { id: 3, category: "Detailing", title: "Engine Bay", gradient: "from-orange-500 to-red-500" },
    { id: 4, category: "Protection", title: "Ceramic Bead", gradient: "from-green-500 to-emerald-500" },
    { id: 5, category: "Wash", title: "Foam Party", gradient: "from-indigo-500 to-purple-500" },
    { id: 6, category: "Interior", title: "Carpet Extraction", gradient: "from-teal-500 to-blue-500" },
    { id: 7, category: "Detailing", title: "Wheel Detail", gradient: "from-yellow-500 to-orange-500" },
    { id: 8, category: "Protection", title: "Gloss Enhancement", gradient: "from-rose-500 to-pink-500" },
]

export default function GalleryPage() {
    const [filter, setFilter] = React.useState("All")
    const categories = ["All", "Wash", "Interior", "Detailing", "Protection"]

    const filteredItems = filter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === filter)

    return (
        <div className="container py-12 md:py-20 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="font-outfit text-4xl md:text-6xl font-bold uppercase text-glow">
                    Our <span className="text-secondary">Gallery</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    See the results of our premium detailing services. Real cars, real shine.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "rounded-full px-6 transition-all",
                            filter === cat
                                ? "bg-primary text-primary-foreground shadow-[0_0_15px_-3px_var(--primary)]"
                                : "border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50"
                        )}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item) => (
                    <Dialog key={item.id}>
                        <DialogTrigger asChild>
                            <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-background/50 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_var(--primary)] hover:border-primary/50">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70 transition-opacity group-hover:opacity-100`} />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                    <Camera className="h-8 w-8 text-white mb-2" />
                                    <span className="font-bold text-white uppercase tracking-wider text-sm">{item.title}</span>
                                    <Badge variant="secondary" className="mt-2 text-xs">{item.category}</Badge>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="border-border/50 bg-background/95 backdrop-blur-xl sm:max-w-3xl p-0 overflow-hidden">
                            <div className={`aspect-video w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                                <div className="text-center">
                                    <Sparkles className="h-16 w-16 text-white/50 mx-auto mb-4" />
                                    <h2 className="text-3xl font-bold text-white uppercase">{item.title}</h2>
                                    <p className="text-white/80">{item.category} Service Result</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}
