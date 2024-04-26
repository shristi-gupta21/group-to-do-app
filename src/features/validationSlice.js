import { createSlice } from "@reduxjs/toolkit";

export const validationSlice = createSlice({
  name: "error",
  initialState: {
    value: {},
  },
  reducers: {
    validation: (state, action) => {
      console.log(action.payload);
      state.value = action.payload.error;
    },
  },
});

export const { validation } = validationSlice.actions;
export default validationSlice.reducer;
