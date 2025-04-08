// shoppingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const localStorage = window.localStorage;

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: localStorage.getItem("shoppingCart")
    ? JSON.parse(localStorage.getItem("shoppingCart"))
    : [],
  reducers: {

    // Thêm khóa học 
    addItem: (state, action) => {
      const { _id, qty = 1 } = action.payload;
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.push({ ...action.payload, qty });
      }

      localStorage.setItem("shoppingCart", JSON.stringify(state));
    },

    // Sửa khóa học
    editItem: (state, action) => {
      const { _id, qty } = action.payload;
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.qty = qty;
      }

      localStorage.setItem("shoppingCart", JSON.stringify(state));
    },

    // Giảm số lượng khóa học
    decreaseProduct: (state, action) => {
      const { _id } = action.payload;
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty--;
      } else {
        return state.filter((item) => item._id !== _id);
      }

      localStorage.setItem("shoppingCart", JSON.stringify(state));
    },

    // Tăng số lượng khóa học
    increaseProduct: (state, action) => {
      const { _id } = action.payload;
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.qty++;
      }

      localStorage.setItem("shoppingCart", JSON.stringify(state));
    },

    // Xóa khóa học
    removeItem: (state, action) => {
      const _idToRemove = action.payload;
      const indexToRemove = state.findIndex((item) => item._id === _idToRemove);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1); 
        localStorage.setItem("shoppingCart", JSON.stringify(state));
      }
  },
}
});

export const { addItem, editItem, removeItem, decreaseProduct, increaseProduct } = shoppingSlice.actions;
export default shoppingSlice.reducer;
