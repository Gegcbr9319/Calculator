import { createSlice } from '@reduxjs/toolkit';

interface ISetting {
    change: boolean;
}

type SliceState = { setting: ISetting };
const initialState: SliceState = { setting: { change: true } };

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        changeSetting(state, action) {
            state.setting.change = action.payload;

            // state.setting = { ...state.setting, change: action.payload };

            // state.setting.length = 0;
            // state.setting.push(action.payload);
        },
    },
});

export const { changeSetting } = settingSlice.actions;
export default settingSlice.reducer;
