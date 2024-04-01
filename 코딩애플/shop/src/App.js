import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data";
// import ShoesList from "./ShoesList";
import { Routes, Route, Link } from "react-router-dom";
import DetailList from "./DetailList";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CodingEmonShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="detail" element={<DetailList />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default App;
