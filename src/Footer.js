import React from "react";


const Footer = (props) => {
   return (
        <ul style={{marginLeft:"430px", color:"purple",fontSize:"15px"}}>
        {
            props.footerInfo.map((element) => {
             return <li key={element}>{element}</li> 
            })
        }
    </ul>
   )
}
    

export default Footer;