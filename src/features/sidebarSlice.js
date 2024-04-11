import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    visible: false,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        showSidebar: (state) => {
            state.visible = true;
        },
        hideSidebar: (state) => {
            state.visible = false;
        },
    },
});

export const {showSidebar, hideSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;
