import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name: "group",
  initialState: {
    value: [],
  },
  reducers: {
    createGroup: (state, action) => {
      let newGroup = { id: crypto.randomUUID() };
      state.value.push(newGroup);
    },
  },
});

export const { createGroup } = groupSlice.actions;
export default groupSlice.reducer;
