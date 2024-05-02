import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    visible: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            localStorage.setItem('token', action.payload);
            state.status = true;
        },
        setUsername: (state, action) => {
            localStorage.setItem('username', action.payload);
        },
        hasToken: (state) => {
            state.status = localStorage.getItem('token') !== null;
        },
        getToken: (state) => {
            state.token = localStorage.getItem('token') ?? null;
        },
        getUsername: (state) => {
            state.username = localStorage.getItem('username') ?? null;
        },
        logout: (state) => {
            state.status = false;
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        },
    },
});

export const {
    setToken,
    setUsername,
    hasToken,
    getToken,
    getUsername,
    logout,
} = authSlice.actions;
export default authSlice.reducer;
