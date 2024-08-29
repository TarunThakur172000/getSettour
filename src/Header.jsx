import React from "react";
import {Container,Nav,Navbar,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header(){
    return(
        <div style={{overflowX:"hidden"}}>   
            <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="/">
            GetSetTour
          </Navbar.Brand>
          <Nav className=" me-2">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blogs</Nav.Link>
            <Nav.Link href="/Aboutus" >About us</Nav.Link>
           
          </Nav>
         
        </Container>
      </Navbar> 
        </div>
    )
}
export default Header