import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NgoLayout from "./layouts/NgoLayout";
import FeedPage from "./pages/feed/FeedPage";
import ActivityPage from "./pages/activity/ActivityPage";
import SettingPage from "./pages/setting/SettingPage";
import { FileText, LayoutGrid, Lock, ShieldCheck } from "lucide-react";

const menuItems = [
    { label: "General Settings", icon: LayoutGrid, to: "/ngo/settings" },
    {
        label: "Privacy Policy",
        icon: ShieldCheck,
        to: "/ngo/settings/privacy-policy",
    },
    {
        label: "Terms & Conditions",
        icon: FileText,
        to: "/ngo/settings/terms-conditions",
    },
    { label: "Security", icon: Lock, to: "/ngo/settings/security" },
];

function NgoPage() {
    return (
        <Routes>
            <Route element={<NgoLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/feed/*" element={<FeedPage />} />
                <Route path="/profile/*" element={<ProfilePage />} />
                <Route path="/activities/*" element={<ActivityPage />} />
                <Route
                    path="/settings/*"
                    element={<SettingPage menuItems={menuItems} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default NgoPage;
