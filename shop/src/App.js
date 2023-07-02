import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">코딩에몽 쇼핑몰</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">홈으로</Nav.Link>
              <Nav.Link href="#goods">굿즈</Nav.Link>
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
    </div>
  );
}

export default App;
