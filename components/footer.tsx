import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Footer() {
    return (
        <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-sm pt-12 pb-8">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <Link href="/" className="font-outfit text-2xl font-bold uppercase tracking-wider">
                            {siteConfig.name}<span className="text-primary">.</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            {siteConfig.description}. We provide top-tier detailing services to make your vehicle shine like new.
                        </p>
                        <div className="flex gap-4">
                            <Link href={siteConfig.links.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href={siteConfig.links.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href={siteConfig.links.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-outfit font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {siteConfig.nav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-primary transition-colors">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-outfit font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services/exterior-wash" className="hover:text-primary transition-colors">Exterior Wash</Link></li>
                            <li><Link href="/services/interior-deep-clean" className="hover:text-primary transition-colors">Interior Detail</Link></li>
                            <li><Link href="/services/ceramic-spray-sealant" className="hover:text-primary transition-colors">Ceramic Coating</Link></li>
                            <li><Link href="/services/signature-wash" className="hover:text-primary transition-colors">Signature Package</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-outfit font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">{siteConfig.contact.phone}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">{siteConfig.contact.email}</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>{siteConfig.contact.hours}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <p>Prices may vary by vehicle size/condition.</p>
                </div>
            </div>
        </footer>
    )
}
