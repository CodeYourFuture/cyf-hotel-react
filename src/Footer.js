import React from "react";

const Footer = props => (
  <footer>
    <ul className="footer">
      {props.contact.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  </footer>
);

export default Footer;
