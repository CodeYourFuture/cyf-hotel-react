import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contacts.map((contact, index) => (
        <li key={index}>{contact}</li>
      ))}
    </ul>
  );
};

export default Footer;
