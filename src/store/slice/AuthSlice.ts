import { registerUserParams } from "@/lib/types";
import {
    forgotPasswordApi,
    getLoginUserApi,
    logInApi,
    registerApi,
    resetPasswordApi,
} from "@/services/AuthService";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import websocket from "@/services/WebSocketService";

// Define the login service as an async thunk
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (
        credentials: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await logInApi(credentials);
            return response.data;
        } catch (error: any) {
            // Handle errors
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// Define the login service as an async thunk
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await registerApi(payload);
            return response.data;
        } catch (error: any) {
            // Handle errors
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// Define the forgot password service as an async thunk
export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await forgotPasswordApi(payload);
            return response.data;
        } catch (error: any) {
            // Handle errors
            return rejectWithValue(
                error.response?.data || "Forgot Password  failed"
            );
        }
    }
);

// Define the reset password service as an async thunk
export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await resetPasswordApi(payload);
            return response.data;
        } catch (error: any) {
            // Handle errors
            return rejectWithValue(
                error.response?.data || "Reset Password failed"
            );
        }
    }
);

// Define the getLoginUser service as an async thunk
export const getLoginUser = createAsyncThunk(
    "auth/getLoginUser",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No token found");

            const response = await getLoginUserApi(); // Fetch user details using the token
            return response.data;
        } catch (error: any) {
            // Handle errors
            return rejectWithValue(
                error.response?.data || "Unable to fetch user details"
            );
        }
    }
);

// Define the auth state
interface AuthState {
    user: null | any; // Adjust according to your API response
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

// Create the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;
            localStorage.removeItem("token"); // Clear token from local storage
            localStorage.removeItem("user"); // Clear token from local storage
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                loginUser.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    localStorage.setItem(
                        "token",
                        action.payload.data?.access_token
                    );
                    localStorage.setItem(
                        "user",
                        JSON.stringify(action.payload.data?.user)
                    );
                    state.user = action.payload.data?.user;

                    // Store token in local storage
                    // localStorage.setItem("userId", action.payload.userId); // Store token in local storage
                    // websocket.connect(action.payload.token);
                }
            )
            .addCase(
                loginUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload || "Login failed";
                }
            )

            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                registerUser.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    localStorage.setItem(
                        "token",
                        action.payload.data?.access_token
                    );
                    localStorage.setItem(
                        "user",
                        JSON.stringify(action.payload.data?.user)
                    );
                    state.user = action.payload.data?.user;
                    // Store token in local storage
                }
            )
            .addCase(
                registerUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload || "Login failed";
                }
            )

            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                forgotPassword.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                }
            )
            .addCase(
                forgotPassword.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload || "Unable to Forgot Password";
                }
            )

            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                resetPassword.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                }
            )
            .addCase(
                resetPassword.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload || "Unable to Reset Password";
                }
            )

            .addCase(getLoginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getLoginUser.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.user = action.payload;
                    console.log(action.payload);
                }
            )
            .addCase(
                getLoginUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error =
                        action.payload || "Unable to fetch user details";
                }
            );
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
