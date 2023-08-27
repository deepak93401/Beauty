import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import Item1 from "./Eimages/DD1.jpg";
import Item2 from "./Eimages/DD2.jpg";
import Item3 from "./Eimages/DD3.jpeg";
import Item4 from "./Eimages/DD4.jpeg";
import Item5 from "./Eimages/DD5.jpeg";
import Item6 from "./Eimages/DD6.jpg";

import Item7 from "./Eimages/DD7.jpeg";
import Item8 from "./Eimages/DD8.jpg";
import Item9 from "./Eimages/DD9.jpeg";
import Item10 from "./Eimages/DD10.jpg";
import Item11 from "./Eimages/DD11.jpeg";
import Item12 from "./Eimages/DD12.jpeg";

import Item13 from "./Eimages/DD13.jpeg";
import Item14 from "./Eimages/DD14.jpeg";
import Item15 from "./Eimages/DD15.jpeg";
import Item16 from "./Eimages/DD16.jpeg";
import Item17 from "./Eimages/DD17.jpeg";
import Item18 from "./Eimages/DD18.jpeg";



function Setkit()
{
    return(
    <>
                      <section id="Items">
            <div className="container">
                {/* text center */}

                  <div className="text-center mt-5 pt-5">
                     <h2>SET & KITS</h2>
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
                 <div className="row mt-5">
                     <div className="col-md-6 pt-5">
                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item13}></img>
                                </div>

                            </Carousel.Item>
                            
                            
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                        <img src={Item14}></img>
                                </div>

                            </Carousel.Item>
                          
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item15}></img>
                                </div>

                            </Carousel.Item>
                            </Carousel>
                            <div className="Items_con">
                                    <h3 >Let’s Be Clear Skincare Kit</h3>
                                    <h5 className="Item_h pt-2">$35.00</h5>
                                    <p className="pt-2">Clinically Proven Acne-Fighting Set</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>
                         

                     </div>
                    
                    
                    
                    
                    
                     <div className="col-md-6 pt-5">

                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item16}></img>
                                </div>

                            </Carousel.Item>
                           
                           
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item17}></img>
                                </div>

                            </Carousel.Item>
                          
                          
                            <Carousel.Item className="caro_div">
                               <div className="Items_img">
                                     <img src={Item18}></img>
                                </div>

                            </Carousel.Item>
                            </Carousel>
                            <div className="Items_con">
                                    <h3 >Makeup Melt Oil Free Makeup Wipes</h3>
                                    <h5 className="Item_h pt-2">$7.00</h5>
                                    <p className="pt-2">Oil-free Makeup Remover Wipes</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>
                         
                     </div>
                 </div>

                 {/* 4th row */}




            </div>
         </section>
         <div className="empty_div">
                    
                 </div>
            
    
    </>
    )
}
export default Setkit;