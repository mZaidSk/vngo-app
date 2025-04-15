import { Route, Routes } from "react-router-dom";
import Activity from "./components/Activity";
import ActivityDetails from "./components/ActivityDetails";
import ActivityForm from "./components/ActivityForm";
import RegisteredVolunteer from "./components/RegisteredVolunteer";

const ActivityPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Activity />} />
            <Route path="/:id" element={<ActivityDetails />} />
            <Route path="/:id/volunteer" element={<RegisteredVolunteer />} />
            <Route path="/form" element={<ActivityForm />} />
            <Route path="/form/:id" element={<ActivityForm />} />
            {/* <Route path="/edit/:id" element={<AddEditActivity />} /> */}
            {/* <Route path="/register" element={<RegisterForm />} /> */}
        </Routes>
    );
};

export default ActivityPage;
