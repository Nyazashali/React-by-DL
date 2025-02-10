import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            return{
                value: state.value + 1
            };
        },
        decrement: () => {
            return{
                value: state.value - 1
            };
        },
        reset: () => {
           return{
            value: 0
           }
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;