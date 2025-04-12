import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                {/* Branding */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">
                        Volunteer Connect
                    </h2>
                    <p className="text-sm text-gray-300">
                        Making volunteering accessible and impactful.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="text-sm space-y-1 text-gray-300">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">
                            <Mail size={16} /> info@volunteerconnect.org
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +1 (555) 123-4567
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin size={16} /> 123 Volunteer St, City
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-gray-300">
                        <a href="#" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="border-gray-700 mb-4" />

            <div className="text-center text-sm text-gray-400 space-x-4">
                <p className="mb-2">
                    © 2025 Volunteer Connect. All rights reserved.
                </p>
                <a href="#" className="hover:underline">
                    Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:underline">
                    Terms & Conditions
                </a>
            </div>
        </footer>
    );
};

export default Footer;
