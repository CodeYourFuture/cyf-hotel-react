import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.address.map(data => (
        <li>{data}</li>
      ))}
    </ul>
  );
};

export default Footer;
