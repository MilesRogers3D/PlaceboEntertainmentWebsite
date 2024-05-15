import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../GlobalNavbar/logo.png"
export const GlobalNavbar = () => {
     return (
          <div>
               <Navbar>
                    <Container>
                         <Navbar.Brand>
                              <img className="logo" src={logo}></img>
                         </Navbar.Brand>
                         <div className="text-wrapper">
                              <Nav.Link className="navBarLink" href="home">Home</Nav.Link>
                              <Nav.Link className="navBarLink" href="about">About</Nav.Link>
                              <Nav.Link className="navBarLink" href="work">Work</Nav.Link>
                              <Nav.Link className="navBarLink" href="blog">Blog</Nav.Link>
                              <Nav.Link className="button" href="contact">Contact</Nav.Link>
                         </div>
                    </Container>
               </Navbar>
          </div>
     );
};

export default GlobalNavbar;
