import { Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow-sm m-0 px-6 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Handshake size={24} className="text-black" />
                    <Link to={"/"} className="text-lg font-semibold text-black">
                        Volunteer Connect
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
                    <Link to="/#home" className="hover:text-gray-600">
                        Home
                    </Link>
                    <Link to="/#about" className="hover:text-gray-600">
                        About
                    </Link>
                    <Link to="/#projects" className="hover:text-gray-600">
                        Projects
                    </Link>
                    <Link to="/#contact" className="hover:text-gray-600">
                        Contact
                    </Link>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2">
                    <Link to={"/auth"}>
                        <button className="px-4 py-2 border border-gray-400 text-sm rounded-md hover:bg-gray-100 cursor-pointer">
                            Login
                        </button>
                    </Link>
                    <Link to={"/auth/register"}>
                        <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 cursor-pointer">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
