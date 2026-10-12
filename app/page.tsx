import Link from "next/link"
import Image from "next/image"
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
      {/* 1. HERO SECTION WITH REAL PEXELS AUTOMOTIVE BACKDROP */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden pt-20 text-center">
        {/* Real Automotive Backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Neon Detailing Studio Backdrop"
            fill
            priority
            className="object-cover object-center opacity-30 brightness-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />

        <div className="container relative z-10 flex flex-col items-center gap-6 px-4 md:px-6">
          <div className="inline-flex items-center rounded-full border border-primary/50 bg-black/60 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md shadow-[0_0_15px_rgba(255,0,85,0.25)]">
            <Sparkles className="mr-2 h-4 w-4" />
            Premium Auto Detailing Atelier
          </div>
          <h1 className="font-outfit text-5xl font-extrabold uppercase tracking-tight sm:text-7xl md:text-8xl text-glow">
            Welcome to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-pulse">
              {siteConfig.name}
            </span>
          </h1>
          <p className="max-w-[800px] text-lg text-zinc-300 md:text-xl font-light leading-relaxed backdrop-blur-sm bg-black/40 p-4 rounded-xl border border-white/5">
            The ultimate centre for your luxury car care services in <span className="text-secondary font-semibold">{siteConfig.location}</span>.
            We deliver unmatched care with multi-stage deionized water filtration and ceramic technology.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-4">
            <Button size="lg" className="h-14 px-10 font-bold text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_25px_-5px_var(--primary)] text-glow min-w-[180px] rounded-xl" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-lg border-primary/40 bg-black/50 text-white hover:bg-primary/10 hover:text-primary min-w-[180px] rounded-xl backdrop-blur-md" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
        <Separator className="absolute bottom-0 w-[80%] opacity-30 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* 2. TRUST STRIP */}
      <section className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center gap-2 text-center">
            <Trophy className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-bold text-white">Premium Products</h3>
            <p className="text-xs text-muted-foreground">Certified pH-neutral & non-abrasive</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <ShieldCheck className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-bold text-white">Paint-Safe</h3>
            <p className="text-xs text-muted-foreground">Korean microfiber & two-bucket method</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Droplets className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-bold text-white">Spot-Free Water</h3>
            <p className="text-xs text-muted-foreground">Deionized reverse-osmosis filtration</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Clock className="h-8 w-8 text-secondary mb-2" />
            <h3 className="font-bold text-white">Fast & Thorough</h3>
            <p className="text-xs text-muted-foreground">Precision detailing without delays</p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="font-outfit text-4xl font-bold uppercase tracking-tight md:text-5xl text-glow">
            Our <span className="text-primary">Featured Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            Choose from our specialized auto detailing packages designed to protect and revitalize your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full px-8 uppercase tracking-wider font-bold text-xs" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 4. SIGNATURE PACKAGE SECTION WITH REAL PEXELS VISUAL */}
      {signaturePackage && (
        <section className="relative overflow-hidden bg-card/40 py-20 border-y border-border/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-bold text-secondary uppercase tracking-widest border border-secondary/30">
                  ★ Studio Signature Choice
                </div>
                <h2 className="font-outfit text-4xl font-black uppercase leading-tight md:text-6xl text-white">
                  {signaturePackage.name}
                </h2>
                <p className="text-lg text-zinc-300 font-light leading-relaxed">
                  {signaturePackage.longDescription}
                </p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {signaturePackage.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-zinc-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button size="lg" className="h-14 px-10 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground text-glow shadow-[0_0_30px_-5px_var(--primary)] w-full sm:w-auto rounded-xl" asChild>
                    <Link href={`/book?service=${signaturePackage.slug}`}>
                      Book This Package • From €{signaturePackage.priceFrom}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Real Photography Feature Display */}
              <div className="relative aspect-square w-full max-w-[500px] justify-self-center lg:justify-self-end rounded-2xl overflow-hidden border border-primary/40 shadow-[0_0_40px_rgba(255,0,85,0.25)] group">
                <Image
                  src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Showroom Mirror Ceramic Coating Finish"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-black font-bold uppercase text-[11px] px-3 py-1 rounded">
                  Ceramic 9H Shield
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-outfit text-2xl font-black uppercase text-white">Showroom Mirror Finish</h3>
                  <p className="text-secondary text-xs uppercase tracking-widest font-bold mt-1">Multi-Stage Machine Polish Included</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PROCESS SECTION */}
      <section className="container px-4 md:px-6 py-12">
        <h2 className="font-outfit text-3xl md:text-5xl font-black uppercase text-center mb-16 text-white">
          The Detailing <span className="text-secondary">Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Check-in", desc: "Digital inspection & paint assessment", icon: CheckCircle },
            { title: "Pre-Rinse", desc: "Dense snow foam bath & decontamination", icon: Droplets },
            { title: "Detailing", desc: "Two-bucket hand wash & interior steam", icon: Sparkles },
            { title: "Inspection", desc: "Ceramic sealant & final QC signoff", icon: Trophy },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group p-6 rounded-2xl border border-white/5 bg-card/30 hover:border-primary/50 transition-colors">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-background transition-all group-hover:border-primary group-hover:shadow-[0_0_20px_-5px_var(--primary)]">
                <step.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-outfit text-xl font-bold uppercase mb-2 text-white">{i + 1}. {step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED TESTIMONIALS WITH REAL PORTRAITS */}
      <section className="container px-4 md:px-6 bg-secondary/5 py-16 rounded-3xl border border-secondary/10">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-black uppercase text-white">Verified Client Reviews</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">5.0 Star Average • Limassol, Cyprus</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Alex K.",
              car: "BMW M4 Owner",
              text: "Absolutely incredible work. The paint correction took out all swirl marks and the ceramic hydrophobic spray is magic. Best in Limassol!",
              avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
            },
            {
              name: "Maria S.",
              car: "Porsche Macan GTS",
              text: "The interior steam extraction removed coffee stains I thought were permanent. Leather feels like brand new showroom leather again.",
              avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
            },
            {
              name: "George P.",
              car: "Audi RS3 Sedan",
              text: "Flawless execution. The team cares about the cars as much as the owners. Water just sheets right off in heavy rain.",
              avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
            }
          ].map((review, i) => (
            <div key={i} className="rounded-xl border border-border/50 bg-background/70 p-6 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-primary">
                  ★★★★★
                </div>
                <p className="text-sm text-zinc-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-primary/50"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{review.name}</h4>
                  <p className="text-[11px] text-primary font-mono">{review.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
