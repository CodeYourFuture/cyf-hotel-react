import { useState } from "react";
import React from "react";
import footerData from "./data/footerData.json"
import "../index.css"

const Footer = () => {

    return (
        <> 
        <div className="Footer">       
           {footerData.map((element, index) => (
             <ul>
                <li key={index}> {element} </li>
            </ul>
           )
           )}
           </div>
        </> 
    )
}

export default Footer;
