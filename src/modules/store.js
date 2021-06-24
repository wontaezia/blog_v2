import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'modules/rootSlice';

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;
