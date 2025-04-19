import { Navigate, Route, Routes } from "react-router-dom";
import VolunteerLayout from "./layout/VolunteerLayout";
import ExploreActivities from "./pages/feed/ExploreActivities";
import ViewActivityDetails from "./pages/activity/ViewActivityDetails";
import ExploreNGOsPage from "./pages/exploreNgo/ExploreNGO";
import ViewNGOProfilePage from "./pages/exploreNgo/ViewNGOProfile";

import VolunteerDashboardPage from "./pages/dashboard/DashboardPage";
import SettingsLayout from "./setting/layout/SettingLayout";
import SecurityPage from "./setting/component/Security";
// import VolunteerProfile from "./pages/profile/VolunteerProfilePage";
import NotificationPreferences from "./setting/component/Notification";
import VolunteerPrivacySettings from "./setting/component/GeneralSetting";
import AccountSettings from "./setting/component/Account";
import VProfileFormPage from "./pages/profile/VolunteerProfileForm";
import GeneralSetting from "../ngo/pages/setting/components/GeneralSetting";
import VolunteerGeneralSettings from "./setting/component/GeneralSetting";
import VolunteerPrivacyPolicy from "./setting/component/PrivacyPolicy";
import TPtandcVolunteer from "./setting/component/TPtandcVolunteer";
import VolunteerProfile from "./pages/profile/VolunteerProfile";
import ExploreNgo from "./pages/exploreNgo/ExploreNgo.";
import NGOProfile from "../ngo/pages/profile/components/NGOProfile";
import Profile from "../ngo/pages/profile/components/Profile";
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
