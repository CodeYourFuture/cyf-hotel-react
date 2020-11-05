import React from "react";
import "./index.css";

const Footer = prop => {
  return (
    <footer>
      <ul>
        {prop.AboutUs.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
