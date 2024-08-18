import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: {
        message: "",
    },
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
})

export const { setError } = errorSlice.actions;
export default errorSlice.reducer