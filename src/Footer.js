import React from "react";
const Footer = props => {
  return (
    <ul>
      {props.data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default Footer;
