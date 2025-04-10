import { Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NgoLayout from "./layouts/NgoLayout";

function NgoPage() {
    return (
        <Routes>
            <Route element={<NgoLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default NgoPage;
