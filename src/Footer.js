import React from "react";
const Footer = (props) => {
 return (
    <ul className="nobullets">
      {props.footerText.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
};

export default Footer;