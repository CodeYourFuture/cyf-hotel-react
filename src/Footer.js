import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <div>
      <p>Copy Right CYF Hotel</p>
      <ul>
        {props.appFooter.map((footer, index) => (
          <li key={index}>{footer}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
