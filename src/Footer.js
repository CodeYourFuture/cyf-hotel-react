import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.Address.map(address => {
        return <li> {address}</li>;
      })}
    </ul>
  );
};

export default Footer;
