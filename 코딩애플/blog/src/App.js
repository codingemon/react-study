/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, set글제목] = useState([
    "남자코트 추천",
    "우동 맛집",
    "무슨무슨 맛집",
  ]);
  let [좋아요, set좋아요] = useState(0);

  // const like = () => {
  //   set좋아요(좋아요++);
  // };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>CodingEmon BLOG</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          set글제목(copy);
        }}
      >
        바뀌는 버튼
      </button>
      <button
        onClick={() => {
          set글제목([...글제목].sort());
        }}
      >
        가나다순 정렬
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              set좋아요((좋아요 += 1));
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
