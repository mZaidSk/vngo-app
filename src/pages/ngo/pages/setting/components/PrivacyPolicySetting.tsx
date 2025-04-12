const PrivacyPolicySetting = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm space-y-6">
            <h1 className="text-2xl font-semibold">Privacy Policy</h1>
            <p className="text-sm text-gray-500">
                Last updated: January 15, 2025
            </p>

            <section>
                <h2 className="font-semibold mb-2">
                    1. Information We Collect
                </h2>
                <p>
                    We collect information that you provide directly to us,
                    including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Donation information</li>
                    <li>Volunteer registration details</li>
                </ul>
            </section>

            <section>
                <h2 className="font-semibold mb-2">
                    2. How We Use Your Information
                </h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Process donations</li>
                    <li>Send newsletters and updates</li>
                    <li>Coordinate volunteer activities</li>
                    <li>Improve our services</li>
                </ul>
            </section>

            <section>
                <h2 className="font-semibold mb-2">3. Information Sharing</h2>
                <p>
                    We do not sell or share your personal information with third
                    parties except as described in this policy.
                </p>
            </section>

            <section>
                <h2 className="font-semibold mb-2">4. Data Security</h2>
                <p>
                    We implement appropriate security measures to protect your
                    personal information.
                </p>
            </section>

            <section>
                <h2 className="font-semibold mb-2">5. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                </p>
                <div className="bg-gray-100 mt-2 p-4 rounded-md text-sm space-y-1">
                    <p>
                        <strong>Email:</strong> privacy@example-ngo.org
                    </p>
                    <p>
                        <strong>Phone:</strong> (555) 123-4567
                    </p>
                    <p>
                        <strong>Address:</strong> 123 NGO Street, City, Country
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicySetting;
