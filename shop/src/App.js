import {
  createContext,
  Suspense,
  useEffect,
  useState,
  lazy,
  useTransition,
  useDeferredValue,
} from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import axios from "axios";
import Cart from "./pages/Cart.js";
import { useQuery } from "react-query";

// 필요할때 import 해주세요
// const Detail = lazy(() => import("./routes/Detail.js"));
// const Cart = lazy(() => import("./routes/Cart.js"));

export let Context1 = createContext(); // state 보관함

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  // useTransition
  let a = new Array(10000).fill(0);
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  // useDefrredValue
  let state = useDeferredValue(name);

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate(); // 페이지 이동을 도와준다.

  // react-query 이용해서 ajax 요청하면
  let result = useQuery("작명", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => {
        console.log("오쳥됨"); // refetch
        return a.data;
      });
  });
  // result.data; // 성공 했을때
  // result.isLoading; // 로딩중일때 트루
  // result.error; // 실패했을 때 트루
  return (
    <div className="App">
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? "로딩중"
        : a.map(() => {
            return <div>{name}</div>;
          })}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            코딩에몽 쇼핑몰
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to="/">홈</Link>
              <Link to="/detail">상세페이지</Link> */}
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                홈으로
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                장바구니
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail/0");
                }}
              >
                상세페이지
              </Nav.Link>
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
          <Nav className="ms-auto">
            {result.isLoading && "로딩중"}
            {result.error && "에러발생"}
            {result.data && result.data.name}
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
                  {/* <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      console.log(결과.data);
                      let copy = [...shoes, ...결과.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패했습니다.");
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보페이지</h4>
      <Outlet></Outlet>
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
