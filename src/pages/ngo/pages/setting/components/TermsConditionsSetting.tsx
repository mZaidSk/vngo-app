const TermsConditions = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-1">Terms & Conditions</h1>
            <p className="text-sm text-muted-foreground mb-6">
                Last updated: January 15, 2025
            </p>

            <div className="space-y-6 text-sm leading-6 text-gray-800">
                <section>
                    <h2 className="font-semibold mb-1">
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing and using our services, you accept and
                        agree to be bound by these Terms and Conditions.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">2. Donations</h2>
                    <p>All donations are:</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Final and non-refundable</li>
                        <li>Subject to payment processing fees</li>
                        <li>Tax-deductible where applicable by law</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">3. Volunteer Terms</h2>
                    <p>Volunteers must:</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Be 18 years or older</li>
                        <li>Complete required training</li>
                        <li>Follow our code of conduct</li>
                        <li>Sign liability waivers when required</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">
                        4. Intellectual Property
                    </h2>
                    <p>
                        All content, logos, and materials on this platform are
                        property of our NGO and protected by copyright laws.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">
                        5. Limitation of Liability
                    </h2>
                    <p>
                        Our NGO shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">6. Termination</h2>
                    <p>
                        We reserve the right to terminate or suspend access to
                        our services without prior notice.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">7. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in
                        accordance with the laws of [Jurisdiction].
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold mb-1">
                        8. Contact Information
                    </h2>
                    <div className="bg-muted/20 rounded-lg p-4 mt-2 text-sm">
                        <p className="mb-1">
                            For questions about these Terms & Conditions,
                            contact us at:
                        </p>
                        <p>
                            Email:{" "}
                            <a
                                className="text-blue-600 hover:underline"
                                href="mailto:legal@example-ngo.org"
                            >
                                legal@example-ngo.org
                            </a>
                        </p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Address: 123 NGO Street, City, Country</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
