import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import P1 from './Eimages/p1.jpg';
import P2 from './Eimages/p2.jpg';
import P3 from './Eimages/p3.jpg';
import P4 from './Eimages/p4.jpg';




function Des()
{
    return(
        <>
          <section id="Des">
            
              <div className="container">
                  <div className="text-center pt-5">
                      <h2 className="Des_head">READY FOR YOUR SPRING GLOW-UP?</h2>
                      <p className="Des_pera">As the seasons change, so should your skincare. Put your fresh face forward with these glow-giving springtime faves</p>
                  </div>
                 
                  <div className="row">
                     <div className="col-md-3 pt-5">
                     <Card style={{ width: '100%' }} className="Card_sec">
                        <Card.Img variant="top" src={P1} className="P_card" />
                        <Card.Body className="card_con mt-3">
                            <Card.Title><h5>Block Star Daily <br></br> Mineral SPF 30</h5></Card.Title>
                            <Card.Text>
                              <p>$25.00</p>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                    
                     </div>
                    
                     <div className="col-md-3 pt-5">
                     <Card style={{ width: '100%' }} className="Card_sec">
                        <Card.Img variant="top" src={P2} className="P_card" />
                        <Card.Body className="card_con mt-3">
                            <Card.Title><h5>Drench % Quench <br></br> serum</h5></Card.Title>
                            <Card.Text>
                             <p>$27.00</p>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                     </div>
                       
                     <div className="col-md-3 pt-5">
                     <Card style={{ width: '100%' }} className="Card_sec">
                        <Card.Img variant="top" src={P3} className="P_card" />
                        <Card.Body className="card_con mt-3">
                            <Card.Title><h5>Naked Body Butter<br></br>Unscented Moisturizers</h5></Card.Title>
                            <Card.Text>
                         <p>$13.00 - $60.00</p>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                        
                    </div>
                       
                    <div className="col-md-3 pt-5">
                    <Card style={{ width: '100%' }} className="Card_sec">
                        <Card.Img variant="top" src={P4} className="P_card" />
                        <Card.Body className="card_con mt-3">
                            <Card.Title><h5>Jelly Glow<br></br> Exfoliater Peel</h5></Card.Title>
                            <Card.Text>
                              <p>$15.00</p>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                        
                    </div>
                  </div>


                  <div className="text-center">
                       <button className="Des_btn">SHOP SPRING FAVES</button>  
                      <h2 className="Des_head">GET SOCIAL @BLISS</h2>
                      <p className="Des_pera">Your daily dose of happiness, unfiltered.</p>
                  </div>
              </div>

              
            
          </section>

        </>
    )
}
export default Des;