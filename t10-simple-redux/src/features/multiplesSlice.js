import { createSlice } from "@reduxjs/toolkit";

export const multiplesSlice = createSlice({
    name: "multiples",
    initialState: {
        multiples: 2,
       
    },
    reducers: {
        multiply: state => {
            state.multiples *=2;
        },
        divide: state => {
            state.multiples /=2;
        }
    }
});
export const { multiply, divide } = multiplesSlice.actions;
export default multiplesSlice.reducer;
