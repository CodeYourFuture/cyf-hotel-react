import React from "react";
const Footer = props => {
  return (
    <ul>
      {props.footerItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
