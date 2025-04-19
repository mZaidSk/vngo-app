import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface MenuItem {
    label: string;
    icon: React.ElementType;
    to: string;
}

const SettingLayout = ({ menuItems }: { menuItems: MenuItem[] }) => {
    const authSelector = useSelector((state: RootState) => state.auth.user);
    return (
        <div className="flex h-[calc(100vh-65px)]">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r p-4 overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Settings</h2>
                <nav className="space-y-1">
                    {menuItems.map(({ label, icon: Icon, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={
                                to ===
                                (authSelector?.data?.role === "NGO"
                                    ? "/ngo/settings"
                                    : "/volunteer/settings")
                            }
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition hover:bg-gray-100",
                                    isActive
                                        ? "bg-gray-100 text-primary font-semibold border-l-4 border-primary"
                                        : "text-muted-foreground"
                                )
                            }
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 bg-muted/50">
                <Outlet />
            </main>
        </div>
    );
};

export default SettingLayout;
