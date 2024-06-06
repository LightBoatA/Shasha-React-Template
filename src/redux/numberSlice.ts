import { createSlice } from '@reduxjs/toolkit';

export type INumber = {
    value: number;
}
export const NUMBER = 'number';
export const numberSlice = createSlice({
    name: NUMBER,
    initialState: {
        value: 0
    },
    reducers: {
        updateNumber(state, action) {
            state.value = action.payload;
        }
    }
})

export const { updateNumber } = numberSlice.actions;
export default numberSlice.reducer;