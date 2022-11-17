import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contactInfo.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  );
};

export default Footer;
