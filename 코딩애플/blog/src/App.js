import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";

  let [글제목, b] = useState(["남자코트 추천", "우동 맛집", "무슨무슨 맛집"]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>CodingEmon BLOG</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
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
