import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NgoLayout from "./layouts/NgoLayout";
import FeedPage from "./pages/feed/FeedPage";
import ActivityPage from "./pages/activity/ActivityPage";

function NgoPage() {
    return (
        <Routes>
            <Route element={<NgoLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/activities/*" element={<ActivityPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default NgoPage;
