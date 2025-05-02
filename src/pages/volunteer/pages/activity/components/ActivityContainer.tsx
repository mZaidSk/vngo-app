// ActivityContainer.tsx
import { getAllActivities } from "@/store/slice/ActivitySlice";
import {
    getAllApplications,
    getApplicationsByUserId,
} from "@/store/slice/ApplicationSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityView from "./ActivityView";

const ActivityContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authSelector = useSelector((state: RootState) => state.auth.user);
    const applicationSelector = useSelector(
        (state: RootState) => state.application.applications
    );
    console.log(applicationSelector);

    const getApplications = () => {
        dispatch(getApplicationsByUserId(authSelector?.data?.user_id));
    };

    useEffect(() => {
        getApplications();
    }, []);

    return <ActivityView applications={applicationSelector?.data} />;
};

export default ActivityContainer;
