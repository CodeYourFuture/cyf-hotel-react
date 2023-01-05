import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.list.map((elem, index) => (
        <li key={index}>{elem}</li>
      ))}
    </ul>
  );
};

export default Footer;
