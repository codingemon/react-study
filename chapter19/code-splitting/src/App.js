import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";

function App() {
  const onClick = () => {
    // import() 함수 형태로 메서드 안에서 사용하면, 파일을 따로 분리시켜서 저장
    import("./notify").then((result) => result.default());
  };
  return (
    <div className="App">
      {/* Hello React! 문구를 누르면 notify 함수가 실행되도록 App 컴포넌트를 수정 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
