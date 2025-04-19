import { Route, Routes } from "react-router-dom";
import ExploreNgo from "./components/ExploreNgo.";
import Profile from "@/pages/ngo/pages/profile/components/Profile";

const ExplorePage = () => {
    return (
        <Routes>
            <Route path="/" element={<ExploreNgo />} />
            <Route path="/:ngoId" element={<Profile />} />
            {/* <Route path="/:id" element={<ActivityDetails />} />
            <Route path="/:id/volunteer" element={<RegisteredVolunteer />} />
            <Route path="/form" element={<ActivityForm />} />
            <Route path="/form/:id" element={<ActivityForm />} /> */}
            {/* <Route path="/edit/:id" element={<AddEditActivity />} /> */}
            {/* <Route path="/register" element={<RegisterForm />} /> */}
        </Routes>
    );
};

export default ExplorePage;
