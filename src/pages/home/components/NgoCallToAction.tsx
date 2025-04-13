const NgoCallToAction = () => {
    return (
        <section id="contact">
            {/* Top CTA Section */}
            <div className="bg-gray-900 text-white py-16 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Are you an NGO looking to expand your volunteer program?
                </h2>
                <p className="text-md md:text-lg font-light mb-8">
                    Join our platform to reach dedicated volunteers and
                    streamline your operations
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="bg-white text-gray-900 font-medium px-6 py-2 rounded-md shadow">
                        Register Your NGO
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Email Subscription Section */}
            <div className="py-14 px-4 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    Stay Updated
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                    Get monthly updates on how your support is changing lives
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 border rounded-md w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NgoCallToAction;
