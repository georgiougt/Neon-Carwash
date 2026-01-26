
export default function PrivacyPage() {
    return (
        <div className="container py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <h1 className="font-outfit text-3xl font-bold uppercase mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-bold text-foreground">1. Data Collection</h2>
                <p>We collect personal information such as name, email, and phone number when you submit a booking request or contact form.</p>

                <h2 className="text-xl font-bold text-foreground">2. Use of Data</h2>
                <p>We use your data solely to communicate with you regarding your service appointments and inquiries. We do not sell your data to third parties.</p>

                <h2 className="text-xl font-bold text-foreground">3. Cookies</h2>
                <p>This website may use essential cookies to ensure proper functionality.</p>
            </div>
        </div>
    )
}
