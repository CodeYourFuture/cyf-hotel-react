import React from "react";
const Footer = (props) => {
 return (
    <ul className="nobullets">
      {props.footerText.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default Footer;