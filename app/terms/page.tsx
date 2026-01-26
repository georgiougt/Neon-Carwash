
export default function TermsPage() {
    return (
        <div className="container py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <h1 className="font-outfit text-3xl font-bold uppercase mb-8">Terms of Service</h1>
            <div className="space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h2 className="text-xl font-bold text-foreground">2. Service Booking</h2>
                <p>Bookings made through this website are requests only and are subject to confirmation. Prices are estimates and may vary based on vehicle condition.</p>

                <h2 className="text-xl font-bold text-foreground">3. Cancellations</h2>
                <p>We require at least 24 hours notice for cancellations. Failure to do so may result in a cancellation fee.</p>

                <h2 className="text-xl font-bold text-foreground">4. Liability</h2>
                <p>While we take every precaution, NeonWash is not liable for pre-existing damage or damage caused by loose items left in the vehicle.</p>
            </div>
        </div>
    )
}
