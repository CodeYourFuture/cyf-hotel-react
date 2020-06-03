import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.footerProps.map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
};

export default Footer;
