import "./App.css";

function App() {
  let post = "도라에몽 강남점";

  return (
    <div className="App">
      {/* ==== JSX 문법 ====  */}
      {/* class x , className */}
      <div className="black-nav">
        {/* style 넣을 땐 style={{스타일명:'값'}}  */}
        <h4 style={{ color: "red", fontSize: "20px" }}>블로그임</h4>
      </div>
      {/* 변수넣을 땐 {중괄호} */}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
