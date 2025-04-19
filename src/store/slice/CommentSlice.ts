// src/redux/slices/commentSlice.ts

import {
    createCommentApi,
    getAllCommentsApi,
    getCommentByIdApi,
    updateCommentApi,
    deleteCommentApi,
} from "@/services/CommentService";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Thunks

export const createComment = createAsyncThunk(
    "comment/create",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await createCommentApi(payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Creation failed");
        }
    }
);

export const getAllComments = createAsyncThunk(
    "comment/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllCommentsApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Fetching failed");
        }
    }
);

export const getCommentById = createAsyncThunk(
    "comment/getById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getCommentByIdApi(id);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || "Fetching by ID failed"
            );
        }
    }
);

export const updateComment = createAsyncThunk(
    "comment/update",
    async (
        { id, payload }: { id: string; payload: any },
        { rejectWithValue }
    ) => {
        try {
            const response = await updateCommentApi(id, payload);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Update failed");
        }
    }
);

export const deleteComment = createAsyncThunk(
    "comment/delete",
    async (id: string, { rejectWithValue }) => {
        try {
            await deleteCommentApi(id);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Delete failed");
        }
    }
);

// State
interface CommentState {
    comment: any | null;
    comments: any;
    loading: boolean;
    error: string | null;
}

const initialState: CommentState = {
    comment: null,
    comments: [],
    loading: false,
    error: null,
};

// Slice
const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create
            .addCase(createComment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                createComment.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.comment = action.payload;
                }
            )
            .addCase(
                createComment.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get All
            .addCase(getAllComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getAllComments.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    state.loading = false;
                    state.comments = action.payload;
                }
            )
            .addCase(
                getAllComments.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Get by ID
            .addCase(getCommentById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getCommentById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.comment = action.payload;
                }
            )
            .addCase(
                getCommentById.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Update
            .addCase(updateComment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                updateComment.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.comment = action.payload;
                }
            )
            .addCase(
                updateComment.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )

            // Delete
            .addCase(deleteComment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                deleteComment.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                }
            )
            .addCase(
                deleteComment.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            );
    },
});

export default commentSlice.reducer;
