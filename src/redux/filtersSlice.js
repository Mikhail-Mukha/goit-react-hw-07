import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
