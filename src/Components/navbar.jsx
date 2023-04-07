import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Bad Bank</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="justify-content-end"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
            <Nav.Link href="#/deposit/">Deposit</Nav.Link>
            <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
            <Nav.Link href="#/alldata/">AllData</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
