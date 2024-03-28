import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CodingEmonShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">EmonGoods</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">안녕</div>
          <div className="col-md-4">안녕</div>
          <div className="col-md-4">안녕</div>
        </div>
      </div>
    </div>
  );
}

export default App;
