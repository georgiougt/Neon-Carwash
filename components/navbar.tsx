"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/config"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-primary/5"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-outfit text-2xl font-bold uppercase tracking-wider text-foreground">
                        {siteConfig.name}
                        <span className="text-primary animate-pulse">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide",
                                pathname === item.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Button asChild className="ml-4 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_-3px_var(--primary)] hover:shadow-[0_0_20px_0px_var(--primary)] transition-all">
                        <Link href="/book">Book Now</Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-border/50">
                        <div className="flex flex-col gap-6 mt-8">
                            <Link href="/" className="font-outfit text-2xl font-bold uppercase tracking-wider mb-4">
                                {siteConfig.name}<span className="text-primary">.</span>
                            </Link>
                            <nav className="flex flex-col gap-4">
                                {siteConfig.nav.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            pathname === item.href ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                                <div className="h-px bg-border/50 my-2" />
                                <Button asChild className="w-full font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                                    <Link href="/book">Book Now</Link>
                                </Button>
                                <Button variant="outline" asChild className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary">
                                    <Link href="tel:+35799123456">
                                        <Phone className="mr-2 h-4 w-4" /> Call Us
                                    </Link>
                                </Button>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
