import React from "react";

const Footer = (props) =>{
 return (
   <ul className="contact-container">
     {props.contact.map((lineString) => {
       return <li key={lineString}>{lineString}</li>;
     })}
   </ul>
 );
};

export default Footer;