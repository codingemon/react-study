import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/useSlice.js";

// useSlice.js로 보냄
// let user = createSlice({
//   name: "user",
//   initialState: { name: "lee", age: 29 },
//   reducers: {
//     changeName(state) {
//       state.name = "choi";
//     },
//     increase(state, action) {
//       state.age += action.payload;
//     },
//   },
// });

//state 변경함수 남음
// export let { changeName, increase } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
