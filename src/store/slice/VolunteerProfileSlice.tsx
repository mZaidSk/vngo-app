// src/store/slices/volunteerProfileSlice.ts

import {
    createVolunteerProfileApi,
    getAllVolunteerProfilesApi,
    getVolunteerProfileByIdApi,
    updateVolunteerProfileApi,
    deleteVolunteerProfileApi,
    getVolunteerProfileByUserIdApi,
} from "@/services/VolunteerProfileService";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Thunks

export const createVolunteerProfile = createAsyncThunk(
    "volunteerProfile/create",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await createVolunteerProfileApi(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Creation failed");
        }
    }
);

export const getAllVolunteerProfiles = createAsyncThunk(
    "volunteerProfile/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllVolunteerProfilesApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching all profiles failed"
            );
        }
    }
);

export const getVolunteerProfileById = createAsyncThunk(
    "volunteerProfile/getById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getVolunteerProfileByIdApi(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching profile failed"
            );
        }
    }
);

export const getVolunteerProfileByUserId = createAsyncThunk(
    "volunteerProfile/getByUserId",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getVolunteerProfileByUserIdApi(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching profile failed"
            );
        }
    }
);

export const updateVolunteerProfile = createAsyncThunk(
    "volunteerProfile/update",
    async (
        { id, payload }: { id: string; payload: any },
        { rejectWithValue }
    ) => {
        try {
            const response = await updateVolunteerProfileApi(id, payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Update failed");
        }
    }
);

export const deleteVolunteerProfile = createAsyncThunk(
    "volunteerProfile/delete",
    async (id: string, { rejectWithValue }) => {
        try {
            await deleteVolunteerProfileApi(id);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Delete failed");
        }
    }
);

// State
interface VolunteerProfileState {
    profile: any | null;
    profiles: any[];
    loading: boolean;
    error: string | null;
}

const initialState: VolunteerProfileState = {
    profile: null,
    profiles: [],
    loading: false,
    error: null,
};

// Slice
const volunteerProfileSlice = createSlice({
    name: "volunteerProfile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create
            .addCase(createVolunteerProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                createVolunteerProfile.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                createVolunteerProfile.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get All
            .addCase(getAllVolunteerProfiles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getAllVolunteerProfiles.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profiles = action.payload;
                }
            )
            .addCase(
                getAllVolunteerProfiles.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get By ID
            .addCase(getVolunteerProfileById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getVolunteerProfileById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                getVolunteerProfileById.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get By User ID
            .addCase(getVolunteerProfileByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getVolunteerProfileByUserId.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                getVolunteerProfileByUserId.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Update
            .addCase(updateVolunteerProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                updateVolunteerProfile.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                updateVolunteerProfile.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Delete
            .addCase(deleteVolunteerProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                deleteVolunteerProfile.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.loading = false;
                    state.profiles = state.profiles.filter(
                        (p: any) => p.id !== action.payload
                    );
                }
            )
            .addCase(
                deleteVolunteerProfile.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export default volunteerProfileSlice.reducer;
