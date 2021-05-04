import React from "react";

const Footer = props => (
  <ul>
    {props.info.map((data, index) => {
      return <li key={index}>{data}</li>;
    })}
  </ul>
);

export default Footer;
