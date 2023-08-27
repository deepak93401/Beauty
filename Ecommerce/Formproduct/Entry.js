import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./Display";



function Entry()
{
    
    const [products,setproducts]=useState([]);
    const [productindex,setproductindex]=useState();

    const productentery =(event)=>
    {
      event.preventDefault();
        let [proname,proprice,proquant,prodes,proaddress,procity,prostate,prozipcode]=event.target;
        let product=
        {
           proname:proname.value,
           proprice:proprice.value,
           proquant:proquant.value,
           prodes:prodes.value,
           proaddress:proaddress.value,
           procity:procity.value,
           prostate:prostate.value,
           prozipcode:prozipcode.value,

        }
        setproducts([...products,product])
        event.target.reset();

    }

    const remove=(index)=>
    {
       products.splice(index,1)
       setproducts([...products])  
    }

       const editproduct = (index)=>

       {
            let productform = document.forms["productforms"];

            productform.proname.value = products[index].proname;
            productform.proprice.value = products[index].proprice;
            productform.proquant.value = products[index].proquant;
            productform.prodes.value = products[index].prodes;
            productform.proaddress.value  = products[index].proaddress;
            productform.procity.value = products[index].procity;
            productform.prostate.value = products[index].prostate;
            productform.prozipcode.value = products[index].prozipcode;

            
            setproductindex(index)

       }

       const updatedata = ()=>
       {
          let productform = document.forms["productforms"]

          let product =
          {
              proname: productform.proname.value,
              proprice: productform.proprice.value,
              proquant: productform.proquant.value,
              prodes: productform.prodes.value,
              proaddress: productform.proaddress.value,
              procity: productform.procity.value,
              prostate: productform.prostate.value,
              prozipcode:productform.prozipcode.value,

          }
          products.splice(productindex,1,product)
          setproductindex([...products])
       }

    
    
   
   return(
        <>
        <section className="form">
          <div className="container">
             <div className="row">
                    <div className="col-md-8 m-auto">


            <Form name="productforms" onSubmit={(event)=>productentery(event)}>
      <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Prodcut Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name"  name="proname"/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" placeholder="Price" name="proprice" />
        </Form.Group>

      </Row>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Prodcut quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" name="proquant" />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" placeholder="Description" name="prodes" />
        </Form.Group>

</Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="1234 Main St" name="proaddress" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="procity"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." type="state" name="prostate">
            <option>Choose...</option>
            <option>M.P</option>
            <option>U.p</option>
            <option>Rajsthan</option>
            <option>Gujrat</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text"  name="prozipcode"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button className="Form_btn" type="submit">
        Submit
      </Button>
      <Button className="Form_btn" type="button"  onClick={(event)=>updatedata(event)}>
        update
      </Button>
    </Form>

         </div>
                 
          </div>
    </div>
    <Display products={products} remove={remove} editproduct={editproduct}></Display>
    </section>

    

          
        </>
    )
}
export default Entry;