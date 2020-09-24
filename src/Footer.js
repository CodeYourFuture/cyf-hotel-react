import React from "react";
const Footer = ({ props }) => {
  return (
    <ul>
      {props.map(El => (
        <li>{El}</li>
      ))}
    </ul>
  );
};
export default Footer;
