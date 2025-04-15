import { Navigate, Route, Routes } from "react-router-dom";

import VProfileFormPage from "./VolunteerProfileForm";
import VolunteerProfile from "./VolunteerProfilePage";

const VolunteerProfileRoute = () => {
  return (
    <Routes>
      {/* NO PROFILE THEN CREATE ELSE SHOW PROFILE */}
      <Route path="/profile" element={<VolunteerProfile />} />
      {/* <Route path="/:id" element={<VolunteerProfile />} />{" "} */}

      {/* CREATE PROFILE */}
      {/* <Route path="/edit" element={<ProfileForm />} /> */}
      <Route path="/profile/create" element={<VProfileFormPage />} />
    </Routes>
  );
};

export default VolunteerProfileRoute;
