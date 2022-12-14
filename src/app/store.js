import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
