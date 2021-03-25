import React from "react";
import "./App.css";
const Footer = props => {
  return (
    <footer>
      <ul>
        {props.FooterItems.map(elment => (
          <li>{elment}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
