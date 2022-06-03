import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: "",
  isLogged: false,
}

const slice = createSlice({
  name: "global",
  initialState: { ...initialState },
  reducers: {
    setGlobal: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetGlobal: (state, action) => {
      return { ...state, ...initialState }
    }
  },
});

export const { setGlobal, resetGlobal } = slice.actions;
export default slice.reducer;