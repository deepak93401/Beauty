import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function  About()
{
    return(
        <>
          <section id="About">
             <div className="About_img1">
             <div className="About_con">
                                   <h2>THE BRIGHT IDEA<br></br> COLLECTION</h2>
                                   <p>Boost brightness & elasticity in 1 use<br></br> with clinical-grade Vitamin C.</p>
                                   <Button className="About_btn">Shop Block Star</Button>{' '}
                                 </div>   
             </div>
             <div className="About_img2">

             </div>
          </section>
        </>
    )
}
export default About;