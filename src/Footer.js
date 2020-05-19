import React from "react";
import "./css/Footer.css";
const Footer = props => {
  return (
    <footer>
      <ul>
        {props.contact.map((row, index) => {
          return <li key={index}>{row}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
