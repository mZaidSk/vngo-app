import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authReducer from "./slice/AuthSlice"; // Import the auth slice
import ngoProfileReducer from "./slice/NgoProfileSlice";
import activityReducer from "./slice/ActivitySlice";

// Configure the store
const store = configureStore({
    reducer: {
        auth: authReducer, // Add reducers here
        ngoProfile: ngoProfileReducer, // Add reducers here
        activity: activityReducer, // Add reducers here
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
