import { createSlice } from '@reduxjs/toolkit';

interface INumber {
    first: string;
    symbol: string;
    second: string;
    result: string;
    equalle: boolean;
}

type SliceState = { number: INumber };
const initialState: SliceState = {
    number: { first: '', symbol: '', second: '', result: '', equalle: false },
};

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        addNummberFirst(state, action) {
            /*  Object.assign(state, { first: action.payload }); */
            //state.number.first = action.payload;
            state.number.first = state.number.first + action.payload;
        },
        updateNumberFirst(state, action) {
            state.number.first = action.payload;
        },
        addSymbol(state, action) {
            state.number.symbol = action.payload;
        },
        addNumberSecond(state, action) {
            state.number.second = state.number.second + action.payload;
        },
        updateNumberSecond(state, action) {
            state.number.second = action.payload;
        },
        cleanNumberSecond(state) {
            state.number.second = '';
        },
        cleanNumbers(state) {
            state.number.second = '';
            state.number.symbol = '';
        },
        cleanNumberState(state) {
            state.number.first = '';
            state.number.second = '';
            state.number.symbol = '';
            state.number.result = '';
            state.number.equalle = false;
        },
        addResult(state, action) {
            state.number.result = action.payload;
        },
        cleanResult(state) {
            state.number.result = '';
        },
        switchEqualle(state) {
            state.number.equalle = true;
        },
        cleanEqualle(state) {
            state.number.equalle = false;
        },
    },
});

export const {
    addNummberFirst,
    addSymbol,
    addNumberSecond,
    cleanNumberSecond,
    updateNumberSecond,
    cleanNumbers,
    cleanNumberState,
    addResult,
    cleanResult,
    cleanEqualle,
    switchEqualle,
    updateNumberFirst,
} = numberSlice.actions;
export default numberSlice.reducer;
