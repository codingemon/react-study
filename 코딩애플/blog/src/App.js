/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, set글제목] = useState([
    "남자코트 추천",
    "우동 맛집",
    "무슨무슨 맛집",
  ]);
  let [좋아요, set좋아요] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>CodingEmon BLOG</h4>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] += 1;
                  set좋아요(copy);
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글재목2
      </button>

      {modal == true ? (
        <Modal title={title} set글제목={set글제목} 글제목={글제목} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
};

export default App;
