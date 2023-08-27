import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Item1 from "./Eimages/AS1.jpg";
import Item2 from "./Eimages/AS2.jpeg";
import Item3 from "./Eimages/AS3.jpeg";
import Item4 from "./Eimages/BS1.jpg";
import Item5 from "./Eimages/BS2.jpeg";
import Item6 from "./Eimages/BS3.jpeg";

import Item7 from "./Eimages/CS1.jpg";
import Item8 from "./Eimages/CS@.jpg";
import Item9 from "./Eimages/CS3.jpeg";
import Item10 from "./Eimages/DS1.jpeg";
import Item11 from "./Eimages/DS2.jpg";
import Item12 from "./Eimages/DS3.jpeg";

import Item13 from "./Eimages/ES1.jpg";
import Item14 from "./Eimages/ES2.jpeg";
import Item15 from "./Eimages/ES3.jpeg";
import Item16 from "./Eimages/FS1.jpg";
import Item17 from "./Eimages/FS2.jpg";
import Item18 from "./Eimages/FS3.jpg";

import Item19 from "./Eimages/GS1.jpg";
import Item20 from "./Eimages/GS2.jpeg";
import Item21 from "./Eimages/GS3.jpeg";
import Item22 from "./Eimages/HS1.jpg";
import Item23 from "./Eimages/HS2.jpeg";
import Item24 from "./Eimages/HS3.jpg";


function Bestseller()
{
    return(
        <>
            <section id="Items">
            <div className="container">
                {/* text center */}

                  <div className="text-center mt-5 pt-5">
                     <h2>SKIN AND BODY BEST SELLERS</h2>
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
                                    <h3 >Lemon & Sage Body Butter</h3>
                                    <h5 className="Item_h pt-2">$15</h5>
                                    <p className="pt-2">2-in-1 Cleanser & Exfoliator With Bamboo Buffers</p>
                               <a href="Formproduct/Entry"> <button className="Addcard" >ADD TO CARD</button></a> 
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
                                    <a href="Formproduct/Entry">  <button className="Addcard">ADD TO CARD</button></a>
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
                                    <a href="Formproduct/Entry"><button className="Addcard">ADD TO CARD</button></ a>
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

                 <div className="row mt-5">
                     <div className="col-md-6 pt-5">
                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item19}></img>
                                </div>
                               
                            </Carousel.Item>
                            
                            
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                        <img src={Item20}></img>
                                </div>
                               
                            </Carousel.Item>
                          
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item21}></img>
                                </div>

                            </Carousel.Item>
                            </Carousel>

                            <div className="Items_con">
                                    <h3 >Fabulips Overnight Lip Mask</h3>
                                    <h5 className="Item_h pt-2">$22.00</h5>
                                    <p className="pt-2">Vegan Lip Mask</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>
                     </div>
                    
                    
                    
                    
                    
                     <div className="col-md-6 pt-5">

                     <Carousel className="caro_item m-auto">
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item22}></img>
                                </div>

                            </Carousel.Item>
                           
                           
                            <Carousel.Item className="caro_div">
                                <div className="Items_img">
                                     <img src={Item23}></img>
                                </div>

                            </Carousel.Item>
                          
                          
                            <Carousel.Item className="caro_div">
                               <div className="Items_img">
                                     <img src={Item24}></img>
                                </div>

                            </Carousel.Item>
                            </Carousel>

                            <div className="Items_con">
                                    <h3 >Bright Idea Moisturizer</h3>
                                    <h5 className="Item_h pt-2">$32.00</h5>
                                    <p className="pt-2">Vitamin C + Tri-Peptide Collagen Protecting</p>
                                    <a href="Formproduct/Entry"> <button className="Addcard">ADD TO CARD</button></a>
                            </div>
                     </div>
                 </div>


            </div>
            <div className="empty_div"></div>
         </section>
        </>
    )
}
export default Bestseller;