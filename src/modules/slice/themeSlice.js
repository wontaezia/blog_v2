import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: 'dark',
        isSet: false,
    },
    reducers: {
        toggleTheme: (state, payload) => {
            return {
                ...state,
                currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark',
            };
        },
        setTheme: (state, { payload }) => {
            return {
                ...state,
                currentTheme: payload ? payload : 'light',
                isSet: true,
            };
        },
    },
});

export const themeReducers = themeSlice.reducer;
export const themeActions = themeSlice.actions;
