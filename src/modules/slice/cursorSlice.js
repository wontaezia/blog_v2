import { createSlice } from '@reduxjs/toolkit';

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState: {
        isHoverOnTarget: false,
        cursorStyles: ['pointer', 'hovered'],
    },
    reducers: {
        setCursorType: (state, { payload }) => {
            return {
                ...state,
                isHoverOnTarget:
                    (state.cursorStyles.includes(payload) && payload) || false,
            };
        },
    },
});

export const cursorReducers = cursorSlice.reducer;
export const cursorActions = cursorSlice.actions;
