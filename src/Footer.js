import React from "react";


const Footer = ({footerInfo}) => {
console.log(footerInfo)   
return (
    <ul className="d-flex justify-content-around">
    {footerInfo.map((info) => {
    return <li key={info}>{info}</li>;
      })}
    </ul>
)
}

export default Footer;