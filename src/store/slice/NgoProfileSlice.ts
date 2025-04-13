import {
    createNgoProfileApi,
    getAllNgoProfilesApi,
    getNgoProfileByIdApi,
    updateNgoProfileApi,
    deleteNgoProfileApi,
    getNgoProfileByUserIdApi,
} from "@/services/NgoProfileService";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Thunks

export const createNgoProfile = createAsyncThunk(
    "ngoProfile/create",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await createNgoProfileApi(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Creation failed");
        }
    }
);

export const getAllNgoProfiles = createAsyncThunk(
    "ngoProfile/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllNgoProfilesApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching all profiles failed"
            );
        }
    }
);

export const getNgoProfileById = createAsyncThunk(
    "ngoProfile/getById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getNgoProfileByIdApi(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching profile failed"
            );
        }
    }
);

export const getNgoProfileByUserId = createAsyncThunk(
    "ngoProfile/getByUserId",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getNgoProfileByUserIdApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching profile failed"
            );
        }
    }
);

export const updateNgoProfile = createAsyncThunk(
    "ngoProfile/update",
    async (
        { id, payload }: { id: string; payload: any },
        { rejectWithValue }
    ) => {
        try {
            const response = await updateNgoProfileApi(id, payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Update failed");
        }
    }
);

export const deleteNgoProfile = createAsyncThunk(
    "ngoProfile/delete",
    async (id: string, { rejectWithValue }) => {
        try {
            await deleteNgoProfileApi(id);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Delete failed");
        }
    }
);

// State
interface NgoProfileState {
    profile: any | null;
    profiles: any[];
    loading: boolean;
    error: string | null;
}

const initialState: NgoProfileState = {
    profile: null,
    profiles: [],
    loading: false,
    error: null,
};

// Slice
const ngoProfileSlice = createSlice({
    name: "ngoProfile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create
            .addCase(createNgoProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                createNgoProfile.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                createNgoProfile.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get All
            .addCase(getAllNgoProfiles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getAllNgoProfiles.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.profiles = action.payload;
                }
            )
            .addCase(
                getAllNgoProfiles.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get By ID
            .addCase(getNgoProfileById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getNgoProfileById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                getNgoProfileById.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get By User ID
            .addCase(getNgoProfileByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getNgoProfileByUserId.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                getNgoProfileByUserId.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Update
            .addCase(updateNgoProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                updateNgoProfile.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.profile = action.payload;
                }
            )
            .addCase(
                updateNgoProfile.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Delete
            .addCase(deleteNgoProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                deleteNgoProfile.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.loading = false;
                    state.profiles = state.profiles.filter(
                        (p) => p.id !== action.payload
                    );
                }
            )
            .addCase(
                deleteNgoProfile.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export default ngoProfileSlice.reducer;
