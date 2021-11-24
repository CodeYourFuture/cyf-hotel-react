import React from "react";

const Footer = ({ location }) => (
  <div id="footer">
    <h2 id="footer-header">Our location...</h2>
    <ul>
      {location.map((line, index) => (
        <li key={"line" + index}>{line}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
