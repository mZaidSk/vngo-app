import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const getBreadcrumbLabel = (value: string, index: number): string => {
        const fullPath = pathnames.slice(0, index + 1).join("/");

        if (fullPath.startsWith("ngo/documents/edit")) return "Edit Document";
        if (fullPath.startsWith("ngo/profile/edit")) return "Edit Profile"; // if you add this page in future

        // fallback
        const segmentMap: Record<string, string> = {
            ngo: "NGO",
            profile: "Profile",
            documents: "Documents",
            edit: "Edit", // default neutral
            add: "Create",
        };

        return segmentMap[value] ?? decodeURIComponent(value);
    };

    return (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hover:underline font-bold">Portal</span>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                // // 🛑 Skip numeric or UUID-looking segments (assumes it's an ID)
                // const isProbablyId = /^[0-9a-fA-F-]{10,}$/.test(value); // tweak as needed

                // if (isProbablyId) return null;

                const label = getBreadcrumbLabel(value, index);

                return (
                    <span key={to} className="flex items-center gap-2">
                        <span>/</span>
                        {isLast ? (
                            <span className="text-foreground font-medium capitalize">
                                {label}
                            </span>
                        ) : (
                            <Link
                                to={to}
                                className="hover:underline capitalize"
                            >
                                {label}
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};
