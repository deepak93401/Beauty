import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';


function Footer()
{
    return(
        <>
           <footer>
              
                  <div className="Foot_div">
                    <div className="contianer">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="Foot_con"> 
                            <h6 className="Foot_head">free shipping on orders $40+</h6>
                            <div className="Foot_empty"></div>
                            <h6 className="Foot_head">free shipping on orders $40+</h6>
                            </div>
                            </div>
                        </div>
                    

            
                    </div>

                  </div>
                 
                 <div className="Foot_div1">
                     <div className="container">
                         <div className="row">
                             <div className="col-md-2 pt-5 List-group">
                                 <h2>COMPANY</h2>
                                 <ListGroup className="L1" >
                                    <ListGroup.Item className="List">Who we are</ListGroup.Item>
                                    <ListGroup.Item className="List">Find a Bliss Near you</ListGroup.Item>
                                    <ListGroup.Item className="List">Shop</ListGroup.Item>
                                
                                </ListGroup>

                             </div>
                            
                            
                             <div className="col-md-2 pt-5 List-group">
                             <h2>FOR YOU</h2>

                             <ListGroup className="L1" >
                                    <ListGroup.Item className="List">Gift Cards</ListGroup.Item>
                                    <ListGroup.Item className="List">Contact Us</ListGroup.Item>
                                    <ListGroup.Item className="List">Shipping</ListGroup.Item>
                                    <ListGroup.Item className="List">Returns</ListGroup.Item>
                                    <ListGroup.Item className="List">Payment & Gifts Cards</ListGroup.Item>
                                </ListGroup>
                             </div>
                            
                            
                             <div className="col-md-3 pt-5 List-group">
                             <h2>THE DRY STUFF</h2>
                             <ListGroup  className="L1" >
                                    <ListGroup.Item className="List">Privacy Policy</ListGroup.Item>
                                    <ListGroup.Item className="List">Terms & Conditions</ListGroup.Item>
                                    <ListGroup.Item className="List">Accessiblity Statement</ListGroup.Item>
                                
                                </ListGroup>
                             </div>
                           
                           
                             <div className="col-md-5 pt-5 List-group">
                             <h2>STAY IN TOUCH</h2>
                             <ListGroup className="L1"  >
                                    <ListGroup.Item className="List">Sign up for our newsletter to recieve 20% off your first order!</ListGroup.Item>
                             </ListGroup>
                             <Form>
                                <Row className="align-items-center">
                                    <Col sm={5} className="my-1">
                                   
                                    <Form.Control id="inlineFormInputEmail" placeholder="Email Address" className="Email" />
                                    </Col>
                                   
                                    
                                    <Col xs="auto" className="my-1">
                                    <Button type="submit" className="Submit">Submit</Button>
                                    </Col>
                                </Row>
                                </Form>

                             </div>
                         </div>
                     </div>
                 </div>

           </footer>
        </>
    )
}
export default Footer;