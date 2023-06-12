import { useState } from "react";
import "./App.css";

function App() {
  let post = "도라에몽 강남점";
  // 자료를 잠깐 보관,저장할 땐 state 써도 된다
  // 1. import{useState} 2.useState{보관할 자료} 3.let[작명,작명]
  // (참고) Destructuring 문법
  // Q.state 언제써야하나? -> 변동시 자동으로 html에 반영되게 만들고 싶으면 state를 사용
  // 자주변경될거 같은 html부분은 state로 만들어놓기
  let [title, setTitle] = useState("도라에몽 만화 추천");
  let [logo, setLogo] = useState("도라에몽 블로그");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
