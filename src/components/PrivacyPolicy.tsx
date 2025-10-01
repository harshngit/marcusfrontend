export default function PrivacyPolicy() {
    return (
        <section id="privacy" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <h2>1. Overview</h2>
                    <p>
                        Marcus provides trading analytics, alerts and educational content (the "Services"). This Privacy Policy explains how
                        we collect, use, and safeguard your information when you use our website and Services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <ul>
                        <li>
                            Account Information: name, email and authentication details when you create or manage an account.
                        </li>
                        <li>
                            Usage Data: pages viewed, features used, clicks, referrer, and approximate location derived from IP.
                        </li>
                        <li>
                            Device/Data: browser type and version, device identifiers, operating system and cookie identifiers.
                        </li>
                        <li>
                            Communications: your messages and feedback when you contact support.
                        </li>
                    </ul>

                    <h2>3. How We Use Information</h2>
                    <ul>
                        <li>Provide and operate the Services, including alerts and dashboards.</li>
                        <li>Improve performance, reliability and user experience.</li>
                        <li>Detect, prevent and address security or technical issues.</li>
                        <li>Communicate updates, announcements, and service-related messages.</li>
                    </ul>

                    <h2>4. Cookies and Tracking</h2>
                    <p>
                        We use cookies and similar technologies to keep you signed in, remember preferences (e.g., theme), and understand
                        product usage. You can control cookies via your browser settings. Disabling cookies may affect certain features.
                    </p>

                    <h2>5. Data Sharing</h2>
                    <p>
                        We do not sell your personal information. We may share limited data with trusted processors who help us operate the
                        Services (e.g., analytics, hosting), under contracts that require appropriate safeguards.
                    </p>

                    <h2>6. Data Retention</h2>
                    <p>
                        We retain personal data only as long as necessary for the purposes outlined here or as required by law. We anonymize
                        or delete data when it is no longer needed.
                    </p>

                    <h2>7. Your Rights</h2>
                    <p>
                        Depending on your location, you may have rights to access, correct, delete or export your personal data. To exercise
                        these rights, contact us using the details below.
                    </p>

                    <h2>8. Security</h2>
                    <p>
                        We employ administrative, technical and organizational measures to protect data. However, no method of transmission
                        over the Internet or electronic storage is completely secure.
                    </p>

                    <h2>9. Children</h2>
                    <p>
                        Our Services are not directed to children under 13 (or relevant age in your jurisdiction). We do not knowingly
                        collect personal data from children.
                    </p>

                    <h2>10. Changes to this Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will post the new version on this page and update the "Last
                        updated" date above.
                    </p>

                    <h2>11. Contact</h2>
                    <p>
                        For privacy questions or requests, contact us at <a href="mailto:support@marcus.example">support@marcus.example</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}


