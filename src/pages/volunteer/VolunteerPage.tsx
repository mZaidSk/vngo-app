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

function VolunteerPage() {
  return (
    <Routes>
      <Route element={<VolunteerLayout />}>
        <Route path="/" element={<VolunteerDashboardPage />} />
        <Route path="/feed/*" element={<ExploreActivities />} />
        <Route path="/feed/:id" element={<ViewActivityDetails />} />
        <Route path="/explore" element={<ExploreNGOsPage />} />
        <Route path="/explore/:ngoId" element={<ViewNGOProfilePage />} />
        <Route path="/profile" element={<VolunteerProfile />} />
        <Route path="/profile/create" element={<VProfileFormPage />} />
        {/* 
        <Route path="/events" element={<MyEventsPage />} />
       */}
        <Route path="/settings" element={<SettingsLayout />}>
          {/* SHOW PROFILE */}
          <Route index element={<VolunteerGeneralSettings />} />
          <Route path="security" element={<SecurityPage />} />

          <Route path="notifications" element={<NotificationPreferences />} />
          <Route path="privacy" element={<VolunteerPrivacyPolicy />} />
          <Route path="tc" element={<TPtandcVolunteer />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default VolunteerPage;
