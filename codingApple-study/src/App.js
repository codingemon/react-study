/* eslint-disable */ // lint 끄는 기능
import { useState } from "react";
import "./App.css";

// --- Component: 많은 div들을 한 단어로 줄이고 싶으면 ---
// 다른 함수 밖에 만들어라

// const Modal = () = {}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function App() {
  // 자료를 잠깐 보관,저장할 땐 state 써도 된다
  // 1. import{useState} 2.useState{보관할 자료} 3.let[작명,작명]
  // (참고) Destructuring 문법
  // Q.state 언제써야하나? -> 변동시 자동으로 html에 반영되게 만들고 싶으면 state를 사용
  // 자주변경될거 같은 html부분은 state로 만들어놓기
  let [title, setTitle] = useState([
    "도라에몽 맛집",
    "도라에몽 스페셜",
    "도라에몽 성지순례",
  ]);
  let [logo, setLogo] = useState("도라에몽 블로그");
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <div>
          <button
            onClick={() => {
              let copy = [...title];
              copy.sort();
              setTitle(copy);
            }}
          >
            가나다순정렬
          </button>
          <button
            onClick={() => {
              let copy = [...title]; // ... 문법 괄호를 벗겨주세요.
              copy[0] = "도라에몽 추천";
              setTitle(copy);
            }}
          >
            글수정
          </button>
        </div>
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {/* --- Component: 많은 div들을 한 단어로 줄이고 싶으면 ---  */}
      {
        //삼항연산자 -> 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

export default App;
