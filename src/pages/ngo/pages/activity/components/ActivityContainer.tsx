// ActivityContainer.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getActivitiesByNgoId } from "@/store/slice/ActivitySlice";
import ActivityView from "./ActivityView";

const ActivityContainer = () => {
    const dispatch = useDispatch<AppDispatch>();

    const activities = useSelector(
        (state: RootState) => state.activity.ngo_activities
    );

    useEffect(() => {
        dispatch(getActivitiesByNgoId());
    }, [dispatch]);

    return <ActivityView activities={activities?.data || []} />;
};

export default ActivityContainer;
