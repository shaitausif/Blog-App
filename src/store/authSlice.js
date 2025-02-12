import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    authError: null,
    serviceError: null,
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            state.authError = null; // Clear previous auth error on successful login
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        setAuthError: (state, action) => {
            state.authError = action.payload;
        },
        clearAuthError: (state) => {
            state.authError = null;
        },
        setServiceError: (state, action) => {
            state.serviceError = action.payload;
        },
        clearServiceError: (state) => {
            state.serviceError = null;
        },
        Loading : (state , action) => {
            state.loading = action.payload;
        }
       
    }
});

export const { login, logout, setAuthError, clearAuthError, setServiceError, clearServiceError, Loading } = authSlice.actions;
export default authSlice.reducer;
