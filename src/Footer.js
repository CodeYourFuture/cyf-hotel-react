import React from "react";

const Footer = props => (
  <ul className="footer">
    {props.contact.map((info, index) => (
      <li key={index}>{info}</li>
    ))}
  </ul>
);

export default Footer;
