import { createSlice } from '@reduxjs/toolkit';

type SliceState = { id: string[] };
const initialState: SliceState = { id: [] };

const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        addId(state, action) {
            state.id.push(action.payload);
        },
        deleteId(state, action) {
            const id = state.id.filter((index) => index !== action.payload);
            return { ...state, id };
        },
    },
});

export const { addId, deleteId } = idSlice.actions;
export default idSlice.reducer;
