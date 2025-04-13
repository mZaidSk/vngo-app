import { Navigate, Route, Routes } from "react-router-dom";
import VolunteerLayout from "./layout/VolunteerLayout";
import ExploreActivities from "./pages/feed/ExploreActivities";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ViewActivityDetails from "./pages/activity/ViewActivityDetails";
import SettingsLayout from "./setting/SettingLayout";
import VolunteerProfile from "./setting/Profile";
import SecurityPage from "./setting/Security";
import NotificationPreferences from "./setting/Notification";
import VolunteerPrivacySettings from "./setting/Privacy";
import AccountSettings from "./setting/Account";
import ExploreNGOsPage from "./pages/exploreNgo/ExploreNGO";
import ViewNGOProfilePage from "./pages/exploreNgo/ViewNGOProfile";
import ProfilePage from "./pages/profile/ProfilePage";

// import DashboardPage from "./pages/volunteer/DashboardPage";
// import ExploreActivitiesPage from "./pages/volunteer/ExploreActivitiesPage";
// import MyApplicationsPage from "./pages/volunteer/MyApplicationsPage";
// import MyEventsPage from "./pages/volunteer/MyEventsPage";
// import CertificatesPage from "./pages/volunteer/CertificatesPage";
// import SettingsPage from "./pages/volunteer/SettingsPage";

function VolunteerPage() {
  return (
    <Routes>
      <Route element={<VolunteerLayout />}>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/feed" element={<ExploreActivities />} />
        <Route path="/feed/:id" element={<ViewActivityDetails />} />
        <Route path="/explore" element={<ExploreNGOsPage />} />
        <Route path="/explore/:ngoId" element={<ViewNGOProfilePage />} />
        {/* 
        <Route path="/events" element={<MyEventsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />*/}
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<VolunteerProfile />} />
          <Route path="security" element={<SecurityPage />} />

          <Route path="notifications" element={<NotificationPreferences />} />
          <Route path="privacy" element={<VolunteerPrivacySettings />} />
          <Route path="account-actions" element={<AccountSettings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default VolunteerPage;
