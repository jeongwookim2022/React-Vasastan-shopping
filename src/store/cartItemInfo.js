import { createSlice } from "@reduxjs/toolkit";

//  CART
let cartItemInfo = createSlice({
  name: "cartItemInfo",
  initialState: [],
  reducers: {
    addInfo(state, info) {
      state.push(info.payload);
    },
    removeInfo(state, index) {
      state.splice(index.payload, 1);
    },
    lessCount(state, index) {
      if (state[index.payload].count > 1) {
        state[index.payload].count -= 1;
      }
    },
    moreCount(state, index) {
      state[index.payload].count += 1;
    },
  },
});
export let { lessCount, moreCount, addInfo, removeInfo } = cartItemInfo.actions;
export default cartItemInfo;
