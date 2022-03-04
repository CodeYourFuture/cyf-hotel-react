import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.address.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Footer;
