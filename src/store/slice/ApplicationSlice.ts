// src/redux/slices/applicationSlice.ts

import {
    createApplicationApi,
    getAllApplicationsApi,
    getApplicationByIdApi,
    updateApplicationApi,
    deleteApplicationApi,
    getApplicationsByUserIdApi,
    generateApplicationCertificateApi,
    getApplicationsByActivityIdApi,
} from "@/services/ApplicationService";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Thunks

export const createApplication = createAsyncThunk(
    "application/create",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await createApplicationApi(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Creation failed");
        }
    }
);

export const getAllApplications = createAsyncThunk(
    "application/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllApplicationsApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Fetching failed");
        }
    }
);

export const getApplicationById = createAsyncThunk(
    "application/getById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getApplicationByIdApi(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching by ID failed"
            );
        }
    }
);

export const getApplicationsByUserId = createAsyncThunk(
    "application/getByUserId",
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await getApplicationsByUserIdApi(userId);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "User applications fetch failed"
            );
        }
    }
);

export const getApplicationsByActivityId = createAsyncThunk(
    "application/getByActivityId",
    async (activityId: string, { rejectWithValue }) => {
        try {
            const response = await getApplicationsByActivityIdApi(activityId);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Activity applications fetch failed"
            );
        }
    }
);

export const updateApplication = createAsyncThunk(
    "application/update",
    async (
        { id, payload }: { id: string; payload: any },
        { rejectWithValue }
    ) => {
        try {
            const response = await updateApplicationApi(id, payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Update failed");
        }
    }
);

export const deleteApplication = createAsyncThunk(
    "application/delete",
    async (id: string, { rejectWithValue }) => {
        try {
            await deleteApplicationApi(id);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Delete failed");
        }
    }
);

export const generateApplicationCertificate = createAsyncThunk(
    "application/generateCertificate",
    async (
        payload: {
            userId: string;
            applicationId: string;
        },
        { rejectWithValue }
    ) => {
        try {
            const response = await generateApplicationCertificateApi(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Certificate generation failed"
            );
        }
    }
);

// State
interface ApplicationState {
    application: any | null;
    applications: any;
    loading: boolean;
    error: string | null;
}

const initialState: ApplicationState = {
    application: null,
    applications: [],
    loading: false,
    error: null,
};

// Slice
const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create
            .addCase(createApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                createApplication.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.application = action.payload;
                }
            )
            .addCase(
                createApplication.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get All
            .addCase(getAllApplications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getAllApplications.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.applications = action.payload;
                }
            )
            .addCase(
                getAllApplications.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get by ID
            .addCase(getApplicationById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getApplicationById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.application = action.payload;
                }
            )
            .addCase(
                getApplicationById.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get by User ID
            .addCase(getApplicationsByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getApplicationsByUserId.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.applications = action.payload;
                }
            )
            .addCase(
                getApplicationsByUserId.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get by User ID
            .addCase(getApplicationsByActivityId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getApplicationsByActivityId.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.applications = action.payload;
                }
            )
            .addCase(
                getApplicationsByActivityId.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Update
            .addCase(updateApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                updateApplication.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.application = action.payload;
                }
            )
            .addCase(
                updateApplication.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Delete
            .addCase(deleteApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                deleteApplication.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.loading = false;
                    state.applications = state.applications.filter(
                        (app: any) => app.id !== action.payload
                    );
                }
            )
            .addCase(
                deleteApplication.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Certificate
            .addCase(generateApplicationCertificate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                generateApplicationCertificate.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    // Optional: Update application state or push certificate info
                }
            )
            .addCase(
                generateApplicationCertificate.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export default applicationSlice.reducer;
