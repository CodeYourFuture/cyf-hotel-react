import React from "react";

const Footer = props => (
  <ul>
    {props.contactDetails.map((contact, index) => (
      <li key={index}>{contact}</li>
    ))}
  </ul>
);

export default Footer;
