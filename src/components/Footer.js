import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  );
};

export default Footer;
