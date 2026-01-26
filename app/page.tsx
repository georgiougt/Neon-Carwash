import Link from "next/link"
import { ArrowRight, Star, ShieldCheck, Sparkles, Clock, Droplets, Trophy, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services"
import { siteConfig } from "@/lib/config"

export default function Home() {
  const featuredServices = services.slice(0, 3)
  const signaturePackage = services.find(s => s.slug === "signature-wash")

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20 text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="container flex flex-col items-center gap-6 px-4 md:px-6">
          <div className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
            <Sparkles className="mr-2 h-4 w-4" />
            Premium Auto Detailing
          </div>
          <h1 className="font-outfit text-5xl font-bold uppercase tracking-tighter sm:text-7xl md:text-8xl text-glow">
            Welcome to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-pulse">
              {siteConfig.name}
            </span>
          </h1>
          <p className="max-w-[800px] text-lg text-muted-foreground md:text-xl">
            The ultimate centre for your premium car care services in <span className="text-secondary font-semibold">{siteConfig.location}</span>.
            We deliver unmatched care with state-of-the-art water filtration and premium products.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-4">
            <Button size="lg" className="h-12 px-8 font-bold text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_var(--primary)] text-glow min-w-[160px]" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 font-bold text-lg border-primary/30 hover:bg-primary/10 hover:text-primary min-w-[160px]" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
        <Separator className="absolute bottom-0 w-[80%] opacity-30 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* 2. TRUST STRIP */}
      <section className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2 text-center">
            <Trophy className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-bold">Premium Products</h3>
            <p className="text-xs text-muted-foreground">Only the best for your paint</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-bold">Paint-Safe</h3>
            <p className="text-xs text-muted-foreground">pH neutral & microfiber only</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Droplets className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-bold">Water Filtration</h3>
            <p className="text-xs text-muted-foreground">Spot-free rinse guaranteed</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Clock className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-bold">Fast Turnaround</h3>
            <p className="text-xs text-muted-foreground">Quality taking no shortcuts</p>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="font-outfit text-3xl font-bold uppercase tracking-wide md:text-5xl">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Choose from our range of professional detailing packages designed to protect and enhance your vehicle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary" asChild>
            <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* 4. FEATURED PACKAGE */}
      {signaturePackage && (
        <section className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12">
            <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-bold text-secondary">
                  MOST POPULAR Choice
                </div>
                <h2 className="font-outfit text-4xl font-bold uppercase leading-none md:text-6xl text-glow">
                  {signaturePackage.name}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {signaturePackage.longDescription}
                </p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {signaturePackage.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-glow shadow-[0_0_30px_-5px_var(--primary)] w-full sm:w-auto" asChild>
                    <Link href={`/book?service=${signaturePackage.slug}`}>
                      Book This Package • From €{signaturePackage.priceFrom}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Abstract Visual for Package */}
              <div className="relative aspect-square w-full max-w-[500px] justify-self-center lg:justify-self-end">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-secondary blur-[80px] opacity-40 animate-pulse" />
                <div className="relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center">
                  <Sparkles className="h-24 w-24 text-primary mb-6" />
                  <h3 className="font-outfit text-3xl font-bold uppercase">showroom<br />shine</h3>
                  <p className="mt-2 text-muted-foreground">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PROCESS SECTION */}
      <section className="container px-4 md:px-6 py-12">
        <h2 className="font-outfit text-3xl font-bold uppercase text-center mb-16">
          The <span className="text-secondary">Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Check-in", desc: "Vehicle inspection & requirements", icon: CheckCircle },
            { title: "Pre-Rinse", desc: "Foam bath & dirt removal", icon: Droplets },
            { title: "Detailing", desc: "Hand wash & deep clean", icon: Sparkles },
            { title: "Inspection", desc: "Final quality check", icon: Trophy },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-background transition-all group-hover:border-primary group-hover:shadow-[0_0_20px_-5px_var(--primary)]">
                <step.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-outfit text-xl font-bold uppercase mb-2">{i + 1}. {step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="container px-4 md:px-6 bg-secondary/5 py-16 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="font-outfit text-3xl font-bold uppercase">Client Reviews</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
          </div>
          <p className="text-sm text-muted-foreground mt-2">5.0 Star Average</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Alex K.", text: "Absolutely incredible work. My car looks better than when I bought it!" },
            { name: "Maria S.", text: "The ceramic spray is magic. Water just falls off. Highly recommended." },
            { name: "George P.", text: "Best in Limassol. Professional, clean, and amazing attention to detail." }
          ].map((review, i) => (
            <div key={i} className="rounded-xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="italic text-muted-foreground mb-4">&quot;{review.text}&quot;</p>
              <p className="font-bold text-foreground">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LOCATION Teaser */}
      <section className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-outfit text-4xl font-bold uppercase">Find Us</h2>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3"><Clock className="text-primary" /> {siteConfig.contact.hours}</p>
            <p className="flex items-center gap-3"><CheckCircle className="text-primary" /> {siteConfig.contact.address}</p>
            <p className="text-muted-foreground">Located in the heart of Limassol, easily accessible from the highway.</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">Get Directions</Button>
            <Button size="lg" variant="outline">Call Us</Button>
          </div>
        </div>
        <div className="aspect-video w-full rounded-2xl bg-zinc-900 border border-border/50 flex items-center justify-center relative overflow-hidden group">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-[url('https://placehold.co/800x450/111/444.png?text=Map+Location')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative z-10 bg-background/80 p-4 rounded-xl backdrop-blur-md">
            <span className="font-bold">Map Preview</span>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-[0_0_50px_-10px_var(--primary)] sm:px-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary opacity-80" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-outfit text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Ready for that showroom shine?
            </h2>
            <p className="max-w-2xl text-lg text-white/90">
              Don&apos;t let your car lose its value. Book your premium detail today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 bg-white text-primary hover:bg-white/90 font-bold px-10 border-0" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 border-white tex-white hover:bg-white/20 px-10 text-glow text-white" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
