import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from '../features/sidebarSlice.js';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
});

export default store;
