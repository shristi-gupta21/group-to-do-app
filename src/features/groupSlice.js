import { createSlice, nanoid } from "@reduxjs/toolkit";

const checkForOverlap = (groups) => {
  groups.sort((a, b) => a.from - b.from);

  for (let i = 0; i < groups.length - 1; i++) {
    if (groups[i].to >= groups[i + 1].from) {
      return true;
    }
  }
  return false;
};

export const groupSlice = createSlice({
  name: "group",
  initialState: {
    value: [{ id: nanoid(), from: 1, to: 10 }],
    error: "",
  },
  reducers: {
    createGroup: (state, action) => {
      let newGroup = {
        id: nanoid(),
        from: action.payload.from,
        to: action.payload.to,
      };
      if (action.payload.from < 1 || action.payload.to > 10) {
        state.error = "Group range must be within 1 to 10.";
      } else {
        state.value.push(newGroup);
        state.error = ""; // Clear error if add was successful
      }
    },
    deleteGroup: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    updateGroup: (state, action) => {
      const { groupId, from, to } = action.payload;
      if (from < 1 || to > 10 || from > to) {
        state.error = "Invalid group range. Please enter a valid range.";
        return;
      }
      const updatedGroups = state.value.map((group) =>
        group.id === groupId ? { ...group, from, to } : group
      );

      // Check for overlaps
      if (checkForOverlap(updatedGroups)) {
        state.error = "Group ranges overlap. Please adjust the ranges.";
      } else {
        state.value = updatedGroups;
        state.error = ""; // Clearing error only if updates are successful
      }
    },
  },
});

export const { createGroup, deleteGroup, updateGroup } = groupSlice.actions;
export default groupSlice.reducer;
