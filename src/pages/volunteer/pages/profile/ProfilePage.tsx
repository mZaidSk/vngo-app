import { Route, Routes } from "react-router-dom";
import VolunteerProfile from "./components/VolunteerProfile";
import VolunteerForm from "./components/VolunteerForm";

const ProfilePage = () => {
    return (
        <Routes>
            <Route path="/" element={<VolunteerProfile />} />
            <Route path="/form" element={<VolunteerForm />} />
            <Route path="/form/:id" element={<VolunteerForm />} />
            {/* <Route path="/edit/:id" element={<AddEditActivity />} /> */}
            {/* <Route path="/register" element={<RegisterForm />} /> */}
        </Routes>
    );
};

export default ProfilePage;
