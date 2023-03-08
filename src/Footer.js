import React from "react";

const Footer = (props) => {
return ( 
    <ul style={{marginLeft:"600px", color:"purple",fontSize:"15px"}} className="footer-contact"> 
    {props.contactDetails.map((element,index) => 
    (
       <li key={index}>{element}</li> 
       
    //  Or  <List array={footerElements} />
    ))}
    </ul>

);
};

 export default Footer;