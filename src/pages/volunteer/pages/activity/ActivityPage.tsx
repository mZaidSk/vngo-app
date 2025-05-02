import { Route, Routes } from "react-router-dom";
import Activity from "./components/Activity";
import ActivityContainer from "./components/ActivityContainer";
import ActivityDetails from "@/pages/ngo/pages/activity/components/ActivityDetails";

const ActivityPage = () => {
    return (
        <Routes>
            <Route path="/" element={<ActivityContainer />} />
            <Route path="/:id" element={<ActivityDetails />} />
            {/* <Route path="/:id" element={<ActivityDetails />} />
            <Route path="/:id/volunteer" element={<RegisteredVolunteer />} />
            <Route path="/form" element={<ActivityForm />} />
            <Route path="/form/:id" element={<ActivityForm />} /> */}
            {/* <Route path="/edit/:id" element={<AddEditActivity />} /> */}
            {/* <Route path="/register" element={<RegisterForm />} /> */}
        </Routes>
    );
};

export default ActivityPage;
