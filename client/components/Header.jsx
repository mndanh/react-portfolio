import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { fly } from "../src/assets/icons";

export default function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={fly} alt="Dan's Portfolio" style={{ height: "50px" }} />
          Dan Heer's Project Portfolio
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#about">About Me</Nav.Link>
              <Nav.Link href="/#contact">Contact Me</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}