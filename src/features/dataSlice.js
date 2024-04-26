import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../js/fetchData";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.value = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export const fetchDataAction = () => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const data = await fetchData();
    const filteredData = data.filter((item) => item.id < 11);
    dispatch(fetchDataSuccess(filteredData));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default dataSlice.reducer;
