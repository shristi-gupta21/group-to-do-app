import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/groupSlice";
export default configureStore({
  reducer: {
    group: groupReducer,
  },
});
