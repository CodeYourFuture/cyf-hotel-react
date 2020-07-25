import React from "react";

const Footer = props => (
  <ul>
    {props.info.map(data => {
      return <li>{data}</li>;
    })}
  </ul>
);

export default Footer;
