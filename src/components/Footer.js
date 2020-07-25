import React from "react";
import "./Footer.css";

const Footer = ({ hotelInfo }) => (
  <footer className="app-footer">
    <ul>
      {hotelInfo.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </footer>
);

export default Footer;
