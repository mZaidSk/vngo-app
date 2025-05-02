import { Route, Routes } from "react-router-dom";
import ActivityDetails from "./components/ActivityDetails";
import ActivityForm from "./components/ActivityForm";
import RegisteredVolunteer from "./components/RegisteredVolunteer";
import ActivityContainer from "./components/ActivityContainer";
import VolunteerProfile from "@/pages/volunteer/pages/profile/components/VolunteerProfile";

const ActivityPage = () => {
    return (
        <Routes>
            <Route path="/" element={<ActivityContainer />} />
            <Route path="/:id" element={<ActivityDetails />} />
            <Route path="/:id/volunteer" element={<RegisteredVolunteer />} />
            <Route path="/:id/volunteer/:vId" element={<VolunteerProfile />} />
            <Route path="/form" element={<ActivityForm />} />
            <Route path="/form/:id" element={<ActivityForm />} />
            {/* <Route path="/edit/:id" element={<AddEditActivity />} /> */}
            {/* <Route path="/register" element={<RegisterForm />} /> */}
        </Routes>
    );
};

export default ActivityPage;
