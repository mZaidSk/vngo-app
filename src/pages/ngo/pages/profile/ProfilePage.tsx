import { Navigate, Route, Routes } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import NGOProfile from "./components/NGOProfile";

const ProfilePage = () => {
    return (
        <Routes>
            <Route path="/" element={<NGOProfile />} />
            <Route path="/:id" element={<NGOProfile />} />{" "}
            {/*for other ngo profile */}
            <Route path="/edit/:id" element={<ProfileForm />} />
            <Route path="/edit" element={<Navigate to="/ngo/profile" />} />
        </Routes>
    );
};

export default ProfilePage;
