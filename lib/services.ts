export interface Service {
    slug: string
    name: string
    shortDescription: string
    longDescription: string
    duration: string
    priceFrom: number
    includes: string[]
    addOns: { name: string; price: number }[]
    faqs: { question: string; answer: string }[]
    category: "Wash" | "Interior" | "Detailing" | "Protection"
    gradient: string
}

export const services: Service[] = [
    {
        slug: "exterior-wash",
        name: "Exterior Wash",
        shortDescription: "A premium hand wash to remove road grime and restore shine.",
        longDescription: "Our Exterior Wash is a gentle yet effective hand wash that removes dirt, dust, and road grime without scratching your paint. We use pH-neutral soaps and plush microfiber mitts.",
        duration: "45 min",
        priceFrom: 25,
        category: "Wash",
        includes: ["Pre-wash foam bath", "Gentle hand wash", "Wheel & tire cleaning", "Hand dry with microfiber", "Tire dressing"],
        addOns: [
            { name: "Spray Wax", price: 10 },
            { name: "Iron Decontamination", price: 15 },
        ],
        faqs: [
            { question: "Do you use brushes?", answer: "No, we use a 100% touchless or microfiber hand wash method to prevent swirls." },
        ],
        gradient: "from-pink-500/20 via-purple-500/20 to-blue-500/20",
    },
    {
        slug: "exterior-wax",
        name: "Exterior + Wax",
        shortDescription: "Hand wash plus a protective wax layer for lasting gloss.",
        longDescription: "Includes everything in our Exterior Wash, plus a layer of high-quality carnauba or synthetic wax to protect your paint and enhance depth and gloss.",
        duration: "1 hr 15 min",
        priceFrom: 45,
        category: "Wash",
        includes: ["Everything in Exterior Wash", "Clay bar spot treatment", "Hand wax application", "Exterior glass cleaning"],
        addOns: [
            { name: "Sealant Upgrade", price: 20 },
        ],
        faqs: [
            { question: "How long does the wax last?", answer: "Typically 1-3 months depending on weather conditions and maintenance." },
        ],
        gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
    },
    {
        slug: "interior-deep-clean",
        name: "Interior Deep Clean",
        shortDescription: "Revitalize your cabin with a thorough steam clean and vacuum.",
        longDescription: "We deep clean every inch of your interior, from carpets to dashboards. Includes steam cleaning, vacuuming, and conditioning of leather/plastics.",
        duration: "2 - 3 hrs",
        priceFrom: 80,
        category: "Interior",
        includes: ["Thorough vacuum", "Steam clean upholstery/carpets", "Leather cleaning & conditioning", "Dashboard & console detailing", "Interior glass"],
        addOns: [
            { name: "Ozone Treatment", price: 30 },
            { name: "Pet Hair Removal", price: 25 },
        ],
        faqs: [
            { question: "Will stains come out?", answer: "We treat all stains, but extraction results depend on the stain type and age." },
        ],
        gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    },
    {
        slug: "signature-wash",
        name: "Signature Wash",
        shortDescription: "Our most popular package: Inside & Out perfection.",
        longDescription: "The complete maintenance package. A thorough exterior wash and wax combined with a standard interior detail to make your car feel new again.",
        duration: "2.5 hrs",
        priceFrom: 120,
        category: "Detailing",
        includes: ["Exterior Wash + Spray Wax", "Interior Vacuum & Wipe Down", "Window Cleaning (In & Out)", "Door Jambs Cleaned", "Tire Shine"],
        addOns: [
            { name: "Deep Leather Care", price: 20 },
        ],
        faqs: [],
        gradient: "from-pink-600/20 via-rose-500/20 to-orange-500/20",
    },
    {
        slug: "engine-bay",
        name: "Engine Bay Cleaning",
        shortDescription: "Safe degreasing and dressing of your engine compartment.",
        longDescription: "We carefully cover sensitive components, degrease the engine bay, and apply a satin dressing for a factory-fresh look.",
        duration: "45 min",
        priceFrom: 40,
        category: "Detailing",
        includes: ["Degreasing blow-out", "Plastic dressing", "Hood underside cleaning"],
        addOns: [],
        faqs: [
            { question: "Is it safe?", answer: "Yes, we cover alternator and intake components and use low pressure." },
        ],
        gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    },
    {
        slug: "ceramic-spray-sealant",
        name: "Ceramic Spray Sealant",
        shortDescription: "Up to 6 months of hydrophobic protection and insane shine.",
        longDescription: "A step up from wax. We apply a ceramic-infused sealant that bonds to the paint, offering superior water beading and chemical resistance.",
        duration: "1.5 hrs",
        priceFrom: 65,
        category: "Protection",
        includes: ["Exterior Wash", "Iron Decontamination", "Ceramic Sealant Application", "Tire Shine"],
        addOns: [],
        faqs: [],
        gradient: "from-cyan-500/20 via-blue-600/20 to-indigo-500/20",
    },
    {
        slug: "full-detailing",
        name: "Full Detailing Package",
        shortDescription: "The works. Paint correction, deep interior, and protection.",
        longDescription: "Our flagship service. Includes single-stage paint polish to remove light swirls, full interior extraction, and sealant.",
        duration: "5 - 7 hrs",
        priceFrom: 250,
        category: "Detailing",
        includes: ["Everything in Signature Wash", "Machine Polish (One Step)", "Carpet Extraction", "Engine Bay Detail"],
        addOns: [
            { name: "Ceramic Coating (2 Year)", price: 150 },
        ],
        faqs: [],
        gradient: "from-fuchsia-600/20 via-pink-600/20 to-purple-600/20",
    },
    {
        slug: "pet-hair-removal",
        name: "Pet Hair Removal",
        shortDescription: "Specialized removal of embedded pet hair.",
        longDescription: "We use special tools to remove stubborn pet hair from carpets and fabric seats. Must be added to an interior service.",
        duration: "+45 min",
        priceFrom: 30,
        category: "Interior",
        includes: ["Heavy duty vacuuming", "Specialized hair removal tools"],
        addOns: [],
        faqs: [],
        gradient: "from-teal-500/20 via-green-500/20 to-emerald-500/20",
    },
    {
        slug: "headlight-restoration",
        name: "Headlight Restoration",
        shortDescription: "Restore clarity to cloudy and yellowed headlights.",
        longDescription: "We sand, polish, and seal your headlights to improve visibility and appearance.",
        duration: "1 hr",
        priceFrom: 50,
        category: "Detailing",
        includes: ["Wet sanding", "Machine polishing", "UV Protection sealant"],
        addOns: [],
        faqs: [],
        gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
    },
]
