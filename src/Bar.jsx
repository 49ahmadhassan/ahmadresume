import React from 'react';
import Lightclick from './Lightclick';
import { NavDropdown, Nav, Navbar, Container,Button,Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
function Bar() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink exact to="/"><img src={process.env.PUBLIC_URL+"./image/logo.png"} width="100"/>
</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto gap-lg-5 my-2 my-lg-0">
            <NavLink exact to="/about">ABOUT</NavLink>
            <NavLink exact to="/portfolio">PORTFOLIO</NavLink>
            <NavLink exact to="/serivce">SERVICES</NavLink>
            {/* <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
              <NavLink exact to="/action">Web Developer</NavLink> */}
              {/* <NavDropdown.Divider />
              <NavLink exact to="/another">Another action</NavLink>
              <NavDropdown.Divider />
              <NavLink exact to="/something">Something else here</NavLink> */}
            {/* </NavDropdown> */}
            <NavLink exact to="/skill">Skills</NavLink>
            <NavLink exact to="/contect">
              CONTECT US
            </NavLink>
          <Form>
            <NavLink exact to ="/hireme"> 
            <Lightclick buttontext="Hire Me"/>
            {/* <Button variant="outline-light" className="outline-light">HIRE ME</Button> */}
            </NavLink>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Bar;