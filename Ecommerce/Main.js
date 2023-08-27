import React from "react";
import Header from "./Header";
import Home from "./Home";
import Bestseller from "./Bestseller";
import Skincare from "./Skincare";
import Bodycare from "./Bodycare";
import Footer from "./Footer";
import "./Main.css";
import "./media.css";
import { Route, Routes } from "react-router-dom";
import Setkit from "./Setkit";
import Sale from "./Sale";
import Formproduct from "./Formproduct/Entry"
import Routine from "./Routine";




function Main()
{
    return(
        <>
        <Header></Header>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Bestseller" element={<Bestseller></Bestseller>}></Route>
            <Route path="/Skincare" element={<Skincare></Skincare>}></Route>
            <Route path="/Bodycare" element={<Bodycare></Bodycare>}></Route>
            <Route path="/Setkit" element={<Setkit></Setkit>}></Route>
            <Route path="/Sale" element={<Sale></Sale>}></Route>
            <Route path="/Routine" element={<Routine></Routine>}></Route>
            <Route path="/Formproduct/entry" element={<Formproduct></Formproduct>}></Route>
        </Routes>

        
        
        <Footer></Footer>

        </>
    )
}
export default Main;