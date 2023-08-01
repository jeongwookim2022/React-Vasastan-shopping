import { createSlice } from "@reduxjs/toolkit";

let productDetailState = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    currentProduct(state, productData) {
      if (state.length === 0) {
        state.push(productData.payload);
      } else {
        state.splice(0, 1);
        state.push(productData.payload);
      }
    },
  },
});
export let { currentProduct } = productDetailState.actions;
export default productDetailState;
