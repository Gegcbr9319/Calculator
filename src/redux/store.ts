import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingsSlice';
import idSlice from './idSlice';
import numberSlice from './numberSlice';

export const store = configureStore({
    reducer: {
        settingState: settingReducer,
        idState: idSlice,
        numberState: numberSlice,
    },
});
