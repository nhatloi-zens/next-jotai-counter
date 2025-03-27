import { configureStore, createSlice } from "@reduxjs/toolkit";

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    return Number(localStorage.getItem("reduxCounter")) || 0;
  }
  return 0;
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: getInitialValue() },
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("reduxCounter", state.value.toString());
    },
  },
});

export const { increment } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
