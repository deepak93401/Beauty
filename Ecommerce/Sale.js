import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import Item1 from "./Eimages/EE1.jpeg";
import Item2 from "./Eimages/EE2.jpeg";
import Item3 from "./Eimages/EE3.jpeg";
import Item4 from "./Eimages/EE4.jpg";
import Item5 from "./Eimages/EE5.jpg";
import Item6 from "./Eimages/EE6.jpeg";

import Item7 from "./Eimages/EE7.jpg";
import Item8 from "./Eimages/EE8.jpg";
import Item9 from "./Eimages/EE9.jpeg";
import Item10 from "./Eimages/EE10.jpeg";
import Item11 from "./Eimages/EE11.jpeg";
import Item12 from "./Eimages/EE12.jpeg";





function Sale()
{
    return(
    <>
                      <section id="Items">
            <div className="container">
                {/* text center */}

                  <div className="text-center mt-5 pt-5">
                     <h2>Sale</h2>
                  </div>

                {/* 1st Row */}
                 <div className="row mt-5">
                     <div className="col-md-6 pt-5">
                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item1}></img>
                                </div>
                             </Carousel.Item>
                           
                            
                            
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                        <img src={Item2}></img>
                                </div>

                            </Carousel.Item>
                          
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item3}></img>
                                </div>

                            </Carousel.Item>
                            </Carousel>

                            <div className="Items_con">
                                    <h3 >Block Star Daily Mineral SPF 30</h3>
                                    <h5 className="Item_h pt-2">$23</h5>
                                    <p className="pt-2">Protects from harmful UVA & UVB rays</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>


                     </div>
                    
                    
                    
                    
                    
                     <div className="col-md-6 pt-5">

                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item4}></img>
                                </div>
                               
                            </Carousel.Item>
                           
                           
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item5}></img>
                                </div>
                                
                            </Carousel.Item>
                          
                          
                            <Carousel.Item className="caro_div">
                               <div className="Items_img">
                                     <img src={Item6}></img>
                                </div>
                                
                            </Carousel.Item>
                            </Carousel>
                            <div className="Items_con">
                                    <h3 >Youth Got This Serum</h3>
                                    <h5 className="Item_h pt-2">$28.00</h5>
                                    <p className="pt-2">Prevent-4™ Pure Retinol Advanced Skin</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>

                         
                     </div>
                 </div>

                 {/* 2nd row */}


                 <div className="row mt-5">
                     <div className="col-md-6 pt-5">
                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item7}></img>
                                </div>
                                
                            </Carousel.Item>
                            
                            
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                        <img src={Item8}></img>
                                </div>
                                
                            </Carousel.Item>
                          
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item9}></img>
                                </div>
                                
                            </Carousel.Item>
                            </Carousel>
                            <div className="Items_con">
                                    <h3 >Fab Foaming Exfoliating Cleanser</h3>
                                    <h5 className="Item_h pt-2">$15.00</h5>
                                    <p className="pt-2">2-in-1 Cleanser & Exfoliator With Bamboo Buffers</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>



                     </div>
                    
                    
                    
                    
                    
                     <div className="col-md-6 pt-5">

                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item10}></img>
                                </div>

                            </Carousel.Item>
                           
                           
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item11}></img>
                                </div>

                            </Carousel.Item>
                          
                          
                            <Carousel.Item className="caro_div">
                               <div className="Items_img">
                                     <img src={Item12}></img>
                                </div>

                            </Carousel.Item>
                            </Carousel>
                            <div className="Items_con">
                                    <h3 >Eye Got This Under Eye Mask</h3>
                                    <h5 className="Item_h pt-2">$4.00</h5>
                                    <p className="pt-2">Holographic Foil Eye Masks for Dark Circles</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>
                         
                     </div>
                 </div>


                 {/* 3 row */}
                 




            </div>
         </section>
         <div className="empty_div">
                    
                 </div>
            
    
    </>
    )
}
export default Sale;