import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
    createActivityApi,
    getAllActivitiesApi,
    getActivityByIdApi,
    getActivitiesByNgoIdApi,
    getActivitiesByUserIdApi,
    updateActivityApi,
    deleteActivityApi,
} from "@/services/ActivityService";

// Async Thunks
export const createActivity = createAsyncThunk(
    "activity/createActivity",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await createActivityApi(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to create activity"
            );
        }
    }
);

export const getAllActivities = createAsyncThunk(
    "activity/getAllActivities",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllActivitiesApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to fetch activities"
            );
        }
    }
);

export const getActivityById = createAsyncThunk(
    "activity/getActivityById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getActivityByIdApi(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to fetch activity"
            );
        }
    }
);

export const getActivitiesByNgoId = createAsyncThunk(
    "activity/getActivitiesByNgoId",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getActivitiesByNgoIdApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to fetch NGO activities"
            );
        }
    }
);

export const getActivitiesByUserId = createAsyncThunk(
    "activity/getActivitiesByUserId",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getActivitiesByUserIdApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to fetch user activities"
            );
        }
    }
);

export const updateActivity = createAsyncThunk(
    "activity/updateActivity",
    async (
        { id, payload }: { id: string; payload: any },
        { rejectWithValue }
    ) => {
        try {
            const response = await updateActivityApi(id, payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to update activity"
            );
        }
    }
);

export const deleteActivity = createAsyncThunk(
    "activity/deleteActivity",
    async (id: string, { rejectWithValue }) => {
        try {
            await deleteActivityApi(id);
            return id;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Failed to delete activity"
            );
        }
    }
);

// State Interface
interface ActivityState {
    activity: any | null;
    activities: any;
    loading: boolean;
    error: string | null;
}

const initialState: ActivityState = {
    activities: [],
    activity: null,
    loading: false,
    error: null,
};

// Slice
const activitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {
        clearSelectedActivity: (state) => {
            state.activity = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Create
            .addCase(createActivity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                createActivity.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.activities.push(action.payload);
                }
            )
            .addCase(
                createActivity.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // All
            .addCase(getAllActivities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getAllActivities.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.activities = action.payload;
                }
            )
            .addCase(
                getAllActivities.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // By ID
            .addCase(getActivityById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getActivityById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.activity = action.payload;
                }
            )
            .addCase(
                getActivityById.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // By NGO
            .addCase(getActivitiesByNgoId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getActivitiesByNgoId.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.activities = action.payload;
                }
            )
            .addCase(
                getActivitiesByNgoId.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // By User
            .addCase(getActivitiesByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getActivitiesByUserId.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.activities = action.payload;
                }
            )
            .addCase(
                getActivitiesByUserId.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Update
            .addCase(updateActivity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                updateActivity.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                }
            )
            .addCase(
                updateActivity.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Delete
            .addCase(deleteActivity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                deleteActivity.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.loading = false;
                }
            )
            .addCase(
                deleteActivity.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export const { clearSelectedActivity } = activitySlice.actions;
export default activitySlice.reducer;
