import { Navigate, Route, Routes } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import NGOProfile from "./components/NGOProfile";

const ProfilePage = () => {
    return (
        <Routes>
            <Route path="/" element={<NGOProfile />} />
            <Route path="/:id" element={<NGOProfile />} />{" "}
            {/*for other ngo profile */}
            <Route path="/edit" element={<ProfileForm />} />
            <Route path="/create" element={<ProfileForm />} />
        </Routes>
    );
};

export default ProfilePage;
