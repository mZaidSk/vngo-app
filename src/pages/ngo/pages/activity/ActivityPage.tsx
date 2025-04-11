import { Route, Routes } from "react-router-dom";
import Activity from "./components/Activity";
import AddEditActivity from "./components/AddEditActivity";
import ActivityDetails from "./components/ActivityDetails";

const ActivityPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Activity />} />
            <Route path="/:id" element={<ActivityDetails />} />
            <Route path="/add" element={<AddEditActivity />} />
            <Route path="/edit/:id" element={<AddEditActivity />} />
            {/* <Route path="/register" element={<RegisterForm />} /> */}
        </Routes>
    );
};

export default ActivityPage;
