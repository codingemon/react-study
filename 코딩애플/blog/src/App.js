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
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>CodingEmon BLOG</h4>
      </div>

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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {modal == true ? <Modal /> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
