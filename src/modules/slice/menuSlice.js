import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        setMenuState: (state, payload) => {
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            };
        },
    },
});

export const menuReducers = menuSlice.reducer;
export const menuActions = menuSlice.actions;
