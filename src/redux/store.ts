import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingsSlice';
import idSlice from './idSlice';

export const store = configureStore({
    reducer: {
        settingState: settingReducer,
        idState: idSlice,
    },
});
