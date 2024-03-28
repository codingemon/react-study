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
  let [inputValue, setInputValue] = useState("");

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
                onClick={(e) => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] += 1;
                  e.stopPropagation(set좋아요(copy));
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>2월 17일 발행</p>
            {/* <button
              onClick={() => {
                let copy글제목 = [...글제목];
                let copy좋아요 = [...좋아요];
                copy글제목.splice(i, 1); // i 번째 인덱스의 글을 삭제
                copy좋아요.splice(i, 1); // 삭제된 글에 대한 좋아요 수도 함께 삭제
                set글제목(copy글제목);
                set좋아요(copy좋아요);
              }}
            >
              삭제
            </button> */}
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                set글제목(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {/* 내 코드 */}
      {/* <button
        onClick={() => {
          let copy글제목 = [...글제목];
          let copy좋아요 = [...좋아요];
          set글제목([...copy글제목, inputValue]);
          set좋아요([...copy좋아요, 0]); // 추가된 글에 대한 좋아요 수 초기화
          setInputValue(""); // 입력값 초기화
        }}
      >
        추가
      </button> */}

      {/* 코딩애플코드  */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(inputValue);
          set글제목(copy);
        }}
      >
        추가
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
