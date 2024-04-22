import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 비슷
let user = createSlice({
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 12, 15],
});

let stock2 = createSlice({
  name: "stock2",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    stock2: stock2.reducer,
  },
});
