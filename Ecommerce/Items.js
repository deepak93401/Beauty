import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Item1 from "./Eimages/EEx1.jpg";
import Item2 from "./Eimages/EEx2.jpg";
import Item3 from "./Eimages/EEx3.jpg";
import Item4 from "./Eimages/EEx4.jpg";
import Item5 from "./Eimages/EEx5.jpg";
import Item6 from "./Eimages/EEx6.jpg";


function Items()
{
    return(
        <>
         <section id="Items">
            <div className="container">
                 <div className="row mt-5">
                     <div className="col-md-6 pt-5">
                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item1}></img>
                                </div>
                                <div className="Items_con">
                                <h3>Bright Idea <br></br> Mositurizer</h3>
                                <p>$20</p>
                                </div>
                            </Carousel.Item>
                            
                            
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                        <img src={Item2}></img>
                                </div>
                                <div className="Items_con">
                                <h3>Bright Idea <br></br> Mositurizer</h3>
                                <p>$20</p>
                                </div>
                            </Carousel.Item>
                          
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item3}></img>
                                </div>
                                <div className="Items_con">
                                <h3>Bright Idea <br></br> Mositurizer</h3>
                                <p>$20</p>
                                </div>
                            </Carousel.Item>
                            </Carousel>


                     </div>
                    
                    
                    
                    
                    
                     <div className="col-md-6 pt-5">

                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item4}></img>
                                </div>
                                <div className="Items_con">
                                <h3>Clean Face <br></br> Remove Oil</h3>
                                <p>$25</p>
                                </div>
                            </Carousel.Item>
                           
                           
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item5}></img>
                                </div>
                                <div className="Items_con">
                                <h3>Clean Face <br></br> Remove Oil</h3>
                                <p>$25</p>
                                </div>
                            </Carousel.Item>
                          
                          
                            <Carousel.Item className="caro_div">
                               <div className="Items_img">
                                     <img src={Item6}></img>
                                </div>
                                <div className="Items_con">
                                <h3>Clean Face <br></br> Remove Oil</h3>
                                <p>$25</p>
                                </div>
                            </Carousel.Item>
                            </Carousel>

                         
                     </div>
                 </div>
            </div>
         </section>
        </>
    )
}
export default Items;