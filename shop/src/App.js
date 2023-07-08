import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">코딩에몽 쇼핑몰</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">홈</Link>
              <Link to="/detail">상세페이지</Link>
              <Nav.Link href="#home">홈으로</Nav.Link>
              <Nav.Link href="#cart">장바구니</Nav.Link>
              <Nav.Link href="#movie">극장판</Nav.Link>
              <NavDropdown title="메뉴" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  도라에몽소개
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">의상</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">상담</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">게시판</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {/* <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<div>어바웃페이지임</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;
