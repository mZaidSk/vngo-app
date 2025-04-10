import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedPage from "./pages/feed/FeedPage";
import ProfilePage from "./pages/profile/ProfilePage";

const VolunteerPage = () => {
    return (
        <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
};

export default VolunteerPage;
