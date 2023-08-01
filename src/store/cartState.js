import { createSlice } from "@reduxjs/toolkit";

//  CART
let cartState = createSlice({
  name: "cartState",
  initialState: [],
  reducers: {
    addCart(state, addedProduct) {
      let duplicated = false;

      if (state.length > 0) {
        state.forEach((product, i) => {
          if (product.id == addedProduct.payload.id) {
            duplicated = true;
          }
        });
      }

      if (duplicated == false) {
        state.push(addedProduct.payload);
        alert("Added Item in your cart!");
      } else {
        alert("You already have the same Product in your cart.");
      }
    },
    removeCart(state, willRemoveProduct) {
      if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].id == willRemoveProduct.payload) {
            state.splice(i, 1);
          }
        }
      }
    },
    moreItem(state, itemId) {
      state.map((item, i) => {
        if (item.id == itemId.payload) item.count += 1;
      });
    },
    lessItem(state, itemId) {
      state.map((item, i) => {
        if (item.count > 1) {
          if (item.id == itemId.payload) item.count -= 1;
        }
      });
    },
  },
});
export let { addCart, removeCart, lessItem, moreItem } = cartState.actions;
export default cartState;
