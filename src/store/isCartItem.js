import { createSlice } from "@reduxjs/toolkit";

let isCartItem = createSlice({
  name: "isCartItem",
  initialState: [],
  reducers: {
    didCartClick(state, val) {
      state.splice(0, 1);
      state.push(val.payload);
    },
    didOthersClick(state) {
      state.splice(0, 1);
    },
  },
});
export let { didCartClick, didOthersClick } = isCartItem.actions;
export default isCartItem;
