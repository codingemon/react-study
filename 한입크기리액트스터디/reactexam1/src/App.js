// import "./App.css";
import React from "react";
import MyHeader from "./MyHeader";

function App() {
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 200340;

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>가보자고 리액트 </h2>
      <b id="bold_text" style={style.bold_text}>
        React
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>
  );
}

export default App;
