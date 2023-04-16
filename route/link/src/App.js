import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" Component={Home} exact={true} />
        <Route path="about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
