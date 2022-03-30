import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contact.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
