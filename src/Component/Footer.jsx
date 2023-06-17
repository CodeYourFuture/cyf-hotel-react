import React from "react";
import "../index.css"




const Footer = props =>{

    // console.log("this is the props " + {props.greeting})
 
    return(
        <>
            <div className="footer-container">
                
                {props.data.map((element, index) => (
                    <ul>
                    <li key={index}>{element} </li>
                    </ul>
                ))}
            </div>
        </>
    )

}

export default Footer;