import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Bimg3 from "./Eimages/kate2.png";
import Video from "./video.mp4";
import Bimg4 from "./Eimages/Salma.jpg";



function Service()
{
    return(
        <>
         <div className="pre_ser"></div>
           <section id="Service">
                
                         <div className="Service_Div"> 
                                    <div className="Ser_img">
                                        <img src={Bimg3}></img>
                                    </div>  
                           
                         </div>
                           
                           
                         <div className="Service_Div S1">
                               <div className="Service_con">
                                   <h2>BLOCK STAR</h2>
                                   <p>This 100% mineral daily sunscreen<br></br> blends like a dream and delivers broad <br></br>spectrum protection, plus a smooth, never-greasy finish.</p>
                                   <Button className="S_btn">SHOP NOW</Button>{' '}
                                 </div>               
                         </div>
                     </section>


                     <div className="pre_ser"></div>

           <section id="Service">
                                <div className="Service_Div S2">
                                        <div className="Service_con1">
                                            <h2>100% MINERAL <br></br> 100% COVERED</h2>
                                            <p>No chemical sunscreens, no irritation, no <br></br>white cast, no chalkiness, no greasy sheen.</p>
                                            <Button className="S_btn">Shop Block Star</Button>{' '}
                                            </div>               
                                    </div>

                                        <div className="Service_Div "> 
                                                    <div className="Ser_video">
                                                        <video autoPlay loop muted>
                                                            <source src={Video} type="video/mp4"></source>
                                                        </video>
                                                    </div>  
                                        
                                        </div>

                       </section>


                       <div className="pre_ser"></div>


                       <section id="Service">
                      
                           

                         <div className="Service_Div"> 
                                    <div className="Ser_img">
                                        <img src={Bimg4}></img>
                                    </div>  
                           
                         </div>

                         <div className="Service_Div S3">
                               <div className="Service_con">
                                   <h2>CLEAN, CRUELTY FREE,<br></br> DERMATOLOGIST-<br></br>TESTED</h2>
                                   <p>We are a clean, cruelty-free, planet-<br></br>friendly skincare brand that delivers <br></br>transformative, dermatologist-tested <br></br> products for total skin happiness.</p>
                                   <Button className="ser_btn">FIND BLESS NEAR YOU</Button>{' '}
                                 </div>               
                         </div>
                           

                         </section>
  
  
                       



        </>
    )
}
export default Service;