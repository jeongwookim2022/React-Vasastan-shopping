import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import productDetailState from "./store/productDetailState";
import pageState from "./store/pageState";
import { persistReducer } from "redux-persist";
import cartState from "./store/cartState";
import isCartItem from "./store/isCartItem";
import cartItemInfo from "./store/cartItemInfo";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["productDetailState", "cartState"],
  // whitelist: ["cartState", "isCartItem"],
  whitelist: ["cartState", "productDetailState", "isCartItem", "cartItemInfo"],
  blacklist: ["pageState"],
  // blacklist: ["isCartItem", "pageState"],
  // blacklist: ["productDetailState", "isCartItem"],
  // blacklist: ["pageState"],
};

const reducers = combineReducers({
  productDetailState: productDetailState.reducer,
  pageState: pageState.reducer,
  cartState: cartState.reducer,
  isCartItem: isCartItem.reducer,
  cartItemInfo: cartItemInfo.reducer,
});
const myPersistReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: myPersistReducer,
});
