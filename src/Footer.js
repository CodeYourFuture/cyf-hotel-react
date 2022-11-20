import React from "react";
import "./Footer.css";

const Footer = ({ addressArr }) => {
  return (
    <footer>
      <ul>
        {addressArr.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
