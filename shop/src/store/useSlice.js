import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "lee", age: 29 },
  reducers: {
    changeName(state) {
      state.name = "choi";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

// 여기다가 짜는게 더 깔끔함
export let { changeName, increase } = user.actions;

export default user;
