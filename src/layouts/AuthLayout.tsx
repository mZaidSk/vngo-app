import Footer from "@/components/common/home-components/Footer";
import Navbar from "@/components/common/home-components/Navbar";
import { Handshake } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            {/* <header className="w-full px-6 py-4 shadow-md bg-white flex items-center">
                <div className="flex items-center gap-2 text-xl font-semibold text-[#0A1128]">
                    <div className="flex items-center gap-2">
                        <Handshake size={24} className="text-black" />
                        <Link
                            to={"/"}
                            className="text-lg font-semibold text-black"
                        >
                            Volunteer Connect
                        </Link>
                    </div>
                </div>
            </header> */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 flex items-center justify-center my-14">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AuthLayout;
