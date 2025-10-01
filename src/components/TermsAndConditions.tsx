export default function TermsAndConditions() {
    return (
        <section id="terms" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Terms & Conditions</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing Marcus (the "Service"), you agree to be bound by these Terms & Conditions and our Privacy Policy.
                        If you do not agree, do not use the Service.
                    </p>

                    <h2>2. Services and Content</h2>
                    <p>
                        The Service provides market analytics, alerts and educational content including Option Apex, Option Clock, Swing
                        Spectrum, Insider Strategy, and Market Pulse. Content is for informational and educational purposes only and does not
                        constitute financial advice.
                    </p>

                    <h2>3. Accounts</h2>
                    <ul>
                        <li>You are responsible for maintaining the confidentiality of your credentials.</li>
                        <li>You are responsible for all activities under your account.</li>
                        <li>Provide accurate and up-to-date information.</li>
                    </ul>

                    <h2>4. Subscriptions and Billing</h2>
                    <ul>
                        <li>Plans and pricing are described on the Pricing section.</li>
                        <li>Charges recur automatically until you cancel.</li>
                        <li>Refunds are handled according to the plan terms and applicable law.</li>
                    </ul>

                    <h2>5. Acceptable Use</h2>
                    <ul>
                        <li>No unlawful, harmful or abusive behavior.</li>
                        <li>No attempts to reverse engineer, copy, or resell the Service.</li>
                        <li>No automated scraping or rate abuse.</li>
                    </ul>

                    <h2>6. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are the property of Marcus and its licensors and
                        are protected by intellectual property laws.
                    </p>

                    <h2>7. Disclaimers</h2>
                    <p>
                        The Service is provided on an "AS IS" basis without warranties of any kind. Trading involves risk; past performance is
                        not indicative of future results.
                    </p>

                    <h2>8. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Marcus shall not be liable for indirect, incidental, special, consequential or
                        punitive damages, or any loss of profits or revenues.
                    </p>

                    <h2>9. Termination</h2>
                    <p>
                        We may suspend or terminate access to the Service immediately for any breach of these Terms.
                    </p>

                    <h2>10. Changes to Terms</h2>
                    <p>
                        We may update these Terms from time to time. Changes are effective when posted on this page.
                    </p>

                    <h2>11. Contact</h2>
                    <p>
                        For questions about these Terms, contact <a href="mailto:support@marcus.example">support@marcus.example</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}


