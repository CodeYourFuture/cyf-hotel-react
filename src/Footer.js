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
      <p>© CYF Hotel 2017-2020</p>
    </footer>
  );
};

export default Footer;
