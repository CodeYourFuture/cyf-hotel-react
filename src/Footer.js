import React from "react";

const Footer = props => (
  <ul className="App-footer">
    {props.footerItems.map(item => (
      <li>{item}</li>
    ))}
  </ul>
);

export default Footer;
