import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authReducer from "./slice/AuthSlice"; // Import the auth slice
import ngoProfileReducer from "./slice/NgoProfileSlice";
import volunteerReducer from "./slice/VolunteerProfileSlice";
import activityReducer from "./slice/ActivitySlice";
import applicationReducer from "./slice/ApplicationSlice";
import commentReducer from "./slice/CommentSlice";

// Configure the store
const store = configureStore({
    reducer: {
        auth: authReducer,
        ngoProfile: ngoProfileReducer,
        volunteerProfile: volunteerReducer,
        activity: activityReducer,
        application: applicationReducer,
        comment: commentReducer,
    },
});

// login /user -> auth.user

// profile user info if store user: user data show else dispach(getloginuser)

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create typed hooks for usage in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
