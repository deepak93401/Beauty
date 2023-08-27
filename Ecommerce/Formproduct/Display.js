import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function Display({products,remove,editproduct})
{
    return(
        <>
        <div id="Table">
         <div className="container">
             <div className="row">
                 <div className="col-md-10 m-auto mt-5">

               
          
      <Table responsive="sm">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Product name</th>
            <th> Price</th>
            <th> Quantity</th>
            <th>Description</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Edit</th>
            <th>Remove</th>

          </tr>
        </thead>
        <tbody>
           {products.map((row,index)=>(
               <tr key={index}>
               <td>{index+1}</td>
               <td>{row.proname}</td>
               <td>{row.proprice}</td>
               <td>{row.proquant}</td>
               <td>{row.prodes}</td>
               <td>{row.proaddress}</td>
               <td>{row.procity}</td>
               <td>{row.prostate}</td>
               <td>{row.prozipcode}</td>
               <td><button onClick={()=>editproduct(index)}>Edit</button></td>
               <td><button onClick={()=>remove(index)}>Remove</button></td>
             </tr>
             
           ))}   
         
        
           
          
        </tbody>
      </Table>
      </div>
      </div>
     </div>
     <div>
  </div>
  </div>      
        
        </>
    )
}
export default Display;