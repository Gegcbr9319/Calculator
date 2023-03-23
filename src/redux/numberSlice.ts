import { createSlice } from '@reduxjs/toolkit';

interface INumber {
    first: string;
    symbol: string;
    second: string;
}

type SliceState = { number: INumber };
const initialState: SliceState = { number: { first: '', symbol: '', second: '' } };

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        addNummberFirst(state, action) {
            /*  Object.assign(state, { first: action.payload }); */
            //state.number.first = action.payload;
            state.number.first = state.number.first + action.payload;
        },
        addSymbol(state, action) {
            state.number.symbol = action.payload;
        },
        addNumberSecond(state, action) {
            state.number.second = state + action.payload;
        },
        cleanNumberState(state, action) {
            state.number.first = '0';
            state.number.second = '';
            state.number.symbol = '';
        },
    },
});

export const { addNummberFirst, addSymbol, addNumberSecond, cleanNumberState } =
    numberSlice.actions;
export default numberSlice.reducer;
