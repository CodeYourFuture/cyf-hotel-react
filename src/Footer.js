import React from "react";

const Footer = props => (
  <ul>
    {props.address.map((arrElem, index) => (
      <li key={index}>{arrElem} </li>
    ))}
  </ul>
);

export default Footer;
