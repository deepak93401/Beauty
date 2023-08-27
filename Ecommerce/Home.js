import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Product from "./Product";
import About from "./About";
import Items from "./Items";
import Service from "./Service";
import Des from "./Des";
import Carousel from 'react-bootstrap/Carousel';
import HH1 from "./Eimages/HH1.jpg";
import HH2 from "./Eimages/HH2.jpg";
import HH3 from "./Eimages/HH3.jpg";
import HH4 from "./Eimages/HH4.jpg";
import HH5 from "./Eimages/HH5.jpg";
import HH6 from "./Eimages/HH6.jpg";


function Home()
{
    return(
        <>
          <section id="Home">

                         <Carousel className="Home_item">
                            <Carousel.Item className="Home_div">
                                <div className="Home_img">
                                     <img src={HH1}></img>
                                </div>

                            </Carousel.Item>
                            
                            
                            <Carousel.Item className="caro_div">
                                <div className="Home_img">
                                        <img src={HH2}></img>
                                </div>

                            </Carousel.Item>
                          
                            <Carousel.Item className="caro_div">
                                <div className="Home_img">
                                     <img src={HH3}></img>
                                </div>
                               
                            </Carousel.Item>
                            <Carousel.Item className="caro_div">
                                <div className="Home_img">
                                     <img src={HH4}></img>
                                </div>
                               
                            </Carousel.Item>
                            <Carousel.Item className="caro_div">
                                <div className="Home_img">
                                     <img src={HH5}></img>
                                </div>
                               
                            </Carousel.Item>
                            <Carousel.Item className="caro_div">
                                <div className="Home_img">
                                     <img src={HH6}></img>
                                </div>
                               
                            </Carousel.Item>
                            </Carousel>
                      

       
                           
        
          </section>

          <Product></Product>
        <About></About>
        <Items></Items>
        <Service></Service>
        <Des></Des>
        
        </>
    )
}
export default Home;