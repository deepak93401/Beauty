import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Product1 from "./Eimages/product1.jpg";
import Product2 from "./Eimages/product2.jpg";
import Product3 from "./Eimages/product5.jpg";
import Product4 from "./Eimages/product4.jpg";


function Product()
{
    return(
        <>
         <section id="Product">
_             <div className="container mt-5">
                <div className="text-center">
                    <h2>SHOP OUR COLLECTIONS</h2> 
                </div>
                 <div className="row">
                                <div className="col-md-3 mt-5">
                                <Card style={{ width: '100%' }} className="Card_sec">
                                <Card.Img  src={Product1}  className="P_card"/>
                                <Card.Body className="card_con">
                                    <Card.Title><h6>DRENCH & QUENCH</h6></Card.Title>
                                    <Card.Text>
                                   <p> Supercharged moisturizers for happy, hydrated skin.</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card>
                                
                                </div>


                                <div className="col-md-3 mt-5">
                                <Card style={{ width: '100%' }} className="Card_sec">
                                <Card.Img  src={Product2}  className="P_card"/>
                                <Card.Body className="card_con">
                                    <Card.Title><h6>BRIGHT IDEA</h6></Card.Title>
                                    <Card.Text>
                                    <p>Clinical-grade formulas for visibly radiant results.</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card>
                                
                                </div>


                                <div className="col-md-3 mt-5">
                                <Card style={{ width: '100%' }} className="Card_sec">
                                <Card.Img  src={Product3}  className="P_card"/>
                                <Card.Body className="card_con">
                                    <Card.Title><h6>YOUTH GOT THIS</h6></Card.Title>
                                    <Card.Text>
                                    <p>Maintain youthful, radiant skin with pure retinol + Prevent-4™ Complex</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card>
                                
                                </div>


                                <div className="col-md-3 mt-5">
                                <Card style={{ width: '100%' }} className="Card_sec">
                                <Card.Img  src={Product4}  className="P_card"/>
                                <Card.Body className="card_con">
                                    <Card.Title><h6>CLEAR GENIUS</h6></Card.Title>
                                    <Card.Text>
                                      <p>Treat problem skin and maintain a clear, calm complexion.</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card>
                                
                                </div>
                 </div>
             </div>
         </section>
         
        
        </>
    )
}
export default Product;