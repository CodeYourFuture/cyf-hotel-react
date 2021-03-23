import React from "react";

const Footer = props => (
  <ul className="App-footer">
    {props.footerItems.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default Footer;
