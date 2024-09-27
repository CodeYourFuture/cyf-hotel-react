import React from "react";

const Footer = prop => (
  <footer className="footer">
    <ul>
      {prop.address.map((el, ind) => (
        <li key={ind}>{el}</li>
      ))}
    </ul>
  </footer>
);

export default Footer;
