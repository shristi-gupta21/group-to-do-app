import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/groupSlice";
import dataReducer from "../features/dataSlice";
import validationReducer from "../features/validationSlice";
export default configureStore({
  reducer: {
    group: groupReducer,
    data: dataReducer,
    valid: validationReducer,
  },
});
