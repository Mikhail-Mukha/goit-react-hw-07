import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

const slice = createSlice({
  name: "filter",
  initialState: initialState.filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const selectFilter = (state) => state.filters.name;
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
