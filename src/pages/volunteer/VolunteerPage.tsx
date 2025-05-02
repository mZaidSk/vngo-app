import { Navigate, Route, Routes } from "react-router-dom";
import VolunteerLayout from "./layout/VolunteerLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import FeedPage from "./pages/feed/FeedPage";
import ActivityPage from "./pages/activity/ActivityPage";
import ExplorePage from "./pages/explore/ExplorePage";
import ProfilePage from "./pages/profile/ProfilePage";
import SettingPage from "../ngo/pages/setting/SettingPage";
import { FileText, LayoutGrid, Lock, ShieldCheck } from "lucide-react";

const menuItems = [
    { label: "General Settings", icon: LayoutGrid, to: "/volunteer/settings" },
    {
        label: "Privacy Policy",
        icon: ShieldCheck,
        to: "/volunteer/settings/privacy-policy",
    },
    {
        label: "Terms & Conditions",
        icon: FileText,
        to: "/volunteer/settings/terms-conditions",
    },
    { label: "Security", icon: Lock, to: "/volunteer/settings/security" },
];

function VolunteerPage() {
    return (
        <Routes>
            <Route element={<VolunteerLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/feed/*" element={<FeedPage />} />
                <Route path="/explore/*" element={<ExplorePage />} />
                <Route path="/activity/*" element={<ActivityPage />} />
                <Route path="/profile/*" element={<ProfilePage />} />
                <Route
                    path="/settings/*"
                    element={<SettingPage menuItems={menuItems} />}
                />
                {/*                 
                    <Route path="/events" element={<MyEventsPage />} />
                */}
                {/* <Route path="/settings" element={<SettingsLayout />}>
                    <Route index element={<VolunteerGeneralSettings />} />
                    <Route path="security" element={<SecurityPage />} />
                    <Route
                        path="notifications"
                        element={<NotificationPreferences />}
                    />
                    <Route
                        path="privacy"
                        element={<VolunteerPrivacyPolicy />}
                    />
                    <Route path="tc" element={<TPtandcVolunteer />} />
                </Route> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default VolunteerPage;
