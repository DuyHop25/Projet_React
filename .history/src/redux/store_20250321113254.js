  import { configureStore } from "@reduxjs/toolkit";
  import shoppingReducer from "./slices/shoppingCart";

  const localStorage = window.localStorage;

  const initialState = localStorage.getItem("shoppingCart")
    ? JSON.parse(localStorage.getItem("shoppingCart"))
    : [];

  const store = configureStore({
    reducer: {
      shopping: shoppingReducer.
    },
    preload: {
      shopping: in
    }
  });

  export default store;
