import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../GlobalNavbar/logo.png"
import "bootstrap/dist/css/bootstrap.min.css"

export const GlobalNavbar = () => {
     return (
          // <div>
          //      <Navbar>
          //           <Container>
          //                <Navbar.Brand>
          //                     <img className="logo" src={logo}></img>
          //                </Navbar.Brand>
          //                <div className="text-wrapper">
          //                     <Nav.Link className="navBarLink" href="#home">Home</Nav.Link>
          //                     <Nav.Link className="navBarLink" href="#about">About</Nav.Link>
          //                     <Nav.Link className="navBarLink" href="#work">Work</Nav.Link>
          //                     <Nav.Link className="navBarLink" href="#blog">Blog</Nav.Link>
          //                     <Nav.Link className="button" href="#contact">Contact</Nav.Link>
          //                </div>
          //           </Container>
          //      </Navbar>
          // </div>
          <Navbar expand="lg">
               <Container fluid>
                    <Navbar.Brand href="#home"><img className="logo" src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ms-auto">
                              <Nav.Link href="#home" className="navBarLink">Home</Nav.Link>
                              <Nav.Link href="#about" className="navBarLink">About</Nav.Link>
                              <Nav.Link href="#work" className="navBarLink">Work</Nav.Link>
                              <Nav.Link href="#blog" className="navBarLink">Blog</Nav.Link>
                              <Nav.Link className="button" href="#contact">Contact</Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};

export default GlobalNavbar;
