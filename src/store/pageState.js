import { createSlice } from "@reduxjs/toolkit";

let pageState = createSlice({
  name: "page",
  initialState: [1],
  reducers: {
    changePageNum(state, pageNum) {
      state.splice(0, 1);
      state.push(pageNum.payload);
    },
  },
});
export let { changePageNum } = pageState.actions;
export default pageState;
