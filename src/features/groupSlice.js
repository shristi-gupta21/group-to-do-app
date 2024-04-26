import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name: "group",
  initialState: {
    value: [],
  },
  reducers: {
    createGroup: (state) => {
      let newGroup = { id: crypto.randomUUID() };
      state.value.push(newGroup);
    },
    deleteGroup: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { createGroup, deleteGroup } = groupSlice.actions;
export default groupSlice.reducer;
