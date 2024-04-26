import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/groupSlice";
import dataReducer from "../features/dataSlice";
export default configureStore({
  reducer: {
    group: groupReducer,
    data: dataReducer,
  },
});
