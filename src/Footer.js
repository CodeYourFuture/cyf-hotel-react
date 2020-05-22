import React from "react";
import "./App.css";

const Footer = props => {
  return (
    <ul className="footerAdress">
      {props.contactInfo.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};
export default Footer;
