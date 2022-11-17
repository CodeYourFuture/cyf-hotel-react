import React from "react";
const Footer = props => {
  return (
    <ul>
      {props.array.map((prop, index) => {
        return <li key={index}>{prop}</li>;
      })}
      ;
    </ul>
  );
};

export default Footer;
