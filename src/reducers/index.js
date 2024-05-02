import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from '../features/sidebarSlice.js';
import authReducer from "../features/authSlice.js";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        auth: authReducer,
    },
});

export default store;
