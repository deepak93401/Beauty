import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header()
{
    return(
        <>
          <header>
            <div className="Heading">
               <div className="container">
                 <div className="row">
                   <div className="col-md-12">
                     <h6 className="Head_f">free standard shipping on orders $40+ delivered within the U.S</h6>
                   </div>
                 </div>
               </div>
            </div>


          
        
       <Navbar expand="lg" className="Nav">
       
      <Container>
      <Navbar.Brand href="#home" className="N_head">BeautyCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Bestseller">Best seller</Nav.Link>
            <Nav.Link href="/skincare">Skincare</Nav.Link>
            <Nav.Link href="/Bodycare">Body care</Nav.Link>
            <Nav.Link href="/Setkit">Set & kits</Nav.Link>
            <Nav.Link href="/Sale">Sale</Nav.Link>
            <Nav.Link href="/Routine">Find Your Routine</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="Secondhead">
                <div className="container">
                   <div className="row">
                     <div className="col-md-12">
                        <h6 className="Head_s">15% Off Everything with Code: PB55 </h6>
                     </div>
                   </div>
                </div>
            </div>

 </header>
        
        </>
    )
}
export default Header;