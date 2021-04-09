import React from "react";
import "./App.css";
const Footer = props => {
  return (
    <footer>
      <ul>
        {props.FooterItems.map((elment, index) => (
          <li key={index}>{elment}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
