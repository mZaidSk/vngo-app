import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="w-full px-6 py-4 shadow-md bg-white flex items-center">
                <div className="flex items-center gap-2 text-xl font-semibold text-[#0A1128]">
                    {/* You can replace this emoji with an actual logo image */}
                    <span role="img" aria-label="logo">
                        🚀
                    </span>
                    <span>App Name</span>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 flex items-center justify-center">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="text-center py-4 text-sm text-gray-500 space-x-4">
                <span>© 2025 Your Company. All rights reserved.</span>

                <a href="#" className="hover:underline">
                    Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                    Terms of Service
                </a>
            </footer>
        </div>
    );
};

export default AuthLayout;
